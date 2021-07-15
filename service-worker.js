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
    "revision": "75294e37a1366fdb62f34130c2cfbb4a"
  },
  {
    "url": "api/index.html",
    "revision": "83c12ac5d7f4aa977aab4d03d8738a3c"
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
    "url": "assets/js/17.d79469da.js",
    "revision": "56127c45c5bfe4c6ca40932dde715a9b"
  },
  {
    "url": "assets/js/18.371615cf.js",
    "revision": "0ebad3939fa279c00d38272c2cef5b14"
  },
  {
    "url": "assets/js/19.09316608.js",
    "revision": "56e3283c9ab05f6959e9dfbabaa66ae4"
  },
  {
    "url": "assets/js/2.19ce4ea2.js",
    "revision": "c7e0a679ea797f99959413c539e7f40b"
  },
  {
    "url": "assets/js/20.c8dc273f.js",
    "revision": "5c464608ae8314b0fc308fc8cac7a26d"
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
    "url": "assets/js/9.58bb3be4.js",
    "revision": "055c78cae9e9b339711bfa798f22adc2"
  },
  {
    "url": "assets/js/app.96c9b8c6.js",
    "revision": "78f512910e2ace9910151e38b597293b"
  },
  {
    "url": "cqcode/index.html",
    "revision": "c695c7b75ce6c2b8a030990e5bc51106"
  },
  {
    "url": "event/index.html",
    "revision": "244c17906013f8bb097b3e8398a1b420"
  },
  {
    "url": "faq/index.html",
    "revision": "82b787aeefb0ff1f0f11ae5ca494b120"
  },
  {
    "url": "faq/slider.html",
    "revision": "c6844c4dd6fb175e8bd4754e8bb4365a"
  },
  {
    "url": "guide/achieve.html",
    "revision": "7fc6a2a042c966710ff14acafcec79dc"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "bf16369a39490d3d304a602ab1ce0bff"
  },
  {
    "url": "guide/config.html",
    "revision": "6dc81f256943efccc7b65315e583ce3a"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "3d68f19304553dd17609fee8628d86ee"
  },
  {
    "url": "guide/file.html",
    "revision": "fbe254ca09b8d62d772ad33456c7a4e1"
  },
  {
    "url": "guide/index.html",
    "revision": "1c5f1f435ef98abc5f9401796e8d15b9"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "9efd19db554a0a16715989596a2634dd"
  },
  {
    "url": "index.html",
    "revision": "c7f65512794c5c63744f2f5e5042244e"
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
