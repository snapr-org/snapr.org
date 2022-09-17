(self.webpackChunksnapr_org=self.webpackChunksnapr_org||[]).push([[865],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return d},kt:function(){return p}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(i),p=r,h=u["".concat(c,".").concat(p)]||u[p]||f[p]||a;return i?n.createElement(h,o(o({ref:t},d),{},{components:i})):n.createElement(h,o({ref:t},d))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5540:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=i(2122),r=i(9756),a=(i(7294),i(3905)),o=["components"],s={sidebar_position:1},c="identity",l={unversionedId:"identity/signatures",id:"identity/signatures",isDocsHomePage:!1,title:"identity",description:"identity in the context of universal basic income is linked to life. more specifically: birth, living and death. it is important for the success of this project that people are not able to create multiple identities and claim more than a single person's daily entitlement. it is unimportant for an identity on this network to broadcast personal details like name, age, gender, nationality, ethnicity. an identity verifier may need to understand those things, but the larger, basic income network, does not need or require that information.",source:"@site/docs/identity/signatures.md",sourceDirName:"identity",slug:"/identity/signatures",permalink:"/docs/identity/signatures",editUrl:"https://github.com/snapr-org/snapr.org/edit/main/docs/identity/signatures.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"technical questions",permalink:"/docs/fatq"},next:{title:"carers and guardianship",permalink:"/docs/identity/carers-and-guardians"}},d=[{value:"identity verifier",id:"identity-verifier",children:[]}],f={toc:d};function u(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"identity"},"identity"),(0,a.kt)("p",null,"identity in the context of universal basic income is linked to life. more specifically: birth, living and death. it is important for the success of this project that people are not able to create multiple identities and claim more than a single person's daily entitlement. it is unimportant for an identity on this network to broadcast personal details like name, age, gender, nationality, ethnicity. an identity verifier may need to understand those things, but the larger, basic income network, does not need or require that information."),(0,a.kt)("h2",{id:"identity-verifier"},"identity verifier"),(0,a.kt)("p",null,"an identity verifier is an entity which verifies the identity of people in such a way that prevents the creation of multiple identities for the same person and that invalidates the identity in the event that the person ceases to remain living. it can do this in any way that is feasible. some examples of ways to validate identity might be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"to collect and validate a birth certificate and then to collect evidence that the presenter of the certificate is the person named on the certificate."),(0,a.kt)("li",{parentName:"ul"},"to collect a biometric identifier like a retina scan or fingerprint or a combination of biometric identifiers.")),(0,a.kt)("p",null,"within the context of decentralisation, the network does not impose any requirement other than a bond on an identity verifier. the bond amount is equivalent to one token per day per identity it is left to each individual to select an identity verifier and to select one that is honest, efficient and meets the needs of those whose identities they verify."),(0,a.kt)("p",null,"an identity verifier must pay a bond at the time of verifier registration. this bond and verifier status may be forfeit if the verifier produces invalid identity verifications."),(0,a.kt)("p",null,"anyone may challenge the verification of any identity and present evidence of the invalidity of a verification. an arbitrator (any other identity verifier) will examine the challenge and provide a judgement on the validity of the verification being challenged. if the challenge is deemed valid, the issuer of the invalid verification will forfeit a portion of their bond and must replace that portion in order to retain verifier status."))}u.isMDXComponent=!0}}]);