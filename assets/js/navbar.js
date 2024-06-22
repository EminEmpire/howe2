document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-custom');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');
    const logo = document.querySelector('.navbar-brand img');

    // Handle navbar toggler click
    navbarToggler.addEventListener('click', function() {
        setTimeout(function() {
            if (navbarNav.classList.contains('show')) {
                navbar.classList.add('solid');
            } else {
                navbar.classList.remove('solid');
            }
        }, 2); // Slight delay to allow for class change
    });

    navbarNav.addEventListener('shown.bs.collapse', function () {
        navbar.classList.add('solid');
    });

    navbarNav.addEventListener('hidden.bs.collapse', function () {
        navbar.classList.remove('solid');
    });

    // Handle scroll event
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('solid');
            logo.style.height = '100px';
        } else {
            navbar.classList.remove('solid');
            logo.style.height = '';
        }
    });
});
