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
    "revision": "72123cd12f033c504a0cb88c49158467"
  },
  {
    "url": "api/index.html",
    "revision": "e8dc5b735a5f384c86202554ad168acb"
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
    "url": "assets/js/9.749a7642.js",
    "revision": "fad12a2c6f29178bd0c9a724eeb025cb"
  },
  {
    "url": "assets/js/app.b7d3adb1.js",
    "revision": "164491771ccda390955bb3a4e688eb6f"
  },
  {
    "url": "cqcode/index.html",
    "revision": "cd4e05bb2562f9b4f6a3edec9c42920b"
  },
  {
    "url": "event/index.html",
    "revision": "71721293252f546f3ca5c75514083994"
  },
  {
    "url": "faq/index.html",
    "revision": "6abc13bec52f1c5f0019b3a78c1ffd98"
  },
  {
    "url": "faq/slider.html",
    "revision": "2efc0563fa10e6dbde604fdb0167de05"
  },
  {
    "url": "guide/achieve.html",
    "revision": "a3f6267679eb87e2b2de649f449da017"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "1e2559097dcfb29a08039a4ab98ea1cd"
  },
  {
    "url": "guide/config.html",
    "revision": "d96e3fa4de8d5ce6cc0029ea0f6ef0d8"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "081ade892c7832b7d9421b1a88341bcd"
  },
  {
    "url": "guide/file.html",
    "revision": "939872ee57f8a63c7ea30ec88210ca73"
  },
  {
    "url": "guide/index.html",
    "revision": "6b6e3563c7c4d485fedcab60d2f7b14a"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "9d17d826bc3cf12c56bd39f365eee269"
  },
  {
    "url": "index.html",
    "revision": "9001c6a461961be81a4bd9d3f3383069"
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
