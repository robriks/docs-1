"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8676],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),h=i,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_label:"LSP8 - Identifiable Digital Asset (NFT)",sidebar_position:4},s="LSP8 - Identifiable Digital Asset",o={unversionedId:"standards/nft-2.0/LSP8-Identifiable-Digital-Asset",id:"standards/nft-2.0/LSP8-Identifiable-Digital-Asset",title:"LSP8 - Identifiable Digital Asset",description:"LSP8 - Identifiable Digital Asset",source:"@site/docs/standards/nft-2.0/LSP8-Identifiable-Digital-Asset.md",sourceDirName:"standards/nft-2.0",slug:"/standards/nft-2.0/LSP8-Identifiable-Digital-Asset",permalink:"/standards/nft-2.0/LSP8-Identifiable-Digital-Asset",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/nft-2.0/LSP8-Identifiable-Digital-Asset.md",tags:[],version:"current",lastUpdatedAt:1656508057,formattedLastUpdatedAt:"6/29/2022",sidebarPosition:4,frontMatter:{sidebar_label:"LSP8 - Identifiable Digital Asset (NFT)",sidebar_position:4},sidebar:"standardsSidebar",previous:{title:"LSP7 - Digital Asset (Token)",permalink:"/standards/nft-2.0/LSP7-Digital-Asset"},next:{title:"Introduction",permalink:"/standards/smart-contracts/introduction"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"1. The metadata attached to the NFT (represented with <code>tokenURI</code>) refers to a file.",id:"1-the-metadata-attached-to-the-nft-represented-with-tokenuri-refers-to-a-file",level:4},{value:"2. The only data that can be attached to an NFT is a <code>name</code> and <code>symbol</code>.",id:"2-the-only-data-that-can-be-attached-to-an-nft-is-a-name-and-symbol",level:4},{value:"3. The metadata file can be altered.",id:"3-the-metadata-file-can-be-altered",level:4},{value:"4. The NFT metadata is set in stone.",id:"4-the-nft-metadata-is-set-in-stone",level:4},{value:"What does this Standard represent?",id:"what-does-this-standard-represent",level:2},{value:"NFT Metadata",id:"nft-metadata",level:3},{value:"Types of <code>tokenId</code>",id:"types-of-tokenid",level:2},{value:"NFTs as ERC725Y Contract",id:"nfts-as-erc725y-contract",level:3},{value:"References",id:"references",level:2}],c={toc:d};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lsp8---identifiable-digital-asset"},"LSP8 - Identifiable Digital Asset"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Standard Document")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md"},"LSP8 - Identifiable Digital Asset")))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"When it comes to Non Fungible Tokens (NFTs), one of the key characteristics that make them unique is their ",(0,i.kt)("strong",{parentName:"p"},"metadata.")),(0,i.kt)("p",null,"In their current state, such assets are created as ERC721 tokens. However, their limitations are following:"),(0,i.kt)("h4",{id:"1-the-metadata-attached-to-the-nft-represented-with-tokenuri-refers-to-a-file"},"1. The metadata attached to the NFT (represented with ",(0,i.kt)("inlineCode",{parentName:"h4"},"tokenURI"),") refers to a file."),(0,i.kt)("p",null,"The reference raises several questions around where the token's metadata is stored. Is a central service used to store the metadata? What about if such a service goes down?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ERC721 Metadata Security",src:a(9449).Z,width:"1071",height:"530"})),(0,i.kt)("h4",{id:"2-the-only-data-that-can-be-attached-to-an-nft-is-a-name-and-symbol"},"2. The only data that can be attached to an NFT is a ",(0,i.kt)("inlineCode",{parentName:"h4"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"symbol"),"."),(0,i.kt)("p",null,"Each NFT has its own characteristics and specific details. The singularity is what makes each NFT unique. But how can we attach more information specific to an NFT? Or ",(0,i.kt)("strong",{parentName:"p"},"how can we query one precise information")," specific to an NFT without having to retrieve and search through the entire metadata?"),(0,i.kt)("h4",{id:"3-the-metadata-file-can-be-altered"},"3. The metadata file can be altered."),(0,i.kt)("p",null,"Suppose the metadata for an NFT is linked to a JSON file. How do we know if it has been altered? The uncertainty presents a significant problem. If the rules and logic of an application were based on the metadata related to an NFT, any unexpected change to the data could affect the whole application."),(0,i.kt)("h4",{id:"4-the-nft-metadata-is-set-in-stone"},"4. The NFT metadata is set in stone."),(0,i.kt)("p",null,'How about if we want to represent NFTs as more than just a set of information in a JSON file? If we wish NFTs to act as "digital liveable things" that can ',(0,i.kt)("strong",{parentName:"p"},"change"),", ",(0,i.kt)("strong",{parentName:"p"},"evolve")," or ",(0,i.kt)("strong",{parentName:"p"},"be upgraded over time"),"?"),(0,i.kt)("p",null,"A good example where all these problems could have effects is a video game. Game services could use an NFT to represent a unique item like a weapon. We might want the player to have the ability to upgrade the weapon features over time so that it becomes more powerful."),(0,i.kt)("h2",{id:"what-does-this-standard-represent"},"What does this Standard represent?"),(0,i.kt)("p",null,"LSP8 Identifiable Digital Asset is a standard that aims to describe ",(0,i.kt)("em",{parentName:"p"},"non-fungible")," assets. ",(0,i.kt)("em",{parentName:"p"},"Non-fungible")," means that each asset is unique and different. They are distinguishable from each other and therefore not interchangeable."),(0,i.kt)("p",null,"Since every single asset is unique on its own, they are differentiated by a unique identifier: a ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId"),". The identifier can be anything from a unique serial number to another ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ERC725Alliance/ERC725/blob/main/docs/ERC-725.md#erc725y"},"ERC725Y")," smart contract that contains information and metadata specific to this ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId"),"."),(0,i.kt)("p",null,"LSP8 solves the current problems of NFTs by using the ERC725Y standard as its base. By using a generic data key-value store, an LSP8 contract now comes with the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"attaching an unlimited amount of information (= metadata), making the asset more customizable and unique."),(0,i.kt)("li",{parentName:"ul"},"knowing when the metadata has been altered, as a ",(0,i.kt)("inlineCode",{parentName:"li"},"DataChanged")," event will be emitted in ERC725Y."),(0,i.kt)("li",{parentName:"ul"},"having metadata as a ",(0,i.kt)("strong",{parentName:"li"},"hash reference")," (= data reference), instead of a URL reference.")),(0,i.kt)("p",null,"LSP8 assets are similar to ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-721"},"ERC721")," tokens (NFTs). Their underlying base makes them different in terms of more customization and upgradability of their metadata over time. Such a feature set lets them become part of a new generation of unique assets known as ",(0,i.kt)("strong",{parentName:"p"},"NFT 2.0"),"."),(0,i.kt)("h3",{id:"nft-metadata"},"NFT Metadata"),(0,i.kt)("p",null,"One of the critical differences of LSP8 is that it allows representing each NFT as more than just a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId")," number. Each newly created ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId")," (NFT) has its own metadata, that describes its uniqueness. Such metadata can refer to either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"off-chain metadata")," (a ",(0,i.kt)("strong",{parentName:"li"},"JSON file URL")," stored on IPFS, a public registry, or even permissioned or private servers) or"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"on-chain metadata")," (within another ",(0,i.kt)("strong",{parentName:"li"},"ERC725Y smart contract"),").")),(0,i.kt)("p",null,"It is possible to know where the metadata for a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId")," is located by simply querying the LSP8 contract, giving the ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId")," as an argument."),(0,i.kt)("p",null,"One benefit of using an ERC725Y metadata contract per singular ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId")," or NFT is that users can edit the metadata related to this NFT. Changeability makes the metadata flexible and upgradable. It enables the representation of unique NFTs that can be altered over time."),(0,i.kt)("h2",{id:"types-of-tokenid"},"Types of ",(0,i.kt)("inlineCode",{parentName:"h2"},"tokenId")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is recommended that the ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId")," should not change over the lifecycle of the LSP8 contract."))),(0,i.kt)("p",null,"An LSP8 NFT can be represented in multiple ways, depending on the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId")," used as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"number")," (",(0,i.kt)("inlineCode",{parentName:"li"},"uint256"),") that increments on each newly minted NFT,"),(0,i.kt)("li",{parentName:"ul"},"a unique ",(0,i.kt)("inlineCode",{parentName:"li"},"bytes32")," value (representing a ",(0,i.kt)("em",{parentName:"li"},"serial number"),", for instance), or"),(0,i.kt)("li",{parentName:"ul"},"an ERC725Y contract address.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LSP8 tokenId = number",src:a(7151).Z,width:"1217",height:"821"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LSP8 tokenId = bytes32",src:a(7001).Z,width:"1312",height:"761"})),(0,i.kt)("h3",{id:"nfts-as-erc725y-contract"},"NFTs as ERC725Y Contract"),(0,i.kt)("p",null,"If each NFT is represented by its own ERC725Y contract (= metadata contract), this contract contains information like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"address")," of the contract that minted this NFT or"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenId")," of this NFT.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LSP8 tokenId = ERC725Y contract",src:a(1530).Z,width:"1198",height:"834"})),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md"},"LUKSO Standards Proposals: LSP8 - Identifiable Digital Asset (Standard Specification, GitHub)"))))}m.isMDXComponent=!0},9449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc721-metadata-security-f347cc552c2006a59db3862d13053c84.png"},1530:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp8-tokenid-erc725y-5648e9e1522ef4f0a222a9475fd6e7dc.jpeg"},7151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp8-tokenid-number-28c9dba4c0b03b8662024476e2230ef0.jpeg"},7001:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp8-tokenid-serial-number-b7328a79f0d55016538aefff3fe1d284.jpeg"}}]);