var blob = document.querySelector('.blob')
let isFirstTime = true;

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
        let fadeOutAnimation = blob.animate([
            // keyframes
            { opacity: .40 }, 
            { opacity: 0 }
        ], { 
            // timing options
            duration: 3000,
            iterations: 1,
            fill: 'forwards'
        });
        fadeOutAnimation.onfinish = () => {
            setRandomBlob();
            randomPosition(blob);
            blob.animate([
                // keyframes
                { opacity: 0 }, 
                { opacity: .40 }
            ], { 
                // timing options
                duration: 3000,
                iterations: 1,
                fill: 'forwards'
            });
        };
    } else {
        setRandomBlob();
        randomPosition(blob);
        blob.animate([
            // keyframes
            { opacity: 0 }, 
            { opacity: .40 }
        ], { 
            // timing options
            duration: 3000,
            iterations: 1,
            fill: 'forwards'
        });
        isFirstTime = false;
    }
    setTimeout(main, getRandomInt(7500, 30000));
}

main();