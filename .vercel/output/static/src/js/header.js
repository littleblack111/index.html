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
			<a href="/ghrepos" id="btnGhRepo" style="text-decoration: unset">Github Repos</a>
			<a href="/about" id="btnAbout" style="text-decoration: unset">About</a>
		</div>
	</nav> 
</header>
`;

header.appendChild(newElement);
document.getElementById("btn"+page).setAttribute('class', 'active');
