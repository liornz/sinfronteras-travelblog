if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts("fallback-4kU6acn1vbYIl6LJ0KvSj.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/4kU6acn1vbYIl6LJ0KvSj/_buildManifest.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/4kU6acn1vbYIl6LJ0KvSj/_ssgManifest.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/456-72669b52e37cb4803186.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/main-87c39c47bc7da8fb5d5e.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/pages/_app-9e8d6b45f5619645f0a5.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/pages/_offline-cafbb6bf43cb08690e38.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/pages/contact-6877f3b75acfda01ae69.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/pages/destinations-40ea3023fa6327d6f6d5.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/pages/destinations/%5B...slug%5D-903eaa3f8d7e86910301.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/pages/destinations/%5Bcountry%5D-6c8359dd89ff84a06f54.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/pages/index-6f76d77828f091e4151c.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/pages/shop-869100f21506fef919ae.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/chunks/webpack-ddd010a953737b6e3536.js",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/css/1ad876b8e31f137b603e.css",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/css/1cd0726c0a4bf02c7f14.css",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/css/898513b5f6d8186ed345.css",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/css/d717abc8a82e999bf7b3.css",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/css/f3db2f1b6cd4fef7f360.css",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/css/fe08b60a0fca2ace7fe2.css",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/css/fe17ef6ba66e7a5a1059.css",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_next/static/image/public/images/logo/logo_sinfronteras-417x150.29ec197163ec9942d7b1fb2a2318efc1.png",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/_offline",revision:"4kU6acn1vbYIl6LJ0KvSj"},{url:"/favicon.ico",revision:"c085baabee98218db95261c22a8957d8"},{url:"/google0caf3b4e7fa117a8.html",revision:"a8cc7a828f9579d578cec8521e427495"},{url:"/images/background/image4.jpg",revision:"4bb91416bc500002ab9aaf1cf7bb0369"},{url:"/images/background/temp/4dcf0fcf514ae72cc890f8b81d3e1307.jpg",revision:"7c7d9d6e5e47b69a400e8de7461a8120"},{url:"/images/background/temp/51656133-white-concrete-wall-texture-background.jpg",revision:"517ad2b7d3881817dcc311d47bad91b3"},{url:"/images/background/temp/Q7RV3C.jpg",revision:"d41bc56077bd058090e5b710467a7f34"},{url:"/images/background/temp/alum-textured-silver.jpg",revision:"8b42f444676003b2d6cb2d9e68789766"},{url:"/images/background/temp/ca6dd739fd375c21da20e5b928fdd2a7.jpg",revision:"4c1ef2f630bb00e7df04c9c0030e540d"},{url:"/images/background/temp/colored_vintage_paper_texture_05_deep_blue.jpg",revision:"81d0319bf4750303c3df5d71c5920d18"},{url:"/images/background/temp/colored_vintage_paper_texture_19_sea_green.jpg",revision:"e14ff63d69198e5e021ca9fd39a3e15f"},{url:"/images/background/temp/grey-multicolor-nourison-area-rugs-491855-64_1000.jpg",revision:"5460dc29fb1f452db5d3eb4cc27d8f3e"},{url:"/images/background/temp/mapa-verde-small.jpg",revision:"28ee16db103e68458eb9d1c005b28e63"},{url:"/images/background/temp/mapa-verde.jpg",revision:"af356109bd6005e3d9ea528066f9152b"},{url:"/images/background/temp/oy8Ifj.jpg",revision:"bd7cd65ecf29798a6c3edc509341a0d5"},{url:"/images/background/temp/s-l400.jpg",revision:"1ca4d782d9e30e2898274208801de0e6"},{url:"/images/background/temp/simple-old-paper-1-transparent.jpg",revision:"2a0154bca5390d59b21527ea17e1b89c"},{url:"/images/countries/cambodia/cambodia.jpg",revision:"e436837fd3bd9b8fdefa5c1a2b43a3ad"},{url:"/images/countries/cambodia/flag.png",revision:"dc5ef02633a4dbad2d76cc867e630838"},{url:"/images/countries/myanmar/flag.jpg",revision:"3286cf49d1a463eb0d6f2e77da66f3f5"},{url:"/images/countries/myanmar/myanmar.jpg",revision:"7b79ed855ca32b370901867f86044fd7"},{url:"/images/countries/thailand/flag.png",revision:"bf3f7c1bebd36cd239411140f11114c0"},{url:"/images/countries/thailand/thailand.jpg",revision:"e97bceb8dfd575139ce7c2b65f41f048"},{url:"/images/icons/android-chrome-192x192.png",revision:"50de619f69cb9e639e515f11de7e4636"},{url:"/images/icons/apple-touch-icon.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/icons/favicon-16x16.png",revision:"a6d6390796d0429a1746f2c47207d54e"},{url:"/images/icons/favicon-32x32.png",revision:"76b53168e68079cd94e04b5167ebd737"},{url:"/images/icons/maskable_icon.png",revision:"5c6850e60b86159070e44062b323ee16"},{url:"/images/icons/sinfrontreas-128x128.png",revision:"8b63ff89d29e1fc7e6ea2d4142e39d3d"},{url:"/images/icons/sinfrontreas-144x144.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/icons/sinfrontreas-152x152.png",revision:"312b1a4021c9623bdddae0749f4249f0"},{url:"/images/icons/sinfrontreas-16x16.png",revision:"a6d6390796d0429a1746f2c47207d54e"},{url:"/images/icons/sinfrontreas-192x192.png",revision:"50de619f69cb9e639e515f11de7e4636"},{url:"/images/icons/sinfrontreas-32x32.png",revision:"76b53168e68079cd94e04b5167ebd737"},{url:"/images/icons/sinfrontreas-384x384.png",revision:"b5cf3101d27dea7e5813e8dce8915da7"},{url:"/images/icons/sinfrontreas-512x512.png",revision:"2e8c22603466135978b18b57ff5068dd"},{url:"/images/icons/sinfrontreas-72x72.png",revision:"993f1b34fcceb292a8e64bc88eebf4ae"},{url:"/images/icons/sinfrontreas-96x96.png",revision:"d09304ea3b2708b577e79d1b79cd9ae1"},{url:"/images/icons/touch-icon-ipad-retina.png",revision:"39967303da25f7ef6ab808f4f2e6bc60"},{url:"/images/icons/touch-icon-ipad.png",revision:"312b1a4021c9623bdddae0749f4249f0"},{url:"/images/icons/touch-icon-iphone-retina.png",revision:"cfe764982aedbc880bd26a67d50d9b04"},{url:"/images/icons/touch-icon-iphone.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/logo/logo_sinfronteras-417x150.png",revision:"a94f7fa2b9a430dee51145830dc4815a"},{url:"/images/logo/logo_sinfronteras-600x216.png",revision:"60ca0ceb1999fd645fb802d259c2c0e7"},{url:"/images/posters/portada-100-suscriptores.jpg",revision:"551ae7d300f9f60709ae60c8c314dd45"},{url:"/images/posters/portada-angkor.jpg",revision:"37544ceff4c5912e9ec4d2eb175cd4e3"},{url:"/images/posters/portada-ayutthaya.jpg",revision:"4a6fa4b86d604862418b9cf846be0d87"},{url:"/images/posters/portada-bagan.jpg",revision:"060114cb99109bea48605d678049b3c7"},{url:"/images/posters/portada-bangkok.jpg",revision:"edd964b4771d24d1be61d475fb9b8480"},{url:"/images/posters/portada-chiang-mai.jpg",revision:"4982c34d5fca578124334163bf5ad2e1"},{url:"/images/posters/portada-enp.jpg",revision:"486b58962d646f53aad1dbefc6cb0f64"},{url:"/images/posters/portada-hpa-an.jpg",revision:"cef281c895f93fcbb1ccb6891fba1dae"},{url:"/images/posters/portada-hsipaw.jpg",revision:"6a4efc78425e961bce13c26f1c21bbd6"},{url:"/images/posters/portada-kyaiktiyo.jpg",revision:"65006d1d76de76f00ab1ec828b427a02"},{url:"/images/posters/portada-la-vida-es-un-viaje.jpg",revision:"4bfb7eafe24e7b3b00b584d3b5fe886b"},{url:"/images/posters/portada-lago-inle.jpg",revision:"603daf29bf14533d070178b8398d1096"},{url:"/images/posters/portada-mandalay.jpg",revision:"ecb248802efe3524b65924d62948e7e0"},{url:"/images/posters/portada-myanmar.jpg",revision:"60f4ae54379f5757780d7cbf5e200e08"},{url:"/images/posters/portada-sukhothai.jpg",revision:"6c0c9662d493bbcb076b436bc1f72c7d"},{url:"/images/posters/portada-udon-thani.jpg",revision:"8caee9a8b556faaf169bfa82788c44c2"},{url:"/images/posters/portada-yangon-dia1.jpg",revision:"9c3ca28c61c92b0fd94e5a9491e52bfb"},{url:"/images/posters/portada-yangon-dia2.jpg",revision:"223c407101e06ed5b306535c3e279e04"},{url:"/images/posters/portada-yangon-dia3.jpg",revision:"5702ea09a3edd5161fed90fdc531aef0"},{url:"/images/slides/image1.jpg",revision:"5b8c2d657e2286cfc444d9fa04046f2a"},{url:"/images/slides/image2.jpg",revision:"33e1f183eacdf4bcca25ed18d414bbdc"},{url:"/images/slides/image3.jpg",revision:"7cac351889c89c6284b36a0307429d2f"},{url:"/manifest.json",revision:"3650d55a6cdeff77bafa9741ed5fcd22"},{url:"/sitemap.xml",revision:"fbe42633062d89a0f79b9c9cea1518c2"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/videos/sinfronteras-intro-hd.mp4",revision:"0dc1571d7bee1bb099850b54fedf2abd"},{url:"/videos/sinfronteras-intro-hd.webm",revision:"496a8081b44e368d574bb8f531f66aa5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
