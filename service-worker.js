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
    "revision": "1ab8af1de58c274730878fdebd5f4695"
  },
  {
    "url": "api/index.html",
    "revision": "d9ee294d9738a76d1ea48595efaca2b3"
  },
  {
    "url": "assets/css/0.styles.7f7cd3dd.css",
    "revision": "b2f8faf328c502087cfbdb8a50b343b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3737a6b5.js",
    "revision": "3a634dcfcca42430c65f8ceb9b86b802"
  },
  {
    "url": "assets/js/11.f3e23988.js",
    "revision": "55a3bee0dfe0603c9fab1e3707be7a22"
  },
  {
    "url": "assets/js/12.989dc269.js",
    "revision": "62c0cd7c9e8bb3bf0bb656c6593096f9"
  },
  {
    "url": "assets/js/13.630c9955.js",
    "revision": "a06e2a11d291312722c183705304865d"
  },
  {
    "url": "assets/js/14.45c56890.js",
    "revision": "623aaf02eb7de654cc5547eba19414f4"
  },
  {
    "url": "assets/js/15.717132ee.js",
    "revision": "37171d982ed1d57f25988b92796604e6"
  },
  {
    "url": "assets/js/16.391d0ea3.js",
    "revision": "417e8d0442daf0ae8b809355d5d2501f"
  },
  {
    "url": "assets/js/17.c95791b0.js",
    "revision": "cba2adaa0586da02f325e3e8a29ab6ac"
  },
  {
    "url": "assets/js/18.68e09033.js",
    "revision": "59ae4e6682d6b352c6150ea3f293b216"
  },
  {
    "url": "assets/js/19.1df4165c.js",
    "revision": "a757df8bfa131677227af6ab052f695a"
  },
  {
    "url": "assets/js/2.19ce4ea2.js",
    "revision": "c7e0a679ea797f99959413c539e7f40b"
  },
  {
    "url": "assets/js/20.4e99edbd.js",
    "revision": "43cba71f1b038cfc05f36631820ff90c"
  },
  {
    "url": "assets/js/3.1780971e.js",
    "revision": "3c1801f70e773be6c443be26d7751faf"
  },
  {
    "url": "assets/js/4.879ed87c.js",
    "revision": "5a6b5134caf2e163582e406b446616ef"
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
    "url": "assets/js/9.8fa89e76.js",
    "revision": "c8ddda4c6151aaad8b0ab344665f423c"
  },
  {
    "url": "assets/js/app.6e9b4751.js",
    "revision": "6f093722a614b48c7516dcd707b38bec"
  },
  {
    "url": "cqcode/index.html",
    "revision": "b140f509b08783e0a77928d3150d9e78"
  },
  {
    "url": "event/index.html",
    "revision": "a3f84df59f3cfa286209997309bb6aec"
  },
  {
    "url": "faq/index.html",
    "revision": "0c888f8352b6450392077c52f7c2ac81"
  },
  {
    "url": "guide/achieve.html",
    "revision": "cf219bab32612dc3ff3423a735193f03"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "33193a36d87e1e5c1959393b3f245718"
  },
  {
    "url": "guide/config.html",
    "revision": "6ecff784a14872ea6f3600bd476a8270"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "42d4ec14448cc4b32b8ab443cfea6ec3"
  },
  {
    "url": "guide/file.html",
    "revision": "3e789c0f3605adbf67bb9208a8cbed34"
  },
  {
    "url": "guide/index.html",
    "revision": "8ed948110ff06d5904f1e376745e1b8a"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "478b4f6064887c6ffbfbf915b10b58f8"
  },
  {
    "url": "index.html",
    "revision": "16ea2c3d3895d8b9a696cd8e9a611c76"
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
