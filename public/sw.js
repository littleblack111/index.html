"use strict";var cacheName="cache-v1",resourceToPrecache=["/","/index.html","/404.html","/pages/info/about.html","/pages/repo/github/repos.html","/css/style.css","/css/404.css","/css/index.css","/css/ghrepo.css","/css/about.css","/css/devicon.min.css","/js/main.js","/js/about.js","/js/dynamicBlob.js","/js/getrepo.js","/js/hacktype.js","/js/header.js","/js/index.js","/js/mouseblob.js","/js/randomblob.js","/js/rbg.js","/js/tilt.conf.js","/js/tilt.conf.noglare.js","/js/tilt.js","/js/2dtilt.js","/fonts/Hacked-KerX.ttf","/fonts/SmoothElegantRegular-ZLv3.ttf","/fonts/LigaJetBrainsMonoNerdFont-Regular.ttf","/fonts/Big500-8MLOM.ttf","/fonts/Monoton.ttf","/fonts/RockSalt-Regular.ttf","/fonts/audiowide.ttf"];caches.keys().then(function(){for(var a,b=0,c=resourceToPrecache;b<c.length;b++)a=c[b],caches.delete(a)}),self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return a.addAll(resourceToPrecache)}))}),self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){return b||fetch(a.request)}))}),self.addEventListener("activate",function(a){a.waitUntil(caches.keys().then(function(a){return Promise.all(a.filter(function(){return!0}).map(function(a){return caches.delete(a)}))}))});