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
    "revision": "3af6616df72edeac294fbe036478c843"
  },
  {
    "url": "api/index.html",
    "revision": "878829dc14704d86fbdf2e4b9516e66e"
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
    "url": "assets/js/11.5ae1b9ad.js",
    "revision": "757317d507d052f78c01e591424eb698"
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
    "url": "assets/js/14.97399210.js",
    "revision": "b86bc4c6118cc39c410dd6c058c7adfa"
  },
  {
    "url": "assets/js/15.90d1d766.js",
    "revision": "78b9264b8633b00884042f8a571636c5"
  },
  {
    "url": "assets/js/16.7b37b56b.js",
    "revision": "98cf232fd255f881780d60c1cbc729c9"
  },
  {
    "url": "assets/js/17.d17187f3.js",
    "revision": "66a3e1e068869123a9b32f71fe88a04b"
  },
  {
    "url": "assets/js/18.c050f7a2.js",
    "revision": "b293b1374ffd35c63fa36d8da8d93dd2"
  },
  {
    "url": "assets/js/19.d051dcf4.js",
    "revision": "d5867fcb10901c43aaaa19eb7d1c94cd"
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
    "url": "assets/js/9.58bb3be4.js",
    "revision": "055c78cae9e9b339711bfa798f22adc2"
  },
  {
    "url": "assets/js/app.be977ea4.js",
    "revision": "dcacc60cc248e994a2ad824926b9c7dd"
  },
  {
    "url": "cqcode/index.html",
    "revision": "d0522821cc3f3c99bb4f7e90d3b5ec3f"
  },
  {
    "url": "event/index.html",
    "revision": "c52faf7ba128378a28b50a0e12995fb2"
  },
  {
    "url": "faq/index.html",
    "revision": "08fcc771a175e24bcd8628a80aefea12"
  },
  {
    "url": "faq/slider.html",
    "revision": "3080998ed729620c09cc0a2db822dc4f"
  },
  {
    "url": "guide/achieve.html",
    "revision": "b4b0f0411b4435cf6d466fa712d4231f"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "03d6ea6dd1874265fa410f62b33d8804"
  },
  {
    "url": "guide/config.html",
    "revision": "57f2594bf5ad77583a0829f3867ff037"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "7510918cb9412290e872ff5128a6823d"
  },
  {
    "url": "guide/file.html",
    "revision": "9f1baca2dfd4a01ec85ea311c5fdad50"
  },
  {
    "url": "guide/index.html",
    "revision": "506e19080712e7872eee5557bb76b363"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "c6156a4ab6fe16a1a0f99dd5ad1db18f"
  },
  {
    "url": "index.html",
    "revision": "5557aabb2c13d7a8840170205c07ec29"
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
