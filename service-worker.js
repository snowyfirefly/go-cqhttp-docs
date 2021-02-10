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
    "revision": "f07cc5e042a026bfe606d0ccc9d034c8"
  },
  {
    "url": "api/index.html",
    "revision": "b87d14945c671fc3ca5675ef5bc80217"
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
    "url": "assets/js/10.d096310b.js",
    "revision": "efe0d8d52b182679b7e441f60477016f"
  },
  {
    "url": "assets/js/11.15655992.js",
    "revision": "3205f55d5da4e65e1aa4f3f46bf5c5cf"
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
    "url": "assets/js/9.9fa106ae.js",
    "revision": "699ab2756deeb762a87635f4bcfe0af2"
  },
  {
    "url": "assets/js/app.d2110d26.js",
    "revision": "55c737bef20c1e1da4cb0e5cc05eb8b5"
  },
  {
    "url": "cqcode/index.html",
    "revision": "e5c4a98b00c4ba753f98eb706ad5ab72"
  },
  {
    "url": "event/index.html",
    "revision": "1aeb78e8dee8a8489848e1b3ec6150c2"
  },
  {
    "url": "faq/index.html",
    "revision": "016926371f1db4c08a6537a754e6c34a"
  },
  {
    "url": "faq/slider.html",
    "revision": "430136dd4e3bf32e250cfce2e993c156"
  },
  {
    "url": "guide/achieve.html",
    "revision": "01f112378387eb40f0cf3ed81589a65f"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "e904fa7b6d73ea9cfe15aefb3bffa007"
  },
  {
    "url": "guide/config.html",
    "revision": "3d208bc87e48fc1ed756807d43b58483"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "b9b065d607b55a81747b4bf97a4b1f2d"
  },
  {
    "url": "guide/file.html",
    "revision": "65ee632b44e58707982dd78879a5cde1"
  },
  {
    "url": "guide/index.html",
    "revision": "69278a87d60eb469558ffc84099db999"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "ddbe473bcf382fac08fa266deea5050d"
  },
  {
    "url": "index.html",
    "revision": "31db4bc834316338adba7f1c423bd362"
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
