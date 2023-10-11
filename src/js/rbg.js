function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomGradient() {
  const rand3 = Math.floor(Math.random());
  if (rand3 === 1) {
    document.body.style.background = `linear-gradient(${Math.floor(Math.random() * 180)}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
  } else if (rand3 === 2) {
    document.body.style.background = `linear-gradient(${Math.floor(Math.random() * 180)}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}),
linear-gradient(${Math.floor(Math.random() * 180)}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
  } else {
      document.body.style.background = `linear-gradient(${Math.floor(Math.random() * 180)}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}),
linear-gradient(${Math.floor(Math.random() * 180)}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}),
linear-gradient(${Math.floor(Math.random() * 180)}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
  }
}

setRandomGradient();
