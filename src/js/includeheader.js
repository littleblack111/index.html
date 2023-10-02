function includeHeader() {
  var z, i, elmnt, file, xhttp;
  // loop through a collection of all HTML elements
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    // search for elements with a certain attribute
    file = elmnt.getAttribute("include-header");
    if (file) {
      // make an HTTP request using the attribute value as the file name
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
            setActiveLink(); // Set the active link after including the HTML
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          // remove the attribute and call this function once more
          elmnt.removeAttribute("include-header");
          includeHeader();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      // exit the function
      return;
    }
  }
}

// Set the active link based on the current page
function setActiveLink() {
  var currentPath = window.location.pathname;
  var navLinks = document.getElementsByClassName("navBar")[0].getElementsByTagName("a");
  for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];
    var href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  }
}
