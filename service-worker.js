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
    "revision": "aa51370f2cd39a04d1d69d2664f41f79"
  },
  {
    "url": "api/index.html",
    "revision": "b4ea862174be3c8f70d55233ec6871ee"
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
    "url": "assets/js/9.0a18085c.js",
    "revision": "baf91b2acebc82796de5e245487044f7"
  },
  {
    "url": "assets/js/app.f0321bb7.js",
    "revision": "9430f348531ed08ad11ae698907f686c"
  },
  {
    "url": "cqcode/index.html",
    "revision": "1456d0d1659e5052bb94ae229636dd11"
  },
  {
    "url": "event/index.html",
    "revision": "b4ce35a8382376059849f8ee83b97dcc"
  },
  {
    "url": "faq/index.html",
    "revision": "791dbfc5fc957b02a180cb987ce144c1"
  },
  {
    "url": "faq/slider.html",
    "revision": "4f789405b9f79a0a11e58314a90db37a"
  },
  {
    "url": "guide/achieve.html",
    "revision": "c52f051b0c2d01d3f8cf674efde02871"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "890bd84c47f1053b524e132ce9ce7222"
  },
  {
    "url": "guide/config.html",
    "revision": "4446baec108e5d6afff5076d6d56d7dc"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "8ecf6c9ed232b9129bee862a5f035b58"
  },
  {
    "url": "guide/file.html",
    "revision": "080cf4ea16253bc7388e81f95743ce62"
  },
  {
    "url": "guide/index.html",
    "revision": "3c7bba9367d0e7df63efcfa445ed6a42"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "425ed9911c7b93772e312a12b37060f2"
  },
  {
    "url": "index.html",
    "revision": "8e51f6dc8d31afdf51bd8a2285bc0d05"
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
