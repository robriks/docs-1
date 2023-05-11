"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},s="Getting Started",o={unversionedId:"tools/eip191-signerjs/getting-started",id:"tools/eip191-signerjs/getting-started",title:"Getting Started",description:"- GitHub Repository",source:"@site/docs/tools/eip191-signerjs/getting-started.md",sourceDirName:"tools/eip191-signerjs",slug:"/tools/eip191-signerjs/getting-started",permalink:"/tools/eip191-signerjs/getting-started",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/eip191-signerjs/getting-started.md",tags:[],version:"current",lastUpdatedAt:1666687210,formattedLastUpdatedAt:"Oct 25, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolsSidebar",previous:{title:"LSP8IdentifiableDigitalAsset",permalink:"/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset"},next:{title:"EIP191Signer",permalink:"/tools/eip191-signerjs/Classes/EIP191Signer"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/tools-eip191-signer"},"GitHub Repository")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@lukso/eip191-signer.js"},"NPM Package"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@lukso/eip191-signer.js")," package is used to sign any EIP191 data."),(0,a.kt)("p",null,"The following format is used to sign data :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"0x19 <1 byte version> <version specific data> <data to sign>\n")),(0,a.kt)("p",null,"In the case of an Ethereum Signed Message:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 byte version = ",(0,a.kt)("inlineCode",{parentName:"li"},"0x45")),(0,a.kt)("li",{parentName:"ul"},"version specific data = ",(0,a.kt)("inlineCode",{parentName:"li"},"thereum Signed Message:\\n + len(message)"))),(0,a.kt)("p",null,"In the case of data with intended validator:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"1 byte version = ",(0,a.kt)("inlineCode",{parentName:"p"},"0x00"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"version specific data = validatorAddress"),(0,a.kt)("p",{parentName:"li"},"This prefix is used so that a transaction cannot be inadvertently signed when signing an Ethereum signed message."))),(0,a.kt)("h1",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lukso/eip191-signer.js\n")),(0,a.kt)("h1",{id:"setup"},"Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { EIP191Signer } from '@lukso/eip191-signer.js';\n\nconst eip191Signer = new EIP191Signer();\n")))}u.isMDXComponent=!0}}]);