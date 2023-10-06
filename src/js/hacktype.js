const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

let interval = null;

function hackType() {
  const elements = document.querySelectorAll(".hacktype");
  let intervals = [];

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
  const intervals = document.querySelectorAll(".hacktype-interval");
  intervals.forEach((interval) => clearInterval(interval)); // Clear existing intervals
  hackType(); // Call hackType again
}, 10000); // Repeat every 5 seconds

// Check if the document becomes visible again
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    hackType(); // Call hackType when the user comes back from being away
  }
});
