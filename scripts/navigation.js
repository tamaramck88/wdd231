// Responsive Navigation Menu

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    // Toggle hamburger icon
    if (navigation.classList.contains("open")) {
        menuButton.innerHTML = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});