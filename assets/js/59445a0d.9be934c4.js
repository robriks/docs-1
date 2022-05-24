"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4667],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=d(a),u=r,k=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6973:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],o={title:"LSP4DigitalAssetMetadata",sidebar_position:6},l="LSP4DigitalAssetMetadata",d={unversionedId:"standards/smart-contracts/lsp4-digital-asset-metadata",id:"standards/smart-contracts/lsp4-digital-asset-metadata",title:"LSP4DigitalAssetMetadata",description:"LSP4DigitalAssetMetadata.sol",source:"@site/docs/standards/smart-contracts/lsp4-digital-asset-metadata.md",sourceDirName:"standards/smart-contracts",slug:"/standards/smart-contracts/lsp4-digital-asset-metadata",permalink:"/standards/smart-contracts/lsp4-digital-asset-metadata",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/smart-contracts/lsp4-digital-asset-metadata.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"LSP4DigitalAssetMetadata",sidebar_position:6},sidebar:"standardsSidebar",previous:{title:"LSP1UniversalReceiverDelegateVault",permalink:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"},next:{title:"LSP6KeyManager",permalink:"/standards/smart-contracts/lsp6-key-manager"}},c={},m=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"References",id:"references",level:2}],p={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lsp4digitalassetmetadata"},"LSP4DigitalAssetMetadata"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Solidity contract")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP4DigitalAssetMetadata/LSP4DigitalAssetMetadata.sol"},(0,s.kt)("inlineCode",{parentName:"a"},"LSP4DigitalAssetMetadata.sol"))))),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"LSP4DigitalAssetMetadata")," is a contract that sets the ",(0,s.kt)("strong",{parentName:"p"},"Token-Metadata")," (name and symbol) for the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp7-digital-asset"},"LSP7DigitalAsset"))," and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp8-identifiable-digital-asset"},"LSP8IdentifiableDigitalAsset"))," token contracts."),(0,s.kt)("p",null,"As this contract uses ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-725"},"ERC725Y General Data Key/Value Store"))," to set the metadata, any information could be added, such as the ",(0,s.kt)("strong",{parentName:"p"},"list of creators, JSON files"),", etc."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("em",{parentName:"p"},"The LSP4DigitalAssetMetadata contract contains the methods from the ",(0,s.kt)("a",{parentName:"em",href:"https://github.com/ERC725Alliance/ERC725/blob/main/docs/ERC-725.md#erc725y"},"ERC725Y Standard"),":")),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"function setData(bytes32 key, bytes memory value) public;\n\nfunction getData(bytes32 key) public view returns (bytes memory);\n\nfunction setData(bytes32[] memory keys, bytes[] memory values) public;\n\nfunction getData(bytes32[] memory keys) public view returns (bytes[] memory);\n\n")))),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(\n    string memory name_,\n    string memory symbol_,\n    address newOwner_\n) ERC725Y(newOwner_)\n")),(0,s.kt)("p",null,"Sets the ",(0,s.kt)("strong",{parentName:"p"},"initial owner")," of the contract and the following data keys on the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"./lsp0-erc725-account#setdata"},"ERC725Y Data Key-Value Store")),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name_"),": token's name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"symbol_"),": token's symbol."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md#supportedstandardslsp4digitalasset"},(0,s.kt)("strong",{parentName:"a"},"SupportedStandards:LSP4DigitalAsset"))," data key.")),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"name_")),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name of the token.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"symbol_")),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The symbol of the token.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"newOwner_")),(0,s.kt)("td",{parentName:"tr",align:"left"},"address"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The owner of the contract.")))),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LUKSO Standards Proposals: LSP4 - DigitalAsset-Metadata (Standard Specification, GitHub)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/blob/develop/contracts/LSP4DigitalAssetMetadata"},"LSP4 - DigitalAsset-Metadata: Solidity implementations (GitHub)"))))}u.isMDXComponent=!0}}]);