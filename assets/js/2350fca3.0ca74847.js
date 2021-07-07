(self.webpackChunksnapr_org=self.webpackChunksnapr_org||[]).push([[461],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4248:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={title:"networks",description:"snapr chain networks",lead:"snapr chain's networks"},c=void 0,p={unversionedId:"developers/networks",id:"developers/networks",isDocsHomePage:!1,title:"networks",description:"snapr chain networks",source:"@site/docs/developers/networks.md",sourceDirName:"developers",slug:"/developers/networks",permalink:"/docs/developers/networks",editUrl:"https://github.com/snapr-org/snapr.org/edit/main/docs/developers/networks.md",version:"current",frontMatter:{title:"networks",description:"snapr chain networks",lead:"snapr chain's networks"},sidebar:"tutorialSidebar",previous:{title:"contribute",permalink:"/docs/contribute"}},l=[{value:"snapr mainnet",id:"snapr-mainnet",children:[{value:"mainnet info sheet",id:"mainnet-info-sheet",children:[]}]},{value:"snapr testnet",id:"snapr-testnet",children:[{value:"testnet info sheet",id:"testnet-info-sheet",children:[]}]}],u={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"snapr-mainnet"},"snapr mainnet"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'the snapr mainnet has been launched in "canary" mode.')," as such it carries the risk of potentially disruptive bugs."),(0,a.kt)("p",null,'while the snapr mainnet is in "canary" mode, the chain may require reset in the event of catastrophic failure.\nonly SNAPR account balances at the time of the failure would carry over to a replacement network.'),(0,a.kt)("h3",{id:"mainnet-info-sheet"},"mainnet info sheet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"| key                 | value                    |\n| ------------------- | ------------------------ |\n| currency            | SNAPR                    |\n| precision           | 18                       |\n| evm chain id        | undefined                |\n| ss58 format         | 42                       |\n| block authoring     | babe                     |\n| finality            | grandpa                  |\n| block time          | 10s                      |\n| block size          | 1.25mb to 3.75mb         |\n| http rpc            | undefined                |\n| websocket           | wss://trillian.snapr.com |\n| websocket           | wss://ford.snapr.net     |\n| websocket           | wss://arthur.snapr.org   |\n")),(0,a.kt)("h2",{id:"snapr-testnet"},"snapr testnet"),(0,a.kt)("p",null,"snapr testnet is a common playground for deploying and testing defi apps. it is\nrecommended to first deploy apps on the testnet before launching on mainnet."),(0,a.kt)("p",null,'{{< alert icon="\u26a0\ufe0f" text="snapr testnet tokens have no value and may be destroyed on testnet upgrades." >}}'),(0,a.kt)("h3",{id:"testnet-info-sheet"},"testnet info sheet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"| key                 | value            |\n| ------------------- | ---------------- |\n| currency            | SNAPR            |\n| precision           | 18               |\n| evm chain id        | undefined        |\n| ss58 format         | 42               |\n| block authoring     | babe             |\n| finality            | grandpa          |\n| block time          | 10s              |\n| block size          | 1.25mb to 3.75mb |\n| http rpc            | undefined        |\n| websocket           | undefined        |\n")))}d.isMDXComponent=!0}}]);