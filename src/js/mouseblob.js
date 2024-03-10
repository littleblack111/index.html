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
        const { pageX, pageY } = event;

        // Get Initial Momentum
        const momentumX = pageX + pageX - blob.offsetLeft;
        const momentumY = pageY + pageY - blob.offsetTop;

        // Move to momentem offseted position

        blob.animate({
            left: `${momentumX}px`,
            top: `${momentumY}px`
        }, { duration: 1000, fill: "forwards" });

        // Move/Bounce back to initial mouse after momentum
    
        blob.animate({
            left: `${pageX}px`,
            top: `${pageY}px`
        }, { duration: 500, fill: "forwards" });

        // Set Default Initial position for blob / fix safari as the animate don't presist(it don't care about fill forwards)
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
