"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(a),h=r,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||i;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"LSP0 - ERC725 Account",sidebar_position:2},s="LSP0 - ERC725 Account",o={unversionedId:"standards/universal-profile/lsp0-erc725account",id:"standards/universal-profile/lsp0-erc725account",title:"LSP0 - ERC725 Account",description:"LSP0 - ERC725Account",source:"@site/docs/standards/universal-profile/lsp0-erc725account.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp0-erc725account",permalink:"/standards/universal-profile/lsp0-erc725account",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/lsp0-erc725account.md",tags:[],version:"current",lastUpdatedAt:1656508057,formattedLastUpdatedAt:"6/29/2022",sidebarPosition:2,frontMatter:{sidebar_label:"LSP0 - ERC725 Account",sidebar_position:2},sidebar:"standardsSidebar",previous:{title:"Introduction",permalink:"/standards/universal-profile/introduction"},next:{title:"LSP1 - Universal Receiver Delegate",permalink:"/standards/universal-profile/lsp1-universal-receiver-delegate"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",level:2},{value:"ERC725X - Generic Executor",id:"erc725x---generic-executor",level:3},{value:"ERC725Y - Generic Key-Value Store",id:"erc725y---generic-key-value-store",level:3},{value:"LSP1 - UniversalReceiver",id:"lsp1---universalreceiver",level:3},{value:"ERC1271",id:"erc1271",level:3},{value:"ClaimOwnership",id:"claimownership",level:3},{value:"Extension",id:"extension",level:2},{value:"Ownership",id:"ownership",level:3},{value:"Interactivity",id:"interactivity",level:3}],d={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp0---erc725-account"},"LSP0 - ERC725 Account"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Standard Document")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md"},"LSP0 - ERC725Account")))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Once deployed on a network, smart contracts cannot be changed. Their storage and logic ",(0,r.kt)("strong",{parentName:"p"},"are set in stone"),". If a smart contract is deployed with specific state variables and functions, these data and functionalities are there forever and cannot be altered."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md"},"ERC725 Standard"))," proposed in 2017 describes a generic key-value store and generic execution function that could be used as the basis for an account. A blockchain-based account can then be created by combining ERC725 with the interactivity and signature verification mechanism from the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver Standard"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-1271"},"ERC1271 Standard")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP0 ERC725 Account overview",src:a(8473).Z,width:"1813",height:"551"})),(0,r.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"ERC725Account")," defines a blockchain account system that could be used by humans, machines, or other smart contracts. It is composed of multiple standards, as shown in the figure below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md#erc725x"},"ERC725X"))," is a generic executor that enables calling external contracts, deploying new contracts, or transferring value to any ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," (EOA or smart contracts)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md#erc725y"},"ERC725Y"))," is a generic key-value store that enables it to attach any information to the smart contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver"))," enables notifications about incoming or outgoing transactions and adds custom handling and behavior based on these transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-1271"},"ERC1271"))," helps to verify that a signed message has a valid signature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165"))," allows to register and detect the standard interfaces the contract implements.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ERC725Account contract architecture",src:a(8518).Z,width:"1248",height:"800"})),(0,r.kt)("p",null,"This standard also uses the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-173"},"ERC173"))," standard to provide ownership functions for owning and controlling the implementation contract."),(0,r.kt)("h3",{id:"erc725x---generic-executor"},"ERC725X - Generic Executor"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See the section ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.soliditylang.org/en/v0.8.11/units-and-global-variables.html?highlight=staticcall#members-of-address-types"},'"Members of address types"'))," in the Solidity documentation for more information about the different types of calls available."))),(0,r.kt)("p",null,"This substandard enables the account to execute generic calls on any other smart contracts, including transferring native tokens along with the call. External actions are possible via a smart contract's generic ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp0-erc725-account#execute"},(0,r.kt)("inlineCode",{parentName:"a"},"execute(...)"))," function in the smart contract. ",(0,r.kt)("strong",{parentName:"p"},"Only the owner can perform")," the operations below."),(0,r.kt)("p",null,"The ERC725X standard also enables deploying new smart contracts by providing the bytecode of the new contract to deploy as an argument to the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute(...)")," function. Contracts can be deployed using either CREATE or ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1014"},"CREATE2"),"."),(0,r.kt)("p",null,"The following types of calls (= operation types) are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Operation number"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Operation type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.evm.codes/#f1"},(0,r.kt)("inlineCode",{parentName:"a"},"CALL"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"call another smart contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.evm.codes/#f0"},(0,r.kt)("inlineCode",{parentName:"a"},"CREATE"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"create a new smart contract with the associated bytecode passed as ",(0,r.kt)("inlineCode",{parentName:"td"},"_data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1014"},(0,r.kt)("inlineCode",{parentName:"a"},"CREATE2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"create a new smart contract with a ",(0,r.kt)("strong",{parentName:"td"},"salt "),"(for pre-computed contract addresses)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-214"},(0,r.kt)("inlineCode",{parentName:"a"},"STATICCALL"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"call another smart contract while disallowing any modification to the state during the call")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-7"},(0,r.kt)("inlineCode",{parentName:"a"},"DELEGATECALL"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"run the function from another contract, but use and update the storage of the current contract (= persist ",(0,r.kt)("inlineCode",{parentName:"td"},"msg.sender")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"msg.value"),")")))),(0,r.kt)("h1",{id:"erc725x-operation-type-call"},(0,r.kt)("img",{alt:"ERC725X operation type CALL",src:a(478).Z,width:"1911",height:"523"})),(0,r.kt)("h1",{id:"erc725x-operation-type-create"},(0,r.kt)("img",{alt:"ERC725X operation type CREATE",src:a(2784).Z,width:"1749",height:"571"})),(0,r.kt)("h1",{id:"erc725x-operation-type-create2"},(0,r.kt)("img",{alt:"ERC725X operation type CREATE2",src:a(7402).Z,width:"1900",height:"526"})),(0,r.kt)("h1",{id:"erc725x-operation-type-delegatecall"},(0,r.kt)("img",{alt:"ERC725X operation type DELEGATECALL",src:a(4358).Z,width:"1980",height:"505"})),(0,r.kt)("h1",{id:"erc725x-operation-type-staticcall"},(0,r.kt)("img",{alt:"ERC725X operation type STATICCALL",src:a(113).Z,width:"2009",height:"497"})),(0,r.kt)("h3",{id:"erc725y---generic-key-value-store"},"ERC725Y - Generic Key-Value Store"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See the section ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.soliditylang.org/en/v0.8.11/internals/layout_in_storage.html"},'"Layout of State Variables in Storage"'))," in the Solidity documentation for more information about the structure of smart contract storage."))),(0,r.kt)("p",null,"This substandard enables the account to hold arbitrary data through a generic data key-value store. It gives flexibility to the contract storage. Developers can access the data stored in the contract via data keys instead of referencing the storage slot where the data resides."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keys")," are represented as ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes32")," values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Values")," under these keys are stored as ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes"),".")),(0,r.kt)("p",null,"As a result, this substandard enables attaching any information to the contract and updating or removing it quickly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ERC725Y key-value store vs standard contract storage",src:a(5790).Z,width:"1542",height:"648"})),(0,r.kt)("p",null,"Thanks to ERC725Y, contracts become more interoperable, as their storage is represented in the same way. Contracts and interfaces can then read and write data from or to the storage in the same manner via the functions ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp0-erc725-account#getdata"},(0,r.kt)("inlineCode",{parentName:"a"},"getData(...)"))," and ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp0-erc725-account#setdata"},(0,r.kt)("inlineCode",{parentName:"a"},"setData(...)")),"."),(0,r.kt)("h3",{id:"lsp1---universalreceiver"},"LSP1 - UniversalReceiver"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver"))," standard for more information."))),(0,r.kt)("p",null,"This standard enables the account to be notified of incoming transactions such as token transfer, vault transfer, information transfer, etc. Notifications are handy for situations where users want to customize how their account contract reacts to certain tokens by either rejecting them or operating a specific call on each token received."),(0,r.kt)("h3",{id:"erc1271"},"ERC1271"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-1271"},"ERC1271"))," standard for more information."))),(0,r.kt)("p",null,"Unlike Externally Owned Accounts (EOAs), smart contracts cannot sign messages since they do not have private keys. This standard defines a way for contracts to verify if a signature provided by an EOA is valid. There will be many contracts that want to utilize signed messages to validate rights-to-move assets or other purposes."),(0,r.kt)("h3",{id:"claimownership"},"ClaimOwnership"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ClaimOwnership")," is a modified version of ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-173"},"EIP173 - Contract Ownership Standard")," that uses a safer mechanism for transferring ownership."),(0,r.kt)("p",null,"In EIP713, ownership of a contract is transferred directly to a new owner, potentially leading to blocking access to the contract. For instance, if the owner calls ",(0,r.kt)("inlineCode",{parentName:"p"},"transferOwnership()")," and the new owner:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is an EOA that lost its private key."),(0,r.kt)("li",{parentName:"ul"},"is an ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," entered incorrectly.")),(0,r.kt)("p",null,"With ",(0,r.kt)("strong",{parentName:"p"},"ClaimOwnership"),", control of the contract is fully transferred ",(0,r.kt)("em",{parentName:"p"},"once the new owner has claimed the new ownership"),". The transfer of ownership works in 2 steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The previous owner transfers ownership to a new owner via the ",(0,r.kt)("a",{parentName:"li",href:"/standards/smart-contracts/lsp0-erc725-account#transferownership"},(0,r.kt)("inlineCode",{parentName:"a"},"transferOwnership()"))," function.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Claim Ownership step 1",src:a(5759).Z,width:"1938",height:"515"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The new owner claims ownership of the contract by calling the ",(0,r.kt)("a",{parentName:"li",href:"/standards/smart-contracts/lsp0-erc725-account#claimownership"},"`claimOwnership()"),"` function.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Claim Ownership step 2",src:a(6145).Z,width:"1901",height:"526"})),(0,r.kt)("p",null,"By making the new owner accept ownership explicitly, ClaimOwnership ensures that the new owner has access to his address."),(0,r.kt)("h2",{id:"extension"},"Extension"),(0,r.kt)("h3",{id:"ownership"},"Ownership"),(0,r.kt)("p",null,"Developers can extend the account ownership by setting a smart contract as an owner with different permissions granted to users in the smart contract. Expandable role-management allows multiple interactions through your account based on the permissions set for the calling address."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6-KeyManager"))," is a standard that defines a smart contract that acts as a controller for this account."),(0,r.kt)("h3",{id:"interactivity"},"Interactivity"),(0,r.kt)("p",null,"Events can notify the account of incoming assets or information via the ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp0-erc725-account#universalreceiver"},(0,r.kt)("inlineCode",{parentName:"a"},"universalReceiver(...)"))," function. Developers could add an extension to increase the autonomy of the contract by handling and reacting to transactions that the account receives."),(0,r.kt)("p",null,"Builders can introduce additional functionality by linking an external contract to your account that would handle these functionalities: an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp1-universal-receiver-delegate"},"LSP1-UniversalReceiverDelegate")),"."))}p.isMDXComponent=!0},5759:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-ownership-1-e5c303acb562c0d3335137d480fa5bf4.jpeg"},6145:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-ownership-2-de782b525d8608c72faf8330e184520b.jpeg"},478:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc725x-operation-type-call-ea1a55cdf69efd7aee5deceacfd21f80.jpeg"},2784:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc725x-operation-type-create-4cca3c7c7744a5081de24b9c5d1ab8a9.jpeg"},7402:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc725x-operation-type-create2-ca8d56ac786c94d10d0a1b7eae23ff63.jpeg"},4358:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc725x-operation-type-delegatecall-252ddaa67122757c5210a73e9c20ae0d.jpeg"},113:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc725x-operation-type-staticcall-13f29a4fd2c7ecd2934fe533e6b975bb.jpeg"},5790:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc725y-vs-standard-contract-storage-ea1e9d72e8e9500a62717674e70f9cbc.jpeg"},8518:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp0-erc725account-architecture-8d476003bc0c6a22d0091084f16ef35f.jpeg"},8473:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp0-erc725account-overview-5b1f5f0f062eb7b1469e8d1d1de0b53a.jpeg"}}]);