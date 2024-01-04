// const blob = document.querySelector('.sblob');


// window.onpointermove = event => { 
//     const { clientX, clientY } = event;
//     blob.animate({
//         left: `${clientX}px`,
//         top: `${clientY}px`
//     }, { duration: 1000, fill: "forwards" });
// }


// window.onpointermove = event => { 
//     var x = event.pageX;
//     var y = event.pageY;

//     // We can then use these coordinates to position the blob
//     blob.style.left = x + 'px';
//     blob.style.top = y + 'px';
// }

// window.onpointermove = event => { 
//     const { pageX, pageY } = event;
//     blob.animate({
//         left: `${pageX}px`,
//         top: `${pageY}px`
//     }, { duration: 1000, fill: "forwards" });
// }

window.onpointermove = event => {
        // The event object gives us the x and y coordinates of the mouse pointer
        const { pageX, pageY } = event;

        const momentumX = pageX + pageX - blob.offsetLeft;
        const momentumY = pageY + pageY - blob.offsetTop;

        blob.animate({
            left: `${momentumX}px`,
            top: `${momentumY}px`
        }, { duration: 1500, fill: "forwards" });
    
        blob.animate({
            left: `${pageX}px`,
            top: `${pageY}px`
        }, { duration: 1000, fill: "forwards" });

        // We can then use these coordinates to position the blob
        blob.style.left = `${pageX}px`;
        blob.style.top = `${pageY}px`;
}

// window.onpointermove = event => { 
//     const { pageX, pageY } = event;
//     blob.animate({
//         left: `${pageX}px`,
//         top: `${pageY}px`
//     }, { duration: 1000, fill: "forwards" });
// }
