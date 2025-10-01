let bg_change = document.querySelector(".bg_changer");
let side_menu = document.querySelector(".side-menu");
let side_bar = document.querySelector(".side-bar");
let close = document.querySelector(".close");

side_menu.addEventListener("click", function () {
    side_bar.style.display = `flex`;
})

close.addEventListener("click", function () {
    side_bar.style.display = `none`;
})

bg_change.addEventListener("click", function () {
    document.body.classList.toggle("dark");
})