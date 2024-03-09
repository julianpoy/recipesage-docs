"use strict";(self.webpackChunkrecipesage_docs=self.webpackChunkrecipesage_docs||[]).push([[327],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(o),m=n,h=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1393:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={title:"Contributing"},i=void 0,u={unversionedId:"tutorials/contributing",id:"tutorials/contributing",title:"Contributing",description:"The options documented here apply to the Side Menu -> Contribute page, available via the side menu.",source:"@site/docs/tutorials/contributing.md",sourceDirName:"tutorials",slug:"/tutorials/contributing",permalink:"/docs/tutorials/contributing",draft:!1,tags:[],version:"current",frontMatter:{title:"Contributing"},sidebar:"defaultSidebar",previous:{title:"Clip Tool Browser Extension",permalink:"/docs/tutorials/browser-extension"},next:{title:"Frequently Asked Questions",permalink:"/docs/tutorials/faq"}},l={},s=[{value:"Why Contribute?",id:"why-contribute",level:2},{value:"How to Contribute",id:"how-to-contribute",level:2},{value:"Bonus Features",id:"bonus-features",level:2}],c={toc:s};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The options documented here apply to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Side Menu -> Contribute")," page, available via the side menu."),(0,n.kt)("h2",{id:"why-contribute"},"Why Contribute?"),(0,n.kt)("p",null,"RecipeSage is both open source and free to use. My desire is to keep it that way."),(0,n.kt)("p",null,"I built the platform as a solution to host my family's recipes & shopping lists (specifically, for my mother!), but wanted to share the platform with others who might find it useful. This isn't my job - I'm a software engineer for Mozilla at the moment, but you can read more about me ",(0,n.kt)("a",{parentName:"p",href:"https://recipesage.com/#/about/details"},"\ud83d\udcf1 here"),"."),(0,n.kt)("p",null,"I do impose a few limitations on the features within RecipeSage ",(0,n.kt)("em",{parentName:"p"},"only")," where necessary to make it feasible for me to host financially. It's not my goal to make money off of RecipeSage, but I also can't afford to lose tons of money either! Asking for contributions is the best way for me to keep RecipeSage available for free for all, while covering costs of hosting the platform."),(0,n.kt)("h2",{id:"how-to-contribute"},"How to Contribute"),(0,n.kt)("p",null,"To contribute, open the contribute page via the side menu. Click either ",(0,n.kt)("inlineCode",{parentName:"p"},"monthly")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"one-time")," and select a dollar amount. You can also enter an arbitrary amount."),(0,n.kt)("p",null,"Choosing a one-time contribution will unlock the bonus features mentioned below for one year."),(0,n.kt)("h2",{id:"bonus-features"},"Bonus Features"),(0,n.kt)("p",null,"There are several bonus features that unlock when you contribute. These features are limited to contributors ",(0,n.kt)("em",{parentName:"p"},"only")," because they're particularly costly to host. These bonus features will stay unlocked as long as you're a monthly contributor, or for one year if you choose to contribute one time."),(0,n.kt)("p",null,"Currently, the bonus features that are unlocked by contributing are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Upload images in high resolution. ",(0,n.kt)("a",{parentName:"li",href:"/docs/tutorials/recipes/edit-recipe"},"\ud83d\udcd6 See documentation here"),"."),(0,n.kt)("li",{parentName:"ul"},"Upload multiple images for each recipe. ",(0,n.kt)("a",{parentName:"li",href:"/docs/tutorials/recipes/edit-recipe"},"\ud83d\udcd6 See documentation here"),".")),(0,n.kt)("p",null,"To see the current status of bonus features for your account, visit the account page. ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorials/settings/account#bonus-feature-status"},"\ud83d\udcd6 See the documentation here")))}p.isMDXComponent=!0}}]);