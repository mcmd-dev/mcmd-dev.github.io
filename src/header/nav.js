// ----------------- NAVBAR INSERT -----------------

const navbarHtml = "/src/header/nav.html";
const navbarCss = "/src/header/nav.css";

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
  
    // Insert the navbar HTML into the navbar header
    const navbarId = document.getElementById("navbar");
    navbarId.outerHTML = data;
  }

includeNavbar();

// ----------------- NAVBAR FUNCTIONALITY -----------------

let hamburger = null
let dropdownMenu = null

const checkHamburger = setInterval(function() {

  const hamburger = document.querySelector('.hamburger');
  const dropdownMenu = document.querySelector('#dropdownMenu');

  if (!hamburger) {return;}

  // Hamburger was clicked
  clearInterval(checkHamburger);
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    dropdownMenu.classList.toggle('is-active');
  });

  const observer = new ResizeObserver(entries => {
    entries.forEach(entry => {
      if (getComputedStyle(hamburger).display === 'none') {
        // Convert to menu
        dropdownMenu.classList.add('menu');
        dropdownMenu.classList.remove('dropdown');
        hamburger.classList.remove('is-active');
        dropdownMenu.classList.remove('is-active');
      } else {
        // Convert to dropdown
        dropdownMenu.classList.add('dropdown');
        dropdownMenu.classList.remove('menu');
      }
    });
  });
  
  observer.observe(document.body);

  if (!CSS.supports('backdrop-filter', 'blur(10px)')) {
    // Add a class to the element to use fallback background color
    document.getElementById('#dropdownMenu').classList.add('no-backdrop-filter');
  }
  
}, 100);

