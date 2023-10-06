let header = document.querySelector('[header]');
let newElement = document.createElement('div');
let page = header.getAttribute('page');

console.log(page);
newElement.innerHTML = `
<!-- header -->
<header id="navBarHeader">
    <nav class="navBar">
        <div class="left">
            <a id="btnHome" href="/">Home<span></span></span></a>
        </div>
        <div class="right">
            <a href="/pages/repo/github/repos.html" id="btnGhRepo">Github Repos</a>
            <a href="/pages/info/about.html" id="btnAbout">About</a>
        </div>
    </nav> 
</header>
`;

header.appendChild(newElement);
document.getElementById("btn"+page).setAttribute('class', 'active');
