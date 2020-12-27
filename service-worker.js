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
    "revision": "0ff192743555cc04ccfa2f081567defa"
  },
  {
    "url": "api/index.html",
    "revision": "0f1f76c3e8a82c0a8ad353268344bf55"
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
    "url": "assets/js/11.00d87601.js",
    "revision": "6b79661390e2302f534f721382cd2db8"
  },
  {
    "url": "assets/js/12.f65b11de.js",
    "revision": "ad32aeecf03c66aa81e3f1b0f60b974d"
  },
  {
    "url": "assets/js/13.470d0e48.js",
    "revision": "1a917011abcf67b338c52e76fe6c8a7e"
  },
  {
    "url": "assets/js/14.4039efc0.js",
    "revision": "162e3d57502ad3a0fde9cc392acafe5b"
  },
  {
    "url": "assets/js/15.c1a7ca24.js",
    "revision": "8acf1f129026ce73c701533142413c92"
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
    "url": "assets/js/9.cceedccd.js",
    "revision": "9fb6d9b34dd35fb58c6ad140f264f350"
  },
  {
    "url": "assets/js/app.ff028155.js",
    "revision": "e52e6ae1edc5857ae2caa0685d0b9557"
  },
  {
    "url": "cqcode/index.html",
    "revision": "e1026331ff7fea06442b1e02baead42c"
  },
  {
    "url": "event/index.html",
    "revision": "f967f218404fd6b8eb08f173071b8eb6"
  },
  {
    "url": "faq/index.html",
    "revision": "9e6e1cd969c027b381a199c3af46169a"
  },
  {
    "url": "guide/achieve.html",
    "revision": "c229b9afd8ef30be4a487956ad9b1858"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "f85c68ad267653134daaa66b42ba6571"
  },
  {
    "url": "guide/config.html",
    "revision": "0078673012b3c80e7a9d0f2ee5bf91fd"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "2c501a7bab85fa81d31eaae767388f67"
  },
  {
    "url": "guide/file.html",
    "revision": "adc9076b2971f52871db6294e944c88a"
  },
  {
    "url": "guide/index.html",
    "revision": "85d3588a404c8b6ef3a7ff12530ab0cb"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "30706945d442fba572283364f2e6b962"
  },
  {
    "url": "index.html",
    "revision": "0f013f528ca7cc9e231919b2aea2dbea"
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
