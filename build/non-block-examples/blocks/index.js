(()=>{var e={8900:()=>{window.wp.hooks.addFilter("blocks.registerBlockType","xapp/blocks/supports",(function(e,t){return"core/cover"==t&&(e.supports={...e.supports,align:!1,typography:!1,borderRadius:!0,__experimentalBorder:{width:!1,radius:!0}}),"core/group"===t&&(e.supports={...e.supports,spacing:{},dimensions:{},color:{text:!1,background:!1,gradients:!1},typography:{},__experimentalBorder:{}}),e}))},4184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)o.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},9196:e=>{"use strict";e.exports=window.React},2175:e=>{"use strict";e.exports=window.wp.blockEditor},5609:e=>{"use strict";e.exports=window.wp.components},7798:e=>{"use strict";e.exports=window.wp.coreData},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e,t=r(9307),o=r(2175),n=r(9196),s=r(5609),i=new Uint8Array(16);function a(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(i)}const l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=[],p=0;p<256;++p)c.push((p+256).toString(16).substr(1));const u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&l.test(e)}(r))throw TypeError("Stringified UUID is invalid");return r},d=function(e,t,r){var o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(var n=0;n<16;++n)t[r+n]=o[n];return t}return u(o)};var m=r(7798);const{withSelect:g,withDispatch:y,select:b,useSelect:f}=wp.data,h=(e,t=[],r={})=>{if("object"==typeof e&&null!==e)for(const o of Object.keys(e))h(e[o],t.concat(o),r);else r[t.join("_")]=e;return r},{__}=wp.i18n,{addFilter:w}=wp.hooks,{createHigherOrderComponent:v}=wp.compose,{useSelect:k}=wp.data,E=["xapp/text-block","core/heading","core/paragraph"];let x=[];const C=v((e=>r=>{const{name:i,attributes:a,setAttributes:l,clientId:c}=r,{blockId:p}=a,u=k((e=>e("core/editor").getCurrentPostType()),[]),[g,y]=(0,m.useEntityProp)("postType",u,"meta");return(0,n.useEffect)((()=>{const e=`b${d().replaceAll("-","")}`;p&&x.includes(e)||l({blockId:e}),x.push(p)}),[]),(0,n.useEffect)((()=>{(e=>{if(E.includes(i)){!a.contentKey&&e&&l({contentKey:`block_${e}`});let t=a.content;e&&((e,t,r,o)=>{let n={[`block_${r}`]:h(o)};e.blockLocales&&""!==e.blockLocales&&(n={...JSON.parse(e.blockLocales),...n}),t({...e,blockLocales:JSON.stringify(n)})})(g,y,e,{text:t})}})(a.blockId)}),[a?.content]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,r),(0,t.createElement)(o.InspectorControls,{key:"settings"},(0,t.createElement)(s.PanelBody,{title:__("Block Info")},__("Block Id: ","xapps"),(0,t.createElement)("p",null,p))))}),"withAdvancedControls");w("blocks.registerBlockType","xapp/block-attributes",(function(e){return e.attributes=Object.assign(e.attributes,{blockId:{type:"string",default:""}}),E.includes(e.name)&&(e.attributes=Object.assign(e.attributes,{contentKey:{type:"string",default:""}})),e})),w("editor.BlockEdit","xapp/custom-advanced-control",C);var S=r(4184),H=r.n(S),_=r(5736);function B({displayLayout:e,setDisplayLayout:r}){const o=[{icon:(0,t.createElement)("svg",{class:"bb-icon bb-icon--slides",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M5 14V6h10v8H5zm-3-1V7h2v6H2zm4-6v6h8V7H6zm10 0h2v6h-2V7zm-3 2V8H7v1h6zm0 3v-2H7v2h6z"})),title:(0,_.__)("Horizontal List view","content-blocks-builder"),onClick:()=>r({type:"list-view"}),isActive:"list-view"===e?.type}];return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(s.ToolbarGroup,{controls:o}))}const{__:O}=wp.i18n,{addFilter:j}=wp.hooks,{createHigherOrderComponent:F}=wp.compose,A=["core/query"],L=F((e=>r=>{const{name:n,attributes:i,setAttributes:a,isSelected:l}=r,{isSearchQuery:c,hasPagination:p,displayLayout:u={}}=i;let d=r;A.includes(n)&&(d={...r,attributes:{...i,className:H()("xapp-query-list-view")}});let m="";return A.includes(n)&&"list-view"===u.type&&(m="xapp-query-list-view"),(0,t.createElement)(t.Fragment,null,A.includes(n)?(0,t.createElement)("div",{className:m},(0,t.createElement)(e,d)):(0,t.createElement)(e,r),l&&A.includes(n)&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(B,{displayLayout:u,setDisplayLayout:e=>{a({displayLayout:{...e}})}})),(0,t.createElement)(o.InspectorControls,{key:"inspector"},(0,t.createElement)(s.PanelBody,{title:O("XAPP Settings")},(0,t.createElement)(s.ToggleControl,{label:O("Search Query"),checked:!!c,help:O("Enable only if block is being used for search results"),onChange:()=>{a({isSearchQuery:!c})}}),(0,t.createElement)(s.ToggleControl,{label:O("Enable pagination"),checked:!!p,help:O("Enable pagination on app"),onChange:()=>{a({hasPagination:!p})}})))))}),"withAdvancedControls");j("blocks.registerBlockType","xapp/custom-attributes",(function(e){return A.includes(e.name)?(e.attributes=Object.assign(e.attributes,{isSearchQuery:{type:"boolean",default:!1},hasPagination:{type:"boolean",default:""}}),e):e})),j("editor.BlockEdit","xapp/custom-advanced-control",L);const{__:P}=wp.i18n,{addFilter:I}=wp.hooks,{createHigherOrderComponent:T}=wp.compose,V=["core/cover"],z=T((e=>r=>{const{name:o,attributes:s,setAttributes:i,isSelected:a}=r,{minHeight:l,minHeightUnit:c,isHeightFull:p}=s;let u=r;return(0,n.useEffect)((()=>{100==l&&"vh"==c&&i({minHeight:804,minHeightUnit:"px",isHeightFull:!0}),i({isHeightFull:804==l})}),[l,c]),(0,t.createElement)(t.Fragment,null,V.includes(o)?(0,t.createElement)("div",{className:""},(0,t.createElement)(e,u)):(0,t.createElement)(e,r))}),"withAdvancedControls");I("blocks.registerBlockType","xapp/custom-attributes",(function(e){return V.includes(e.name)?(e.attributes=Object.assign(e.attributes,{isHeightFull:{type:"boolean",default:!1}}),e):e})),I("editor.BlockEdit","editorskit/custom-advanced-control",z),r(8900)})()})();