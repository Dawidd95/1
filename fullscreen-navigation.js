let openButton = document.querySelector(".open-button");
let closeButton = document.querySelector(".close-button");
let overlay = document.querySelector(".overlay");
let body = document.querySelector(".body");

openButton.addEventListener("click", openNav);
closeButton.addEventListener("click", closeNav);

function openNav() {
    overlay.style.width = "100%";
    body.style.overflowY = "hidden";
}

function closeNav() {
    overlay.style.width = "0%";
    body.style.overflowY = "scroll";
}
