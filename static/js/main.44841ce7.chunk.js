(this.webpackJsonphodo=this.webpackJsonphodo||[]).push([[0],{118:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t),a.d(t,"App",(function(){return z}));var s,c=a(4),i=a.n(c),l=a(98),r=a.n(l),n=a(19),o=a(13),x=a(124),d=a(63),m=new d.InMemoryCache,j=Object(d.createHttpLink)({uri:"https://iohk-mainnet.yoroiwallet.com/api/"}),h=new d.ApolloClient({cache:m,link:j,name:"react-web-client",version:"1.3",queryDeduplication:!1,defaultOptions:{watchQuery:{fetchPolicy:"cache-and-network"}}}),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),i(e),l(e)}))},b=a(100),w=a(101).a.img(s||(s=Object(b.a)(["\n\tmax-height: 96px;\n\tmargin: 0 5px 0 0;\n"]))),u=a(5),p=function(e){var t=e.img,a=e.alt;return Object(u.jsx)(w,{src:t,alt:a,className:"h-8 w-auto"})},g=a.p+"static/media/react-logo.6ce24c58.svg",v=function(e){var t=e.img,a=e.name;return Object(u.jsx)("a",{href:"#none",className:"flex-shrink-0 w-full group block",children:Object(u.jsx)("div",{className:"flex items-center",children:Object(u.jsx)("div",{children:Object(u.jsx)("img",{"data-testid":"image",className:"inline-block h-9 w-9 rounded-full",src:t,alt:a})})})})};function O(){return Object(u.jsx)("nav",{className:"px-4 sm:px-8",children:Object(u.jsx)("div",{className:"max-w-7xl mx-auto",children:Object(u.jsxs)("div",{className:"flex justify-between h-16",children:[Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsx)("div",{className:"flex-shrink-0 flex items-center",children:Object(u.jsxs)(n.b,{to:"/",exact:!0,className:"flex-shrink-0 flex items-center",children:[Object(u.jsx)(p,{img:g,alt:"React Logo"}),Object(u.jsx)("span",{className:"text-black dark:text-white font-medium",children:"Hodo Network"})]})}),Object(u.jsxs)("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[Object(u.jsx)(n.b,{to:"/",exact:!0,className:"text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-300 inline-flex items-center px-1 text-sm font-medium",activeClassName:"text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white",children:"Home"}),Object(u.jsx)(n.b,{to:"/browse",exact:!0,className:"text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-300 inline-flex items-center px-1 text-sm font-medium",activeClassName:"text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white",children:"Browse"})]})]}),Object(u.jsx)("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:Object(u.jsx)(v,{img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",name:"Tom Cook"})})]})})})}function y(e){var t=e.items;return Object(u.jsx)("div",{className:"grid gap-6 lg:grid-cols-5",children:t.map((function(e,t){return Object(u.jsx)(N,{img:e.img,name:e.name,rarity:e.rarity,desc:e.desc,cost:e.cost},t)}))})}function N(e){var t=e.img,a=e.name,s=e.rarity,c=e.desc,i=e.cost,l="";switch(s){case"Rare":l="bg-red-100 text-red-800";break;case"Epic":l="bg-yellow-100 text-yellow-800";break;case"Common":l="bg-blue-100 text-blue-800";break;default:l="bg-gray-100 text-gray-800"}return Object(u.jsxs)(n.b,{to:"/browse",className:"flex flex-col rounded-md shadow overflow-hidden transition-transform duration-300 transform hover:-translate-y-2",children:[Object(u.jsx)("div",{className:"flex-shrink-0",children:Object(u.jsx)("img",{className:"h-36 w-full object-cover",src:t,alt:a})}),Object(u.jsxs)("div",{className:"flex-1 bg-white dark:bg-gray-800 p-4 flex flex-col justify-between",children:[Object(u.jsxs)("div",{className:"flex-1",children:[Object(u.jsx)("p",{className:"text-base font-semibold text-gray-900 dark:text-gray-100",children:a}),Object(u.jsx)("p",{className:"mt-3 text-sm text-gray-500 dark:text-gray-400",children:c})]}),Object(u.jsxs)("div",{className:"mt-6 flex items-center justify-between",children:[Object(u.jsx)("div",{className:"flex-shrink-0",children:Object(u.jsx)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ".concat(l),children:s})}),Object(u.jsxs)("div",{className:"ml-3 text-sm font-medium text-green-700",children:[i," ","AVAX"]})]})]})]})}function M(){return Object(u.jsx)("main",{className:"border-b border-gray-200 dark:border-gray-700 px-4 sm:px-8",children:Object(u.jsxs)("div",{className:"mx-auto max-w-7xl w-full py-8 md:py-12 lg:pt-16 lg:pb-20 text-center lg:text-left",children:[Object(u.jsxs)("h1",{className:"tracking-tight font-extrabold text-gray-900 dark:text-white text-4xl sm:text-5xl xl:text-6xl",children:[Object(u.jsx)("span",{children:"Hodo "}),Object(u.jsx)("span",{className:"text-indigo-600 dark:text-white",children:"Network"})]}),Object(u.jsx)("p",{className:"mt-3 mx-auto text-lg text-gray-500 dark:text-gray-400 sm:text-xl md:mt-5",children:"Welcome to the first marketplace for Georeferenced Non-Fungible Tokens (gNFT)."}),Object(u.jsx)("div",{className:"mt-8 sm:flex sm:justify-center lg:justify-start",children:Object(u.jsx)("div",{className:"rounded-md shadow",children:Object(u.jsx)(n.b,{to:"/browse",className:"w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-6",children:"Start Browsing"})})})]})})}function H(){return Object(u.jsx)("footer",{className:"px-4 sm:px-8",children:Object(u.jsxs)("div",{className:"max-w-7xl mx-auto py-12 md:flex md:items-center md:justify-between",children:[Object(u.jsxs)("div",{className:"flex justify-center space-x-6 md:order-2",children:[Object(u.jsxs)("a",{href:"#none",className:"text-gray-400 hover:text-gray-500",children:[Object(u.jsx)("span",{className:"sr-only",children:"Facebook"}),Object(u.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})]}),Object(u.jsxs)("a",{href:"#none",className:"text-gray-400 hover:text-gray-500",children:[Object(u.jsx)("span",{className:"sr-only",children:"Instagram"}),Object(u.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})})]}),Object(u.jsxs)("a",{href:"#none",className:"text-gray-400 hover:text-gray-500",children:[Object(u.jsx)("span",{className:"sr-only",children:"Twitter"}),Object(u.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(u.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})]}),Object(u.jsxs)("a",{href:"#none",className:"text-gray-400 hover:text-gray-500",children:[Object(u.jsx)("span",{className:"sr-only",children:"GitHub"}),Object(u.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})]}),Object(u.jsxs)("a",{href:"#none",className:"text-gray-400 hover:text-gray-500",children:[Object(u.jsx)("span",{className:"sr-only",children:"Dribbble"}),Object(u.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",clipRule:"evenodd"})})]})]}),Object(u.jsx)("div",{className:"mt-8 md:mt-0 md:order-1",children:Object(u.jsx)("p",{className:"text-center text-base text-gray-400",children:"\xa9 2021 Hodo Network. All rights reserved."})})]})})}var k=a(62);function D(){var e=i.a.useState(!1),t=Object(k.a)(e,2),a=t[0],s=t[1];return Object(u.jsx)("div",{className:"bg-yellow-50 border-b-2 border-yellow-400 p-4 ".concat(a&&"hidden"),children:Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsx)("div",{className:"flex-shrink-0",children:Object(u.jsx)("svg",{className:"h-5 w-5 text-yellow-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),Object(u.jsx)("div",{className:"ml-3",children:Object(u.jsx)("p",{className:"text-sm text-yellow-700",children:"Site is coming soon. You're currently viewing an early prototype."})}),Object(u.jsx)("div",{className:"ml-auto pl-3",children:Object(u.jsx)("div",{className:"-mx-1.5 -my-1.5",children:Object(u.jsxs)("button",{className:"inline-flex bg-yellow-50 rounded-md p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 focus:ring-yellow-600",onClick:function(){return s(!0)},children:[Object(u.jsx)("span",{className:"sr-only",children:"Dismiss"}),Object(u.jsx)("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})})]})})}var B=[{img:"https://images.unsplash.com/photo-1444850321296-e568c6a10d26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=80",name:"United States",rarity:"Epic",desc:"Here is an NFT desc 1.",cost:10},{img:"https://images.unsplash.com/photo-1444850321296-e568c6a10d26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=80",name:"Canada",rarity:"Rare",desc:"Here is an NFT desc 2.",cost:15},{img:"https://images.unsplash.com/photo-1444850321296-e568c6a10d26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=80",name:"South Africa",rarity:"Common",desc:"Here is an NFT desc 3.",cost:5},{img:"https://images.unsplash.com/photo-1444850321296-e568c6a10d26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=80",name:"Guatemala",rarity:"Epic",desc:"Here is an NFT desc 4.",cost:10},{img:"https://images.unsplash.com/photo-1444850321296-e568c6a10d26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=80",name:"Australia",rarity:"Common",desc:"Here is an NFT desc 5.",cost:5}],C=[{img:"https://images.unsplash.com/photo-1551811855-ffc7a84af118?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",name:"Monument 1",rarity:"Epic",desc:"Here is an NFT desc 1.",cost:10},{img:"https://images.unsplash.com/photo-1551811855-ffc7a84af118?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",name:"Monument 2",rarity:"Rare",desc:"Here is an NFT desc 2.",cost:15},{img:"https://images.unsplash.com/photo-1551811855-ffc7a84af118?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",name:"Monument 3",rarity:"Common",desc:"Here is an NFT desc 3.",cost:5},{img:"https://images.unsplash.com/photo-1551811855-ffc7a84af118?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",name:"Monument 4",rarity:"Epic",desc:"Here is an NFT desc 4.",cost:10},{img:"https://images.unsplash.com/photo-1551811855-ffc7a84af118?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",name:"Monument 5",rarity:"Common",desc:"Here is an NFT desc 5.",cost:5}],A=[{img:"https://images.unsplash.com/photo-1592161461911-fe78a33235a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",name:"Cape Town",rarity:"Rare",desc:"Capital City of South Africa.",cost:15},{img:"https://images.unsplash.com/photo-1592161461911-fe78a33235a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",name:"Bangkok",rarity:"Epic",desc:"Capital City of Thailand.",cost:10},{img:"https://images.unsplash.com/photo-1592161461911-fe78a33235a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",name:"Jakarta",rarity:"Epic",desc:"Capital City of Indonesia.",cost:10},{img:"https://images.unsplash.com/photo-1592161461911-fe78a33235a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",name:"Guatemala City",rarity:"Common",desc:"Capital City of Guatemala.",cost:5},{img:"https://images.unsplash.com/photo-1592161461911-fe78a33235a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",name:"Jamestown",rarity:"Common",desc:"Capital City of Saint Helena.",cost:5}],G=A,R=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(M,{}),Object(u.jsxs)("div",{className:"p-4 sm:p-8",children:[Object(u.jsxs)("div",{className:"mt-4 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl",children:[Object(u.jsxs)("div",{className:"flex justify-between mb-6",children:[Object(u.jsx)("h2",{className:"font-bold text-xl dark:text-white",children:"Available in your area"}),Object(u.jsxs)(n.b,{to:"/browse",className:"text-indigo-700 font-medium flex",children:[Object(u.jsx)("span",{className:"whitespace-nowrap",children:"View All"}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]}),B.length>0?Object(u.jsx)(y,{items:G}):Object(u.jsx)("div",{children:"No gNFTs available in your area."})]}),B.length>0&&Object(u.jsxs)("div",{className:"mt-12 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl",children:[Object(u.jsxs)("div",{className:"flex justify-between mb-6",children:[Object(u.jsx)("h2",{className:"font-bold text-xl dark:text-white",children:"Countries"}),Object(u.jsxs)(n.b,{to:"/browse",className:"text-indigo-700 font-medium flex",children:[Object(u.jsx)("span",{className:"whitespace-nowrap",children:"View All"}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]}),Object(u.jsx)(y,{items:B})]}),A.length>0&&Object(u.jsxs)("div",{className:"mt-12 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl",children:[Object(u.jsxs)("div",{className:"flex justify-between mb-6",children:[Object(u.jsx)("h2",{className:"font-bold text-xl dark:text-white",children:"Capital Cities"}),Object(u.jsxs)(n.b,{to:"/browse",className:"text-indigo-700 font-medium flex",children:[Object(u.jsx)("span",{className:"whitespace-nowrap",children:"View All"}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]}),Object(u.jsx)(y,{items:A})]}),C.length>0&&Object(u.jsxs)("div",{className:"mt-12 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl",children:[Object(u.jsxs)("div",{className:"flex justify-between mb-6",children:[Object(u.jsx)("h2",{className:"font-bold text-xl dark:text-white flex-shrink-0",children:"Monuments"}),Object(u.jsxs)(n.b,{to:"/browse",className:"text-indigo-700 font-medium flex",children:[Object(u.jsx)("span",{className:"whitespace-nowrap",children:"View All"}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]}),Object(u.jsx)(y,{items:C})]})]})]})};function V(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"p-4 lg:p-6",children:Object(u.jsx)("p",{children:"Page for Browse."})})})}a(118);var z=function(){return Object(u.jsxs)(n.a,{children:[Object(u.jsx)(D,{}),Object(u.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-900",children:[Object(u.jsx)(O,{}),Object(u.jsx)("div",{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:R}),Object(u.jsx)(o.a,{path:"/browse",component:V})]})}),Object(u.jsx)(H,{})]})]})};r.a.render(Object(u.jsx)(x.ApolloProvider,{client:h,children:Object(u.jsx)(z,{})}),document.getElementById("root")),f()}},[[121,1,2]]]);
//# sourceMappingURL=main.44841ce7.chunk.js.map