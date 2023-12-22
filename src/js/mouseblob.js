const blob = document.querySelector('.sblob');

window.onpointermove = event => { 
    const { clientX, clientY } = event;
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 1000, fill: "forwards" });
}
