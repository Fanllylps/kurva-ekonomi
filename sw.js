const CACHE_NAME = 'kurva-app-shell-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './assets/fonts/fonts.css',
  './assets/fonts/ibm-plex-mono-400.woff2',
  './assets/fonts/ibm-plex-mono-500.woff2',
  './assets/fonts/instrument-serif-italic.woff2',
  './assets/fonts/instrument-serif-regular.woff2',
  './assets/fonts/manrope-var.woff2',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './js/content-home.js',
  './js/content-uts.js',
  './js/content-m1.js',
  './js/content-m2.js',
  './js/content-m3.js',
  './js/content-m4.js',
  './js/content-m5.js',
  './js/content-m6.js',
  './js/content-m7.js',
  './js/content-formulas.js',
  './js/labs.js',
  './js/app.js',
  './js/pwa.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key.startsWith('kurva-app-shell-') && key !== CACHE_NAME)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(async () => {
        return (await caches.match(request))
          || (await caches.match('./index.html'))
          || (await caches.match('./'));
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(request).then((response) => {
        if (response.ok && response.type === 'basic') {
          const responseCopy = response.clone();
          event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(request, responseCopy)));
        }
        return response;
      });
    })
  );
});
