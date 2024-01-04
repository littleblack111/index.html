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
    var interval = setInterval(function () {
      element.innerText = element.innerText.split("").map(function (letter, index) {
        if (index < iteration) {
          return element.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      }).join("");
      if (iteration >= element.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 5;
    }, 20);
    intervals.push(interval);
  });
}
hackType();
setInterval(function () {
  var elements = document.querySelectorAll(".hacktype");
  elements.forEach(function (element) {
    return clearInterval(interval);
  });
  hackType();
}, 10000);
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    hackType();
  }
});