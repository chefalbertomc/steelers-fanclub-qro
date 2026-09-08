// ============================================
// STEELERS FAN CLUB QRO — Service Worker
// Version: steelers-qro-v18
// ============================================

const CACHE_NAME = 'steelers-qro-v18';
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
  './js/firebase-config.js',
  './assets/logo.png',
  './assets/bww-buffalo.png',
  './assets/drinks-and-wins-logo.jpg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png',
  './assets/steelers-nation-qro.png'
];

// Instalar y tomar control de inmediato sin fallar si un recurso individual falla
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await Promise.allSettled(
        urlsToCache.map(async url => {
          try {
            const res = await fetch(url, { cache: 'no-cache' });
            if (res && res.ok) {
              await cache.put(url, res);
            }
          } catch (e) {
            // Ignorar fallo de precache individual
          }
        })
      );
    })
  );
});

// Activar y limpiar cachés anteriores
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Mensaje para forzar skipWaiting
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  // 1. Solo interceptar peticiones GET
  if (event.request.method !== 'GET') return;

  const reqUrl = new URL(event.request.url);

  // 2. CRÍTICO: Dejar pasar de forma nativa TODAS las peticiones externas
  // (Firebase, Firestore, Google APIs, CDNs unpkg/cdnjs, ESPN, fonts, etc.)
  // NUNCA interceptar dominios de terceros en el SW.
  if (reqUrl.origin !== self.location.origin) {
    return;
  }

  // 3. Network-first para recursos propios de la PWA
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Solo guardar en caché si la respuesta es exitosa (200), del mismo origen y sin redirección
        if (response && response.status === 200 && response.type === 'basic' && !response.redirected) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone).catch(() => {});
          }).catch(() => {});
        }
        return response;
      })
      .catch(async () => {
        // Si no hay red, buscar en caché
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // Si es una navegación HTML y falló la red, servir página principal en caché
        if (event.request.mode === 'navigate') {
          const fallback = await caches.match('./credencial.html') || await caches.match('./index.html');
          if (fallback) return fallback;
        }

        // Respuesta limpia en vez de lanzar error de red (evita ERR_FAILED)
        return new Response('Sin conexión a internet. Revisa tu red y recarga.', {
          status: 503,
          statusText: 'Offline',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
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
