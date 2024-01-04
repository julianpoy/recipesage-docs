"use strict";(self.webpackChunkrecipesage_docs=self.webpackChunkrecipesage_docs||[]).push([[920],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return r?o.createElement(f,i(i({ref:t},m),{},{components:r})):o.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={title:"Importing Data"},i=void 0,p={unversionedId:"tutorials/settings/import",id:"tutorials/settings/import",title:"Importing Data",description:"The options documented here apply to the Side Menu -> Settings -> Import Recipe Data page and the subpages withit.",source:"@site/docs/tutorials/settings/import.md",sourceDirName:"tutorials/settings",slug:"/tutorials/settings/import",permalink:"/docs/tutorials/settings/import",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/settings/import.md",tags:[],version:"current",frontMatter:{title:"Importing Data"},sidebar:"tutorialSidebar",previous:{title:"Exporting Data",permalink:"/docs/tutorials/settings/export"}},l={},s=[{value:"Unsupported Import Sources",id:"unsupported-import-sources",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The options documented here apply to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Side Menu -> Settings -> Import Recipe Data")," page and the subpages withit."),(0,n.kt)("h1",{id:"supported-import-data-sources"},"Supported Import Data Sources"),(0,n.kt)("p",null,"RecipeSage supports importing the following import sources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#importing-from-a-json-ld-file"},"JSON-LD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#importing-from-pepperplate"},"Pepperplate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#importing-from-a-living-cookbook-export"},"Living Cookbook")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#importing-from-a-paprika-export"},"Paprika")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#importing-from-a-cookmate-export"},"Cookmate"))),(0,n.kt)("p",null,"If you have a file in a format not listed here, you're welcome to contact me and I can likely create an importer to support the format ",(0,n.kt)("em",{parentName:"p"},"as long as it's not listed in the unsupported import sources section below"),"."),(0,n.kt)("h2",{id:"unsupported-import-sources"},"Unsupported Import Sources"),(0,n.kt)("p",null,"RecipeSage does not support the following formats because they don't have any structural metadata, which means there's no way to tell what parts of the file are ingredients, instructions, yield, total time, title, etc. or do not have a standard format."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Plain Text (",(0,n.kt)("inlineCode",{parentName:"li"},".txt"),")"),(0,n.kt)("li",{parentName:"ul"},"PDF (",(0,n.kt)("inlineCode",{parentName:"li"},".pdf"),")"),(0,n.kt)("li",{parentName:"ul"},"Microsoft Word (",(0,n.kt)("inlineCode",{parentName:"li"},".doc")," or ",(0,n.kt)("inlineCode",{parentName:"li"},".docx"),")"),(0,n.kt)("li",{parentName:"ul"},"Arbitrary JSON (",(0,n.kt)("inlineCode",{parentName:"li"},".json"),") that did not come from a specific program"),(0,n.kt)("li",{parentName:"ul"},"Arbitrary XML (",(0,n.kt)("inlineCode",{parentName:"li"},".xml"),") that did not come from a specific program")),(0,n.kt)("h1",{id:"importing-from-a-json-ld-file"},"Importing From a JSON-LD File"),(0,n.kt)("p",null,"JSON-LD files are a specific file format that several different recipe softwares export."),(0,n.kt)("p",null,"If your recipe program supports exporting to JSON-LD format, you can import that via this page."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Please note")," that not all files ending in ",(0,n.kt)("inlineCode",{parentName:"p"},".json")," are JSON-LD, since ",(0,n.kt)("inlineCode",{parentName:"p"},".json")," is a very generic file format that comes in many shapes."),(0,n.kt)("p",null,"Please do not attempt the import more than once, or you'll end up with duplicate recipes. If the import does not work, or results in an error, please contact me."),(0,n.kt)("h1",{id:"importing-from-pepperplate"},"Importing From Pepperplate"),(0,n.kt)("p",null,"You can import recipes directly from Pepperplate by entering your account details. You don't need to have an active Pepperplate subscription to perform the import, only your account email and password."),(0,n.kt)("p",null,"Please note that uploading files from a Pepperplate export is not supported, since they do not include structured metadata."),(0,n.kt)("p",null,"Please do not attempt the import more than once, or you'll end up with duplicate recipes. If the import does not work, or results in an error, please contact me."),(0,n.kt)("h1",{id:"importing-from-a-living-cookbook-export"},"Importing From a Living Cookbook Export"),(0,n.kt)("p",null,"You can import recipes exported by Living Cookbook as long as you have one of the following file formats:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LCB (",(0,n.kt)("inlineCode",{parentName:"li"},".lcb"),")"),(0,n.kt)("li",{parentName:"ul"},"FDX (",(0,n.kt)("inlineCode",{parentName:"li"},".fdx"),")"),(0,n.kt)("li",{parentName:"ul"},"FDXZ (",(0,n.kt)("inlineCode",{parentName:"li"},".fdxz"),")")),(0,n.kt)("p",null,"The options listed on the import page are best left as default."),(0,n.kt)("p",null,"Please note that importing from Living Cookbook can take a long time. Please do not attempt the import more than once, otherwise you'll end up with duplicate recipes."),(0,n.kt)("p",null,"If the import does not work, or results in an error, please contact me."),(0,n.kt)("h1",{id:"importing-from-a-paprika-export"},"Importing From a Paprika Export"),(0,n.kt)("p",null,"You can import recipes exported by Paprika by uploading them via this page."),(0,n.kt)("p",null,"Please do not attempt the import more than once, or you'll end up with duplicate recipes. If the import does not work, or results in an error, please contact me."),(0,n.kt)("h1",{id:"importing-from-a-cookmate-export"},"Importing From a Cookmate Export"),(0,n.kt)("p",null,"You can import recipes exported by Cookmate by uploading them via this page."),(0,n.kt)("p",null,"Please do not attempt the import more than once, or you'll end up with duplicate recipes. If the import does not work, or results in an error, please contact me."))}u.isMDXComponent=!0}}]);