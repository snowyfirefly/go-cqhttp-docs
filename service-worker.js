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
    "revision": "950e53b72bfed6328c8e6543c9d4aa4c"
  },
  {
    "url": "api/index.html",
    "revision": "9b49274e467d2420877a6aa391a8421a"
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
    "url": "assets/js/10.82635b44.js",
    "revision": "e3eb9e173e7ccccb37375d9f3154fcf0"
  },
  {
    "url": "assets/js/11.9147000d.js",
    "revision": "30f3728e6adf945d8c6f409a71d55ee1"
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
    "url": "assets/js/14.311b1ac8.js",
    "revision": "40843127f587ffee10885ba386ab2698"
  },
  {
    "url": "assets/js/15.cc636391.js",
    "revision": "514b8fedc3adc8754619759a7b07ef01"
  },
  {
    "url": "assets/js/16.a60b5e28.js",
    "revision": "958e334d90060d4694ac5a30c3c4ba17"
  },
  {
    "url": "assets/js/17.c964a89e.js",
    "revision": "7ca2d52a488ebefceea230413970af8a"
  },
  {
    "url": "assets/js/18.371615cf.js",
    "revision": "0ebad3939fa279c00d38272c2cef5b14"
  },
  {
    "url": "assets/js/19.cc5b0349.js",
    "revision": "fc5347bb5bd968e8e5760c7f3a8c9e3b"
  },
  {
    "url": "assets/js/2.19ce4ea2.js",
    "revision": "c7e0a679ea797f99959413c539e7f40b"
  },
  {
    "url": "assets/js/20.404cf367.js",
    "revision": "61775c5620bceeb602dad8829e06bf01"
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
    "url": "assets/js/9.3d315fa3.js",
    "revision": "1f8b63f288465aba85c1acac78fecf7a"
  },
  {
    "url": "assets/js/app.5e225349.js",
    "revision": "f075b79861901c7b64d15515c964a119"
  },
  {
    "url": "cqcode/index.html",
    "revision": "f48de51a0b21a8de7210a090230894a4"
  },
  {
    "url": "event/index.html",
    "revision": "015f00e09a0cc5700f938cee99379750"
  },
  {
    "url": "faq/index.html",
    "revision": "adf1bf30e5b3d5654eba1835a88943db"
  },
  {
    "url": "faq/slider.html",
    "revision": "980c93873dcdfc6f81176ea0d2879ae3"
  },
  {
    "url": "guide/achieve.html",
    "revision": "b63a4bcf6a45ac67a282594fad284441"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "aee32f849cbeffbd1e7662c7441f023e"
  },
  {
    "url": "guide/config.html",
    "revision": "c845e9444637d5092098061871bd4e62"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "66f30f09b6fa9b886db22466c9b6a2a8"
  },
  {
    "url": "guide/file.html",
    "revision": "6fe947ee20f782650aa30814ee556d2a"
  },
  {
    "url": "guide/index.html",
    "revision": "5a467551741f26372d5fc10fe0f6f228"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "9e2d07f04bce8d3a0cd554fbe5262439"
  },
  {
    "url": "index.html",
    "revision": "7767072c6ed3593ee087e003968498a0"
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
