// Definieer een unieke naam voor de cache
const CACHE_NAME = 'taxi-qr-scanner-v1';

// Lijst van alle bestanden die de app nodig heeft om offline te werken.
// Dit omvat de pagina zelf, de iconen en de externe scripts.
const FILES_TO_CACHE = [
  './scanner.html',
  './favicon.png',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js',
  'https://cdn.jsdelivr.net/npm/lz-string@1.4.4/libs/lz-string.min.js'
];

// Installeer de service worker en voeg de bestanden toe aan de cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Caching van bestanden');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activeer de service worker en ruim eventuele oude caches op
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('Service Worker: Oude cache wordt verwijderd', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// Onderschep netwerkverzoeken en geef de bestanden terug vanuit de cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // Probeer eerst het verzoek uit de cache te halen
    caches.match(event.request).then((response) => {
      // Als het in de cache staat, geef het terug.
      // Anders, haal het van het netwerk.
      return response || fetch(event.request);
    })
  );
});
