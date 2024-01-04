"use strict";

aboutPage = document.querySelector(".aboutPage");
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
    aboutPage.style.background = "linear-gradient(".concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ")");
  } else if (rand3 === 2) {
    aboutPage.style.background = "linear-gradient(".concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), "),\n    linear-gradient(").concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ")");
  } else {
    aboutPage.style.background = "linear-gradient(".concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), "),\n    linear-gradient(").concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), "),\n    linear-gradient(").concat(Math.floor(Math.random() * 180), "deg, ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ", ").concat(getRandomColor(), ")");
  }
}
setRandomGradient();

// Execute setRandomGradient() every 1 minute
setInterval(setRandomGradient, 60000);