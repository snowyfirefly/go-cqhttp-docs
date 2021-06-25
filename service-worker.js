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
    "revision": "cfa8cf91653f1a7a344481dbbaae7b63"
  },
  {
    "url": "api/index.html",
    "revision": "63ea75af7adda620cd557f182ca5334e"
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
    "url": "assets/js/11.a72ed09c.js",
    "revision": "b39fed5a93a343ae01407be7b7bebe65"
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
    "url": "assets/js/14.a362c552.js",
    "revision": "955af60c966682b4bf316842d41185c2"
  },
  {
    "url": "assets/js/15.111d4bd9.js",
    "revision": "eda3b2a8d249ad30b87880ca980d34f6"
  },
  {
    "url": "assets/js/16.7b37b56b.js",
    "revision": "98cf232fd255f881780d60c1cbc729c9"
  },
  {
    "url": "assets/js/17.70351a7c.js",
    "revision": "6357afafd32415db085121145c0586a4"
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
    "url": "assets/js/20.209017b2.js",
    "revision": "eb3385acf0d0d4146e493e33b118b820"
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
    "url": "assets/js/app.809e9c9f.js",
    "revision": "bbf32d1eb7dead7d896f4b7cad177bd9"
  },
  {
    "url": "cqcode/index.html",
    "revision": "ec216ec7a2c0760403f36207fba0de1e"
  },
  {
    "url": "event/index.html",
    "revision": "da6883e3ec3ceb4f791710fab158531b"
  },
  {
    "url": "faq/index.html",
    "revision": "095671e9812badde6d93264029c8aa20"
  },
  {
    "url": "faq/slider.html",
    "revision": "de486103d1758cd5c3638206b3ca687a"
  },
  {
    "url": "guide/achieve.html",
    "revision": "08c341a965f6079e8d0921ae47ae977b"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "54e9215d3c0d357c1e19badb52f80bd9"
  },
  {
    "url": "guide/config.html",
    "revision": "e2079538568212d535d46db320b35b8b"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "bf163e8ac0099705285de8e4433c67b5"
  },
  {
    "url": "guide/file.html",
    "revision": "cf4000cc8f5dc7c5b3a275496628cb64"
  },
  {
    "url": "guide/index.html",
    "revision": "627ec1188e173520ea2e69d0e5ec4d51"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "332165175021833d3fef81d5596a1ac7"
  },
  {
    "url": "index.html",
    "revision": "ca593b327413f2fa46de5b0c51a0a838"
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
