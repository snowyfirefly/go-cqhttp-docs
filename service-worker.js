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
    "revision": "ace8fd83ceb071416e26a333dc982ce6"
  },
  {
    "url": "api/index.html",
    "revision": "33900c72ed6c93df286b9780d3ec0406"
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
    "url": "assets/js/10.58e63558.js",
    "revision": "0bc505c82d5607827a8d0a68d6d74f0d"
  },
  {
    "url": "assets/js/11.77db3ebf.js",
    "revision": "668288e61129154ead76cd6113f1985a"
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
    "url": "assets/js/9.ef47819a.js",
    "revision": "7cd5948494c4e6d7927cf12ef06a7366"
  },
  {
    "url": "assets/js/app.eaec8e94.js",
    "revision": "fd44cd12393b7d7c7e696ecfe9310f0c"
  },
  {
    "url": "cqcode/index.html",
    "revision": "b6aba1c2412d05d29a2c903ad52dd320"
  },
  {
    "url": "event/index.html",
    "revision": "f3aeaa07202ca9c82a9d085d602c33e7"
  },
  {
    "url": "faq/index.html",
    "revision": "a27ad80bf7bb3a8a9169c10226ac7f44"
  },
  {
    "url": "faq/slider.html",
    "revision": "5163575d9881b445caa5ad9a2ace8e49"
  },
  {
    "url": "guide/achieve.html",
    "revision": "9770190ccc85231721722c968c226fbf"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "03c6e4315f5b7e494fd4b63777d4a035"
  },
  {
    "url": "guide/config.html",
    "revision": "02e51db81759c5c3265f2a0fcb9720c0"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "f31e5c6dc57def56afa0da9a37975ea3"
  },
  {
    "url": "guide/file.html",
    "revision": "b389a07558ade9aa69a82c81334583df"
  },
  {
    "url": "guide/index.html",
    "revision": "b89f8b868aa6adc32b4226f2771975b9"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "85557f8d240e2f174ad5da17805c383c"
  },
  {
    "url": "index.html",
    "revision": "cbfef304d8d930d2e7c3d279b5293986"
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
