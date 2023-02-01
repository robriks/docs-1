"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9899],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=d(a),m=r,u=h["".concat(c,".").concat(m)]||h[m]||p[m]||o;return a?n.createElement(u,i(i({ref:t},l),{},{components:a})):n.createElement(u,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"ERC725",sidebar_position:1},i="ERC725",s={unversionedId:"standards/lsp-background/erc725",id:"standards/lsp-background/erc725",title:"ERC725",description:"ERC725 - General Executor and Data Key/Value Store",source:"@site/docs/standards/lsp-background/erc725.md",sourceDirName:"standards/lsp-background",slug:"/standards/lsp-background/erc725",permalink:"/standards/lsp-background/erc725",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/lsp-background/erc725.md",tags:[],version:"current",lastUpdatedAt:1675243474,formattedLastUpdatedAt:"Feb 1, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"ERC725",sidebar_position:1},sidebar:"standardsSidebar",previous:{title:"Standard Detection",permalink:"/standards/standard-detection"},next:{title:"LSP1 - Universal Receiver",permalink:"/standards/generic-standards/lsp1-universal-receiver"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"ERC725X",id:"erc725x",level:2},{value:"Specification",id:"specification",level:3},{value:"ERC725Y Generic Data Key/Value Store",id:"erc725y-generic-data-keyvalue-store",level:2},{value:"Specification",id:"specification-1",level:3},{value:"Normal contract vs ERC725Y",id:"normal-contract-vs-erc725y",level:4},{value:"ERC725Y Data Representation",id:"erc725y-data-representation",level:4},{value:"Ownership",id:"ownership",level:2}],l={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"erc725"},"ERC725"),(0,r.kt)("admonition",{title:"Standard Document",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/ERC725Alliance/ERC725/blob/develop/docs/ERC-725.md"},"ERC725 - General Executor and Data Key/Value Store"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"EOAs (Externally Owned Accounts) are controlled by private keys and can perform specific operations such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.evm.codes/#f1"},(0,r.kt)("strong",{parentName:"a"},"CALL"))," to interact with other addresses and ",(0,r.kt)("a",{parentName:"p",href:"https://www.evm.codes/#f0"},(0,r.kt)("strong",{parentName:"a"},"CREATE"))," to create other smart contracts. However, they do not have any internal logic or storage capabilities."),(0,r.kt)("p",null,"Smart contracts, on the other hand, can be controlled by EOAs or other smart contracts, which provide a flexible ownership management mechanism. They can store data and perform more complex operations, making them useful for a wide range of use cases, including digital assets, decentralized applications, DAO and smart contract based accounts."),(0,r.kt)("h2",{id:"erc725x"},"ERC725X"),(0,r.kt)("p",null,"There is a growing need for more functionalities beyond the basic ",(0,r.kt)("strong",{parentName:"p"},"CALL")," and ",(0,r.kt)("strong",{parentName:"p"},"CREATE")," that externally owned accounts (EOA) can do. These two opcodes enables interaction with other addresses on the blockchain to perform tasks such as calling functions, transferring native tokens, and creating new contracts. As the number of use cases for smart contracts increases, so does the need for additional functionality."),(0,r.kt)("p",null,"One such operation is the ability to manipulate storage of a contract and execute other contracts logic in the caller context (delegatecall), which is not possible with EOA but can be helpful to extend the logic of a contract. Additionally, the ability to create contracts at predetermined addresses (CREATE2), as well as, performing calls without causing any state changes (staticcall) are also important features that are currently not available to EOAs."),(0,r.kt)("p",null,"The need for these additional operations highlights the importance of having more functionality built into smart contracts. This standard aims to provide this functionality and enable the creation of more advanced and versatile smart contracts."),(0,r.kt)("h3",{id:"specification"},"Specification"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ERC725X")," is a standard that provides four types of operations that can be performed in a smart contract. These operations are defined as follows:"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The DELEGATECALL operation is very dangrous as it can alter the state of the contract and also change owner variables at will. Additionally it can destroy the contract by calling selfdestruct on other contracts.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Operation number"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Operation type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.evm.codes/#f1"},(0,r.kt)("inlineCode",{parentName:"a"},"CALL"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transfer native tokens or calls smart contract functions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.evm.codes/#f0"},(0,r.kt)("inlineCode",{parentName:"a"},"CREATE"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Create a new smart contract based on the contract address and nonce.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1014"},(0,r.kt)("inlineCode",{parentName:"a"},"CREATE2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Create a new smart contract based on the contract address, bytecode and the salt. The address can be predetermined.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-214"},(0,r.kt)("inlineCode",{parentName:"a"},"STATICCALL"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calls another smart contract while disallowing any modification to the state during the call.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-7"},(0,r.kt)("inlineCode",{parentName:"a"},"DELEGATECALL"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Runs the function from another contract, but use the context of the current contract.")))),(0,r.kt)("h2",{id:"erc725y-generic-data-keyvalue-store"},"ERC725Y Generic Data Key/Value Store"),(0,r.kt)("p",null,"Using smart contracts to store data on the blockchain can be beneficial when that data will be used or referenced by other smart contracts."),(0,r.kt)("p",null,"One limitation of this approach is that once a smart contract is deployed with a specific set of variables containing data, it cannot be modified to include new variables. This can be a problem if additional data needs to be stored in the future, as it would require deploying a new version of the contract."),(0,r.kt)("p",null,"For example, if a token contract is deployed with variables for the token name, symbol, and decimals, it is not possible to add new variables for the creators or future collaborators."),(0,r.kt)("p",null,"What is needed is a dynamic way to attach data to a contract even after it has been deployed."),(0,r.kt)("h3",{id:"specification-1"},"Specification"),(0,r.kt)("p",null,"ERC725Y solves this problem by standardizing a mapping of ",(0,r.kt)("strong",{parentName:"p"},"data keys")," to ",(0,r.kt)("strong",{parentName:"p"},"data values")," to store data dynamically and to have the ability to add or remove data across time without the need to redeploy the contract."),(0,r.kt)("p",null,"Instead of representing the variable with a specific name such as ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", etc .. They are referenced as ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes32")," data key. Same as solidity treat variables under the hood."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"See the section ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.soliditylang.org/en/v0.8.11/internals/layout_in_storage.html"},'"Layout of State Variables in Storage"'))," in the Solidity documentation for more information about the structure of smart contract storage.")),(0,r.kt)("h4",{id:"normal-contract-vs-erc725y"},"Normal contract vs ERC725Y"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Smart contract vs ERC725Y",src:a(1214).Z,width:"1431",height:"698"})),(0,r.kt)("p",null,"Thanks to ERC725Y, contracts become more interoperable, as their storage is represented in the same way. Contracts and interfaces can then read and write data from or to the storage in the same manner via the functions ",(0,r.kt)("inlineCode",{parentName:"p"},"getData(...)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setData(...)"),"."),(0,r.kt)("h4",{id:"erc725y-data-representation"},"ERC725Y Data Representation"),(0,r.kt)("p",null,"Since the data is set in the contract's storage as ",(0,r.kt)("strong",{parentName:"p"},"bytes32"),"/",(0,r.kt)("strong",{parentName:"p"},"bytes")," data key/value pair, a representation of this data should be standardized to avoid having each user writing the data in a different way and to have the ability to getData from other people's contract storage in a unified way."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp2-json-schema"},"LSP2 - ERC725YJSONSchema"))," is the standard used by the LSPs to organize how the data should be represented as ",(0,r.kt)("strong",{parentName:"p"},"bytes32"),"/",(0,r.kt)("strong",{parentName:"p"},"bytes")," pairs."),(0,r.kt)("h2",{id:"ownership"},"Ownership"),(0,r.kt)("p",null,"An EOA (Externally Owned Account) is controlled by a private key, which means that only the holder of this ",(0,r.kt)("strong",{parentName:"p"},"private key")," can execute transactions and perform ",(0,r.kt)("strong",{parentName:"p"},"CALL or CREATE")," operations from this EOA. This can be limiting in certain use cases, such as when it is necessary to share the ability to interact with the address from multiple individuals or entities. Sharing the private key, however, would compromise the security of the EOA as anyone with access to the private key would be able to execute transactions from the EOA."),(0,r.kt)("p",null,"One solution to this problem is to use a smart contract, which can be programmed to have specific addresses that can execute transactions."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("strong",{parentName:"a"},"ERC725"))," utilizes the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-173"},(0,r.kt)("strong",{parentName:"a"},"ERC173"))," standard for ownership management. Under this standard, an address is designated as the owner of the contract, and is the only one able to interact with other addresses and create contracts using the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute(..)")," functions. The owner is also the only one able to set data in the contract using the ",(0,r.kt)("inlineCode",{parentName:"p"},"setData(..)")," function."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Owner ERC725",src:a(7897).Z,width:"1360",height:"735"})),(0,r.kt)("p",null,"This method provides significant control over who can access and operate the contract, and eliminates the need to share private keys. The owner of the contract is defined as an address, which can be an EOA (Externally Owned Account) or another contract with specific features, such as a DAO voting contract or a KeyManager."))}p.isMDXComponent=!0},7897:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ERC725Owner-456d267de2e1f0f91b09a4cb582bd38b.jpeg"},1214:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SmartContractVsERC725Y-5fb112871420acaa92febe949762bbfb.jpeg"}}]);