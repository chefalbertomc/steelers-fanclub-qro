const CACHE_NAME = 'steelers-qro-v2';
const urlsToCache = [
  './',
  './index.html',
  './credencial.html',
  './css/styles.css',
  './assets/logo.png',
  './assets/bww-buffalo.png',
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
  // Ignore non-GET requests (like POST uploads to Firebase)
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Ignore Firebase and Google API requests
  if (event.request.url.includes('googleapis.com') || event.request.url.includes('firebase')) {
    return;
  }

  event.respondWith(
    fetch(event.request).then(response => {
      return caches.open(CACHE_NAME).then(cache => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch(() => {
      return caches.match(event.request);
    })
  );
});
