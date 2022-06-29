"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2553],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return a?n.createElement(k,o(o({ref:e},d),{},{components:a})):n.createElement(k,o({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9830:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={title:"Introduction",sidebar_position:1},o="Smart Contract Implementation",i={unversionedId:"standards/smart-contracts/introduction",id:"standards/smart-contracts/introduction",title:"Introduction",description:"The smart contracts are public and open source. They can be found on GitHub and in the @lukso/lsp-smart-contracts NPM package.",source:"@site/docs/standards/smart-contracts/introduction.md",sourceDirName:"standards/smart-contracts",slug:"/standards/smart-contracts/introduction",permalink:"/standards/smart-contracts/introduction",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/smart-contracts/introduction.md",tags:[],version:"current",lastUpdatedAt:1656508057,formattedLastUpdatedAt:"6/29/2022",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"standardsSidebar",previous:{title:"LSP8 - Identifiable Digital Asset (NFT)",permalink:"/standards/nft-2.0/LSP8-Identifiable-Digital-Asset"},next:{title:"Interfaces IDs",permalink:"/standards/smart-contracts/interface-ids"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Overview",id:"overview",level:2},{value:"Universal Profile",id:"universal-profile",level:3},{value:"Digital Assets",id:"digital-assets",level:3},{value:"Periphery",id:"periphery",level:3},{value:"Usage",id:"usage",level:2},{value:"Create a Universal Profile",id:"create-a-universal-profile",level:3},{value:"Create a Fungible Token",id:"create-a-fungible-token",level:3},{value:"Further Information",id:"further-information",level:2}],d={toc:c};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-implementation"},"Smart Contract Implementation"),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Documentation")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The smart contracts are public and open source. They can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts"},"on GitHub")," and in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@lukso/lsp-smart-contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts"))," NPM package."))),(0,r.kt)("p",null,"This section contains the reference contract implementations of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/introduction"},"LUKSO Standard Proposals")),"."),(0,r.kt)("p",null,"Some of the standards do not have a contract implementation as they represent ",(0,r.kt)("strong",{parentName:"p"},"Metadata-Standards")," to be used in the implementation contracts."),(0,r.kt)("p",null,"Developers wishing to understand the standards in terms of code and the tradeoffs within are well-advised to read these documents alongside the Solidity code itself."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lukso/lsp-smart-contracts\n")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The contracts can be divided by their usage. Some are related to ",(0,r.kt)("strong",{parentName:"p"},"Universal Profiles"),", while others are related to ",(0,r.kt)("strong",{parentName:"p"},"Digital Assets and NFT 2.0"),". Finally, some standards are for more ",(0,r.kt)("strong",{parentName:"p"},"general use cases"),"."),(0,r.kt)("h3",{id:"universal-profile"},"Universal Profile"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Universal Profile")," contracts allow a better representation of the identity on the blockchain and better control over it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp0-erc725-account"},"LSP0ERC725Account")),": a contract that can be used as an account and represents an ",(0,r.kt)("strong",{parentName:"li"},"identity on-chain"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"LSP1UniversalReceiverDelegateUP")),": a contract that allows the account to react to the calls that it receives (Normal transaction, Token transfer, Vaults transfer, etc.)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp6-key-manager"},"LSP6KeyManager")),": a contract that allows ",(0,r.kt)("strong",{parentName:"li"},"multi-control")," over the account using different permissions.")),(0,r.kt)("h3",{id:"digital-assets"},"Digital Assets"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Digital Asset (Token and NFT 2.0)")," contracts are the newest advanced version of the existing token standards. They come with many features that enhance the security and the overall user experience and compatibility with ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp0-erc725account"},"ERC725Accounts")," and ",(0,r.kt)("a",{parentName:"p",href:"/standards/generic-standards/lsp1-universal-receiver"},"Universal Receivers"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"./lsp4-digital-asset-metadata"},"LSP4DigitalAssetMetadata")),": a contract that sets the ",(0,r.kt)("strong",{parentName:"li"},"metadata")," of the ",(0,r.kt)("strong",{parentName:"li"},"Digital Asset"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp7-digital-asset"},"LSP7DigitalAsset")),": a contract that either represents a fungible or non-fungible token (NFT)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp8-identifiable-digital-asset"},"LSP8IdentifiableDigitalAsset")),": a contract that represents a non-fungible token (NFT). It uses a bytes32 tokenId to allow many uses of token identification, including numbers, contract addresses, and hashed values (e.g., serial numbers).")),(0,r.kt)("h3",{id:"periphery"},"Periphery"),(0,r.kt)("p",null,"These contracts are not just related to one specific section and could be used with the ",(0,r.kt)("strong",{parentName:"p"},"Universal Profile"),", ",(0,r.kt)("strong",{parentName:"p"},"Digital Asset"),", and ",(0,r.kt)("strong",{parentName:"p"},"NFT 2.0")," contracts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp9-vault"},"LSP9Vault")),": a contract representing a ",(0,r.kt)("strong",{parentName:"li"},"Vault")," able to execute and hold assets could be owned by an LSP0ERC725Account contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"},"LSP1UniversalReceiverDelegateVault")),": a contract that allows the vault to react to the calls it receives (Normal transaction, Token transfer, etc.).")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"create-a-universal-profile"},"Create a Universal Profile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// MyUP.sol\n// SPDX-License-Identifier: MIT\n\nimport "@lukso/lsp-smart-contracts/contracts/UniversalProfile.sol";\n\npragma solidity ^0.8.0;\n\ncontract MyUP is UniversalProfile {\n\n    constructor() UniversalProfile(msg.sender) {\n        // ..\n    }\n}\n')),(0,r.kt)("h3",{id:"create-a-fungible-token"},"Create a Fungible Token"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// MyToken.sol\n// SPDX-License-Identifier: MIT\n\nimport "@lukso/lsp-smart-contracts/contracts/LSP7DigitalAsset/LSP7DigitalAsset.sol";\n\npragma solidity ^0.8.0;\n\ncontract MyToken is LSP7DigitalAsset {\n    // 4th argument (false) marks that this contract serves as a Fungible Token and not as a NFT.\n    constructor() LSP7DigitalAsset("MyToken","MTKN",msg.sender,false) {\n        // ..\n    }\n\n    function mint() public {\n        _mint(...);\n    }\n}\n')),(0,r.kt)("h2",{id:"further-information"},"Further Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://youtu.be/SbTo_e3l_Lk?t=1727"},"UniversalProfile & Identity Section"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://youtu.be/hg1Ow6u9QVk"},"NFT 2.0 Section")))))}p.isMDXComponent=!0}}]);