"use strict";(self.webpackChunkrecipesage_docs=self.webpackChunkrecipesage_docs||[]).push([[320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=i.createContext({}),c=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,y=h["".concat(a,".").concat(d)]||h[d]||u[d]||o;return r?i.createElement(y,l(l({ref:t},p),{},{components:r})):i.createElement(y,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const o={title:"My Recipes"},l=void 0,s={unversionedId:"tutorials/recipes/my-recipes",id:"tutorials/recipes/my-recipes",title:"My Recipes",description:"Welcome to the main page of RecipeSage! This is where most of the action happens. Here you can search, sort and filter for the recipes you're looking for.",source:"@site/docs/tutorials/recipes/my-recipes.md",sourceDirName:"tutorials/recipes",slug:"/tutorials/recipes/my-recipes",permalink:"/docs/tutorials/recipes/my-recipes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/recipes/my-recipes.md",tags:[],version:"current",frontMatter:{title:"My Recipes"},sidebar:"tutorialSidebar",previous:{title:"Creating & Editing",permalink:"/docs/tutorials/recipes/edit-recipe"},next:{title:"Recipe Details",permalink:"/docs/tutorials/recipes/recipe-details"}},a={},c=[{value:"Main Screen",id:"main-screen",level:2},{value:"Search",id:"search",level:3},{value:"Options Menu",id:"options-menu",level:2},{value:"Bulk Actions",id:"bulk-actions",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the main page of RecipeSage! This is where most of the action happens. Here you can search, sort and filter for the recipes you're looking for."),(0,n.kt)("h2",{id:"main-screen"},"Main Screen"),(0,n.kt)("img",{className:"screenshot",src:"/img/home.png"}),(0,n.kt)("p",null,"To create a recipe, you'll need to click that big blue button in the bottom right hand corner. That will take you to the recipe authoring page."),(0,n.kt)("p",null,"To open a recipe from the my recipes page, click that recipe. This will take you to the recipe details page for that recipe."),(0,n.kt)("p",null,"If you'd like to open a recipe in a new tab, you can hold the control key (Windows and Linux) or command key (Mac) as you click a recipe."),(0,n.kt)("h3",{id:"search"},"Search"),(0,n.kt)("p",null,"You can enter any text into the search bar and RecipeSage will try to find the closest results to your search query. The search includes the recipe's title, as well as all other fields within the recipe."),(0,n.kt)("p",null,'The search bar returns results that are as "close" to your match as possible, but also includes misspellings and similar words. The closer the result is to your query, the higher up in the search results list it will be.'),(0,n.kt)("h2",{id:"options-menu"},"Options Menu"),(0,n.kt)("img",{className:"screenshot",src:"/img/home-popover.png"}),(0,n.kt)("p",null,"You can use the settings icon in the upper right-hand corner to adjust sort order, filter by label, and enable/disable different visual items."),(0,n.kt)("p",null,"Here is a brief description of what each of these settings do:"),(0,n.kt)("p",null,"Show Labels: When enabled, you'll see a list of labels below the title on each recipe. This setting is visual only."),(0,n.kt)("p",null,"Show Label Toggles: When enabled, you'll see buttons for each of your labels at the top of your recipe list. You can then select them to filter your recipes by label."),(0,n.kt)("p",null,"Show Images: When enabled, you'll see recipe images. This setting is visual only - useful if you're on a limited data connection."),(0,n.kt)("p",null,"Show Source: When enabled, you'll see the recipe source below the recipe title on each recipe. This setting is visual only."),(0,n.kt)("p",null,"Sort By: Selecting a different sort order will change the order in which recipes appear in the list. This setting is visual only."),(0,n.kt)("p",null,"Filter by Label: Allows you to filter your recipes by assigned labels."),(0,n.kt)("p",null,'Match All Labels: Changes how label filter is applied. Example: When off, filtering by labels "dinner" and "soup" will show recipes that have either of those labels. When on, filtering by labels "dinner" and "soup" will only show recipes that have both of those labels.'),(0,n.kt)("h2",{id:"bulk-actions"},"Bulk Actions"),(0,n.kt)("img",{className:"screenshot",src:"/img/home-bulk-actions.png"}),(0,n.kt)("p",null,'You can select multiple recipes by using the "Select Multiple Recipes" option in the options menu, then tapping the recipes you\'d like to select. Then, use the buttons in the header to create a label for, or delete all of those recipes at the same time.'),(0,n.kt)("p",null,"You can tap a recipe again to deselect it, or press the X in the top left corner to cancel your selection altogether."))}u.isMDXComponent=!0}}]);