if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const o=e=>a(e,r),d={module:{uri:r},exports:c,require:o};s[r]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-98f4dc1a"],(function(e){"use strict";importScripts("fallback-BTcWS16p462uW9D_QehlS.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/BTcWS16p462uW9D_QehlS/_buildManifest.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/BTcWS16p462uW9D_QehlS/_middlewareManifest.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/BTcWS16p462uW9D_QehlS/_ssgManifest.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/655-45effd0243d174b8.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/main-d4b163e992fe43e0.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/404-6bffd87fda3abea4.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/_app-b21539425c11690f.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/_offline-c5e777ae002ae8f5.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/contact-6ee5bd57d21195ad.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/destinations-dafde87b888e8d47.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/destinations/%5B...slug%5D-54058f78e3193406.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/destinations/%5Bcountry%5D-cdc46e5d8209eb56.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/index-804ad99052f3cf2e.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/shop-e1da56265da3f03d.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/pages/sitemap.xml-27b735bd15182889.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/chunks/webpack-c73c491ce588585a.js",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/css/7a7d309bc3972c9f.css",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/css/895d0d25fd687fc8.css",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/css/92978dd3d76ff45e.css",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/css/9e41952b332898ff.css",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/css/acfa68147bf86d9e.css",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/css/b37c831a5acc14b7.css",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/css/df029ab9852d2249.css",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/css/e16b17082f8ee390.css",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/media/logo_sinfronteras-417x150.136f022d.png",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_next/static/media/victoralaluf.b365ddc5.png",revision:"BTcWS16p462uW9D_QehlS"},{url:"/_offline",revision:"BTcWS16p462uW9D_QehlS"},{url:"/favicon.ico",revision:"c085baabee98218db95261c22a8957d8"},{url:"/google0caf3b4e7fa117a8.html",revision:"a8cc7a828f9579d578cec8521e427495"},{url:"/images/background/image4.jpg",revision:"f719848b433845e36c3a1df93dbc238a"},{url:"/images/background/mapa-verde-small.jpg",revision:"28ee16db103e68458eb9d1c005b28e63"},{url:"/images/countries/cambodia/cambodia.jpg",revision:"e436837fd3bd9b8fdefa5c1a2b43a3ad"},{url:"/images/countries/cambodia/flag.png",revision:"dc5ef02633a4dbad2d76cc867e630838"},{url:"/images/countries/israel/flag.png",revision:"7fe18a09a88a4b7a599c0146a77d3178"},{url:"/images/countries/israel/israel.jpg",revision:"1c75a4344781d8eb2f06017848fc9d5e"},{url:"/images/countries/malta/flag.png",revision:"2f7d8a413883bcefc6bad07d68c6ef2a"},{url:"/images/countries/malta/malta.jpg",revision:"a0fbc8abaf21f0a67618b4965141a420"},{url:"/images/countries/myanmar/flag.jpg",revision:"3286cf49d1a463eb0d6f2e77da66f3f5"},{url:"/images/countries/myanmar/myanmar.jpg",revision:"7b79ed855ca32b370901867f86044fd7"},{url:"/images/countries/thailand/flag.png",revision:"bf3f7c1bebd36cd239411140f11114c0"},{url:"/images/countries/thailand/thailand.jpg",revision:"e97bceb8dfd575139ce7c2b65f41f048"},{url:"/images/icons/android-chrome-192x192.png",revision:"50de619f69cb9e639e515f11de7e4636"},{url:"/images/icons/apple-touch-icon.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/icons/favicon-16x16.png",revision:"a6d6390796d0429a1746f2c47207d54e"},{url:"/images/icons/favicon-32x32.png",revision:"76b53168e68079cd94e04b5167ebd737"},{url:"/images/icons/maskable_icon.png",revision:"41075b59ae9f3e09e628c9b954b0c83c"},{url:"/images/icons/maskable_icon_x128.png",revision:"736eafac60a40143b66aa5d6f57552f1"},{url:"/images/icons/maskable_icon_x192.png",revision:"cd37e1f0be4f9fab370809baca9caee5"},{url:"/images/icons/maskable_icon_x48.png",revision:"3bf04a14a8757b1ea1287a0a3961b033"},{url:"/images/icons/maskable_icon_x72.png",revision:"cb11958acb46789b97a2c3d4428951d8"},{url:"/images/icons/maskable_icon_x96.png",revision:"fa41885841f672d2a7e08c5a72bb1a88"},{url:"/images/icons/sinfronteras-128x128.png",revision:"8b63ff89d29e1fc7e6ea2d4142e39d3d"},{url:"/images/icons/sinfronteras-144x144.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/icons/sinfronteras-152x152.png",revision:"312b1a4021c9623bdddae0749f4249f0"},{url:"/images/icons/sinfronteras-16x16.png",revision:"a6d6390796d0429a1746f2c47207d54e"},{url:"/images/icons/sinfronteras-192x192.png",revision:"50de619f69cb9e639e515f11de7e4636"},{url:"/images/icons/sinfronteras-32x32.png",revision:"76b53168e68079cd94e04b5167ebd737"},{url:"/images/icons/sinfronteras-384x384.png",revision:"b5cf3101d27dea7e5813e8dce8915da7"},{url:"/images/icons/sinfronteras-512x512.png",revision:"2e8c22603466135978b18b57ff5068dd"},{url:"/images/icons/sinfronteras-72x72.png",revision:"993f1b34fcceb292a8e64bc88eebf4ae"},{url:"/images/icons/sinfronteras-96x96.png",revision:"d09304ea3b2708b577e79d1b79cd9ae1"},{url:"/images/icons/touch-icon-ipad-retina.png",revision:"39967303da25f7ef6ab808f4f2e6bc60"},{url:"/images/icons/touch-icon-ipad.png",revision:"312b1a4021c9623bdddae0749f4249f0"},{url:"/images/icons/touch-icon-iphone-retina.png",revision:"cfe764982aedbc880bd26a67d50d9b04"},{url:"/images/icons/touch-icon-iphone.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/logo/logo_sinfronteras-417x150.png",revision:"a94f7fa2b9a430dee51145830dc4815a"},{url:"/images/logo/logo_sinfronteras-600x216.png",revision:"60ca0ceb1999fd645fb802d259c2c0e7"},{url:"/images/logo/victoralaluf.png",revision:"20d4625f90ed93d7cebd04105d905b36"},{url:"/images/posters/portada-100-suscriptores.jpg",revision:"dd8bdf7ba7259a6df470c54ec0099596"},{url:"/images/posters/portada-angkor.jpg",revision:"37544ceff4c5912e9ec4d2eb175cd4e3"},{url:"/images/posters/portada-ayutthaya.jpg",revision:"4a6fa4b86d604862418b9cf846be0d87"},{url:"/images/posters/portada-bagan.jpg",revision:"060114cb99109bea48605d678049b3c7"},{url:"/images/posters/portada-bangkok.jpg",revision:"edd964b4771d24d1be61d475fb9b8480"},{url:"/images/posters/portada-chiang-mai.jpg",revision:"4982c34d5fca578124334163bf5ad2e1"},{url:"/images/posters/portada-enp.jpg",revision:"486b58962d646f53aad1dbefc6cb0f64"},{url:"/images/posters/portada-hpa-an.jpg",revision:"cef281c895f93fcbb1ccb6891fba1dae"},{url:"/images/posters/portada-hsipaw.jpg",revision:"acd0e12774627c45f6ce8b52432bd4f3"},{url:"/images/posters/portada-il-north.jpg",revision:"b4b9b8d6e2cc697aca249e0f3764d2d6"},{url:"/images/posters/portada-jerusalen-dia1.jpg",revision:"728a4c3cc493bdceb2ef1db3883d9330"},{url:"/images/posters/portada-jerusalen-dia2.jpg",revision:"56dd64cf451730c66493e80d6a41b4cf"},{url:"/images/posters/portada-jerusalen-dia3.jpg",revision:"1ac228e3bdb2ceced77eb67137b370ea"},{url:"/images/posters/portada-kineret.jpg",revision:"116884cc937c95418ce17c478479cced"},{url:"/images/posters/portada-kyaiktiyo.jpg",revision:"aedc9ecbc7f3ce6b5c88b04b87a8d972"},{url:"/images/posters/portada-la-vida-es-un-viaje.jpg",revision:"4bfb7eafe24e7b3b00b584d3b5fe886b"},{url:"/images/posters/portada-lago-inle.jpg",revision:"603daf29bf14533d070178b8398d1096"},{url:"/images/posters/portada-mandalay.jpg",revision:"1a9dae30b1d7241dacd04e918c98aebf"},{url:"/images/posters/portada-myanmar.jpg",revision:"60f4ae54379f5757780d7cbf5e200e08"},{url:"/images/posters/portada-negev.jpg",revision:"3fe973d8c612a98e82bddb641ae47e38"},{url:"/images/posters/portada-sukhothai.jpg",revision:"6c0c9662d493bbcb076b436bc1f72c7d"},{url:"/images/posters/portada-tel-aviv.jpg",revision:"e4c95b850ed503ee408854e74c9fc20c"},{url:"/images/posters/portada-udon-thani.jpg",revision:"8caee9a8b556faaf169bfa82788c44c2"},{url:"/images/posters/portada-valeta-dia1.jpg",revision:"32f5d1e961039afecc8fe051afafa4cd"},{url:"/images/posters/portada-valeta-dia2.jpg",revision:"13a97a3727c0ee9065254bf3da18fa1c"},{url:"/images/posters/portada-valeta-dia3.jpg",revision:"2bfe63f4383c34022ce4d2f69875d9ca"},{url:"/images/posters/portada-yangon-dia1.jpg",revision:"9c3ca28c61c92b0fd94e5a9491e52bfb"},{url:"/images/posters/portada-yangon-dia2.jpg",revision:"223c407101e06ed5b306535c3e279e04"},{url:"/images/posters/portada-yangon-dia3.jpg",revision:"5702ea09a3edd5161fed90fdc531aef0"},{url:"/images/slides/image1.jpg",revision:"5b8c2d657e2286cfc444d9fa04046f2a"},{url:"/images/slides/image2.jpg",revision:"33e1f183eacdf4bcca25ed18d414bbdc"},{url:"/images/slides/image3.jpg",revision:"7cac351889c89c6284b36a0307429d2f"},{url:"/locales/en-US/comments.json",revision:"1a670d98e1c0bf65c46d45106faf3ed0"},{url:"/locales/en-US/common.json",revision:"6312d1b6cc585bf5800256a8dbf08c63"},{url:"/locales/en-US/contact.json",revision:"6188b493f2d5efbd15d615ab7a2aec46"},{url:"/locales/en-US/destination.json",revision:"6217fb645992fb15fe35a6ab748f3dee"},{url:"/locales/en-US/error.json",revision:"4967c41ca7514f5924ed11776018cf9b"},{url:"/locales/en-US/footer.json",revision:"5d9b2b19c59cf0c8dc25b7f79630aea6"},{url:"/locales/en-US/nav.json",revision:"ed283439dde21846c2c10ec81e480040"},{url:"/locales/en-US/offline.json",revision:"32a5cd06117ba8f8f0d6d38b43586530"},{url:"/locales/en-US/shop.json",revision:"9845a60d9c17af0fb3a60a3a63b619e1"},{url:"/locales/es-AR/comments.json",revision:"3d2d41e5e957a20e66a6d52fa2999e3f"},{url:"/locales/es-AR/common.json",revision:"37d778a9b1b1a0334fedc6d66948fe3c"},{url:"/locales/es-AR/contact.json",revision:"2c140c2f0f503859c9cd1a628d4bbadd"},{url:"/locales/es-AR/destination.json",revision:"d00e1b0ed57007929949619ca08fb9e1"},{url:"/locales/es-AR/error.json",revision:"bb6116d8da99993fe513eb8119b5d555"},{url:"/locales/es-AR/footer.json",revision:"1fa463f055412746bbf3aef97bbc3d65"},{url:"/locales/es-AR/nav.json",revision:"ead831b34d86f697f154b905d54cc1fb"},{url:"/locales/es-AR/offline.json",revision:"5b9a44bdb45b55024f8526f85b491355"},{url:"/locales/es-AR/shop.json",revision:"7847e0d2dac3cfd35aaa3ed9edf80666"},{url:"/manifest.json",revision:"b04a41497c0632aca5dee19994eb3ad2"},{url:"/robots.txt",revision:"301959bf3bda8466e9897287b66337e9"},{url:"/videos/sinfronteras-intro-hd.mp4",revision:"0dc1571d7bee1bb099850b54fedf2abd"},{url:"/videos/sinfronteras-intro-hd.webm",revision:"496a8081b44e368d574bb8f531f66aa5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less|scss)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/api\/comments\//,new e.NetworkOnly({plugins:[new e.BackgroundSyncPlugin("comments",{maxRetentionTime:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"POST"),e.registerRoute(/\/api\/newsletter/,new e.NetworkOnly({plugins:[new e.BackgroundSyncPlugin("newsletter",{maxRetentionTime:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"POST")}));
