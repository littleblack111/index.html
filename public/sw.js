const cacheName = 'cache-v1'
const resourceToPrecache = [
    '/',
    'index.html',
    '/css/',
    '/js/',
    '/pages/',
    '/fonts/'
]

self.addEventListener('install', event => {
    console.log("Service Worker: Installed");
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(resourceToPrecache)
        })
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});