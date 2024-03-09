"use strict";(self.webpackChunkrecipesage_docs=self.webpackChunkrecipesage_docs||[]).push([[951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=c(r),f=l,g=b["".concat(s,".").concat(f)]||b[f]||u[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const a={title:"Label Usage & Filtering"},i=void 0,o={unversionedId:"tutorials/labels/filtering",id:"tutorials/labels/filtering",title:"Label Usage & Filtering",description:"You can use labels to filter recipes when browsing or searching.",source:"@site/docs/tutorials/labels/filtering.md",sourceDirName:"tutorials/labels",slug:"/tutorials/labels/filtering",permalink:"/docs/tutorials/labels/filtering",draft:!1,tags:[],version:"current",frontMatter:{title:"Label Usage & Filtering"},sidebar:"defaultSidebar",previous:{title:"Creating & Assigning Labels to Recipes",permalink:"/docs/tutorials/labels/create"},next:{title:"Manage Existing Labels",permalink:"/docs/tutorials/labels/manage-labels"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can use labels to filter recipes when browsing or searching."),(0,l.kt)("p",null,"To view all recipes within a single label, or within a combination of multiple labels, open the ",(0,l.kt)("a",{parentName:"p",href:"https://recipesage.com/#/list/main"},"\ud83d\udcf1 My Recipes")," page."),(0,l.kt)("img",{className:"screenshot",src:"/img/home-popover.png"}),(0,l.kt)("p",null,'Open the options menu in the top right corner of the My Recipes page and select "Filter by Label".'),(0,l.kt)("p",null,"You can then mark any labels you wish to filter by; the recipe list will only show recipes with the labels you selected. You can further narrow the list by searching."),(0,l.kt)("p",null,'By default, selecting more labels to filter by is inclusive. In other words, selecting multiple labels includes labels with any of the selected labels. If you\'d like to instead have the filter be exclusive, enable the "Match All Labels" toggle. When this option is enabled, selecting additional labels will include only labels that have ',(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"all"))," of the selected labels present."))}u.isMDXComponent=!0}}]);