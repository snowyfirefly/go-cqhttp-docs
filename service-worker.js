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
    "revision": "466f33b54c861f38496d78583173fcbb"
  },
  {
    "url": "api/index.html",
    "revision": "ce54453e84ecc4feed32e253860c2a7b"
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
    "url": "assets/js/10.d8506c61.js",
    "revision": "fe0b52adff65527f4c39be8c7f45616c"
  },
  {
    "url": "assets/js/11.148b30e2.js",
    "revision": "2fa7b5d8e715af27cdf14dcc298c7691"
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
    "url": "assets/js/14.a18c7a45.js",
    "revision": "625f63f652eeec36875c3b94789144f6"
  },
  {
    "url": "assets/js/15.111d4bd9.js",
    "revision": "eda3b2a8d249ad30b87880ca980d34f6"
  },
  {
    "url": "assets/js/16.7b37b56b.js",
    "revision": "98cf232fd255f881780d60c1cbc729c9"
  },
  {
    "url": "assets/js/17.ddb0054a.js",
    "revision": "edf84c71d190ae8555bacd3068235b79"
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
    "url": "assets/js/9.2bf8dc67.js",
    "revision": "26e9c928dd035fac9a99877426f42a44"
  },
  {
    "url": "assets/js/app.9cbad5c4.js",
    "revision": "086aa4ac01ac553f9101cffe5fe95d3e"
  },
  {
    "url": "cqcode/index.html",
    "revision": "44015ac555391b3a7d9a078190b2f98b"
  },
  {
    "url": "event/index.html",
    "revision": "2a90bf41b811797a434857104f978c8d"
  },
  {
    "url": "faq/index.html",
    "revision": "db75c7ff9784718f84a9770c5122ce06"
  },
  {
    "url": "faq/slider.html",
    "revision": "5186cc1b9fc04d81849d0f0a9418d658"
  },
  {
    "url": "guide/achieve.html",
    "revision": "0d296d185c4d0577099b53c5d97649f4"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "baf484556fdd9e365c414daa29c95343"
  },
  {
    "url": "guide/config.html",
    "revision": "5e011937c4bde89695b063094d83a416"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "b504ed17ab3dc345f80a7e4f5e4dbd66"
  },
  {
    "url": "guide/file.html",
    "revision": "fd6a3608790aaad6344775ace49949f9"
  },
  {
    "url": "guide/index.html",
    "revision": "d26dfcd4771ae7a284b729ca591a30bf"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "6a245229f142ee69154f91d0df8e5c5a"
  },
  {
    "url": "index.html",
    "revision": "ee4b4866409c50279971e95009aa3563"
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
