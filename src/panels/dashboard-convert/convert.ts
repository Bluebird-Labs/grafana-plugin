import { DataSourceInstanceSettings, DataSourceJsonData } from '@grafana/data'
import { getDataSourceSrv } from '@grafana/runtime'
import { isString } from 'lodash'
import { OnmsEntityNestType, OnmsEntityType } from '../../datasources/entity-ds/types'
import { getColumns } from '../../datasources/entity-ds/EntityHelper'
import { getAttributeMapping } from '../../datasources/entity-ds/queries/attributeMappings'
import { PerformanceQuery, StringPropertyQuery } from '../../datasources/perf-ds/types'
import { PerformanceTypeOptions } from '../../datasources/perf-ds/constants'

interface ConvertResponse {
  json: string
  isError: boolean
  errorMessage?: string
}

interface ConvertOptions {
  unhideAllQueries: boolean
}

type DsType = 'entity' | 'performance' | 'flow'

interface DatasourceMetadata {
  /** Human-friendly name of datasource, e.g. "OpenNMS Entity" */
  name: string

  /** Grafana integer id of this datasource */
  id: number

  /** Grafana uid of this datasource, e.g. "xT5Xzsq7z" */
  uid: string

  /** e.g. 'opennms-entity-datasource */
  type: string

  /** raw version string, from plugin.json info.version
   * probably '9' for Version 9.x, '' for anything previous */
  version: string

  /** e.g. 8 or 9 */
  pluginVersion: number

  /** 'entity', 'performance', 'flow' */
  datasourceType?: DsType
}

// Datasource info found in panel or target/query
interface SourceDatasourceInfo {
  isOpenNmsDatasource: boolean
  isTemplateVariable: boolean
  datasourceType: string
}

// returns a string which is one of the DsTypes or else empty string, and
// whether this is a "legacy" datasource or not (legacy is version < 9)
const getDatasourceTypeFromPluginId = (pluginId: string) => {
  const legacyMatch = pluginId.match(/^opennms-helm-([^-]+)-datasource$/i)

  if (legacyMatch && legacyMatch.length > 0) {
    return {
      isLegacy: true,
      datasourceType: legacyMatch[1]
    }
  }

  const m = pluginId.match(/^opennms-([^-]+)-datasource$/i)

  if (m && m.length > 0) {
    return {
      isLegacy: false,
      datasourceType: m[1]
    }
  }

  return {
    isLegacy: false,
    datasourceType: ''
  }
}

// Get datasource info from either a panel or a target
const getSourceDatasourceInfo = (source: any, datasourceMap: Map<string,DsType>): SourceDatasourceInfo => {
  if (source && source.datasource) {
    if (isString(source.datasource) && datasourceMap.has(source.datasource)) {
      const dsType = datasourceMap.get(source.datasource) || ''

      return {
        isOpenNmsDatasource: true,
        isTemplateVariable: true,
        datasourceType: dsType
      }
    } else if (!isString(source.datasource) && source.datasource?.type) {
      const { datasourceType } = getDatasourceTypeFromPluginId(source.datasource.type)

      if (datasourceType) {
        return {
          isOpenNmsDatasource: true,
          isTemplateVariable: false,
          datasourceType
        }
      }
   }
  }

  return {
    isOpenNmsDatasource: false,
    isTemplateVariable: false,
    datasourceType: ''
  }
}

// extract metadata info we care about from datasourceSrv.getList() call
const getDatasourceMetadata = (data: Array<DataSourceInstanceSettings<DataSourceJsonData>>) => {
  const metas: DatasourceMetadata[] = []

  for (const ds of data) {
    if (ds.type && ds.type.startsWith('opennms-')) {
      const meta = {
        name: ds.name,
        id: ds.id,
        uid: ds.uid,
        type: ds.type,
        version: ds.meta?.info?.version || '',
        pluginVersion: 8,
        datasourceType: undefined
      } as DatasourceMetadata

      if (meta.version) {
        const arr = meta.version.split('.')
        if (arr && arr.length > 0) {
          meta.pluginVersion = parseInt(arr[0], 10)
        }
      }

      const { datasourceType } = getDatasourceTypeFromPluginId(meta.type || '')

      if (datasourceType) {
        meta.datasourceType = datasourceType as DsType
        metas.push(meta)
      }
    }
  }

  return metas
}

export const dashboardConvert = (sourceJson: string, sourceVersion: string, targetVersion: string,
  options: ConvertOptions): ConvertResponse => {
  let source: any = {}
  
  const dsSrv = getDataSourceSrv()
  const datasources = dsSrv.getList()
  const dsMetas = getDatasourceMetadata(datasources)

  try {
    source = JSON.parse(sourceJson)
  } catch (e: any) {
    return {
      json: '',
      isError: true,
      errorMessage: `Error parsing source Json: ${e.message || '(unknown)'}`
    }
  }

  const target: any = {
    ...source
  }

  // find all datasource aliases / template variables
  const datasourceMap = new Map<string,DsType>()
  const inputsArray = source['__inputs'] || []

  const parsedInputs = parseInputs(inputsArray, datasourceMap, dsMetas)
  target['__inputs'] = parsedInputs

  const templating = source['templating'] || {}
  const parsedTemplating = parseTemplating(templating, datasourceMap, dsMetas)
  target.templating = parsedTemplating

  const panels = source.panels || []
  const parsedPanels = parsePanels(panels, datasourceMap, dsMetas, options.unhideAllQueries)
  target.panels = parsedPanels

  const targetJson = JSON.stringify(target, null, 2)

  return {
    json: targetJson,
    isError: false
  }
}

// Parse the Dashboard '__inputs' section, extracting any Datasource mappings and
// updating those items to use Version 9 versions
// The 'name' is the name of the variable which may be used elsewhere in queries
// The 'pluginId' should be the datasource ID
// We convert this to use the Version 9 versions, plus save off the variable in the map
// to substitute elsewhere
//
// "__inputs": [
//   {
//     "name": "DS_OPENNMS_PERFORMANCE",
//     "label": "OpenNMS Performance",
//     "description": "",
//     "type": "datasource",
//     "pluginId": "opennms-helm-performance-datasource",
//     "pluginName": "OpenNMS Performance"
//   }
// ]
const parseInputs = (source: any[], datasourceMap: Map<string,DsType>, dsMetas: DatasourceMetadata[]) => {
  const results: any[] = []

  for (const s of source) {
    if (s.type === 'datasource' && s.pluginId && s.pluginId.startsWith('opennms-')) {
      const target = { ...s }
      const name = s.name
      const pluginId = s.pluginId

      if (name && pluginId) {
        // find corresponding v9 datasource info and substitute
        const { datasourceType } = getDatasourceTypeFromPluginId(pluginId)
        let dsMeta = dsMetas.find(d => d.datasourceType && d.datasourceType === datasourceType && d.pluginVersion === 9)

        if (!dsMeta) {
          console.log(`Dashboard convert: did not find Version 9 datasource for '${datasourceType}', falling back to first available:`)
          dsMeta = dsMetas.find(d => d.datasourceType && d.datasourceType === datasourceType)
        }

        if (dsMeta) {
          addVariationsToMap(name, datasourceType as DsType, datasourceMap)
          target.label = dsMeta.name
          target.pluginId = dsMeta.type
          target.pluginName = dsMeta.name

          results.push(target)
          continue
        }
      }
    }

    // was not an OpenNms datasource, or we couldn't find a substitute, so just pass it through
    results.push(s)
  }

  return results
}

// Parse the Dashboard 'templating' section, extracting any Datasource mappings and
// updating those items to use Version 9 versions
// The 'name' is the name of the template variable which may be used elsewhere in queries
// The 'query' should be the datasource ID
// We convert this to use the Version 9 versions, plus save off the variable in the map
// to substitute elsewhere
//
// "templating": {
//   "list": [
//     {
//       "current": {
//         "selected": true,
//         "text": "OpenNMS Performance",
//         "value": "OpenNMS Performance"
//       },
//       "hide": 2,
//       "includeAll": false,
//       "label": null,
//       "multi": false,
//       "name": "datasource",
//       "options": [],
//       "query": "opennms-helm-performance-datasource",
//       "refresh": 1,
//       "regex": "",
//       "skipUrlSync": false,
//       "type": "datasource"
//     },
//   ...
//   ]
// }
const parseTemplating = (source: any, datasourceMap: Map<string,DsType>, dsMetas: DatasourceMetadata[]) => {
  const result = {
    list: [] as any[]
  }

  const sourceList: any[] = source?.list || []

  for (const s of sourceList) {
    if (s.type === 'datasource' && s.query && s.query.startsWith('opennms')) {
      const target = { ...s }
      const name = s.name
      const pluginId = s.query

      // find corresponding Version 9 datasource info and substitute
      const { datasourceType } = getDatasourceTypeFromPluginId(pluginId)
      let dsMeta = dsMetas.find(d => d.datasourceType && d.datasourceType === datasourceType && d.pluginVersion === 9)

      if (!dsMeta) {
        console.log(`Dashboard convert: did not find Version 9 datasource for '${datasourceType}', falling back to first available:`)
        dsMeta = dsMetas.find(d => d.datasourceType && d.datasourceType === datasourceType)
      }

      if (dsMeta) {
        addVariationsToMap(name, datasourceType as DsType, datasourceMap)
        target.query = dsMeta.type

        if (s.current) {
          target.current.text = dsMeta.name
          target.current.value = dsMeta.name
        }

        result.list.push(target)
        continue
      }
    } else if (s.type === 'query') {
      const sourceDsInfo = getSourceDatasourceInfo(s, datasourceMap)

      if (sourceDsInfo.isOpenNmsDatasource && !sourceDsInfo.isTemplateVariable && sourceDsInfo.datasourceType) {
        const sourceDsMeta = dsMetas.find(d => d.datasourceType === sourceDsInfo.datasourceType && d.pluginVersion === 9)

        if (sourceDsMeta) {
          s.datasource = {
            type: sourceDsMeta.type,
            uid: sourceDsMeta.uid
          }
        }
      }
    }

    // was not an OpenNms datasource query, or we couldn't find a substitute, so just pass it through
    // or we fell through from 'query' block
    result.list.push(s)
  }

  return result
}

// Parse Dashboard panels
// If panel has a legacy datasource, convert the query to use the new schema
const parsePanels = (panels: any[], datasourceMap: Map<string, DsType>, dsMetas: DatasourceMetadata[],
  unhideAllQueries: boolean) => {
  const result: any[] = []

  for (const p of panels) {
    const panel = { ...p }

    // p.datasource could be:
    // - a template variable like '$datasource' which points to an OpenNMS DS
    //    in which case we leave as-is
    // - an object like { type, uid }, which points to an OpenNMS DS, in which case we update it to version 9
    // - either of those which points to a non-OpenNMS DS, in which case leave as-is
    // - empty/null/undefined, in which case DS should be in the individual targets, leave as-is
    const panelDsInfo = getSourceDatasourceInfo(panel, datasourceMap)

    if (panelDsInfo.isOpenNmsDatasource && !panelDsInfo.isTemplateVariable && panelDsInfo.datasourceType) {
      const panelDsMeta = dsMetas.find(d => d.datasourceType === panelDsInfo.datasourceType && d.pluginVersion === 9)

      if (panelDsMeta) {
        panel.datasource = {
          type: panelDsMeta.type,
          uid: panelDsMeta.uid
        }
      }
    }

    if (p.targets) {
      const targets: any[] = []

      for (const t of p.targets) {
        let updated = { ...t }

        const targetDsInfo = getSourceDatasourceInfo(t, datasourceMap)
        const isOpenNmsDatasource = panelDsInfo.isOpenNmsDatasource || targetDsInfo.isOpenNmsDatasource
        const dsType = panelDsInfo.datasourceType || targetDsInfo.datasourceType

        if (isOpenNmsDatasource) {
          switch (dsType) {
            case 'entity':
              updated = updateEntityQuery(t)
              break
            case 'performance':
              updated = updatePerformanceQuery(t)
              break
            case 'flow':
              updated = updateFlowQuery(t)
              break
            default:
              break
          }

          if (unhideAllQueries) {
            updated.hide = false
          }

          if (targetDsInfo.isOpenNmsDatasource && !targetDsInfo.isTemplateVariable && targetDsInfo.datasourceType) {
            const targetDsMeta = dsMetas.find(d => d.datasourceType === targetDsInfo.datasourceType && d.pluginVersion === 9)

            if (targetDsMeta) {
              updated.datasource = {
                type: targetDsMeta.type,
                uid: targetDsMeta.uid
              }
            }
          }
        }

        targets.push(updated)
      }

      // TODO: if p.datasource is a pluginId

      panel.targets = targets
    }

    // recursively process panel panels
    if (p.panels) {
      panel.panels = parsePanels(p.panels, datasourceMap, dsMetas, unhideAllQueries)
    }

    result.push(panel)
  }

  return result
}

// Legacy Entity target looks something like this:
// {
//   "datasource": {
//     "type": "opennms-helm-entity-datasource",
//     "uid": "IeFyksx4k"
//   },
//   "entityType": {
//     "id": "node",
//     "label": "Nodes",
//     "queryFunction": "nodes"
//   },
//   "filter": {
//     "clauses": [],
//     "limit": 0,
//     "orderBy": []
//   },
//   "limit": 0,
//   "orderBy": [],
//   "refId": "A"
// }
//
const updateEntityQuery = (source: any) => {
  // Note, target.datasource will be set in caller
  let target: any = { ...source }

  target.selectType = {
    label: target.entityType?.label
  }

  // attribute.value should be something like this:
  // However, legacy may only have the label or id
  // we may need to make calls to get the name; perhaps use attribute mapping to get id
  // {
  //   id: "category.name",
  //   label: "category",
  //   name: "Category: Name",
  // }

  const columns = getColumns(target.entityType.label)

  target.clauses = (target.filter?.clauses || []).map((c, i) => {
    const attrLabel = c.restriction.attribute // 'label'
    const attrId = getAttributeMapping(target.selectType, attrLabel)
    const attrName = columns.find(col => col.resource === attrLabel)?.text || attrLabel // 'Label'

    // Confirm this logic
    let entityType = i === 0 ? OnmsEntityType.FIRST : OnmsEntityType.AND

    if (i !== 0 && c.operator?.id && c.operator.id >= 0) {
      entityType = c.operator.id
    }

    return {
      attribute: {
        label: attrName,
        type: {
          id: "STRING",
          label: "string"
        },
        value: {
          id: attrId,
          label: attrName,  // these aren't necessarily specified in the source
          name: attrName,
          type: {
            id: "STRING",
            label: "string"
          },
        }
      },
      comparator: {
        label: c.restriction.comparator.label,
        value: c.restriction.comparator.id
      },
      comparedString: c.restriction.value,
      // TODO: Not sure what this should be
      comparedValue: "",
      // TODO: figure out nestingType
      nestingType: OnmsEntityNestType.TOP,
      type: entityType
    }
  })

  return target
}

const updatePerformanceQuery = (source: any) => {
  // Note, target.datasource will be set in caller

  if (source.type) {
    if (source.type === 'attribute') {
      return convertAttributeQuery(source)
    } else if (source.type === 'expression') {
      return convertExpressionQuery(source)
    } else if (source.type === 'filter') {
      return convertFilterQuery(source)
    } else if (source.type === 'stringProperty') {
      return convertStringPropertyQuery(source)
    }
  }

  // should not get here
  return source
}

// Convert old-style Attribute Query to new PerformanceQuery with PerformanceAttributeState
// Old:
// {
//   "aggregation": "AVERAGE",
//   "attribute": "loadavg5",
//   "hide": true,
//   "nodeId": "$node",
//   "refId": "A",
//   "resourceId": "nodeSnmp[]",
//   "type": "attribute"
// }
const convertAttributeQuery = (source: any): PerformanceQuery | any => {
  // TODO: Handle where source.datasource is { type, uid }, not a template variable
  const query = {
    datasource: source.datasource,
    hide: source.hide || false,
    key: source.key || '',
    label: source.label || '',
    queryType: source.queryType || '',
    refId: source.refId || '',
    performanceType: PerformanceTypeOptions.Attribute,
    // PerformanceAttributeState
    attribute: {
      node: {
        id: source.nodeId,
        label: source.nodeId
      },
      resource: {
        id: source.resourceId,
        label: source.resourceId
      },
      attribute: {
        name: source.attribute || '',
        label: source.attribute || ''
      },
      subAttribute: source.subAttribute || undefined,
      fallbackAttribute: source.fallbackAttribute || source['fallback-attribute'] || undefined,
      aggregation: {
        label: source.aggregation || ''
      }
    },
    filter: {},
    filterState: {},
    performanceState: {},
    format: source.format || undefined,
    rawSql: source.rawSql || undefined
  }

  // TODO: Figure out "new" representation of these "time_series" attribute queries with "rawSql"
  // {
  //   ...
  //   "format": "time_series",
  //   "hide": true,
  //   "nodeId": "$node",
  //   "rawSql": "SELECT\n  $__time(time_column),\n  value1\nFROM\n  metric_table\nWHERE\n  $__timeFilter(time_column)\n",
  // }

  return query
}

// Convert old-style Expression Query to new PerformanceQuery with expression
// Old:
// {
//   "attribute": "loadavg5Pct",
//   "expression": "loadavg5 / 100",
//   "label": "Load (Avg)",
//   "refId": "B",
//   "type": "expression"
// }
const convertExpressionQuery = (source: any): PerformanceQuery | any => {
  const query = {
    datasource: source.datasource,
    hide: source.hide || false,
    key: source.key || '',
    label: source.label || '',
    queryType: source.queryType || '',
    refId: source.refId || '',
    performanceType: PerformanceTypeOptions.Expression,
    expression: source.expression || '',
    attribute: {},
    filter: {},
    filterState: {},
    performanceState: {}
  }

  if (source.attribute) {
    query.attribute = {
      attribute: {
        name: source.attribute
      }
    }
  }

  return query
}

// Convert old-style Filter Query to new PerformanceQuery format
// Old:
// {
//   "filter": {
//     "backend": "R",
//     "canonicalName": "org.opennms.netmgt.measurements.filters.impl.TrendLine",
//     "description": "Fits a trend line or polynomial to a given column.",
//     "name": "Trend",
//     "parameter": [
//       {
//         "default": null,
//         "description": "Input column.",
//         "displayName": "Input",
//         "key": "inputColumn",
//         "required": true,
//         "type": "string"
//       },
//       ...
//       {
//         "default": "1",
//         "description": "Polynomial order of the trend line/curve. Set this to 1 for a line.",
//         "displayName": "Order",
//         "key": "polynomialOrder",
//         "required": false,
//         "type": "int"
//       }
//     ]
//   },
//   "filterParameters": {
//     "inputColumn": "dskUsed",
//     "outputColumn": "dskTrend",
//     "secondsAhead": "57600"
//   },
//   "refId": "C",
//   "type": "filter"
// }
const convertFilterQuery = (source: any): PerformanceQuery | any => {
  if (source.filter) {
    const query = {
      datasource: source.datasource,
      hide: source.hide || false,
      key: source.key || '',
      label: source.label || '',
      queryType: source.queryType || '',
      refId: source.refId || '',
      performanceType: PerformanceTypeOptions.Filter,
      expression: '',
      attribute: {},
      performanceState: {},
      filter: {
        backend: source.filter.backend,
        canonicalName: source.filter.canonicalName,
        description: source.filter.description,
        label: source.filter.label,
        name: source.filter.name,
        // these seem to have the same contents, see PerformanceQueryFilterParameter
        parameter: [...source.filter.parameter]
      },
      filterState: {}
    }

    if (source.filterParameters) {
      Object.keys(source.filterParameters).forEach(k => {
        query.filterState[k] = {
          filter: {},
          value: source.filterParameters[k]
        }
      })
    }

    return query
  }

  return source
}

const convertStringPropertyQuery = (source: any): StringPropertyQuery | any => {
  // TODO!

  return source
}

const updateFlowQuery = (source: any) => {
  // TODO!

  return source
}

// add 'name', '$name' and '${name}' variations
const addVariationsToMap = (varName: string, dsType: DsType,  datasourceMap: Map<string,DsType>) => {
  const rawName = varName.replace(/[${}]/gi, '')

  datasourceMap.set(rawName, dsType)
  datasourceMap.set('$' + rawName, dsType)
  datasourceMap.set('${' + rawName + '}', dsType)
}
