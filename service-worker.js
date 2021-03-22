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
    "revision": "b582f2ab6160ada5f52e968451e76c00"
  },
  {
    "url": "api/index.html",
    "revision": "b2c4541013c9aed252effe8a89e0bc49"
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
    "url": "assets/js/10.ca6e0729.js",
    "revision": "0c2d6b9b7f78d5b26b3b16ab37592ca3"
  },
  {
    "url": "assets/js/11.8face41b.js",
    "revision": "3693409dc482d53719c2219c9415835c"
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
    "url": "assets/js/17.8dbd8720.js",
    "revision": "eb22c3ba9873ce77be42a548901d8b48"
  },
  {
    "url": "assets/js/18.0691c43d.js",
    "revision": "6e166f305f2805fcef1476308512a150"
  },
  {
    "url": "assets/js/19.1b5824f8.js",
    "revision": "c35f996857d5d2717cff0b49f6cefcfc"
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
    "url": "assets/js/9.76f2618f.js",
    "revision": "b4578ef68f1c19ce7eb790e366ff84ec"
  },
  {
    "url": "assets/js/app.716a7f78.js",
    "revision": "e145eba5695ac38efb7e0706ad51bc19"
  },
  {
    "url": "cqcode/index.html",
    "revision": "8936fb6b0c0786aed91d9147e871ec46"
  },
  {
    "url": "event/index.html",
    "revision": "45554be3ffd364794daba25b967c4ad6"
  },
  {
    "url": "faq/index.html",
    "revision": "6011653f8750352da8d8817e50f14261"
  },
  {
    "url": "faq/slider.html",
    "revision": "9a3748e29b62d51e5d50df8ba6a1b17d"
  },
  {
    "url": "guide/achieve.html",
    "revision": "0d1ef8fd19a6b72162e8d467c65b01cf"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "9fc15b3d2588f0058d439e4fb4dc2622"
  },
  {
    "url": "guide/config.html",
    "revision": "3b49b500a90da6874e5c82b89ed6d071"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "79e6a9995118be0c8614de74f4b844d5"
  },
  {
    "url": "guide/file.html",
    "revision": "c56ebe0928644dbb6a1be07d00e195a6"
  },
  {
    "url": "guide/index.html",
    "revision": "943e08a042fa36271fb89986ca56de3a"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "acf32f59a4babe342a2fa5a809308fe7"
  },
  {
    "url": "index.html",
    "revision": "a6f06bd9e66cbd0bd112e86aec97af11"
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
