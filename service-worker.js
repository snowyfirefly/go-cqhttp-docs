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
    "revision": "e12d442acf0cfc506a8d3b7751b5e75e"
  },
  {
    "url": "api/index.html",
    "revision": "98a5a83ff56daee02c7e867fc4b75a56"
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
    "url": "assets/js/12.e61d9c83.js",
    "revision": "b47cb06c2756d601ae01a26ece4ddb9f"
  },
  {
    "url": "assets/js/13.0df1e820.js",
    "revision": "9e3b09682163e6aa06b17f100613639f"
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
    "url": "assets/js/9.9471adeb.js",
    "revision": "be93c6b5fe01e4dda5d548548a20c99d"
  },
  {
    "url": "assets/js/app.288dd327.js",
    "revision": "e86c0e2548750779b61a48a305089588"
  },
  {
    "url": "cqcode/index.html",
    "revision": "779b246dc22f98de1ed88738c5834e99"
  },
  {
    "url": "event/index.html",
    "revision": "1397ee9e7cd4fdafddbec518e539202d"
  },
  {
    "url": "faq/index.html",
    "revision": "15136c47f941ac20e504afd63858508f"
  },
  {
    "url": "faq/slider.html",
    "revision": "be64c38a5e769a33db7b208db163e467"
  },
  {
    "url": "guide/achieve.html",
    "revision": "2a3653edb08e30e4f2edf4020f776c81"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "1cdd7f07ff5c71625389dd06fcb28278"
  },
  {
    "url": "guide/config.html",
    "revision": "f7a0713bae1ac7c96f89872f76ea53ce"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "b38ca721db82885930444fc5962d3a93"
  },
  {
    "url": "guide/file.html",
    "revision": "98a72e7da6d6023d5d66455116c7f3a2"
  },
  {
    "url": "guide/index.html",
    "revision": "e93786698a084375e9e78765669a974e"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "dc9480419e8b56afc72f6122dd48094e"
  },
  {
    "url": "index.html",
    "revision": "d33129e3b71c2dee51f05ccb4adde834"
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
