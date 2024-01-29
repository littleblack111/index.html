if ('serviceWorker' in navigator) {
    window. addEventListener ('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then (reg => {
                // console.log('sw.js Registered', reg);
            }) .catch(err => {
                console.log('sw.js failed: ', err);
        });
    });
}

function escapeTextReinterpreted(htmlStr) {
    return htmlStr.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");        
}