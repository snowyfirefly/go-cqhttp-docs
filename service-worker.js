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
    "revision": "a48fc3660e6e301e4cfb65b004338b9b"
  },
  {
    "url": "api/index.html",
    "revision": "2157b2a02c0ad524bfe8c31c9b65105b"
  },
  {
    "url": "assets/css/0.styles.0ae13862.css",
    "revision": "16ce0796cecc40e4fda4dd782067a179"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1219a900.js",
    "revision": "7682428f6e87461952f20dbe0e8c3d91"
  },
  {
    "url": "assets/js/11.621d9673.js",
    "revision": "f3544fad52f84911c3e0ea9d7b88995b"
  },
  {
    "url": "assets/js/12.f65b11de.js",
    "revision": "ad32aeecf03c66aa81e3f1b0f60b974d"
  },
  {
    "url": "assets/js/13.0df1e820.js",
    "revision": "9e3b09682163e6aa06b17f100613639f"
  },
  {
    "url": "assets/js/14.a362c552.js",
    "revision": "955af60c966682b4bf316842d41185c2"
  },
  {
    "url": "assets/js/15.111d4bd9.js",
    "revision": "eda3b2a8d249ad30b87880ca980d34f6"
  },
  {
    "url": "assets/js/16.7b37b56b.js",
    "revision": "98cf232fd255f881780d60c1cbc729c9"
  },
  {
    "url": "assets/js/17.a8662e5e.js",
    "revision": "edb100f3450ac26be40a29d8243d0b8e"
  },
  {
    "url": "assets/js/18.e4d8bab3.js",
    "revision": "ff292f82d6cd8302bcfd3483d23c09ca"
  },
  {
    "url": "assets/js/19.18f6c794.js",
    "revision": "7bc53089bbd8fd52f8ac122aec1c32a0"
  },
  {
    "url": "assets/js/2.19ce4ea2.js",
    "revision": "c7e0a679ea797f99959413c539e7f40b"
  },
  {
    "url": "assets/js/20.209017b2.js",
    "revision": "eb3385acf0d0d4146e493e33b118b820"
  },
  {
    "url": "assets/js/21.660d7999.js",
    "revision": "35eb64a48b4d605a4c835eee96874c42"
  },
  {
    "url": "assets/js/3.1780971e.js",
    "revision": "3c1801f70e773be6c443be26d7751faf"
  },
  {
    "url": "assets/js/4.63135e2d.js",
    "revision": "4e115195dc436320e2bcf0342173421b"
  },
  {
    "url": "assets/js/5.de591e44.js",
    "revision": "d3732dae7a4531bc698c8690abf48d89"
  },
  {
    "url": "assets/js/6.18475150.js",
    "revision": "d4fdb11593032342cfb1db2d3e91f806"
  },
  {
    "url": "assets/js/7.6d1bb3b8.js",
    "revision": "703b7afbcc4bfa3c0f76b80a7effb6bf"
  },
  {
    "url": "assets/js/8.9ff544e4.js",
    "revision": "fe9b4648660516c00d083dbd187bbd88"
  },
  {
    "url": "assets/js/9.76f2618f.js",
    "revision": "b4578ef68f1c19ce7eb790e366ff84ec"
  },
  {
    "url": "assets/js/app.01e1588d.js",
    "revision": "17bfcf5d93884e8c4b56bd7e45baf2d2"
  },
  {
    "url": "cqcode/index.html",
    "revision": "0fcf300e65ac396cbacdd4ea22bd8cb4"
  },
  {
    "url": "event/index.html",
    "revision": "86264c2d9caecd76075fa8c84ce8573f"
  },
  {
    "url": "faq/index.html",
    "revision": "9374ca367118ec6737263ea685e2214c"
  },
  {
    "url": "faq/slider.html",
    "revision": "6e580f44a851cc89b5a456f9bea6d091"
  },
  {
    "url": "guide/achieve.html",
    "revision": "6b6a82aa2b09f1effb834a1e953175d6"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "b17d9fa04459de24345a623b4c8ab0a8"
  },
  {
    "url": "guide/config.html",
    "revision": "7817861ecd0fb5e6c7c7dd354f74bcae"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "5d15020f23b8afdeba5c55335f19eb6a"
  },
  {
    "url": "guide/file.html",
    "revision": "fe9d90b502837be798b0c6bde7bf1d72"
  },
  {
    "url": "guide/index.html",
    "revision": "38cc9f10061880df874a87daeec12610"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "38144db2f4b48d3cd032babb9f35a8dd"
  },
  {
    "url": "index.html",
    "revision": "8a71bc3b3cb0132df6d74d3a9651c623"
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
