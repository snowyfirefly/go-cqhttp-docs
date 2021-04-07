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
    "revision": "4a070d2a83c72a865c4d5d5371f1b67a"
  },
  {
    "url": "api/index.html",
    "revision": "826cdb8dbaf02429b49fef50886a892b"
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
    "url": "assets/js/10.1a9b5131.js",
    "revision": "89a806836ce5bd344f3a24d3173b3f15"
  },
  {
    "url": "assets/js/11.81ec7bb7.js",
    "revision": "37a8d5f0fbe0dcbaa957c5aa855f9e81"
  },
  {
    "url": "assets/js/12.8be27ff5.js",
    "revision": "069a9a2049957bab685319021bac0641"
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
    "url": "assets/js/app.5a99626e.js",
    "revision": "bae4144d1dcf5fc9d585459062c12483"
  },
  {
    "url": "cqcode/index.html",
    "revision": "4dd52c57a61b1ca4b9ab5d9cc7ebffe8"
  },
  {
    "url": "event/index.html",
    "revision": "a98c8316903004cfd499ef63e81999fe"
  },
  {
    "url": "faq/index.html",
    "revision": "e15c049e1f472776be612501af18b33e"
  },
  {
    "url": "faq/slider.html",
    "revision": "f4a35d8c3dcadb38dbff7f98aae90e59"
  },
  {
    "url": "guide/achieve.html",
    "revision": "2b2d61c068a43cfce798f6b2a8d6d6e9"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "e8a5dda8e296563f5026a8bccbc4997b"
  },
  {
    "url": "guide/config.html",
    "revision": "db8a2bc79707cdf273e6b15896107763"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "5ab91341c43002ac8e9d3fdca8cbf12c"
  },
  {
    "url": "guide/file.html",
    "revision": "42a4ff1840e5b47fd21691cf166ea18a"
  },
  {
    "url": "guide/index.html",
    "revision": "a7e406143e0d3806abbef2ef081a7578"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "4ca98ac2625bb44aa808ea4cb0fac364"
  },
  {
    "url": "index.html",
    "revision": "29e463d288952d08d6e860a6776ccab5"
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
