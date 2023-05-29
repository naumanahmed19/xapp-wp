!function(){var e={9669:function(e,t,n){e.exports=n(1609)},5448:function(e,t,n){"use strict";var r=n(4867),i=n(6026),a=n(4372),o=n(5327),s=n(4097),c=n(4109),l=n(7985),u=n(7874),d=n(2648),f=n(644),p=n(205);e.exports=function(e){return new Promise((function(t,n){var m,h=e.data,g=e.headers,v=e.responseType;function E(){e.cancelToken&&e.cancelToken.unsubscribe(m),e.signal&&e.signal.removeEventListener("abort",m)}r.isFormData(h)&&r.isStandardBrowserEnv()&&delete g["Content-Type"];var x=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(w+":"+y)}var b=s(e.baseURL,e.url);function O(){if(x){var r="getAllResponseHeaders"in x?c(x.getAllResponseHeaders()):null,a={data:v&&"text"!==v&&"json"!==v?x.response:x.responseText,status:x.status,statusText:x.statusText,headers:r,config:e,request:x};i((function(e){t(e),E()}),(function(e){n(e),E()}),a),x=null}}if(x.open(e.method.toUpperCase(),o(b,e.params,e.paramsSerializer),!0),x.timeout=e.timeout,"onloadend"in x?x.onloadend=O:x.onreadystatechange=function(){x&&4===x.readyState&&(0!==x.status||x.responseURL&&0===x.responseURL.indexOf("file:"))&&setTimeout(O)},x.onabort=function(){x&&(n(new d("Request aborted",d.ECONNABORTED,e,x)),x=null)},x.onerror=function(){n(new d("Network Error",d.ERR_NETWORK,e,x,x)),x=null},x.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||u;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new d(t,r.clarifyTimeoutError?d.ETIMEDOUT:d.ECONNABORTED,e,x)),x=null},r.isStandardBrowserEnv()){var S=(e.withCredentials||l(b))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;S&&(g[e.xsrfHeaderName]=S)}"setRequestHeader"in x&&r.forEach(g,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete g[t]:x.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(x.withCredentials=!!e.withCredentials),v&&"json"!==v&&(x.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&x.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&x.upload&&x.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(m=function(e){x&&(n(!e||e&&e.type?new f:e),x.abort(),x=null)},e.cancelToken&&e.cancelToken.subscribe(m),e.signal&&(e.signal.aborted?m():e.signal.addEventListener("abort",m))),h||(h=null);var N=p(b);N&&-1===["http","https","file"].indexOf(N)?n(new d("Unsupported protocol "+N+":",d.ERR_BAD_REQUEST,e)):x.send(h)}))}},1609:function(e,t,n){"use strict";var r=n(4867),i=n(1849),a=n(321),o=n(7185),s=function e(t){var n=new a(t),s=i(a.prototype.request,n);return r.extend(s,a.prototype,n),r.extend(s,n),s.create=function(n){return e(o(t,n))},s}(n(5546));s.Axios=a,s.CanceledError=n(644),s.CancelToken=n(4972),s.isCancel=n(6502),s.VERSION=n(7288).version,s.toFormData=n(7675),s.AxiosError=n(2648),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=n(8713),s.isAxiosError=n(6268),e.exports=s,e.exports.default=s},4972:function(e,t,n){"use strict";var r=n(644);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},644:function(e,t,n){"use strict";var r=n(2648);function i(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}n(4867).inherits(i,r,{__CANCEL__:!0}),e.exports=i},6502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:function(e,t,n){"use strict";var r=n(4867),i=n(5327),a=n(782),o=n(3572),s=n(7185),c=n(4097),l=n(4875),u=l.validators;function d(e){this.defaults=e,this.interceptors={request:new a,response:new a}}d.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&l.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var a,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!i){var d=[o,void 0];for(Array.prototype.unshift.apply(d,r),d=d.concat(c),a=Promise.resolve(t);d.length;)a=a.then(d.shift(),d.shift());return a}for(var f=t;r.length;){var p=r.shift(),m=r.shift();try{f=p(f)}catch(e){m(e);break}}try{a=o(f)}catch(e){return Promise.reject(e)}for(;c.length;)a=a.then(c.shift(),c.shift());return a},d.prototype.getUri=function(e){e=s(this.defaults,e);var t=c(e.baseURL,e.url);return i(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){d.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}d.prototype[e]=t(),d.prototype[e+"Form"]=t(!0)})),e.exports=d},2648:function(e,t,n){"use strict";var r=n(4867);function i(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var a=i.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){o[e]={value:e}})),Object.defineProperties(i,o),Object.defineProperty(a,"isAxiosError",{value:!0}),i.from=function(e,t,n,o,s,c){var l=Object.create(a);return r.toFlatObject(e,l,(function(e){return e!==Error.prototype})),i.call(l,e.message,t,n,o,s),l.name=e.name,c&&Object.assign(l,c),l},e.exports=i},782:function(e,t,n){"use strict";var r=n(4867);function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},4097:function(e,t,n){"use strict";var r=n(1793),i=n(7303);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},3572:function(e,t,n){"use strict";var r=n(4867),i=n(8527),a=n(6502),o=n(5546),s=n(644);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return c(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(c(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},7185:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function o(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function c(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||a,i=t(e);r.isUndefined(i)&&t!==c||(n[e]=i)})),n}},6026:function(e,t,n){"use strict";var r=n(2648);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},8527:function(e,t,n){"use strict";var r=n(4867),i=n(5546);e.exports=function(e,t,n){var a=this||i;return r.forEach(n,(function(n){e=n.call(a,e,t)})),e}},5546:function(e,t,n){"use strict";var r=n(4867),i=n(6016),a=n(2648),o=n(7874),s=n(7675),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,d={transitional:o,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=n(5448)),u),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,a=r.isObject(e),o=t&&t["Content-Type"];if((n=r.isFileList(e))||a&&"multipart/form-data"===o){var c=this.env&&this.env.FormData;return s(n?{"files[]":e}:e,c&&new c)}return a||"application/json"===o?(l(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(1623)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){d.headers[e]=r.merge(c)})),e.exports=d},7874:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:function(e){e.exports={version:"0.27.2"}},1849:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},5327:function(e,t,n){"use strict";var r=n(4867);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),a=o.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},7303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:function(e,t,n){"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6268:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},7985:function(e,t,n){"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},6016:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},1623:function(e){e.exports=null},4109:function(e,t,n){"use strict";var r=n(4867),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,o={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},205:function(e){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},8713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},7675:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){t=t||new FormData;var n=[];function i(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(a,o){if(r.isPlainObject(a)||r.isArray(a)){if(-1!==n.indexOf(a))throw Error("Circular reference detected in "+o);n.push(a),r.forEach(a,(function(n,a){if(!r.isUndefined(n)){var s,c=o?o+"."+a:a;if(n&&!o&&"object"==typeof n)if(r.endsWith(a,"{}"))n=JSON.stringify(n);else if(r.endsWith(a,"[]")&&(s=r.toArray(n)))return void s.forEach((function(e){!r.isUndefined(e)&&t.append(c,i(e))}));e(n,c)}})),n.pop()}else t.append(o,i(a))}(e),t}},4875:function(e,t,n){"use strict";var r=n(7288).version,i=n(2648),a={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){a[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};a.transitional=function(e,t,n){function a(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new i(a(r," has been removed"+(t?" in "+t:"")),i.ERR_DEPRECATED);return t&&!o[r]&&(o[r]=!0,console.warn(a(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),a=r.length;a-- >0;){var o=r[a],s=t[o];if(s){var c=e[o],l=void 0===c||s(c,o,e);if(!0!==l)throw new i("option "+o+" must be "+l,i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new i("Unknown option "+o,i.ERR_BAD_OPTION)}},validators:a}},4867:function(e,t,n){"use strict";var r,i=n(1849),a=Object.prototype.toString,o=(r=Object.create(null),function(e){var t=a.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return o(t)===e}}function c(e){return Array.isArray(e)}function l(e){return void 0===e}var u=s("ArrayBuffer");function d(e){return null!==e&&"object"==typeof e}function f(e){if("object"!==o(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var p=s("Date"),m=s("File"),h=s("Blob"),g=s("FileList");function v(e){return"[object Function]"===a.call(e)}var E=s("URLSearchParams");function x(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var w,y=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return w&&e instanceof w});e.exports={isArray:c,isArrayBuffer:u,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||a.call(e)===t||v(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:d,isPlainObject:f,isUndefined:l,isDate:p,isFile:m,isBlob:h,isFunction:v,isStream:function(e){return d(e)&&v(e.pipe)},isURLSearchParams:E,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:x,merge:function e(){var t={};function n(n,r){f(t[r])&&f(n)?t[r]=e(t[r],n):f(n)?t[r]=e({},n):c(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)x(arguments[r],n);return t},extend:function(e,t,n){return x(t,(function(t,r){e[r]=n&&"function"==typeof t?i(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,a,o={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)o[a=r[i]]||(t[a]=e[a],o[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:s,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(l(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:y,isFileList:g}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){"use strict";var e=window.wp.element,t=window.React,r=n(9669),i=n.n(r),a="https://xapp-api.azurewebsites.net";window?.xapp?.siteUrl;var o=window.wp.apiFetch,s=n.n(o),c=window.wp.i18n,l=window.wp.components,u=function(t){let{icon:n,size:r=24,...i}=t;return(0,e.cloneElement)(n,{width:r,height:r,...i})},d=window.wp.primitives,f=(0,e.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(d.Path,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"})),p=(0,e.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(d.Path,{d:"M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"})),m=(0,e.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(d.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})),h=t=>{let{status:n,onClick:r}=t;return(0,e.createElement)(e.Fragment,null,"installing"==n?(0,e.createElement)(l.Spinner,null):"","installed"==n?(0,e.createElement)("div",{className:"mx-auto flex items-center justify-center h-6 w-6 rounded-full bg-green-100"},(0,e.createElement)(u,{className:"h-4 w-6 text-green-400",icon:m})):"","error"==n?(0,e.createElement)("button",{onClick:r,type:"button",className:"inline-flex items-center px-2 py-1 leading-6 text-sm shadow rounded-md text-white bg-red-700 hover:bg-red-100}\n"},(0,c.__)("Retry","xapp")):"")},g=n=>{let{item:r}=n;const[i,a]=(0,t.useState)([]),[o,d]=(0,t.useState)(""),[g,v,E]=(0,t.useState)(!1),[x,w]=(0,t.useState)(!1),[y,b]=(0,t.useState)("Get Started"),[O,S]=(0,t.useState)(!1),[N,R]=(0,t.useState)(!1),[A,k]=(0,t.useState)(!1),[C,T]=(0,t.useState)({demo:0,title:r.title}),[j,_]=(0,t.useState)(0),[P,L]=(0,t.useState)(),[B,U]=(0,t.useState)({isLoading:!1,hasNetworkError:!1,status:""}),[D,I]=(0,t.useState)({isLoading:!1,hasNetworkError:!1,status:""}),z=()=>{var e=r.plugins.find((e=>e.main));if(e?.main)return e.slug},F=async()=>{b("importing data...");let e=r.demos[C?.demo].content;try{U({...B,isLoading:!0,status:"installing",hasNetworkError:!1});let t=await s()({path:"xapp/v1/import",method:"POST",data:{title:C.title,xappItemTitle:r.title,xappItemId:r.id,xappItemVersion:r.version,xappItemMainPluginSlug:z(),contentUrl:e,type:"content"}});t.id&&L(t.id)}catch(e){U({...B,status:"error",hasNetworkError:!0})}finally{U({...B,isLoading:!1,status:"installed"})}},q=(e,t)=>{let n=[...i];n[e].status=t,a(n)},M=async(e,t)=>{q(t,"installing");try{await s()({path:"xapp/v1/install-plugin",method:"POST",data:{plugin:e}}).then((()=>{q(t,"installed")}))}catch(e){q(t,"error"),w(!0)}};(0,t.useEffect)((()=>{}),[O]),(0,t.useEffect)((()=>{if(!i.length){let e=[...r.plugins];e.map((e=>(e.status=!1,e))),a(e)}}),[O]),(0,t.useEffect)((()=>{i.some((e=>"installing"==e.status))||"Get Started"===y||b("Next")}),[i]),(0,t.useEffect)((()=>{B.isLoading||D.isLoading||"Get Started"===y||b("Next")}),[B.isLoading,D.isLoading]);return(0,e.createElement)("div",null,(0,e.createElement)("div",{className:"border border-gray-300 rounded-lg  mb-3"},x?(0,e.createElement)("div",{class:"rounded-md bg-red-50 p-4 border-b"},(0,e.createElement)("div",{class:"flex"},(0,e.createElement)("div",{class:"flex-shrink-0"},(0,e.createElement)("svg",{class:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},(0,e.createElement)("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"}))),(0,e.createElement)("div",{class:"ml-3"},(0,e.createElement)("h3",{class:"text-sm font-medium text-red-800"},"Opps, Something went wrong"),(0,e.createElement)("div",{class:"mt-2 text-sm text-red-700"},(0,e.createElement)("ul",{role:"list",class:"list-disc pl-5 space-y-1"},(0,e.createElement)("li",null,"Demo conntent or plugins are not installed ")))))):"",(0,e.createElement)("div",{class:"grid lg:grid-cols-2"},(0,e.createElement)("div",{className:"border-r"},(0,e.createElement)("img",{src:r.thumbnail,alt:""})),(0,e.createElement)("div",{className:"flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl "},(0,e.createElement)("div",{className:"bg-gray-100 p-10  flex-1 "},(0,e.createElement)("div",null,(0,e.createElement)("p",{class:"text-sm text-gray-500"},(0,e.createElement)("time",{datetime:"2020-03-10"},r.category)),(0,e.createElement)("div",{class:"mt-2 block"},(0,e.createElement)("h2",{class:"text-xl font-semibold text-gray-900"},r.title,(0,e.createElement)("span",{class:"flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"},"Version ",r.version)),(0,e.createElement)("p",{class:"text-xs mt-2  text-indigo-600"},"Package Id - ",r.id)),(t=>{let n;switch(j){case 1:n=(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{class:"mt-3"},(0,e.createElement)("a",{href:"#",class:"text-base font-semibold text-indigo-600 hover:text-indigo-500"},"Installing Plugins"),(0,e.createElement)("p",{className:"mt-3"},"In order to get complete functionality, this app requires following plugins to be installed and activated.")),(0,e.createElement)("ul",{role:"list",class:"divide-y divide-gray-200"},i.map(((t,n)=>(0,e.createElement)("li",{class:"block"},(0,e.createElement)("div",{class:"flex items-center py-2"},(0,e.createElement)("div",{class:"flex min-w-0 flex-1 items-center"},(0,e.createElement)("div",{class:"flex-shrink-0"},(0,e.createElement)("div",{className:"relative mt-1 flex h-7 w-7 flex-none items-center bg-white justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"},(0,e.createElement)(u,{className:"text-gray-500",icon:f}))),(0,e.createElement)("div",{class:"min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"},(0,e.createElement)("div",null,(0,e.createElement)("p",{class:"truncate text-sm font-medium  mt-2"},t.name),(0,e.createElement)("p",{class:"mt-2 flex items-center text-sm text-gray-500"},(0,e.createElement)("span",{class:"truncate"},t.status))))),(0,e.createElement)("div",null,(0,e.createElement)(h,{status:t.status,onClick:()=>M(t,n)}))))))));break;case 2:n=(0,e.createElement)("div",{className:"mt-5"},(0,e.createElement)(l.TextControl,{label:(0,c.__)("App Name","xapp"),placeholder:(0,c.__)("Enter your app name","xapp"),value:C?.title,onChange:e=>{T({...C,title:e})}}),(0,e.createElement)("ul",{role:"list",class:"divide-y divide-gray-200 mt-3"},(0,e.createElement)("li",{class:"block hover:bg-gray-50"},(0,e.createElement)("div",{class:"flex items-center py-2"},(0,e.createElement)("div",{class:"flex min-w-0 flex-1 items-center"},(0,e.createElement)("div",{class:"flex-shrink-0"},(0,e.createElement)("div",{className:"relative mt-1 flex h-7 w-7 flex-none items-center bg-white justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"},(0,e.createElement)(u,{className:"text-gray-500",icon:p}))),(0,e.createElement)("div",{class:"min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"},(0,e.createElement)("div",null,(0,e.createElement)("p",{class:"truncate text-sm font-medium  mt-2"},"Import demo post data"),(0,e.createElement)("p",{class:"mt-2 flex items-center text-sm text-gray-500"},(0,e.createElement)("span",{class:"truncate"},B.status))))),(0,e.createElement)("div",null,(0,e.createElement)(h,{status:B.status,onClick:()=>F()}))))));break;case 3:n=(0,e.createElement)(e.Fragment,null,P?(0,e.createElement)("div",{className:"mt-7 mx-auto text-center w-60"},(0,e.createElement)("div",{className:"my-4 mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"},(0,e.createElement)(u,{className:"h-6 w-6 text-green-400",icon:m})),(0,e.createElement)("h3",null,C.title," is created."),(0,e.createElement)("a",{href:P,type:"button",className:"mt-3 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-3 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"},(0,c.__)(`Edit ${C.title}`))):"");break;default:n=(t=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)("p",{class:"mt-3 text-base text-gray-500"},t.description),(0,e.createElement)("a",{href:"#",class:"text-base font-semibold text-indigo-600 hover:text-indigo-500 mt-3"},"Required Plugins"),(0,e.createElement)("ul",{role:"list",className:"mt-3"},i.map((t=>(0,e.createElement)("li",{key:t.name},"- ",t.name," ",t.status))))))(t)}return n})(r))),3!=j?(0,e.createElement)("div",{class:"flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6"},(0,e.createElement)("div",{class:"flex justify-end space-x-3"}," ",(0,e.createElement)("button",{onClick:()=>0===j?(_(1),void b("Install Plugins")):1===j&&"Next"==y?(_(2),void b("Import Data")):1===j?(w(!1),v(!0),b("Installing Plugins..."),r.plugins.forEach(((e,t)=>{M(e,t)})),void v(!1)):2===j&&"Next"==y&&P?void _(3):2===j?(F(),void(async()=>{let e=r.demos[C?.demo].content;b("importing data...");try{I({...B,isLoading:!0,status:"installing",hasNetworkError:!1}),await s()({path:"xapp/v1/import",method:"POST",data:{title:C.title,xappItemTitle:r.title,xappItemId:r.id,xappItemVersion:r.version,xappItemMainPluginSlug:z(),contentUrl:e,type:"attachment"}})}catch(e){I({...B,status:"error",hasNetworkError:!0})}finally{I({...B,isLoading:!1,status:"installed"})}})()):void 0,type:"button",className:`inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400  \n${g?"transition ease-in-out duration-150 cursor-not-allowed":""}\n`,disabled:""},g?(0,e.createElement)("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},(0,e.createElement)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,e.createElement)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})):"",y)," ")):""))))},v=n.p+"images/logo.0eaf6ba7.png";const E={borderRight:"1px solid #eeeeee"},x={height:"30px"};var w=()=>(0,e.createElement)("div",{className:"xapp-logo",style:E},(0,e.createElement)("img",{src:v,style:x,alt:"xapp"}));const{__:__}=wp.i18n;var y=()=>{const[n,r]=(0,t.useState)([]),[o,s]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{(async()=>{i().defaults.baseURL=a,s(!0);try{let e=await i()({url:"/items",headers:{"Content-Type":"application/json"}});r(e.data)}catch(e){}finally{s(!1)}})()}),[]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{class:"mt-5 max-w-lg mx-auto lg:max-w-4xl"},(0,e.createElement)("div",{class:"relative  divide-y-2 divide-gray-200 border border-gray-300  bg-white  mb-3  rounded-lg "},(0,e.createElement)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py5"},(0,e.createElement)(w,null),(0,e.createElement)("p",{className:"mt-3 "},"Build and manage compatible android and iOS mobile apps directly from your WordPress"),(0,e.createElement)("div",{className:"mt-8 flex"},(0,e.createElement)("div",{className:"inline-flex rounded-md shadow"},(0,e.createElement)("a",{href:"https://xapp-wp.com/items",target:"_blank",className:"inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 hover:text-white focus:text-white active:text-white"},"App Templates")),(0,e.createElement)("div",{className:"ml-3 inline-flex"},(0,e.createElement)("a",{href:"https://docs.xapp-wp.com/",target:"_blank",className:"inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "},"Documentation"))))),o?(0,e.createElement)("div",{className:"text-center  mx-auto"},(0,e.createElement)("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 dark:text-gray-600 fill-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},(0,e.createElement)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,e.createElement)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))):(0,e.createElement)("div",null,n.map((t=>(0,e.createElement)("div",{key:t.title},(0,e.createElement)(g,{item:t})))))))};window.addEventListener("load",(function(){document.querySelector("#xapp-apps-page")&&(0,e.render)((0,e.createElement)(y,null),document.querySelector("#xapp-apps-page"))}),!1)}()}();