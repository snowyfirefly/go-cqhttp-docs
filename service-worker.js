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
    "revision": "af25bcd63fae7f1cf2c43ca8a40ac966"
  },
  {
    "url": "api/index.html",
    "revision": "4b9ae87a5f30a7b3646236feaba4cb00"
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
    "url": "assets/js/17.84ccbd95.js",
    "revision": "563eec8a8d1a8822eafb21123eb7fee7"
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
    "url": "assets/js/app.6595c4b5.js",
    "revision": "5e47222eb7be7038c20a4c7623a9b441"
  },
  {
    "url": "cqcode/index.html",
    "revision": "59521da3fcb9d77d24e4704c107a3bc2"
  },
  {
    "url": "event/index.html",
    "revision": "da822d761cff0f88ef83b8d05c099503"
  },
  {
    "url": "faq/index.html",
    "revision": "970ce77c7716186814e5035ba5561adb"
  },
  {
    "url": "faq/slider.html",
    "revision": "2fc514a968c8f7a117beaa9ec12f7247"
  },
  {
    "url": "guide/achieve.html",
    "revision": "2b7c3d4838c0c4adf6c95b9a2debf875"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "537fdf6ef8c0c8b8edf59f3fbf5965b2"
  },
  {
    "url": "guide/config.html",
    "revision": "95b9a94bd3d7f8ef5d20c3cebb550325"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "ad796a36ab9ad9f7912ddf639c667800"
  },
  {
    "url": "guide/file.html",
    "revision": "aa2d30c54d506cce7a16a2c905702dd4"
  },
  {
    "url": "guide/index.html",
    "revision": "a712812b8c577d588d9e61e18e277eb4"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "d1c5d79b3816e7bb85f09986f9c138c3"
  },
  {
    "url": "index.html",
    "revision": "3f011f52bcfe28462b0a3c52f2ae88f5"
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
