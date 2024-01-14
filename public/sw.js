const cacheName = 'cache-v1'
const resourceToPrecache = [
    '/',
    '/index.html',
    '/404.html',
    '/css/style.css',
    '/css/404.css',
    '/css/index.css',
    '/css/ghrepos.css',
    '/css/about.css',
    '/css/devicon.min.css',
    '/js/main.js',
    '/js/about.js',
    '/js/dynamicBlob.js',
    '/js/getrepo.js',
    '/js/hacktype.js',
    '/js/header.js',
    '/js/index.js',
    '/js/mouseblob.js',
    '/js/randomblob.js',
    '/js/rbg.js',
    '/js/tilt.conf.js',
    '/js/tilt.conf.noglare.js',
    '/js/tilt.js',
    '/js/2dtilt.js',
    // '/css/',
    // '/js/',
    // '/pages/',
    // '/fonts/'
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