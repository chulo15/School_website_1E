const sidebar = document.querySelector('#sidebar-wrapper');
const hambager = document.querySelector("#hamburger-icon");

hambager.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("sidebar-wrapper").classList.toggle("active");
});