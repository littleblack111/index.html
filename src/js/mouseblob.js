const blob = document.querySelector('.sblob');

window.onpointermove = event => { 
    const { pageX, pageY } = event;
    blob.animate({
        left: `${pageX}px`,
        top: `${pageY}px`
    }, { duration: 1000, fill: "forwards" });
}