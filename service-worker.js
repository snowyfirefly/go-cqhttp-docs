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
    "revision": "3b041510e07eeb4fc7b7f750db0557ac"
  },
  {
    "url": "api/index.html",
    "revision": "75c78242e3431d71d5938e5fc2568d25"
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
    "url": "assets/js/10.f88b2286.js",
    "revision": "7cd549997975856094a20650e3825b63"
  },
  {
    "url": "assets/js/11.81ec7bb7.js",
    "revision": "37a8d5f0fbe0dcbaa957c5aa855f9e81"
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
    "url": "assets/js/19.dcb89ad8.js",
    "revision": "0084446ae0d1965833425f507267bc0c"
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
    "url": "assets/js/8.94967199.js",
    "revision": "ace2536f5c6cdbbfa420cc0a0b6a0d17"
  },
  {
    "url": "assets/js/9.6abcafb9.js",
    "revision": "f0e7acfafb03c33e22bc0818230d8f6a"
  },
  {
    "url": "assets/js/app.fc42f5b9.js",
    "revision": "50d1657180e09b3d82d80c867e4a0044"
  },
  {
    "url": "cqcode/index.html",
    "revision": "a5bb57971bfe86e32da861a3259e38d6"
  },
  {
    "url": "event/index.html",
    "revision": "0032d0550ae5baa0a30eed253736250c"
  },
  {
    "url": "faq/index.html",
    "revision": "4fde25d599e8bf71fa63ebc20aaf9ee8"
  },
  {
    "url": "faq/slider.html",
    "revision": "c5d100373fde9f77882939eb8b61c6d0"
  },
  {
    "url": "guide/achieve.html",
    "revision": "646b9d65aebec7676011fcbf55cde201"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "d819ad88622533aa56882017f63c0b70"
  },
  {
    "url": "guide/config.html",
    "revision": "c94888f0eb73ceb71c78b8f0dc4d832f"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "5e79a8bf1768100eee6909d8635e67d5"
  },
  {
    "url": "guide/file.html",
    "revision": "8591495e67a6164c3463bdcaff1425dd"
  },
  {
    "url": "guide/index.html",
    "revision": "e7123d826ebad77acb3d5f61363eb89a"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "c0f46a23702f46c48859f2186a7abe75"
  },
  {
    "url": "index.html",
    "revision": "4e862a54ee95c338281ac857472ebf69"
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
