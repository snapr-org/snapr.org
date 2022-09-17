(self.webpackChunksnapr_org=self.webpackChunksnapr_org||[]).push([[735],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8501:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:5},l=void 0,c={unversionedId:"contribute",id:"contribute",isDocsHomePage:!1,title:"contribute",description:"what needs to be done?",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/docs/contribute",editUrl:"https://github.com/snapr-org/snapr.org/edit/main/docs/contribute.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"carers and guardianship",permalink:"/docs/identity/carers-and-guardians"},next:{title:"networks",permalink:"/docs/developers/networks"}},u=[{value:"what needs to be done?",id:"what-needs-to-be-done",children:[{value:"administrative",id:"administrative",children:[]},{value:"technical",id:"technical",children:[]}]},{value:"what is already done?",id:"what-is-already-done",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-needs-to-be-done"},"what needs to be done?"),(0,i.kt)("h3",{id:"administrative"},"administrative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"registration of a legal entity to steward the snapr balance allocations and faucet stash accounts."),(0,i.kt)("li",{parentName:"ul"},"definition of and onboarding procedure for the snapr stewardship forum."),(0,i.kt)("li",{parentName:"ul"},"homepage content (snapr.org)")),(0,i.kt)("h3",{id:"technical"},"technical"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the orml and ethereum bridging code needs to be removed from snapr-node/snapr-runtime or a technical argument for retaining it is required. requires rust competence and crypto experience."),(0,i.kt)("li",{parentName:"ul"},"the polkadot.js integration is missing type definitions that would enable the use of that interface. requires javascript/typescript competence."),(0,i.kt)("li",{parentName:"ul"},"the identity signing piece requires thought and design. requires technical architecture competence."),(0,i.kt)("li",{parentName:"ul"},"implementation of the faucet queuing mechanism for daily payouts. requires rust (lambda) and/or nodejs competence."),(0,i.kt)("li",{parentName:"ul"},"implementation of the payouts mechanism. requires rust (lambda) and/or nodejs competence."),(0,i.kt)("li",{parentName:"ul"},"deployment of testnet."),(0,i.kt)("li",{parentName:"ul"},"homepage design and graphics (snapr.org). requires graphic design competence.")),(0,i.kt)("h2",{id:"what-is-already-done"},"what is already done?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"forking of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snapr-org/snapr"},"substrate node/runtime codebase")," and general snapr customisations"),(0,i.kt)("li",{parentName:"ul"},"forking of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snapr-org/snapr-telemetry"},"telemetry codebase")," and general snapr customisations"),(0,i.kt)("li",{parentName:"ul"},"forking of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snapr-org/explorer"},"explorer codebase")," and general snapr customisations"),(0,i.kt)("li",{parentName:"ul"},"genesis ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snapr-org/snapr/blob/main/assets/chain_spec_mainnet.json"},"chain spec")," (can be revisited if the balance allocation is determined to need revision by the stewardship forum)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/snapr-org/great-green-arkleseizure"},"deployment codebase")," (terraform)"),(0,i.kt)("li",{parentName:"ul"},"telemetry deployment (api, ui)"),(0,i.kt)("li",{parentName:"ul"},"explorer deployment (rds, gql, ui)"),(0,i.kt)("li",{parentName:"ul"},"mainnet deployment (bootnodes: trillian, ford, arthur)"),(0,i.kt)("li",{parentName:"ul"},"mainnet and testnet key generation"),(0,i.kt)("li",{parentName:"ul"},"mainnet launch")))}d.isMDXComponent=!0}}]);