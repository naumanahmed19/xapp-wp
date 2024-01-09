!function(){var e,t={5737:function(e,t,n){"use strict";var l=window.wp.blocks;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},a.apply(this,arguments)}var o=window.wp.element,r=n(4184),c=n.n(r),s=window.wp.i18n,i=(window.wp.data,window.wp.components),u=window.wp.blockEditor,p=window.wp.keycodes,m=window.React;const{__:g}=wp.i18n,{useDispatch:h,useSelect:d}=wp.data;var v=window.wp.coreData;const{withSelect:b,withDispatch:f,select:w,useSelect:y}=wp.data,k=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"==typeof e&&null!==e)for(const l of Object.keys(e))k(e[l],t.concat(l),n);else n[t.join("_")]=e;return n},{useSelect:E}=wp.data,{useSelect:S}=wp.data;const{select:_,useSelect:C}=wp.data;var x=e=>{let{label:t="Select Screen",value:n,onChange:l}=e;const{blocks:a}=C((e=>({blocks:e("core/block-editor").getBlocks().find((e=>"xapp/screens"==e.name))})));if(!a)return(0,o.createElement)(i.Spinner,null);let r=a.innerBlocks.map((e=>({value:e?.attributes?.screenId,label:e?.attributes?.title}))),c=[{label:(0,s.__)("Select Screen"),value:""},...r,{label:"Sign In",value:"signin"},{label:"Sign Out",value:"signout"},{label:"My Orders",value:"orders"},{label:"Language",value:"language"}];return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.SelectControl,{label:(0,s.__)(t,"brand"),help:(0,s.__)("Link a screen"),value:n,allowReset:!1,onChange:e=>l(e),options:c}))};const{SelectControl:B,ComboboxControl:P}=wp.components,{useSelect:O}=wp.data;var I=e=>{let{value:t,onChange:n}=e;const l=function e(t){let n=[];return t.forEach((t=>{"core/query"===t.name&&n.push(t),t.innerBlocks.length&&(n=n.concat(e(t.innerBlocks)))})),n}(O((e=>e("core/editor").getBlocks()))).map((e=>({label:e.attributes?.blockId,value:e.attributes?.blockId})));return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(P,{label:(0,s.__)("Select a block"),help:(0,s.__)("Link this block to another block which is out of context"),onChange:e=>n(e),onFilterValueChange:function(){},options:l,value:t}))},L=window.wp.primitives,j=(0,o.createElement)(L.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(L.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"}));(0,o.createElement)(L.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(L.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"}));var H=e=>{let{setAttributes:t,settings:n,isSelected:l}=e;const{action:a,linkTo:r,screenType:c,title:m,queryId:g,templatekey:h}=n,[d,v]=(0,o.useState)(null),[b,f]=(0,o.useState)(!1),w=(0,o.useRef)();var y=[{label:"Select",value:""},{label:"Page",value:"page"},{label:"Drawer",value:"drawer"},{label:"Dialog ",value:"dialog"},{label:"Full page dialog",value:"full-dialog"},{label:"Bottom Sheet ",value:"bottom-sheet"}];let k=[{label:(0,s.__)("Select"),value:""},{label:"Screen",value:"screen"},{label:"Taxonomy Screen",value:"tax-screen"},{label:"Close/Pop Screen",value:"pop"},{label:"Page/Post With Blocks ",value:"post"},{label:"Query Loop Post Screen",value:"post-screen"},{label:"Query Loop Post Permalink (webview) ",value:"permalink"},{label:"Extrernal Link",value:"link"}];const E=e=>{t({settings:{...n,...e}})};(0,o.useEffect)((()=>{l||f(!1)}),[l]),(0,o.useEffect)((()=>{console.log(n)}),[n]);const S=()=>(0,o.createElement)("div",{style:{minWidth:"326px"}},(0,o.createElement)(i.PanelBody,null,(0,o.createElement)(i.SelectControl,{label:(0,s.__)("Link to","brand"),help:(0,s.__)("Link a screen, post or external page"),value:r,allowReset:!1,onChange:e=>{E({linkTo:e,action:"",postId:"",title:""})},options:k})),"screen"==r?(0,o.createElement)(i.PanelBody,null,(0,o.createElement)(x,{value:a,onChange:e=>{E({action:e,templatekey:e})}})):"post-screen"==r?(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.PanelBody,null,(0,o.createElement)(x,{value:h,onChange:e=>{E({templatekey:e})}}))):"tax-screen"==r?(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.PanelBody,null,(0,o.createElement)(x,{value:h,onChange:e=>{E({templatekey:e})}})),(0,o.createElement)("div",{style:{maxWidth:"fit-content"}},(0,o.createElement)(u.__experimentalLinkControl,{searchInputPlaceholder:"Search here...",value:{url:a,title:m},settings:[],onChange:e=>{e.action=e.url,E({...e})},withCreateSuggestion:!0,createSuggestionButtonText:e=>`${(0,s.__)("New:")} ${e}`})),(0,o.createElement)(i.PanelBody,null,(0,o.createElement)(I,{value:g,onChange:e=>E({queryId:e})}))):"post"==r?(0,o.createElement)("div",{style:{maxWidth:"fit-content"}},(0,o.createElement)(u.__experimentalLinkControl,{searchInputPlaceholder:"Search here...",value:{url:a,title:m},settings:[],onChange:e=>{E({action:e.url,postId:e.id,title:e.title})},withCreateSuggestion:!0,createSuggestionButtonText:e=>`${(0,s.__)("New:")} ${e}`})):"link"==r?(0,o.createElement)(u.__experimentalLinkControl,{searchInputPlaceholder:"Search here...",value:{url:a},settings:[],onChange:e=>{E({action:e.url})},withCreateSuggestion:!0,createSuggestionButtonText:e=>`${(0,s.__)("New:")} ${e}`}):void 0,_()),_=()=>{if("screen"==r||"tax-screen"==r)return(0,o.createElement)(i.PanelBody,null,(0,o.createElement)(i.SelectControl,{label:(0,s.__)("Open as ","brand"),help:(0,s.__)("Select screen type, default is set to page"),value:c,allowReset:!1,onChange:e=>{E({screenType:e})},options:y}))};return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(u.BlockControls,{group:"block"},(0,o.createElement)(i.ToolbarButton,{name:"link",icon:j,title:(0,s.__)("Link"),shortcut:p.displayShortcut.primary("k"),onClick:function(e){e.preventDefault(),f(!0)}}),""),l&&(b||"")&&(0,o.createElement)(i.Popover,{placement:"bottom",onClose:()=>{f(!1),w.current?.focus()},anchor:d,focusOnMount:!!b&&"firstElement",__unstableSlotName:"__unstable-block-tools-after",shift:!0},S()),(0,o.createElement)(u.InspectorControls,null,S()))};const T="xapp/text-block",N="xapp/icon",z=[N,T,"core/spacer","xapp/badge"];(0,l.registerBlockType)("xapp/button",{edit:function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n){let{...l}=n;const{attributes:a,setAttributes:r,clientId:c}=l,{blockId:s,settings:i,style:u={}}=a,{spacing:p,color:g,typography:h}=u,d=S((e=>e("core/editor").getCurrentPostType()),[]),[b,f]=(0,v.useEntityProp)("postType",d,"meta"),w=e=>{r({settings:{...i,...e}})};(0,m.useEffect)((()=>{r({attributes:a}),w(),t&&u?.length&&y()}),[]);const y=e=>{r({style:{...u,...e}})};let E={setSettings:w,setLocale:e=>{((e,t,n,l)=>{let a={[`block_${n}`]:k(l)};e.blockLocales&&""!==e.blockLocales&&(a={...JSON.parse(e.blockLocales),...a}),t({...e,blockLocales:JSON.stringify(a)})})(b,f,s,e)},setStyle:y,meta:b,setMeta:f,blockId:s,setSpacing:e=>{y({spacing:{...p,...e}})},setColor:e=>{y({color:{...g,...e}})},setTypography:e=>{y({typography:{...h,...e}})}};t||delete E.setStyle;let _={...E,...l};return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(e,_))}}((function(e){const{attributes:t,setAttributes:n,setStyle:l,isSelected:r,setSettings:p}=e,{style:m,settings:g,layout:h,align:d,width:v,size:b,className:f}=t,{spacing:w,elevation:y}=m,k=(0,u.__experimentalUseBorderProps)(t),E=(0,u.__experimentalUseColorProps)(t),S=(0,u.__experimentalGetSpacingClassesAndStyles)(t),_=e=>{l({spacing:{...w,...e}})},C=(0,u.useBlockProps)({className:c()({"is-vertical":!1}),style:{display:"flex",justifyContent:"center",width:w?.width||"auto"}}),x=(0,u.useInnerBlocksProps)(C,{allowedBlocks:z,orientation:"horizontal",template:[[N,{style:{color:{text:"white"}}}],[T,{settings:{text:"Button Text"},style:{color:{text:"white"}}}]],style:{color:{backgroundColor:"var(--wp--theme--color--primary)",background:"var(--wp--theme--color--primary)"}},__experimentalLayout:h,templateInsertUpdatesSelection:!0});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(o.Fragment,null,(0,o.createElement)(u.BlockControls,{group:"block"},(0,o.createElement)(u.AlignmentControl,{value:d,onChange:e=>{n({align:e})}})),(0,o.createElement)(H,{setAttributes:n,isSelected:r,setSettings:p,settings:g}),(0,o.createElement)(u.InspectorControls,null,(0,o.createElement)(u.InspectorControls,null,(0,o.createElement)(i.PanelBody,{title:(0,s.__)("Settings")},(0,o.createElement)(i.ButtonGroup,{"aria-label":(0,s.__)("Button width")},["custom","full"].map((e=>(0,o.createElement)(i.Button,{key:e,isSmall:!0,isPressed:e===b,onClick:()=>{_("full"==e?{width:"100%"}:{width:"150px"}),n({size:e})}},e.toUpperCase())))),"custom"==b&&(0,o.createElement)(i.__experimentalUnitControl,{label:"Width",value:w?.width,onChange:e=>_({width:e})}),(0,o.createElement)(i.__experimentalUnitControl,{label:"Height",value:w?.height,onChange:e=>_({height:e})}),(0,o.createElement)(i.RangeControl,{label:(0,s.__)("Elevation","xapp"),value:y||0,onChange:e=>{l({elevation:e})},min:0,max:24}))))),(0,o.createElement)("div",{className:`mdc-elevation--z${y||0}`,style:{display:"flex",alignItems:"center",justifyContent:"100%"==v?"center":d}},(0,o.createElement)("div",{className:`mdc-elevation--z${y||0}`,style:{...k.style,...E.style,...S.style,..."is-style-text"==f&&{backgroundColor:"transparent",border:"none"},..."is-style-outline"==f&&{backgroundColor:"transparent"},height:w?.height||"auto",width:w?.width||"auto",display:"flex",alignItems:"center",justifyContent:"center"}},(0,o.createElement)("div",a({},x,{orientation:"horizontal"})))))})),save:function(e){let{attributes:t,className:n,clientId:l}=e;const a=u.useBlockProps.save();return(0,o.createElement)("div",a,(0,o.createElement)(u.InnerBlocks.Content,null))}})},4184:function(e,t){var n;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var r=a.apply(null,n);r&&e.push(r)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)l.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=function(t,n,a,o){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||r>=o)&&Object.keys(l.O).every((function(e){return l.O[e](n[s])}))?n.splice(s--,1):(c=!1,o<r&&(r=o));if(c){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={910:0,226:0,515:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,r=n[0],c=n[1],s=n[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(a in c)l.o(c,a)&&(l.m[a]=c[a]);if(s)var u=s(l)}for(t&&t(n);i<r.length;i++)o=r[i],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(u)},n=self.webpackChunkxapp_wp=self.webpackChunkxapp_wp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=l.O(void 0,[226,515],(function(){return l(5737)}));a=l.O(a)}();