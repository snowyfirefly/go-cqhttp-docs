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
    "revision": "37ebd56e879f24b14c112351cd1a06d0"
  },
  {
    "url": "api/index.html",
    "revision": "7d4e55df2dd7b574e84ed45a40a0b773"
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
    "url": "assets/js/11.791be118.js",
    "revision": "9831107064fc0e242264eaac6c950232"
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
    "url": "assets/js/9.e3807d67.js",
    "revision": "437acf8ec8086c0c43ba8b03e02aa277"
  },
  {
    "url": "assets/js/app.4989b216.js",
    "revision": "e8c40605e1ec9bd1a1c505ddfb7f4134"
  },
  {
    "url": "cqcode/index.html",
    "revision": "5c2448c9c513b31552b35e6014203534"
  },
  {
    "url": "event/index.html",
    "revision": "83e1ce57a303f40c7aefdf432353e2c9"
  },
  {
    "url": "faq/index.html",
    "revision": "0e50fbb544561a87e8f28ecd44623879"
  },
  {
    "url": "guide/achieve.html",
    "revision": "42aa1ca182612232df947ea2879b7998"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "065d0804ffb962b448368a4171255e75"
  },
  {
    "url": "guide/config.html",
    "revision": "70a8bd9ed56ae35c9a9299d4870f3e8a"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "830c5667ff553e6127857e1c6f4e523e"
  },
  {
    "url": "guide/file.html",
    "revision": "59dbd7fc6252c5d92d05d23b9def421b"
  },
  {
    "url": "guide/index.html",
    "revision": "1160c49c42670af71a0dd35cff561148"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "0bda441c79cdc379b683fe61c0a82430"
  },
  {
    "url": "index.html",
    "revision": "09735df8f088922c352b11393516653e"
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
