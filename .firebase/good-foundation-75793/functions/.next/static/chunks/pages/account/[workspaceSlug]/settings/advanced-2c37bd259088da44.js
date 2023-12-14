(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[149],{4490:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/[workspaceSlug]/settings/advanced",function(){return r(6219)}])},9398:function(e,s,r){"use strict";var t=r(5893);let a=e=>{let{children:s,danger:r}=e;return r?(0,t.jsx)("div",{className:"flex flex-col justify-between border-2 border-red-600 rounded",children:s}):(0,t.jsx)("div",{className:"flex flex-col justify-between border rounded dark:border-gray-600",children:s})};a.Body=e=>{let{children:s,subtitle:r,title:a}=e;return(0,t.jsxs)("div",{className:"flex flex-col p-5 space-y-3 overflow-auto",children:[a?(0,t.jsx)("h2",{className:"text-2xl font-bold",children:a}):(0,t.jsx)("div",{className:"w-full h-8 bg-gray-400 rounded animate-pulse"}),r&&(0,t.jsx)("h3",{className:"text-gray-400",children:r}),(0,t.jsx)("div",{className:"flex flex-col",children:s})]})},a.Empty=e=>{let{children:s}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"flex items-center justify-center p-5 bg-gray-100 border-4 border-dashed rounded dark:bg-transparent dark:border-gray-600",children:(0,t.jsx)("p",{children:s})})})},a.Footer=e=>{let{children:s}=e;return(0,t.jsx)("div",{className:"flex flex-row items-center justify-between px-5 py-3 space-x-5 bg-gray-100 border-t rounded-b dark:border-t-gray-600 dark:bg-gray-900",children:s})},a.Body.displayName="Body",a.Empty.displayName="Empty",a.Footer.displayName="Footer",s.Z=a},6219:function(e,s,r){"use strict";r.r(s),r.d(s,{__N_SSP:function(){return b}});var t=r(5893),a=r(7294),l=r(1163),n=r(6501),d=r(5280),c=r(6400),i=r(5102),o=r(9398),x=r(9769),u=r(1666),g=r(3167),h=r(8464),p=r(7421);let m=e=>{let{isCreator:s}=e,{setWorkspace:r,workspace:m}=(0,h.c)(),{t:b}=(0,p.$G)(),j=(0,l.useRouter)(),[f,w]=(0,a.useState)(!1),[y,N]=(0,a.useState)(!1),[k,v]=(0,a.useState)(""),_=k===(null==m?void 0:m.slug),Z=e=>v(e.target.value),E=()=>{w(!0),(0,g.Z)("/api/workspace/".concat(m.slug),{method:"DELETE"}).then(e=>{w(!1),e.errors?Object.keys(e.errors).forEach(s=>n.ZP.error(e.errors[s].msg)):(S(),r(null),j.replace("/account"),n.ZP.success("Workspace has been deleted!"))})},S=()=>{v(""),N(!y)};return(0,t.jsxs)(u.p0,{children:[(0,t.jsx)(c.Z,{title:"Nextacular - ".concat(null==m?void 0:m.name," | Advanced Settings")}),(0,t.jsx)(x.Z.Title,{title:b("settings.workspace.advanced"),subtitle:b("settings.workspace.manage.label")}),(0,t.jsx)(x.Z.Divider,{}),(0,t.jsx)(x.Z.Container,{children:(0,t.jsxs)(o.Z,{danger:!0,children:[(0,t.jsx)(o.Z.Body,{title:b("settings.workspace.delete"),subtitle:b("settings.workspace.delete.message")}),(0,t.jsxs)(o.Z.Footer,{children:[(0,t.jsx)("small",{className:[s&&"text-red-600"],children:b(s?"setting.workspace.delete.warning.message":"settings.workspace.delete.contact.message")}),s&&(0,t.jsx)(d.Z,{className:"text-white bg-red-600 hover:bg-red-500",disabled:f,onClick:S,children:f?"Deleting":"Delete"})]}),(0,t.jsxs)(i.Z,{show:y,title:"Deactivate Workspace",toggle:S,children:[(0,t.jsxs)("p",{className:"flex flex-col",children:[(0,t.jsx)("span",{children:b("settings.workspace.delete.data.warning")}),(0,t.jsx)("span",{children:"Data associated with this workspace can't be accessed by team members."})]}),(0,t.jsxs)("p",{className:"px-3 py-2 text-red-600 border border-red-600 rounded",children:[(0,t.jsx)("strong",{children:"Warning:"})," ",b("settings.workspace.delete.final.message")]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsxs)("label",{className:"text-sm text-gray-400",children:["Enter ",(0,t.jsx)("strong",{children:null==m?void 0:m.slug})," to continue:"]}),(0,t.jsx)("input",{className:"px-3 py-2 border rounded",disabled:f,onChange:Z,type:"email",value:k})]}),(0,t.jsx)("div",{className:"flex flex-col items-stretch",children:(0,t.jsx)(d.Z,{className:"text-white bg-red-600 hover:bg-red-500",disabled:!_||f,onClick:E,children:(0,t.jsx)("span",{children:b("settings.workspace.delete")})})})]})]})})]})};var b=!0;s.default=m}},function(e){e.O(0,[664,438,575,774,888,179],function(){return e(e.s=4490)}),_N_E=e.O()}]);