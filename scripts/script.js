console.log("hallo!");


// Variabelen
var menu = document.querySelector(".dropdown-menu");
var img = document.querySelector(".menu-img");


// Functie om te switchen in het menu
function toggleMenu() {
  menu.classList.toggle("show");
}


// AddEventListener om de functie aan te roepen
img.addEventListener("click", toggleMenu);
