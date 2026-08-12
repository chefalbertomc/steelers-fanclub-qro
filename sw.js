const CACHE_NAME = 'steelers-qro-v1';
const urlsToCache = [
  './',
  './index.html',
  './credencial.html',
  './css/styles.css',
  './assets/logo.png',
  './assets/bww-buffalo.png',
  './assets/calendario-temporada.jpg',
  './assets/calendario-pretemporada.jpg',
  './assets/icon-192.png',
  './assets/icon-512.png'
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
