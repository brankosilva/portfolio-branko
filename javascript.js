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
