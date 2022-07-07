define(["lodash","@grafana/runtime"],(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=50)}({0:function(e,n){e.exports=t},2:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));function r(t,e,n,r){return new(n||(n=Promise))((function(a,i){function o(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,u)}s((r=r.apply(t,e||[])).next())}))}Object.create;Object.create},3:function(t,e,n){"use strict";n.d(e,"f",(function(){return h})),n.d(e,"c",(function(){return p})),n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return b})),n.d(e,"l",(function(){return g})),n.d(e,"d",(function(){return w})),n.d(e,"e",(function(){return O})),n.d(e,"g",(function(){return j})),n.d(e,"h",(function(){return k})),n.d(e,"a",(function(){return A})),n.d(e,"k",(function(){return R})),n.d(e,"b",(function(){return P}));var r=n(2),a=n(0),i=n.n(a),o=n(8);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=!1;function h(){d||(d=!0,Object(o.loadPluginCss)({dark:"plugins/opennms-helm-app/styles/dark.css",light:"plugins/opennms-helm-app/styles/light.css"}))}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};for(var r in n)n.hasOwnProperty(r)&&(t[r]=void 0===e[r]?n[r]:e[r])}function v(t){var e,n,r,a,o=[];for(e=0;e<t.options.length;e++)if((a=t.options[e]).selected=!1,i.a.isArray(t.current.value))for(n=0;n<t.current.value.length;n++)r=t.current.value[n],a.value===r&&(a.selected=!0,o.push(a));else a.value===t.current.value&&(a.selected=!0,o.push(a));return o}function m(t,e){return t.current=i.a.cloneDeep(e||{}),i.a.isArray(t.current.text)&&t.current.text.length>0?t.current.text=t.current.text.join(" + "):i.a.isArray(t.current.value)&&"$__all"!==t.current.value[0]&&(t.current.text=t.current.value.join(" + ")),v(t),function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.dashboardSrv,r=t.templateSrv;if(t.initLock)return Promise.resolve();var a=r.getVariables.bind(r)||n.dashboard.getVariables.bind(n.dashboard),i=a(),o=[];return i.forEach((function(t){t.updateOptions&&o.push(t.updateOptions())})),r.setGlobalVariable(t.id,t.current),Promise.all(o).then((function(){e&&(n.dashboard.templateVariableValueUpdated(),n.dashboard.startRefresh())}))}(t)}function b(t,e){var n=Promise.resolve();return t.refresh&&(n=t.updateOptions()),n.then((function(){var n=i.a.find(t.options,(function(t){return t.text===e||t.value===e}));if(!n){var r=e,a=e;i.a.isArray(e)&&(r=e.reduce((function(e,n){var r=i.a.find(t.options,{value:n});return r?e.push(r.text):e.push(n),e}),[])),n={text:r,value:a}}return t.multi&&(n={text:i.a.castArray(n.text),value:i.a.castArray(n.value)}),t.setValue(n)}))}function g(t,e){if(t.current||(t.current={}),i.a.isArray(t.current.value)){var n=v(t);if(0===n.length){var r=t.options[0];return r?t.setValue(r):Promise.resolve()}var a={value:i.a.map(n,(function(t){return t.value})),text:i.a.map(n,(function(t){return t.text}))};return t.setValue(a)}var o=void 0;return(o=i.a.find(t.options,{text:t.current.text}))||e&&(o=i.a.find(t.options,{text:e}))?t.setValue(o):t.options?t.setValue(t.options[0]):Promise.resolve()}var y=/\$(\w+)|\[\[([\s\S]+?)(?::(\w+))?\]\]|\${(\w+)(?:\.([^:^}]+))?(?::(\w+))?}/g,x=function(t){return y.lastIndex=0,y.exec(t)};function w(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[e.length-1];e[0]=i.a.isString(e[0])?e[0]:Object.values(e[0]).join(" ");var a=e.slice(0,-1).join(" "),o=a.match(y),u=null!==o&&o.find((function(t){var e=x(t);return null!==e&&e.indexOf(r)>-1}));return!!u}function O(t){return i.a.isArray(t)&&t.length>0?t[0]:t}function j(t,e,n){return n.indexOf(t)===e}function k(t){if(t){var e,n=t.map((function(t){return function(t,e,n){if(t){t.startsWith("{")&&t.endsWith("}")&&(t=t.substring(1,t.length-1));var r=function(t){var e=t.match(/(\[[^\]]*\])/g);if(e&&e.length>0){var n=[];return e.forEach((function(t){n.push(t)})),n}return t.indexOf(",")>=0?t.split(",").map((function(t){return t.trim()})):[t]}(t);return n&&r.some((function(t){return"all"===t}))||e&&t.startsWith("$")||n&&"all"===t?[]:r}return[]}(t,!0,!1)}));return n.some((function(t){return t.some((function(t){return"all"===t}))}))?[]:(e=[]).concat.apply(e,l(n)).filter(j)}return[]}var A=function(){function t(){u(this,t)}return c(t,null,[{key:"getGlobAsRegexPattern",value:function(t){return i.a.escapeRegExp(t).replace(/\\\*/gi,".*").replace(/\\\|/gi,"|")}},{key:"hasGlob",value:function(e){return i.a.some(l(e),(function(e){return i.a.includes(t.globExpressions,e)}))}}]),t}();function S(t,e,n){var r=t[e];return t[e]=t[n],t[n]=r,t}function R(t,e,n){if(t&&t.length>0&&e>=0&&n>=0)for(var r=0;r<t.length;r++){if(e>=t[r].length||n>=t[r].length)throw new Error("Index out of bounds");t[r]=S(t[r],e,n)}return t}A.globExpressions=["*","|"];var P=function(){function t(e,n){u(this,t),this.timeout=1e4,this.withCredentials=!1,this.searchLimit=25,this.flows="/rest/flows",this.locations="/rest/monitoringLocations",this.nodes="/rest/nodes",this.backendSrv=e,this.url=n}return c(t,[{key:"doOpenNMSRequest",value:function(t){return(this.basicAuth||this.withCredentials)&&(t.withCredentials=!0),this.basicAuth&&(t.headers=t.headers||{},t.headers.Authorization=this.basicAuth),t.url=this.url+t.url,this.timeout&&(t.timeout=this.timeout),this.backendSrv.datasourceRequest(t)}},{key:"getLocations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.doOpenNMSRequest({url:this.locations,method:"GET",params:{limit:t}}).then((function(t){t.data.count,t.data.totalCount;var e=[];return i.a.each(t.data.location,(function(t){var n=t["location-name"]?t["location-name"].toString():null,r=i.a.find(e,(function(t){return t.text===n}));n&&!r&&e.push({text:n,value:n,expandable:!0})})),e}))}},{key:"getNodesByFilter",value:function(t){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.doOpenNMSRequest({url:this.nodes,method:"GET",params:{filterRule:t,limit:0}});case 2:return(n=e.sent).data.count,n.data.totalCount,e.abrupt("return",n.data.node);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"getApplications",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.doOpenNMSRequest({url:this.flows+"/applications/enumerate",method:"GET",params:{start:t,end:e,limit:n<=0?this.searchLimit:n}});case 2:if(0!==(a=r.sent).data.length){r.next=8;break}return r.abrupt("return",a.data);case 8:return i=[],a.data.forEach((function(t){i.push({text:t,value:t,expandable:!0})})),r.abrupt("return",i);case 11:case"end":return r.stop()}}),r,this)})))}},{key:"getHosts",value:function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n||(n=".*"),r.next=3,this.doOpenNMSRequest({url:this.flows+"/hosts/enumerate",method:"GET",params:{start:t,end:e,limit:a<=0?this.searchLimit:a,pattern:n}});case 3:if(0!==(i=r.sent).data.length){r.next=9;break}return r.abrupt("return",i.data);case 9:return o=[],i.data.forEach((function(t){o.push({text:t,value:t,expandable:!0})})),r.abrupt("return",o);case 12:case"end":return r.stop()}}),r,this)})))}},{key:"getConversations",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var u,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n||(n=".*"),a||(a=".*"),i||(i=".*"),r.next=5,this.doOpenNMSRequest({url:this.flows+"/conversations/enumerate",method:"GET",params:{start:t,end:e,application:n,location:a,protocol:i,limit:o<=0?this.searchLimit:o}});case 5:if(0!==(u=r.sent).data.length){r.next=11;break}return r.abrupt("return",u.data);case 11:return s=[],u.data.forEach((function(t){s.push({text:t,value:t,expandable:!0})})),r.abrupt("return",s);case 14:case"end":return r.stop()}}),r,this)})))}}]),t}()},50:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.appModel.jsonData||(this.appModel.jsonData={}),this.appModel.jsonData.actions||(this.appModel.jsonData.actions=[]),this.data=this.appModel.jsonData}var e,n,a;return e=t,(n=[{key:"addAction",value:function(){this.data.actions.push({url:""})}},{key:"removeAction",value:function(t){this.data.actions[t]&&this.data.actions.splice(t,1)}}])&&r(e.prototype,n),a&&r(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}();a.templateUrl="public/plugins/opennms-helm-app/components/config.html";var i=n(3);n.d(e,"ConfigCtrl",(function(){return a})),Object(i.f)()},8:function(t,n){t.exports=e}})}));
//# sourceMappingURL=module.js.map