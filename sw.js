const CACHE_NAME = 'cv-pwa-cache-v1';
const urlsToCache = [
  './',
  '/CV-DBP/index.html',
  '/CV-DBP/css/styles.css',
  '/CV-DBP/js/app.js',
  '/CV-DBP/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
