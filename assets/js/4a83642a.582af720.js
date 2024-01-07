"use strict";(self.webpackChunkrecipesage_docs=self.webpackChunkrecipesage_docs||[]).push([[797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,h=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Settings"},o=void 0,s={unversionedId:"tutorials/settings/settings",id:"tutorials/settings/settings",title:"Settings",description:"The options documented here apply to the Side Menu -> Settings page, available via the side menu.",source:"@site/docs/tutorials/settings/settings.md",sourceDirName:"tutorials/settings",slug:"/tutorials/settings/",permalink:"/docs/tutorials/settings/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/settings/settings.md",tags:[],version:"current",frontMatter:{title:"Settings"},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/tutorials/faq"},next:{title:"Account Settings",permalink:"/docs/tutorials/settings/account"}},l={},c=[{value:"Contributing a Language",id:"contributing-a-language",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The options documented here apply to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Side Menu -> Settings")," page, available via the side menu."),(0,r.kt)("h1",{id:"enable-split-pane-view-on-large-screens"},"Enable Split Pane View on Large Screens"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," This option will not appear on devices with smaller screens."),(0,r.kt)("p",null,"When enabled, and when on a large device such as a laptop, desktop, or large tablet, the app will change from this:"),(0,r.kt)("img",{className:"screenshot",src:"/img/settings.png"}),(0,r.kt)("p",null,"to:"),(0,r.kt)("img",{className:"screenshot",src:"/img/settings-split-pane.png"}),(0,r.kt)("h1",{id:"theme"},"Theme"),(0,r.kt)("p",null,"The theme setting allows you to change visual appearance in the app to enhance readability. By default, the app will detect your system preference (dark/light) and adjust accordingly. You can override that behavior by changing this preference."),(0,r.kt)("h1",{id:"language"},"Language"),(0,r.kt)("p",null,"The language setting allows you to change the app's interface language. By default, the app will detect your borwser's language preference and adjust accordingly. You can override the language that RecipeSage uses via this menu."),(0,r.kt)("h2",{id:"contributing-a-language"},"Contributing a Language"),(0,r.kt)("p",null,"Although I'm unfortunately only fluent in English, I welcome anyone wishing to contribute a language!"),(0,r.kt)("p",null,"Translations can be contributed via the RecipeSage Weblate instance at ",(0,r.kt)("a",{parentName:"p",href:"https://weblate.recipesage.com"},"https://weblate.recipesage.com"),". Simply create an account with your email address or Github account and begin translating in your preferred language. Your changes will be included in the next release. "),(0,r.kt)("p",null,"Entirely AI-generated translations are not currently accepted, since they very frequently produce low-quality and inaccurate results. If using AI to assist in your translation efforts, please use DeepL or Google Translate - do not translate using ChatGPT."),(0,r.kt)("h1",{id:"font-size"},"Font Size"),(0,r.kt)("p",null,"The font size setting allows you to change the app's global font size. By default, the app will detect your browser's font size preference and adjust accordingly. You can override the font size that RecipeSage uses via this menu."),(0,r.kt)("h1",{id:"reset-all-preferences"},"Reset All Preferences"),(0,r.kt)("p",null,"This button will reset all preferences to their default settings."))}p.isMDXComponent=!0}}]);