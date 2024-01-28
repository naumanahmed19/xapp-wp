(()=>{"use strict";var e,t={4695:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.i18n,a=window.wp.blockEditor,r=window.wp.data,o=window.wp.components,l=JSON.parse('{"u2":"xapp/grid-view"}'),s={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(t){const n=["wide","full"],a=t.reduce(((e,t)=>{const{align:a}=t.attributes;return n.indexOf(a)>n.indexOf(e)?a:e}),void 0),r=t.map((t=>(0,e.createBlock)(t.name,t.attributes,t.innerBlocks)));return(0,e.createBlock)("xapp/list-view",{align:a},r)}}]},{__:i}=wp.i18n,{useDispatch:c,useSelect:u}=wp.data,p=window.wp.coreData,{withSelect:m,withDispatch:d,select:g,useSelect:b}=wp.data,v=(e,t=[],n={})=>{if("object"==typeof e&&null!==e)for(const a of Object.keys(e))v(e[a],t.concat(a),n);else n[t.join("_")]=e;return n},{useSelect:w}=wp.data,{useSelect:f}=wp.data,{select:k,useSelect:h}=wp.data,{SelectControl:y,ComboboxControl:C}=wp.components,{useSelect:S}=wp.data;(0,e.registerBlockType)(l.u2,{variations:[],example:{viewportWidth:600,innerBlocks:[{name:"core/column",innerBlocks:[{name:"core/paragraph",attributes:{
/* translators: example text. */
content:(0,n.__)("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.")}},{name:"core/image",attributes:{url:"https://s.w.org/images/core/5.3/Windbuchencom.jpg"}},{name:"core/paragraph",attributes:{
/* translators: example text. */
content:(0,n.__)("Suspendisse commodo neque lacus, a dictum orci interdum et.")}}]},{name:"core/column",innerBlocks:[{name:"core/paragraph",attributes:{
/* translators: example text. */
content:(0,n.__)("Etiam et egestas lorem. Vivamus sagittis sit amet dolor quis lobortis. Integer sed fermentum arcu, id vulputate lacus. Etiam fermentum sem eu quam hendrerit.")}},{name:"core/paragraph",attributes:{
/* translators: example text. */
content:(0,n.__)("Nam risus massa, ullamcorper consectetur eros fermentum, porta aliquet ligula. Sed vel mauris nec enim.")}}]}]},edit:((e,n=!0)=>function({...a}){const{attributes:r,setAttributes:o,clientId:l}=a,{blockId:s,settings:i,style:c={}}=r,{spacing:u,color:m,typography:d}=c,g=f((e=>e("core/editor").getCurrentPostType()),[]),[b,w]=(0,p.useEntityProp)("postType",g,"meta"),k=e=>{o({settings:{...i,...e}})};(0,t.useEffect)((()=>{o({attributes:r}),k(),n&&c?.length&&h()}),[]);const h=e=>{o({style:{...c,...e}})};let y={setSettings:k,setLocale:e=>{((e,t,n,a)=>{let r={[`block_${n}`]:v(a)};e.blockLocales&&""!==e.blockLocales&&(r={...JSON.parse(e.blockLocales),...r}),t({...e,blockLocales:JSON.stringify(r)})})(b,w,s,e)},setStyle:h,meta:b,setMeta:w,blockId:s,setSpacing:e=>{h({spacing:{...u,...e}})},setColor:e=>{h({color:{...m,...e}})},setTypography:e=>{h({typography:{...d,...e}})}};n||delete y.setStyle;let C={...y,...a};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...C}))})((function(e){const{attributes:{columns:n,gap:l,alignItems:s,justifyContent:i},setAttributes:c,clientId:u}=e,p=(0,r.useSelect)((e=>{const{getBlockOrder:t}=e("core/block-editor");return t(u).length>0}),[u]),m=(0,a.useBlockProps)({className:"xapp-grid-view-block",style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:`${l}px`,alignItems:s,justifyContent:i}}),d=(0,a.useInnerBlocksProps)({...m},{renderAppender:p?void 0:a.InnerBlocks.ButtonBlockAppender});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:"Grid Settings",initialOpen:!0},(0,t.createElement)(o.RangeControl,{label:"Columns",value:n,onChange:e=>c({columns:e}),min:1,max:6}),(0,t.createElement)(o.RangeControl,{label:"Gap",value:l,onChange:e=>c({gap:e}),min:0,max:50}),(0,t.createElement)(o.SelectControl,{label:"Align Items",value:s,options:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}],onChange:e=>c({alignItems:e})}),(0,t.createElement)(o.SelectControl,{label:"Justify Content",value:i,options:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}],onChange:e=>c({justifyContent:e})})))),(0,t.createElement)("div",{...d}))})),save:function({attributes:e,className:n,clientId:r}){const o=a.useBlockProps.save();return(0,t.createElement)("div",{...o},(0,t.createElement)(a.InnerBlocks.Content,null))},transforms:s})}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,n,r,o)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,r,o]=e[u],s=!0,i=0;i<n.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(s=!1,o<l&&(l=o));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={2575:0,5226:0,1781:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[l,s,i]=n,c=0;if(l.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var u=i(a)}for(t&&t(n);c<l.length;c++)o=l[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=globalThis.webpackChunkxapp_wp=globalThis.webpackChunkxapp_wp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[5226,1781],(()=>a(4695)));r=a.O(r)})();