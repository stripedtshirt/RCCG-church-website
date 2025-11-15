// sidebar logic

const hamburger = document.getElementById('hamburger');
const closeHamburger = document.getElementById('close-hamburger');

hamburger.addEventListener('click', showSidebar)
closeHamburger.addEventListener('click', hideSidebar)

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

// sliding images logic

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

document.addEventListener('DOMContentLoaded', initializeSlider)

function initializeSlider() {
    if(slides.length > 0) {
    slides[slideIndex].classList.add('displaySlide');
    intervalId = setInterval(nextSlide, 4000);
    }
}
function showSlide(index) {

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }


    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

}

function prevSlide() {
    // clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++
    showSlide(slideIndex);
}