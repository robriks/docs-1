"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4560],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(o),y=a,u=m["".concat(l,".").concat(y)]||m[y]||d[y]||r;return o?n.createElement(u,s(s({ref:t},c),{},{components:o})):n.createElement(u,s({ref:t},c))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8809:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:3,title:"Options"},s="Contract Options Object",i={unversionedId:"tools/lsp-factoryjs/deployment/options",id:"tools/lsp-factoryjs/deployment/options",title:"Options",description:"When deploying a Universal Profile or Digital Asset, each smart contract can be individually configured by passing a contract configuration object to the options parameter of the deploy function.",source:"@site/docs/tools/lsp-factoryjs/deployment/options.md",sourceDirName:"tools/lsp-factoryjs/deployment",slug:"/tools/lsp-factoryjs/deployment/options",permalink:"/tools/lsp-factoryjs/deployment/options",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/deployment/options.md",tags:[],version:"current",lastUpdatedAt:1670351362,formattedLastUpdatedAt:"Dec 6, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Options"},sidebar:"toolsSidebar",previous:{title:"Digital Asset",permalink:"/tools/lsp-factoryjs/deployment/digital-asset"},next:{title:"UniversalProfile",permalink:"/tools/lsp-factoryjs/classes/universal-profile"}},l={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Version",id:"version",level:3},{value:"Custom Base Contract Address",id:"custom-base-contract-address",level:4},{value:"Contract Versions",id:"contract-versions",level:4},{value:"Deploying Custom Bytecode",id:"deploying-custom-bytecode",level:4},{value:"Deploy Proxy",id:"deploy-proxy",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-options-object"},"Contract Options Object"),(0,a.kt)("p",null,"When deploying a Universal Profile or Digital Asset, each smart contract can be individually configured by passing a contract configuration object to the options parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," function."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#version"},(0,a.kt)("inlineCode",{parentName:"a"},"version"))," (optional)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Sets which version of the smart contract should be deployed. Can be a ",(0,a.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#contract-versions"},"version number"),", ",(0,a.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#custom-base-contract-address"},"base contract address"),", or ",(0,a.kt)("a",{parentName:"td",href:"#deploying-custom-bytecode"},"custom bytecode"),". Defaults to the latest version available in the ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json"},"versions file"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#deploy-proxy"},(0,a.kt)("inlineCode",{parentName:"a"},"deployProxy"))," (optional)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Determines whether the contract will be deployed as a ",(0,a.kt)("strong",{parentName:"td"},"minimal proxy contract")," based on ",(0,a.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1167"},"EIP1167")," or an entire contract with a constructor.")))),(0,a.kt)("h3",{id:"version"},"Version"),(0,a.kt)("p",null,"Under the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," parameter developers can specify a ",(0,a.kt)("a",{parentName:"p",href:"./options#contract-versions"},"version number"),", ",(0,a.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/options#deploying-custom-bytecode"},"custom bytecode")," or a ",(0,a.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/options#custom-base-contract-address"},"base contract address")," to be used for the deployment of the smart contract."),(0,a.kt)("h4",{id:"custom-base-contract-address"},"Custom Base Contract Address"),(0,a.kt)("p",null,"When using ",(0,a.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/options#deploy-proxy"},"proxy deployment")," developers can pass an address to the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," parameter to specify the base contract address which the proxy contract will inherit its logic from. The base contract can contain some custom logic according to a specific use case."),(0,a.kt)("p",null,"LSPFactory will then deploy a proxy contract which inherits its logic from the specified base contract address."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Any base contract address that developers pass here must adhere to the relevant LSP contract standard it is being used for.")),(0,a.kt)("p",null,"Read more about proxy deployment ",(0,a.kt)("a",{parentName:"p",href:"./options#deploy-proxy"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying an LSP7 Digital Asset using a specific base contract address"',title:'"Deploying',an:!0,LSP7:!0,Digital:!0,Asset:!0,using:!0,a:!0,specific:!0,base:!0,contract:!0,'address"':!0},"await lspFactory.LSP7DigitalAsset.deploy({...}, {\n    LSP7DigitalAsset: {\n        version: '0x00b1d454Eb5d917253FD6cb4D5560dEC30b0960c',\n        deployProxy: true\n    }\n});\n")),(0,a.kt)("h4",{id:"contract-versions"},"Contract Versions"),(0,a.kt)("p",null,"LSPFactory stores the addresses of different base contract versions ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json"},"internally"),". By specifying a ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," number, developers can specify which base contract version should be used during deployment. The version number reflects the package version of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lsp-factory/releases"},"lsp-smart-contracts library")," used to deploy the base contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"await lspFactory.LSP8IdentifiableDigitalAsset.deploy({...}, {\n    LSP7DigitalAsset: {\n        version: '0.5.0',\n        deployProxy: true\n    }\n});\n")),(0,a.kt)("h4",{id:"deploying-custom-bytecode"},"Deploying Custom Bytecode"),(0,a.kt)("p",null,"Developers can deploy a custom contract implementation by passing some compiled creation bytecode to the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," parameter."),(0,a.kt)("p",null,"This can be the instantiation bytecode of a custom LSP standard implementation written according to a custom use case. The implementation must meet the relevant LSP standard requirements."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Contracts deployed from custom bytecode will not use any proxy contract deployment.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying an LSP8 digital Asset from custom bytecode"',title:'"Deploying',an:!0,LSP8:!0,digital:!0,Asset:!0,from:!0,custom:!0,'bytecode"':!0},"lspFactory.UniversalProfile.deploy({...}, {\n  LSP6KeyManager: {\n    version: '0x...',\n  },\n})\n")),(0,a.kt)("h3",{id:"deploy-proxy"},"Deploy Proxy"),(0,a.kt)("p",null,"LSPFactory uses proxy deployment of smart contracts to maximise gas efficiency. This can be configured by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployProxy")," parameter to determine whether a contract should be deployed as a ",(0,a.kt)("strong",{parentName:"p"},"minimal proxy contract")," based on ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1167"},"EIP1167")," or an entire contract with a constructor."),(0,a.kt)("p",null,"A proxy contract is a lightweight contract that inherits its logic by referencing the address of a base contract already deployed on the blockchain. Inheriting allows cheaper deployment because the smart contract logic has already been deployed in the base contract."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"LSPFactory stores base contract addresses for different versions ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json"},"internally")," and will use the latest available base contract version if no version is specified.")),(0,a.kt)("p",null,"When using proxy deployment, LSPFactory will check that there is some bytecode deployed at the base contract address before deploying. If none is found, a new base contract will be deployed and referenced in the proxy contract. This process is helpful when using LSPFactory on a local development network like Hardhat, where there will be no pre-deployed base contracts."),(0,a.kt)("p",null,"When using proxy deployment developers can specify the base contract address by passing the ",(0,a.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/options#version"},(0,a.kt)("inlineCode",{parentName:"a"},"version"))," parameter. This allows deploying a specific contract implementation by deploying a proxy contract which inherits its logic from a previously deployed custom base contract."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"deployProxy")," defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for all contracts except ",(0,a.kt)("inlineCode",{parentName:"p"},"LSP1UniversalReceiverDelegate")," when deploying a Universal Profile (",(0,a.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/universal-profile#universal-receiver-delegate-proxy-deployment"},"read more"),")."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"deployProxy")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", the smart contract will be deployed from the current version of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts"},"lsp-smart-contracts library"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Universal Profile using a full ERC725Account contract with constructor"',title:'"Deploying',a:!0,Universal:!0,Profile:!0,using:!0,full:!0,ERC725Account:!0,contract:!0,with:!0,'constructor"':!0},"lspFactory.UniversalProfile.deploy({...}, {\n  ERC725Account: {\n    deployProxy: false,\n  },\n})\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Passing Universal Profile contract options"',title:'"Passing',Universal:!0,Profile:!0,contract:!0,'options"':!0},"await lspFactory.UniversalProfile.deploy({...}, {\n    ERC725Account: {\n        version: '0.5.0',\n        deployProxy: true\n    },\n    LSP6Keymanager: {\n        version: '0x...', // Custom bytecode\n        deployProxy: false\n    },\n    LSP1UniversalReceiverDelegate: {\n        version: '0x87cd003F9Ac7d6eBcd811f7b427c7dBF6f6ba132', // Custom base contract address\n        deployProxy: true\n    },\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Passing LSP7DigitalAsset contract options"',title:'"Passing',LSP7DigitalAsset:!0,contract:!0,'options"':!0},"await lspFactory.LSP7DigitalAsset.deploy({...}, {\n    LSP7DigitalAsset: {\n        version: '0x...', // Custom bytecode\n        deployProxy: false\n    },\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Passing LSP8IdentifiableDigitalAsset contract options"',title:'"Passing',LSP8IdentifiableDigitalAsset:!0,contract:!0,'options"':!0},"await lspFactory.LSP8IdentifiableDigitalAsset.deploy({...}, {\n    LSP8IdentifiableDigitalAsset: {\n        version: '0x87cd003F9Ac7d6eBcd811f7b427c7dBF6f6ba132', // Custom base contract address\n        deployProxy: true\n    },\n})\n")))}d.isMDXComponent=!0}}]);