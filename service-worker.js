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
    "revision": "d3112b67d1b7f7524ffcaada32c71996"
  },
  {
    "url": "api/index.html",
    "revision": "908287e11d7a0de909c9dec16aaa663b"
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
    "url": "assets/js/13.9f6682ab.js",
    "revision": "000589ff86add0f5788cb85877b8e6b2"
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
    "url": "assets/js/17.9825f4e9.js",
    "revision": "28ec2edfee9cebf36a792645cefa9734"
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
    "url": "assets/js/9.58bb3be4.js",
    "revision": "055c78cae9e9b339711bfa798f22adc2"
  },
  {
    "url": "assets/js/app.111c5379.js",
    "revision": "28feefed5e75186992de7c90be5451fe"
  },
  {
    "url": "cqcode/index.html",
    "revision": "3d67252d4c108afdac189afd2ec7d9cc"
  },
  {
    "url": "event/index.html",
    "revision": "9622e84c0089c8626247dd8f9a3ff18f"
  },
  {
    "url": "faq/index.html",
    "revision": "db3fb2f36e2d7656528dbb56527df312"
  },
  {
    "url": "faq/slider.html",
    "revision": "2dfa573ac5685256c5942fd127d6c1a3"
  },
  {
    "url": "guide/achieve.html",
    "revision": "1f6f8460fe2260cbcc92e21f02a2ca36"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "b673f36741ac295b67e10617ac3750ab"
  },
  {
    "url": "guide/config.html",
    "revision": "00ea44422d78babd20e47c85245c421a"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "54f351c891354ac370fafccdf8a7e37a"
  },
  {
    "url": "guide/file.html",
    "revision": "af93884108108a8dd7059780c9513ef6"
  },
  {
    "url": "guide/index.html",
    "revision": "aa5f72e3f9a64ed9b622613ebd861b50"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "ec7014dadea1aa90229929f07494f67f"
  },
  {
    "url": "index.html",
    "revision": "a434cf515b682b7ef8d2e07e04e46f10"
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
