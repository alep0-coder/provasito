// Aspetta che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.querySelector("header");
    const scrollBtn = document.querySelector(".scroll");
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navlist');

    // Gestione scroll per header sticky e pulsante scroll-to-top
    const handleScroll = () => {
        if (header) {
            header.classList.toggle("sticky", window.scrollY > 50);
        }
        if (scrollBtn) {
            scrollBtn.classList.toggle("show", window.scrollY > 300);
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Menu hamburger toggle
    if (menu && menuLinks) {
        const closeMenu = () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
            if (header) header.classList.remove('menu-open');
        };

        const mobileMenu = (e) => {
            e.stopPropagation();
            const isOpen = menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active', isOpen);
            if (header) header.classList.toggle('menu-open', isOpen);
        };

        menu.addEventListener('click', mobileMenu);

        // Chiudi il menu quando clicchi su un link
        const navLinks = document.querySelectorAll('.navlist a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Chiudi il menu cliccando fuori dall'header
        document.addEventListener('click', (e) => {
            if (menuLinks.classList.contains('active') && header && !header.contains(e.target)) {
                closeMenu();
            }
        });

        // Chiudi il menu ridimensionando lo schermo a desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1090 && menuLinks.classList.contains('active')) {
                closeMenu();
            }
        });
    }
});
