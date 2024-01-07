"use strict";(self.webpackChunkrecipesage_docs=self.webpackChunkrecipesage_docs||[]).push([[745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(g,l(l({ref:t},p),{},{components:n})):o.createElement(g,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={title:"Clip Tool Browser Extension"},l=void 0,a={unversionedId:"tutorials/browser-extension",id:"tutorials/browser-extension",title:"Clip Tool Browser Extension",description:"Installation",source:"@site/docs/tutorials/browser-extension.md",sourceDirName:"tutorials",slug:"/tutorials/browser-extension",permalink:"/docs/tutorials/browser-extension",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/browser-extension.md",tags:[],version:"current",frontMatter:{title:"Clip Tool Browser Extension"},sidebar:"tutorialSidebar",previous:{title:"Usage and Options",permalink:"/docs/tutorials/shopping-lists/usage"},next:{title:"Frequently Asked Questions",permalink:"/docs/tutorials/faq"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Signing In and Getting Started",id:"signing-in-and-getting-started",level:2},{value:"Using the Clip Tool",id:"using-the-clip-tool",level:2},{value:"Auto Field Detection (AutoClipping)",id:"auto-field-detection-autoclipping",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("img",{className:"screenshot",src:"/img/webextension-on-rs.png"}),(0,i.kt)("p",null,"Adding the RecipeSage browser extension allows you to quickly select text from a webpage and save recipes directly to your account via the handy clip tool. You can trigger the clip tool on most websites to grab text and import recipes into your collection."),(0,i.kt)("p",null,"To install the RecipeSage browser extension, you'll need to be using a browser that supports WebExtensions.\nAt the time of writing, this includes Firefox and Google Chrome."),(0,i.kt)("p",null,"If you're using Google Chrome, ",(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/oepplnnfceidfaaacjpdpobnjkcpgcpo"},"click here"),".\nIf you're using Firefox, ",(0,i.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/recipesage/"},"click here"),"."),(0,i.kt)("h2",{id:"signing-in-and-getting-started"},"Signing In and Getting Started"),(0,i.kt)("img",{className:"screenshot",src:"/img/webextension-login.png"}),(0,i.kt)("p",null,"After installing the extension, you'll notice a new icon next to your navbar as pictured above. The first time you click that icon, you'll be prompted to sign in to your RecipeSage account with your RecipeSage credentials.\nYou'll then be shown a short tutorial, and the clip tool will open on the current page. After this, clicking the RecipeSage icon will launch the clip tool immediately."),(0,i.kt)("p",null,"Note: If you don't have a RecipeSage account, you'll need to create one (see \"Register\" in the sidebar).\nNote: The clip tool cannot be activated on certain websites, such as browser settings pages and websites with certain security policies."),(0,i.kt)("h2",{id:"using-the-clip-tool"},"Using the Clip Tool"),(0,i.kt)("img",{className:"screenshot",src:"/img/webextension-body.png"}),(0,i.kt)("p",null,"This is the clip tool. It allows you to quickly select text from a webpage and save recipes directly to your account."),(0,i.kt)("p",null,"To use it, highlight some text on the page using your mouse cursor, then press the button next to the desired field.\nThe text you've selected will be copied into that field, where you can edit or refine the text."),(0,i.kt)("p",null,'To snip an image from the page, the process is slightly different - right click an image on the page, and select the "Snip Image" option. The image source URL will be copied to the image URL field.'),(0,i.kt)("p",null,"After you're done filling in the desired fields, press the \"Save\" button. A popup notification will let you know if the recipe saved successfully or not. If the recipe saved successfully, you'll receive a popup with a link to open the recipe in the full view."),(0,i.kt)("p",null,"Note: Only the title field is required.\nNote: Not all images will be snippable. If you're having trouble with an image, try creating your recipe first, then edit the recipe on RecipeSage.com and add the image afterwards.\nNote: The clip tool is draggable. Click and hold on the icon in the upper left corner to move it anywhere within the page."),(0,i.kt)("h2",{id:"auto-field-detection-autoclipping"},"Auto Field Detection (AutoClipping)"),(0,i.kt)("img",{className:"screenshot",src:"/img/webextension-body-autoclipped.png"}),(0,i.kt)("p",null,"This is what the clip tool looks like when automatic field detection is enabled. To enable automatic field detection, check the box at the top of the click tool and reload the page. Then re-open the clip tool."),(0,i.kt)("p",null,"When auto field detection is enabled, the clip tool will do it's best to find recognized fields within the page content. When it detects corresponding content, it will automatically fill in the associated field."),(0,i.kt)("p",null,"This isn't perfect, unfortunately. Since every website is different, there is no \"standard\" way to recognize recipe content. The clip tool does it's best to find common fields and naming conventions, but will sometimes get it wrong."),(0,i.kt)("p",null,"If the clip tool gets a field wrong, you can always select a different block of text on the page and hit the snip button next to that field. The field will then be overwritten with your selection."))}u.isMDXComponent=!0}}]);