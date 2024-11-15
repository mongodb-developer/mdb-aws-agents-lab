"use strict";(self.webpackChunkai_agents_lab_reinvent=self.webpackChunkai_agents_lab_reinvent||[]).push([[518],{4278:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=e(4848),s=e(8453),r=(e(3974),e(2763));const c={},a="\ud83d\udc50 Get your connection string",i={id:"agent-tools/get-connection-string",title:"\ud83d\udc50 Get your connection string",description:"In order to ingest data into your cluster later in the lab, you will need to get the connection string for your cluster.",source:"@site/docs/50-agent-tools/3-get-connection-string.mdx",sourceDirName:"50-agent-tools",slug:"/agent-tools/get-connection-string",permalink:"/mdb-aws-agents-lab/docs/agent-tools/get-connection-string",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-aws-agents-lab/blob/main/docs/50-agent-tools/3-get-connection-string.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Running code in Jupyter Notebooks",permalink:"/mdb-aws-agents-lab/docs/agent-tools/jupyter_notebooks"},next:{title:"\ud83d\udc50 Import data",permalink:"/mdb-aws-agents-lab/docs/agent-tools/import-data"}},l={},d=[];function u(t){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-get-your-connection-string",children:"\ud83d\udc50 Get your connection string"})}),"\n",(0,o.jsx)(n.p,{children:"In order to ingest data into your cluster later in the lab, you will need to get the connection string for your cluster."}),"\n",(0,o.jsxs)(n.p,{children:["In the Atlas UI, navigate to the ",(0,o.jsx)(n.strong,{children:"Overview"})," page. In the ",(0,o.jsx)(n.strong,{children:"Clusters section"}),", select the cluster you just created and click ",(0,o.jsx)(n.strong,{children:"Connect"}),"."]}),"\n",(0,o.jsx)(r.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/3-get-conn-string/1-connect-button.png",alt:"Screenshot of the connect button"}),"\n",(0,o.jsxs)(n.p,{children:["A modal will display several ways to connect to your database. Select ",(0,o.jsx)(n.strong,{children:"Drivers"}),"."]}),"\n",(0,o.jsx)(r.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/3-get-conn-string/2-connect-modal.png",alt:"Screenshot of the connect modal"}),"\n",(0,o.jsxs)(n.p,{children:["Look for your connection string. It should look something like ",(0,o.jsx)(n.code,{children:"mongodb+srv://<username>:<password>@<cluster-url>/"})]}),"\n",(0,o.jsx)(r.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/3-get-conn-string/3-connect-compass.png",alt:"Screenshot of the connection string"}),"\n",(0,o.jsx)(n.p,{children:"Click the copy button next to your connection string to copy it to your clipboard. Paste the connection string somewhere safe."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Don't forget to replace ",(0,o.jsx)(n.code,{children:"<password>"})," with the password you set when you created the cluster."]})})]})}function g(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},3974:(t,n,e)=>{e.d(n,{A:()=>c});e(6540);var o=e(8774),s=e(4586),r=e(4848);function c(t){const n=(0,s.A)(),e=n?.siteConfig?.customFields?.utmParams||"",c=`${t.to}?${e}`;return(0,r.jsx)(o.A,{...t,to:c})}},2763:(t,n,e)=>{e.d(n,{A:()=>c});e(6540);var o=e(4848);function s(t){const n=t.url||"http://localhost:3000";return(0,o.jsxs)("div",{className:"browser container",children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"column left",children:[(0,o.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,o.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,o.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,o.jsx)("div",{className:"column middle",children:(0,o.jsx)("input",{type:"text",value:n})}),(0,o.jsx)("div",{className:"column right",children:(0,o.jsxs)("div",{style:{float:"right"},children:[(0,o.jsx)("span",{className:"bar"}),(0,o.jsx)("span",{className:"bar"}),(0,o.jsx)("span",{className:"bar"})]})})]}),(0,o.jsx)("div",{className:"content",children:t.children})]})}var r=e(6025);function c(t){return(0,o.jsx)(s,{...t,children:(0,o.jsx)("img",{src:(0,r.Ay)(t.src),alt:t.alt})})}},8453:(t,n,e)=>{e.d(n,{R:()=>c,x:()=>a});var o=e(6540);const s={},r=o.createContext(s);function c(t){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),o.createElement(r.Provider,{value:n},t.children)}}}]);