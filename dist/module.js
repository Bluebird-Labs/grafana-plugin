define(["lodash","@grafana/runtime"],(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=50)}({0:function(e,n){e.exports=t},3:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return v})),n.d(e,"j",(function(){return h})),n.d(e,"c",(function(){return g})),n.d(e,"e",(function(){return m})),n.d(e,"f",(function(){return x})),n.d(e,"a",(function(){return j})),n.d(e,"i",(function(){return w}));var r=n(0),o=n.n(r),a=n(9);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=!1;function s(){c||(c=!0,Object(a.loadPluginCss)({dark:"plugins/opennms-helm-app/styles/dark.css",light:"plugins/opennms-helm-app/styles/light.css"}))}function f(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};for(var r in n)n.hasOwnProperty(r)&&(t[r]=void 0===e[r]?n[r]:e[r])}function p(t){var e,n,r,a,u=[];for(e=0;e<t.options.length;e++)if((a=t.options[e]).selected=!1,o.a.isArray(t.current.value))for(n=0;n<t.current.value.length;n++)r=t.current.value[n],a.value===r&&(a.selected=!0,u.push(a));else a.value===t.current.value&&(a.selected=!0,u.push(a));return u}function d(t,e){return t.current=o.a.cloneDeep(e||{}),o.a.isArray(t.current.text)&&t.current.text.length>0?t.current.text=t.current.text.join(" + "):o.a.isArray(t.current.value)&&"$__all"!==t.current.value[0]&&(t.current.text=t.current.value.join(" + ")),p(t),function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.dashboardSrv,r=t.templateSrv;if(t.initLock)return Promise.resolve();var o=r.getVariables.bind(r)||n.dashboard.getVariables.bind(n.dashboard),a=o(),u=[];return a.forEach((function(t){return u.push(t.updateOptions())})),r.setGlobalVariable(t.id,t.current),Promise.all(u).then((function(){e&&(n.dashboard.templateVariableValueUpdated(),n.dashboard.startRefresh())}))}(t)}function v(t,e){var n=Promise.resolve();return t.refresh&&(n=t.updateOptions()),n.then((function(){var n=o.a.find(t.options,(function(t){return t.text===e||t.value===e}));if(!n){var r=e,a=e;o.a.isArray(e)&&(r=e.reduce((function(e,n){var r=o.a.find(t.options,{value:n});return r?e.push(r.text):e.push(n),e}),[])),n={text:r,value:a}}return t.multi&&(n={text:o.a.castArray(n.text),value:o.a.castArray(n.value)}),t.setValue(n)}))}function h(t,e){if(t.current||(t.current={}),o.a.isArray(t.current.value)){var n=p(t);if(0===n.length){var r=t.options[0];return r?t.setValue(r):Promise.resolve()}var a={value:o.a.map(n,(function(t){return t.value})),text:o.a.map(n,(function(t){return t.text}))};return t.setValue(a)}var u=void 0;return(u=o.a.find(t.options,{text:t.current.text}))||e&&(u=o.a.find(t.options,{text:e}))?t.setValue(u):t.options?t.setValue(t.options[0]):Promise.resolve()}var b=/\$(\w+)|\[\[([\s\S]+?)(?::(\w+))?\]\]|\${(\w+)(?:\.([^:^}]+))?(?::(\w+))?}/g,y=function(t){return b.lastIndex=0,b.exec(t)};function g(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[e.length-1];e[0]=o.a.isString(e[0])?e[0]:Object.values(e[0]).join(" ");var a=e.slice(0,-1).join(" "),u=a.match(b),i=null!==u&&u.find((function(t){var e=y(t);return null!==e&&e.indexOf(r)>-1}));return!!i}function m(t,e,n){return n.indexOf(t)===e}function x(t){if(t){var e,n=t.map((function(t){return function(t,e,n){if(t){if(t.startsWith("{")&&t.endsWith("}")){var r=t.substring(1,t.length-1).split(",").map((function(t){return t.trim()}));return n&&r.some((function(t){return"all"===t}))?[]:r}return e&&t.startsWith("$")||n&&"all"===t?[]:[t]}return[]}(t,!0,!1)}));return n.some((function(t){return t.some((function(t){return"all"===t}))}))?[]:(e=[]).concat.apply(e,i(n)).filter(m)}return[]}var j=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"getGlobAsRegexPattern",value:function(t){return o.a.escapeRegExp(t).replace(/\\\*/gi,".*").replace(/\\\|/gi,"|")}},{key:"hasGlob",value:function(e){return o.a.some(i(e),(function(e){return o.a.includes(t.globExpressions,e)}))}}],(n=null)&&u(e.prototype,n),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t,e,n){var r=t[e];return t[e]=t[n],t[n]=r,t}function w(t,e,n){if(t&&t.length>0&&e>=0&&n>=0)for(var r=0;r<t.length;r++){if(e>=t[r].length||n>=t[r].length)throw new Error("Index out of bounds");t[r]=O(t[r],e,n)}return t}j.globExpressions=["*","|"]},50:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.appModel.jsonData||(this.appModel.jsonData={}),this.appModel.jsonData.actions||(this.appModel.jsonData.actions=[]),this.data=this.appModel.jsonData}var e,n,o;return e=t,(n=[{key:"addAction",value:function(){this.data.actions.push({url:""})}},{key:"removeAction",value:function(t){this.data.actions[t]&&this.data.actions.splice(t,1)}}])&&r(e.prototype,n),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();o.templateUrl="public/plugins/opennms-helm-app/components/config.html";var a=n(3);n.d(e,"ConfigCtrl",(function(){return o})),Object(a.d)()},9:function(t,n){t.exports=e}})}));
//# sourceMappingURL=module.js.map