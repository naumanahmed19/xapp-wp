(()=>{"use strict";var e,t={980:()=>{const e=window.wp.blocks,t=window.React,o=(window.wp.i18n,window.wp.blockEditor),r=window.wp.data,n={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(t){const o=t.map((t=>(0,e.createBlock)(t.name,t.attributes,t.innerBlocks)));return(0,e.createBlock)("xapp/appbar",{},o)}}]},{__:c}=(window.wp.components,wp.i18n),{useDispatch:l,useSelect:s}=wp.data,a=window.wp.coreData,{withSelect:p,withDispatch:i,select:u,useSelect:w}=wp.data,d=(e,t=[],o={})=>{if("object"==typeof e&&null!==e)for(const r of Object.keys(e))d(e[r],t.concat(r),o);else o[t.join("_")]=e;return o},{useSelect:v}=wp.data,{useSelect:b}=wp.data,{select:k,useSelect:h}=wp.data,{SelectControl:m,ComboboxControl:g}=wp.components,{useSelect:f}=wp.data,y=window.wp.primitives,S=(0,t.createElement)(y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(y.Path,{d:"M18.5 5.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v9zM6.5 12H8v-2h2V8.5H6.5V12zm9.5 2h-2v1.5h3.5V12H16v2z"}));(0,e.registerBlockType)("xapp/center",{icon:S,edit:((e,o=!0)=>function({...r}){const{attributes:n,setAttributes:c,clientId:l}=r,{blockId:s,settings:p,style:i={}}=n,{spacing:u,color:w,typography:v}=i,k=b((e=>e("core/editor").getCurrentPostType()),[]),[h,m]=(0,a.useEntityProp)("postType",k,"meta"),g=e=>{c({settings:{...p,...e}})};(0,t.useEffect)((()=>{c({attributes:n}),g(),o&&i?.length&&f()}),[]);const f=e=>{c({style:{...i,...e}})};let y={setSettings:g,setLocale:e=>{((e,t,o,r)=>{let n={[`block_${o}`]:d(r)};e.blockLocales&&""!==e.blockLocales&&(n={...JSON.parse(e.blockLocales),...n}),t({...e,blockLocales:JSON.stringify(n)})})(h,m,s,e)},setStyle:f,meta:h,setMeta:m,blockId:s,setSpacing:e=>{f({spacing:{...u,...e}})},setColor:e=>{f({color:{...w,...e}})},setTypography:e=>{f({typography:{...v,...e}})}};o||delete y.setStyle;let S={...y,...r};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...S}))})((function(e){const{attributes:n,clientId:c}=e,{}=n,l=(0,r.useSelect)((e=>{const{getBlockOrder:t}=e("core/block-editor");return t(c).length>0}),[c]),s=(0,o.useBlockProps)({className:"xapp-center-block",style:{}}),a=(0,o.useInnerBlocksProps)({...s},{renderAppender:l?void 0:o.InnerBlocks.ButtonBlockAppender});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",null,(0,t.createElement)(o.InspectorControls,null)),(0,t.createElement)("div",{...a}))})),save:function({}){const e=o.useBlockProps.save();return(0,t.createElement)("div",{...e},(0,t.createElement)(o.InnerBlocks.Content,null))},transforms:n})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var c=o[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=(t,o,n,c)=>{if(!o){var l=1/0;for(i=0;i<e.length;i++){for(var[o,n,c]=e[i],s=!0,a=0;a<o.length;a++)(!1&c||l>=c)&&Object.keys(r.O).every((e=>r.O[e](o[a])))?o.splice(a--,1):(s=!1,c<l&&(l=c));if(s){e.splice(i--,1);var p=n();void 0!==p&&(t=p)}}return t}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[o,n,c]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={3133:0,5226:0,3836:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,c,[l,s,a]=o,p=0;if(l.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(a)var i=a(r)}for(t&&t(o);p<l.length;p++)c=l[p],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},o=globalThis.webpackChunkxapp_wp=globalThis.webpackChunkxapp_wp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[5226,3836],(()=>r(980)));n=r.O(n)})();