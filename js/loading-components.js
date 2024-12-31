// Function to load a component (e.g., navbar or footer) dynamically
function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then((html) => {
            document.getElementById(componentId).innerHTML = html;
        })
        .catch((error) => console.error(error));
}

// Load navbar and footer
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "../components/navbar.html");
    loadComponent("footer", "../components/footer.html");
});
