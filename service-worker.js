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
    "revision": "9fa2bd3e7025cfa8e32c5ea04d603f5c"
  },
  {
    "url": "api/index.html",
    "revision": "839b2ced91ffe761f85da4e887e72d69"
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
    "url": "assets/js/9.52bd2859.js",
    "revision": "59a86fe74301cc09f3fb9ab238df049a"
  },
  {
    "url": "assets/js/app.8cc45e35.js",
    "revision": "b822ce4edca4fff31e41f2942be1f8f6"
  },
  {
    "url": "cqcode/index.html",
    "revision": "a7a14aef89562d393c64c561bf87afc9"
  },
  {
    "url": "event/index.html",
    "revision": "f8f29fff92343a0ddac34f8699090855"
  },
  {
    "url": "faq/index.html",
    "revision": "3dee1bba872c2663356da34f002b5fdd"
  },
  {
    "url": "faq/slider.html",
    "revision": "a5dcb4d82bfb453aa2d98cc5d5f4e732"
  },
  {
    "url": "guide/achieve.html",
    "revision": "c3a892c5b5c738230152aaa1753526bb"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "e1ab03a65e82bde2f353455d7009a3eb"
  },
  {
    "url": "guide/config.html",
    "revision": "e3106cd9aa5a3c6cb6d9700398ae39f4"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "deecbc09b117c3f9c9946a60d935dbc1"
  },
  {
    "url": "guide/file.html",
    "revision": "2618c41e1fb70e71a32da3353b12338e"
  },
  {
    "url": "guide/index.html",
    "revision": "00881796110421a8ec0b794118ccb71e"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "2fe3b90baca5b970c40cd90edccdd667"
  },
  {
    "url": "index.html",
    "revision": "50e7c89917608483f97ee9e092ef1c05"
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
