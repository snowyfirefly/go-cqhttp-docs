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
    "revision": "e1e34162308ca957ea8e5cb7b77fe883"
  },
  {
    "url": "api/index.html",
    "revision": "14383dba86082f0359fa2cf46c575125"
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
    "url": "assets/js/17.c964a89e.js",
    "revision": "7ca2d52a488ebefceea230413970af8a"
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
    "url": "assets/js/app.1f45ab4d.js",
    "revision": "a730e240d8871d4e1f69fbe10d2cff61"
  },
  {
    "url": "cqcode/index.html",
    "revision": "7472c41e97cffd4db5282bb4eec1d595"
  },
  {
    "url": "event/index.html",
    "revision": "52b2e6880dad3a15cd63c1ec7234abc5"
  },
  {
    "url": "faq/index.html",
    "revision": "52e92289608ec65c67126cd9a3a1dcb2"
  },
  {
    "url": "faq/slider.html",
    "revision": "212b205302905e630575ac32f85dac31"
  },
  {
    "url": "guide/achieve.html",
    "revision": "25d99139fa5f79b7aa9460f5346b5e55"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "fcd37296eb7e845541d1e37f5fc1c054"
  },
  {
    "url": "guide/config.html",
    "revision": "bdee4c9e76da7749fbdf4c5272be87cd"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "644a97e4a746423738d24c01da2627fc"
  },
  {
    "url": "guide/file.html",
    "revision": "6fea422fefd2c1024c08c45684fcbeb2"
  },
  {
    "url": "guide/index.html",
    "revision": "aace414786d7408ec31e8d71c9d53bf0"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "4a57bd856ab80792c75e8ae0040d7b46"
  },
  {
    "url": "index.html",
    "revision": "025565d78570fcadf391169f8c4ed8b4"
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
