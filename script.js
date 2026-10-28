
/*
    Nexora - Responsive Landing Page
    JavaScript functionality
*/

// Select the mobile menu button and navigation links.
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open or close the mobile navigation menu.
function toggleMenu() {
    const isOpen = navLinks.classList.toggle("open");

    // Update the button's accessibility state.
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

// Close the navigation menu after clicking a navigation link.
function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

// Add a click event to the mobile menu button.
menuToggle.addEventListener("click", toggleMenu);

// Add click events to all navigation links.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

// Close the mobile menu when the user presses Escape.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
    }
});

// Automatically display the current year in the footer.
function updateCopyrightYear() {
    const yearElement = document.getElementById("year");

    yearElement.textContent = new Date().getFullYear();
}

// Run the copyright year function.
updateCopyrightYear();
