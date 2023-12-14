(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{3006:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teams/invite",function(){return r(1109)}])},5280:function(e,t,r){"use strict";var a=r(5893);let s=e=>{let{children:t,className:r,...s}=e;return(0,a.jsx)("button",{className:"flex items-center justify-center px-5 py-2 space-x-3 rounded disabled:opacity-75 ".concat(r),...s,children:t})};t.Z=s},9398:function(e,t,r){"use strict";var a=r(5893);let s=e=>{let{children:t,danger:r}=e;return r?(0,a.jsx)("div",{className:"flex flex-col justify-between border-2 border-red-600 rounded",children:t}):(0,a.jsx)("div",{className:"flex flex-col justify-between border rounded dark:border-gray-600",children:t})};s.Body=e=>{let{children:t,subtitle:r,title:s}=e;return(0,a.jsxs)("div",{className:"flex flex-col p-5 space-y-3 overflow-auto",children:[s?(0,a.jsx)("h2",{className:"text-2xl font-bold",children:s}):(0,a.jsx)("div",{className:"w-full h-8 bg-gray-400 rounded animate-pulse"}),r&&(0,a.jsx)("h3",{className:"text-gray-400",children:r}),(0,a.jsx)("div",{className:"flex flex-col",children:t})]})},s.Empty=e=>{let{children:t}=e;return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"flex items-center justify-center p-5 bg-gray-100 border-4 border-dashed rounded dark:bg-transparent dark:border-gray-600",children:(0,a.jsx)("p",{children:t})})})},s.Footer=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"flex flex-row items-center justify-between px-5 py-3 space-x-5 bg-gray-100 border-t rounded-b dark:border-t-gray-600 dark:bg-gray-900",children:t})},s.Body.displayName="Body",s.Empty.displayName="Empty",s.Footer.displayName="Footer",t.Z=s},3167:function(e,t){"use strict";let r=async(e,t)=>{let{body:r,headers:a,...s}=t,o=JSON.stringify(r),i=await fetch(e,{body:o,headers:{"Content-Type":"application/json",...a},...s}),n=await i.json();return{status:i.status,...n,url:e}};t.Z=r},1109:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return m}});var a=r(5893),s=r(7294),o=r(1664),i=r.n(o),n=r(3299),l=r(1163),c=r(6501),d=r(9398),u=r(5280),p=r(3167);let f=e=>{let{workspace:t}=e,{data:r}=(0,n.useSession)(),o=(0,l.useRouter)(),[f,m]=(0,s.useState)(!1),y=()=>{m(!0),(0,p.Z)("/api/workspace/team/join",{body:{workspaceCode:t.workspaceCode},method:"POST"}).then(e=>{m(!1),e.errors?(422===e.status&&o.replace("/account"),Object.keys(e.errors).forEach(t=>c.ZP.error(e.errors[t].msg))):c.ZP.success("Accepted invitation!")})};return(0,a.jsxs)("main",{className:"relative flex flex-col items-center justify-center h-screen space-y-10",children:[(0,a.jsx)(c.x7,{position:"bottom-center",toastOptions:{duration:1e4}}),(0,a.jsx)("div",{className:"w-full py-5",children:(0,a.jsx)("div",{className:"relative flex flex-col mx-auto space-y-5",children:(0,a.jsx)("div",{className:"flex flex-col items-center justify-center mx-auto",children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(d.Z.Body,{title:t.name,subtitle:"You are invited to join this workspace."}),(0,a.jsx)(d.Z.Footer,{children:r?(0,a.jsx)(u.Z,{className:"text-white bg-blue-600 hover:bg-blue-500",disabled:f,onClick:y,children:"Join Workspace"}):(0,a.jsx)(i(),{href:"/auth/login",className:"flex items-center justify-center px-5 py-2 space-x-3 text-white bg-blue-600 rounded hover:bg-blue-500",children:"Create an account"})})]})})})})]})};var m=!0;t.default=f},6501:function(e,t,r){"use strict";let a,s;r.d(t,{x7:function(){return es},ZP:function(){return eo}});var o,i=r(7294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,i):o+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+a},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},y=(e,t,r,a,s)=>{var o,i;let n=m(e),l=f[n]||(f[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!f[l]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);f[l]=p(s?{["@keyframes "+l]:t}:t,r?"":"."+l)}let y=r&&f.g?f.g:null;return r&&(f.g=f[l]),o=f[l],i=t,y?i.data=i.data.replace(y,o):-1===i.data.indexOf(o)&&(i.data=a?o+i.data:i.data+o),l},h=(e,t,r)=>e.reduce((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return y(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let g,x,v,w=b.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;r.p=Object.assign({theme:x&&x()},n),r.o=/ *go\d+/.test(l),n.className=b.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),g(c,n)}return t?t(s):s}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,E=(a=0,()=>(++a).toString()),O=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},$=new Map,C=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),A({type:4,toastId:e})},1e3);$.set(e,t)},_=e=>{let t=$.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&_(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?P(e,{type:1,toast:r}):P(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?C(a):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},Z=[],z={toasts:[],pausedAt:void 0},A=e=>{z=P(z,e),Z.forEach(e=>{e(z)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=(e={})=>{let[t,r]=(0,i.useState)(z);(0,i.useEffect)(()=>(Z.push(r),()=>{let e=Z.indexOf(r);e>-1&&Z.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),F=e=>(t,r)=>{let a=D(t,e,r);return A({type:2,toast:a}),a.id},I=(e,t)=>F("blank")(e,t);I.error=F("error"),I.success=F("success"),I.loading=F("loading"),I.custom=F("custom"),I.dismiss=e=>{A({type:3,toastId:e})},I.remove=e=>A({type:4,toastId:e}),I.promise=(e,t,r)=>{let a=I.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(I.success(k(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{I.error(k(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var M=(e,t)=>{A({type:1,toast:{id:e,height:t}})},B=()=>{A({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:r}=T(e);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&I.dismiss(t.id);return}return setTimeout(()=>I.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,i.useCallback)(()=>{r&&A({type:6,time:Date.now()})},[r]),s=(0,i.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:o}=r||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:B,endPause:a,calculateOffset:s}}},L=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,R=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=j("div")`
  position: absolute;
`,X=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(Y,null,t):t:"blank"===r?null:i.createElement(X,null,i.createElement(J,{...a}),"loading"!==r&&i.createElement(U,null,"error"===r?i.createElement(L,{...a}):i.createElement(R,{...a})))},W=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,G=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=O()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[W(r),G(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?V(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(q,{toast:e}),n=i.createElement(Q,{...e.ariaProps},k(e.message,e));return i.createElement(K,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,p.p=void 0,g=o,x=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let o=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:o,className:t,style:r},s)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:O()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:c}=H(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let o=r.position||t,n=er(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:n},"custom"===r.type?k(r.message,r):s?s(r):i.createElement(ee,{toast:r,position:o}))}))},eo=I}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=3006)}),_N_E=e.O()}]);