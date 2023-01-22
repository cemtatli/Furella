// Navbar Sticky Animation

let header = document.querySelector(".header-section");
window.addEventListener("scroll", function () {
  header.classList.toggle("navbar-sticky", window.scrollY > 180);
});
window.addEventListener("scroll", function () {
  navbar.classList.remove("active", window.scrollY > 0);
});

// Script
