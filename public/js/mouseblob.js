"use strict";

window.onpointermove = function (event) {
  var x = event.pageX;
  var y = event.pageY;
  blob.animate({
    left: "".concat(x, "px"),
    top: "".concat(y, "px")
  }, {
    duration: 1000,
    fill: "forwards"
  });
  blob.style.left = x + 'px';
  blob.style.top = y + 'px';
};