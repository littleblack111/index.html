"use strict";

var header = document.querySelector('[header]');
var newElement = document.createElement('div');
var page = header.getAttribute('page');

// console.log(page);
newElement.innerHTML = "\n<!-- header -->\n<header id=\"navBarHeader\">\n    <nav class=\"navBar\">\n        <div class=\"hleft\">\n            <a id=\"btnHome\" style=\"text-decoration: unset\" href=\"/\">Home<span></span></span></a>\n        </div>\n        <div class=\"hright\">\n            <a href=\"/pages/repo/github/repos.html\" id=\"btnGhRepo\" style=\"text-decoration: unset\">Github Repos</a>\n            <a href=\"/pages/info/about.html\" id=\"btnAbout\" style=\"text-decoration: unset\">About</a>\n        </div>\n    </nav> \n</header>\n";
header.appendChild(newElement);
document.getElementById("btn" + page).setAttribute('class', 'active');