import posthog from 'posthog-js'

posthog.init('phc_GlIesGygABKO6OWVgPQBt23VU1qbZsrX9RfdgEbIU2d',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

if ('serviceWorker' in navigator) {
    window.addEventListener ('load', () => { navigator.serviceWorker.register('/sw.js')
            .then (reg => {
                // console.log('sw.js Registered', reg);
            }).catch(err => {
                console.log('sw.js failed: ', err);
        });
    });
}

function loadScript(src, async, defer) {
    var script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    document.body.appendChild(script);
}

function loadModuleScript(src, async, defer) {
    var script = document.createElement('script');
    script.src = src;
    script.type = "module"
    script.async = async;
    script.defer = defer;
    document.body.appendChild(script);
}

loadScript('/js/header.js', '', 'true')


loadScript('/js/transition.js', '', 'true')

window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
loadScript('/_vercel/insights/script.js', '', 'true')

loadModuleScript('/js/swup.js', 'true')
