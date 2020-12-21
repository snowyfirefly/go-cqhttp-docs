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
    "revision": "d3470112e4b949ba7217ebf0fd94ab7c"
  },
  {
    "url": "api/index.html",
    "revision": "036a5bfff888c0cdd2000c6898355f1a"
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
    "url": "assets/js/10.c7a5bbc5.js",
    "revision": "829ec730a5c1fc42ae60ed2c6c3dc0ae"
  },
  {
    "url": "assets/js/11.0a47ee37.js",
    "revision": "5c460eeb8d4b1c59d319c0bd3ee7c35e"
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
    "url": "assets/js/app.78c7fab9.js",
    "revision": "ac45e43e8948bf1ad88f369bda2aaaeb"
  },
  {
    "url": "cqcode/index.html",
    "revision": "e167b23b45ee7a0748c48f50353fb0a5"
  },
  {
    "url": "event/index.html",
    "revision": "fdfeb3307000e22621737c19fe04642e"
  },
  {
    "url": "faq/index.html",
    "revision": "b6e72a698ecd6ff61a2ce1380afcc04f"
  },
  {
    "url": "guide/achieve.html",
    "revision": "ecf016c2fd6aa9672380d41efc109406"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "8c203ebed5c9618850a70a77c59e897f"
  },
  {
    "url": "guide/config.html",
    "revision": "530aa8adbf0042b8f968f882e616476a"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "b1dfc5b475e6309e8827cc1bdb42d197"
  },
  {
    "url": "guide/file.html",
    "revision": "d1f7875e62b91a0251fa751d7917998f"
  },
  {
    "url": "guide/index.html",
    "revision": "eba638080d821600db595fe33ab578f4"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "7e927591f3760f0f73d7a4e57ffffb0a"
  },
  {
    "url": "index.html",
    "revision": "f2835be1882b716634f3eb87dc09d2e5"
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
