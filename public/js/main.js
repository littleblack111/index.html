"use strict";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (reg) {
      console.log('sw.js Registered', reg);
    }).catch(function (err) {
      console.log('sw.js failed: ', err);
    });
  });
}