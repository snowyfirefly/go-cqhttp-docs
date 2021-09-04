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
    "revision": "af180874561d69816e2046036096c6da"
  },
  {
    "url": "api/index.html",
    "revision": "45c1ccd9c04d8b6cbf9bb487b90188a7"
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
    "url": "assets/js/13.880f5e10.js",
    "revision": "7c9870313a2e1630c3caf61bf09f1499"
  },
  {
    "url": "assets/js/14.137138f6.js",
    "revision": "58113ab573bfbee47c1779f0cf55a566"
  },
  {
    "url": "assets/js/15.90faaa6e.js",
    "revision": "aa3ecb7f2545d11fd3d0600d8b59c9c5"
  },
  {
    "url": "assets/js/16.a60b5e28.js",
    "revision": "958e334d90060d4694ac5a30c3c4ba17"
  },
  {
    "url": "assets/js/17.f748cce2.js",
    "revision": "271b44421e7a496938fa9ea1c782c6d6"
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
    "url": "assets/js/20.73ee1732.js",
    "revision": "ef6156622433ad49d170e12786110fb4"
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
    "url": "assets/js/9.5f94eaee.js",
    "revision": "6196a126d00a8c3f51f23bf1cdc5a177"
  },
  {
    "url": "assets/js/app.4ee025b0.js",
    "revision": "7054a4f0e42d89e053087ae4e7614576"
  },
  {
    "url": "cqcode/index.html",
    "revision": "717bf92bfa2ebeeb3cd458094e91ec75"
  },
  {
    "url": "event/index.html",
    "revision": "059fb1daed08d12dd66634fb3da98c4a"
  },
  {
    "url": "faq/index.html",
    "revision": "01d852d25fa59d211d7e1ba989eda2db"
  },
  {
    "url": "faq/slider.html",
    "revision": "3e0d89fd6b4851eea4c848c74e1aaf3f"
  },
  {
    "url": "guide/achieve.html",
    "revision": "645b31e98e8a836da1f7cf7309630614"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "a061908f76b8990083282d1ac087668f"
  },
  {
    "url": "guide/config.html",
    "revision": "70ce9a849a4c9faf8129b07e569187f0"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "3649a73da5495f0c55438e71df779bab"
  },
  {
    "url": "guide/file.html",
    "revision": "0f0bf909574fdf53a4432a1272224a89"
  },
  {
    "url": "guide/index.html",
    "revision": "962bb5382922d345a7d566e619986600"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "fa012de92407538b5dbdf0dfb882aaf3"
  },
  {
    "url": "index.html",
    "revision": "5b737d07effc7fe834ce14f86555f1f7"
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
