/*! For license information please see module.js.LICENSE.txt */
define(["lodash","jquery","app/plugins/sdk","@grafana/runtime","jquery.flot","jquery.flot.selection","jquery.flot.crosshair"],(function(t,e,r,n,o,i,a){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=55)}({0:function(e,r){e.exports=t},2:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return a})),r.d(e,"d",(function(){return u})),r.d(e,"g",(function(){return s})),r.d(e,"e",(function(){return c})),r.d(e,"f",(function(){return l}));var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function a(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{s(n.next(t))}catch(t){i(t)}}function u(t){try{s(n.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}s((n=n.apply(t,e||[])).next())}))}function u(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}Object.create;function s(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function l(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}Object.create},26:function(t,e){t.exports=o},27:function(t,e){t.exports=i},28:function(t,e){t.exports=a},29:function(t,e){!function(t){function e(t,e,r,n){var o="categories"==e.xaxis.options.mode,i="categories"==e.yaxis.options.mode;if(o||i){var a=n.format;if(!a){var u=e;if((a=[]).push({x:!0,number:!0,required:!0}),a.push({y:!0,number:!0,required:!0}),u.bars.show||u.lines.show&&u.lines.fill){var s=!!(u.bars.show&&u.bars.zero||u.lines.show&&u.lines.zero);a.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:s}),u.bars.horizontal&&(delete a[a.length-1].y,a[a.length-1].x=!0)}n.format=a}for(var c=0;c<a.length;++c)a[c].x&&o&&(a[c].number=!1),a[c].y&&i&&(a[c].number=!1)}}function r(t){var e=[];for(var r in t.categories){var n=t.categories[r];n>=t.min&&n<=t.max&&e.push([n,r])}return e.sort((function(t,e){return t[0]-e[0]})),e}function n(e,n,o){if("categories"==e[n].options.mode){if(!e[n].categories){var i={},a=e[n].options.categories||{};if(t.isArray(a))for(var u=0;u<a.length;++u)i[a[u]]=u;else for(var s in a)i[s]=a[s];e[n].categories=i}e[n].options.ticks||(e[n].options.ticks=r),function(t,e,r){for(var n=t.points,o=t.pointsize,i=t.format,a=e.charAt(0),u=function(t){var e=-1;for(var r in t)t[r]>e&&(e=t[r]);return e+1}(r),s=0;s<n.length;s+=o)if(null!=n[s])for(var c=0;c<o;++c){var l=n[s+c];null!=l&&i[c][a]&&(l in r||(r[l]=u,++u),n[s+c]=r[l])}}(o,n,e[n].categories)}}function o(t,e,r){n(e,"xaxis",r),n(e,"yaxis",r)}t.plot.plugins.push({init:function(t){t.hooks.processRawData.push(e),t.hooks.processDatapoints.push(o)},options:{xaxis:{categories:null},yaxis:{categories:null}},name:"categories",version:"1.0"})}(jQuery)},5:function(t,e,r){"use strict";r.d(e,"c",(function(){return s})),r.d(e,"a",(function(){return c})),r.d(e,"f",(function(){return f})),r.d(e,"g",(function(){return p})),r.d(e,"i",(function(){return d})),r.d(e,"b",(function(){return y})),r.d(e,"d",(function(){return m})),r.d(e,"e",(function(){return g})),r.d(e,"h",(function(){return x}));var n=r(2),o=r(0),i=r.n(o),a=r(9),u=!1;function s(){u||(u=!0,Object(a.loadPluginCss)({dark:"plugins/opennms-helm-app/styles/dark.css",light:"plugins/opennms-helm-app/styles/light.css"}))}function c(t,e,r){for(var n in void 0===r&&(r={}),r)r.hasOwnProperty(n)&&(t[n]=void 0===e[n]?r[n]:e[n])}function l(t){var e,r,n,o,a=[];for(e=0;e<t.options.length;e++)if((o=t.options[e]).selected=!1,i.a.isArray(t.current.value))for(r=0;r<t.current.value.length;r++)n=t.current.value[r],o.value===n&&(o.selected=!0,a.push(o));else o.value===t.current.value&&(o.selected=!0,a.push(o));return a}function f(t,e){return t.current=i.a.cloneDeep(e||{}),i.a.isArray(t.current.text)&&t.current.text.length>0?t.current.text=t.current.text.join(" + "):i.a.isArray(t.current.value)&&"$__all"!==t.current.value[0]&&(t.current.text=t.current.value.join(" + ")),l(t),function(t,e){void 0===e&&(e=!1);var r=t.dashboardSrv,n=t.templateSrv;if(t.initLock)return Promise.resolve();var o=(n.getVariables.bind(n)||r.dashboard.getVariables.bind(r.dashboard))(),i=[];return o.forEach((function(t){return i.push(t.updateOptions())})),n.setGlobalVariable(t.id,t.current),Promise.all(i).then((function(){e&&(r.dashboard.templateVariableValueUpdated(),r.dashboard.startRefresh())}))}(t)}function p(t,e){var r=Promise.resolve();return t.refresh&&(r=t.updateOptions()),r.then((function(){var r=i.a.find(t.options,(function(t){return t.text===e||t.value===e}));if(!r){var n=e,o=e;i.a.isArray(e)&&(n=e.reduce((function(e,r){var n=i.a.find(t.options,{value:r});return n?e.push(n.text):e.push(r),e}),[])),r={text:n,value:o}}return t.multi&&(r={text:i.a.castArray(r.text),value:i.a.castArray(r.value)}),t.setValue(r)}))}function d(t,e){if(t.current||(t.current={}),i.a.isArray(t.current.value)){var r=l(t);if(0===r.length){var n=t.options[0];return n?t.setValue(n):Promise.resolve()}var o={value:i.a.map(r,(function(t){return t.value})),text:i.a.map(r,(function(t){return t.text}))};return t.setValue(o)}var a=void 0;return(a=i.a.find(t.options,{text:t.current.text}))||e&&(a=i.a.find(t.options,{text:e}))?t.setValue(a):t.options?t.setValue(t.options[0]):Promise.resolve()}var h=/\$(\w+)|\[\[([\s\S]+?)(?::(\w+))?\]\]|\${(\w+)(?:\.([^:^}]+))?(?::(\w+))?}/g,v=function(t){return h.lastIndex=0,h.exec(t)};function y(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[t.length-1];t[0]=i.a.isString(t[0])?t[0]:Object.values(t[0]).join(" ");var n=t.slice(0,-1).join(" "),o=n.match(h),a=null!==o&&o.find((function(t){var e=v(t);return null!==e&&e.indexOf(r)>-1}));return!!a}function m(t,e,r){return r.indexOf(t)===e}function g(t){var e;if(t){var r=t.map((function(t){return function(t,e,r){if(t){if(t.startsWith("{")&&t.endsWith("}")){var n=t.substring(1,t.length-1).split(",").map((function(t){return t.trim()}));return r&&n.some((function(t){return"all"===t}))?[]:n}return e&&t.startsWith("$")||r&&"all"===t?[]:[t]}return[]}(t,!0,!1)}));return r.some((function(t){return t.some((function(t){return"all"===t}))}))?[]:(e=[]).concat.apply(e,Object(n.f)([],Object(n.e)(r),!1)).filter(m)}return[]}function b(t,e,r){var n=t[e];return t[e]=t[r],t[r]=n,t}function x(t,e,r){if(t&&t.length>0&&e>=0&&r>=0)for(var n=0;n<t.length;n++){if(e>=t[n].length||r>=t[n].length)throw new Error("Index out of bounds");t[n]=b(t[n],e,r)}return t}},55:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(8),i=r(0),a=r.n(i),u=r(6),s=r.n(u),c=(r(26),r(27),r(28),r(29),function(t){function e(e,r,n){var o=t.call(this,e,r)||this;return o.scope=e,o.$timeout=n,o._renderRetries=0,a.a.defaults(o.panel,{groupProperty:"acknowledged",direction:"horizontal"}),o.retryTimes=10,o.retryDelay=100,o.events.on("init-edit-mode",o.onInitEditMode.bind(o)),o.events.on("data-received",o.onDataReceived.bind(o)),o.events.on("data-error",o.onDataError.bind(o)),o.events.on("data-snapshot-load",o.onDataReceived.bind(o)),o.events.on("render",o.onRender.bind(o)),o}return e.$inject=["$scope","$injector","$timeout"],Object(n.c)(e,t),e.prototype.link=function(t,e,r,n){this.elem=e.find(".histogram-chart"),this.ctrl=n},e.prototype.onInitEditMode=function(){this.addEditorTab("Grouping","public/plugins/opennms-helm-app/panels/alarm-histogram/editor.html",2)},e.prototype.onDataReceived=function(t){switch(this.panel.groupProperty){case"acknowledged":var e=a.a.countBy(this.query(t,"Acked By"),(function(t){return a.a.isNil(t).toString()}));this.series=[{name:"Outstanding",count:a.a.defaultTo(e.true,0),color:this.scope.$root.colors[0]},{name:"Acknowledged",count:a.a.defaultTo(e.false,0),color:this.scope.$root.colors[4]}];break;case"severity":e=a.a.countBy(this.query(t,"Severity"));this.series=[{name:"Cleared",count:a.a.defaultTo(e.CLEARED,0),color:"#EEE000"},{name:"Normal",count:a.a.defaultTo(e.NORMAL,0),color:"#86B15B"},{name:"Indeterm.",count:a.a.defaultTo(e.INDETERMINATE,0),color:"#990000"},{name:"Warning",count:a.a.defaultTo(e.WARNING,0),color:"#FCCC3B"},{name:"Minor",count:a.a.defaultTo(e.MINOR,0),color:"#EE901C"},{name:"Major",count:a.a.defaultTo(e.MAJOR,0),color:"#E3692F"},{name:"Critical",count:a.a.defaultTo(e.CRITICAL,0),color:"#DB4345"}]}this.render()},e.prototype.onDataError=function(){this.series=[],this.render()},e.prototype.onRender=function(){var t=this,e=this.ctrl.height||this.ctrl.panel.height||this.ctrl.row&&this.ctrl.row.height;if(a.a.isString(e)&&(e=parseInt(e.replace("px",""),10)),0===this.elem.width()||0===e||void 0===e)return!(this._renderRetries>this.retryTimes)&&(this._renderRetries++,this.$timeout((function(){t.onRender()}),this.retryDelay),!0);switch(e-=5,e-=this.ctrl.panel.title?24:9,this.elem.css("height",e+"px"),this.panel.direction){case"horizontal":s.a.plot(this.elem,a.a.map(this.series,(function(t){return{data:[[t.count,t.name]],color:t.color}})),{series:{bars:{show:!0,barWidth:.6,align:"center",fill:.8,lineWidth:1,horizontal:!0}},yaxis:{mode:"categories",tickLength:0,autoscaleMargin:.02},grid:{borderWidth:0}});break;case"vertical":s.a.plot(this.elem,a.a.map(this.series,(function(t){return{data:[[t.name,t.count]],color:t.color}})),{series:{bars:{show:!0,barWidth:.5,align:"center",fill:.8,lineWidth:1,horizontal:!1}},xaxis:{mode:"categories",tickLength:0,autoscaleMargin:.02},grid:{borderWidth:0}})}this.ctrl.renderingCompleted()},e.prototype.query=function(t,e){for(var r=[],n=0;n<t.length;n++)for(var o=a.a.findIndex(t[n].columns,{text:e}),i=t[n]&&t[n].rows?t[n].rows:[],u=0;u<i.length;u++)r.push(t[n].rows[u][o]);return r},e.templateUrl="public/plugins/opennms-helm-app/panels/alarm-histogram/module.html",e}(o.MetricsPanelCtrl)),l=r(5);r.d(e,"AlarmHistogramCtrl",(function(){return c})),r.d(e,"PanelCtrl",(function(){return c})),Object(l.c)()},6:function(t,r){t.exports=e},8:function(t,e){t.exports=r},9:function(t,e){t.exports=n}})}));
//# sourceMappingURL=module.js.map