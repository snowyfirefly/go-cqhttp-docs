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
    "revision": "9b2d422115bd5816651e66c8deab4bfb"
  },
  {
    "url": "api/index.html",
    "revision": "79a20f9a5148daf269c2821a6f7d8478"
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
    "url": "assets/js/14.174b341b.js",
    "revision": "f3eb36d63909d2732964a3f4b62309b7"
  },
  {
    "url": "assets/js/15.90faaa6e.js",
    "revision": "aa3ecb7f2545d11fd3d0600d8b59c9c5"
  },
  {
    "url": "assets/js/16.9261ea3a.js",
    "revision": "dc68a0bf89745c440c9eb20da4bcfb4b"
  },
  {
    "url": "assets/js/17.7427dd28.js",
    "revision": "3990482227c3251f19710b7911da0bd6"
  },
  {
    "url": "assets/js/18.cb35b639.js",
    "revision": "a3311c5ff2c8d0bc5d6b3a047c998456"
  },
  {
    "url": "assets/js/19.f099dcac.js",
    "revision": "cb33ca1de42a2144fc7dc57a52654da2"
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
    "url": "assets/js/9.5f94eaee.js",
    "revision": "6196a126d00a8c3f51f23bf1cdc5a177"
  },
  {
    "url": "assets/js/app.bd519880.js",
    "revision": "379dd69eddc0a535295d8fcec0b49579"
  },
  {
    "url": "cqcode/index.html",
    "revision": "68c138bb4fd94fee88c2acf9ef345734"
  },
  {
    "url": "event/index.html",
    "revision": "f80e313e5efc20e52cc4d742157ba877"
  },
  {
    "url": "faq/index.html",
    "revision": "6fd7fe2f4eb02f99089e15abb381064d"
  },
  {
    "url": "faq/slider.html",
    "revision": "255826542897f31cba63a4919d78c768"
  },
  {
    "url": "guide/achieve.html",
    "revision": "8819867b9b12fb6f805ad7449ad77af9"
  },
  {
    "url": "guide/config.html",
    "revision": "7fbb5b0abf27d0e0ff483e501ec85e5a"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "5ec503e51da7ff9d2df0c7842587b7ae"
  },
  {
    "url": "guide/file.html",
    "revision": "ba0c61fb74b92ec45387064e1ccc21bf"
  },
  {
    "url": "guide/index.html",
    "revision": "bd58742d1131137d339f8e0a39f7161a"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "1e679c14a9fac1146689ded611dcd0d6"
  },
  {
    "url": "index.html",
    "revision": "81e19e28525aa4c4a37747b535fdfdac"
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
