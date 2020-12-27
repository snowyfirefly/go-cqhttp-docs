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
    "revision": "ef8886df632b5cace6106d18afa53e26"
  },
  {
    "url": "api/index.html",
    "revision": "2c87d19bddc178c449e2288f1a6694c5"
  },
  {
    "url": "assets/css/0.styles.7f7cd3dd.css",
    "revision": "b2f8faf328c502087cfbdb8a50b343b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.797e7981.js",
    "revision": "45ef5b97fd2b838ba1d80ca74fb88fa3"
  },
  {
    "url": "assets/js/11.791be118.js",
    "revision": "9831107064fc0e242264eaac6c950232"
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
    "url": "assets/js/14.fca34632.js",
    "revision": "080c698c6df87bde84a841ecacef8d78"
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
    "url": "assets/js/20.4dd2599a.js",
    "revision": "eb62d312f98ea023358d0966d1a087f7"
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
    "url": "assets/js/9.cceedccd.js",
    "revision": "9fb6d9b34dd35fb58c6ad140f264f350"
  },
  {
    "url": "assets/js/app.cc73689c.js",
    "revision": "57ddaf3c210e41f008117d580582267f"
  },
  {
    "url": "cqcode/index.html",
    "revision": "0ac325d80f03d81f364d77d9644e7eb1"
  },
  {
    "url": "event/index.html",
    "revision": "46c8215b86af5cb0aea623e5f7b5909f"
  },
  {
    "url": "faq/index.html",
    "revision": "dbcf3029dcc7431ffc1ace3fc61e3328"
  },
  {
    "url": "faq/slider.html",
    "revision": "81f1ad9030dfa9e9118ad273b6f5e7b8"
  },
  {
    "url": "guide/achieve.html",
    "revision": "a79af6f633c89f6031e6405c14f7c0ed"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "8ac08d466efa1bc44e728f15a7a58005"
  },
  {
    "url": "guide/config.html",
    "revision": "58eed6fcce32437ceac8a8c792eb3e4f"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "77a9cdd58100572f50ba7946ba80b363"
  },
  {
    "url": "guide/file.html",
    "revision": "bcf00de078ac4d5123e323c5082f68c5"
  },
  {
    "url": "guide/index.html",
    "revision": "f95174d5cdf6275fa019953107d51684"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "be6e65d87fb0e37d2801feded44d4fde"
  },
  {
    "url": "index.html",
    "revision": "695ada75c0e15b68c54445a642dc5caa"
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
