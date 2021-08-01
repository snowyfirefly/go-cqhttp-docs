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
    "revision": "8d7e594f659176eb04eb4d2d01411e74"
  },
  {
    "url": "api/index.html",
    "revision": "14e551e2525b91146756f64c68035cbe"
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
    "url": "assets/js/11.a72ed09c.js",
    "revision": "b39fed5a93a343ae01407be7b7bebe65"
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
    "url": "assets/js/14.97399210.js",
    "revision": "b86bc4c6118cc39c410dd6c058c7adfa"
  },
  {
    "url": "assets/js/15.90d1d766.js",
    "revision": "78b9264b8633b00884042f8a571636c5"
  },
  {
    "url": "assets/js/16.7b37b56b.js",
    "revision": "98cf232fd255f881780d60c1cbc729c9"
  },
  {
    "url": "assets/js/17.fe41e5a9.js",
    "revision": "28234b69152f2acd7e347d385bf56569"
  },
  {
    "url": "assets/js/18.c050f7a2.js",
    "revision": "b293b1374ffd35c63fa36d8da8d93dd2"
  },
  {
    "url": "assets/js/19.d051dcf4.js",
    "revision": "d5867fcb10901c43aaaa19eb7d1c94cd"
  },
  {
    "url": "assets/js/2.19ce4ea2.js",
    "revision": "c7e0a679ea797f99959413c539e7f40b"
  },
  {
    "url": "assets/js/20.0ff7b307.js",
    "revision": "55d696bd76672985f40cbbb94d4f28d0"
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
    "url": "assets/js/9.58bb3be4.js",
    "revision": "055c78cae9e9b339711bfa798f22adc2"
  },
  {
    "url": "assets/js/app.4b2f3777.js",
    "revision": "d4da51f2960e20ac735bff79a3a10fc3"
  },
  {
    "url": "cqcode/index.html",
    "revision": "4738ebeea5877ef21445c6e78d83ed39"
  },
  {
    "url": "event/index.html",
    "revision": "191da1f4500a68eb0241d502f9d3590a"
  },
  {
    "url": "faq/index.html",
    "revision": "d25ea5cb6b608b8ef31dad6a329c26a1"
  },
  {
    "url": "faq/slider.html",
    "revision": "4e0fd55c8d06df31b3569702dab87898"
  },
  {
    "url": "guide/achieve.html",
    "revision": "09b47f81c7b7911c10feadb964bc5bd1"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "5339081647247ecc709ab0c46968bb9b"
  },
  {
    "url": "guide/config.html",
    "revision": "905b7ff550d89bc1ff83fc16535010a2"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "c79b186445597823936a092653ef4fda"
  },
  {
    "url": "guide/file.html",
    "revision": "2eb82603704bfcb0a6f1f5e6624649d7"
  },
  {
    "url": "guide/index.html",
    "revision": "3db27f5f06beb40cd460e34051d28dcc"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "8cc57d40831c6603f3d9c29f2b28e201"
  },
  {
    "url": "index.html",
    "revision": "950a621293e414b9e92a3af3ca9b93c6"
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
