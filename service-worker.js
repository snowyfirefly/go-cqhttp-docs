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
    "revision": "ff6e844653328eff6f97aa1fa192d7be"
  },
  {
    "url": "api/index.html",
    "revision": "4994ba9b04727acf9e5dca831c08078c"
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
    "url": "assets/js/10.d8db620e.js",
    "revision": "1d6b79d400593da7b84968bc438bc7c9"
  },
  {
    "url": "assets/js/11.545422ac.js",
    "revision": "f7f9d11c0e7b8073bb941230920ab858"
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
    "url": "assets/js/9.bfaf0800.js",
    "revision": "f5da667d9e425966e55be272b3aa3bf0"
  },
  {
    "url": "assets/js/app.6a2419b8.js",
    "revision": "7d68e106f57cf54512ac5940c93e4d06"
  },
  {
    "url": "cqcode/index.html",
    "revision": "54e667190bfcdec79a4d9281d7a605ce"
  },
  {
    "url": "event/index.html",
    "revision": "4372e07dc219bfcca72b588464bc8581"
  },
  {
    "url": "faq/index.html",
    "revision": "252361d61c8c8a16d3f72d1a4b4b55cc"
  },
  {
    "url": "faq/slider.html",
    "revision": "a6155737bbf536c6be9b569122118571"
  },
  {
    "url": "guide/achieve.html",
    "revision": "e834674c7d2e53aa7549ee2052cab46e"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "112c88e2d26266d695dac7300b867025"
  },
  {
    "url": "guide/config.html",
    "revision": "c7abf66ec1fb16bcc516bba69d0cf668"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "de7f3472da80da26750fb83132ff679b"
  },
  {
    "url": "guide/file.html",
    "revision": "8db4e9569604ebfbc4d2d633b6788763"
  },
  {
    "url": "guide/index.html",
    "revision": "76c718fe36e13b791b6cd1ab273ba59a"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "ab4c357acd8fdf466795b2702684f56c"
  },
  {
    "url": "index.html",
    "revision": "947c6ef687fb814ac78a898c5b71493c"
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
