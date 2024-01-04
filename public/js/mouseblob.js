"use strict";

// const blob = document.querySelector('.sblob');

// window.onpointermove = event => { 
//     const { clientX, clientY } = event;
//     blob.animate({
//         left: `${clientX}px`,
//         top: `${clientY}px`
//     }, { duration: 1000, fill: "forwards" });
// }

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