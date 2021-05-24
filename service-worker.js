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
    "revision": "e2e47b2874a85fce4f8cf13ed68a667b"
  },
  {
    "url": "api/index.html",
    "revision": "e9df32b02133063e3a7f3d1a8fe5f55f"
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
    "url": "assets/js/11.08c6939c.js",
    "revision": "0ae9590b2bf5bcf045089f2e780a64f6"
  },
  {
    "url": "assets/js/12.989dc269.js",
    "revision": "62c0cd7c9e8bb3bf0bb656c6593096f9"
  },
  {
    "url": "assets/js/13.9f6682ab.js",
    "revision": "000589ff86add0f5788cb85877b8e6b2"
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
    "url": "assets/js/17.84ccbd95.js",
    "revision": "563eec8a8d1a8822eafb21123eb7fee7"
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
    "url": "assets/js/app.9ff48615.js",
    "revision": "dae287b905687ec6345251faa4916d76"
  },
  {
    "url": "cqcode/index.html",
    "revision": "3ea752fe7e34d0153ccbd2e509d42300"
  },
  {
    "url": "event/index.html",
    "revision": "6b31f1d5daac53d22416de4730e441bb"
  },
  {
    "url": "faq/index.html",
    "revision": "5c66d48b3826582979a09fcda5ef4ee8"
  },
  {
    "url": "faq/slider.html",
    "revision": "45942dc5ce969bbe22208af84d8ad3ac"
  },
  {
    "url": "guide/achieve.html",
    "revision": "fc407e730bef5ef86e000977cb8b5f6d"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "22267fedab951d3305baa9850e5261dd"
  },
  {
    "url": "guide/config.html",
    "revision": "6bb889b35e1347a5add668c0b5e863e6"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "5addac59604247c0174c9f861b2e25ee"
  },
  {
    "url": "guide/file.html",
    "revision": "e0e21e1fe9a6e8dd0535be8d3ba8acef"
  },
  {
    "url": "guide/index.html",
    "revision": "f618a8da0dbd98e058d6598711bd6f84"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "dbb8c92130bbde04c5e805e8992f882f"
  },
  {
    "url": "index.html",
    "revision": "6488d84e34e8c599d899618825beea7a"
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
