/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1014384a2dbe3a4ed93e283a931d7c35"
  },
  {
    "url": "api/index.html",
    "revision": "210eb11e283da4601e9ee09e1b4fd206"
  },
  {
    "url": "assets/css/0.styles.17611693.css",
    "revision": "82218cf1a5f1100514d69560e6764806"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4ac7fa09.js",
    "revision": "8cbfa2b8cb6981bd9a341774680b3e56"
  },
  {
    "url": "assets/js/11.814e98d5.js",
    "revision": "408946b0d1746ce9689d5e9ad8cc0b77"
  },
  {
    "url": "assets/js/12.2e43fcca.js",
    "revision": "51132ca1a8c81a087eb98e12a130d4fd"
  },
  {
    "url": "assets/js/13.aaa12dde.js",
    "revision": "dbc26be51847efa9cd84827ab1b7e833"
  },
  {
    "url": "assets/js/14.89748054.js",
    "revision": "0b2a71084b1c58ed2385fa42178d9ab2"
  },
  {
    "url": "assets/js/15.ae0aa2c1.js",
    "revision": "23bd5b6b40466b7d762013c6f865c5d3"
  },
  {
    "url": "assets/js/16.59ce1df5.js",
    "revision": "6f11faffefd41ba7db317987415dce5f"
  },
  {
    "url": "assets/js/17.0827cb71.js",
    "revision": "f6c52d3c8a437fbafd5ec462de87fdda"
  },
  {
    "url": "assets/js/18.136fccd1.js",
    "revision": "77cf742ee9e5e0e7b6c20d96428ea643"
  },
  {
    "url": "assets/js/19.e6126036.js",
    "revision": "de3640b0191b468fd8f5f10b53740a1e"
  },
  {
    "url": "assets/js/20.349f013e.js",
    "revision": "d5be95f62472b79b4b04e10ace2fede7"
  },
  {
    "url": "assets/js/21.36962ac1.js",
    "revision": "fd5be49f214db9fdfc82228cb07110b9"
  },
  {
    "url": "assets/js/3.20e378fe.js",
    "revision": "e9577650b789dcd64cae4e32566f7aa9"
  },
  {
    "url": "assets/js/4.f74ac343.js",
    "revision": "23b3600463efcc1cc5f56148e4405b7c"
  },
  {
    "url": "assets/js/5.7bd8fca2.js",
    "revision": "e8ea6f7e86a0ff95d3078147b1a9587b"
  },
  {
    "url": "assets/js/6.b2c878b0.js",
    "revision": "ad2d7f6a414a68f1e71f40faa23aae44"
  },
  {
    "url": "assets/js/7.ed887b24.js",
    "revision": "5152b05ef60bc293e118ca81d6d716b4"
  },
  {
    "url": "assets/js/8.c99d9b08.js",
    "revision": "86bbd433f64b39cf51ef437265373cd8"
  },
  {
    "url": "assets/js/9.83a87485.js",
    "revision": "e2156308e93ca7da39d9274c377bb579"
  },
  {
    "url": "assets/js/app.b500ad12.js",
    "revision": "14922b82056223baab7a25f11201306b"
  },
  {
    "url": "assets/js/vendors~docsearch.883d461f.js",
    "revision": "1664a34bb6581ffdd1ff8b4f46d79968"
  },
  {
    "url": "cqcode/index.html",
    "revision": "1b548062699a733342b24934e54c16c1"
  },
  {
    "url": "event/index.html",
    "revision": "bdab666618a3381975a4764900670b2b"
  },
  {
    "url": "faq/index.html",
    "revision": "7a6ce43bcf6964f19a414d9eb384ce76"
  },
  {
    "url": "faq/slider.html",
    "revision": "c1734b249574af0217c0438beb8ab111"
  },
  {
    "url": "guide/achieve.html",
    "revision": "fbdcf951b1ab1d9e75e16f8f65e330b6"
  },
  {
    "url": "guide/config.html",
    "revision": "56203c011ac74e1808c862dc83ce19fe"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "9714e716aa2ac8af01cdb2f4d6d2e6e2"
  },
  {
    "url": "guide/file.html",
    "revision": "096e881f92b9c55a0d04c722824f3e12"
  },
  {
    "url": "guide/index.html",
    "revision": "d296eaa76ae51baf7a68ebbe94327fde"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "7c8ba6a546ba9b468d3adaa89119271a"
  },
  {
    "url": "index.html",
    "revision": "3d7ee7bcdf517e7f33be001d7b6fe31a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
