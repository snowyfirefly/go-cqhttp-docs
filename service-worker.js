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
    "revision": "27c7fe9f1106cf906e967c3118d70a90"
  },
  {
    "url": "api/index.html",
    "revision": "0ed7045e90dd7645ebd233d93bea5e94"
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
    "url": "assets/js/10.6e6febed.js",
    "revision": "a2b1170641c50a578ecd7be930bccb2e"
  },
  {
    "url": "assets/js/11.77db3ebf.js",
    "revision": "668288e61129154ead76cd6113f1985a"
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
    "url": "assets/js/20.73925751.js",
    "revision": "abaf5d19eebe3b1b0d9d81125ec8e617"
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
    "url": "assets/js/9.47ec4e79.js",
    "revision": "d766a47ceca1150df21932cab8496b78"
  },
  {
    "url": "assets/js/app.09cbe4f0.js",
    "revision": "9434779dbbb14b8084b05ba7975f6804"
  },
  {
    "url": "cqcode/index.html",
    "revision": "59d8bea20b10869aba98bef2b5712d4f"
  },
  {
    "url": "event/index.html",
    "revision": "3b2624051c00f8a8be4520e020154e1d"
  },
  {
    "url": "faq/index.html",
    "revision": "b387c2417af87acddaaa826ae58ee88e"
  },
  {
    "url": "faq/slider.html",
    "revision": "f55b3fc7038ce06643e26b137c1a3937"
  },
  {
    "url": "guide/achieve.html",
    "revision": "e2558f51805d4cceafef62be518550a7"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "4a8f0ed7a5d630b030bef76dcee13c0e"
  },
  {
    "url": "guide/config.html",
    "revision": "114eb6280120ec4efae86ac5af55d813"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "89a645406f04e5dd61fc23dfd1ec98da"
  },
  {
    "url": "guide/file.html",
    "revision": "cced6fdda178faa63ceb24d3a8f40d5a"
  },
  {
    "url": "guide/index.html",
    "revision": "18254b91b83a32de3a981ac88ebf2699"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "e3ab39472724b02be33c5e413cba9422"
  },
  {
    "url": "index.html",
    "revision": "39fd14fb32c79d484b7746a088235c52"
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
