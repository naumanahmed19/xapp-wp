!function(){var e,t={414:function(e,t,n){"use strict";var l=window.wp.blocks,o=window.wp.element,r=n(184),i=n.n(r),s=window.React,a=window.wp.blockEditor,c=window.wp.components,u=window.wp.data,p=window.wp.i18n;const{__:d}=wp.i18n,{useDispatch:f,useSelect:h}=wp.data;var g=window.wp.coreData;const{withSelect:m,withDispatch:b,select:v,useSelect:k}=wp.data,w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"==typeof e&&null!==e)for(const l of Object.keys(e))w(e[l],t.concat(l),n);else n[t.join("_")]=e;return n},{useSelect:y}=wp.data,{useSelect:S}=wp.data;const{select:_,useSelect:x}=wp.data,{SelectControl:O}=wp.components,{useSelect:B}=wp.data;var C=JSON.parse('{"u2":"xapp/container"}'),I={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(e){const t=["wide","full"],n=e.reduce(((e,n)=>{const{align:l}=n.attributes;return t.indexOf(l)>t.indexOf(e)?l:e}),void 0),o=e.map((e=>(0,l.createBlock)(e.name,e.attributes,e.innerBlocks)));return(0,l.createBlock)("xapp/container",{align:n},o)}}]};(0,l.registerBlockType)(C.u2,{edit:function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n){let{...l}=n;const{attributes:r,setAttributes:i,clientId:a}=l,{blockId:c,settings:u,style:p={}}=r,{spacing:d,color:f,typography:h}=p,m=S((e=>e("core/editor").getCurrentPostType()),[]),[b,v]=(0,g.useEntityProp)("postType",m,"meta"),k=e=>{i({settings:{...u,...e}})};(0,s.useEffect)((()=>(c||setTimeout((()=>{i({blockId:a.replaceAll("-","")})}),100),i({attributes:r}),k(),t&&p?.length&&y(),()=>{((e,t,n)=>{let l=JSON.parse(e.blockLocales),o=`block_${n}`;for(const[e,t]of Object.entries(l))e.includes(o)&&delete l[e];t({...e,blockLocales:JSON.stringify(l)})})(b,v,c)})),[]);const y=e=>{i({style:{...p,...e}})};let _={setSettings:k,setLocale:e=>{((e,t,n,l)=>{let o={[`block_${n}`]:w(l)};e.blockLocales&&(o={...JSON.parse(e.blockLocales),...o}),t({...e,blockLocales:JSON.stringify(o)})})(b,v,c,e)},setStyle:y,meta:b,setMeta:v,blockId:c,setSpacing:e=>{y({spacing:{...d,...e}})},setColor:e=>{y({color:{...f,...e}})},setTypography:e=>{y({typography:{...h,...e}})}};t||delete _.setStyle;let x={..._,...l};return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(e,x))}}((function(e){const{attributes:t,setAttributes:n,clientId:l,setSettings:r,setSpacing:d}=e,{verticalAlignment:f,width:h,templateLock:g=!1,allowedBlocks:m,style:b,tabScreenIndex:v,settings:k}=t,{height:w,heightFull:y}=k,[S,_]=(0,s.useState)(),[x,O]=(0,s.useState)(),B=i()("block-core-columns",{[`is-vertically-aligned-${f}`]:f}),{columnsIds:C,hasChildBlocks:I,rootClientId:E}=(0,u.useSelect)((e=>{const{getBlockOrder:t,getBlockRootClientId:n}=e(a.store),o=n(l);return{hasChildBlocks:t(l).length>0,rootClientId:o,columnsIds:t(o)}}),[l]),{updateBlockAttributes:A}=(0,u.useDispatch)(a.store),j=(Number.isFinite(h),(0,a.__experimentalUseBorderProps)(t)),P=(0,a.__experimentalUseColorProps)(t),F=(0,a.__experimentalGetSpacingClassesAndStyles)(t),N=(0,a.useBlockProps)({className:B,tabScreenIndex:v}),L=C.length,T=C.indexOf(l)+1,D=(0,p.sprintf)(/* translators: 1: Block label (i.e. "Block: Column"), 2: Position of the selected block, 3: Total number of sibling blocks of the same type */
(0,p.__)("%1$s (%2$d of %3$d)"),N["aria-label"],T,L),$=(0,a.useInnerBlocksProps)({...N,"aria-label":D,style:b},{templateLock:g,allowedBlocks:m,renderAppender:I?void 0:a.InnerBlocks.ButtonBlockAppender});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(a.BlockControls,null,(0,o.createElement)(a.BlockVerticalAlignmentToolbar,{onChange:e=>{n({verticalAlignment:e}),A(E,{verticalAlignment:null})},value:f})),(0,o.createElement)(a.InspectorControls,null),(0,o.createElement)(a.InspectorControls,{__experimentalGroup:"dimensions"},(0,o.createElement)(c.__experimentalToolsPanelItem,{hasValue:()=>!!w,label:(0,p.__)("Height"),onDeselect:()=>r({heightFull:!1,height:void 0}),resetAllFilter:()=>r({heightFull:!1,height:void 0}),panelId:l,isShownByDefault:!0},(0,o.createElement)(c.ToggleControl,{label:(0,p.__)("Full Screen height"),checked:y,onChange:e=>{r({heightFull:e,height:y?"802px":void 0})}}),(0,o.createElement)(c.__experimentalUnitControl,{label:(0,p.__)("Height"),onChange:e=>{r({height:e})},value:w}))),(0,o.createElement)("div",{className:"brand-block brand-block__container",style:{height:w,...j.style,...P.style,...F.style}},(0,o.createElement)("div",$)))})),save:function(e){let{attributes:t,className:n,clientId:l}=e;const r=a.useBlockProps.save();return(0,o.createElement)("div",r,(0,o.createElement)(a.InnerBlocks.Content,null))},transforms:I})},184:function(e,t){var n;!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)l.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},n={};function l(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,n,o,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,a=0;a<n.length;a++)(!1&r||i>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[a])}))?n.splice(a--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={837:0,226:0,989:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],s=n[1],a=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)l.o(s,o)&&(l.m[o]=s[o]);if(a)var u=a(l)}for(t&&t(n);c<i.length;c++)r=i[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},n=self.webpackChunkxapp_meta=self.webpackChunkxapp_meta||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=l.O(void 0,[226,989],(function(){return l(414)}));o=l.O(o)}();