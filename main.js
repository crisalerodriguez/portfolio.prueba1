let menuIcono = document.getElementById("menu-icono");
let navMenu = document.getElementById("menu_li");

menuIcono.addEventListener("click", function() {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
});
