"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2887],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),s=a(6010),i=a(2389),o=a(7392),l=a(7094),p=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a;const{lazy:i,block:d,defaultValue:m,values:h,groupId:v,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),w=(0,o.l)(k,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(t=null!=m?m:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:y}=(0,l.U)(),[T,x]=(0,r.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=v){const e=N[v];null!=e&&e!==T&&k.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,a=E.indexOf(t),n=k[a].value;n!==T&&(j(t),x(n),null!=v&&y(v,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;a=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},g)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:I,onFocus:P,onClick:P},i,{className:(0,s.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},4003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),s=a(5488),i=a(5162);const o={sidebar_label:"Interact with a dApp",sidebar_position:3},l="Interact with a dApp",p={unversionedId:"guides/universal-profile/browser-extension/interact-with-dapp",id:"guides/universal-profile/browser-extension/interact-with-dapp",title:"Interact with a dApp",description:"The UP Browser Extenstion is currently in the development alpha version. DO NOT use this in production!",source:"@site/docs/guides/universal-profile/browser-extension/interact-with-dapp.md",sourceDirName:"guides/universal-profile/browser-extension",slug:"/guides/universal-profile/browser-extension/interact-with-dapp",permalink:"/guides/universal-profile/browser-extension/interact-with-dapp",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/universal-profile/browser-extension/interact-with-dapp.md",tags:[],version:"current",lastUpdatedAt:1656508057,formattedLastUpdatedAt:"6/29/2022",sidebarPosition:3,frontMatter:{sidebar_label:"Interact with a dApp",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Create a Universal Profile",permalink:"/guides/universal-profile/browser-extension/create-a-universal-profile"},next:{title:"Give permissions to addresses",permalink:"/guides/key-manager/give-permissions"}},c={},u=[{value:"Setup",id:"setup",level:2},{value:"1. Initialize a blockchain provider.",id:"1-initialize-a-blockchain-provider",level:3},{value:"2. Get access to the UP address in use.",id:"2-get-access-to-the-up-address-in-use",level:3},{value:"Operations",id:"operations",level:2},{value:"Send a transaction",id:"send-a-transaction",level:3},{value:"Sign a message",id:"sign-a-message",level:3},{value:"Interact with your universal profile",id:"interact-with-your-universal-profile",level:2},{value:"Events",id:"events",level:2},{value:"Sample dApp",id:"sample-dapp",level:2}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interact-with-a-dapp"},"Interact with a dApp"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The UP Browser Extenstion is currently in the ",(0,r.kt)("strong",{parentName:"p"},"development alpha")," version. DO NOT use this in production!"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"MetaMask (or any other ethereum provider) cannot be running simultaneously. It is recommended to deactivate the MetaMask extension for the UP Extension to work."))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The extension injects an ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," object into a web page as ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," to interact with the extension."),(0,r.kt)("h3",{id:"1-initialize-a-blockchain-provider"},"1. Initialize a blockchain provider."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Web3 from 'web3';\nconst web3 = new Web3(window.ethereum);\n"))),(0,r.kt)(i.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ethers } from 'ethers';\nconst etherProvider = new ethers.providers.Web3Provider(window.ethereum);\n")))),(0,r.kt)("h3",{id:"2-get-access-to-the-up-address-in-use"},"2. Get access to the UP address in use."),(0,r.kt)("p",null,"A call to ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAccounts")," will open an extension popup to authorize an account."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const accountsRequest: string[] = await web3.eth.requestAccounts();\nconst accounts: string[] = await web3.eth.getAccounts(); //should also yield the same address\n"))),(0,r.kt)(i.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const accountsRequest: string[] = await etherProvider.send(\n  'eth_requestAccounts',\n  [],\n);\nconst signer = etherProvider.getSigner();\nawait signer.getAddress(); //should also yield the same address\n"))),(0,r.kt)(i.Z,{value:"raw",label:"raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const accountsRequest: string[] = await window.ethereum.request({\n  method: 'eth_requestAccounts',\n  params: [],\n});\nconst accounts: string[] = await window.ethereum.request({\n  method: 'eth_accounts',\n  params: [],\n}); //should also yield the same address\n")))),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("p",null,"Each operation will open an extension popup window for a user to confirm the transaction or sign the message."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you don't have funds on your EOA, the application will use the relayer service by default to pay the gas fees (thus ignoring gas properties)."))),(0,r.kt)("h3",{id:"send-a-transaction"},"Send a transaction"),(0,r.kt)("p",null,"You can send any transaction (a value transfer or a smart contract interaction with or without a value)."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await web3.eth.sendTransaction({\n  from: UP_ADDRESS,\n  to: RECIPIENT_ADDRESS,\n  value: 100,\n  data: '0x',\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,r.kt)(i.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await signer.sendTransaction({\n  from: UP_ADDRESS,\n  to: RECIPIENT_ADDRESS,\n  value: 100,\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,r.kt)(i.Z,{value:"raw",label:"raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await window.ethereum.request({\n  method: 'eth_sendTransaction',\n  params: [\n    {\n      from: UP_ADDRESS,\n      to: RECIPIENT_ADDRESS,\n      value: '0xB1A2BC2EC50000',\n      gas: '0x76c0',\n      gasPrice: '0x9184e72a000',\n    },\n  ],\n});\n")))),(0,r.kt)("p",null,"You can also add a ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId")," parameter, i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"chaidId: '0x16'"),", to ensure the transaction will run on the specified network."),(0,r.kt)("h3",{id:"sign-a-message"},"Sign a message"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await web3.eth.sign('message', UP_ADDRESS);\n"))),(0,r.kt)(i.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await signer.signMessage('message');\n"))),(0,r.kt)(i.Z,{value:"raw",label:"raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await window.ethereum.request({\n  method: 'eth_sign',\n  params: [UP_ADDRESS, '0xdeadbeaf'],\n});\n")))),(0,r.kt)("h2",{id:"interact-with-your-universal-profile"},"Interact with your universal profile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"  npm install @lukso/lsp-smart-contracts\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import UniversalProfile from \"@lukso/universalprofile-smart-contracts/artifacts/UniversalProfile.json\";\n\nconst contract = new web3.eth.Contract(\n  UniversalProfile.abi as unknown, UP_ADDRESS, {\n    gas: 5_000_000,\n    gasPrice: '1000000000',\n  })\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"setData")," functionality:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'await contract.methods\n  ["setData(bytes32,bytes)"](key, value)\n  .send({\n      from: UP_ADDRESS,\n  })\n  .on("receipt", (receipt: TransactionReceipt) => {\n      ...\n  })\n  .once("sending", (payload: unknown) => {\n      ...\n  })\n);\n')),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": Listening for accounts changed event:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"window.ethereum.on('accountsChanged', (addresses: string[]) => {\n  const newAddress = addresses[0];\n  ...\n}\n")))),(0,r.kt)("h2",{id:"sample-dapp"},"Sample dApp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("a",{parentName:"li",href:"https://up-sample-web-app.staging.lukso.dev/"},"Sample dApp")," for more examples in the browser."),(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/universalprofile-sample-web-app"},"Repository")," for code snippets.")))}m.isMDXComponent=!0}}]);