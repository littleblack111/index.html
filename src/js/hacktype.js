const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

let interval = null;

function hackType() {
    const elements = document.querySelectorAll(".hacktype");
    const intervals = [];

    elements.forEach((element) => {
        let iteration = 0;

        const interval = setInterval(() => {
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
            clearInterval(interval);
        }

        iteration += 1 / 5;
        }, 20);

        intervals.push(interval);
    });
}

hackType(); // Call hackType initially

setInterval(() => {
const elements = document.querySelectorAll(".hacktype");
    elements.forEach((element) => clearInterval(interval)); // Clear existing intervals
    hackType(); // Call hackType again
}, 10000); // Repeat every 10 seconds

// Check if the document becomes visible again
document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        hackType(); // Call hackType when the user comes back from being away
    }
});