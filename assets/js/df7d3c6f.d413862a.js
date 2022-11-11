"use strict";(self.webpackChunkrecipesage_docs=self.webpackChunkrecipesage_docs||[]).push([[185],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),a=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=a(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=a(r),h=n,d=f["".concat(p,".").concat(h)]||f[h]||c[h]||i;return r?o.createElement(d,l(l({ref:t},u),{},{components:r})):o.createElement(d,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var a=2;a<i;a++)l[a]=r[a];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var o=r(7462),n=(r(7294),r(3905));const i={title:"People"},l=void 0,s={unversionedId:"tutorials/people/people",id:"tutorials/people/people",title:"People",description:"People &amp; Profile Home",source:"@site/docs/tutorials/people/people.md",sourceDirName:"tutorials/people",slug:"/tutorials/people/",permalink:"/docs/tutorials/people/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/people/people.md",tags:[],version:"current",frontMatter:{title:"People"},sidebar:"tutorialSidebar",previous:{title:"People & Profiles",permalink:"/docs/category/people--profiles"},next:{title:"Your Profile",permalink:"/docs/tutorials/people/your-profile"}},p={},a=[{value:"People &amp; Profile Home",id:"people--profile-home",level:2},{value:"Finding Other Users",id:"finding-other-users",level:2},{value:"Friend Requests",id:"friend-requests",level:2},{value:"Viewing Other User&#39;s Profiles",id:"viewing-other-users-profiles",level:2}],u={toc:a};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"people--profile-home"},"People ","&"," Profile Home"),(0,n.kt)("img",{className:"screenshot",src:"/img/people-friend-requests.png"}),(0,n.kt)("p",null,"Once you set up your profile, the ",(0,n.kt)("a",{parentName:"p",href:"https://recipesage.com/#/people"},"People")," page will allow you to access your profile & settings, add friends, and search for other RecipeSage users.\nYou'll also be able to share individual recipes, all recipes within a label, or even your entire recipe library with friends or the public via ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorials/people/your-profile"},"your profile"),"."),(0,n.kt)("p",null,"Friend invites and friends will show up on this page as seen in the image above.\nTo access these features however, you'll need to first ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorials/people/your-profile"},"set up your profile"),"."),(0,n.kt)("h2",{id:"finding-other-users"},"Finding Other Users"),(0,n.kt)("img",{className:"screenshot",src:"/img/people-add-friend.png"}),(0,n.kt)("p",null,"After you setup your profile, you can find other users profiles by clicking the search button in the bottom right corner of the ",(0,n.kt)("a",{parentName:"p",href:"https://recipesage.com/#/people"},"People")," page.\nThis will bring up the dialogue shown in the image above."),(0,n.kt)("p",null,"This dialogue allows you to search for other users by handle or by email.\nAfter selecting a user, you'll be able to send a friend request, or view the other person's profile."),(0,n.kt)("h2",{id:"friend-requests"},"Friend Requests"),(0,n.kt)("img",{className:"screenshot",src:"/img/people-friend-requests.png"}),(0,n.kt)("p",null,"When you ",(0,n.kt)("a",{parentName:"p",href:"#finding-other-users"},"send a friend request")," to another person, you'll see that pending friend request listed on the ",(0,n.kt)("a",{parentName:"p",href:"https://recipesage.com/#/people"},"People"),' page.\nAt this point, the other user will see a friend request in their people page, and can decide to either accept/deny that invite.\nOnce they accept, you\'ll see that user listed under your "friends" section.'),(0,n.kt)("p",null,"Likewise, you'll see friend requests from other users show up on this page and have the chance to accept or deny their invite."),(0,n.kt)("p",null,"At any point during the friending process, you can click the user's name to open their profile page."),(0,n.kt)("h2",{id:"viewing-other-users-profiles"},"Viewing Other User's Profiles"),(0,n.kt)("img",{className:"screenshot",src:"/img/people-view-profile.png"}),(0,n.kt)("p",null,"Once you click a user on the ",(0,n.kt)("a",{parentName:"p",href:"https://recipesage.com/#/people"},"People")," page, you'll see their profile.\nVia their profile, you can access any recipes or labels they've shared."),(0,n.kt)("p",null,"Keep in mind that a user's profile may appear differently depending on whether you're friends with that user or not.\nIn other words - if you're friends with the user you'll not only see public items, but friends-only items as well."),(0,n.kt)("p",null,"Simply click one of the listed items on their profile (if they have any) to open it.\nTo save a recipe from someone elses profile to your collection, open the recipe that you'd like to save and click the blue button at the bottom of the recipe details page."))}c.isMDXComponent=!0}}]);