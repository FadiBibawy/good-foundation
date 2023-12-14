"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{5280:function(e,t,a){var s=a(5893);let n=e=>{let{children:t,className:a,...n}=e;return(0,s.jsx)("button",{className:"flex items-center justify-center px-5 py-2 space-x-3 rounded disabled:opacity-75 ".concat(a),...n,children:t})};t.Z=n},9769:function(e,t,a){var s=a(5893);let n=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"flex flex-col h-full p-5 space-y-5 overflow-y-auto md:p-10 md:w-3/4",children:t})};n.Container=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"flex flex-col pb-10 space-y-5",children:t})},n.Divider=e=>{let{thick:t}=e;return t?(0,s.jsx)("hr",{className:"border-2 dark:border-gray-600"}):(0,s.jsx)("hr",{className:"border dark:border-gray-700"})},n.Empty=e=>{let{children:t}=e;return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"flex items-center justify-center p-5 bg-gray-100 border-4 border-dashed rounded",children:(0,s.jsx)("p",{children:t})})})},n.Title=e=>{let{subtitle:t,title:a}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-3xl font-bold md:text-4xl",children:a}),(0,s.jsx)("h3",{className:"text-gray-400",children:t})]})},n.Container.displayName="Container",n.Divider.displayName="Divider",n.Empty.displayName="Empty",n.Title.displayName="Title",t.Z=n},6400:function(e,t,a){var s=a(5893),n=a(7294),r=a(9008),l=a.n(r);let i=e=>{let{author:t,description:a,keywords:r,noIndex:i,title:c}=e,[o,d]=(0,n.useState)("");return(0,n.useEffect)(()=>{d(window.location.origin)},[]),(0,s.jsxs)(l(),{children:[(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{name:"title",content:c}),(0,s.jsx)("meta",{name:"description",content:a}),(0,s.jsx)("meta",{name:"keywords",content:r}),(0,s.jsx)("meta",{name:"author",content:t}),(0,s.jsx)("title",{children:c}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:url",content:o}),(0,s.jsx)("meta",{property:"og:title",content:c}),(0,s.jsx)("meta",{property:"og:description",content:a}),(0,s.jsx)("meta",{property:"og:image",content:"".concat(o,"/images/seo-cover.png")}),(0,s.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:url",content:o}),(0,s.jsx)("meta",{property:"twitter:title",content:c}),(0,s.jsx)("meta",{property:"twitter:description",content:a}),(0,s.jsx)("meta",{property:"twitter:image",content:"".concat(o,"/images/seo-cover.png")}),i&&(0,s.jsx)("meta",{name:"robots",content:"noindex"})]})};i.defaultProps={author:"",description:"",keywords:"",noIndex:!1},t.Z=i},5102:function(e,t,a){var s=a(5893),n=a(7294),r=a(4080),l=a(7567),i=a(243);let c=e=>{let{children:t,show:a,title:c,toggle:o}=e;return(0,s.jsx)(r.u,{appear:!0,as:n.Fragment,show:a,children:(0,s.jsx)(l.V,{className:"fixed inset-0 z-50 overflow-y-auto text-gray-800",onClose:o,children:(0,s.jsxs)("div",{className:"flex items-center justify-center h-screen p-5",children:[(0,s.jsx)(r.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(l.V.Overlay,{className:"fixed inset-0 bg-black bg-opacity-30"})}),(0,s.jsx)("span",{"aria-hidden":"true",className:"inline-block align-middle",children:"​"}),(0,s.jsx)(r.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,s.jsxs)("div",{className:"relative inline-block p-10 my-10 space-y-5 overflow-hidden text-left align-middle transition-all transform bg-white rounded shadow-xl",children:[(0,s.jsx)(l.V.Title,{as:"h2",className:"text-2xl font-bold leading-5",children:c}),t,(0,s.jsx)("button",{className:"absolute top-0 outline-none right-5",onClick:o,children:(0,s.jsx)(i,{className:"w-6 h-6"})})]})})]})})})};c.defaultProps={show:!1,subtitle:"",title:"",toggle:null},t.Z=c},6746:function(e,t,a){a.d(t,{ay:function(){return r},J9:function(){return i},Th:function(){return o},LR:function(){return m},_O:function(){return u}});var s=a(8100);let n=e=>{let{data:t,error:a}=(0,s.ZP)("".concat("/api/workspace/domain/check?domain=".concat(e)));return{...t,isLoading:!a&&!t,isError:a}};var r=n;let l=e=>{let{data:t,error:a}=(0,s.ZP)("".concat("/api/workspace/".concat(e,"/domains")));return{...t,isLoading:!a&&!t,isError:a}};var i=l;let c=()=>{let{data:e,error:t}=(0,s.ZP)("".concat("/api/workspaces/invitations"));return{...e,isLoading:!t&&!e,isError:t}};var o=c;let d=e=>{let{data:t,error:a}=(0,s.ZP)("".concat("/api/workspace/".concat(e,"/members")));return{...t,isLoading:!a&&!t,isError:a}};var m=d;let x=()=>{let{data:e,error:t}=(0,s.ZP)("".concat("/api/workspaces"));return{...e,isLoading:!t&&!e,isError:t}};var u=x},1666:function(e,t,a){a.d(t,{p0:function(){return M},g1:function(){return W},a2:function(){return A},YG:function(){return J}});var s=a(5893),n=a(7294),r=a(1163),l=a(3299),i=a(6501),c=a(9769),o=a(471),d=a(4080),m=a(1670),x=a(1613),u=a(3828),h=a(6104),p=a(333),g=a(4858),j=a(1833),f=a(1664),y=a.n(f),v=a(7421),b=a(2010);let w=()=>{let{data:e}=(0,l.useSession)(),{theme:t,setTheme:a}=(0,b.F)(),{t:r}=(0,v.$G)(),i=()=>{let e=confirm("Are you sure you want to logout?");e&&(0,l.signOut)({callbackUrl:"/"})},c=e=>{e.preventDefault(),a("dark"===t?"light":"dark")};return(0,s.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h5",{className:"font-bold text-gray-800 dark:text-gray-200",children:e&&e.user&&(0,s.jsx)("span",{children:e.user.name||e.user.email})})}),(0,s.jsxs)(o.v,{as:"div",className:"relative inline-block text-left",children:[(0,s.jsx)("div",{children:(0,s.jsxs)(o.v.Button,{className:"flex items-center justify-center px-5 py-2 space-x-3 border rounded hover:bg-gray-100 dark:hover:text-gray-800",children:[(0,s.jsx)(m,{"aria-hidden":"true",className:"w-5 h-5"}),(0,s.jsx)("span",{children:"Settings"})]})}),(0,s.jsx)(d.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,s.jsxs)(o.v.Items,{className:"absolute right-0 w-40 mt-2 origin-top-right bg-white border divide-y divide-gray-100 rounded",children:[(0,s.jsxs)("div",{className:"p-2",children:[(0,s.jsx)(o.v.Item,{children:(0,s.jsxs)(y(),{href:"/account/settings",className:"flex items-center w-full px-2 py-2 space-x-2 text-sm text-gray-800 rounded hover:bg-blue-600 hover:text-white group",children:[(0,s.jsx)(x,{"aria-hidden":"true",className:"w-5 h-5"}),(0,s.jsx)("span",{children:r("common.label.account")})]})}),(0,s.jsx)(o.v.Item,{children:(0,s.jsxs)(y(),{href:"/account/billing",className:"flex items-center w-full px-2 py-2 space-x-2 text-sm text-gray-800 rounded hover:bg-blue-600 hover:text-white group",children:[(0,s.jsx)(u,{"aria-hidden":"true",className:"w-5 h-5"}),(0,s.jsx)("span",{children:r("common.label.billing")})]})})]}),(0,s.jsxs)("div",{className:"p-2",children:[(0,s.jsx)(o.v.Item,{children:(0,s.jsxs)(y(),{href:"/",className:"flex items-center w-full px-2 py-2 space-x-2 text-sm text-gray-800 rounded hover:bg-blue-600 hover:text-white group",children:[(0,s.jsx)(h,{"aria-hidden":"true",className:"w-5 h-5"}),(0,s.jsx)("span",{children:r("common.label.landingpage")})]})}),(0,s.jsx)(o.v.Item,{children:(0,s.jsx)("button",{className:"flex items-center w-full px-2 py-2 space-x-2 text-sm text-gray-800 rounded hover:bg-blue-600 hover:text-white group",onClick:c,children:"dark"===t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{className:"w-5 h-5"}),(0,s.jsx)("span",{children:r("common.label.light.mode")})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{className:"w-5 h-5"}),(0,s.jsx)("span",{children:r("common.label.dark.mode")})]})})})]}),(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(o.v.Item,{children:(0,s.jsxs)("button",{className:"flex items-center w-full px-2 py-2 space-x-2 text-sm text-gray-800 rounded hover:bg-blue-600 hover:text-white group",onClick:i,children:[(0,s.jsx)(j,{"aria-hidden":"true",className:"w-5 h-5"}),(0,s.jsx)("span",{children:r("common.label.logout")})]})})})]})})]})]})};var N=a(9262),k=a(6271),F=a(7159),C=a(6962),Z=a(5280),E=a(5102),T=a(6746),O=a(3167),S=a(8464);let P=()=>{let{t:e}=(0,v.$G)(),{data:t,isLoading:a}=(0,T._O)(),{workspace:l,setWorkspace:c}=(0,S.c)(),o=(0,r.useRouter)(),[m,x]=(0,n.useState)(!1),[u,h]=(0,n.useState)(""),[p,g]=(0,n.useState)(!1),j=u.length>0&&u.length<=16,f=e=>{e.preventDefault(),x(!0),(0,O.Z)("/api/workspace",{body:{name:u},method:"POST"}).then(e=>{x(!1),e.errors?Object.keys(e.errors).forEach(t=>i.ZP.error(e.errors[t].msg)):(w(),h(""),i.ZP.success("Workspace successfully created!"))})},y=e=>h(e.target.value),b=e=>{c(e),o.replace("/account/".concat(null==e?void 0:e.slug))},w=()=>g(!p);return(0,s.jsxs)("div",{className:"flex flex-col items-stretch justify-center px-5 space-y-3",children:[(0,s.jsxs)(Z.Z,{className:"text-white bg-blue-600 hover:bg-blue-500",onClick:w,children:[(0,s.jsx)(k,{className:"w-5 h-5 text-white","aria-hidden":"true"}),(0,s.jsx)("span",{children:e("workspace.action.button.label")})]}),(0,s.jsxs)(E.Z,{show:p,title:"Create a Workspace",toggle:w,children:[(0,s.jsxs)("div",{className:"space-y-0 text-sm text-gray-600",children:[(0,s.jsx)("p",{children:e("workspace.action.create.description.lineOne")}),(0,s.jsx)("p",{children:e("workspace.action.create.description.lineTwo")})]}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("h3",{className:"text-xl font-bold",children:e("workspace.action.name.label")}),(0,s.jsx)("p",{className:"text-sm text-gray-400",children:e("workspace.suggesion.label")}),(0,s.jsx)("input",{className:"w-full px-3 py-2 border rounded",disabled:m,onChange:y,type:"text",value:u})]}),(0,s.jsx)("div",{className:"flex flex-col items-stretch",children:(0,s.jsx)(Z.Z,{className:"text-white bg-blue-600 hover:bg-blue-500",disabled:!j||m,onClick:f,children:(0,s.jsx)("span",{children:e("workspace.action.button.label")})})})]}),(0,s.jsx)(N.R,{value:l,onChange:b,children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)(N.R.Button,{className:"relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default",children:[(0,s.jsx)("span",{className:"block text-gray-600 truncate",children:a?"Fetching workspaces...":(null==t?void 0:t.workspaces.length)===0?e("workspace.message.notfound"):null===l?e("workspace.action.label.select"):l.name}),(0,s.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:(0,s.jsx)(F,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"})})]}),(null==t?void 0:t.workspaces.length)>0&&(0,s.jsx)(d.u,{as:n.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(N.R.Options,{className:"absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60",children:null==t?void 0:t.workspaces.map((e,t)=>(0,s.jsx)(N.R.Option,{className:e=>{let{active:t}=e;return"".concat(t?"text-blue-800 bg-blue-200":"text-gray-800","\n                          cursor-pointer select-none relative py-2 pl-10 pr-4")},value:e,children:t=>{let{selected:a,active:n}=t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"".concat(a?"font-bold":"font-normal"," block truncate"),children:e.name}),a?(0,s.jsx)("span",{className:"".concat("text-blue-600","\n                                absolute inset-y-0 left-0 flex items-center pl-3"),children:(0,s.jsx)(C,{className:"w-5 h-5","aria-hidden":"true"})}):null]})}},t))})})]})})]})},I=e=>{let{data:t,isLoading:a}=e,{t:n}=(0,v.$G)();return a?(0,s.jsx)("div",{className:"h-6 mb-3 bg-gray-600 rounded animate-pulse"}):(0,s.jsx)("li",{children:(0,s.jsx)(y(),{href:t.path,className:"text-gray-300 hover:text-white",children:n(t.name)})})};I.defaultProps={data:null,isLoading:!1};let L=e=>{let{data:t,isLoading:a,showMenu:n}=e,{t:r}=(0,v.$G)();return n?(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h5",{className:"text-sm font-bold text-gray-400",children:r(t.name)}),(0,s.jsx)("ul",{className:"ml-5 leading-10",children:t.menuItems.map((e,t)=>(0,s.jsx)(I,{data:e,isLoading:a},t))})]}):null};L.defaultProps={isLoading:!1,showMenu:!1},a(6609);var _=a(1799);let R=[{name:"Account",menuItems:[{name:"common.label.dashboard",path:"/account"},{name:"common.label.billing",path:"/account/billing"},{name:"common.label.settings",path:"/account/settings"}]}],D=e=>{let{menu:t}=e,[a,r]=(0,n.useState)(!1),{data:l,isLoading:i}=(0,T._O)(),{workspace:c}=(0,S.c)(),o=()=>r(!a);return(0,s.jsxs)("aside",{className:"sticky z-40 flex flex-col space-y-5 text-white bg-gray-800 dark:bg-gray-900 md:overflow-y-auto md:w-1/4 md:h-screen overscroll-contain",children:[(0,s.jsxs)("div",{className:"relative flex items-center justify-center p-5 text-center border-b border-b-gray-900",children:[(0,s.jsx)(y(),{href:"/",className:"flex-grow text-2xl font-bold",children:"Nextacular"}),(0,s.jsx)("button",{className:"absolute right-0 p-5 md:hidden",onClick:o,children:(0,s.jsx)(_,{className:"w-6 h-6"})})]}),(0,s.jsxs)("div",{className:["flex-col space-y-5 md:flex md:relative md:top-0",a?"absolute top-12 bg-gray-800 right-0 left-0 h-screen":"hidden"].join(" "),children:[(0,s.jsx)(P,{}),(0,s.jsxs)("div",{className:"flex flex-col p-5 space-y-10",children:[R.map((e,t)=>(0,s.jsx)(L,{data:e,showMenu:!0},t)),c&&t.map((e,t)=>(0,s.jsx)(L,{data:e,isLoading:i,showMenu:(null==l?void 0:l.workspaces.length)>0||i},t))]})]})]})},G=e=>[{name:"Workspace",menuItems:[{name:"common.label.home",path:"/account/".concat(e)},{name:"common.label.integrations",path:"/account/".concat(e,"/integrations")}]},{name:"Settings",menuItems:[{name:"settings.workspace.information",path:"/account/".concat(e,"/settings/general")},{name:"settings.domain.configuration",path:"/account/".concat(e,"/settings/domain")},{name:"settings.team.management",path:"/account/".concat(e,"/settings/team")},{name:"settings.advanced",path:"/account/".concat(e,"/settings/advanced")}]}],$=e=>{let{children:t}=e,{status:a}=(0,l.useSession)(),o=(0,r.useRouter)(),{workspace:d}=(0,S.c)();return((0,n.useEffect)(()=>{"unauthenticated"===a&&o.replace("/auth/login")},[a,o]),"loading"===a)?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)("main",{className:"relative flex flex-col w-screen h-screen space-x-0 text-gray-800 dark:text-gray-200 md:space-x-5 md:flex-row bg-gray-50 dark:bg-gray-800",children:[(0,s.jsx)(D,{menu:G(null==d?void 0:d.slug)}),(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(i.x7,{position:"bottom-left",toastOptions:{duration:1e4}}),(0,s.jsx)(w,{}),t]})]})};var M=$;let V=e=>{let{children:t}=e,a=(0,r.useRouter)(),{status:c}=(0,l.useSession)(),{setTheme:o}=(0,b.F)();return((0,n.useEffect)(()=>{o("light"),"authenticated"===c&&a.push("/account")},[o,c,a]),"loading"===c)?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)("main",{className:"relative flex flex-col items-center justify-center h-screen p-10 space-y-10",children:[(0,s.jsx)(i.x7,{position:"bottom-center",toastOptions:{duration:1e4}}),t]})};var W=V;let z=e=>{let{children:t}=e,{setTheme:a}=(0,b.F)();return(0,n.useEffect)(()=>{a("light")},[a]),(0,s.jsx)("main",{className:"relative flex flex-col text-gray-800",children:t})};var A=z;let B=e=>{let{children:t}=e;return(0,s.jsxs)("main",{className:"relative flex flex-col items-center justify-center h-screen space-y-10 text-gray-800 bg-gray-50",children:[(0,s.jsx)(i.x7,{position:"bottom-center",toastOptions:{duration:1e4}}),t]})};var J=B},3167:function(e,t){let a=async(e,t)=>{let{body:a,headers:s,...n}=t,r=JSON.stringify(a),l=await fetch(e,{body:r,headers:{"Content-Type":"application/json",...s},...n}),i=await l.json();return{status:l.status,...i,url:e}};t.Z=a}}]);