'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2aa08bf289c782e25b5c58e6b569671b",
"flutter_bootstrap.js": "adecd40b9b5d234e289718facb911750",
"manifest.json": "0065e39b784f1ca2b781baf9e662935a",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/COMMIT_EDITMSG": "e68c38965d77702295709349d66cecaf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/d2/a2ed4d7cb613af9e8c002492ba6fdba0c39589": "a01078430152996db15463199229e042",
".git/objects/24/a4e1d5fc1c935b833b5e5e1cb5dbec28f005a0": "1eabc3dbf291bb7c71c995ccb886b727",
".git/objects/cf/6279b695c9cc8f2c41939823c4ec1fe9fb3d39": "cfb18ffa2da29cf1b867eb656ae9717e",
".git/objects/79/85c687a8edb7ad83263907fd234e9bf6851892": "8b3854b741c954e6f97ea575acebe23e",
".git/objects/31/5fbcd033facf2af5d4f14588c86a8033682de2": "2e18d7f7cdc4c30a2d5cf951a5dcfce3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/5b/7f7e4b2b415d7862967a201026e7e701ab4a90": "9fe3cae717c70df7422b2333bb7b4d58",
".git/objects/84/87747af6c9c1cccc63d9c8c681718ac7c3cc6a": "88431b12407ed6b4421d049add42fcdc",
".git/objects/f8/7cc2c68a00e1b343d374e89d6aec5c28ba66d8": "afb92bfe7736e12b9792b02752138575",
".git/objects/03/4e96a4205de80e5ed5688b08a87a1e6cc49038": "70502323b959892694694db327183cb5",
".git/objects/13/5a02c806ea7598c272ae9fe5406f342ff559d7": "2acf7284df8402a65e4b163e220c4324",
".git/objects/71/9edcf9a76801b98dc86d2d71091428bc062ff6": "bc80a7b049c1c7486d39cbe3716987ca",
".git/objects/c8/e207e9b809e806a1882f83e7082149cb976160": "09a1530a579c87a2ca004c3d19611fc8",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/f2/a59e48cf462114c8eed9e3ac6fff24c8aa3d5e": "39a96ae0b1b09e3579c13f7a462e56ad",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/3c/ebbab128a9e094fba7ab561c8ba3c0d0f42166": "72931012b4cc8fe16b1eb194b2e9d182",
".git/objects/c0/3008fc0d66a5c335a5757191b474f4dc92f354": "81957bc2304e51c781190bb06ccdcbff",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/67/58d483cf909b1fc1292d88da53e3469db532a8": "22ea538065aefb40e4d44316f314ccb2",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/c6/473d34029c54d0ead4a7ecb0c4b8c7c21ce5ac": "4e2470fd3875c3b670fbe5bf5414845b",
".git/objects/30/79c3655a5841fac6e1ffedadc74b5e95fce939": "7caffdce0acddedcdbbb672409558a8e",
".git/objects/ee/51998fd4c7f2890620b5a46383176fb2267ebf": "defa61b22bfef5b8140ff94af82ccd79",
".git/objects/ee/80adfa83d48556c3a284eab45fbc329846ea71": "95b2c21ca0f7ea6bbb078a84f2874297",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/b6/3cebb5798b996630812c550f42c2c9c01e5bf5": "61796526c00b15a4bab7f85d1f1aff3f",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/5e/30915c342a535df9bce3d9331053aab3692b49": "60ede6008daf4c167a773bd867614848",
".git/objects/09/338a52c68a16044114edfb9c049837dd82e5b3": "8e114d2745b8d85aaac1ee34e2ffd72b",
".git/objects/1f/d79237dfff7cb4fab18bb75c8fb67de7f7f971": "c8b0655b603ba4f2c2ba0ffdd719d90a",
".git/objects/1f/4ae7d8fd11d97538a84ec800adfcf4fc755d71": "6688cbf32bc00c47340bead88e2644c5",
".git/objects/c2/209b4e70d46bce2b342889d8a7805dcdb7c517": "496fc61ae15a2f32fea1351c49711c0e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/15/f7429eb33d4368fcbd93d7ecad6c58b22af0e2": "ff39195c1871e8f3a9b2607cf45613d4",
".git/objects/75/a875e01541ba0fdcea179f4697446546c05738": "8402b2ad5c4c79e37f1bb921d8b6d805",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c399ca83d651edeafa78a11415bf811d198929": "f4cfc8a1141defec707db21df8f3d14a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/2a124c87df3a7f04883eb99cb521541f9bb919": "2c348cb90825276202f14cda16f39464",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/17/0b5d19154c9bb60a7d02e5e26d42298bd37b17": "605f152ba7d67733efedf9c4ddf02676",
".git/objects/9d/39c7a4559f18e93c72c9c14e1d20614fc15ab3": "ae32611798ddfa9e38c19d0b7c34a557",
".git/objects/74/2186a71923177e28075ea93d4bcb15e4384d67": "d6465dde0b7752f57ccd0a6b98c16ee6",
".git/objects/e9/a7e9e259992df24d36fdcc92665d0387692e7c": "6abe8da8e04104f6188c4945e5d8039e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/44/78320cca469a9dc907050a010c3be43caa99b6": "5f12160be4f6790aa869c61db075f0f2",
".git/objects/b3/612f44ea5caf55c32d95a1feb0c34c6b7179fc": "1a801179a95c0084d7019a6f24a81b3b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/27/525d887c6d7e68b9fc88b01c42b391e07d2efc": "b5b4a4e712d8840338a86ddfabee8fd4",
".git/objects/f0/5141a0e61cadb77b3a609ea15f3ef7591b83c7": "8cc401b98a615b088297f12a30cc075f",
".git/objects/f0/af509f4b473748aff4a7ccec2beb3802975dea": "f9651603f7437fd99aedb3fe910d474d",
".git/objects/bc/fdf14b295e24ec9d8ade4be7619a403336ee0e": "98aaae3ee2d5d39ce65ce66c1f78e887",
".git/objects/cb/fd0363d461639fff330a89e1e9f4753bd355f7": "bf3f381605537f7d1c1df9b5486b508e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/bd992b388db0ba6ff1b0c7e0fadacfa25fd387": "f4e11904d9043529dc249bcfdb714b76",
".git/objects/6d/6fecaf0917a6764e89d0f297f0776895fea2c4": "94e7ab59a7ac085929e74995056a4d32",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/017e95e15bd17929b025f1480a5e15d4bd5b23": "b4b2a764cad4cb029acb36dbaaa3e362",
".git/objects/e6/5a8f5d35e778216807f669d55313f3dbe19dbb": "4b71fe284cc5918f843299dfb444c268",
".git/objects/e6/f6455346d496f96a4cb0a330a99b9ed09edadb": "dd2917ab55a20cedc5f8bc8feaf3a1dd",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/6c/90efc1a4bb745b16b2e5ed09cb03c8de48774a": "7dd73b0e2fcae6d420fbf95fd0a3c758",
".git/objects/6c/14004986a22b15dbb31e824576000169fa4cae": "8916d9573e35918e11a770891e382a04",
".git/objects/d4/2a49cf89c9ef35ad46f158e0c01651dfb1d0cf": "221176115ecf59083eddc77667eb1a23",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/0f/ff21cb89dd9d2d38380f3d7d6f4e17b1a4b364": "b94e3d0b7511440f64986aa0a18836dd",
".git/objects/9a/2b9e0e0943bea482d4aef33b986833f0205da5": "00b97f09ce9933504452a73c621ec32d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/02/0ecab06d05f57d078c2934969e09a029ca5d42": "352c6ca41d44f3b8c23f4a98615ddef4",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/eb/2e6ac6dc24a8cc1507e86b4892e41669adfab0": "0200dd51a665e09335fe9235ea294518",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/08/cc52b3551a027cabd980007bc71e8285f4a9b9": "5419988f388ef6157a18a5d37436bb8c",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/130a189f7da91621651b70265dd19f0933e117": "1578dc78b0cd73948fb06e07f74f7683",
".git/config": "7809fe6ef3ee84086e2d6e083479a8a4",
".git/index": "1ca8e7f73eb5208efab3f0c665a2451e",
".git/logs/HEAD": "310f61d5f89c671d05cba933a0cef937",
".git/logs/refs/heads/master": "310f61d5f89c671d05cba933a0cef937",
".git/logs/refs/remotes/origin/main": "45ae62e0b53395ca4e31d7ba64a73610",
".git/refs/heads/master": "7995776813b681193869cf10c50c272b",
".git/refs/remotes/origin/main": "7995776813b681193869cf10c50c272b",
"index.html": "b0290448cca99cc108a1720e6864fed1",
"/": "b0290448cca99cc108a1720e6864fed1",
"main.dart.js": "0e5efde68f0c4e41a8e9eea9dea2419b",
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
"assets/AssetManifest.bin": "8ce1e954f9ff7e1f6e6328d33f521be2",
"assets/fonts/MaterialIcons-Regular.otf": "865f77b5d608676817f46a31b6cf9c85",
"assets/AssetManifest.bin.json": "61dfe29c224ee3fe79b8f2a9075ab5ee",
"assets/AssetManifest.json": "e9bedadba095ccff51833caf24ae4deb",
"assets/NOTICES": "f894f62cb0262ef2f27ba66f3015733f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "7d30c9f7e3844881a7430a10658a1cb2",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/assets/fonts/playfair-display-sc/PlayfairDisplaySC-Regular.ttf": "0b245014684dc4a1c82f60e12bb73b94",
"assets/assets/fonts/gilmer-medium/gilmer-medium.ttf": "e1ebe71b89afcd42e8b2825645614a01",
"assets/assets/EP%25203%2520TAMARIX%2520subs%2520def.mp4": "928503bd0958586b7f207549084c2c61",
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
"assets/assets/page%25201/Frame%252019%2520background.jpg": "3d4ed8e67047c44dd45030b6513a6173",
"assets/assets/page%25201/frame%252019%2520image.png": "6e72b2df2b531bbef6fb2898f2abc1c5",
"assets/assets/page%25202/Frame%252019%2520background.jpg": "3d4ed8e67047c44dd45030b6513a6173",
"assets/assets/logo%2520atlas.png": "197278a237ea3a80e2bf8654e4673ee5",
"assets/assets/video%2520phone.mp4": "92277e22f9fb18b5a4c62e5c4d66a346",
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
