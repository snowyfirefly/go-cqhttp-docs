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
    "revision": "d8696405edbc0a86417c9a7e71100694"
  },
  {
    "url": "api/index.html",
    "revision": "560089d7f91f79125c62f6cc28216c1d"
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
    "url": "assets/js/app.c3f745b6.js",
    "revision": "0baf42a4fbc75ed1a5db33e6aae08553"
  },
  {
    "url": "cqcode/index.html",
    "revision": "4832feb45d66cd6d7896ba9b1bef24ad"
  },
  {
    "url": "event/index.html",
    "revision": "8c7225dad423c8b7458c46cd9834d781"
  },
  {
    "url": "faq/index.html",
    "revision": "95e8b575c3717446a25ff9b9e1251c98"
  },
  {
    "url": "faq/slider.html",
    "revision": "6d570bf24c6a83e5a5e895cafae58464"
  },
  {
    "url": "guide/achieve.html",
    "revision": "c8d2dbbab57fceda4692f27d2e0d8a48"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "1e88bc9b8412d0f318d6b2a4a5731bb8"
  },
  {
    "url": "guide/config.html",
    "revision": "475fafd1c25d17a27c0148c3ee4769eb"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "e17baf6847cd19b2e6bfdfaa1099d003"
  },
  {
    "url": "guide/file.html",
    "revision": "4c5251da7267aeddf2cfa8a2f60bb31f"
  },
  {
    "url": "guide/index.html",
    "revision": "43e6bd6705ff58b5cec84429043c92d9"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "0744748846b55626f0899f6df425a34c"
  },
  {
    "url": "index.html",
    "revision": "0fc9e12596c8a20bf334bdf04343ca5b"
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
