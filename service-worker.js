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
    "revision": "d5db5ccb8b1663566401fa3a9e520dd2"
  },
  {
    "url": "api/index.html",
    "revision": "a8b24b0e276fe75f91aab0eee98cc9fd"
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
    "url": "assets/js/10.295ce52d.js",
    "revision": "2806746abcc129f20dc169f4cc2f6a20"
  },
  {
    "url": "assets/js/11.40d63338.js",
    "revision": "f6fc5b807680074d646c77d99bb17f6f"
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
    "url": "assets/js/17.0d4a376d.js",
    "revision": "55566c474e22d4709c1f7e2eabc4be34"
  },
  {
    "url": "assets/js/18.371615cf.js",
    "revision": "0ebad3939fa279c00d38272c2cef5b14"
  },
  {
    "url": "assets/js/19.cc5b0349.js",
    "revision": "fc5347bb5bd968e8e5760c7f3a8c9e3b"
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
    "url": "assets/js/9.58bb3be4.js",
    "revision": "055c78cae9e9b339711bfa798f22adc2"
  },
  {
    "url": "assets/js/app.45459c1e.js",
    "revision": "92a717bbb8751f3ae1cdc4b89d2f1183"
  },
  {
    "url": "cqcode/index.html",
    "revision": "b5d85f59b8c43355a93373079969b615"
  },
  {
    "url": "event/index.html",
    "revision": "6329fdb42f986175b7a580ef9ef04501"
  },
  {
    "url": "faq/index.html",
    "revision": "de40672bd4d74e90476f76dceb1a0880"
  },
  {
    "url": "faq/slider.html",
    "revision": "8357d23748f6672b7a06311e6fb81856"
  },
  {
    "url": "guide/achieve.html",
    "revision": "6797ee22390e03fd042cd59e8b50e7d6"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "e96c28cfa5016c2df8b3d01608249631"
  },
  {
    "url": "guide/config.html",
    "revision": "98525fabe2c1b4b7b004e34626fa051f"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "b526fd15d51e77d5d855ed32ead0998a"
  },
  {
    "url": "guide/file.html",
    "revision": "7e8c72522fc40714a5c0cf4847b713fb"
  },
  {
    "url": "guide/index.html",
    "revision": "ee8d57f3069226712465bfbfd34b8b6e"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "cc4de2ebb90eb5ccf25dab5e30613216"
  },
  {
    "url": "index.html",
    "revision": "4b9ec14cb48ad897a8ce87c92adad6f5"
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
