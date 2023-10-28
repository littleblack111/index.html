let header = document.querySelector('[header]');
let newElement = document.createElement('div');
let page = header.getAttribute('page');

// console.log(page);
newElement.innerHTML = `
<!-- header -->
<header id="navBarHeader">
	<nav class="navBar">
		<div class="hleft">
			<a id="btnHome" style="text-decoration: unset" href="/">Home<span></span></span></a>
		</div>
		<div class="hright">
			<a href="/pages/repo/github/repos.html" id="btnGhRepo" style="text-decoration: unset">Github Repos</a>
			<a href="/pages/info/about.html" id="btnAbout" style="text-decoration: unset">About</a>
		</div>
	</nav> 
</header>
`;

header.appendChild(newElement);
document.getElementById("btn"+page).setAttribute('class', 'active');
