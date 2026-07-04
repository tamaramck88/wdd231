const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
nav.classList.toggle("open");
});