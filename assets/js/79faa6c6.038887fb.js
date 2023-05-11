"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6959],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),i=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=i(n),m=a,c=d["".concat(p,".").concat(m)]||d[m]||k[m]||o;return n?r.createElement(c,s(s({ref:e},u),{},{components:n})):r.createElement(c,s({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7603:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"Network parameters",sidebar_position:1},s="Testnet",l={unversionedId:"networks/testnet/parameters",id:"networks/testnet/parameters",title:"Network parameters",description:"The Public Testnet runs alongside the LUKSO mainnet for developers to test dApps and forks before they move to the mainnet.",source:"@site/docs/networks/testnet/parameters.md",sourceDirName:"networks/testnet",slug:"/networks/testnet/parameters",permalink:"/networks/testnet/parameters",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/testnet/parameters.md",tags:[],version:"current",lastUpdatedAt:1683795812,formattedLastUpdatedAt:"May 11, 2023",sidebarPosition:1,frontMatter:{title:"Network parameters",sidebar_position:1},sidebar:"networksSidebar",previous:{title:"Running a node",permalink:"/networks/mainnet/running-a-node"},next:{title:"Running a node",permalink:"/networks/testnet/running-a-node"}},p={},i=[{value:"Network Parameters",id:"network-parameters",level:2}],u={toc:i};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testnet"},"Testnet"),(0,a.kt)("p",null,"The Public Testnet runs alongside the LUKSO mainnet for developers to test dApps and forks before they move to the mainnet."),(0,a.kt)("h2",{id:"network-parameters"},"Network Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Testnet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://rpc.testnet.lukso.network"},"https://rpc.testnet.lukso.network"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Websocket URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"wss://ws.rpc.testnet.lukso.network"},"wss://ws.rpc.testnet.lukso.network"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fork Version"),(0,a.kt)("td",{parentName:"tr",align:null},"0x42010001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Chain ID / Network ID"),(0,a.kt)("td",{parentName:"tr",align:null},"4201")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Execution Block Explorer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://explorer.execution.testnet.lukso.network"},"https://explorer.execution.testnet.lukso.network"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Execution Node list"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://stats.execution.testnet.lukso.network"},"https://stats.execution.testnet.lukso.network"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Consensus Block Explorer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://explorer.consensus.testnet.lukso.network"},"https://explorer.consensus.testnet.lukso.network"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Consensus Node list"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://stats.consensus.testnet.lukso.network"},"https://stats.consensus.testnet.lukso.network"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://faucet.testnet.lukso.network"},"https://faucet.testnet.lukso.network"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Launchpad"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://deposit.testnet.lukso.network/"},"https://deposit.testnet.lukso.network/"))))))}k.isMDXComponent=!0}}]);