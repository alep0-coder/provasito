// Aspetta che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', function() {
    
    // Header sticky al scroll
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", function() {
            header.classList.toggle("sticky", window.scrollY > 80);
        });
    }

    // Menu hamburger toggle
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navlist');

    // Debug: verifica se gli elementi esistono
    console.log('Menu hamburger trovato:', menu);
    console.log('Navlist trovato:', menuLinks);

    if (menu && menuLinks) {
        // Funzione per aprire/chiudere il menu
        const mobileMenu = () => {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
            console.log('Menu cliccato! Classi:', menu.className, menuLinks.className);
        };

        // Click sull'hamburger
        menu.addEventListener('click', mobileMenu);

        // Chiudi il menu quando clicchi su un link
        const navLinks = document.querySelectorAll('.navlist a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-active');
                menuLinks.classList.remove('active');
            });
        });
    } else {
        console.error('Errore: elemento #mobile-menu o .navlist non trovato!');
    }
});