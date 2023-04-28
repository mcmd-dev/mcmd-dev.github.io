// ----------------- NAVBAR INSERT -----------------

const navbarHtml = "/src/pg/header/nav.html";
const navbarCss = "/src/pg/header/nav.css";

async function includeNavbar() {
      // Create a link element for the navbar CSS file
    const navbarLink = document.createElement("link");
    navbarLink.rel = "stylesheet";
    navbarLink.href = navbarCss;
  
    // Insert the navbar link into the head of the document
    const head = document.querySelector("head");
    head.appendChild(navbarLink);

    // Get the navbar HTML file
    const response = await fetch(navbarHtml);
    const data = await response.text();
  
    // Insert the navbar HTML into the navbar div
    const navbarDiv = document.getElementById("navbar");
    navbarDiv.innerHTML = data;
  }

includeNavbar();

// ----------------- NAVBAR FUNCTIONALITY -----------------

let hamburger = null
let dropdownMenu = null

const checkHamburger = setInterval(function() {

  const hamburger = document.querySelector('.hamburger');
  const dropdownMenu = document.querySelector('.dropdown, .menu');

  if (!hamburger) {return;}

  clearInterval(checkHamburger);
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    dropdownMenu.classList.toggle('is-active');
  });

  const mediaQuery = window.matchMedia('screen and (min-width: 786px)');
  mediaQuery.addListener(function() {
  if (dropdownMenu.classList.contains('dropdown')) {
    dropdownMenu.classList.remove('dropdown');
    dropdownMenu.classList.add('menu');
  } else {
    dropdownMenu.classList.add('dropdown');
    dropdownMenu.classList.remove('menu');
    hamburger.classList.remove('is-active');
    dropdownMenu.classList.remove('is-active');
  }
});
}, 100);

