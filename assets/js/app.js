'use strict';
let share = document.querySelector('.icon-a');
share.addEventListener('click', hideElements);

function hideElements() {
    let hide = document.querySelectorAll('.avatar-wrap, .caption-wrap'); 
    hide.forEach(item => item.classList.toggle('sr-only'));   
}
