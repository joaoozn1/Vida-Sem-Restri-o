/* =============================================
   IFPR Capanema - Projeto de Inovacao
   main.js - Scripts compartilhados
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic',
        });
    }

    const navbar = document.getElementById('navbar');

    function applyNavbarScroll() {
        if (!navbar) return;

        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('border-b');
            return;
        }

        navbar.classList.remove('shadow-md');
        navbar.classList.add('border-b');
    }

    if (navbar) {
        applyNavbarScroll();
        window.addEventListener('scroll', applyNavbarScroll);
    }

    window.toggleMobileMenu = function () {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');

        if (!menu) return;

        const isHidden = menu.classList.toggle('hidden');
        if (icon) icon.className = isHidden ? 'ph ph-list text-3xl' : 'ph ph-x text-3xl';
    };

    window.closeMobileMenu = function () {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');

        if (!menu) return;

        menu.classList.add('hidden');
        if (icon) icon.className = 'ph ph-list text-3xl';
    };

    document.addEventListener('click', function (event) {
        const menu = document.getElementById('mobile-menu');
        const button = document.getElementById('menu-btn');

        if (!menu || !button || menu.classList.contains('hidden')) return;

        if (!menu.contains(event.target) && !button.contains(event.target)) {
            window.closeMobileMenu();
        }
    });

    window.scrollToSection = function (sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const navHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition = section.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        window.closeMobileMenu();
    };

    const updateLog = document.getElementById('update-log-modal');
    const updateLogOpeners = document.querySelectorAll('[data-update-log-open]');
    const updateLogClosers = document.querySelectorAll('[data-update-log-close]');

    function openUpdateLog() {
        if (!updateLog) return;

        updateLog.hidden = false;

        const closeButton = updateLog.querySelector('[data-update-log-close]');
        if (closeButton) closeButton.focus();
    }

    function closeUpdateLog() {
        if (!updateLog) return;
        updateLog.hidden = true;
    }

    updateLogOpeners.forEach((button) => {
        button.addEventListener('click', openUpdateLog);
    });

    updateLogClosers.forEach((button) => {
        button.addEventListener('click', closeUpdateLog);
    });

    if (updateLog) {
        updateLog.addEventListener('click', function (event) {
            if (event.target === updateLog) closeUpdateLog();
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && updateLog && !updateLog.hidden) {
            closeUpdateLog();
        }
    });
});
