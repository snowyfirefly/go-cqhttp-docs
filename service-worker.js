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
    "revision": "12f8b2eb135b9417ea32e88d8a7c885d"
  },
  {
    "url": "api/index.html",
    "revision": "adf93a6c081a1830e91d526f44bd7085"
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
    "url": "assets/js/10.797e7981.js",
    "revision": "45ef5b97fd2b838ba1d80ca74fb88fa3"
  },
  {
    "url": "assets/js/11.2662cb00.js",
    "revision": "25670a83e56a46e0f9fab170d69c8bf8"
  },
  {
    "url": "assets/js/12.989dc269.js",
    "revision": "62c0cd7c9e8bb3bf0bb656c6593096f9"
  },
  {
    "url": "assets/js/13.cfa92ef9.js",
    "revision": "523f9b3af05724b8a6a6f2ee1f344870"
  },
  {
    "url": "assets/js/14.45c56890.js",
    "revision": "623aaf02eb7de654cc5547eba19414f4"
  },
  {
    "url": "assets/js/15.78b8319c.js",
    "revision": "0d67ec037ee18f2bbe097d52e5d3ca4a"
  },
  {
    "url": "assets/js/16.2735d167.js",
    "revision": "84e2128c3b5810e0949899601bad2d3d"
  },
  {
    "url": "assets/js/17.6677ed48.js",
    "revision": "ed64a93d535b7dda7fe9e42fbb872551"
  },
  {
    "url": "assets/js/18.cc2fc278.js",
    "revision": "6f0b8dc7b1f302223268328cd113da3d"
  },
  {
    "url": "assets/js/19.2af9fe1d.js",
    "revision": "ab95cf9eb0690e81ad63b4637f06b7d6"
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
    "url": "assets/js/9.5cfe2e57.js",
    "revision": "d772ddb4c5ef18e4d34c56324bae4a9e"
  },
  {
    "url": "assets/js/app.65244654.js",
    "revision": "5aeb201a22e08a0e10509d13c6dbdfe5"
  },
  {
    "url": "cqcode/index.html",
    "revision": "3dd51e870892a4598d2cc9dac7b200c1"
  },
  {
    "url": "event/index.html",
    "revision": "005c915c445b7bb3de93a120bbc29e15"
  },
  {
    "url": "faq/index.html",
    "revision": "8ce7dc0c0cb3c8f14223b4b0b11611eb"
  },
  {
    "url": "guide/achieve.html",
    "revision": "97833a99429664a6e689d018980ce94e"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "cb285cacec3d037dd64a7bc28e9f91ed"
  },
  {
    "url": "guide/config.html",
    "revision": "ad40def33ba5566191c56f50e1185eeb"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "085f1f0f68d6d9bc2c29643475c3dc55"
  },
  {
    "url": "guide/file.html",
    "revision": "a6b65c8ea20543e247e4ff5b7b45a398"
  },
  {
    "url": "guide/index.html",
    "revision": "49e0c2b81994acbc3c7a2d50d85b31cc"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "e3adad0d8c518e8939829b200bab12ab"
  },
  {
    "url": "index.html",
    "revision": "96bfb18676fd5a2dda954dc34e60f8f3"
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
