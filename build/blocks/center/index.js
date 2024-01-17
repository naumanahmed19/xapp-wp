!function(){"use strict";var e,t={4588:function(){var e=window.wp.blocks,t=window.wp.element,n=(window.wp.i18n,window.wp.blockEditor),o=window.wp.data,r={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(t){const n=t.map((t=>(0,e.createBlock)(t.name,t.attributes,t.innerBlocks)));return(0,e.createBlock)("xapp/appbar",{},n)}}]},c=window.React;window.wp.components;const{__:l}=wp.i18n,{useDispatch:s,useSelect:a}=wp.data;var i=window.wp.coreData;const{withSelect:p,withDispatch:u,select:w,useSelect:d}=wp.data,v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"==typeof e&&null!==e)for(const o of Object.keys(e))v(e[o],t.concat(o),n);else n[t.join("_")]=e;return n},{useSelect:f}=wp.data,{useSelect:h}=wp.data;const{select:k,useSelect:m}=wp.data,{SelectControl:b,ComboboxControl:g}=wp.components,{useSelect:y}=wp.data;var S=window.wp.primitives,B=(0,t.createElement)(S.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(S.Path,{d:"M18.5 5.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v9zM6.5 12H8v-2h2V8.5H6.5V12zm9.5 2h-2v1.5h3.5V12H16v2z"}));(0,e.registerBlockType)("xapp/center",{icon:B,edit:function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(o){let{...r}=o;const{attributes:l,setAttributes:s,clientId:a}=r,{blockId:p,settings:u,style:w={}}=l,{spacing:d,color:f,typography:k}=w,m=h((e=>e("core/editor").getCurrentPostType()),[]),[b,g]=(0,i.useEntityProp)("postType",m,"meta"),y=e=>{s({settings:{...u,...e}})};(0,c.useEffect)((()=>{s({attributes:l}),y(),n&&w?.length&&S()}),[]);const S=e=>{s({style:{...w,...e}})};let B={setSettings:y,setLocale:e=>{((e,t,n,o)=>{let r={[`block_${n}`]:v(o)};e.blockLocales&&""!==e.blockLocales&&(r={...JSON.parse(e.blockLocales),...r}),t({...e,blockLocales:JSON.stringify(r)})})(b,g,p,e)},setStyle:S,meta:b,setMeta:g,blockId:p,setSpacing:e=>{S({spacing:{...d,...e}})},setColor:e=>{S({color:{...f,...e}})},setTypography:e=>{S({typography:{...k,...e}})}};n||delete B.setStyle;let E={...B,...r};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,E))}}((function(e){const{attributes:r,clientId:c}=e,{}=r,l=(0,o.useSelect)((e=>{const{getBlockOrder:t}=e("core/block-editor");return t(c).length>0}),[c]),s=(0,n.useBlockProps)({className:"xapp-center-block",style:{}}),a=(0,n.useInnerBlocksProps)({...s},{renderAppender:l?void 0:n.InnerBlocks.ButtonBlockAppender});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",null,(0,t.createElement)(n.InspectorControls,null)),(0,t.createElement)("div",a))})),save:function(e){let{}=e;const o=n.useBlockProps.save();return(0,t.createElement)("div",o,(0,t.createElement)(n.InnerBlocks.Content,null))},transforms:r})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.m=t,e=[],o.O=function(t,n,r,c){if(!n){var l=1/0;for(p=0;p<e.length;p++){n=e[p][0],r=e[p][1],c=e[p][2];for(var s=!0,a=0;a<n.length;a++)(!1&c||l>=c)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(s=!1,c<l&&(l=c));if(s){e.splice(p--,1);var i=r();void 0!==i&&(t=i)}}return t}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[n,r,c]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={3133:0,5226:0,3836:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,c,l=n[0],s=n[1],a=n[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(a)var p=a(o)}for(t&&t(n);i<l.length;i++)c=l[i],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(p)},n=self.webpackChunkxapp_wp=self.webpackChunkxapp_wp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[5226,3836],(function(){return o(4588)}));r=o.O(r)}();