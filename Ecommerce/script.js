
let wire = document.querySelector('.algaritmum')

function slider (anything) {
    document.querySelector('.one').src = anything
} 

let menu = document.querySelector ('#menu-icon')
let navbar = document.querySelector('.navbar')
menu.onclick = () => {
    menu.classList.toggle ('bx-x')
    navbar.classList.toggle ('open')
}

function abecedario () {
    wire.style.color = "#34e7f8"
}

function abecedario2() {
    wire.style.color = "#fff"
}