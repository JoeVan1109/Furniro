document.addEventListener('DOMContentLoaded', function() {
    const navEl = document.querySelector('.navbar');
    const navLinksEl = document.querySelectorAll('.nav-link');
    const navbarTogglerEl = document.querySelector('.navbar-toggler'); // Menu burger

    let lastScrollTop = 0; // Variable pour stocker la position précédente du scroll
    const offset = navEl.offsetTop;

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;

        // Changer l'apparence de la barre de navigation
        if (scrollTop > lastScrollTop) {
            // Scroll vers le bas
            navEl.classList.add('navbar-scrolled');
        } else {
            // Scroll vers le haut
            navEl.classList.remove('navbar-scrolled');
        }

        // Maintenir la position fixe de la barre de navigation
        if (scrollTop > offset) {
            navEl.style.position = 'fixed';
            navEl.style.top = '0';
        } else {
            navEl.style.position = 'absolute';
            navEl.style.top = 'initial';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Met à jour la position précédente du scroll
    });
});
