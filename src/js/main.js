if ('serviceWorker' in navigator) {
    window.addEventListener ('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then (reg => {
                // console.log('sw.js Registered', reg);
            }).catch(err => {
                console.log('sw.js failed: ', err);
        });
    });
}
