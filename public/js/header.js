"use strict";

var header = document.querySelector('[header]');
var newElement = document.createElement('div');
var page = header.getAttribute('page');
newElement.innerHTML = "\n<!-- header -->\n<header id=\"navBarHeader\">\n\t<nav class=\"navBar\">\n\t\t<div class=\"hleft\">\n\t\t\t<a id=\"btnHome\" style=\"text-decoration: unset\" href=\"/\">Home<span></span></span></a>\n\t\t</div>\n\t\t<div class=\"hright\">\n\t\t\t<a href=\"/ghrepos\" id=\"btnGhRepo\" style=\"text-decoration: unset\">Github Repos</a>\n\t\t\t<a href=\"/about\" id=\"btnAbout\" style=\"text-decoration: unset\">About</a>\n\t\t</div>\n\t</nav> \n</header>\n";
header.appendChild(newElement);
document.getElementById("btn" + page).setAttribute('class', 'active');