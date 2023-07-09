!function(){var e={8900:function(){window.wp.hooks.addFilter("blocks.registerBlockType","xapp/blocks/supports",(function(e,t){return"core/cover"==t&&(e.supports={...e.supports,align:!1,typography:!1,borderRadius:!0,__experimentalBorder:{width:!1,radius:!0}}),"core/group"===t&&(e.supports={...e.supports,spacing:{},dimensions:{},color:{text:!1,background:!1,gradients:!1},typography:{},__experimentalBorder:{}}),e}))},4184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},9196:function(e){"use strict";e.exports=window.React},2175:function(e){"use strict";e.exports=window.wp.blockEditor},5609:function(e){"use strict";e.exports=window.wp.components},7798:function(e){"use strict";e.exports=window.wp.coreData},9307:function(e){"use strict";e.exports=window.wp.element},5736:function(e){"use strict";e.exports=window.wp.i18n}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e,t=n(9307),o=n(2175),r=n(9196),i=n(5609),s=new Uint8Array(16);function a(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(s)}for(var l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,c=[],u=0;u<256;++u)c.push((u+256).toString(16).substr(1));var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&l.test(e)}(n))throw TypeError("Stringified UUID is invalid");return n},d=function(e,t,n){var o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=o[r];return t}return p(o)},g=n(7798);const{withSelect:f,withDispatch:m,select:y,useSelect:b}=wp.data,h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"==typeof e&&null!==e)for(const o of Object.keys(e))h(e[o],t.concat(o),n);else n[t.join("_")]=e;return n},{__:__}=wp.i18n,{addFilter:w}=wp.hooks,{createHigherOrderComponent:v}=wp.compose,{useSelect:k}=wp.data,E=["xapp/text-block","core/heading","core/paragraph"];let x=[];const S=v((e=>n=>{const{name:s,attributes:a,setAttributes:l,clientId:c}=n,{blockId:u}=a,p=k((e=>e("core/editor").getCurrentPostType()),[]),[f,m]=(0,g.useEntityProp)("postType",p,"meta");return(0,r.useEffect)((()=>{const e=`b${d().replaceAll("-","")}`;u&&x.includes(e)||l({blockId:e}),x.push(u)}),[]),(0,r.useEffect)((()=>{(e=>{if(E.includes(s)){!a.contentKey&&e&&l({contentKey:`block_${e}`});let t=a.content;e&&((e,t,n,o)=>{let r={[`block_${n}`]:h(o)};e.blockLocales&&""!==e.blockLocales&&(r={...JSON.parse(e.blockLocales),...r}),t({...e,blockLocales:JSON.stringify(r)})})(f,m,e,{text:t})}})(a.blockId)}),[a?.content]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,n),(0,t.createElement)(o.InspectorControls,{key:"settings"},(0,t.createElement)(i.PanelBody,{title:__("Block Info")},__("Block Id: ","xapps"),(0,t.createElement)("p",null,u))))}),"withAdvancedControls");w("blocks.registerBlockType","xapp/block-attributes",(function(e){return e.attributes=Object.assign(e.attributes,{blockId:{type:"string",default:""}}),E.includes(e.name)&&(e.attributes=Object.assign(e.attributes,{contentKey:{type:"string",default:""}})),e})),w("editor.BlockEdit","xapp/custom-advanced-control",S);var C=n(4184),H=n.n(C),_=n(5736);function B(e){let{displayLayout:n,setDisplayLayout:o}=e;const r=[{icon:(0,t.createElement)("svg",{class:"bb-icon bb-icon--slides",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M5 14V6h10v8H5zm-3-1V7h2v6H2zm4-6v6h8V7H6zm10 0h2v6h-2V7zm-3 2V8H7v1h6zm0 3v-2H7v2h6z"})),title:(0,_.__)("Horizontal List view","content-blocks-builder"),onClick:()=>o({type:"list-view"}),isActive:"list-view"===n?.type}];return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.ToolbarGroup,{controls:r}))}const{__:O}=wp.i18n,{addFilter:j}=wp.hooks,{createHigherOrderComponent:F}=wp.compose,P=["core/query"],A=F((e=>n=>{const{name:r,attributes:s,setAttributes:a,isSelected:l}=n,{isSearchQuery:c,hasPagination:u,displayLayout:p={}}=s;let d=n;P.includes(r)&&(d={...n,attributes:{...s,className:H()("xapp-query-list-view")}});let g="";return P.includes(r)&&"list-view"===p.type&&(g="xapp-query-list-view"),(0,t.createElement)(t.Fragment,null,P.includes(r)?(0,t.createElement)("div",{className:g},(0,t.createElement)(e,d)):(0,t.createElement)(e,n),l&&P.includes(r)&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(B,{displayLayout:p,setDisplayLayout:e=>{a({displayLayout:{...e}})}})),(0,t.createElement)(o.InspectorControls,{key:"inspector"},(0,t.createElement)(i.PanelBody,{title:O("XAPP Settings")},(0,t.createElement)(i.ToggleControl,{label:O("Search Query"),checked:!!c,help:O("Enable only if block is being used for search results"),onChange:()=>{a({isSearchQuery:!c})}}),(0,t.createElement)(i.ToggleControl,{label:O("Single Page Query"),checked:!!isSingleQuery,help:O("Enable if screen shows post/prodcut details"),onChange:()=>{a({isSingleQuery:!isSingleQuery})}}),(0,t.createElement)(i.ToggleControl,{label:O("Enable pagination"),checked:!!u,help:O("Enable pagination on app"),onChange:()=>{a({hasPagination:!u})}})))))}),"withAdvancedControls");j("blocks.registerBlockType","xapp/custom-attributes",(function(e){return P.includes(e.name)?(e.attributes=Object.assign(e.attributes,{isSearchQuery:{type:"boolean",default:!1},isSingleQuery:{type:"boolean",default:!1},hasPagination:{type:"boolean",default:""}}),e):e})),j("editor.BlockEdit","xapp/custom-advanced-control",A);const{__:L}=wp.i18n,{addFilter:T}=wp.hooks,{createHigherOrderComponent:I}=wp.compose,V=["core/cover"],Q=I((e=>n=>{const{name:o,attributes:i,setAttributes:s,isSelected:a}=n,{minHeight:l,minHeightUnit:c,isHeightFull:u}=i;let p=n;return(0,r.useEffect)((()=>{100==l&&"vh"==c&&s({minHeight:804,minHeightUnit:"px",isHeightFull:!0}),s({isHeightFull:804==l})}),[l,c]),(0,t.createElement)(t.Fragment,null,V.includes(o)?(0,t.createElement)("div",{className:""},(0,t.createElement)(e,p)):(0,t.createElement)(e,n))}),"withAdvancedControls");T("blocks.registerBlockType","xapp/custom-attributes",(function(e){return V.includes(e.name)?(e.attributes=Object.assign(e.attributes,{isHeightFull:{type:"boolean",default:!1}}),e):e})),T("editor.BlockEdit","editorskit/custom-advanced-control",Q),n(8900)}()}();