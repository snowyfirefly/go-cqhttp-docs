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
    "revision": "24eda6aeb43157dd22231ba1bd5d1210"
  },
  {
    "url": "api/index.html",
    "revision": "2349cab7f81d3736ab5f4b46413bc363"
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
    "url": "assets/js/10.d8506c61.js",
    "revision": "fe0b52adff65527f4c39be8c7f45616c"
  },
  {
    "url": "assets/js/11.148b30e2.js",
    "revision": "2fa7b5d8e715af27cdf14dcc298c7691"
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
    "url": "assets/js/17.8dbd8720.js",
    "revision": "eb22c3ba9873ce77be42a548901d8b48"
  },
  {
    "url": "assets/js/18.0691c43d.js",
    "revision": "6e166f305f2805fcef1476308512a150"
  },
  {
    "url": "assets/js/19.f4986f2d.js",
    "revision": "561950d54da032dcc79e8634d2bb1c7f"
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
    "url": "assets/js/9.4b78c520.js",
    "revision": "76e993778aba76e92744a8654174f991"
  },
  {
    "url": "assets/js/app.82e80ad1.js",
    "revision": "8146751611bc80fc35dab4087e1f67d0"
  },
  {
    "url": "cqcode/index.html",
    "revision": "69266ef2ac0613c0dce5494ca4acdf8e"
  },
  {
    "url": "event/index.html",
    "revision": "b0dacf7748b1bda4cd105adde59591ed"
  },
  {
    "url": "faq/index.html",
    "revision": "6a68fefb7594e0224b9890c68f06af1b"
  },
  {
    "url": "faq/slider.html",
    "revision": "7b555fb07b1ac5a331e9fa1585a50cbd"
  },
  {
    "url": "guide/achieve.html",
    "revision": "8ebf72f4baa83f411867d8d970c1b58a"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "f1e0dc020eeb14c9c01f845f3a0eed1e"
  },
  {
    "url": "guide/config.html",
    "revision": "7241765668b7682e61924646478365a9"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "c5e998d8554b6fa5b663a656aa9f4e5b"
  },
  {
    "url": "guide/file.html",
    "revision": "4cc142c500965f9a5b86af6cea753240"
  },
  {
    "url": "guide/index.html",
    "revision": "2941edf2e18c22f794f4989c93ddcb87"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "ef0cd5c41258f643b3921785fee823d7"
  },
  {
    "url": "index.html",
    "revision": "96e687a3b10e0470fc2a7d5cac63987e"
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
