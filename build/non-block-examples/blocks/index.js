(()=>{var e={4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},9196:e=>{"use strict";e.exports=window.React},2175:e=>{"use strict";e.exports=window.wp.blockEditor},5609:e=>{"use strict";e.exports=window.wp.components},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(9307),t=r(2175),n=r(9196),o=r(5609);const{__}=wp.i18n,{addFilter:i}=wp.hooks,{createHigherOrderComponent:a}=wp.compose,s=a((r=>i=>{const{attributes:a,setAttributes:s,clientId:l}=i,{blockId:c}=a;return(0,n.useEffect)((()=>{c||setTimeout((()=>{s({blockId:`b${l.replaceAll("-","")}`})}),100),s({attributes:a})}),[]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r,i),(0,e.createElement)(t.InspectorControls,{key:"settings"},(0,e.createElement)(o.PanelBody,{title:__("Block Info")},__("Block Id: ","xapps"),(0,e.createElement)("p",null,c))))}),"withAdvancedControls");i("blocks.registerBlockType","xapp/block-attributes",(function(e){return e.attributes=Object.assign(e.attributes,{blockId:{type:"string",default:""}}),e})),i("editor.BlockEdit","xapp/custom-advanced-control",s);var l=r(4184),c=r.n(l),u=r(5736);function p(t){let{displayLayout:r,setDisplayLayout:n}=t;const i=[{icon:(0,e.createElement)("svg",{class:"bb-icon bb-icon--slides",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M5 14V6h10v8H5zm-3-1V7h2v6H2zm4-6v6h8V7H6zm10 0h2v6h-2V7zm-3 2V8H7v1h6zm0 3v-2H7v2h6z"})),title:(0,u.__)("Horizontal List view","content-blocks-builder"),onClick:()=>n({type:"list-view"}),isActive:"list-view"===r?.type}];return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.ToolbarGroup,{controls:i}))}const{__:d}=wp.i18n,{addFilter:m}=wp.hooks,{createHigherOrderComponent:b}=wp.compose,y=["core/query"],v=b((r=>n=>{const{name:i,attributes:a,setAttributes:s,isSelected:l}=n,{isSearchQuery:u,hasPagination:m,displayLayout:b={}}=a;let v=n;y.includes(i)&&(v={...n,attributes:{...a,className:c()("xapp-query-list-view")}});let g="";return y.includes(i)&&"list-view"===b.type&&(g="xapp-query-list-view"),(0,e.createElement)(e.Fragment,null,y.includes(i)?(0,e.createElement)("div",{className:g},(0,e.createElement)(r,v)):(0,e.createElement)(r,n),l&&y.includes(i)&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.BlockControls,null,(0,e.createElement)(p,{displayLayout:b,setDisplayLayout:e=>{s({displayLayout:{...e}})}})),(0,e.createElement)(t.InspectorControls,{key:"inspector"},(0,e.createElement)(o.PanelBody,{title:d("XAPP Settings")},(0,e.createElement)(o.ToggleControl,{label:d("Search Query"),checked:!!u,help:d("Enable only if block is being used for search results"),onChange:()=>{s({isSearchQuery:!u})}}),(0,e.createElement)(o.ToggleControl,{label:d("Enable pagination"),checked:!!m,help:d("Enable pagination on app"),onChange:()=>{s({hasPagination:!m})}})))))}),"withAdvancedControls");m("blocks.registerBlockType","editorskit/custom-attributes",(function(e){return y.includes(e.name)?(e.attributes=Object.assign(e.attributes,{isSearchQuery:{type:"boolean",default:!0},hasPagination:{type:"boolean",default:""}}),e):e})),m("editor.BlockEdit","editorskit/custom-advanced-control",v)})()})();