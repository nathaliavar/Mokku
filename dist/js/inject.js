!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=97)}({100:function(e,t,r){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())},101:function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function s(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],s(r),s(n))}function a(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=s(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=a(r[0]);n!==r[0]&&(t[r[0]]=n)}r=o.exec(e)}t["%C2"]="�";for(var s=Object.keys(t),i=0;i<s.length;i++){var u=s[i];e=e.replace(new RegExp(u,"g"),t[u])}return e}(e)}}},102:function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},103:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(){this._id=0}getId(){return this._id++,this._id}}},104:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(){this._collector={}}dispatch(e,t){this._collector[e]?this._collector[e](t):this._defaultListner(t)}addLister(e,t){this._collector[e]=t}createDefaultListener(e){this._defaultListner=e}}},15:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},24:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isValidJSON=e=>{try{return JSON.parse(e),{error:void 0}}catch(t){let r=void 0,n=void 0;const o=new RegExp(/(?<=\bposition\s)(\w+)/g),s=t.toString();if("Unexpected end of JSON input"!==s){const t=o.exec(s);if(r=t&&t.length>0?parseInt(t[0],10):void 0,r){n=1;for(let t=0;t<e.length&&t!==r;t++)"\n"===e[t]&&n++}o.lastIndex=0}return{error:`${s}${n?" and at line number "+n:""}`,position:r,lineNumber:n}}},t.getError=e=>{const t=Object.keys(e);return 0===t.length?void 0:e[t[0]]},t.getHeaders=e=>Object.keys(e).map(t=>({name:t,value:e[t]}))},97:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(98),o=r(99),s=r(103),a=r(104),i=r(24),u=new a.default,c=new s.default,l=new s.default;window.addEventListener("message",(function(e){if(e.source!=window)return;const t=e.data;"HOOK_SCRIPT"===t.to&&u.dispatch(t.id,t.message)}));const f=(e,t,r)=>{const n=r?c.getId():null,o={id:n,message:e,to:"CONTENT_SCRIPT",from:"HOOK_SCRIPT",extenstionName:"MOKKU",type:t};if(window.postMessage(o,"*"),null!==n)return new Promise(e=>{u.addLister(n,e)})};n.before((function(e,t){const r=e.url.indexOf("?");-1!==r?e.url.substr(0,r):e.url,-1!==r&&JSON.stringify(o.parse(e.url.substr(r)));e.mokku={id:l.getId()};const n=d(e);f(n,"LOG",!1),f(n,"QUERY",!0).then(e=>{if(e&&e.mockResponse){const r=e.mockResponse,n=r.headers?r.headers.reduce((e,t)=>(e[t.name]=t.value,e),{}):{"content-type":"application/json; charset=UTF-8"},o={status:r.status,text:r.response?r.response:"",headers:n,type:"json"};r.delay?setTimeout(()=>{t(o)},r.delay):t(o)}else t()}).catch(()=>{console.log("something went wrong!")})}));const d=(e,t)=>{var r;const n=e.url.indexOf("?"),s=-1!==n?e.url.substr(0,n):e.url,a=-1!==n?JSON.stringify(o.parse(e.url.substr(n))):void 0;return{request:{url:s,body:"object"==typeof e.body?JSON.stringify(e.body):e.body,queryParams:a,method:e.method,headers:i.getHeaders(e.headers)},response:t,id:null===(r=e.mokku)||void 0===r?void 0:r.id}};n.after((function(e,t){try{if("function"==typeof t.clone){const r=t.clone();if("string"==typeof r.text){const t=d(e,{status:r.status,response:r.text,headers:i.getHeaders(r.headers)});f(t,"LOG",!1)}else r.text().then(t=>{const n=d(e,{status:r.status,response:t,headers:i.getHeaders(r.headers)});f(n,"LOG",!1)})}else{const r=d(e,{status:t.status,response:"string"==typeof t.text?t.text:"Cannot parse response, logging libraries can cause this.",headers:i.getHeaders(t.headers)});f(r,"LOG",!1)}}catch(t){const r=d(e,{status:0,response:void 0,headers:[]});f(r,"LOG",!1),console.log("INJECT_ERROR",t)}}))},98:function(e,t,r){(function(r){var n;(function(o){var s,a,i,u,c,l,f,d,p,y,h,g,m,v,b,x,O,w,j,E,S,N,R,L,T,k,C=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};y=null,y="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:void 0!==r?r:window,O=y.document,d="addEventListener",f="removeEventListener",i="dispatchEvent",v="XMLHttpRequest",p=["load","loadend","loadstart"],s=["progress","abort","error","timeout"],L="undefined"!=typeof navigator&&navigator.useragent?navigator.userAgent:"",E=parseInt((/msie (\d+)/.exec(L.toLowerCase())||[])[1]),isNaN(E)&&(E=parseInt((/trident\/.*; rv:(\d+)/.exec(L.toLowerCase())||[])[1])),(k=Array.prototype).indexOf||(k.indexOf=function(e){var t,r,n;for(t=r=0,n=this.length;r<n;t=++r)if(this[t]===e)return t;return-1}),R=function(e,t){return Array.prototype.slice.call(e,t)},x=function(e){return"returnValue"===e||"totalSize"===e||"position"===e},j=function(e,t){var r;for(r in e)if(e[r],!x(r))try{t[r]=e[r]}catch(e){}return t},S=function(e){return void 0===e?null:e},N=function(e,t,r){var n,o,s,a;for(o=function(e){return function(n){var o,s,a;for(s in o={},n)x(s)||(a=n[s],o[s]=a===t?r:a);return r[i](e,o)}},s=0,a=e.length;s<a;s++)n=e[s],r._has(n)&&(t["on"+n]=o(n))},w=function(e){var t;if(O&&null!=O.createEventObject)return(t=O.createEventObject()).type=e,t;try{return new Event(e)}catch(t){return{type:e}}},(T=(a=function(e){var t,r,n;return r={},n=function(e){return r[e]||[]},(t={})[d]=function(e,t,s){r[e]=n(e),r[e].indexOf(t)>=0||(s=s===o?r[e].length:s,r[e].splice(s,0,t))},t[f]=function(e,t){var s;e!==o?(t===o&&(r[e]=[]),-1!==(s=n(e).indexOf(t))&&n(e).splice(s,1)):r={}},t[i]=function(){var r,o,s,a,i,u,c;for(o=(r=R(arguments)).shift(),e||(r[0]=j(r[0],w(o))),(a=t["on"+o])&&a.apply(t,r),s=i=0,u=(c=n(o).concat(n("*"))).length;i<u;s=++i)c[s].apply(t,r)},t._has=function(e){return!(!r[e]&&!t["on"+e])},e&&(t.listeners=function(e){return R(n(e))},t.on=t[d],t.off=t[f],t.fire=t[i],t.once=function(e,r){var n;return n=function(){return t.off(e,n),r.apply(null,arguments)},t.on(e,n)},t.destroy=function(){return r={}}),t})(!0)).EventEmitter=a,T.before=function(e,t){if(e.length<1||e.length>2)throw"invalid hook";return T[d]("before",e,t)},T.after=function(e,t){if(e.length<2||e.length>3)throw"invalid hook";return T[d]("after",e,t)},T.enable=function(){y[v]=m,"function"==typeof h&&(y.fetch=h),c&&(y.FormData=g)},T.disable=function(){y[v]=T[v],y.fetch=T.fetch,c&&(y.FormData=c)},b=T.headers=function(e,t){var r,n,o,s,a,i,u,c,l;switch(null==t&&(t={}),typeof e){case"object":for(o in n=[],e)a=e[o],s=o.toLowerCase(),n.push(s+":\t"+a);return n.join("\n")+"\n";case"string":for(u=0,c=(n=e.split("\n")).length;u<c;u++)r=n[u],/([^:]+):\s*(.+)/.test(r)&&(s=null!=(l=RegExp.$1)?l.toLowerCase():void 0,i=RegExp.$2,null==t[s]&&(t[s]=i));return t}},c=y.FormData,g=function(e){var t,r;this.fd=e?new c(e):new c,this.form=e,t=[],Object.defineProperty(this,"entries",{get:function(){return(e?R(e.querySelectorAll("input,select")).filter((function(e){var t;return"checkbox"!==(t=e.type)&&"radio"!==t||e.checked})).map((function(e){return[e.name,"file"===e.type?e.files:e.value]})):[]).concat(t)}}),this.append=(r=this,function(){var e;return e=R(arguments),t.push(e),r.fd.append.apply(r.fd,e)})},c&&(T.FormData=c,y.FormData=g),l=y[v],T[v]=l,m=y[v]=function(){var e,t,r,n,o,u,c,l,f,y,h,m,x,O,w,R,L,k,_,F;L=new T[v],x=null,u=void 0,O=void 0,h=void 0,f=function(){var e,t,r,n;if(h.status=x||L.status,-1===x&&E<10||(h.statusText=L.statusText),-1!==x)for(e in n=b(L.getAllResponseHeaders()))r=n[e],h.headers[e]||(t=e.toLowerCase(),h.headers[t]=r)},l=function(){if(L.responseType&&"text"!==L.responseType)"document"===L.responseType?(h.xml=L.responseXML,h.data=L.responseXML):h.data=L.response;else{h.text=L.responseText,h.data=L.responseText;try{h.xml=L.responseXML}catch(e){}}"responseURL"in L&&(h.finalUrl=L.responseURL)},R=function(){o.status=h.status,o.statusText=h.statusText},w=function(){"text"in h&&(o.responseText=h.text),"xml"in h&&(o.responseXML=h.xml),"data"in h&&(o.response=h.data),"finalUrl"in h&&(o.responseURL=h.finalUrl)},r=function(r){for(;r>e&&e<4;)o.readyState=++e,1===e&&o[i]("loadstart",{}),2===e&&R(),4===e&&(R(),w()),o[i]("readystatechange",{}),4===e&&(!1===y.async?t():setTimeout(t,0))},t=function(){u||o[i]("load",{}),o[i]("loadend",{}),u&&(o.readyState=0)},e=0,m=function(e){var t,n;4===e?(t=T.listeners("after"),(n=function(){var e;return t.length?2===(e=t.shift()).length?(e(y,h),n()):3===e.length&&y.async?e(y,h,n):n():r(4)})()):r(e)},o=(y={}).xhr=a(),L.onreadystatechange=function(e){try{2===L.readyState&&f()}catch(e){}4===L.readyState&&(O=!1,f(),l()),m(L.readyState)},c=function(){u=!0},o[d]("error",c),o[d]("timeout",c),o[d]("abort",c),o[d]("progress",(function(){e<3?m(3):o[i]("readystatechange",{})})),("withCredentials"in L||T.addWithCredentials)&&(o.withCredentials=!1),o.status=0;for(k=0,_=(F=s.concat(p)).length;k<_;k++)n=F[k],o["on"+n]=null;return o.open=function(t,r,n,o,s){e=0,u=!1,O=!1,y.headers={},y.headerNames={},y.status=0,(h={}).headers={},y.method=t,y.url=r,y.async=!1!==n,y.user=o,y.pass=s,m(1)},o.send=function(e){var t,r,n,a,i,u,c,l;for(u=0,c=(l=["type","timeout","withCredentials"]).length;u<c;u++)(n="type"===(r=l[u])?"responseType":r)in o&&(y[r]=o[n]);y.body=e,i=function(){var e,t,a,i,u,c;for(N(s,L,o),o.upload&&N(s.concat(p),L.upload,o.upload),O=!0,L.open(y.method,y.url,y.async,y.user,y.pass),a=0,i=(u=["type","timeout","withCredentials"]).length;a<i;a++)n="type"===(r=u[a])?"responseType":r,r in y&&(L[n]=y[r]);for(e in c=y.headers)t=c[e],e&&L.setRequestHeader(e,t);y.body instanceof g&&(y.body=y.body.fd),L.send(y.body)},t=T.listeners("before"),(a=function(){var e,r;return t.length?((e=function(e){if("object"==typeof e&&("number"==typeof e.status||"number"==typeof h.status))return j(e,h),C.call(e,"data")<0&&(e.data=e.response||e.text),void m(4);a()}).head=function(e){return j(e,h),m(2)},e.progress=function(e){return j(e,h),m(3)},1===(r=t.shift()).length?e(r(y)):2===r.length&&y.async?r(y,e):e()):i()})()},o.abort=function(){x=-1,O?L.abort():o[i]("abort",{})},o.setRequestHeader=function(e,t){var r,n;r=null!=e?e.toLowerCase():void 0,n=y.headerNames[r]=y.headerNames[r]||e,y.headers[n]&&(t=y.headers[n]+", "+t),y.headers[n]=t},o.getResponseHeader=function(e){var t;return t=null!=e?e.toLowerCase():void 0,S(h.headers[t])},o.getAllResponseHeaders=function(){return S(b(h.headers))},L.overrideMimeType&&(o.overrideMimeType=function(){return L.overrideMimeType.apply(L,arguments)}),L.upload&&(o.upload=y.upload=a()),o.UNSENT=0,o.OPENED=1,o.HEADERS_RECEIVED=2,o.LOADING=3,o.DONE=4,o.response="",o.responseText="",o.responseXML=null,o.readyState=0,o.statusText="",o},"function"==typeof y.fetch&&(u=y.fetch,T.fetch=u,h=y.fetch=function(e,t){var r,n,o;return null==t&&(t={headers:{}}),t.url=e,o=null,n=T.listeners("before"),r=T.listeners("after"),new Promise((function(e,s){var a,i,c,l,f;i=function(){return t.body instanceof g&&(t.body=t.body.fd),t.headers&&(t.headers=new Headers(t.headers)),o||(o=new Request(t.url,t)),j(t,o)},c=function(t){var n;return r.length?2===(n=r.shift()).length?(n(i(),t),c(t)):3===n.length?n(i(),t,c):c(t):e(t)},a=function(t){var r;if(void 0!==t)return r=new Response(t.body||t.text,t),e(r),void c(r);l()},l=function(){var e;if(n.length)return 1===(e=n.shift()).length?a(e(t)):2===e.length?e(i(),a):void 0;f()},f=function(){return u(i()).then((function(e){return c(e)})).catch((function(e){return c(e),s(e)}))},l()}))}),m.UNSENT=0,m.OPENED=1,m.HEADERS_RECEIVED=2,m.LOADING=3,m.DONE=4,(n=function(){return T}.apply(t,[]))===o||(e.exports=n)}).call(this)}).call(this,r(15))},99:function(e,t,r){"use strict";const n=r(100),o=r(101),s=r(102);function a(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function i(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function c(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function l(e){const t=(e=c(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function f(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function d(e,t){a((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.split("").indexOf(e.arrayFormatSeparator)>-1?r.split(e.arrayFormatSeparator).map(t=>u(t,e)):null===r?r:u(r,e);n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){let[e,a]=s(t.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator"].includes(t.arrayFormat)?a:u(a,t),r(u(e,t),a,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=f(r[e],t);else n[e]=f(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=l,t.parse=d,t.stringify=(e,t)=>{if(!e)return"";a((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),"[",o,"]"].join("")]:[...r,[i(t,e),"[",i(o,e),"]=",i(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),"[]"].join("")]:[...r,[i(t,e),"[]=",i(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[i(t,e),"=",i(n,e)].join("")]:[[r,i(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,i(t,e)]:[...r,[i(t,e),"=",i(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map(r=>{const o=e[r];return void 0===o?"":null===o?i(r,t):Array.isArray(o)?o.reduce(n(r),[]).join("&"):i(r,t)+"="+i(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=s(e,"#");return Object.assign({url:r.split("?")[0]||"",query:d(l(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=c(e.url).split("?")[0]||"",o=t.extract(e.url),s=t.parse(o,{sort:!1}),a=Object.assign(s,e.query);let u=t.stringify(a,r);u&&(u="?"+u);let l=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(l="#"+i(e.fragmentIdentifier,r)),`${n}${u}${l}`}}});