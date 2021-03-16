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
    "revision": "c41cfce764ab1e3723f2823f418b20c0"
  },
  {
    "url": "api/index.html",
    "revision": "782e8a02397201502f1a633c7c8781d2"
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
    "url": "assets/js/10.ca6e0729.js",
    "revision": "0c2d6b9b7f78d5b26b3b16ab37592ca3"
  },
  {
    "url": "assets/js/11.c6703ac6.js",
    "revision": "acf0d63f381928ebd79432124f1a4b53"
  },
  {
    "url": "assets/js/12.f65b11de.js",
    "revision": "ad32aeecf03c66aa81e3f1b0f60b974d"
  },
  {
    "url": "assets/js/13.0df1e820.js",
    "revision": "9e3b09682163e6aa06b17f100613639f"
  },
  {
    "url": "assets/js/14.a362c552.js",
    "revision": "955af60c966682b4bf316842d41185c2"
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
    "url": "assets/js/18.e4d8bab3.js",
    "revision": "ff292f82d6cd8302bcfd3483d23c09ca"
  },
  {
    "url": "assets/js/19.18f6c794.js",
    "revision": "7bc53089bbd8fd52f8ac122aec1c32a0"
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
    "url": "assets/js/9.0a18085c.js",
    "revision": "baf91b2acebc82796de5e245487044f7"
  },
  {
    "url": "assets/js/app.b1280780.js",
    "revision": "5721e94ff782ad64b52b24eff6e6eadd"
  },
  {
    "url": "cqcode/index.html",
    "revision": "c2b75d9dd6345161a39b75406e1ae76b"
  },
  {
    "url": "event/index.html",
    "revision": "276d8c203a67418dd6db5881dd010b7b"
  },
  {
    "url": "faq/index.html",
    "revision": "a6192566049fdab690cf353646e7f478"
  },
  {
    "url": "faq/slider.html",
    "revision": "86455ccf55adf8b0527d33086f69e49a"
  },
  {
    "url": "guide/achieve.html",
    "revision": "2b644f33a253002f99d04e3a13d8f59c"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "d6ae0d58fea1f222effe825d9d215012"
  },
  {
    "url": "guide/config.html",
    "revision": "30879bb750e9296f7c21604aabde3781"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "4d5b2212e868c95652e70d47b69e719f"
  },
  {
    "url": "guide/file.html",
    "revision": "b345533a52beb0bcac721e9106c18bb7"
  },
  {
    "url": "guide/index.html",
    "revision": "f646ebcff42ce7c4be82e8f8e4ba150a"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "6987d43282fb7ee0d7f2adfc9ac4ca47"
  },
  {
    "url": "index.html",
    "revision": "68b8c84d9fe4e1b31459a21ecd14685c"
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
