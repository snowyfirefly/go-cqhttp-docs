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
    "revision": "b1d69ef35914767691d5dd49276fd6b9"
  },
  {
    "url": "api/index.html",
    "revision": "037c2081b06d38ddc7c8c6b639e2624c"
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
    "url": "assets/js/17.40453877.js",
    "revision": "933d6d05ac361c0ebe1f2a2247e1092a"
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
    "url": "assets/js/app.04d6255f.js",
    "revision": "a7e870869fe124b0a64ec1b39912e131"
  },
  {
    "url": "cqcode/index.html",
    "revision": "6b284e30bbd04c4223987c7b31d5b921"
  },
  {
    "url": "event/index.html",
    "revision": "16f4d2894b75e463bdb34bb1d484cb16"
  },
  {
    "url": "faq/index.html",
    "revision": "ccc183a844979ddce010bb4723e212a4"
  },
  {
    "url": "faq/slider.html",
    "revision": "e04bfe6be8a7627612208e9b9be37172"
  },
  {
    "url": "guide/achieve.html",
    "revision": "7fa567c277b5b386fed9caecb902af4a"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "37b2aed2e291f08fa9c6feab2ca13b71"
  },
  {
    "url": "guide/config.html",
    "revision": "66cac2b63616a4a01264dba877621678"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "b9a4aaf11418f0410057d58e15d6358d"
  },
  {
    "url": "guide/file.html",
    "revision": "56185700d04bdccbc2fd973173169d48"
  },
  {
    "url": "guide/index.html",
    "revision": "d8e6ffdb34eb14654139236083e8bba5"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "ecf5f6fcbe9f44cdec93a79a3c4695ef"
  },
  {
    "url": "index.html",
    "revision": "46f5624acff18fe63e5c9c13ce227a3d"
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
