const CACHE_NAME = 'steelers-qro-v10';
const urlsToCache = [
  './',
  './index.html',
  './credencial.html',
  './partidos.html',
  './avisos.html',
  './promos.html',
  './admin.html',
  './scanner.html',
  './manifest.json',
  './manifest-admin.json',
  './manifest-qr.json',
  './css/styles.css',
  './assets/logo.png',
  './assets/bww-buffalo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png',
  './assets/icon-qr-192.png',
  './assets/icon-qr-512.png',
  './assets/apple-touch-icon-qr.png'
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

// ---- NOTIFICACIONES PUSH ----
self.addEventListener('push', event => {
  let data = { title: 'Steelers Nation Querétaro 🏈', body: '¡Nuevo aviso disponible del Club!', icon: './assets/icon-192.png' };
  if (event.data) {
    try {
      data = event.data.json();
    } catch(e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || './assets/icon-192.png',
    badge: './assets/icon-192.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || './credencial.html' }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const urlToOpen = event.notification.data ? event.notification.data.url : './credencial.html';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes('credencial.html') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
