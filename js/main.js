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
        // Estado inicial baseado no scroll atual (útil ao voltar de outra página)
        applyNavbarScroll();
        window.addEventListener('scroll', applyNavbarScroll);
    }

    function applyNavbarScroll() {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md', 'bg-white/70');
            navbar.classList.remove('border-b');
        } else {
            navbar.classList.remove('shadow-md', 'bg-white/70');
            navbar.classList.add('border-b');
        }
    }

    /* ─── Mobile Menu ─── */
    window.toggleMobileMenu = function () {
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.toggle('hidden');
    };

    /* ─── Scroll suave para seção na mesma página ─── */
    window.scrollToSection = function (sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;
        const navHeight = (navbar ? navbar.offsetHeight : 80);
        const targetPosition = section.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        // Fecha menu mobile se aberto
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
            // O submit segue normalmente para o Formspree
        });
    }

});