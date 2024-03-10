let target = document.getElementsByClassName("tilt")[0];
let content = target.getElementsByClassName("content")[0];
let isMouseOver = false;
let centerX;
let centerY;
let mouseX;
let mouseY;

function resetStyle() {
    target.style.transform = "";
    target.style.height = "0px";
}

// tile effect

function tiltEffect() {
    const deltaScale = 50.0;
    isMouseOver = true;
    var rect = target.getBoundingClientRect();
    centerX = rect.left + rect.width / 2;
    centerY = rect.top + rect.height / 2;
    target.style.transform = `translate(${ ( mouseX - centerX ) / deltaScale }px, ${ ( mouseY - centerY ) / deltaScale }px)`;
    requestAnimationFrame(tiltEffect);
}

//check if mobile
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || window.orientation > 1) {
} else {

    target.addEventListener("mouseleave", () => {
        isMouseOver = false;
        target.style.transform = "";
    });

    document.addEventListener("mousemove", function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    requestAnimationFrame(tiltEffect);

};