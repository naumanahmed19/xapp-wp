!function(){var e,t={8945:function(e,t,n){"use strict";var o=window.wp.blocks,l=window.wp.element,r=n(4184),i=n.n(r),a=window.React,s=window.wp.components,c=window.wp.blockEditor,u=window.wp.data,p=window.wp.i18n;const{__:d}=wp.i18n,{useDispatch:f,useSelect:g}=wp.data;var h=window.wp.coreData;const{withSelect:m,withDispatch:b,select:v,useSelect:w}=wp.data,y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"==typeof e&&null!==e)for(const o of Object.keys(e))y(e[o],t.concat(o),n);else n[t.join("_")]=e;return n},{useSelect:k}=wp.data,{useSelect:_}=wp.data;const{select:x,useSelect:S}=wp.data,{SelectControl:C,ComboboxControl:B}=wp.components,{useSelect:E}=wp.data;var O={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(e){const t=["wide","full"],n=e.reduce(((e,n)=>{const{align:o}=n.attributes;return t.indexOf(o)>t.indexOf(e)?o:e}),void 0),l=e.map((e=>(0,o.createBlock)(e.name,e.attributes,e.innerBlocks)));return(0,o.createBlock)("xapp/container",{align:n},l)}}]};(0,o.registerBlockType)("xapp/badge",{edit:function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n){let{...o}=n;const{attributes:r,setAttributes:i,clientId:s}=o,{blockId:c,settings:u,style:p={}}=r,{spacing:d,color:f,typography:g}=p,m=_((e=>e("core/editor").getCurrentPostType()),[]),[b,v]=(0,h.useEntityProp)("postType",m,"meta"),w=e=>{i({settings:{...u,...e}})};(0,a.useEffect)((()=>{i({attributes:r}),w(),t&&p?.length&&k()}),[]);const k=e=>{i({style:{...p,...e}})};let x={setSettings:w,setLocale:e=>{((e,t,n,o)=>{let l={[`block_${n}`]:y(o)};e.blockLocales&&""!==e.blockLocales&&(l={...JSON.parse(e.blockLocales),...l}),t({...e,blockLocales:JSON.stringify(l)})})(b,v,c,e)},setStyle:k,meta:b,setMeta:v,blockId:c,setSpacing:e=>{k({spacing:{...d,...e}})},setColor:e=>{k({color:{...f,...e}})},setTypography:e=>{k({typography:{...g,...e}})}};t||delete x.setStyle;let S={...x,...o};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(e,S))}}((function(e){const{attributes:t,setAttributes:n,clientId:o,setSettings:r,setSpacing:d}=e,{content:f,verticalAlignment:g,templateLock:h=!1,allowedBlocks:m,style:b,tabScreenIndex:v,settings:w,auth:y}=t,{height:k,isHeightFull:_,width:x,position:S}=w,[C,B]=(0,a.useState)(),[E,O]=(0,a.useState)(),I=i()("block-core-container",{[`is-vertically-aligned-${g}`]:g}),{columnsIds:A,hasChildBlocks:P,rootClientId:j}=(0,u.useSelect)((e=>{const{getBlockOrder:t,getBlockRootClientId:n}=e(c.store),l=n(o);return{hasChildBlocks:t(o).length>0,rootClientId:l,columnsIds:t(l)}}),[o]),{updateBlockAttributes:$}=(0,u.useDispatch)(c.store),L=(0,c.__experimentalUseBorderProps)(t),T=(0,c.__experimentalUseColorProps)(t),D=(0,c.__experimentalGetSpacingClassesAndStyles)(t),F=(0,c.useBlockProps)({className:I,tabScreenIndex:v}),H=A.length,N=A.indexOf(o)+1,U=(0,p.sprintf)(/* translators: 1: Block label (i.e. "Block: Column"), 2: Position of the selected block, 3: Total number of sibling blocks of the same type */
(0,p.__)("%1$s (%2$d of %3$d)"),F["aria-label"],N,H);return(0,c.useInnerBlocksProps)({...F,"aria-label":U,style:b},{templateLock:h,allowedBlocks:m,renderAppender:P?void 0:c.InnerBlocks.ButtonBlockAppender}),(0,a.useEffect)((()=>{r({height:_?"802px":void 0})}),[_]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.BlockControls,null,(0,l.createElement)(c.BlockVerticalAlignmentToolbar,{onChange:e=>{n({verticalAlignment:e}),$(j,{verticalAlignment:null})},value:g})),(0,l.createElement)(c.InspectorControls,null,(0,l.createElement)(s.PanelBody,{title:(0,p.__)(" settings")},(0,l.createElement)(c.TextControl,{label:"Here you ought to place a specific currency symbol that you deal in.",value:f,onChange:e=>n({content:e})}))),(0,l.createElement)(c.InspectorControls,{group:"dimensions"},(0,l.createElement)(s.__experimentalToolsPanelItem,{hasValue:()=>!!k,label:(0,p.__)("Height"),onDeselect:()=>r({isHeightFull:!1,height:void 0}),resetAllFilter:()=>r({isHeightFull:!1,height:void 0}),panelId:o,isShownByDefault:!0},!_&&(0,l.createElement)(s.__experimentalUnitControl,{label:(0,p.__)("Height"),onChange:e=>{r({height:e})},value:k}),(0,l.createElement)(s.__experimentalUnitControl,{label:(0,p.__)("Width"),onChange:e=>{r({width:e})},value:x}),(0,l.createElement)(s.__experimentalBoxControl,{label:(0,p.__)("Position"),units:["px"],values:S,onChange:e=>{console.log(e),r({position:e})}}))),(0,l.createElement)("div",{className:"brand-block brand-block__container",style:{height:k,width:x||"5px",position:"absolute",top:`${S.top}px`,bottom:`${S.bottom}px`,left:`${S.left}px`,right:`${S.right}px`,textAlign:"center",...L.style,...T.style,...D.style}},(0,l.createElement)("div",F,"5")))})),save:function(e){let{attributes:t,className:n,clientId:o}=e;const r=c.useBlockProps.save();return(0,l.createElement)("div",r,(0,l.createElement)(c.InnerBlocks.Content,null))},transforms:O})},4184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=l.apply(null,n);i&&e.push(i)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},n={};function o(e){var l=n[e];if(void 0!==l)return l.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=function(t,n,l,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],r=e[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(a=!1,r<i&&(i=r));if(a){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,l,r]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={116:0,226:0,494:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,r,i=n[0],a=n[1],s=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(l in a)o.o(a,l)&&(o.m[l]=a[l]);if(s)var u=s(o)}for(t&&t(n);c<i.length;c++)r=i[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self.webpackChunkxapp_wp=self.webpackChunkxapp_wp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=o.O(void 0,[226,494],(function(){return o(8945)}));l=o.O(l)}();