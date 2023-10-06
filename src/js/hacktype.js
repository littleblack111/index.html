const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

let interval = null;

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hacktype");
  let intervals = [];

  function hackType() {
    elements.forEach((element) => {
      let iteration = 0;

      intervals.push(
        setInterval(() => {
          element.innerText = element.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return element.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= element.dataset.value.length) {
            clearInterval(intervals.shift());
          }

          iteration += 1 / 5;
        }, 20)
      );
    });
  }

  hackType(); // Call hackType initially

  setInterval(() => {
    intervals.forEach((interval) => clearInterval(interval)); // Clear existing intervals
    intervals = []; // Reset intervals array
    hackType(); // Call hackType again
  }, 10000); // Repeat every 5 seconds
});
