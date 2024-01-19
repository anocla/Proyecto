'use strict'
// Cuando haces click en .header__btn, .header__nav  le toggle la class .move

const headerBtn = document.querySelector('.header__btn')
const headerNav = document.querySelector('.header__nav')
console.log(headerBtn)
console.log(headerNav)


headerBtn.addEventListener('click' , () =>{
    headerNav.classList.toggle('move')
})