// const blob = document.querySelector('.sblob');


// window.onpointermove = event => { 
//     const { clientX, clientY } = event;
//     blob.animate({
//         left: `${clientX}px`,
//         top: `${clientY}px`
//     }, { duration: 1000, fill: "forwards" });
// }

// window.onpointermove = event => { 
//     const { pageX, pageY } = event;
//     blob.animate({
//         left: `${pageX}px`,
//         top: `${pageY}px`
//     }, { duration: 1000, fill: "forwards" });
// }

// window.onpointermove = event => { 
//     var x = event.pageX;
//     var y = event.pageY;

//     // We can then use these coordinates to position the blob
//     blob.style.left = x + 'px';
//     blob.style.top = y + 'px';
// }


window.onpointermove = event => {
        // The event object gives us the x and y coordinates of the mouse pointer
        var x = event.pageX;
        var y = event.pageY;
    
        blob.animate({
            left: `${x}px`,
            top: `${y}px`
        }, { duration: 1000, fill: "forwards" });
    
        // We can then use these coordinates to position the blob
        blob.style.left = x + 'px';
        blob.style.top = y + 'px';
}

// window.onpointermove = event => { 
//     const { pageX, pageY } = event;
//     blob.animate({
//         left: `${pageX}px`,
//         top: `${pageY}px`
//     }, { duration: 1000, fill: "forwards" });
// }
