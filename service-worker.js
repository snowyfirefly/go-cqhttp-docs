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
    "revision": "d1c2f926e359478bbf9627f4e7e10af0"
  },
  {
    "url": "api/index.html",
    "revision": "5e1c1447ae3b8c2ae249aca4d0d9847f"
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
    "url": "assets/js/app.6b1d34a0.js",
    "revision": "4c69cf7efebffbadbd63465e8dc1be7c"
  },
  {
    "url": "assets/js/vendors~docsearch.883d461f.js",
    "revision": "1664a34bb6581ffdd1ff8b4f46d79968"
  },
  {
    "url": "cqcode/index.html",
    "revision": "8b45ca79d7696d957bbff5fe90c8ac10"
  },
  {
    "url": "event/index.html",
    "revision": "0ac43b3f235756e5618d9b47ed651db3"
  },
  {
    "url": "faq/index.html",
    "revision": "e233ac841400bf2ef2985eb61c5be39c"
  },
  {
    "url": "faq/slider.html",
    "revision": "cc091f328092a2da138f7a562b351a7b"
  },
  {
    "url": "guide/achieve.html",
    "revision": "3456ec93ba1d0b29047cfe1b5e94c6f9"
  },
  {
    "url": "guide/config.html",
    "revision": "565a95bc4cb97310ef3964706b36473b"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "de513678aaa16cbe727e86adcb64e120"
  },
  {
    "url": "guide/file.html",
    "revision": "cf88a957594ab49e0ed591b43de83d06"
  },
  {
    "url": "guide/index.html",
    "revision": "d5a1def1b23a44aff8797e5d9efdbe3a"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "cf3e957778e6b54037ba31c39685bcf2"
  },
  {
    "url": "index.html",
    "revision": "f0ea546a8a9c696c650118377226314b"
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
