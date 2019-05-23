define(["lodash","/public/app/plugins/sdk","/public/app/core/app_events"],function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=46)}([function(t,r){t.exports=e},,function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,r){e.exports=t},function(e,t,r){var n=r(9),a=r(5);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}},function(e,t,r){var n=r(11);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},,function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},,function(e,t,r){"use strict";var n=r(2),a=r.n(n);"undefined"!=typeof angular?angular.module("grafana.directives").directive("onmsTimeoutSettings",function(){return{templateUrl:"public/plugins/opennms-helm-app/components/timeout.html",restrict:"E",controller:"OnmsTimeoutCtrl",controllerAs:"ctrl",bindToController:!0,scope:{current:"="}}}).controller("OnmsTimeoutCtrl",function e(){a()(this,e),this.current||console.log("no current controller!"),this.current.jsonData.timeout||(this.current.jsonData.timeout=10),this.patterns={timeout:/^\d+$/}}):console.warn("Angular not found!  <onms-timeout> will not work!")},,,,,,function(e,t,r){var n=r(32),a=r(33),o=r(34);e.exports=function(e,t){return n(e)||a(e,t)||o()}},,,,,function(e,t,r){"use strict";function n(e,t){if("string"!=typeof e)return[e];var r=[e];"string"==typeof t||Array.isArray(t)?t={brackets:t}:t||(t={});var n=t.brackets?Array.isArray(t.brackets)?t.brackets:[t.brackets]:["{}","[]","()"],a=t.escape||"___",o=!!t.flat;n.forEach(function(e){var t=new RegExp(["\\",e[0],"[^\\",e[0],"\\",e[1],"]*\\",e[1]].join("")),n=[];function o(t,o,i){var u=r.push(t.slice(e[0].length,-e[1].length))-1;return n.push(u),a+u}r.forEach(function(e,n){for(var a,i=0;e!=a;)if(a=e,e=e.replace(t,o),i++>1e4)throw Error("References have circular dependency. Please, check them.");r[n]=e}),n=n.reverse(),r=r.map(function(t){return n.forEach(function(r){t=t.replace(new RegExp("(\\"+a+r+"(?![0-9]))","g"),e[0]+"$1"+e[1])}),t})});var i=new RegExp("\\"+a+"([0-9]+)");return o?r:function e(t,r,n){for(var a,o=[],u=0;a=i.exec(t);){if(u++>1e4)throw Error("Circular references in parenthesis");o.push(t.slice(0,a.index)),o.push(e(r[a[1]],r)),t=t.slice(a.index+a[0].length)}return o.push(t),o}(r[0],r)}function a(e,t){if(t&&t.flat){var r,n=t&&t.escape||"___",a=e[0];if(!a)return"";for(var o=new RegExp("\\"+n+"([0-9]+)"),i=0;a!=r;){if(i++>1e4)throw Error("Circular references in "+e);r=a,a=a.replace(o,u)}return a}return e.reduce(function e(t,r){return Array.isArray(r)&&(r=r.reduce(e,"")),t+r},"");function u(t,r){if(null==e[r])throw Error("Reference "+r+"is undefined");return e[r]}}function o(e,t){return Array.isArray(e)?a(e,t):n(e,t)}o.parse=n,o.stringify=a,e.exports=o},function(e,t){e.exports=r},,,,,,,function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},,,,,,,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),o=r(19),i=r.n(o),u=r(3),s=r.n(u),l=Object.freeze({Attribute:"attribute",Expression:"expression",Filter:"filter"}),c=r(0),f=r.n(c);function d(e,t){return!f.a.isNull(e)&&!f.a.isEmpty(e)&&e.indexOf("$"+t)>=0}function h(e,t){if(f.a.isNull(e)||f.a.isEmpty(e))return e;var r=e;return f.a.each(t,function(e){var t="\\$"+e.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");r=r.replace(new RegExp(t,"g"),e.value)}),r}function p(e,t,r,n,a,o){void 0===n&&(n=function(){}),void 0===a&&(a=d),void 0===o&&(o=h);var i=f.a.clone(r);i.push({name:"index",value:[0]});var u=[];if(f.a.each(i,function(r){f.a.find(t,function(t){return a(e[t],r.name)})&&u.push(r)}),u.length<1)return n(e),[e];var s=function(e){var t=[];f.a.each(e,function(e){t.push(e.value)});var r,n,a,o=(n=[],a=(r=t).length-1,function e(t,o){for(var i=0,u=r[o].length;i<u;i++){var s=t.slice(0);s.push(r[o][i]),o===a?n.push(s):e(s,o+1)}}([],0),n),i=[];return f.a.each(o,function(t){for(var r=[],n=0,a=e.length;n<a;n++){var o=JSON.parse(JSON.stringify(e[n]));o.value=t[n],r.push(o)}i.push(r)}),i}(u),l=[],c=0;return f.a.each(s,function(r){f.a.each(r,function(e){"index"===e.name&&(e.value="idx"+c,c+=1)});var a=f.a.clone(e);f.a.each(t,function(e){a[e]=o(a[e],r)}),n(a),l.push(a)}),l}var v=r(24),m=r.n(v),g=/\s*,\s*/,y=function(e){return"string"==typeof e||e instanceof String},b=function(e){if(e&&Array.isArray(e)&&e.length>0)return e[e.length-1]},w=function(){function e(){a()(this,e)}return s()(e,null,[{key:"parenthesize",value:function(t){return e._process(m()(t,{brackets:["()"]}))}},{key:"parenthesizeWithArguments",value:function(t){return e.parenthesize(t).map(function(t){return t&&t.arguments&&(t.arguments.length<2?t.arguments=e.getArguments(t.arguments[0]):console.log("unexpected arguments, expected a single string:",t)),t})}},{key:"findFunctions",value:function(t){return e.parenthesizeWithArguments(t).filter(function(e){return e&&void 0!==e.name})}},{key:"getArguments",value:function(e){var t=null==e?"":e;if(0===t.length)return[];var r=t.split(g);return Array.isArray(r)?r:[r]}},{key:"replace",value:function(t,r){var n=e.parenthesizeWithArguments(t),a="";return n.forEach(function(e){y(e)?a+=e:e.name?r&&r.hasOwnProperty(e.name)?a+=r[e.name].apply(r[e.name],e.arguments):(a+=e.name+"(",e.arguments&&(a+=e.arguments.join(", ")),a+=")"):console.log("this should not happen... token=",e)}),a}},{key:"format",value:function(t,r){return e.replace(t,{nodeToLabel:function(t){var n=e._getNodeFromCriteria(r,t);return n?n.label:t},resourceToLabel:function(t,n){var a=e._getResource(r,t,n);return a?a.label:n?[t,n].join("."):t},resourceToName:function(t,n){var a=e._getResource(r,t,n);return a?a.name:n?[t,n].join("."):t},resourceToInterface:function(t,n){var a=e._getResource(r,t,n);if(a){var o=a.name.match(/^(\w+)/);if(o||(o=a.label.match(/^(\w+)/)),o)return o[1]}return n?[t,n].join("."):t}})}},{key:"_process",value:function(t){var r=[],n=/^(.*?)(\w+?)\($/,a=!1;return t.forEach(function(o,i){if(a)a=!1;else{var u,s=r.length?r[r.length-1]:void 0,l=t[i+1];if(Array.isArray(o))r.push(e._process(o));else if(null!==(u=n.exec(o))){var c=u[1];c&&c.length>0&&(c.startsWith(")")&&s&&s.name&&(c=c.replace(/^\)/,"")),r.push(c)),r.push({name:u[2],arguments:e._process(l)}),a=!0}else if(y(o)&&o.startsWith(")")&&s&&s.name){var f=o.replace(/^\)/,"");f.length>0&&r.push(f)}else r.push(o)}}),e._flatten(r)}},{key:"_flatten",value:function(t){var r=[];return t.forEach(function(t){if(y(t)){if(0===t.length)return;var n=b(r);y(n)?r[r.length-1]+=t:r.push(t)}else if(t&&t.arguments)t.arguments=e._flatten(t.arguments),r.push(t);else{if(!Array.isArray(t))throw new Error("cannot reach here");e._flatten(t).forEach(function(e){var t=b(r);if(y(e)){if(0===e.trim().length)return;y(t)?r[r.length-1]+=e:r.push(e)}else{if(!e||!e.arguments)throw new Error("cannot reach here");r.push(e)}})}}),r}},{key:"_getNodeFromCriteria",value:function(t,r){var n,a,o;if(r&&r.indexOf(":")>0){var u=r.split(":"),s=i()(u,2);a=s[0],o=s[1]}else n=parseInt(r,10);return e._getNodeFromMetadata(t,n,a,o)}},{key:"_getNodeFromMetadata",value:function(e,t,r,n){if(e&&e.nodes){var a=e.nodes.filter(function(e){return void 0!==t&&e.id===t||void 0!==r&&void 0!==n&&e["foreign-source"]===r&&e["foreign-id"]===n})[0];if(void 0!==a)return a}return null}},{key:"_getResource",value:function(t,r,n){if(void 0===n){var a=!0,o=!1,i=void 0;try{for(var u,s=t.resources[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var l=u.value;if(l.id===r)return l}}catch(e){o=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw i}}}else{var c=e._getNodeFromCriteria(t,r);if(c){var f=e._getResourceFromCriteria(t,n,"node["+c["foreign-source"]+":"+c["foreign-id"]+"]","node["+c.id+"]");if(f)return f}}return null}},{key:"_getResourceFromCriteria",value:function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];if(e&&e.resources){var o=e.resources.filter(function(e){if(e.id===t)return!0;var r=!0,a=!1,o=void 0;try{for(var i,u=n.map(function(e){return e+"."+t})[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var s=i.value;if(e.id===s)return!0}}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return!1})[0];if(void 0!==o)return o}return null}}]),e}(),k=function(){function e(t,r,n,o){a()(this,e),this.type=t.type,this.url=t.url,this.name=t.name,this.basicAuth=t.basicAuth,this.withCredentials=t.withCredentials,this.interval=(t.jsonData||{}).timeInterval,t.jsonData&&t.jsonData.timeout&&(this.timeout=1e3*parseInt(t.jsonData.timeout,10)),this.$q=r,this.backendSrv=n,this.templateSrv=o,this.searchLimit=25,this.target={}}return e.$inject=["instanceSettings","$q","backendSrv","templateSrv"],s()(e,[{key:"doOpenNMSRequest",value:function(e){return(this.basicAuth||this.withCredentials)&&(e.withCredentials=!0),this.basicAuth&&(e.headers=e.headers||{},e.headers.Authorization=this.basicAuth),e.url=this.url+e.url,this.timeout&&(e.timeout=this.timeout),this.backendSrv.datasourceRequest(e)}},{key:"decorateError",value:function(e){var t=e;e.err&&(t=e.err);var r=t.statusText||"Request failed.";return t.cancelled&&(delete t.cancelled,r="Request timed out."),e.cancelled&&(delete e.cancelled,r="Request timed out."),t.message||(t.message=r),t.status||(t.status="error"),t}},{key:"query",value:function(t){var r=this,n=this.buildQuery(t),a=i()(n,2),o=a[0],u=a[1];return o.source.length>0?this.doOpenNMSRequest({url:"/rest/measurements",data:o,method:"POST",headers:{"Content-Type":"application/json"}}).then(function(t){return t.status<200||t.status>=300?(console.warn("Response code:",t),r.$q.reject(t)):e.processMeasurementsResponse(t)}).then(function(e){return e.data=f.a.sortBy(e.data,function(e){return f.a.indexOf(u,e.label)}),e}).catch(function(e){return r.$q.reject(r.decorateError(e))}):{data:[]}}},{key:"testDatasource",value:function(){var e=this;return this.doOpenNMSRequest({url:"/rest/info",method:"GET"}).then(function(e){return 200===e.status?{status:"success",message:"Data source is working",title:"Success"}:{status:"danger",message:"OpenNMS provided a response, but no metadata was found.",title:"Unexpected Response "+e.status}}).catch(function(t){return e.decorateError(t)})}},{key:"metricFindQuery",value:function(e){if(null==e||""===e)return this.$q.resolve([]);var t=f.a.first(this.interpolateValue(e));if(void 0!==t){var r=w.findFunctions(t),n=!0,a=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var s=i.value;if("nodeFilter"===s.name)return this.metricFindNodeFilterQuery.apply(this,s.arguments);if("nodeResources"===s.name)return this.metricFindNodeResourceQuery.apply(this,s.arguments);console.warn("Unknown function in interpolated query: "+t,s)}}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}}return this.$q.resolve([])}},{key:"metricFindNodeFilterQuery",value:function(e){return this.doOpenNMSRequest({url:"/rest/nodes",method:"GET",params:{filterRule:e,limit:0}}).then(function(e){e.data.count>e.data.totalCount&&console.warn("Filter matches "+e.data.totalCount+" records, but only "+e.data.count+" will be used.");var t=[];return f.a.each(e.data.node,function(e){var r=e.id.toString();null!==e.foreignId&&null!==e.foreignSource&&(r=e.foreignSource+":"+e.foreignId),t.push({text:e.label,value:r,expandable:!0})}),t})}},{key:"metricFindNodeResourceQuery",value:function(t){return this.doOpenNMSRequest({url:"/rest/resources/"+encodeURIComponent(e.getNodeResource(t)),method:"GET",params:{depth:1}}).then(function(e){var t=[];return f.a.each(e.data.children.resource,function(e){var r=e.id.match(/node(Source)?\[.*?\]\.(.*)/);r&&t.push({text:r[2],expandable:!0})}),t})}},{key:"buildQuery",value:function(t){var r=t.maxDataPoints||300,n=t.intervalMs||6e4,a=this,o=t.range.from.valueOf(),i=t.range.to.valueOf(),u=Math.floor((i-o)/r),s={start:o,end:i,step:u=u<n?n:u,relaxed:!0,maxrows:r,source:[],expression:[]},c=[];return f.a.each(t.targets,function(r){var n="false";if(r.hide&&(n=!0),r.type===l.Attribute){if(!(r.nodeId&&r.resourceId&&r.attribute))return;var o=r.label;void 0!==o&&""!==o||(o=r.attribute);var i={aggregation:r.aggregation,attribute:r.attribute,label:o,resourceId:r.resourceId,nodeId:r.nodeId,transient:n};void 0!==r.subattribute&&""!==r.subattribute&&(i.datasource=r.subattribute),void 0!==r.fallbackAttribute&&""!==r.fallbackAttribute&&(i["fallback-attribute"]=r.fallbackAttribute),i=a.interpolateSourceVariables(i,t.scopedVars,function(t){t.resourceId=e.getRemoteResourceId(t.nodeId,t.resourceId),delete t.nodeId}),s.source=s.source.concat(i),c=c.concat(f.a.map(i,"label"))}else if(r.type===l.Expression){if(!r.label||!r.expression)return;var u={label:r.label,value:r.expression,transient:n};u=a.interpolateExpressionVariables(u,t.scopedVars),s.expression=s.expression.concat(u),c=c.concat(f.a.map(u,"label"))}else if(r.type===l.Filter){if(!r.filter)return;var d=a.interpolateVariables(r.filterParameters,f.a.keys(r.filterParameters),t.scopedVars),h=f.a.map(d,function(e){var t=[];return f.a.each(e,function(e,r){void 0!==e&&""!==e&&null!==e&&t.push({key:r,value:e})}),{name:r.filter.name,parameter:t}});s.filter?s.filter=s.filter.concat(h):s.filter=h}}),[s,c]}},{key:"interpolateSourceVariables",value:function(e,t,r){return this.interpolateVariables(e,["nodeId","resourceId","attribute","datasource","label"],t,r)}},{key:"interpolateExpressionVariables",value:function(e,t){return this.interpolateVariables(e,["value","label"],t)}},{key:"interpolateValue",value:function(e,t){return f.a.map(this.interpolateVariables({value:e},["value"],t),function(e){return e.value})}},{key:"interpolateVariables",value:function(e,t,r,n){var a=[];return f.a.each(this.templateSrv.variables,function(e){var t={name:e.name,value:[]};r&&void 0!==r[t.name]?t.value.push(r[t.name].value):f.a.isString(e.current.value)?t.value.push(e.current.value):f.a.each(e.current.value,function(r){"$__all"===r?f.a.each(e.options,function(e){"$__all"!==e.value&&t.value.push(e.value)}):t.value.push(r)}),a.push(t)}),p(e,t,a,n)}},{key:"searchForNodes",value:function(e){return this.doOpenNMSRequest({url:"/rest/nodes",method:"GET",params:{limit:this.searchLimit,match:"any",comparator:"ilike",orderBy:"id",order:"asc",label:"%"+e+"%",sysName:"%"+e+"%","ipInterface.ipAddress":"%"+e+"%","ipInterface.ipHostName":"%"+e+"%",foreignId:e+"%"}})}},{key:"getResourcesWithAttributesForNode",value:function(t){var r=f.a.first(this.interpolateValue(t));return this.doOpenNMSRequest({url:"/rest/resources/fornode/"+encodeURIComponent(r),method:"GET",params:{depth:-1}}).then(function(t){return e.flattenResourcesWithAttributes([t.data],[])})}},{key:"getAvailableFilters",value:function(){return this.doOpenNMSRequest({url:"/rest/measurements/filters",method:"GET"})}},{key:"suggestAttributes",value:function(t,r,n){var a=f.a.first(this.interpolateValue(t)),o=f.a.first(this.interpolateValue(r)),i=e.getRemoteResourceId(a,o);return this.doOpenNMSRequest({url:"/rest/resources/"+encodeURIComponent(i),method:"GET",params:{depth:-1}}).then(function(e){n=n.toLowerCase();var t=[];return f.a.each(e.data.rrdGraphAttributes,function(e,r){r.toLowerCase().indexOf(n)>=0&&t.push(r)}),t.sort(),t})}}],[{key:"processMeasurementsResponse",value:function(e){var t,r,n,a,o,i,u,s=e.data.labels,l=e.data.columns,c=e.data.timestamps,f=e.data.metadata,d=[];if(void 0!==c)for(n=c.length,a=l.length,t=0;t<a;t++){for(u=!1,o=[],r=0;r<n;r++)c[r]<e.data.start||c[r]>e.data.end||(i=l[t].values[r],u||isNaN(i)||(u=!0),o.push([l[t].values[r],c[r]]));var h=s[t];f&&f.resources&&(h=w.format(h,f)),u&&d.push({target:h,label:s[t],datapoints:o})}return{data:d}}},{key:"flattenResourcesWithAttributes",value:function(t,r){return f.a.each(t,function(t){void 0!==t.rrdGraphAttributes&&Object.keys(t.rrdGraphAttributes).length>0&&r.push(t),void 0!==t.children&&t.children.resource.length>0&&e.flattenResourcesWithAttributes(t.children.resource,r)}),r}},{key:"getNodeResource",value:function(e){return(e.indexOf(":")>0?"nodeSource[":"node[")+e+"]"}},{key:"getRemoteResourceId",value:function(t,r){return e.getNodeResource(t)+"."+r}}]),e}(),x=r(7),S=r.n(x),R=r(4),A=r.n(R),O=r(8),N=r.n(O),I=function(){function e(t){a()(this,e),this.$scope=t,this.query="",this.selectedRow=null,this.searchForRows()}return e.$inject=["$scope"],s()(e,[{key:"searchForRows",value:function(){var e=this;this.searching=!0,this.$scope.search(this.query).then(function(t){e.selectedRow=null,e.rows=t.rows,e.count=t.count,e.totalCount=t.totalCount,e.searching=!1},function(){e.searching=!1})}},{key:"setClickedRow",value:function(e){this.selectedRow===e?this.selectedRow=null:(this.selectedRow=e,this.row=this.rows[this.selectedRow])}},{key:"cancel",value:function(){this.$scope.result.reject(),this.$scope.dismiss()}},{key:"ok",value:function(){null!==this.selectedRow?this.$scope.result.resolve(this.row):this.$scope.result.reject(),this.$scope.dismiss()}}]),e}();"undefined"!=typeof angular&&angular.module("grafana.controllers").controller("OpenNMSModalSelectionCtrl",I);var _=r(6),E=r(25),C=r.n(E),$=function(e){function t(e,r,n,o,i){var u;return a()(this,t),(u=S()(this,A()(t).call(this,r,n))).types=l,u.error=u.validateTarget(),u.$rootScope=e,u.$q=o,u.$modal=i,u}return t.$inject=["$rootScope","$scope","$injector","$q","$modal"],N()(t,e),s()(t,[{key:"openNodeSelectionModal",value:function(){var e=this;this.showSelectionModal("nodes",{"#":"id",Label:"label","Foreign ID":"foreignId",sysName:"sysName"},function(t){return e.datasource.searchForNodes(t).then(function(e){return{count:e.data.count,totalCount:e.data.totalCount,rows:e.data.node}})},function(t){f.a.isUndefined(t.foreignId)||f.a.isNull(t.foreignId)||f.a.isUndefined(t.foreignSource)||f.a.isNull(t.foreignSource)?e.target.nodeId=t.id:e.target.nodeId=t.foreignSource+":"+t.foreignId,e.targetBlur("nodeId")})}},{key:"openResourceSelectionModal",value:function(){var e=this;function t(t,r){var n=t;r.length>=1&&(r=r.toLowerCase(),n=f.a.filter(t,function(e){return e.key.indexOf(r)>=0}));var a=n.length;return{count:(n=f.a.take(n,e.datasource.searchLimit)).length,totalCount:a,rows:n}}e.nodeResources=void 0,this.showSelectionModal("resources",{Label:"label",Name:"name"},function(r){if(void 0!==e.nodeResources){var n=e.$q.defer();return n.resolve(t(e.nodeResources,r)),n.promise}return e.datasource.getResourcesWithAttributesForNode(e.target.nodeId).then(function(n){return f.a.each(n,function(e){e.key=e.label.toLowerCase()+e.name.toLowerCase()}),e.nodeResources=f.a.sortBy(n,function(e){return e.label}),t(e.nodeResources,r)})},function(t){var r=/node(Source)?\[.*?]\.(.*)$/.exec(t.id);e.target.resourceId=r[2],e.targetBlur("resourceId")})}},{key:"openAttributeSelectionModal",value:function(e){var t=this;e||(e="attribute"),this.showSelectionModal("attributes",{Name:"name"},function(e){return t.datasource.suggestAttributes(t.target.nodeId,t.target.resourceId,e).then(function(e){var t=[];return f.a.each(e,function(e){t.push({name:e})}),{count:t.length,totalCount:t.length,rows:t}})},function(r){t.target[e]=r.name,t.targetBlur(e)})}},{key:"openFilterSelectionModal",value:function(){var e=this;this.showSelectionModal("filters",{Name:"name",Description:"description",Backend:"backend"},function(){return e.datasource.getAvailableFilters().then(function(e){return{count:e.data.length,totalCount:e.data.length,rows:e.data}})},function(t){e.target.filter=t,e.targetBlur("filter")})}},{key:"showSelectionModal",value:function(e,t,r,n){var a=this.$rootScope.$new();a.label=e,a.columns=t,a.search=r,a.result=this.$q.defer(),a.result.promise.then(n);var o=this.$modal({template:"public/plugins/opennms-helm-app/datasources/perf-ds/partials/modal.selection.html",persist:!1,show:!1,scope:a,keyboard:!1});this.$q.when(o).then(function(e){e.modal("show")})}},{key:"targetBlur",value:function(e,t){void 0===t&&(t=!0);var r=this.validateTarget(e,t);r?(C.a.emit("alert-error",["Error",r]),this.error=r):this.refresh()}},{key:"validateTarget",value:function(e,t){if(this.target.type===l.Attribute||this.target.type===l.Expression){var r={nodeId:"You must supply a node id.",resourceId:"You must supply a resource id.",attribute:"You must supply an attribute.",expression:"You must supply an expression.",label:"You must supply a label."};if(t&&e in r&&!this.target[e])return r[e];if(t&&!this.target[e])return e+" is a required field."}else if(this.target.type===l.Filter){if(!("filterName"!=e||this.target.filter&&this.target.filter.name))return"You must select a filter.";if(t&&(!this.target.filterParameters||!(e in this.target.filterParameters)||!this.target.filterParameters[e]))return e+" is a required field."}return null}},{key:"getCollapsedText",value:function(){return this.target.type===l.Attribute?"Attribute: "+this.target.attribute:this.target.type===l.Expression?"Expression: "+this.target.label:this.target.type===l.Filter?"Filter: "+this.target.filter.name:"<Incomplete>"}}]),t}(_.QueryCtrl);$.templateUrl="datasources/perf-ds/partials/query.editor.html";r(13);r.d(t,"ConfigCtrl",function(){return j}),r.d(t,"QueryOptionsCtrl",function(){return F}),r.d(t,"Datasource",function(){return k}),r.d(t,"QueryCtrl",function(){return $});var j=function e(){a()(this,e)};j.templateUrl="datasources/perf-ds/partials/config.html";var F=function e(){a()(this,e)};F.templateUrl="datasources/perf-ds/partials/query.options.html",Object(_.loadPluginCss)({dark:"plugins/opennms-helm-app/datasources/perf-ds/css/opennms.dark.css",light:"plugins/opennms-helm-app/datasources/perf-ds/css/opennms.light.css"})}])});