// Random Background color

// aboutPage = document.querySelector(".aboutPage")

// function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// function setRandomGradient() {
//     const rand3 = Math.floor(Math.random() * 3) + 1;
//     if (rand3 === 1) {
//         aboutPage.style.background = `linear-gradient(${Math.floor(
//         Math.random() * 180
//         )}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
//     } else if (rand3 === 2) {
//         aboutPage.style.background = `linear-gradient(${Math.floor(
//         Math.random() * 180
//         )}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}),
//     linear-gradient(${Math.floor(
//         Math.random() * 180
//         )}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
//     } else {
//         aboutPage.style.background = `linear-gradient(${Math.floor(
//         Math.random() * 180
//         )}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}),
//     linear-gradient(${Math.floor(
//         Math.random() * 180
//         )}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}),
//     linear-gradient(${Math.floor(
//         Math.random() * 180
//         )}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
//     }
// }

// setRandomGradient();

// Execute setRandomGradient() every 1 minute
// setInterval(setRandomGradient, 60000);
