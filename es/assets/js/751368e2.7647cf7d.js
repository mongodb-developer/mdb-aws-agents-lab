"use strict";(self.webpackChunkai_agents_lab_reinvent=self.webpackChunkai_agents_lab_reinvent||[]).push([[684],{3394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>r});var o=n(4848),s=n(8453);const a={},l="\ud83d\udcd8 Concepts",c={id:"agent-tools/concepts",title:"\ud83d\udcd8 Concepts",description:"Here is a quick overview of concepts that you will come across in this section of the lab:",source:"@site/docs/50-agent-tools/1-concepts.mdx",sourceDirName:"50-agent-tools",slug:"/agent-tools/concepts",permalink:"/mdb-aws-agents-lab/es/docs/agent-tools/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-aws-agents-lab/blob/main/docs/50-agent-tools/1-concepts.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Agent Tools",permalink:"/mdb-aws-agents-lab/es/docs/category/create-agent-tools"},next:{title:"\ud83d\udcd8 Running code in Jupyter Notebooks",permalink:"/mdb-aws-agents-lab/es/docs/agent-tools/jupyter_notebooks"}},i={},r=[{value:"Tool calling",id:"tool-calling",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"-concepts",children:"\ud83d\udcd8 Concepts"})}),"\n",(0,o.jsx)(t.p,{children:"Here is a quick overview of concepts that you will come across in this section of the lab:"}),"\n",(0,o.jsx)(t.h2,{id:"tool-calling",children:"Tool calling"}),"\n",(0,o.jsx)(t.p,{children:"Tool calling, interchangeably called function calling allows an LLM to use external tools such as APIs, databases, specialized machine learning models etc."}),"\n",(0,o.jsx)(t.p,{children:"In AI agents, an LLM can have access to multiple tools. Given a user query, the LLM decides which tool to invoke and the arguments for the tool call. These arguments are used to execute the tool call and the output is returned back to the LLM to inform its next steps."}),"\n",(0,o.jsxs)(t.p,{children:["The easiest way to define tools in LangChain is using the ",(0,o.jsx)(t.code,{children:"@tool"})," decorator. The decorator makes tools out of functions by using the function name as the tool name by default, and the function's docstring as the tool's description. The tool call inturn consists of a tool name, arguments, and an optional identifier."]}),"\n",(0,o.jsx)(t.p,{children:"An example of a tool in LangChain is as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'@tool("search-tool", return_direct=True)\ndef search(query: str) -> str:\n    """Look up things online."""\n    return "MongoDB"\n'})}),"\n",(0,o.jsx)(t.p,{children:"An example of a tool call is as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'{\n  "name": "search-tool",\n  "args": {\n    "query": "What is MongoDB?"\n  },\n  "id": "call_H5TttXb423JfoulF1qVfPN3m"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var o=n(6540);const s={},a=o.createContext(s);function l(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);