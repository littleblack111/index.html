let isFirstTime = true;
var mainInterval;

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

function resetBlob() {
    setRandomBlob();
    blob.style.background = generateGradient();
    randomPosition(blob);
    // fadeIn
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
}


function main() {
    if (!isFirstTime) {
        // fadeOut
        let fadeOutAnimation = blob.animate([
            // keyframes
            { opacity: .40 }, 
            { opacity: 0, scale: .8}
        ], { 
            // timing options
            duration: 3000,
            iterations: 1,
            fill: 'forwards'
        });
        // resetBlob
        fadeOutAnimation.onfinish = () => {
            resetBlob()
        };
    } else {
        // resetBlob
        resetBlob()
        isFirstTime = false;
    }
    mainInterval = setTimeout(main, getRandomInt(7500, 30000));
}

blob.addEventListener('click', function() {
    clearTimeout(mainInterval)
    main(getRandomInt(7500, 30000));
});

main();