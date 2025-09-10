const CACHE_NAME = 'ventassys-cache-v1.4'; // Incrementa la versión para forzar la actualización
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/dist/output.css', // <-- CORRECCIÓN: Añadir el CSS compilado
    '/VentasSyspro.png',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    // Scripts JS
    '/js/firebase-config.js',
    '/js/state.js',
    '/js/templates.js',
    '/js/utils.js',
    '/js/auth.js',
    '/js/app.js',
    '/js/views/crud.js',
    '/js/views/dashboard.js',
    '/js/views/inventory.js',
    '/js/views/sales.js',
    '/js/views/reports.js',
    '/js/views/expenses.js',
    '/js/views/closing.js',
    '/js/views/priceList.js',
    '/js/views/exchangeRate.js',
    '/js/views/settings.js',
    '/js/views/customers.js',
    '/js/views/suppliers.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});