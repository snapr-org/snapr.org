(self.webpackChunksnapr_org=self.webpackChunksnapr_org||[]).push([[394],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=l,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3941:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),o=["components"],i={id:"fatq",hide_title:!0,sidebar_label:"technical questions",sidebar_position:3},u=void 0,c={unversionedId:"fatq",id:"fatq",isDocsHomePage:!1,title:"fatq",description:"frequently asked technical questions",source:"@site/docs/fatq.md",sourceDirName:".",slug:"/fatq",permalink:"/docs/fatq",editUrl:"https://github.com/snapr-org/snapr.org/edit/main/docs/fatq.md",version:"current",sidebarPosition:3,frontMatter:{id:"fatq",hide_title:!0,sidebar_label:"technical questions",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"philosophical questions",permalink:"/docs/fapq"},next:{title:"identity",permalink:"/docs/identity/signatures"}},s=[{value:"frequently asked technical questions",id:"frequently-asked-technical-questions",children:[]}],p={toc:s};function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"frequently-asked-technical-questions"},"frequently asked technical questions"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"why implement ubi as a cryptocurrency blockchain?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",null,"simple. it's much cheaper than handing out fiat. since a currency is as valuable as humans believe it to be, the jury is still out on wether a blockchain based ubi can be as effective as a fiat based ubi."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"what does it cost to run snapr?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",null,"a little more than nothing, considering the potential."),(0,a.kt)("p",null,"we run a few cloud services per deployment. it comes in around $500 monthly. here's the mainnet breakdown (see ",(0,a.kt)("a",{href:"https://calculator.aws"},"aws calculator"),"):"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"bootnodes (substrate validators)",(0,a.kt)("ul",null,(0,a.kt)("li",null,"trillian (singapore, r5a.large, 120gb ~ $77.18 monthly)"),(0,a.kt)("li",null,"ford (stockholm, r5.large, 120gb ~ $73.86 monthly)"),(0,a.kt)("li",null,"arthur (ashburn, r5a.large, 120gb ~ $63.83 monthly)"))),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://explorer.snapr.com"},"explorer"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"elb (frankfurt ~ $19.71 monthly)"),(0,a.kt)("li",null,"gql (frankfurt, 2 \xd7 t3.micro, 120gb ~ $34.90 monthly)"),(0,a.kt)("li",null,"rds (frankfurt, db.t3.micro, 120gb ~ $63.42 monthly)"))),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://telemetry.snapr.org/#/snapr%20mainnet"},"telemetry"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"api (frankfurt, t3.micro, 120gb ~ $17.45 monthly)"))),(0,a.kt)("li",null,"secrets, storage, automation, dns ~ $50 monthly")))))}f.isMDXComponent=!0}}]);