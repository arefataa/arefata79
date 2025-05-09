const navbar = document.querySelector("#nav");
const navBtn= document.querySelector("#nav-btn");
const closBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const datr = document.querySelector("#date");


window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }

});


navBtn.addEventListener("click", function () {

    sidebar.classList.add("show-sidebar")
})

closBtn.addEventListener("click", function () {

    sidebar.classList.remove("show-sidebar")
})


datr.innerHTML = new Date().getFullYear();









