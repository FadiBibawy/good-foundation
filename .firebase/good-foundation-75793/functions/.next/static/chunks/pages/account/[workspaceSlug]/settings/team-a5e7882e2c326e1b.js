(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{7332:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/[workspaceSlug]/settings/team",function(){return t(362)}])},9398:function(e,s,t){"use strict";var r=t(5893);let a=e=>{let{children:s,danger:t}=e;return t?(0,r.jsx)("div",{className:"flex flex-col justify-between border-2 border-red-600 rounded",children:s}):(0,r.jsx)("div",{className:"flex flex-col justify-between border rounded dark:border-gray-600",children:s})};a.Body=e=>{let{children:s,subtitle:t,title:a}=e;return(0,r.jsxs)("div",{className:"flex flex-col p-5 space-y-3 overflow-auto",children:[a?(0,r.jsx)("h2",{className:"text-2xl font-bold",children:a}):(0,r.jsx)("div",{className:"w-full h-8 bg-gray-400 rounded animate-pulse"}),t&&(0,r.jsx)("h3",{className:"text-gray-400",children:t}),(0,r.jsx)("div",{className:"flex flex-col",children:s})]})},a.Empty=e=>{let{children:s}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"flex items-center justify-center p-5 bg-gray-100 border-4 border-dashed rounded dark:bg-transparent dark:border-gray-600",children:(0,r.jsx)("p",{children:s})})})},a.Footer=e=>{let{children:s}=e;return(0,r.jsx)("div",{className:"flex flex-row items-center justify-between px-5 py-3 space-x-5 bg-gray-100 border-t rounded-b dark:border-t-gray-600 dark:bg-gray-900",children:s})},a.Body.displayName="Body",a.Empty.displayName="Empty",a.Footer.displayName="Footer",s.Z=a},362:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return C}});var r=t(5893),a=t(7294),l=t(471),i=t(4080),n=t(4363),c=t(6493),d=t(243),o=t(450),m=t(588),x=t(385),h=t(4855),u=t.n(h),j=t(6501),b=t(3868),p=t.n(b),f=t(5280),v=t(9398),g=t(9769),N=t(6400),y=t(6746),w=t(1666),k=t(3167),Z=t(7421);let E={email:"",role:x.TeamRole.MEMBER},T=e=>{let{isTeamOwner:s,workspace:t}=e,{t:h}=(0,Z.$G)(),{data:b,isLoading:T}=(0,y.LR)(t.slug),[C,R]=(0,a.useState)(!1),[P,_]=(0,a.useState)([{...E}]),M=0!==P.filter(e=>!p()(e.email)).length,B=()=>{P.push({...E}),_([...P])},S=e=>{(0,k.Z)("/api/workspace/team/role",{body:{memberId:e},method:"PUT"}).then(e=>{e.errors?Object.keys(e.errors).forEach(s=>j.ZP.error(e.errors[s].msg)):j.ZP.success("Updated team member role!")})},I=()=>j.ZP.success("Copied to clipboard!"),O=(e,s)=>{let t=P[s];t.email=e.target.value,_([...P])},F=(e,s)=>{let t=P[s];t.role=e.target.value,_([...P])},L=()=>{R(!0),(0,k.Z)("/api/workspace/".concat(t.slug,"/invite"),{body:{members:P},method:"POST"}).then(e=>{if(R(!1),e.errors)Object.keys(e.errors).forEach(s=>j.ZP.error(e.errors[s].msg));else{let e=[{...E}];_([...e]),j.ZP.success("Invited team members!")}})},D=e=>{P.splice(e,1),_([...P])},z=e=>{(0,k.Z)("/api/workspace/team/member",{body:{memberId:e},method:"DELETE"}).then(e=>{e.errors?Object.keys(e.errors).forEach(s=>j.ZP.error(e.errors[s].msg)):j.ZP.success("Removed team member from workspace!")})};return(0,r.jsxs)(w.p0,{children:[(0,r.jsx)(N.Z,{title:"Nextacular - ".concat(t.name," | Team Management")}),(0,r.jsx)(g.Z.Title,{title:h("settings.team.management"),subtitle:h("settings.team.manage.members")}),(0,r.jsx)(g.Z.Divider,{}),(0,r.jsxs)(g.Z.Container,{children:[(0,r.jsx)(v.Z,{children:(0,r.jsx)(v.Z.Body,{title:h("settings.team.invite.link"),subtitle:h("settings.team.invite.link.description"),children:(0,r.jsxs)("div",{className:"flex items-center justify-between px-3 py-2 space-x-5 font-mono text-sm border rounded",children:[(0,r.jsx)("span",{className:"overflow-x-auto",children:t.inviteLink}),(0,r.jsx)(u(),{onCopy:I,text:t.inviteLink,children:(0,r.jsx)(n,{className:"w-5 h-5 cursor-pointer hover:text-blue-600"})})]})})}),s&&(0,r.jsxs)(v.Z,{children:[(0,r.jsx)(v.Z.Body,{title:"Add New Members",subtitle:"Invite Team members using email address",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-5",children:[(0,r.jsx)("div",{className:"w-1/2",children:(0,r.jsx)("label",{className:"text-sm font-bold text-gray-400",children:h("common.label.email")})}),(0,r.jsx)("div",{className:"w-1/2 md:w-1/4",children:(0,r.jsx)("label",{className:"text-sm font-bold text-gray-400",children:h("common.label.role")})})]}),P.map((e,s)=>(0,r.jsxs)("div",{className:"flex flex-row space-x-5",children:[(0,r.jsx)("input",{className:"w-1/2 px-3 py-2 border rounded",disabled:C,onChange:e=>O(e,s),placeholder:"name@email.com",type:"text",value:e.email}),(0,r.jsxs)("div",{className:"relative inline-block w-1/2 border rounded md:w-1/4 ",children:[(0,r.jsx)("select",{className:"w-full px-3 py-2 capitalize rounded appearance-none",disabled:C,onChange:e=>F(e,s),children:Object.keys(x.TeamRole).map((e,s)=>(0,r.jsx)("option",{value:x.TeamRole["".concat(e)],children:x.TeamRole["".concat(e)].toLowerCase()},s))}),(0,r.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none",children:(0,r.jsx)(c,{className:"w-5 h-5"})})]}),0!==s&&(0,r.jsx)("button",{className:"text-red-600",onClick:()=>D(s),children:(0,r.jsx)(d,{className:"w-5 h-5"})})]},s)),(0,r.jsx)("div",{children:(0,r.jsxs)(f.Z,{className:"text-sm border hover:border-black disabled:opacity-75",disabled:3===P.length||C,onClick:B,children:[(0,r.jsx)(o,{className:"w-5 h-5"}),(0,r.jsx)("span",{children:h("common.action.addmore")})]})})]})}),(0,r.jsxs)(v.Z.Footer,{children:[(0,r.jsxs)("small",{children:["All invited team members will be set to ",(0,r.jsx)("strong",{children:"Pending"})]}),(0,r.jsx)(f.Z,{className:"text-white bg-blue-600 hover:bg-blue-500",disabled:M||C,onClick:L,children:h("common.label.invite")})]})]})]}),(0,r.jsx)(g.Z.Divider,{thick:!0}),(0,r.jsx)(g.Z.Title,{title:h("settings.team.members"),subtitle:h("settings.team.pending.invites")}),(0,r.jsx)(g.Z.Divider,{}),(0,r.jsx)(g.Z.Container,{children:(0,r.jsx)(v.Z,{children:(0,r.jsx)(v.Z.Body,{title:"Manage Team Members",children:(0,r.jsxs)("table",{className:"table-fixed",children:[(0,r.jsx)("thead",{className:"text-gray-400 border-b",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"py-3 text-left",children:"Member Name"}),(0,r.jsx)("th",{className:"text-right"})]})}),(0,r.jsx)("tbody",{className:"text-sm",children:T?(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:2,children:(0,r.jsx)("div",{className:"w-full h-8 bg-gray-400 rounded animate-pulse"})})}):null==b?void 0:b.members.map((e,n)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"py-5",children:(0,r.jsx)("div",{className:"flex flex-row items-center justify-start space-x-3",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("h3",{className:"font-bold",children:e.member.name}),(0,r.jsx)("h4",{className:"text-gray-400",children:e.email})]})})}),(0,r.jsx)("td",{className:"py-3",children:(0,r.jsxs)("div",{className:"flex flex-row items-center justify-end space-x-3",children:[(0,r.jsx)("span",{className:["font-mono text-xs px-2 py-0.5 rounded-full capitalize",e.status===x.InvitationStatus.ACCEPTED?"bg-green-200 text-green-600":e.status===x.InvitationStatus.PENDING?"bg-blue-200 text-blue-600":"bg-red-200 text-red-600"].join(" "),children:e.status.toLowerCase()}),(0,r.jsx)("h4",{className:"capitalize",children:e.teamRole.toLowerCase()}),(null==t?void 0:t.creator.email)!==e.email&&s&&(0,r.jsxs)(l.v,{as:"div",className:"relative inline-block text-left",children:[(0,r.jsx)("div",{children:(0,r.jsx)(l.v.Button,{className:"flex items-center justify-center p-3 space-x-3 rounded hover:bg-gray-100",children:(0,r.jsx)(m,{className:"w-5 h-5"})})}),(0,r.jsx)(i.u,{as:a.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,r.jsx)(l.v.Items,{className:"absolute right-0 z-20 mt-2 origin-top-right bg-white border divide-y divide-gray-100 rounded w-60",children:(0,r.jsxs)("div",{className:"p-2",children:[(0,r.jsx)(l.v.Item,{children:(0,r.jsx)("button",{className:"flex items-center w-full px-2 py-2 space-x-2 text-sm text-gray-800 rounded hover:bg-blue-600 hover:text-white",onClick:()=>S(e.id),children:(0,r.jsxs)("span",{children:['Change role to "',e.teamRole===x.TeamRole.MEMBER?x.TeamRole.OWNER:x.TeamRole.MEMBER,'"']})})}),(0,r.jsx)(l.v.Item,{children:(0,r.jsx)("button",{className:"flex items-center w-full px-2 py-2 space-x-2 text-sm text-red-600 rounded hover:bg-red-600 hover:text-white",onClick:()=>z(e.id),children:(0,r.jsx)("span",{children:"Remove Team Member"})})})]})})})]})]})})]},n))})]})})})})]})};var C=!0;s.default=T}},function(e){e.O(0,[664,438,968,575,774,888,179],function(){return e(e.s=7332)}),_N_E=e.O()}]);