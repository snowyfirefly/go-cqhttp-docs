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
    "revision": "0d52be2586518f45d90aafd2faf00379"
  },
  {
    "url": "api/index.html",
    "revision": "fd30136cf14434ef9c52a4a6db2a1eb8"
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
    "url": "assets/js/app.93b6063b.js",
    "revision": "5499df987fb096a94660b279a14cc21d"
  },
  {
    "url": "cqcode/index.html",
    "revision": "b1a8e4c271b8f71d021a0a27cc447a32"
  },
  {
    "url": "event/index.html",
    "revision": "10fbe5c180f325db20951006c7133565"
  },
  {
    "url": "faq/index.html",
    "revision": "021b3d7f8e989346f351e2a027bd5362"
  },
  {
    "url": "faq/slider.html",
    "revision": "73c9055d0c62eea1d382824f588f6dc8"
  },
  {
    "url": "guide/achieve.html",
    "revision": "c604967172e999eab73398b07b2628cb"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "c5ec70802fb6575acc12240b243bffea"
  },
  {
    "url": "guide/config.html",
    "revision": "149dec61a1549b4c4b14b11118e16fa9"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "24f0e2e86086299076d92e0faa8f3182"
  },
  {
    "url": "guide/file.html",
    "revision": "7cd84d5784a9e8da7d270ae35e76f5fc"
  },
  {
    "url": "guide/index.html",
    "revision": "7ee0c551a593f259ae18fb320f279706"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "4faa81a34b6e858f5614fc958763df31"
  },
  {
    "url": "index.html",
    "revision": "ec15265d056d32a5737e2347d5a8257d"
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
