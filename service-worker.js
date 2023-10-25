// Wersja Service Workera
const cacheVersion = 'v2';

// Instalacja Service Workera
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheVersion).then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./main.css",
                "./app.js",
                "./manifest.json",
                "./img/icon.png",
                "./img/logo.png",
                "./modules/addTaskToArray.js",
                "./modules/deleteTask.js",
                "./modules/displayTaskFromArray.js",
                "./modules/functionLocalStorage.js"
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );v
});

// Aktualizacja Pamięci podręczne wersji Service Workera
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.kays().then(cacheName => {
            return Promise.all(
                cacheName.map(cacheName => {
                    if (cacheName !== cacheVersion) {
                        return caches.delete(cacheName);
                    }                    
                })
            );
        })
    );
});