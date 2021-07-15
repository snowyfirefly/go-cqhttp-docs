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
    "revision": "e32bb2e4f95f56f509ac2fb0de153c18"
  },
  {
    "url": "api/index.html",
    "revision": "6bef538bdd0c5ea666df93d61698ed5b"
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
    "url": "assets/js/10.b565b550.js",
    "revision": "94e84eba04de2bb089e97d74b605d49f"
  },
  {
    "url": "assets/js/11.d4142c19.js",
    "revision": "19dc0b5d9718e4001e7d8c470c8863f8"
  },
  {
    "url": "assets/js/12.5d6fec89.js",
    "revision": "9033ca874913247c9316709df7ec6d44"
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
    "url": "assets/js/16.a60b5e28.js",
    "revision": "958e334d90060d4694ac5a30c3c4ba17"
  },
  {
    "url": "assets/js/17.d79469da.js",
    "revision": "56127c45c5bfe4c6ca40932dde715a9b"
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
    "url": "assets/js/app.90eb56fe.js",
    "revision": "0bb999383644642e9ee61b7600de1b72"
  },
  {
    "url": "cqcode/index.html",
    "revision": "632222155cd81d806e431f3ea84f0457"
  },
  {
    "url": "event/index.html",
    "revision": "f6837a641d717fc55ffc7a70d220c483"
  },
  {
    "url": "faq/index.html",
    "revision": "248900a826f9810f82356f5333aeaea7"
  },
  {
    "url": "faq/slider.html",
    "revision": "fc8de421e382b700fa4c15747ab03371"
  },
  {
    "url": "guide/achieve.html",
    "revision": "6a26277a8369b555654f6b8b84002ee0"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "7ce7eb632735252137824f8f0e2329d1"
  },
  {
    "url": "guide/config.html",
    "revision": "a403d91c0617ac9b61db93848917f4fb"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "44ee815345f2ffb4ff0c1480050d4cd6"
  },
  {
    "url": "guide/file.html",
    "revision": "5d51038949810baf28cb359d073e14c3"
  },
  {
    "url": "guide/index.html",
    "revision": "ef97603ae16aa99f70a18fdf9aac33df"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "fc6b3247e8349d036c1c35d82e2c38ce"
  },
  {
    "url": "index.html",
    "revision": "3ecfdc03399bcb24616a29ea785b5444"
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
