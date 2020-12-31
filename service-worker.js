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
    "revision": "baa836020889323858b6e11d777f4a58"
  },
  {
    "url": "api/index.html",
    "revision": "cc108ff84cd87c83f6dc4e5ae12e549b"
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
    "url": "assets/js/20.73925751.js",
    "revision": "abaf5d19eebe3b1b0d9d81125ec8e617"
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
    "url": "assets/js/9.6de8c926.js",
    "revision": "08bf36dab7953cd44f9ea0f85e627a26"
  },
  {
    "url": "assets/js/app.c7721430.js",
    "revision": "880f88a4303e74f3cdd6d723bf2cb993"
  },
  {
    "url": "cqcode/index.html",
    "revision": "9c135e6852965b786dd3e9860b11ab6d"
  },
  {
    "url": "event/index.html",
    "revision": "bafd708c93f91c0fbb610187fdbfa29c"
  },
  {
    "url": "faq/index.html",
    "revision": "650246776d53bc05165d1ea270bb90ae"
  },
  {
    "url": "faq/slider.html",
    "revision": "46cc2c6ce16fa4a7e4e19ceceb449e58"
  },
  {
    "url": "guide/achieve.html",
    "revision": "41c06bbacea496daaf7c46d993bcec26"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "b79e3499eb66472b72cfeede847b8df4"
  },
  {
    "url": "guide/config.html",
    "revision": "4189505337e1863917d3513b5f3b02c0"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "7f1e001c73860d657c13a65cddba7d58"
  },
  {
    "url": "guide/file.html",
    "revision": "c171440bf7baad640107e5069f6325ce"
  },
  {
    "url": "guide/index.html",
    "revision": "fc2176c8829bfb44b2c79381dbca8cb6"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "cd1021d6113cbbf0625b9bacab68a25e"
  },
  {
    "url": "index.html",
    "revision": "315b2c183068266610a2a36cd56e3ce5"
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
