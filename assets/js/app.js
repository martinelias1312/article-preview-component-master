'use strict';
let share = document.querySelector('.icon-a');
share.addEventListener('click', hideElements);

function hideElements() {
    let hide = document.querySelectorAll('.avatar-wrap, .caption-text, .socials'); 
    hide.forEach(item => item.classList.toggle('sr-only'));   

    let color = document.querySelector('figure');
    color.classList.toggle('color');
}
