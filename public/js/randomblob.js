"use strict";

var isFirstTime = true;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setRandomBlob() {
  blob.style.width = getRandomInt(50, 100) + '%';
  blob.style.height = getRandomInt(50, 100) + '%';
  blob.style.rotate = getRandomInt(0, 360) + 'deg';
}
function randomPosition(element) {
  var x = getRandomInt(0, window.innerWidth);
  var y = getRandomInt(0, window.innerHeight);
  element.style.position = 'absolute';
  element.style.left = x + 'px';
  element.style.top = y + 'px';
}
function main() {
  if (!isFirstTime) {
    var fadeOutAnimation = blob.animate([{
      opacity: .40
    }, {
      opacity: 0,
      scale: .8
    }], {
      duration: 3000,
      iterations: 1,
      fill: 'forwards'
    });
    fadeOutAnimation.onfinish = function () {
      setRandomBlob();
      randomPosition(blob);
      blob.animate([{
        opacity: 0,
        scale: .8
      }, {
        opacity: .40,
        scale: 1
      }], {
        duration: 3000,
        iterations: 1,
        fill: 'forwards'
      });
    };
  } else {
    setRandomBlob();
    randomPosition(blob);
    blob.animate([{
      opacity: 0
    }, {
      opacity: .40
    }], {
      duration: 3000,
      iterations: 1,
      fill: 'forwards'
    });
    isFirstTime = false;
  }
  setTimeout(main, getRandomInt(7500, 30000));
}
main();