// Toggle the navbar when the hamburger menu is clicked
const toggleButton = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");

toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("show");
});