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
    "revision": "466bcd9381b4c45a2263638e6c29afbf"
  },
  {
    "url": "api/index.html",
    "revision": "0fe617972470ec91bfb881c10ad4dc98"
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
    "url": "assets/js/10.baaa2c93.js",
    "revision": "77fe10125422021e0a6f4e4cea28d102"
  },
  {
    "url": "assets/js/11.08c6939c.js",
    "revision": "0ae9590b2bf5bcf045089f2e780a64f6"
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
    "url": "assets/js/17.378beb00.js",
    "revision": "0c329963047d8949596beaa6dcc7762f"
  },
  {
    "url": "assets/js/18.0691c43d.js",
    "revision": "6e166f305f2805fcef1476308512a150"
  },
  {
    "url": "assets/js/19.cc5b0349.js",
    "revision": "fc5347bb5bd968e8e5760c7f3a8c9e3b"
  },
  {
    "url": "assets/js/2.d19ebc55.js",
    "revision": "f02100d281409dff5827bde7a66db6b0"
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
    "url": "assets/js/6.a0c79676.js",
    "revision": "f44fb6053a8d4de381b63299cade2066"
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
    "url": "assets/js/9.76f2618f.js",
    "revision": "b4578ef68f1c19ce7eb790e366ff84ec"
  },
  {
    "url": "assets/js/app.e5e02fe1.js",
    "revision": "abe08ccd9b49c10dd5c0c3e747096d85"
  },
  {
    "url": "cqcode/index.html",
    "revision": "de10d3df5867343147bd63c4be749045"
  },
  {
    "url": "event/index.html",
    "revision": "984b4d21fdf6905965d65b62e74718f5"
  },
  {
    "url": "faq/index.html",
    "revision": "6aa22be72327fd561c8e84aa7426d6c0"
  },
  {
    "url": "faq/slider.html",
    "revision": "252b01ac6852cf8b8b555d676299d343"
  },
  {
    "url": "guide/achieve.html",
    "revision": "7f35a56ceadfce018d6dd8dd09aafa0d"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "2c87a06bbc5677b5e842acd5e61b1a44"
  },
  {
    "url": "guide/config.html",
    "revision": "8d9dcae4b6a6c8ffa1cef7ee824b9306"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "9ebcbfb27c2b8c47fbf77a9b462c7747"
  },
  {
    "url": "guide/file.html",
    "revision": "4aa706df97effb5f065333fdd67535ad"
  },
  {
    "url": "guide/index.html",
    "revision": "61bcbd1e36c8f362f9b3c0f4c547f706"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "844ffb3d45c4caf153a48d6029603953"
  },
  {
    "url": "index.html",
    "revision": "0138c6268ecfebc1e30bfe18e608e8e8"
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
