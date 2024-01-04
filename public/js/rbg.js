"use strict";

document.body.style.transition = "background 1s ease-in-out";
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomGradient() {
  var rand3 = Math.floor(Math.random() * 3) + 1;
  if (rand3 === 1) {
    document.body.style.background = "linear-gradient(".concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ")");
  } else if (rand3 === 2) {
    document.body.style.background = "linear-gradient(".concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), "),\nlinear-gradient(").concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ")");
  } else {
    document.body.style.background = "linear-gradient(".concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), "),\nlinear-gradient(").concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), "),\nlinear-gradient(").concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ")");
  }
}
setRandomGradient();

// Execute setRandomGradient() every 1 minute
setInterval(setRandomGradient, 60000);