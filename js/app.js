let cuerpo = document.body;
let icono_menu = document.querySelector(".icon");

icono_menu.addEventListener("click", function() {
    cuerpo.classList.toggle("open");
})