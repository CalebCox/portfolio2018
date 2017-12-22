// define header
const navbar = document.querySelector('header');

// for mobile
window.addEventListener('touchmove', onScroll);

// for desktop
window.addEventListener('scroll', onScroll);

// setup scroll detection
function onScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
    if (window.scrollY > 55) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.borderBottom = '1px solid lightgray';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = 'none';
    }
};

// anchor tag offset
const links = document.querySelectorAll('li>a');