"use strict";

var blob = document.querySelector('#blob');
var blobData = blob.dataset.forceForm;
function loadScript(src) {
  var script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
}
var blobItem;
if (blobData) {
  blobItem = blobData;
} else {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || window.orientation > 1) {
    blobItem = "random";
  } else {
    blobItem = "mouse";
  }
}
if (blobItem == "mouse") {
  loadScript('/js/mouseblob.js');
} else if (blobItem == "random") {
  loadScript('/js/randomblob.js');
} else {
  throw new Error("Unknown blob type");
}