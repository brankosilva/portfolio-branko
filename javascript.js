const menu = document.querySelector(".main-nav > ul");
const openMenu = document.querySelector("#openmenu");
const closeMenu = document.querySelector("#closemenu");
const menuItems = document.querySelectorAll(".main-nav > ul > li")

openMenu.addEventListener("click", () => {
    menu.classList.add("visible");
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("visible");
})

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("visible");
    })
})


//identify the toggle switch HTML element
const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "dark"?
    temaClaro() : temaOscuro();
}

