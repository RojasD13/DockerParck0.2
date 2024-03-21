define(["@grafana/data","react","@grafana/ui","lodash","@grafana/runtime","rxjs"],((e,t,n,a,r,i)=>(()=>{"use strict";var o={305:t=>{t.exports=e},545:e=>{e.exports=r},388:e=>{e.exports=n},980:e=>{e.exports=a},650:e=>{e.exports=t},177:e=>{e.exports=i}},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return o[e](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{s.r(u),s.d(u,{plugin:()=>Qe});var e=s(305),t=s(650),n=s.n(t),a=s(388);const r="data-testid config-editor field-token",i="data-testid config-editor field-url",o="data-testid config-editor field-request-mode",l=e=>`config-editor field-request-mode-option-${e}`,d="data-testid query-editor field-annotation-dashboard-container",c=e=>`query-editor field-annotation-dashboard-option-${e}`,p="data-testid query-editor field-annotation-rules-container",f=e=>`query-editor field-annotation-rules-option-${e}`,g="data-testid query-editor field-annotation-limit",y="data-testid query-editor field-annotation-new-state-container",v="data-testid query-editor field-annotation-pattern",m="data-testid query-editor field-annotation-prev-state-container",h=e=>`query-editor field-annotation-state-option-${e}`,b="data-testid query-editor field-annotation-time-range-container",T=e=>`query-editor field-annotation-time-range-option-${e}`,O="data-testid query-editor field-annotation-type-container",E=e=>`query-editor field-annotation-type-option-${e}`,A="query-editor field-request";var S,R,I,F;!function(e){e.ALL="",e.ANNOTATION="annotation",e.ALERT="alert"}(S||(S={})),function(e){e.ALL="",e.THIS="this"}(R||(R={})),function(e){e.NONE="",e.SELECTED="selected"}(I||(I={})),function(e){e.ALL="",e.NORMAL="Normal",e.PENDING="Pending",e.ALERTING="Alerting"}(F||(F={}));const w=[{label:"All",value:S.ALL,ariaLabel:E(S.ALL)},{label:"Annotation",value:S.ANNOTATION,icon:"comment-alt-message",ariaLabel:E(S.ANNOTATION)},{label:"Alert",value:S.ALERT,icon:"bell",ariaLabel:E(S.ALERT)}],L=[{label:"All",value:R.ALL,ariaLabel:c(R.ALL)},{label:"This",value:R.THIS,icon:"dashboard",ariaLabel:c(R.THIS)}],P=[{label:"None",value:I.NONE,ariaLabel:T(I.NONE)},{label:"Selected",value:I.SELECTED,icon:"calendar-alt",ariaLabel:T(I.SELECTED)}],N=[{label:"All",value:F.ALL,ariaLabel:h(F.ALL)},{label:"Normal",value:F.NORMAL,ariaLabel:h(F.NORMAL)},{label:"Pending",value:F.PENDING,ariaLabel:h(F.PENDING)},{label:"Alerting",value:F.ALERTING,ariaLabel:h(F.ALERTING)}],j=[{label:"Enabled",value:!0,ariaLabel:f(!0)},{label:"Disabled",value:!1,ariaLabel:f(!1)}];var D,C;!function(e){e.SUCCESS="success",e.ERROR="error"}(D||(D={})),function(e){e.LOCAL="local",e.REMOTE="remote"}(C||(C={}));const U=[{label:"Local",value:C.LOCAL,ariaLabel:l(C.LOCAL)},{label:"Remote",value:C.REMOTE,ariaLabel:l(C.REMOTE)}],x="Get Alert Rules: API Request failed. See Console for details.",q="Get Annotations: API Request failed. See Console for details.",V="Get Data Sources: API Request failed. See Console for details.",k="Get Health: API Request failed. See Console for details.",G="Get Org: API Request failed. See Console for details.",M="Get Users: API Request failed. See Console for details.",$="Error";var H;!function(e){e.ALERT_RULES="alertRules",e.ANNOTATIONS="annotations",e.DATASOURCES="datasources",e.HEALTH="health",e.NONE="none",e.ORG_USERS="orgUsers"}(H||(H={}));const _=[{label:"Alert Rules",description:"Returns alert rules",value:H.ALERT_RULES},{label:"Annotations",description:"Returns annotations",value:H.ANNOTATIONS},{label:"Data Sources",description:"Returns data sources",value:H.DATASOURCES},{label:"Health information",description:"Returns health information",value:H.HEALTH},{label:"Organization Users",description:"Returns all users within the current organization",value:H.ORG_USERS},{label:"None",description:"For internal API calls",value:H.NONE}],B={annotationDashboard:R.ALL,annotationLimit:100,annotationNewState:F.ALL,annotationPattern:"",annotationPrevState:F.ALL,annotationRange:I.NONE,annotationRules:!0,annotationType:S.ALL,requestType:H.NONE};function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){W(e,t,n[t])}))}return e}function J(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var Q=s(980);function X(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,r)}function K(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){X(i,a,r,o,l,"next",e)}function l(e){X(i,a,r,o,l,"throw",e)}o(void 0)}))}}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){Y(e,t,n[t])}))}return e}function ee(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}const te=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,ne=e=>{if("string"!=typeof e)throw new TypeError("Invalid argument expected string");const t=e.match(te);if(!t)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},ae=e=>"*"===e||"x"===e||"X"===e,re=e=>{const t=parseInt(e,10);return isNaN(t)?e:t},ie=(e,t)=>{if(ae(e)||ae(t))return 0;const[n,a]=((e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t])(re(e),re(t));return n>a?1:n<a?-1:0},oe=(e,t)=>{for(let n=0;n<Math.max(e.length,t.length);n++){const a=ie(e[n]||"0",t[n]||"0");if(0!==a)return a}return 0},le={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},se=Object.keys(le),ue=e=>{if("string"!=typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===se.indexOf(e))throw new Error(`Invalid operator, expected one of ${se.join("|")}`)},de=(e,t)=>{if((t=t.replace(/([><=]+)\s+/g,"$1")).includes("||"))return t.split("||").some((t=>de(e,t)));if(t.includes(" - ")){const[n,a]=t.split(" - ",2);return de(e,`>=${n} <=${a}`)}if(t.includes(" "))return t.trim().replace(/\s{2,}/g," ").split(" ").every((t=>de(e,t)));const n=t.match(/^([<>=~^]+)/),a=n?n[1]:"=";if("^"!==a&&"~"!==a)return((e,t,n)=>{ue(n);const a=((e,t)=>{const n=ne(e),a=ne(t),r=n.pop(),i=a.pop(),o=oe(n,a);return 0!==o?o:r&&i?oe(r.split("."),i.split(".")):r||i?r?-1:1:0})(e,t);return le[n].includes(a)})(e,t,a);const[r,i,o,,l]=ne(e),[s,u,d,,c]=ne(t),p=[r,i,o],f=[s,null!=u?u:"x",null!=d?d:"x"];if(c){if(!l)return!1;if(0!==oe(p,f))return!1;if(-1===oe(l.split("."),c.split(".")))return!1}const g=f.findIndex((e=>"0"!==e))+1,y="~"===a?2:g>1?g:1;return 0===oe(p.slice(0,y),f.slice(0,y))&&-1!==oe(p.slice(y),f.slice(y))},ce=({name:t,refId:n,fields:a,items:r})=>{const i=new e.MutableDataFrame({name:t,refId:n,fields:a.map((({name:e,type:t})=>({name:e,type:t})))});return r.forEach((e=>{i.appendRow([...a.map((({getValue:t})=>t(e)))])})),i},pe=(t,n={})=>Object.keys(t).reduce(((a,r)=>{const i=n[r]||(e=>e[r]),o=i(t);return a.concat({name:r,type:(0,e.getFieldTypeFromValue)(o),getValue:i})}),[]),fe=((e,t="log")=>({log:(...n)=>{(0,console[t])(`[${e}]: ${n}`)}}))("Error","error");var ge=s(545);const ye=(0,ge.getAppEvents)(),ve=t=>{ye.publish({type:e.AppEvents.alertError.name,payload:t}),fe.log(t)},me=(e,t=!0,n="Feature is not available.")=>{return t?e:(a=n,()=>Promise.reject(new Error(a)));var a};var he=s(177);class be{constructor(e){var t;t=void 0,"api"in this?Object.defineProperty(this,"api",{value:t,enumerable:!0,configurable:!0,writable:!0}):this.api=t,this.api=e}}function Te(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,r)}function Oe(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){Te(i,a,r,o,l,"next",e)}function l(e){Te(i,a,r,o,l,"throw",e)}o(void 0)}))}}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Ae extends be{constructor(...t){super(...t);var n,a=this;Ee(this,"getAll",(n=Oe((function*(e,t,n,r){let i={};e.annotationRange===I.SELECTED&&(i.from=t.from.valueOf(),i.to=t.to.valueOf()),e.annotationDashboard===R.THIS&&n&&(i.dashboardUID=n),e.annotationLimit&&(i.limit=e.annotationLimit),e.annotationType===S.ALERT?i.type=S.ALERT:e.annotationType===S.ANNOTATION&&(i.type=S.ANNOTATION);const o=yield(0,he.lastValueFrom)((0,ge.getBackendSrv)().fetch({method:"GET",params:i,url:`${a.api.instanceSettings.url}/api/annotations`}));if(!o||!o.data)return ve([$,q]),[];let l=o.data;if(e.annotationPattern){const t=(0,ge.getTemplateSrv)().replace(e.annotationPattern,r);l=l.filter((e=>{var n;return null===(n=e.text)||void 0===n?void 0:n.match(t)}))}return e.annotationPrevState&&(l=l.filter((t=>t.prevState===e.annotationPrevState))),e.annotationNewState&&(l=l.filter((t=>t.newState===e.annotationNewState))),l})),function(e,t,a,r){return n.apply(this,arguments)}));var r=this;Ee(this,"getFrame",function(){var t=Oe((function*(t,n,a,i){const o=yield r.getAll(t,n,a,i);if(!o.length)return[];const l=[{name:"Id",type:e.FieldType.number},{name:"Alert Id",type:e.FieldType.number},{name:"Dashboard Id",type:e.FieldType.number},{name:"Dashboard UID",type:e.FieldType.string},{name:"Panel Id",type:e.FieldType.number},{name:"Time",type:e.FieldType.time},{name:"Time End",type:e.FieldType.time},{name:"Login",type:e.FieldType.string},{name:"Email",type:e.FieldType.string},{name:"Avatar URL",type:e.FieldType.string},{name:"Tags",type:e.FieldType.string},{name:"Text",type:e.FieldType.string},{name:"Prev State",type:e.FieldType.string},{name:"New State",type:e.FieldType.string},{name:"Labels",type:e.FieldType.string},{name:"Values",type:e.FieldType.string}],s={};!1!==t.annotationRules&&t.annotationType!==S.ANNOTATION&&((yield r.api.features.provisioning.getAlertRules().catch((()=>[]))).forEach((e=>s[e.id]=e)),l.push({name:"Alert Name",type:e.FieldType.string},{name:"Alert UID",type:e.FieldType.string}));const u=new e.MutableDataFrame({name:H.ANNOTATIONS,refId:t.refId,fields:l});return o.forEach((n=>{var a,r,i,o;let l="{}",d="";const c=null===(a=n.text)||void 0===a?void 0:a.match(/{([^}]+)} - ([^}]*)/);if((null===(r=c)||void 0===r?void 0:r.length)&&c[1]){const t={};c[1].split(", ").forEach((e=>{const n=e.split("=");n.length&&(t[n[0]]=n[1]||"")})),l=(0,e.formatLabels)(t)}(null===(i=c)||void 0===i?void 0:i.length)&&c[2]&&(d=c[2]);const p=[n.id,n.alertId,n.dashboardId,n.dashboardUID,n.panelId,n.time,n.timeEnd,n.login,n.email,n.avatarUrl,null===(o=n.tags)||void 0===o?void 0:o.join(","),n.text,n.prevState,n.newState,l,d];if(!1!==t.annotationRules&&t.annotationType!==S.ANNOTATION){const e=n.alertId&&s[n.alertId]?s[n.alertId].title:"",t=n.alertId&&s[n.alertId]?s[n.alertId].uid:"";p.push(e,t)}u.appendRow(p)})),[u]}));return function(e,n,a,r){return t.apply(this,arguments)}}())}}function Se(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,r)}function Re(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){Se(i,a,r,o,l,"next",e)}function l(e){Se(i,a,r,o,l,"throw",e)}o(void 0)}))}}function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Fe extends be{constructor(...t){super(...t);var n=this;Ie(this,"getAll",Re((function*(){const e=yield(0,he.lastValueFrom)((0,ge.getBackendSrv)().fetch({method:"GET",url:`${n.api.instanceSettings.url}/api/datasources`}));return e&&e.data?e.data:(ve([$,V]),[])})));var a,r=this;Ie(this,"getFrame",(a=Re((function*(t){const n=yield r.getAll();return n.length?[ce({name:H.DATASOURCES,refId:t.refId,fields:[{name:"Id",type:e.FieldType.number,getValue:e=>e.id},{name:"Org Id",type:e.FieldType.number,getValue:e=>e.orgId},{name:"UID",type:e.FieldType.string,getValue:e=>e.uid},{name:"Name",type:e.FieldType.string,getValue:e=>e.name},{name:"Type",type:e.FieldType.string,getValue:e=>e.type},{name:"Type Logo URL",type:e.FieldType.string,getValue:e=>e.typeLogoUrl},{name:"Type Name",type:e.FieldType.string,getValue:e=>e.typeName},{name:"Is Default",type:e.FieldType.boolean,getValue:e=>e.isDefault},{name:"Read Only",type:e.FieldType.boolean,getValue:e=>e.readOnly},{name:"URL",type:e.FieldType.string,getValue:e=>e.url},{name:"User",type:e.FieldType.string,getValue:e=>e.user}],items:n})]:[]})),function(e){return a.apply(this,arguments)}))}}function we(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,r)}function Le(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){we(i,a,r,o,l,"next",e)}function l(e){we(i,a,r,o,l,"throw",e)}o(void 0)}))}}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Ne extends be{constructor(...t){super(...t);var n=this;Pe(this,"get",Le((function*(){const e=yield(0,he.lastValueFrom)((0,ge.getBackendSrv)().fetch({method:"GET",url:`${n.api.instanceSettings.url}/api/health`}));if(e&&e.data)return e.data;ve([$,k])})));var a,r=this;Pe(this,"getFrame",(a=Le((function*(t){var n;const a=yield r.get();return(null===(n=a)||void 0===n?void 0:n.version)?[ce({name:H.HEALTH,refId:t.refId,fields:[{name:"Commit",type:e.FieldType.string,getValue:e=>e.commit},{name:"Database",type:e.FieldType.string,getValue:e=>e.database},{name:"Version",type:e.FieldType.string,getValue:e=>e.version}],items:[a]})]:[]})),function(e){return a.apply(this,arguments)}))}}function je(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,r)}function De(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){je(i,a,r,o,l,"next",e)}function l(e){je(i,a,r,o,l,"throw",e)}o(void 0)}))}}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Ue extends be{constructor(...e){super(...e);var t=this;Ce(this,"get",De((function*(){const e=yield(0,he.lastValueFrom)((0,ge.getBackendSrv)().fetch({method:"GET",url:`${t.api.instanceSettings.url}/api/org`}));if(e&&e.data)return e.data;ve([$,G])})));var n=this;Ce(this,"getUsers",De((function*(){const e=yield(0,he.lastValueFrom)((0,ge.getBackendSrv)().fetch({method:"GET",url:`${n.api.instanceSettings.url}/api/org/users`}));return e&&e.data?e.data:(ve([$,M]),[])})));var a,r=this;Ce(this,"getUsersFrame",(a=De((function*(e){const t=yield r.getUsers();return t.length?[ce({name:H.ORG_USERS,refId:e.refId,fields:pe(t[0]),items:t})]:[]})),function(e){return a.apply(this,arguments)}))}}function xe(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,r)}function qe(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){xe(i,a,r,o,l,"next",e)}function l(e){xe(i,a,r,o,l,"throw",e)}o(void 0)}))}}function Ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class ke extends be{constructor(t){super(t);var n=this;Ve(this,"getAlertRules",qe((function*(){const e=yield(0,he.lastValueFrom)((0,ge.getBackendSrv)().fetch({method:"GET",url:`${n.api.instanceSettings.url}/api/v1/provisioning/alert-rules`}));return e&&e.data?e.data:(ve([$,x]),[])})));var a,r=this;Ve(this,"getAlertRulesFrame",(a=qe((function*(t){const n=yield r.getAlertRules();return n.length?[ce({name:H.ALERT_RULES,refId:t.refId,fields:[{name:"Id",type:e.FieldType.number,getValue:e=>e.id},{name:"UID",type:e.FieldType.string,getValue:e=>e.uid},{name:"Org Id",type:e.FieldType.number,getValue:e=>e.orgID},{name:"Rule Group",type:e.FieldType.string,getValue:e=>e.ruleGroup},{name:"Title",type:e.FieldType.string,getValue:e=>e.title},{name:"Updated",type:e.FieldType.time,getValue:e=>e.updated},{name:"Folder UID",type:e.FieldType.string,getValue:e=>e.folderUID},{name:"Paused",type:e.FieldType.boolean,getValue:e=>e.isPaused},{name:"Evaluate For",type:e.FieldType.string,getValue:e=>e.for}],items:n})]:[]})),function(e){return a.apply(this,arguments)}))}}function Ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Me{constructor(e,t){var n;Ge(this,"instanceSettings",void 0),Ge(this,"targetInfo",void 0),Ge(this,"all",void 0),Ge(this,"features",void 0),Ge(this,"availableRequestTypes",void 0),this.instanceSettings=e,this.targetInfo=t,this.all={provisioning:new ke(this),annotations:new Ae(this),datasources:new Fe(this),health:new Ne(this),org:new Ue(this)};const a=[H.HEALTH,H.DATASOURCES,H.ANNOTATIONS,H.ORG_USERS],r=(null===(n=this.targetInfo)||void 0===n?void 0:n.version)||"0.0.0",i=de(r,">=10.*");i&&a.push(H.ALERT_RULES),this.availableRequestTypes=a,this.features={provisioning:{getAlertRules:me(this.all.provisioning.getAlertRules,i,"Alert Rules are supported since Grafana 10."),getAlertRulesFrame:me(this.all.provisioning.getAlertRulesFrame,i,"Alert Rules are supported since Grafana 10.")},annotations:{getAll:me(this.all.annotations.getAll),getFrame:me(this.all.annotations.getFrame)},datasources:{getAll:me(this.all.datasources.getAll),getFrame:me(this.all.datasources.getFrame)},health:{get:me(this.all.health.get),getFrame:me(this.all.health.getFrame)},org:{get:me(this.all.org.get),getUsers:me(this.all.org.getUsers),getUsersFrame:me(this.all.org.getUsersFrame)}}}}class $e extends e.DataSourceVariableSupport{constructor(){super()}}function He(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,r)}function _e(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){He(i,a,r,o,l,"next",e)}function l(e){He(i,a,r,o,l,"throw",e)}o(void 0)}))}}function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function We(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){Be(e,t,n[t])}))}return e}function ze(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}class Je extends e.DataSourceApi{initApi(){var e=this;return _e((function*(){e.getTargetPromise=Promise.all([e.api.features.health.get()]);const[t]=yield e.getTargetPromise;if(!t)throw new Error("Unable to get Health data.");e.targetInfo={version:t.version},e.api=new Me(ze(We({},e.instanceSettings),{url:e.instanceSettings.jsonData.requestMode===C.LOCAL?"":e.instanceSettings.url}),e.targetInfo),e.getTargetPromise=null}))()}query(e){var t=this;return _e((function*(){const n=[],{range:a,dashboardUID:r}=e;var i;return t.targetInfo||(t.getTargetPromise?yield t.getTargetPromise:yield t.initApi()),yield Promise.all(e.targets.map((i=_e((function*(i){let o=[];switch(i.requestType){case H.ALERT_RULES:o=yield t.api.features.provisioning.getAlertRulesFrame(i);break;case H.ANNOTATIONS:o=yield t.api.features.annotations.getFrame(i,a,r,e.scopedVars);break;case H.DATASOURCES:o=yield t.api.features.datasources.getFrame(i);break;case H.HEALTH:o=yield t.api.features.health.getFrame(i);break;case H.ORG_USERS:o=yield t.api.features.org.getUsersFrame(i)}o&&o.length&&n.push(...o)})),function(e){return i.apply(this,arguments)}))),{data:n}}))()}testDatasource(){var e=this;return _e((function*(){var t,n;const a=yield e.api.features.health.get(),r=yield e.api.features.org.get();return(null===(t=a)||void 0===t?void 0:t.version)&&(null===(n=r)||void 0===n?void 0:n.name)?{status:D.SUCCESS,message:`Connected to ${r.name}. Version ${a.version}`}:{status:D.ERROR,message:"Error. Not able connect."}}))()}constructor(e){super(e),Be(this,"instanceSettings",void 0),Be(this,"api",void 0),Be(this,"targetInfo",void 0),Be(this,"getTargetPromise",void 0),this.instanceSettings=e,this.getTargetPromise=null,this.api=new Me(ze(We({},e),{url:e.jsonData.requestMode===C.LOCAL?"":e.url})),this.annotations={},this.variables=new $e}}const Qe=new e.DataSourcePlugin(Je).setConfigEditor((({onOptionsChange:e,options:l})=>{var s;const u=(0,t.useCallback)((t=>{e(J(z({},l),{jsonData:J(z({},l.jsonData),{requestMode:t})}))}),[e,l]),d=(0,t.useCallback)((t=>{e(J(z({},l),{jsonData:J(z({},l.jsonData),{url:t.target.value})}))}),[e,l]),c=(0,t.useCallback)((t=>{e(J(z({},l),{secureJsonData:{token:t.target.value}}))}),[e,l]),{jsonData:p,secureJsonFields:f}=l,g=l.secureJsonData||{};var y;return(0,t.useEffect)((()=>{p.requestMode||u(C.REMOTE)}),[p.requestMode,u]),n().createElement(a.FieldSet,null,n().createElement(a.InlineFieldRow,null,n().createElement(a.InlineField,{label:"Request Mode",labelWidth:14,grow:!0,"data-testid":o},n().createElement(a.RadioButtonGroup,{value:p.requestMode,options:U,onChange:u}))),p.requestMode===C.REMOTE&&n().createElement(n().Fragment,null,n().createElement(a.InlineFieldRow,null,n().createElement(a.InlineField,{label:"Grafana URL",labelWidth:14,grow:!0},n().createElement(a.Input,{type:"text",placeholder:"http://localhost:3000",value:p.url,onChange:d,"data-testid":i}))),n().createElement(a.InlineFieldRow,null,n().createElement(a.InlineField,{label:"Token",labelWidth:14,grow:!0},n().createElement(a.Input,{type:"password",placeholder:(null===(s=f)||void 0===s?void 0:s.token)?"configured":"",value:null!==(y=g.token)&&void 0!==y?y:"",onChange:c,"data-testid":r})))))})).setQueryEditor((({onChange:e,onRunQuery:r,query:i,datasource:o})=>{var l,s,u,c,f;const[h,T]=(0,t.useState)(!1);(0,t.useEffect)((()=>{h||(r(),T(!0))}),[h,r]);const E=(0,t.useCallback)((R=K((function*(t){e(ee(Z({},i),{requestType:t.value})),r()})),function(e){return R.apply(this,arguments)}),[e,r,i]);var R;const I=(0,t.useCallback)(function(){var t=K((function*(t){e(ee(Z({},i),{annotationType:t})),r()}));return function(e){return t.apply(this,arguments)}}(),[e,r,i]),F=(0,t.useCallback)(function(){var t=K((function*(t){e(ee(Z({},i),{annotationDashboard:t})),r()}));return function(e){return t.apply(this,arguments)}}(),[e,r,i]),D=(0,t.useCallback)(function(){var t=K((function*(t){e(ee(Z({},i),{annotationRules:t})),r()}));return function(e){return t.apply(this,arguments)}}(),[e,r,i]),C=(0,t.useCallback)(function(){var t=K((function*(t){e(ee(Z({},i),{annotationRange:t})),r()}));return function(e){return t.apply(this,arguments)}}(),[e,r,i]),U=(0,t.useCallback)(function(){var t=K((function*(t){e(ee(Z({},i),{annotationPattern:t.currentTarget.value})),r()}));return function(e){return t.apply(this,arguments)}}(),[e,r,i]),x=(0,t.useCallback)(function(){var t=K((function*(t){e(ee(Z({},i),{annotationLimit:Number(t.currentTarget.value)})),r()}));return function(e){return t.apply(this,arguments)}}(),[e,r,i]),q=(0,t.useCallback)(function(){var t=K((function*(t){e(ee(Z({},i),{annotationPrevState:t})),r()}));return function(e){return t.apply(this,arguments)}}(),[e,r,i]),V=(0,t.useCallback)(function(){var t=K((function*(t){e(ee(Z({},i),{annotationNewState:t})),r()}));return function(e){return t.apply(this,arguments)}}(),[e,r,i]),k=(0,Q.defaults)(i,B),G=(0,t.useMemo)((()=>_.filter((e=>o.api.availableRequestTypes.some((t=>t===e.value||e.value===H.NONE))))),[o.api.availableRequestTypes]);return n().createElement(n().Fragment,null,n().createElement(a.InlineFieldRow,null,n().createElement(a.InlineField,{grow:!0,label:"Request",labelWidth:10},n().createElement(a.Select,{options:G,value:k.requestType,onChange:E,"aria-label":A}))),k.requestType===H.ANNOTATIONS&&n().createElement(n().Fragment,null,n().createElement(a.InlineFieldRow,null,n().createElement(a.InlineField,{label:"Type",labelWidth:10,"data-testid":O},n().createElement(a.RadioButtonGroup,{options:w,value:null===(l=w.find((e=>e.value===k.annotationType)))||void 0===l?void 0:l.value,onChange:I})),n().createElement(a.InlineField,{label:"Dashboards",labelWidth:10,"data-testid":d},n().createElement(a.RadioButtonGroup,{options:L,value:null===(s=L.find((e=>e.value===k.annotationDashboard)))||void 0===s?void 0:s.value,onChange:F})),n().createElement(a.InlineField,{label:"Time Range",labelWidth:12,"data-testid":b},n().createElement(a.RadioButtonGroup,{options:P,value:null===(u=P.find((e=>e.value===k.annotationRange)))||void 0===u?void 0:u.value,onChange:C}))),k.annotationType===S.ALERT&&n().createElement(a.InlineFieldRow,null,n().createElement(a.InlineField,{label:"Prev State",labelWidth:10,"data-testid":m},n().createElement(a.RadioButtonGroup,{options:N,value:null===(c=N.find((e=>e.value===k.annotationPrevState)))||void 0===c?void 0:c.value,onChange:q})),n().createElement(a.InlineField,{label:"New State",labelWidth:10,"data-testid":y},n().createElement(a.RadioButtonGroup,{options:N,value:null===(f=N.find((e=>e.value===k.annotationNewState)))||void 0===f?void 0:f.value,onChange:V}))),n().createElement(a.InlineFieldRow,null,n().createElement(a.InlineField,{label:"Text Pattern",labelWidth:20,grow:!0,tooltip:"Regex format. Support variables."},n().createElement(a.Input,{value:k.annotationPattern,onChange:U,"data-testid":v})),n().createElement(a.InlineField,{label:"Max Limit",labelWidth:10},n().createElement(a.Input,{type:"number",value:k.annotationLimit,onChange:x,"data-testid":g}))),k.annotationType!==S.ANNOTATION&&n().createElement(a.InlineFieldRow,null,n().createElement(a.InlineField,{label:"Add Alert fields",tooltip:"Add Alert Name and Alert UID from provisioned alert rules",labelWidth:20,"data-testid":p},n().createElement(a.RadioButtonGroup,{options:j,value:k.annotationRules,onChange:D})))))}))})(),u})()));
//# sourceMappingURL=module.js.map