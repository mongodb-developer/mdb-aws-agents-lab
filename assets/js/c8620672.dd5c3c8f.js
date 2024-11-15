"use strict";(self.webpackChunkai_agents_lab_reinvent=self.webpackChunkai_agents_lab_reinvent||[]).push([[723],{7217:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=s(4848),n=s(8453),r=(s(3974),s(2763));const o={},c="\ud83d\udc50 Deploy a database cluster",l={id:"mongodb-atlas/create-cluster",title:"\ud83d\udc50 Deploy a database cluster",description:"Now that you have a MongoDB Atlas account, you can create your first cluster for free.",source:"@site/docs/20-mongodb-atlas/2-create-cluster.mdx",sourceDirName:"20-mongodb-atlas",slug:"/mongodb-atlas/create-cluster",permalink:"/mdb-aws-agents-lab/docs/mongodb-atlas/create-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-aws-agents-lab/blob/main/docs/20-mongodb-atlas/2-create-cluster.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Create your account",permalink:"/mdb-aws-agents-lab/docs/mongodb-atlas/create-account"},next:{title:"AWS",permalink:"/mdb-aws-agents-lab/docs/category/aws"}},i={},d=[{value:"Security quickstart",id:"security-quickstart",level:2},{value:"Network access",id:"network-access",level:3},{value:"Database user",id:"database-user",level:3},{value:"Manual network access configuration",id:"manual-network-access-configuration",level:2},{value:"That&#39;s all!",id:"thats-all",level:2}];function u(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-deploy-a-database-cluster",children:"\ud83d\udc50 Deploy a database cluster"})}),"\n",(0,a.jsx)(t.p,{children:"Now that you have a MongoDB Atlas account, you can create your first cluster for free."}),"\n",(0,a.jsxs)(t.p,{children:["Once logged in, from the Overview page, click on the green button that says ",(0,a.jsx)(t.strong,{children:"+ Create"}),"."]}),"\n",(0,a.jsx)(r.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/2-create-cluster/1-overview.png",alt:"Overview screenshot"}),"\n",(0,a.jsx)(t.p,{children:"On the cluster creation page, choose the cloud provider and region where your data will be stored. You can also choose the type of cluster you want to create. For this lab, we will use the free tier."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["For the cluster tier, pick ",(0,a.jsx)(t.strong,{children:"M0"}),", which is the free tier. In the ",(0,a.jsx)(t.strong,{children:"Name"})," input box, assign a name (one word, no spaces) to your cluster."]}),"\n",(0,a.jsxs)(t.li,{children:["Uncheck the ",(0,a.jsx)(t.em,{children:"Automate security setup"})," box. You will set up security manually in the next steps."]}),"\n",(0,a.jsxs)(t.li,{children:["Uncheck the ",(0,a.jsx)(t.em,{children:"Preload sample dataset"})," box. You will import a dataset later in this lab."]}),"\n",(0,a.jsx)(t.li,{children:"Select your favorite cloud provider and the region closest to you."}),"\n",(0,a.jsxs)(t.li,{children:["Finally, click on the green button that says ",(0,a.jsx)(t.strong,{children:"Create Deployment"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/2-create-cluster/2-deploy-database.png",alt:"Create cluster screenshot"}),"\n",(0,a.jsx)(t.p,{children:"Once you're done with the hardest part of the process (the captcha), you will be redirected to the security quickstart."}),"\n",(0,a.jsx)(t.h2,{id:"security-quickstart",children:"Security quickstart"}),"\n",(0,a.jsx)(t.p,{children:"By default, your MongoDB Atlas deployment is completely locked-down. You need to configure the network settings and create a user to access your database."}),"\n",(0,a.jsx)(t.p,{children:"While your deployment is being provisioned, you will see the security quickstart dialog."}),"\n",(0,a.jsx)(t.h3,{id:"network-access",children:"Network access"}),"\n",(0,a.jsxs)(t.p,{children:["First, you should ",(0,a.jsx)(t.strong,{children:"Allow Access from Anywhere"}),". You will see a field pre-populated with the IP address ",(0,a.jsx)(t.code,{children:"0.0.0.0/0"}),". This means that you can connect to your database from any IP address including the virtual environment you will use for this lab. Click ",(0,a.jsx)(t.strong,{children:"Add IP Address"})," to add this IP address to the network allowlist."]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"It is dangerous to expose your database to the entire world. Never do this is a real production environment."})}),"\n",(0,a.jsx)(t.h3,{id:"database-user",children:"Database user"}),"\n",(0,a.jsxs)(t.p,{children:["Next, you need to create a database user. Pick any username and password you want. This will be used when you want to connect to your database. Click ",(0,a.jsx)(t.strong,{children:"Create Database User"})," to create the user."]}),"\n",(0,a.jsx)(t.p,{children:"Atlas might create the user automatically for you if you have just created your account. In this case, the username and password will match your Atlas account credentials."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Make sure to remember your username and password. You will need them later. For the sake of this workshop, it might be preferable to use a simple password that you'll remember over a more secure one."})}),"\n",(0,a.jsx)(t.h2,{id:"manual-network-access-configuration",children:"Manual network access configuration"}),"\n",(0,a.jsxs)(t.p,{children:["If you don't see a button to ",(0,a.jsx)(t.strong,{children:"Allow Access from Anywhere"}),", you should close the dialog and go to the ",(0,a.jsx)(t.strong,{children:"Network Access"})," tab under the ",(0,a.jsx)(t.strong,{children:"Security"})," section in the left sidebar. Click on the ",(0,a.jsx)(t.strong,{children:"Add IP Address"})," button, add the IP address ",(0,a.jsx)(t.code,{children:"0.0.0.0/0"})," and click ",(0,a.jsx)(t.strong,{children:"Confirm"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"thats-all",children:"That's all!"}),"\n",(0,a.jsxs)(t.p,{children:["That's all! You have a new database cluster. If everything goes well, you should see your newly created cluster on the ",(0,a.jsx)(t.strong,{children:"Database"})," tab under the ",(0,a.jsx)(t.strong,{children:"Deployment"})," section."]}),"\n",(0,a.jsx)(r.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/2-create-cluster/3-database-deployment.png",alt:"Screenshot of the database deployment screen"})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},3974:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(8774),n=s(4586),r=s(4848);function o(e){const t=(0,n.A)(),s=t?.siteConfig?.customFields?.utmParams||"",o=`${e.to}?${s}`;return(0,r.jsx)(a.A,{...e,to:o})}},2763:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(4848);function n(e){const t=e.url||"http://localhost:3000";return(0,a.jsxs)("div",{className:"browser container",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"column left",children:[(0,a.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,a.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,a.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,a.jsx)("div",{className:"column middle",children:(0,a.jsx)("input",{type:"text",value:t})}),(0,a.jsx)("div",{className:"column right",children:(0,a.jsxs)("div",{style:{float:"right"},children:[(0,a.jsx)("span",{className:"bar"}),(0,a.jsx)("span",{className:"bar"}),(0,a.jsx)("span",{className:"bar"})]})})]}),(0,a.jsx)("div",{className:"content",children:e.children})]})}var r=s(6025);function o(e){return(0,a.jsx)(n,{...e,children:(0,a.jsx)("img",{src:(0,r.Ay)(e.src),alt:e.alt})})}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var a=s(6540);const n={},r=a.createContext(n);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);