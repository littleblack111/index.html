"use strict";

window.onpointermove = function (event) {
  var pageX = event.pageX,
    pageY = event.pageY;
  blob.animate({
    left: "".concat(pageX, "px"),
    top: "".concat(pageY, "px")
  }, {
    duration: 1000,
    fill: "forwards"
  });
};