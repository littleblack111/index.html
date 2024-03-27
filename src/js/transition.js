let a = document.querySelectorAll("a")

a.forEach(element => {
    element.onclick = event => {
        element.classList.add("openlink")
        element.innerHTML = `
        <iframe src="/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
        element.style.zIndex = 999999
        element.style.overflow = "auto !important"
        setTimeout(function(){element.classList.remove("openlink")}, 3000);
    }
})
