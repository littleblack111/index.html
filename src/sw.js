const cacheName = 'cache-v1'
const resourceToPrecache = [
    '/',
    '/index.html',
    '/404.html',
    '/pages/info/about.html',
    '/pages/repo/github/repos.html',
    '/css/style.css',
    '/css/404.css',
    '/css/index.css',
    '/css/ghrepo.css',
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
    '/fonts/Hacked-KerX.ttf',
    '/fonts/SmoothElegantRegular-ZLv3.ttf',
    '/fonts/LigaJetBrainsMonoNerdFont-Regular.ttf',
    '/fonts/Big500-8MLOM.ttf',
    '/fonts/Monoton.ttf',
    '/fonts/RockSalt-Regular.ttf',
    '/fonts/audiowide.ttf'
    // '/css/',
    // '/js/',
    // '/pages/',
    // '/fonts/'
]

caches.keys().then(function(names) {
    for (let name of resourceToPrecache)
        caches.delete(name);
});

self.addEventListener('install', event => {
    // console.log("Service Worker: Installed");
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

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // return currentCacheName !== cacheName;
          return true
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
