"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[846],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>c});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=o(t),c=r,u=g["".concat(p,".").concat(c)]||g[c]||m[c]||l;return t?n.createElement(u,s(s({ref:a},d),{},{components:t})):n.createElement(u,s({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=g;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9708:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=t(7462),r=(t(7294),t(3905));const l={sidebar_position:1},s="LSP6Signer",i={unversionedId:"tools/lsp6-signerjs/Classes/LSP6Signer",id:"tools/lsp6-signerjs/Classes/LSP6Signer",title:"LSP6Signer",description:"hashMessage",source:"@site/docs/tools/lsp6-signerjs/Classes/LSP6Signer.md",sourceDirName:"tools/lsp6-signerjs/Classes",slug:"/tools/lsp6-signerjs/Classes/LSP6Signer",permalink:"/tools/lsp6-signerjs/Classes/LSP6Signer",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp6-signerjs/Classes/LSP6Signer.md",tags:[],version:"current",lastUpdatedAt:1664584413,formattedLastUpdatedAt:"Oct 1, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolsSidebar",previous:{title:"Getting Started",permalink:"/tools/lsp6-signerjs/getting-started"},next:{title:"Execute Transaction",permalink:"/tools/relayer-api/execute-transaction"}},p={},o=[{value:"hashMessage",id:"hashmessage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"sign",id:"sign",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"recover",id:"recover",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3}],d={toc:o};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp6signer"},"LSP6Signer"),(0,r.kt)("h2",{id:"hashmessage"},"hashMessage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"lsp6Signer.hashMessage(message);\n")),(0,r.kt)("p",null,"Hashes the given message. The message will be enveloped as follows: ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\x19LSP6 ExecuteRelayCall:\\n' + message.length + message")," and hashed using keccak256."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"message")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),": A message to hash."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String"),": The hashed message constructed as ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\x19LSP6 ExecuteRelayCall:\\n'+ message.length + message"),"."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"lsp6Signer.hashMessage('Hello World');\n// '0x267dbe91dc4e45f9ab588be314b8f954513a4bcd55015a9380bea074b76dc91f';\n")),(0,r.kt)("h2",{id:"sign"},"sign"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"lsp6Signer.sign(message, signingKey);\n")),(0,r.kt)("p",null,"Signs a message. The message passed as parameter will be wrapped as follows: ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\x19LSP6 ExecuteRelayCall:\\n' + message.length + message"),"."),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"message")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),": The message to sign.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"signingKey")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),": The private key to sign with."))),(0,r.kt)("h3",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object"),": ",(0,r.kt)("strong",{parentName:"p"},"The Message object")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": The given message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"messageHash")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": The hash of the given message constructed as ",(0,r.kt)("inlineCode",{parentName:"li"},"'\\x19LSP6 ExecuteRelayCall:\\n' + message.length + message"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": First 32 bytes of the signature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": Next 32 bytes of the signature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"v")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": Recovery value + 27."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signature")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": The raw RLP encoded signature.")),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"lsp6Signer.sign(\n  'hello',\n  'ffeb17b9a6059fec3bbab63d76b060b7380cac7a62ce6621a134531a46458968',\n);\n/**\n  {\n    message: 'hello',\n    messageHash:\n      '0xd8fd712232755d5f8819c95fdd911dcd51c012b8a66f9710ef0c86ad30925fa6',\n    v: '0x1c',\n    r: '0x1eab2de0103b8e82650f9706b17cf2adce55a335e7041bad5a94ab49c56a9c12',\n    s: '0x662e80a369ffa2a6a77fbeaad1f32653cbd74860c8fbc999b1fc47b8d1cb7d93',\n    signature:\n      '0x1eab2de0103b8e82650f9706b17cf2adce55a335e7041bad5a94ab49c56a9c12662e80a369ffa2a6a77fbeaad1f32653cbd74860c8fbc999b1fc47b8d1cb7d931c',\n  };\n*/\n")),(0,r.kt)("h2",{id:"recover"},"recover"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"lsp6Signer.recover(message, signature, isMessagePrefixed);\n")),(0,r.kt)("p",null,"Recovers the address which was used to sign the given message."),(0,r.kt)("h3",{id:"parameters-2"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"message")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"String|Object"),": ",(0,r.kt)("strong",{parentName:"p"},"Either signed message or Message object with the following values"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": The given message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"messageHash")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": The hash of the given message constructed as ",(0,r.kt)("inlineCode",{parentName:"li"},"'\\x19LSP6 ExecuteRelayCall:\\n' + message.length + message"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": First 32 bytes of the signature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": Next 32 bytes of the signature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"v")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": Recovery value + 27."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signature")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),": The raw RLP encoded signature."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"signature")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),": The raw RLP encoded signature.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"isMessagePrefixed")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," (optional, default: false): If true, the given message will NOT automatically be prefixed and hashed as ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\x19LSP6 ExecuteRelayCall:\\n' + message.length + message"),", and assumed to be already prefixed and hashed."))),(0,r.kt)("h3",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String"),": The address used to sign the given message."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"lsp6Signer.recover(\n  'hello',\n  '0x1eab2de0103b8e82650f9706b17cf2adce55a335e7041bad5a94ab49c56a9c12662e80a369ffa2a6a77fbeaad1f32653cbd74860c8fbc999b1fc47b8d1cb7d931c',\n  false,\n);\n// 0xe66Df2466ed6d92AC8c261b98ddAFbec65C6dCC8;\n")))}m.isMDXComponent=!0}}]);