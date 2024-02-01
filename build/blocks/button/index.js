(()=>{var e,t={1424:(e,t,l)=>{"use strict";const n=window.wp.blocks,a=window.React;var o=l(3967),r=l.n(o);const c=window.wp.i18n,i=window.wp.components,s=window.wp.blockEditor,u=window.wp.element,p=window.wp.keycodes,{__:m}=wp.i18n,{useDispatch:d,useSelect:h}=wp.data,{withSelect:v,withDispatch:g,select:b,useSelect:w}=(window.wp.coreData,wp.data),{useSelect:k}=wp.data,{useSelect:f}=wp.data,{select:_,useSelect:x}=wp.data,E=({label:e="Select Screen",value:t,onChange:l})=>{const{blocks:n}=x((e=>({blocks:e("core/block-editor").getBlocks().find((e=>"xapp/screens"==e.name))})));if(!n)return(0,a.createElement)(i.Spinner,null);let o=n.innerBlocks.map((e=>({value:e?.attributes?.screenId,label:e?.attributes?.title}))),r=[{label:(0,c.__)("Select Screen"),value:""},...o,{label:"Sign In",value:"signin"},{label:"Sign Out",value:"signout"},{label:"My Orders",value:"orders"},{label:"Language",value:"language"}];return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.SelectControl,{label:(0,c.__)(e,"brand"),help:(0,c.__)("Link a screen"),value:t,allowReset:!1,onChange:e=>l(e),options:r}))},{SelectControl:y,ComboboxControl:S}=wp.components,{useSelect:C}=wp.data,B=({value:e,onChange:t})=>{const l=function e(t){let l=[];return t.forEach((t=>{"core/query"===t.name&&l.push(t),t.innerBlocks.length&&(l=l.concat(e(t.innerBlocks)))})),l}(C((e=>e("core/editor").getBlocks()))).map((e=>({label:e.attributes?.blockId,value:e.attributes?.blockId})));return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(S,{label:(0,c.__)("Select a block"),help:(0,c.__)("Link this block to another block which is out of context"),onChange:e=>t(e),onFilterValueChange:function(){},options:l,value:e}))},P=window.wp.primitives,O=(0,a.createElement)(P.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(P.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})),I=((0,a.createElement)(P.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(P.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})),({setAttributes:e,attributes:t,isSelected:l})=>{const{action:n,linkTo:o,screenType:r,title:m="",queryId:d,templatekey:h,link:v}=t,[g,b]=(0,u.useState)(null),[w,k]=(0,u.useState)(!1),f=(0,u.useRef)();var _=[{label:"Select",value:""},{label:"Page",value:"page"},{label:"Drawer",value:"drawer"},{label:"Dialog ",value:"dialog"},{label:"Full page dialog",value:"full-dialog"},{label:"Bottom Sheet ",value:"bottom-sheet"}];let x=[{label:(0,c.__)("Select"),value:""},{label:"Screen",value:"screen"},{label:"Taxonomy Screen",value:"tax-screen"},{label:"Close/Pop Screen",value:"pop"},{label:"Page/Post With Blocks ",value:"post"},{label:"Query Loop Post Screen",value:"post-screen"},{label:"Query Loop Post Permalink (webview) ",value:"permalink"},{label:"Extrernal Link",value:"link"},{label:"Share",value:"share"}];(0,u.useEffect)((()=>{l||k(!1)}),[l]);const y=()=>(0,a.createElement)("div",{style:{minWidth:"326px"}},(0,a.createElement)(i.PanelBody,null,(0,a.createElement)(i.SelectControl,{label:(0,c.__)("Link to","brand"),help:(0,c.__)("Link a screen, post or external page"),value:o,allowReset:!1,onChange:t=>{e({linkTo:t,action:"",postId:"",title:""})},options:x})),"screen"==o?(0,a.createElement)(i.PanelBody,null,(0,a.createElement)(E,{value:n,onChange:t=>{e({action:t,templatekey:t})}})):"post-screen"==o?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.PanelBody,null,(0,a.createElement)(E,{value:h,onChange:t=>{e({templatekey:t})}}))):"tax-screen"==o?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.PanelBody,null,(0,a.createElement)(E,{value:h,onChange:t=>{e({templatekey:t})}})),(0,a.createElement)("div",{style:{maxWidth:"fit-content"}},(0,a.createElement)(s.__experimentalLinkControl,{searchInputPlaceholder:"Search...",value:{url:v?.url},settings:[],onChange:t=>{console.log(t,"post"),e({link:t})},withCreateSuggestion:!0,createSuggestionButtonText:e=>`${(0,c.__)("New:")} ${e}`})),(0,a.createElement)(i.PanelBody,null,(0,a.createElement)(B,{value:d,onChange:t=>e({queryId:t})}))):"post"==o?(0,a.createElement)("div",{style:{maxWidth:"fit-content"}},(0,a.createElement)(s.__experimentalLinkControl,{searchInputPlaceholder:"Search here...",value:{url:n,title:m},settings:[],onChange:t=>{e({link:t})},withCreateSuggestion:!0,createSuggestionButtonText:e=>`${(0,c.__)("New:")} ${e}`})):"link"==o?(0,a.createElement)(s.__experimentalLinkControl,{searchInputPlaceholder:"Search here...",value:{url:v?.url},settings:[],onChange:t=>{e({link:t})},withCreateSuggestion:!0,createSuggestionButtonText:e=>`${(0,c.__)("New:")} ${e}`}):void 0,S()),S=()=>{if("screen"==o||"tax-screen"==o)return(0,a.createElement)(i.PanelBody,null,(0,a.createElement)(i.SelectControl,{label:(0,c.__)("Open as ","brand"),help:(0,c.__)("Select screen type, default is set to page"),value:r,allowReset:!1,onChange:t=>{e({screenType:t})},options:_}))};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(s.BlockControls,{group:"block"},(0,a.createElement)(i.ToolbarButton,{name:"link",icon:O,title:(0,c.__)("Link"),shortcut:p.displayShortcut.primary("k"),onClick:function(e){e.preventDefault(),k(!0)}}),""),l&&(w||"")&&(0,a.createElement)(i.Popover,{placement:"bottom",onClose:()=>{k(!1),f.current?.focus()},anchor:g,focusOnMount:!!w&&"firstElement",__unstableSlotName:"__unstable-block-tools-after",shift:!0},y()),(0,a.createElement)(s.InspectorControls,null,y()))}),T="xapp/text-block",L="xapp/icon",H=[L,T,"core/spacer","xapp/badge","core/row","core/group","core/columns"],F="xapp/text-block",A=[{name:"text-button",title:(0,c.__)("Text Button"),description:(0,c.__)("Insert a text button"),icon:(0,a.createElement)(i.SVG,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(i.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"})),innerBlocks:[[F,{content:"Button Text",style:{color:{text:"white"}}}]],scope:["block"]},{name:"add-to-cart-button",title:(0,c.__)("Add to Cart Button"),description:(0,c.__)("Insert an add to cart button"),icon:(0,a.createElement)(i.SVG,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(i.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"})),innerBlocks:[[F,{content:"Add to Cart",style:{color:{text:"white"}}}]],scope:["block"]}];(0,n.registerBlockType)("xapp/button",{__experimentalLabel:(e,{context:t})=>e?.metadata?.name,variations:A,edit:function(e){const{attributes:t,setAttributes:l,isSelected:n}=e,{style:o,layout:u,align:p,size:m,className:d}=t,{spacing:h,elevation:v,dimensions:g}=o,{selfStretch:b="fill",width:w="100%"}=g||{};(0,a.useEffect)((()=>{l({style:{...o,dimensions:{...o?.dimensions,width:"fill"==b?"100%":w}}})}),[b,w]);const k=(0,s.useBlockProps)({className:r()("xapp-button-block",{}),style:{display:"flex",width:w||"auto",justifyContent:"100%"==w?"center":p,alignItems:"center"}}),f=(0,s.useInnerBlocksProps)({...k},{allowedBlocks:H,orientation:"horizontal",template:[[L,{style:{color:{text:"white"}}}],[T,{settings:{text:"Button Text"},style:{color:{text:"white"}}}]],style:{color:{backgroundColor:"var(--wp--theme--color--primary)",background:"var(--wp--theme--color--primary)"}}}),_=e=>{l({style:{...o,dimensions:{...o?.dimensions,...e}}})};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(a.Fragment,null,(0,a.createElement)(s.BlockControls,{group:"block"},(0,a.createElement)(s.AlignmentControl,{value:p,onChange:e=>{l({align:e})}})),(0,a.createElement)(I,{setAttributes:l,isSelected:n,attributes:t}),(0,a.createElement)(s.InspectorControls,{group:"dimensions"},(0,a.createElement)(i.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:"Width",value:b||"fit",help:"",onChange:e=>{_({selfStretch:e})},isBlock:!0},(0,a.createElement)(i.__experimentalToggleGroupControlOption,{key:"fill",value:"fill",label:(0,c.__)("Fill")}),(0,a.createElement)(i.__experimentalToggleGroupControlOption,{key:"fixed",value:"fixed",label:(0,c.__)("Fixed")})),(0,a.createElement)("div",null,"fixed"===b&&(0,a.createElement)(s.HeightControl,{label:"Width",onChange:e=>{_({width:e})},value:o?.dimensions?.width})))),(0,a.createElement)("div",{...f}))},save:function({attributes:e,className:t,clientId:l}){const n=s.useBlockProps.save();return(0,a.createElement)("div",{...n},(0,a.createElement)(s.InnerBlocks.Content,null))}})},3967:(e,t)=>{var l;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,o(l)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)n.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},l={};function n(e){var a=l[e];if(void 0!==a)return a.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,l,a,o)=>{if(!l){var r=1/0;for(u=0;u<e.length;u++){for(var[l,a,o]=e[u],c=!0,i=0;i<l.length;i++)(!1&o||r>=o)&&Object.keys(n.O).every((e=>n.O[e](l[i])))?l.splice(i--,1):(c=!1,o<r&&(r=o));if(c){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={910:0,5226:0,6515:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var a,o,[r,c,i]=l,s=0;if(r.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(i)var u=i(n)}for(t&&t(l);s<r.length;s++)o=r[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},l=globalThis.webpackChunkxapp_wp=globalThis.webpackChunkxapp_wp||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=n.O(void 0,[5226,6515],(()=>n(1424)));a=n.O(a)})();