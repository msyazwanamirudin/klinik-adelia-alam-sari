// Language Toggle
let currentLanguage = 'en';

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'bm' : 'en';
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll('[data-en][data-bm]').forEach(element => {
        const text = currentLanguage === 'en' ? element.dataset.en : element.dataset.bm;
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else {
            element.textContent = text;
        }
    });

    document.querySelectorAll('select option[data-en][data-bm]').forEach(option => {
        const text = currentLanguage === 'en' ? option.dataset.en : option.dataset.bm;
        option.textContent = text;
    });

    langToggle.textContent = currentLanguage === 'en' ? 'EN | BM' : 'BM | EN';
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Appointment Modal
const appointmentModal = document.getElementById('appointmentModal');
const appointmentBtns = document.querySelectorAll('#heroAppointmentBtn, .appointment-btn');

appointmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        appointmentModal.style.display = 'block';
    });
});

// WhatsApp Button
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        const whatsappNumber = '60174820090';
        const whatsappUrl = `https://wa.me/${whatsappNumber}`;
        window.open(whatsappUrl, '_blank');
    });
}

// YouTube Video Modal
const youtubeModal = document.getElementById('youtubeModal');
const modalYoutube = document.getElementById('modalYoutube');
const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        modal.style.display = 'none';
        if (modalYoutube && modalYoutube.src) {
            modalYoutube.src = '';
        }
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        if (youtubeModal && youtubeModal.style.display !== 'none' && modalYoutube) {
            modalYoutube.src = '';
        }
    }
});

function playYoutubeVideo(videoId, title) {
    youtubeModal.style.display = 'block';
    modalYoutube.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

// Appointment Form Submission
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const preferredDate = document.getElementById('preferredDate').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        const whatsappNumber = '60174820090';
        const whatsappMessage = `Hello, I would like to book an appointment.\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nPreferred Date: ${preferredDate}\nService: ${service}\nMessage: ${message}`;
        
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');

        appointmentForm.reset();
        appointmentModal.style.display = 'none';
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .gallery-item, .stat-card').forEach(el => {
    observer.observe(el);
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Page Load Complete
document.addEventListener('DOMContentLoaded', () => {
    console.log('Klinik Adelia Alam Sari Landing Page Loaded Successfully!');
});