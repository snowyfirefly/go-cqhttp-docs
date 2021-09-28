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
    "revision": "4f6ebe345edca313130c1437ffbd56bf"
  },
  {
    "url": "api/index.html",
    "revision": "4f8dfe5ad0460af3978ef0f3b35ab025"
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
    "url": "assets/js/10.05b70668.js",
    "revision": "1b57b3d269f19aef00759de43ab7f0dd"
  },
  {
    "url": "assets/js/11.263d079e.js",
    "revision": "858cccad72be2946a6114f4384afcf08"
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
    "url": "assets/js/app.35909ff3.js",
    "revision": "6f043aad4c289a7a5df03b0f917a6cd1"
  },
  {
    "url": "assets/js/vendors~docsearch.883d461f.js",
    "revision": "1664a34bb6581ffdd1ff8b4f46d79968"
  },
  {
    "url": "cqcode/index.html",
    "revision": "e64c5bc85821a20e189994695f3a9a07"
  },
  {
    "url": "event/index.html",
    "revision": "489f3b0f4ec987414426c1f129cd22f0"
  },
  {
    "url": "faq/index.html",
    "revision": "002b000ce4748e0390085a96338f907d"
  },
  {
    "url": "faq/slider.html",
    "revision": "6d1bf50b26d091dbbdb730da0e13f58c"
  },
  {
    "url": "guide/achieve.html",
    "revision": "c9e3aa4cf71ed5d6d4ea78ed481474f4"
  },
  {
    "url": "guide/config.html",
    "revision": "ed6a35dc1c93a1d83cfee55acb22ece0"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "b2513765c791a0ec6811bc32175cc19d"
  },
  {
    "url": "guide/file.html",
    "revision": "863385ba3a72a159eae79cfdf118377f"
  },
  {
    "url": "guide/index.html",
    "revision": "d543b068d0e06670bd5d9b65911a952e"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "928e4cceeeedf0e7b16cbfddf1546216"
  },
  {
    "url": "index.html",
    "revision": "a580276495b78c32f6def68f0881d53f"
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
