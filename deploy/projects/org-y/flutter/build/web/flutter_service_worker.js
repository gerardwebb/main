'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_7.part.js": "e163a1bb335aedd9b533a5ba29e8d83a",
"assets/assets/icon/placeholder.png": "80ea1b812031c133602ad1e0c3a8e63a",
"assets/assets/env.json": "192445084fc999cc89417502713cedd5",
"assets/NOTICES": "8b03170b3c7376dc0e77ea6feeb85d20",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/AssetManifest.json": "1eb928744239a0fb2866b6668cbca85a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/i18n/lang_en.json": "7dcd29942cec48fd0a3c985533ff7ac5",
"assets/i18n/lang_it.arb": "56e994ae6aca1dd367523d031566d204",
"assets/i18n/lang_es.json": "5b19343ba004d5d5c8617efae8442bc4",
"assets/i18n/lang_ur.json": "60eac591ace7ca5ac5d73a2d93d89d61",
"assets/i18n/lang_en.arb": "7dcd29942cec48fd0a3c985533ff7ac5",
"assets/i18n/lang_it.json": "56e994ae6aca1dd367523d031566d204",
"assets/i18n/lang_fr.json": "106f6b2657445f24755217b000c4386e",
"assets/i18n/lang_de.arb": "1acd85cd957ab8e13dcb46f827c5b41a",
"assets/i18n/lang_fr.arb": "106f6b2657445f24755217b000c4386e",
"assets/i18n/lang_es.arb": "5b19343ba004d5d5c8617efae8442bc4",
"assets/i18n/intl_messages.arb": "a246b70df56e0f12c43633bd9a4091e3",
"assets/i18n/lang_de.json": "1acd85cd957ab8e13dcb46f827c5b41a",
"assets/i18n/lang_ur.arb": "60eac591ace7ca5ac5d73a2d93d89d61",
"assets/packages/sys_core/assets/hostconfig.json": "8e292127cde442bc66f64361cd8a5b85",
"assets/packages/sys_core/i18n/lang_en.json": "9be805b4d5f2df1eced50129bb94777e",
"assets/packages/sys_core/i18n/lang_it.arb": "e83f4aaca556e11cb2fa334bcc1e6089",
"assets/packages/sys_core/i18n/lang_es.json": "ace730c62de682ef14abc4a972b00e16",
"assets/packages/sys_core/i18n/lang_ur.json": "dc428e9defae9abd253688b5fbd7909d",
"assets/packages/sys_core/i18n/lang_en.arb": "9be805b4d5f2df1eced50129bb94777e",
"assets/packages/sys_core/i18n/lang_it.json": "e83f4aaca556e11cb2fa334bcc1e6089",
"assets/packages/sys_core/i18n/lang_fr.json": "726aac53ce51f3a97131cca5cf86648e",
"assets/packages/sys_core/i18n/lang_de.arb": "6cce98520a4ec04d8f1d6a97120b45e2",
"assets/packages/sys_core/i18n/lang_fr.arb": "726aac53ce51f3a97131cca5cf86648e",
"assets/packages/sys_core/i18n/lang_es.arb": "ace730c62de682ef14abc4a972b00e16",
"assets/packages/sys_core/i18n/intl_messages.arb": "8f7c0282be5a31358d0c3ce9704f0d6a",
"assets/packages/sys_core/i18n/lang_de.json": "6cce98520a4ec04d8f1d6a97120b45e2",
"assets/packages/sys_core/i18n/lang_ur.arb": "dc428e9defae9abd253688b5fbd7909d",
"assets/packages/bootstrapper/i18n/lang_en.json": "23a612d2198a635aff2741d1e770a6b2",
"assets/packages/bootstrapper/i18n/lang_it.arb": "62b797ff7c3b599a2b2376adee9ae607",
"assets/packages/bootstrapper/i18n/lang_es.json": "8f93545207a71cf2f6bcaacd5f4b56f4",
"assets/packages/bootstrapper/i18n/lang_ur.json": "c8e1fe872bce3a9302a39207216366c5",
"assets/packages/bootstrapper/i18n/lang_en.arb": "23a612d2198a635aff2741d1e770a6b2",
"assets/packages/bootstrapper/i18n/lang_it.json": "62b797ff7c3b599a2b2376adee9ae607",
"assets/packages/bootstrapper/i18n/lang_fr.json": "962e022e0bee27d3080fbec2f65faa7f",
"assets/packages/bootstrapper/i18n/lang_de.arb": "8c7128ce2577ecc6550b478f392d0f90",
"assets/packages/bootstrapper/i18n/lang_fr.arb": "962e022e0bee27d3080fbec2f65faa7f",
"assets/packages/bootstrapper/i18n/lang_es.arb": "8f93545207a71cf2f6bcaacd5f4b56f4",
"assets/packages/bootstrapper/i18n/intl_messages.arb": "cf83284155733c82cd98982226596c66",
"assets/packages/bootstrapper/i18n/lang_de.json": "8c7128ce2577ecc6550b478f392d0f90",
"assets/packages/bootstrapper/i18n/lang_ur.arb": "c8e1fe872bce3a9302a39207216366c5",
"assets/packages/mod_disco/i18n/lang_en.json": "7f5567aaf91e202837ff5b499685dcfa",
"assets/packages/mod_disco/i18n/lang_it.arb": "126f3a11efd2d599a5134d55c8d72aae",
"assets/packages/mod_disco/i18n/lang_es.json": "80be725b110ef295a9a8474e9a3c04c0",
"assets/packages/mod_disco/i18n/lang_ur.json": "5358b378c41622a325c82f3e37d76336",
"assets/packages/mod_disco/i18n/lang_en.arb": "7f5567aaf91e202837ff5b499685dcfa",
"assets/packages/mod_disco/i18n/lang_it.json": "126f3a11efd2d599a5134d55c8d72aae",
"assets/packages/mod_disco/i18n/lang_fr.json": "c6fe0d619a281d2279e4983aa9c44a30",
"assets/packages/mod_disco/i18n/lang_de.arb": "a27811ebc928c1a4e3b69c9a9d246a07",
"assets/packages/mod_disco/i18n/lang_fr.arb": "c6fe0d619a281d2279e4983aa9c44a30",
"assets/packages/mod_disco/i18n/lang_es.arb": "80be725b110ef295a9a8474e9a3c04c0",
"assets/packages/mod_disco/i18n/intl_messages.arb": "b3eff6eb7f54d6547aff72a153581692",
"assets/packages/mod_disco/i18n/lang_de.json": "a27811ebc928c1a4e3b69c9a9d246a07",
"assets/packages/mod_disco/i18n/lang_ur.arb": "5358b378c41622a325c82f3e37d76336",
"assets/packages/sys_share_sys_account_service/i18n/lang_en.json": "9f8493b6a54ddafea07bf7e45a78f65b",
"assets/packages/sys_share_sys_account_service/i18n/lang_it.arb": "327b313d7319d94862637c47fc0536c8",
"assets/packages/sys_share_sys_account_service/i18n/lang_es.json": "eb2868273211b095643cb9ccd31ed37d",
"assets/packages/sys_share_sys_account_service/i18n/lang_ur.json": "335ef56736e048616219e06a17b30509",
"assets/packages/sys_share_sys_account_service/i18n/lang_en.arb": "9f8493b6a54ddafea07bf7e45a78f65b",
"assets/packages/sys_share_sys_account_service/i18n/lang_it.json": "327b313d7319d94862637c47fc0536c8",
"assets/packages/sys_share_sys_account_service/i18n/lang_fr.json": "60c7ea23b1e86efd4549997f2b6a3a63",
"assets/packages/sys_share_sys_account_service/i18n/lang_de.arb": "6a1837875fb7705728ecaf2e1a1d32ae",
"assets/packages/sys_share_sys_account_service/i18n/lang_fr.arb": "60c7ea23b1e86efd4549997f2b6a3a63",
"assets/packages/sys_share_sys_account_service/i18n/lang_es.arb": "eb2868273211b095643cb9ccd31ed37d",
"assets/packages/sys_share_sys_account_service/i18n/intl_messages.arb": "2742f4937929e7047ed352ae00dae04a",
"assets/packages/sys_share_sys_account_service/i18n/lang_de.json": "6a1837875fb7705728ecaf2e1a1d32ae",
"assets/packages/sys_share_sys_account_service/i18n/lang_ur.arb": "335ef56736e048616219e06a17b30509",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"lang/he.json": "61368c258ee11088cc82114b10814879",
"lang/es.json": "4ff5caa5a2839013cdc55e25fa5c4015",
"lang/zh-cn.json": "40c431f16c06ad1defb9da6192bf89d9",
"lang/fr.json": "32f4db31c5475352b30114b282eae6ab",
"lang/en.json": "01f2ec2c38de3846be15e48be0438b27",
"lang/de.json": "f893a59ad803624b64a2a3e02d5732b9",
"main.dart.js_4.part.js": "bbf5098cdecf97bb64ae94593f51e0cd",
"main.dart.js_3.part.js": "895dfc32b95578e75206f8082cfcbb17",
"main.dart.js_1.part.js": "c605d71543f32029fa22617e4fa8ec30",
"version.json": "9ef47558e7ef526f1d8f0059e0b8bed7",
"manifest.json": "e76912b2c927d8ceaf0adc19179b1902",
"main.dart.js_5.part.js": "a7c81e443288f8352035e6851b62a283",
"icons/Icon-192.png": "176a86534259068744556ebb5588a8c4",
"icons/Icon-512.png": "176a86534259068744556ebb5588a8c4",
"index.html": "b522dd476576c0240851335a5c61d1b9",
"/": "b522dd476576c0240851335a5c61d1b9",
"main.dart.js_6.part.js": "c4371974e6746edd8ef5e4a6b912fbdc",
"main.dart.js": "ab0304e71503f640e8e1c9bb7c530e44",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_2.part.js": "b06e916c09da32d3a1e2175cafb9dfcc",
"main.dart.js_8.part.js": "dd8de9281c6391d1a32ef3a2308b9e4d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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