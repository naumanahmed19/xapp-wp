(()=>{var e={4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},9196:e=>{"use strict";e.exports=window.React},5609:e=>{"use strict";e.exports=window.wp.components},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(9307);const t=window.wp.blockEditor;var n=r(9196),o=r(5609);const{__}=wp.i18n,{addFilter:a}=wp.hooks,{createHigherOrderComponent:i}=wp.compose,s=i((r=>a=>{const{attributes:i,setAttributes:s,clientId:l}=a,{blockId:c}=i;return(0,n.useEffect)((()=>{c||setTimeout((()=>{s({blockId:`b${l.replaceAll("-","")}`})}),100),s({attributes:i})}),[]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r,a),(0,e.createElement)(t.InspectorControls,{key:"settings"},(0,e.createElement)(o.PanelBody,{title:__("Block Info")},__("Block Id: ","xapps"),(0,e.createElement)("p",null,c))))}),"withAdvancedControls");function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}a("blocks.registerBlockType","xapp/block-attributes",(function(e){return e.attributes=Object.assign(e.attributes,{blockId:{type:"string",default:""}}),e})),a("editor.BlockEdit","xapp/custom-advanced-control",s);var c=r(4184),u=r.n(c),p=r(5736);function d(t){let{displayLayout:r,setDisplayLayout:n}=t;const a=[{icon:(0,e.createElement)("svg",{class:"bb-icon bb-icon--slides",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M5 14V6h10v8H5zm-3-1V7h2v6H2zm4-6v6h8V7H6zm10 0h2v6h-2V7zm-3 2V8H7v1h6zm0 3v-2H7v2h6z"})),title:(0,p.__)("Horizontal List view","content-blocks-builder"),onClick:()=>n({type:"list-view"}),isActive:"list-view"===r?.type}];return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.ToolbarGroup,{controls:a}))}const{__:b}=wp.i18n,{addFilter:m}=wp.hooks,{createHigherOrderComponent:y}=wp.compose,v=["core/query"],g=y((r=>n=>{const{name:a,attributes:i,setAttributes:s,isSelected:c}=n,{isSearchQuery:p,hasPagination:m,displayLayout:y={}}=i;let g=n;v.includes(a)&&(g={...n,attributes:{...i,className:u()("xapp-query-list-view")}});let h="";return v.includes(a)&&"list-view"===y.type&&(h="xapp-query-list-view"),(0,e.createElement)(e.Fragment,null,v.includes(a)?(0,e.createElement)("div",{className:h},(0,e.createElement)(r,l({},g,{className:h}))):(0,e.createElement)(r,n),c&&v.includes(a)&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.BlockControls,null,(0,e.createElement)(d,{displayLayout:y,setDisplayLayout:e=>{s({displayLayout:{...e}})}})),(0,e.createElement)(t.InspectorControls,{key:"inspector"},(0,e.createElement)(o.PanelBody,{title:b("XAPP Settings")},(0,e.createElement)(o.ToggleControl,{label:b("Search Query"),checked:!!p,help:b("Enable only if block is being used for search results"),onChange:()=>{s({isSearchQuery:!p})}}),(0,e.createElement)(o.ToggleControl,{label:b("Enable pagination"),checked:!!m,help:b("Enable pagination on app"),onChange:()=>{s({hasPagination:!m})}})))))}),"withAdvancedControls");m("blocks.registerBlockType","editorskit/custom-attributes",(function(e){return v.includes(e.name)?(e.attributes=Object.assign(e.attributes,{isSearchQuery:{type:"boolean",default:!0},hasPagination:{type:"boolean",default:""}}),e):e})),m("editor.BlockEdit","editorskit/custom-advanced-control",g)})()})();