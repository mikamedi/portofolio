/* ==========================================
   FILENAME: script.js
   Interactive JavaScript for Mika Medi Ariansyah Portfolio
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE HAMBURGER MENU TOGGLE
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. STICKY NAVBAR EFFECT ON SCROLL
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. BACK TO TOP BUTTON
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. AUTO HIGHLIGHT CURRENT NAV LINK ACCORDING TO PAGE FILENAME
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath) {
            link.classList.add('active');
        }
    });

    // 5. SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // 6. INTERACTIVE PROJECT MODAL PREVIEW
    const modalOverlay = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');
    const modalClose = document.getElementById('modal-close');
    const projectButtons = document.querySelectorAll('.btn-modal');

    const projectDetailsData = {
        '1': {
            title: 'ECLIVAL 2026',
            category: 'Sponsorship & Brand Collaboration',
            desc: 'Proyek perencanaan dan akuisisi sponsorship untuk event ECLIVAL 2026. Meliputi penyusunan deck proposal eksklusif, riset mitra potensial, negosiasi benefit merek, hingga pelaksanaan kesepakatan kerjasama.'
        },
        '2': {
            title: 'Branding.In',
            category: 'Digital Marketing Agency',
            desc: 'Pengembangan konsep dan strategi agensi pemasaran digital. Fokus pada peningkatan brand awareness klien melalui optimasi saluran digital, strategi konten target, dan analisis kinerja kampanye.'
        },
        '3': {
            title: 'Tabee Foodism',
            category: 'Social Media Management',
            desc: 'Pengelolaan akun media sosial untuk brand kuliner Tabee Foodism. Meliputi perencanaan kalender konten, copywriting, strategi keterlibatan pelanggan (engagement), dan promosi visual.'
        },
        '4': {
            title: 'Online Business – Poo Store',
            category: 'E-Commerce & Retail Strategy',
            desc: 'Pengelolaan penuh toko online independen Poo Store. Mengintegrasikan rantai pasokan produk, penataan catalog online, layanan pelanggan instan, serta strategi retensi pembeli.'
        }
    };

    projectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            const data = projectDetailsData[projectId];

            if (data) {
                modalTitle.textContent = data.title;
                modalCategory.textContent = data.category;
                modalDesc.textContent = data.desc;
                modalOverlay.classList.add('active');
            }
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }
});
