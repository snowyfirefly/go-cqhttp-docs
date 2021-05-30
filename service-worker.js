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
    "revision": "023c02faa08e96e5bb37f8eb715ec272"
  },
  {
    "url": "api/index.html",
    "revision": "eb93b2134dc10f92b94ae84c5cb628c9"
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
    "url": "assets/js/10.1219a900.js",
    "revision": "7682428f6e87461952f20dbe0e8c3d91"
  },
  {
    "url": "assets/js/11.d4142c19.js",
    "revision": "19dc0b5d9718e4001e7d8c470c8863f8"
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
    "url": "assets/js/17.0d4a376d.js",
    "revision": "55566c474e22d4709c1f7e2eabc4be34"
  },
  {
    "url": "assets/js/18.371615cf.js",
    "revision": "0ebad3939fa279c00d38272c2cef5b14"
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
    "url": "assets/js/9.749a7642.js",
    "revision": "fad12a2c6f29178bd0c9a724eeb025cb"
  },
  {
    "url": "assets/js/app.7eb2b27e.js",
    "revision": "aa60e23c2ad41acb32a7c8601746e3a9"
  },
  {
    "url": "cqcode/index.html",
    "revision": "70fef55dac7c4aaa0cf801fb9d935188"
  },
  {
    "url": "event/index.html",
    "revision": "0c5027a7894ea42ab46a4213fc09156c"
  },
  {
    "url": "faq/index.html",
    "revision": "d36930214ed775114fd4fd1af506a58f"
  },
  {
    "url": "faq/slider.html",
    "revision": "a58eba056db421da28458ffbfe414213"
  },
  {
    "url": "guide/achieve.html",
    "revision": "1bb3d1ad235fb980a45a4f5cc40c9fa6"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "e3f51570afb88e02ef1140cc37d59c11"
  },
  {
    "url": "guide/config.html",
    "revision": "e59ef7520bb7a4e1927a8454afd997f7"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "dc03a05b4866ce30bbb2097938cfc914"
  },
  {
    "url": "guide/file.html",
    "revision": "4b2be288d4d0230fb7ff7d4bcbb92f88"
  },
  {
    "url": "guide/index.html",
    "revision": "2f798a4db27c0b36c4261b6f8807539a"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "1752483cbbc97d1b01d4f605aed93a6b"
  },
  {
    "url": "index.html",
    "revision": "feac878e82d06a28d08ace3f4f11ca14"
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
