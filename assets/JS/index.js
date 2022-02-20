/******************* Navigation ******************/

let toggle = document.querySelector(".nav__toggle");
let nav = document.querySelector(".nav");

toggle.addEventListener("click", function(){
    nav.classList.toggle("toggle__on");
})