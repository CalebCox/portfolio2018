// setup scroll detection
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
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
});

// anchor tag offset
const links = document.querySelectorAll('li>a');