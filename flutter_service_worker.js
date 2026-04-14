'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2aa08bf289c782e25b5c58e6b569671b",
"flutter_bootstrap.js": "e76ea4cb3ebc078325bcaf19abe2ef36",
"manifest.json": "0065e39b784f1ca2b781baf9e662935a",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "b0290448cca99cc108a1720e6864fed1",
"/": "b0290448cca99cc108a1720e6864fed1",
"main.dart.js": "783f933398ee2b2bc946fd8c70df11af",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"assets/AssetManifest.bin": "fb9e11a9a67f3d711c576056ba3bb05f",
"assets/fonts/MaterialIcons-Regular.otf": "865f77b5d608676817f46a31b6cf9c85",
"assets/AssetManifest.bin.json": "c58f5db1111193561e576cc4778ce6bd",
"assets/AssetManifest.json": "2d812210a26b3484fbef18fa0d8e6338",
"assets/NOTICES": "361e400a6e36f55d4ba6b36f137b9182",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "7d30c9f7e3844881a7430a10658a1cb2",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/assets/fonts/playfair-display-sc/PlayfairDisplaySC-Regular.ttf": "0b245014684dc4a1c82f60e12bb73b94",
"assets/assets/fonts/gilmer-medium/gilmer-medium.ttf": "e1ebe71b89afcd42e8b2825645614a01",
"assets/assets/icons/lucide_play.png": "f05d18c847da7cdd8b41b25ad08e49aa",
"assets/assets/icons/lucide_play.svg": "413cb33ccce5fc6470ec4fa6ffbda9e0",
"assets/assets/Polygon%25201.svg": "bb214952f9d7da01229eb0d54a6ce6c2",
"assets/assets/lucide_play.svg": "dcdf95fb7f009d66c8275433ac332018",
"assets/assets/page%25203/episodes/episode_1.png": "2c68f09c10867451ec1c4d7f70f37a3e",
"assets/assets/page%25203/episodes/episode_4.png": "e19ad617d6731a08c14b69890b68cf26",
"assets/assets/page%25203/episodes/episode_3.png": "c20f805f037be1274e6891e4cc3068cf",
"assets/assets/page%25203/episodes/Frame%252036.png": "61ef54fa99a5148d5b4ee3a5f1d276ef",
"assets/assets/page%25203/episodes/Frame%252032.png": "de16c06512ba282eec223d73666206a9",
"assets/assets/page%25203/episodes/episode_5.png": "b68d4015fcf285703fec874f465185ea",
"assets/assets/page%25203/episodes/Frame%252037.png": "78be9c8174cfeb9511ba10920606fb2c",
"assets/assets/page%25203/episodes/episode_2.png": "bda6f1a798587c4723ea5f763715a524",
"assets/assets/page%25203/episodes/Frame%252035.png": "85e9f1f8a18f3072ceeb900a75f11c49",
"assets/assets/page%25203/episodes/Frame%252031.png": "77666cbb114af4e9d14eb4cc2cb5c8cc",
"assets/assets/page%25203/episodes/Capture%2520d%25E2%2580%2599e%25CC%2581cran%25202026-03-13%2520a%25CC%2580%252000.53.48%25201.png": "d71d52e766f7193d84f6762e83f74329",
"assets/assets/page%25203/episodes/episode_6.png": "ac16c1eae9da72a2276fe70e8eb7bb7f",
"assets/assets/page%25203/Frame%252019%2520background.jpg": "3d4ed8e67047c44dd45030b6513a6173",
"assets/assets/page%25203/Frame%252010.jpg": "e05a6fe5c7dd3bd731d47ae44fd287ae",
"assets/assets/page%25203/videos/chihia.mp4": "88e5762729d4f106e5f8d0023b85fbbb",
"assets/assets/page%25203/videos/tamarix.mp4": "0b752348013b098b433f04bb2880eefe",
"assets/assets/page%25203/videos/talhsahraoui.mp4": "faa51384e391e825cdfe5ef9928669a1",
"assets/assets/page%25203/videos/Kamounsoufi.mp4": "231a9c51dae0674a90f331c6949e334c",
"assets/assets/page%25203/videos/aagaya.mp4": "a74482d3903feb5297b5ebc9275ca8b9",
"assets/assets/page%25203/videos/kamcha.mp4": "c447896a058b633cf2407c96ce8246f4",
"assets/assets/page%25201/Frame%252019%2520background.jpg": "3d4ed8e67047c44dd45030b6513a6173",
"assets/assets/page%25201/frame%252019%2520image.png": "6e72b2df2b531bbef6fb2898f2abc1c5",
"assets/assets/page%25202/Frame%252019%2520background.jpg": "3d4ed8e67047c44dd45030b6513a6173",
"assets/assets/logo%2520atlas.png": "197278a237ea3a80e2bf8654e4673ee5",
"assets/assets/polygon_1.svg": "bb214952f9d7da01229eb0d54a6ce6c2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
