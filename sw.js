const CACHE_NAME = 'steelers-qro-v3';
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

// Instalar y tomar control de inmediato
self.addEventListener('install', event => {
  self.skipWaiting(); // No esperar a que el viejo SW se desactive
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activar y limpiar cachés anteriores
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim()) // Tomar control de todas las pestañas abiertas
  );
});

self.addEventListener('fetch', event => {
  // Ignorar peticiones que no son GET
  if (event.request.method !== 'GET') return;

  // Ignorar Firebase, Google APIs y firebasestorage (datos dinámicos)
  const url = event.request.url;
  if (url.includes('googleapis.com') || url.includes('firebase') || url.includes('gstatic.com')) {
    return;
  }

  // Network-first: siempre intenta la red, si falla usa caché
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
