'use strict';
let arrow = document.querySelector('.share-btn');
let svg = document.querySelector('.svg-path');

arrow.addEventListener('click', activate);

function activate() {
    let popup = document.querySelector('.socials');
    popup.classList.toggle('active');
}

arrow.addEventListener("mouseover", () => {
    svg.classList.add("svg-hover");
    arrow.classList.add("share-btn-hover");
});

arrow.addEventListener("mouseout", () => {
    svg.classList.remove("svg-hover");
    arrow.classList.remove("share-btn-hover");
});