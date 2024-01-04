"use strict";

var tilt = document.querySelector('#sdtilt');
tilt.addEventListener('mousemove', function (e) {
  var rect = tilt.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  var xc = rect.width / 2;
  var yc = rect.height / 2;
  var dx = x - xc;
  var dy = y - yc;
  tilt.style.transform = 'rotateX(' + -dy / 5 + 'deg) rotateY(' + dx / 5 + 'deg)';
});
tilt.addEventListener('mouseleave', function (e) {
  tilt.style.transform = '';
});