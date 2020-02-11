'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/manifest.json": "3745d29740ebdb1e5bcc6f73ab4bc900",
"/index.html": "4876bdc0bdda368c94a70f83068174a1",
"/main.dart.js": "f9ea417371388de9cfdfe43203f9a6e2",
"/assets/android/app/src/main/res/drawable-hdpi/splash.png": "964df50e100037e03e685d8477e6b555",
"/assets/android/app/src/main/res/drawable-xxhdpi/splash.png": "964df50e100037e03e685d8477e6b555",
"/assets/android/app/src/main/res/drawable-mdpi/splash.png": "964df50e100037e03e685d8477e6b555",
"/assets/android/app/src/main/res/drawable-xhdpi/splash.png": "964df50e100037e03e685d8477e6b555",
"/assets/android/app/src/main/res/drawable-xxxhdpi/splash.png": "964df50e100037e03e685d8477e6b555",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "207a46e49f9487514b0e17321c701479",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/splash.png": "964df50e100037e03e685d8477e6b555",
"/assets/LICENSE": "4aca3c6eea8d2831f2dffdf55c026eaf",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
