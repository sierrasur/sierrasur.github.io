document.addEventListener("DOMContentLoaded", () => {

    // ===== NAVBAR BURGER =====
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            const navbarHeight = 60;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            menu.classList.remove('is-active');
            burger.classList.remove('is-active');
        });
    });

    // ===== FOOTER YEAR =====
    document.getElementById('year').textContent = new Date().getFullYear();

});