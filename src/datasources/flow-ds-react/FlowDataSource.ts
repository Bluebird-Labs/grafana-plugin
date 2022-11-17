import { DataQueryResponse, DataSourceApi, DataSourceInstanceSettings } from '@grafana/data';
import { ClientDelegate } from 'lib/client_delegate';
import { SimpleOpenNMSRequest } from 'lib/utils';
import { FlowStrings } from './constants';
import { buildFullQueryData, checkForTableSummary, extractDataFromQuery, queryOpenNMS } from './helpers';
import { FlowDataSourceOptions, FlowQuery, FlowQueryRequest } from './types';

export class FlowDataSource extends DataSourceApi<FlowQuery> {
    type: string;
    url?: string | undefined;
    name: string;
    client: ClientDelegate;
    simpleRequest: SimpleOpenNMSRequest;

    constructor(instanceSettings: DataSourceInstanceSettings<FlowDataSourceOptions>, public backendSrv: any, public templateSrv: any) {
        super(instanceSettings);
        this.type = instanceSettings.type;
        this.url = instanceSettings.url;
        this.name = instanceSettings.name;
        this.client = new ClientDelegate(instanceSettings, backendSrv);
        this.simpleRequest = new SimpleOpenNMSRequest(backendSrv, this.url);
    }

    async query(options: FlowQueryRequest<FlowQuery>): Promise<DataQueryResponse> {
        const partialQueryData = extractDataFromQuery(options.targets)
        const fullQueryData = buildFullQueryData(partialQueryData);
        const { allAreSummaries } = checkForTableSummary(fullQueryData)
        const type = allAreSummaries ? FlowStrings.summaries : FlowStrings.series;
        return queryOpenNMS(fullQueryData, options, type, this.client);
    }

    async testDatasource(): Promise<any> {
        let response = { status: '', message: '' }
        try {
            await this.client.getClientWithMetadata();
            response = { status: FlowStrings.SuccessStatus, message: FlowStrings.Success }
        } catch (e) {
            response = { status: FlowStrings.FailureStatus, message: e as string }
            console.error(e);
        }
        return response
    }
}