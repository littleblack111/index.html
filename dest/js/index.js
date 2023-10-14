"use strict";

var obj = document.getElementById('infos');
var topBar = document.getElementById('navBarHeader');
window.addEventListener('scroll', function () {
  var value = window.scrollY;
  obj.style.marginTop = value * 2.5 + 'px';
  console.log("==============");
  console.log(topBar.style.height);
  console.log(value);
}, {
  passive: true
});