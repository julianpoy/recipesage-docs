"use strict";(self.webpackChunkrecipesage_docs=self.webpackChunkrecipesage_docs||[]).push([[319],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>g});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=p(i),g=o,h=u["".concat(s,".").concat(g)]||u[g]||c[g]||r;return i?n.createElement(h,l(l({ref:t},m),{},{components:i})):n.createElement(h,l({ref:t},m))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,l=new Array(r);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},821:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var n=i(7462),o=(i(7294),i(3905));const r={title:"Usage and Options"},l=void 0,a={unversionedId:"tutorials/shopping-lists/usage",id:"tutorials/shopping-lists/usage",title:"Usage and Options",description:"This page will cover using the shopping list (other than \ud83d\udcd6 creating items). This includes checking off items, as well as smart grouping options.",source:"@site/docs/tutorials/shopping-lists/usage.md",sourceDirName:"tutorials/shopping-lists",slug:"/tutorials/shopping-lists/usage",permalink:"/docs/tutorials/shopping-lists/usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/shopping-lists/usage.md",tags:[],version:"current",frontMatter:{title:"Usage and Options"},sidebar:"tutorialSidebar",previous:{title:"Creating Shopping Lists and Items",permalink:"/docs/tutorials/shopping-lists/create"},next:{title:"Clip Tool Browser Extension",permalink:"/docs/tutorials/browser-extension"}},s={},p=[{value:"Changing Sort Order",id:"changing-sort-order",level:2},{value:"Printing",id:"printing",level:2},{value:"Grouping",id:"grouping",level:2},{value:"Group Similar Items",id:"group-similar-items",level:3},{value:"Group Items by Category",id:"group-items-by-category",level:3},{value:"Marking Items as Completed",id:"marking-items-as-completed",level:2},{value:"Completed Items",id:"completed-items",level:2},{value:"Restoring Completed Items",id:"restoring-completed-items",level:3},{value:"Deleting Completed Items",id:"deleting-completed-items",level:3},{value:"Deleting Items Immediately",id:"deleting-items-immediately",level:3},{value:"Options",id:"options",level:2}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page will cover using the shopping list (other than ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/shopping-lists/create"},"\ud83d\udcd6 creating items"),"). This includes checking off items, as well as smart grouping options."),(0,o.kt)("h2",{id:"changing-sort-order"},"Changing Sort Order"),(0,o.kt)("p",null,"You can change the order in which items are sorted via the options menu in the top right corner."),(0,o.kt)("h2",{id:"printing"},"Printing"),(0,o.kt)("p",null,"You can print the shopping list via the options menu in the top right corner."),(0,o.kt)("h2",{id:"grouping"},"Grouping"),(0,o.kt)("p",null,"RecipeSage can do a bit of smart grouping of your shopping list items by parsing the text in the item title."),(0,o.kt)("h3",{id:"group-similar-items"},"Group Similar Items"),(0,o.kt)("p",null,'To enable this feature, open the options menu in the top right corner of the shopping list and enable the "group similar items" toggle.'),(0,o.kt)("p",null,'When this option is enabled, RecipeSage will combine any items that appear to be the same ingredient under one header, as well as combining the associated measurements into a "total" measurement. You can use the arrow next to the shopping list group to show each of the real items within the group RecipeSage generated for you.'),(0,o.kt)("p",null,'When enabled, you\'ll see two items such as "1 cup sugar" and "1 tbsp sugar" combined into "1 cup, 1 tablespoon sugar", with an arrow on the right side of the combined item allowing you to view the individual items within if desired.'),(0,o.kt)("h3",{id:"group-items-by-category"},"Group Items by Category"),(0,o.kt)("p",null,'To enable this feature, open the options menu in the top right corner of the shopping list and enable the "group items by category" toggle.'),(0,o.kt)("p",null,'When this option is enabled, RecipeSage will do it\'s best to put your items under their associated category - for instance "dairy". You can expand and collapse these categories by tapping the category title.'),(0,o.kt)("h2",{id:"marking-items-as-completed"},"Marking Items as Completed"),(0,o.kt)("p",null,'To mark items as completed, you can simply check the checkbox next to the item. The item will then be moved to a category at the bottom called "completed items".'),(0,o.kt)("h2",{id:"completed-items"},"Completed Items"),(0,o.kt)("h3",{id:"restoring-completed-items"},"Restoring Completed Items"),(0,o.kt)("p",null,"To restore a completed item, simply uncheck the checkbox next to the item title in the list of completed items. It will then be moved back to the items list."),(0,o.kt)("p",null,'To restore all completed items, click the arrow icon in line with the "completed items" header. If you don\'t see the "completed items" header, you don\'t have any completed items.'),(0,o.kt)("h3",{id:"deleting-completed-items"},"Deleting Completed Items"),(0,o.kt)("p",null,'To delete all completed items permanently, click the trashcan icon in line with the "completed items" header. If you don\'t see the "completed items" header, you don\'t have any completed items.'),(0,o.kt)("h3",{id:"deleting-items-immediately"},"Deleting Items Immediately"),(0,o.kt)("p",null,'If you\'d prefer for items to be instantly deleted rather than being moved to the "completed items" category, you can enable that via the options menu on the shopping list page. Simply enable the "delete upon completion" toggle. Items will be immediately (and permanently) removed when you check them off.'),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("img",{className:"screenshot",src:"/img/shopping-list-options.png"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sort by"),": Allows you to change the sort order of the items shown within the shopping list."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group Items by Category"),": Enabling this toggle will enable the ",(0,o.kt)("a",{parentName:"li",href:"#group-items-by-category"},"\ud83d\udcd6 Group Items by Category")," feature."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group Similar Items"),": Enabling this toggle will enable the ",(0,o.kt)("a",{parentName:"li",href:"#group-similar-items"},"\ud83d\udcd6 Group Similar Items")," feature."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Show ..."),": These options will allow you to turn on/off the information displayed for a more compact view."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delete Upon Completion"),": Enabling this toggle will enable ",(0,o.kt)("a",{parentName:"li",href:"#deleting-items-immediately"},"\ud83d\udcd6 Deleting Items Immediately"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Print"),": This option is covered in the ",(0,o.kt)("a",{parentName:"li",href:"#printing"},"\ud83d\udcd6 Printing")," section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Remove All Items"),": Clicking this button will delete all items on the shopping list."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delete List"),": Clicking this button will delete the shopping list and all associated items.")))}c.isMDXComponent=!0}}]);