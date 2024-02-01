(()=>{"use strict";var e,t={4466:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.i18n,o=window.wp.blockEditor,r=window.wp.data,a=window.wp.components,l={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(t){const n=t.map((t=>(0,e.createBlock)(t.name,t.attributes,t.innerBlocks)));return(0,e.createBlock)("xapp/card",{},n)}}]},{__:c}=wp.i18n,{useDispatch:i,useSelect:p}=wp.data,{withSelect:s,withDispatch:w,select:u,useSelect:d}=(window.wp.coreData,wp.data),{useSelect:v}=wp.data,{useSelect:m}=wp.data,{select:h,useSelect:k}=wp.data,{SelectControl:b,ComboboxControl:f}=wp.components,{useSelect:x}=wp.data,B=window.wp.primitives,g=(0,t.createElement)(B.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(B.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M6 5.5h12a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4 10h2v-1.5H8V16Zm5 0h-2v-1.5h2V16Zm1 0h2v-1.5h-2V16Z"}));(0,e.registerBlockType)("xapp/card",{icon:g,edit:function(e){const{attributes:l,setAttributes:c,clientId:i}=e,{elevation:p}=l,s=(0,r.useSelect)((e=>{const{getBlockOrder:t}=e("core/block-editor");return t(i).length>0}),[i]),w=(0,o.useBlockProps)({className:"xapp-card-block",style:{}}),u=(0,o.useInnerBlocksProps)({...w},{renderAppender:s?void 0:o.InnerBlocks.ButtonBlockAppender});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",null,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:"App Bar",initialOpen:!0},(0,t.createElement)(a.RangeControl,{label:(0,n.__)("Elevation","xapp"),value:p||0,onChange:e=>{c({elevation:e})},min:0,max:24})))),(0,t.createElement)(a.__experimentalElevation,{value:p,...u}))},save:function({}){const e=o.useBlockProps.save();return(0,t.createElement)("div",{...e},(0,t.createElement)(o.InnerBlocks.Content,null))},transforms:l})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var l=1/0;for(s=0;s<e.length;s++){for(var[n,r,a]=e[s],c=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(s--,1);var p=r();void 0!==p&&(t=p)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,r,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1274:0,5226:0,1248:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[l,c,i]=n,p=0;if(l.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(i)var s=i(o)}for(t&&t(n);p<l.length;p++)a=l[p],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},n=globalThis.webpackChunkxapp_wp=globalThis.webpackChunkxapp_wp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[5226,1248],(()=>o(4466)));r=o.O(r)})();