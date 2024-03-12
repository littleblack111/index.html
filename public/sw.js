"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
caches.keys().then(function (names) {
  var _iterator = _createForOfIteratorHelper(names),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      caches.delete(name);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
var cacheName = 'cache-v1';
var resourceToPrecache = ['/', '/index.html', '/404.html', '/pages/info/about.html', '/pages/repo/github/repos.html', '/css/style.css', '/css/404.css', '/css/index.css', '/css/ghrepo.css', '/css/about.css', '/css/devicon.min.css', '/js/main.js', '/js/about.js', '/js/dynamicBlob.js', '/js/getrepo.js', '/js/hacktype.js', '/js/header.js', '/js/index.js', '/js/mouseblob.js', '/js/randomblob.js', '/js/rbg.js', '/js/tilt.conf.js', '/js/tilt.conf.noglare.js', '/js/tilt.js', '/js/2dtilt.js', '/fonts/Hacked-KerX.ttf', '/fonts/SmoothElegantRegular-ZLv3.ttf', '/fonts/LigaJetBrainsMonoNerdFont-Regular.ttf', '/fonts/Big500-8MLOM.ttf', '/fonts/Monoton.ttf', '/fonts/RockSalt-Regular.ttf', '/fonts/audiowide.ttf'];
self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    return cache.addAll(resourceToPrecache);
  }));
});
self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (cachedResponse) {
    return cachedResponse || fetch(event.request);
  }));
});