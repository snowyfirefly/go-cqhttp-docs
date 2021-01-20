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
    "revision": "9869261dc08be8280186ce1cecd53adc"
  },
  {
    "url": "api/index.html",
    "revision": "8be6734982e2267169ee537be24e4dfc"
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
    "url": "assets/js/10.58e63558.js",
    "revision": "0bc505c82d5607827a8d0a68d6d74f0d"
  },
  {
    "url": "assets/js/11.77db3ebf.js",
    "revision": "668288e61129154ead76cd6113f1985a"
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
    "url": "assets/js/19.f4986f2d.js",
    "revision": "561950d54da032dcc79e8634d2bb1c7f"
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
    "url": "assets/js/9.ef47819a.js",
    "revision": "7cd5948494c4e6d7927cf12ef06a7366"
  },
  {
    "url": "assets/js/app.18577f3a.js",
    "revision": "2a20c25377ec4c80c6e6f9855040a5f2"
  },
  {
    "url": "cqcode/index.html",
    "revision": "ea8ee7a3056183e77cb088c09abfd475"
  },
  {
    "url": "event/index.html",
    "revision": "e48527ad1211200643bf7c6ace57a940"
  },
  {
    "url": "faq/index.html",
    "revision": "76aa5ccc09ff1fd62b5beed9d6dd803e"
  },
  {
    "url": "faq/slider.html",
    "revision": "a76c66403305b681f62e980141a57d61"
  },
  {
    "url": "guide/achieve.html",
    "revision": "9d983be79d30d5e9719cacc6a820b109"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "17cd9ef0ba81f04c57e4864d617a4678"
  },
  {
    "url": "guide/config.html",
    "revision": "46d77da26b8cf7a1c65e61ba69593bab"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "2071e3a10c2faeaf9d80f452d1dfa92f"
  },
  {
    "url": "guide/file.html",
    "revision": "542af62465d5b6dd59d6c9aee7781c50"
  },
  {
    "url": "guide/index.html",
    "revision": "51b8fbe94dfe104321d73e6c9f247ad5"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "c9d50d8b8979718a2ffb9ceaaffe1d93"
  },
  {
    "url": "index.html",
    "revision": "3ace0660a850722efc583b4490956f90"
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
