/* =============================================
   IFPR Capanema — Projeto de Inovação
   main.js — Scripts Compartilhados
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── AOS ─── */
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    /* ─── Navbar Scroll Effect ─── */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        applyNavbarScroll();
        window.addEventListener('scroll', applyNavbarScroll);
    }

    function applyNavbarScroll() {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('border-b');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.add('border-b');
        }
    }

    /* ─── Mobile Menu ─── */
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

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function (e) {
        const menu = document.getElementById('mobile-menu');
        const btn = document.getElementById('menu-btn');
        if (!menu || menu.classList.contains('hidden')) return;
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            window.closeMobileMenu();
        }
    });

    /* ─── Scroll suave para seção na mesma página ─── */
    window.scrollToSection = function (sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;
        const navHeight = (navbar ? navbar.offsetHeight : 80);
        const targetPosition = section.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
    };

    /* ─── Formulário de Contato (contato.html) ─── */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function () {
            const btn = this.querySelector('button[type="submit"]');
            if (btn) {
                btn.innerHTML = '<i class="ph ph-spinner animate-spin text-xl"></i> Enviando…';
                btn.classList.add('opacity-80', 'cursor-not-allowed');
                btn.disabled = true;
            }
        });
    }

});