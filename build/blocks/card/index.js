!function(){"use strict";var e,t={7121:function(){var e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}var n=window.wp.element,r=window.wp.i18n,o=window.wp.blockEditor,a=window.wp.data,l=window.wp.components,c={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(t){const n=t.map((t=>(0,e.createBlock)(t.name,t.attributes,t.innerBlocks)));return(0,e.createBlock)("xapp/card",{},n)}}]};window.React;const{__:i}=wp.i18n,{useDispatch:p,useSelect:s}=wp.data;window.wp.coreData;const{withSelect:u,withDispatch:w,select:v,useSelect:d}=wp.data,{useSelect:f}=wp.data,{useSelect:m}=wp.data,{select:h,useSelect:b}=wp.data,{SelectControl:k,ComboboxControl:x}=wp.components,{useSelect:B}=wp.data;var O=window.wp.primitives,g=(0,n.createElement)(O.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(O.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M6 5.5h12a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4 10h2v-1.5H8V16Zm5 0h-2v-1.5h2V16Zm1 0h2v-1.5h-2V16Z"}));(0,e.registerBlockType)("xapp/card",{icon:g,edit:function(e){const{attributes:c,setAttributes:i,clientId:p}=e,{elevation:s}=c,u=(0,a.useSelect)((e=>{const{getBlockOrder:t}=e("core/block-editor");return t(p).length>0}),[p]),w=(0,o.useBlockProps)({className:"xapp-card-block",style:{}}),v=(0,o.useInnerBlocksProps)({...w},{renderAppender:u?void 0:o.InnerBlocks.ButtonBlockAppender});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",null,(0,n.createElement)(o.InspectorControls,null,(0,n.createElement)(l.PanelBody,{title:"App Bar",initialOpen:!0},(0,n.createElement)(l.RangeControl,{label:(0,r.__)("Elevation","xapp"),value:s||0,onChange:e=>{i({elevation:e})},min:0,max:24})))),(0,n.createElement)(l.__experimentalElevation,t({value:s},v)))},save:function(e){let{}=e;const t=o.useBlockProps.save();return(0,n.createElement)("div",t,(0,n.createElement)(o.InnerBlocks.Content,null))},transforms:c})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var l=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],a=e[s][2];for(var c=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(s--,1);var p=o();void 0!==p&&(t=p)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={1274:0,5226:0,1248:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,l=n[0],c=n[1],i=n[2],p=0;if(l.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(i)var s=i(r)}for(t&&t(n);p<l.length;p++)a=l[p],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(s)},n=self.webpackChunkxapp_wp=self.webpackChunkxapp_wp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[5226,1248],(function(){return r(7121)}));o=r.O(o)}();