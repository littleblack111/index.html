"use strict";

window.onpointermove = function (event) {
  var pageX = event.pageX,
    pageY = event.pageY;
  var momentumX = pageX + pageX - blob.offsetLeft;
  var momentumY = pageY + pageY - blob.offsetTop;
  blob.animate({
    left: "".concat(momentumX, "px"),
    top: "".concat(momentumY, "px")
  }, {
    duration: 1500,
    fill: "forwards"
  });
  blob.animate({
    left: "".concat(pageX, "px"),
    top: "".concat(pageY, "px")
  }, {
    duration: 1000,
    fill: "forwards"
  });
  blob.style.left = "".concat(pageX, "px");
  blob.style.top = "".concat(pageY, "px");
};