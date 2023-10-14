"use strict";

var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var interval = null;
function hackType() {
  var elements = document.querySelectorAll(".hacktype");
  var intervals = [];
  elements.forEach(function (element) {
    var iteration = 0;
    intervals.push(setInterval(function () {
      element.innerText = element.innerText.split("").map(function (letter, index) {
        if (index < iteration) {
          return element.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      }).join("");
      if (iteration >= element.dataset.value.length) {
        clearInterval(intervals.shift());
      }
      iteration += 1 / 5;
    }, 20));
  });
}
hackType(); // Call hackType initially

setInterval(function () {
  var intervals = document.querySelectorAll(".hacktype-interval");
  intervals.forEach(function (interval) {
    return clearInterval(interval);
  }); // Clear existing intervals
  hackType(); // Call hackType again
}, 10000); // Repeat every 5 seconds

// Check if the document becomes visible again
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    hackType(); // Call hackType when the user comes back from being away
  }
});