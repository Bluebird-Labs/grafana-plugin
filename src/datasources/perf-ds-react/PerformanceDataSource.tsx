import { DataFrame, DataQueryResponse, DataSourceApi, DataSourceInstanceSettings } from "@grafana/data";
import { ClientDelegate } from "lib/client_delegate";
import { SimpleOpenNMSRequest } from "lib/utils";
import { PerformanceTypeOptions } from "./constants";
import { measurementResponseToDataFrame } from "./PerformanceHelpers";
import {
    OnmsMeasurementsQuerySource,
    PerformanceDataSourceOptions,
    PerformanceQuery,
    PerformanceQueryRequest
} from "./types";
import { collectInterpolationVariables, interpolate } from "./queries/interpolate";
import {
    buildAttributeQuerySource,
    buildExpressionQuery,
    buildFilterQuery,
    buildPerformanceMeasurementQuery,
    isValidAttributeTarget,
    isValidExpressionTarget,
    isValidFilterTarget,
    isValidMeasurementQuery
} from "./queries/queryBuilder";
import { queryStringProperties } from "./queries/queryStringProperties"

export class PerformanceDataSource extends DataSourceApi<PerformanceQuery> {
    type: string;
    url?: string | undefined;
    name: string;
    client: ClientDelegate;
    simpleRequest: SimpleOpenNMSRequest;

    constructor(instanceSettings: DataSourceInstanceSettings<PerformanceDataSourceOptions>, public backendSrv: any, public templateSrv: any) {
        super(instanceSettings);
        this.type = instanceSettings.type;
        this.url = instanceSettings.url;
        this.name = instanceSettings.name;
        this.client = new ClientDelegate(instanceSettings, backendSrv);
        this.simpleRequest = new SimpleOpenNMSRequest(backendSrv, this.url);
    }

    isQueryValidStringPropertySearch = (targets: PerformanceQuery[]) => {
        const totalStrings = targets.filter((d) =>
            d.performanceType.value === PerformanceTypeOptions.StringProperty.value && d.performanceState?.stringProperty?.value)
        let typeOfQuery = 'normal'

        if (totalStrings.length > 0 && totalStrings.length === targets.length) {
            typeOfQuery = 'string'
        } else if (totalStrings.length > 0 && totalStrings.length < targets.length) {
            typeOfQuery = 'invalid'
        }
        return typeOfQuery;
    }

    async stringPropertySearch(request: PerformanceQueryRequest<PerformanceQuery>) {
        return queryStringProperties(this.client, this.simpleRequest, this.templateSrv, request)
    }

    async query(options: PerformanceQueryRequest<PerformanceQuery>): Promise<DataQueryResponse> {
        const searchType = this.isQueryValidStringPropertySearch(options?.targets);
 
        if (searchType === 'string') {
            return this.stringPropertySearch(options);
        } else if (searchType === 'invalid') {
            throw new Error('string property queries cannot be mixed with other kinds of queries')
        }

        const maxDataPoints = options.maxDataPoints || 300;
        const intervalMs = options.intervalMs || 60 * 1000;

        const start = options.range.from.valueOf();
        const end = options.range.to.valueOf();
        let step = Math.floor((end - start) / maxDataPoints);
        step = (step < intervalMs) ? intervalMs : step;

        var query = buildPerformanceMeasurementQuery(start, end, step, maxDataPoints)

        // TODO: Not sure if 'labels' is being used, keeping here for now
        // @ts-ignore
        // eslint-disable-next-line no-unused-vars
        let labels = [] as string[]
        let dataFrames: DataFrame[] = []

        for (let i = 0; i < options.targets.length; i++) {
            const target = options.targets[i];

            if (target.performanceType?.value === PerformanceTypeOptions.Attribute.value) {
                if (isValidAttributeTarget(target)) {
                    const source = buildAttributeQuerySource(target);

                    const interpolationVars = collectInterpolationVariables(this.templateSrv, options.scopedVars)
                    const attributes = ['nodeId', 'resourceId', 'attribute', 'datasource', 'label']

                    const callback = (interpolatedSource: OnmsMeasurementsQuerySource) => {
                        if (interpolatedSource.nodeId) {
                            // Calculate the effective resource id after the interpolation
                            interpolatedSource.resourceId = this.getRemoteResourceId(interpolatedSource.nodeId, interpolatedSource.resourceId);
                            delete interpolatedSource.nodeId;
                        }
                    }

                    const sources = interpolate(source, attributes, interpolationVars, callback)
                    query.source = sources
                    labels = query.source.map(s => s.label)
                }
            } else if (target.performanceType?.value === PerformanceTypeOptions.Expression.value) {
                if (isValidExpressionTarget(target)) {
                    const expression = buildExpressionQuery(target, i);

                    const interpolationVars = collectInterpolationVariables(this.templateSrv, options.scopedVars)
                    const attributes = ['value', 'label']

                    const expressions = interpolate(expression, attributes, interpolationVars)
                    query.expression = expressions

                    labels = query.expression.map(e => e.label)
                }
            } else if (target.performanceType?.value === PerformanceTypeOptions.Filter.value) {
                if (isValidFilterTarget(target)) {
                    const interpolationVars = collectInterpolationVariables(this.templateSrv, options.scopedVars)

                    const attributes = Object.keys(target.filterState)
                    const interpolatedFilterParams = interpolate(target.filterState, attributes, interpolationVars)

                    const filters = buildFilterQuery(target, interpolatedFilterParams)

                    // Only add the filter attribute to the query when one or more filters are specified since
                    // OpenNMS versions before 17.0.0 do not support it
                    if (filters.length > 0) {
                        if (!query.filter) {
                            query.filter = filters;
                        } else {
                            query.filter = query.filter.concat(filters);
                        }
                    }
                }
            }

            if (isValidMeasurementQuery(query)) {
                const response = await this.simpleRequest.doOpenNMSRequest({
                    url: '/rest/measurements',
                    data: query,
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                });

                try {
                    // convert to DataFrame format
                    const dataFrame = measurementResponseToDataFrame(response.data, target.refId)
                    dataFrames.push(dataFrame)
                } catch (e) {
                    console.error(e);
                }
            }
        }

        return { data: dataFrames } as DataQueryResponse
    }

    async metricFindQuery(query, options) {
        let queryResults: Array<{ text: string, value: string }> = []

        return queryResults
    }

    async testDatasource(): Promise<any> {
        console.log('Testing the data source!');
        try {

            const metadata = await this.client.getClientWithMetadata();
            console.log('Testing the data source1!', metadata);
        } catch (e) {
            console.log('CAUGHT!', e);
        }
        return { status: 'success', message: 'Success' }
    }

    getRemoteResourceId(nodeId: string, resourceId: string) {
        const prefix = nodeId.indexOf(':') >= 0 ? 'nodeSource' : 'node'

        return `${prefix}[${nodeId}].${resourceId}`
    }
}