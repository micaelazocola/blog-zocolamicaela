const toggle = document.querySelector (".toggle");
const menu__items = document.querySelector (".menu__items");
toggle.addEventListener("click" , () => {
    menu__items.classList.toggle("menu__navegador__visible");
});