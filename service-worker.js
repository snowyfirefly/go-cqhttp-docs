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
    "revision": "705bf923a0399ce8a38a3e859205dddb"
  },
  {
    "url": "api/index.html",
    "revision": "3066acddfd6bc1ad90b52c08350bf0b2"
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
    "url": "assets/js/11.0b56db63.js",
    "revision": "e0806d6399dbe4f1e21e09ac36f6fbc5"
  },
  {
    "url": "assets/js/12.f65b11de.js",
    "revision": "ad32aeecf03c66aa81e3f1b0f60b974d"
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
    "url": "assets/js/app.c964278a.js",
    "revision": "48443819a8a721acf7913c3d08a0b7a9"
  },
  {
    "url": "cqcode/index.html",
    "revision": "2be41351bb6d93a16abc78d8df3ac098"
  },
  {
    "url": "event/index.html",
    "revision": "e758d30ec9b7c5d4314aa30efe0247a7"
  },
  {
    "url": "faq/index.html",
    "revision": "661d2f66403cb0eab96d6b7a4b1e21ef"
  },
  {
    "url": "faq/slider.html",
    "revision": "e3d785102ad5ed2dcd44471aba2a3e24"
  },
  {
    "url": "guide/achieve.html",
    "revision": "ac16e76842800b4b0749abf356dab432"
  },
  {
    "url": "guide/adminApi.html",
    "revision": "db0aa1dff1a54597601605f1fb8effc0"
  },
  {
    "url": "guide/config.html",
    "revision": "9d11db93099518e6b8e06ee47ba0f611"
  },
  {
    "url": "guide/eventfilter.html",
    "revision": "bfae480bba099f3c311fbca4f20324f6"
  },
  {
    "url": "guide/file.html",
    "revision": "c551e06212577c3c7b4df98cbca6a870"
  },
  {
    "url": "guide/index.html",
    "revision": "571d44e49289e1bb7d35154aa860e6b2"
  },
  {
    "url": "guide/quick_start.html",
    "revision": "8f054fd9576a0a846e3bb44590ab4156"
  },
  {
    "url": "index.html",
    "revision": "3dff29181e3cdb78dbe29fc996806925"
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
