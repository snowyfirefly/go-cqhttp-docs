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
    "revision": "e3bffe061a8444bfe47f67b9b120ff15"
  },
  {
    "url": "api/index.html",
    "revision": "3407fd4d9dd5558f6e9857ea198b6319"
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
    "url": "assets/js/17.c964a89e.js",
    "revision": "7ca2d52a488ebefceea230413970af8a"
  },
  {
    "url": "assets/js/18.0691c43d.js",
    "revision": "6e166f305f2805fcef1476308512a150"
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
    "url": "assets/js/app.ae5eec5f.js",
    "revision": "4d80d7f4b8a6853154be7722e65c1fa2"
  },
  {
    "url": "cqcode/index.html",
    "revision": "117eb71119394d67a7b708cd3e540840"
  },
  {
    "url": "event/index.html",
    "revision": "9e81d061218974f786c3c8a272ba056b"
  },
  {
    "url": "faq/index.html",
    "revision": "d9d7dc6c9fe850bc9864e9249807d775"
  },
  {
    "url": "faq/slider.html",
    "revision": "5a65ba3950b36cd484cdabde74f802ee"
  },
  {
    "url": "guide/achieve.html",
    "revision": "da558cb761548e5f70c61fe247ee082f"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "f0661130f21f4e7c1cbba6ff99d703e7"
  },
  {
    "url": "guide/config.html",
    "revision": "422b8cb9272520096cb7c9e7fa082e27"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "791bafd19640e98070c23858b7b6accf"
  },
  {
    "url": "guide/file.html",
    "revision": "f47fa69004550680409c747d7ae50394"
  },
  {
    "url": "guide/index.html",
    "revision": "d9023a8715303f33feec9bb5d8aa4d05"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "2775aacdea0eac41c9328b02a5891b80"
  },
  {
    "url": "index.html",
    "revision": "5b4013f080b7c8ce96d876bfc4b3d09e"
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
