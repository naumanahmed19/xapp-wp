!function(){var e={184:function(e,t){var n;!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)l.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},t={};function n(l){var r=t[l];if(void 0!==r)return r.exports;var o=t[l]={exports:{}};return e[l](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.wp.blockEditor,l=window.wp.blocks,r=window.wp.data,o=n(184),i=n.n(o),a=window.wp.components,c=window.wp.i18n,s=window.wp.primitives,u=(0,e.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(s.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"}));(0,l.registerBlockType)("xapp/screen",{icon:(0,e.createElement)((function(t){let{icon:n,size:l=24,...r}=t;return(0,e.cloneElement)(n,{width:l,height:l,...r})}),{icon:u,width:20}),__experimentalLabel(e,t){let{context:n}=t;if("list-view"===n&&e?.title)return e?.title},edit:function(n){const{attributes:l,setAttributes:o,clientId:s}=n,[u,d]=(0,e.useState)(!1),[p,m]=(0,e.useState)(null),[v,f]=(0,e.useState)("true"),[w,g]=(0,e.useState)(!1),h=()=>d(!0),{verticalAlignment:b,templateLock:E=!1,allowedBlocks:k,style:x,tabScreenIndex:S,scroll:B,title:y,screenId:_}=l,C=(0,t.__experimentalUseColorProps)(l),I=i()("block-core-columns",{[`is-vertically-aligned-${b}`]:b},B?"tab-screen":""),{columnsIds:P,hasChildBlocks:A,rootClientId:O}=((0,a.__experimentalUseCustomUnits)({availableUnits:(0,t.useSetting)("spacing.units")||["%","px","em","rem","vw"]}),(0,r.useSelect)((e=>{const{getBlockOrder:n,getBlockRootClientId:l}=e(t.store),r=l(s);return{hasChildBlocks:n(s).length>0,rootClientId:r,columnsIds:n(r)}}),[s])),{updateBlockAttributes:N}=(0,r.useDispatch)(t.store),$=(0,t.useBlockProps)({className:I,style:x,tabScreenIndex:S}),j=P.length,T=P.indexOf(s)+1,D=(0,c.sprintf)(/* translators: 1: Block label (i.e. "Block: Column"), 2: Position of the selected block, 3: Total number of sibling blocks of the same type */
(0,c.__)("%1$s (%2$d of %3$d)"),$["aria-label"],T,j),F=(0,t.useInnerBlocksProps)({...$,"aria-label":D,style:x},{templateLock:E,allowedBlocks:k,renderAppender:A?void 0:()=>(0,e.createElement)(t.InnerBlocks.ButtonBlockAppender,{className:"xapp-appender"})});return(0,e.useEffect)((()=>{_||o({screenId:blockId})}),[]),(0,e.useEffect)((()=>{const e=wp.data.select("core/editor").getCurrentPostId(),t=window?.xapp?.siteUrl;let n=`${t}/wp-json/xapp/home?APP_POST_ID=${e}&screenId=${_}&preview=${v}`;g(!0),fetch(n).then((e=>e.json())).then((e=>{g(!1),m(e)}))}),[u,v]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.BlockControls,null,(0,e.createElement)(t.BlockVerticalAlignmentToolbar,{onChange:e=>{o({verticalAlignment:e}),N(O,{verticalAlignment:null})},value:b})),(0,e.createElement)(t.InspectorControls,null,(0,e.createElement)(a.PanelBody,{title:(0,c.__)("Screen settings")},(0,e.createElement)(a.TextControl,{label:(0,c.__)("Title","brand"),value:y,onChange:e=>{o({title:e})}}),(0,e.createElement)(a.TextControl,{label:(0,c.__)("Screen id","brand"),value:_,onChange:e=>{o({screenId:e})}}),(0,e.createElement)(a.ToggleControl,{label:(0,c.__)("Enable Scroll"),checked:B,onChange:e=>o({scroll:e})})),(0,e.createElement)(a.PanelBody,{title:(0,c.__)("Debug")},(0,e.createElement)(a.Button,{variant:"link",onClick:()=>{f("true"),h()}},"Preview Screen JSON Data"),(0,e.createElement)(a.Button,{variant:"link",onClick:()=>{f("false"),h()}},"Publish Screen JSON Data"),u&&(0,e.createElement)(a.Modal,{title:`${y} - Json`,onRequestClose:()=>d(!1)},w?(0,e.createElement)(a.Spinner,null):(0,e.createElement)(e.Fragment,null,(0,e.createElement)("code",null,(0,e.createElement)("pre",null,JSON.stringify(p,null,4)||"No data")))))),(0,e.createElement)("div",{style:{...C.style}},(0,e.createElement)("div",F)))},save:function(n){let{attributes:l}=n;const{verticalAlignment:r,width:o}=l,a=i()({[`is-vertically-aligned-${r}`]:r});let c;if(o&&/\d/.test(o)){let e=Number.isFinite(o)?o+"%":o;if(!Number.isFinite(o)&&o?.endsWith("%")){const t=1e12;e=Math.round(Number.parseFloat(o)*t)/t+"%"}c={flexBasis:e}}const s=t.useBlockProps.save({className:a,style:c}),u=t.useInnerBlocksProps.save(s);return(0,e.createElement)("div",u)}})}()}();