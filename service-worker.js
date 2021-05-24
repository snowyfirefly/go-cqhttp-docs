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
    "revision": "2beaf9c18a181d3c769de00950185927"
  },
  {
    "url": "api/index.html",
    "revision": "85eaea0820de6e45cbbf7ca4e0090a53"
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
    "url": "assets/js/10.8fc637c0.js",
    "revision": "cc7d90c7ae3abcb662da1a5c88671631"
  },
  {
    "url": "assets/js/11.40d63338.js",
    "revision": "f6fc5b807680074d646c77d99bb17f6f"
  },
  {
    "url": "assets/js/12.f65b11de.js",
    "revision": "ad32aeecf03c66aa81e3f1b0f60b974d"
  },
  {
    "url": "assets/js/13.0df1e820.js",
    "revision": "9e3b09682163e6aa06b17f100613639f"
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
    "url": "assets/js/17.d2586090.js",
    "revision": "a34d8b7fe0da383f9c8d2e688d4fff37"
  },
  {
    "url": "assets/js/18.c050f7a2.js",
    "revision": "b293b1374ffd35c63fa36d8da8d93dd2"
  },
  {
    "url": "assets/js/19.cc5b0349.js",
    "revision": "fc5347bb5bd968e8e5760c7f3a8c9e3b"
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
    "url": "assets/js/9.98ec7af3.js",
    "revision": "5aae279e2fddffb4f1ad55145a527852"
  },
  {
    "url": "assets/js/app.80c68ae7.js",
    "revision": "826526dfddff1151be6ac1b75343748b"
  },
  {
    "url": "cqcode/index.html",
    "revision": "8c34d4f6723049369e2e12800c5a2dc4"
  },
  {
    "url": "event/index.html",
    "revision": "4a58a1d5b03a7256e51390d8e5ea8792"
  },
  {
    "url": "faq/index.html",
    "revision": "7021e52e078529cf03e7da3a5e99bcab"
  },
  {
    "url": "faq/slider.html",
    "revision": "9d79456937c0a87dee8cc8a4d68e800e"
  },
  {
    "url": "guide/achieve.html",
    "revision": "8127d9792ab66313481e8ebf7202c879"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "e229f8797c6f6120ddb1d5d0d078ecb5"
  },
  {
    "url": "guide/config.html",
    "revision": "91dbd688a7dda76049e7081633d32157"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "6ddee7e952cab391d35fbedc378ea785"
  },
  {
    "url": "guide/file.html",
    "revision": "f308bfc2b2d3d42879569c9722d418e5"
  },
  {
    "url": "guide/index.html",
    "revision": "bf323f838f69b308cba6e60e6222cc6f"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "7e2feb956bdd1512bc778135f2eb63fd"
  },
  {
    "url": "index.html",
    "revision": "e6dc7397b3f22a05911e8ea46f45fe68"
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
