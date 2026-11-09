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
            category: 'Sponsorship & Event Collaboration',
            desc: 'Proyek perencanaan dan akuisisi sponsorship untuk event ECLIVAL 2026. Meliputi penyusunan deck proposal eksklusif, riset mitra potensial, negosiasi benefit merek, hingga pelaksanaan kesepakatan kerja sama strategis.'
        },
        '2': {
            title: 'PBL Digital Marketing',
            category: 'Project Based Learning & Campaign Strategy',
            desc: 'Proyek berbasis studi kasus pemasaran digital. Melibatkan analisis segmen audiens, perancangan materi promosi, eksekusi kampanye di berbagai platform digital, serta evaluasi data metrik keterlibatan (engagement metric).'
        },
        '3': {
            title: 'Branding.In',
            category: 'Digital Marketing & Brand Agency',
            desc: 'Pengembangan konsep dan strategi agensi pemasaran digital. Fokus pada peningkatan brand awareness klien melalui penyusunan panduan identitas merek, strategi konten yang terarah, serta penyelarasan pesan pemasaran.'
        },
        '4': {
            title: 'Business Owner – Poo Store',
            category: 'E-Commerce & Retail Operation',
            desc: 'Pengelolaan operasional toko online independen Poo Store secara menyeluruh. Mengintegrasikan rantai pasokan produk, strategi pemasaran media sosial, pencatatan arus kas, serta peningkatan retensi pembeli.'
        },
        '5': {
            title: 'Implementasi Odoo ERP',
            category: 'Digital Commerce & Supply Chain System',
            desc: 'Proyek analisis dan integrasi modul Odoo Enterprise Resource Planning (ERP). Mengoptimalkan alur kerja manajemen inventaris, pemrosesan pesanan pembelian/penjualan, integrasi database, dan otomatisasi laporan operasional.'
        },
        '6': {
            title: 'Pengembangan Bisnis Kreatif',
            category: 'Creative Business Innovation & Strategy',
            desc: 'Perancangan model bisnis kreatif berbasis ideasi inovatif. Melakukan pengujian riset pasar, pemetaan proposisi nilai unik (Unique Value Proposition), strategi kemasan visual, serta eksekusi peluncuran produk.'
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
