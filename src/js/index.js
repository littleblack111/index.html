let obj = document.getElementById('infos');
let topBar = document.getElementById('navBarHeader');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    obj.style.marginTop = value * 2.5 + 'px';

    console.log("==============");
    console.log(topBar.style.height);
    console.log(value);
}, { passive: true });