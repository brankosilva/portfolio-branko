var toggle = document.getElementById('color-mode');
var body = document.querySelector('body');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector(".main-nav-menu").addEventListener("click", animatemenu);

var line1__mainnav = document.querySelector(".line1__main-nav");
var line2__mainnav = document.querySelector(".line2__main-nav");
var line3__mainnav = document.querySelector(".line3__main-nav");
var main_nav = document.querySelector("ul");

function animatemenu(){
    line1__mainnav.classList.toggle("activeline1__main-nav");
    line2__mainnav.classList.toggle("activeline2__main-nav");
    line3__mainnav.classList.toggle("activeline3__main-nav");

    main_nav.classList.toggle("main-nav-links");
}