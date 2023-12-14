(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{4865:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return s(828)}])},9398:function(e,r,s){"use strict";var t=s(5893);let i=e=>{let{children:r,danger:s}=e;return s?(0,t.jsx)("div",{className:"flex flex-col justify-between border-2 border-red-600 rounded",children:r}):(0,t.jsx)("div",{className:"flex flex-col justify-between border rounded dark:border-gray-600",children:r})};i.Body=e=>{let{children:r,subtitle:s,title:i}=e;return(0,t.jsxs)("div",{className:"flex flex-col p-5 space-y-3 overflow-auto",children:[i?(0,t.jsx)("h2",{className:"text-2xl font-bold",children:i}):(0,t.jsx)("div",{className:"w-full h-8 bg-gray-400 rounded animate-pulse"}),s&&(0,t.jsx)("h3",{className:"text-gray-400",children:s}),(0,t.jsx)("div",{className:"flex flex-col",children:r})]})},i.Empty=e=>{let{children:r}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"flex items-center justify-center p-5 bg-gray-100 border-4 border-dashed rounded dark:bg-transparent dark:border-gray-600",children:(0,t.jsx)("p",{children:r})})})},i.Footer=e=>{let{children:r}=e;return(0,t.jsx)("div",{className:"flex flex-row items-center justify-between px-5 py-3 space-x-5 bg-gray-100 border-t rounded-b dark:border-t-gray-600 dark:bg-gray-900",children:r})},i.Body.displayName="Body",i.Empty.displayName="Empty",i.Footer.displayName="Footer",r.Z=i},828:function(e,r,s){"use strict";s.r(r);var t=s(5893),i=s(7294),a=s(1163),d=s(6501),o=s(5280),c=s(9398),l=s(9769),n=s(6400),x=s(6746),h=s(1666),u=s(3167),p=s(8464),b=s(7421);let j=()=>{let e=(0,a.useRouter)(),{data:r,isLoading:s}=(0,x.Th)(),{data:j,isLoading:m}=(0,x._O)(),{setWorkspace:y}=(0,p.c)(),{t:g}=(0,b.$G)(),[v,Z]=(0,i.useState)(!1),f=e=>{Z(!0),(0,u.Z)("/api/workspace/team/accept",{body:{memberId:e},method:"PUT"}).then(e=>{Z(!1),e.errors?Object.keys(e.errors).forEach(r=>d.ZP.error(e.errors[r].msg)):d.ZP.success("Accepted invitation!")})},k=e=>{Z(!0),(0,u.Z)("/api/workspace/team/decline",{body:{memberId:e},method:"PUT"}).then(e=>{Z(!1),e.errors?Object.keys(e.errors).forEach(r=>d.ZP.error(e.errors[r].msg)):d.ZP.success("Declined invitation!")})},w=r=>{y(r),e.replace("/account/".concat(r.slug))};return(0,t.jsxs)(h.p0,{children:[(0,t.jsx)(n.Z,{title:"Nextacular - Dashboard"}),(0,t.jsx)(l.Z.Title,{title:g("workspace.dashboard.header.title"),subtitle:g("workspace.dashboard.header.description")}),(0,t.jsx)(l.Z.Divider,{}),(0,t.jsx)(l.Z.Container,{children:(0,t.jsx)("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-3",children:m?(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(c.Z.Body,{}),(0,t.jsx)(c.Z.Footer,{})]}):(null==j?void 0:j.workspaces.length)>0?j.workspaces.map((e,r)=>(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(c.Z.Body,{title:e.name}),(0,t.jsx)(c.Z.Footer,{children:(0,t.jsx)("button",{className:"text-blue-600",onClick:()=>w(e),children:"Select workspace →"})})]},r)):(0,t.jsx)(c.Z.Empty,{children:g("workspace.message.createworkspace")})})}),(0,t.jsx)(l.Z.Divider,{thick:!0}),(0,t.jsx)(l.Z.Title,{title:g("workspace.dashboard.header.invitations.title"),subtitle:g("workspace.dashboard.header.invitations.description")}),(0,t.jsx)(l.Z.Divider,{}),(0,t.jsx)(l.Z.Container,{children:(0,t.jsx)("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-3",children:s?(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(c.Z.Body,{}),(0,t.jsx)(c.Z.Footer,{})]}):(null==r?void 0:r.invitations.length)>0?r.invitations.map((e,r)=>(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(c.Z.Body,{title:e.workspace.name,subtitle:"You have been invited by ".concat(e.invitedBy.name||e.invitedBy.email)}),(0,t.jsxs)(c.Z.Footer,{children:[(0,t.jsx)(o.Z,{className:"text-white bg-blue-600 hover:bg-blue-500",disabled:v,onClick:()=>f(e.id),children:"Accept"}),(0,t.jsx)(o.Z,{className:"text-red-600 border border-red-600 hover:bg-red-600 hover:text-white",disabled:v,onClick:()=>k(e.id),children:"Decline"})]})]},r)):(0,t.jsx)(c.Z.Empty,{children:g("workspace.team.invitations.empty.message")})})})]})};r.default=j}},function(e){e.O(0,[664,438,575,774,888,179],function(){return e(e.s=4865)}),_N_E=e.O()}]);