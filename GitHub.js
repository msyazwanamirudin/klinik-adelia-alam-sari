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

// YouTube videos are now embedded directly in the gallery items
// Close modal functionality for appointment modal
const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

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
    symptomChecker.init();
});

// ============= SYMPTOM CHECKER FUNCTIONALITY =============

const symptomChecker = {
    selectedSymptoms: [],
    
    init() {
        const analyzeBtn = document.getElementById('analyzeBtn');
        const resetBtn = document.getElementById('resetBtn');
        const symptomInputs = document.querySelectorAll('.symptom-input');
        
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => this.analyzeSymptoms());
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetChecker());
        }
        
        symptomInputs.forEach(input => {
            input.addEventListener('change', (e) => this.updateSelectedSymptoms());
        });
    },
    
    updateSelectedSymptoms() {
        const inputs = document.querySelectorAll('.symptom-input:checked');
        this.selectedSymptoms = Array.from(inputs).map(input => input.value);
    },
    
    analyzeSymptoms() {
        this.updateSelectedSymptoms();
        
        if (this.selectedSymptoms.length === 0) {
            this.showAlert(
                currentLanguage === 'en' 
                    ? 'Please select at least one symptom' 
                    : 'Sila pilih sekurang-kurangnya satu gejala'
            );
            return;
        }
        
        const result = this.calculateRisk();
        this.displayResult(result);
    },
    
    calculateRisk() {
        const symptoms = this.selectedSymptoms;
        const feverIndex = symptoms.includes('fever') ? 1 : 0;
        const headacheIndex = symptoms.includes('headache') ? 1 : 0;
        const jointIndex = symptoms.includes('joint') ? 1 : 0;
        const rashIndex = symptoms.includes('rash') ? 1 : 0;
        const nauseaIndex = symptoms.includes('nausea') ? 1 : 0;
        const bleedingIndex = symptoms.includes('bleeding') ? 1 : 0;
        
        const classicSymptoms = feverIndex + headacheIndex + jointIndex;
        const severeSymptoms = rashIndex + nauseaIndex + bleedingIndex;
        const totalScore = classicSymptoms + severeSymptoms;
        
        let riskLevel = 'low';
        let riskScore = 0;
        
        if (severeSymptoms >= 2 || bleedingIndex === 1) {
            riskLevel = 'high';
            riskScore = 3;
        } else if (classicSymptoms >= 3 || (classicSymptoms >= 2 && severeSymptoms >= 1)) {
            riskLevel = 'medium';
            riskScore = 2;
        } else {
            riskLevel = 'low';
            riskScore = 1;
        }
        
        return {
            riskLevel,
            riskScore,
            symptomsCount: this.selectedSymptoms.length,
            symptoms: this.selectedSymptoms,
            hasClassicSymptoms: classicSymptoms,
            hasSevereSymptoms: severeSymptoms
        };
    },
    
    displayResult(result) {
        const resultContainer = document.getElementById('resultContainer');
        const resultContent = document.getElementById('resultContent');
        
        const enRiskLabels = {
            low: '✓ Low Risk',
            medium: '⚠ Medium Risk',
            high: '🚨 High Risk'
        };
        
        const bmRiskLabels = {
            low: '✓ Risiko Rendah',
            medium: '⚠ Risiko Sederhana',
            high: '🚨 Risiko Tinggi'
        };
        
        const riskLabels = currentLanguage === 'en' ? enRiskLabels : bmRiskLabels;
        
        const enDescriptions = {
            low: 'Your symptoms suggest a low risk of dengue fever. However, continue monitoring your health.',
            medium: 'Your symptoms suggest a medium risk. Please consult with our medical professionals for proper evaluation.',
            high: 'Your symptoms suggest a high risk of dengue fever. Seek immediate medical attention.'
        };
        
        const bmDescriptions = {
            low: 'Gejala Anda menunjukkan risiko rendah demam denggi. Namun, terus pantau kesehatan Anda.',
            medium: 'Gejala Anda menunjukkan risiko sederhana. Sila konsultasikan dengan profesional medis kami untuk evaluasi yang tepat.',
            high: 'Gejala Anda menunjukkan risiko tinggi demam denggi. Cari perhatian medis segera.'
        };
        
        const descriptions = currentLanguage === 'en' ? enDescriptions : bmDescriptions;
        
        const recommendations = this.getRecommendations(result);
        
        let html = `
            <div class="risk-level risk-${result.riskLevel}">
                ${riskLabels[result.riskLevel]}
            </div>
            <h3 class="result-title">${currentLanguage === 'en' ? 'Analysis Result' : 'Hasil Analisis'}</h3>
            <p class="result-description">${descriptions[result.riskLevel]}</p>
            <div class="recommendations">
                <h4>${currentLanguage === 'en' ? 'Recommendations:' : 'Rekomendasi:'}</h4>
                <ul>
        `;
        
        recommendations.forEach(rec => {
            html += `<li>${rec}</li>`;
        });
        
        html += `
                </ul>
            </div>
        `;
        
        if (result.riskLevel !== 'low') {
            html += `
                <button class="action-button" onclick="symptomChecker.bookAppointment()">
                    ${currentLanguage === 'en' ? '📋 Book Appointment' : '📋 Jadwalkan Janji'}
                </button>
            `;
        }
        
        resultContent.innerHTML = html;
        resultContainer.classList.remove('d-none');
        
        // Scroll to result
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    },
    
    getRecommendations(result) {
        const enRecs = {
            low: [
                'Continue to monitor your health',
                'Maintain good hygiene practices',
                'Use mosquito repellent to prevent dengue',
                'Stay hydrated and get adequate rest',
                'If symptoms worsen, visit our clinic'
            ],
            medium: [
                'Visit our clinic for a proper medical evaluation',
                'Get a complete blood count (CBC) test',
                'Rest and increase fluid intake',
                'Monitor your temperature regularly',
                'Avoid strenuous activities until evaluated'
            ],
            high: [
                'Seek immediate medical attention at our clinic or hospital',
                'Get approved blood tests (Dengue NS1, IgM, IgG)',
                'Stay well hydrated to prevent complications',
                'Monitor for warning signs like severe bleeding',
                'Avoid self-medication, consult medical professionals'
            ]
        };
        
        const bmRecs = {
            low: [
                'Terus pantau kesehatan Anda',
                'Pertahankan amalan kebersihan yang baik',
                'Gunakan penolak nyamuk untuk mencegah demam denggi',
                'Tetap terhidrasi dan istirahat yang cukup',
                'Jika gejala memburuk, kunjungi klinik kami'
            ],
            medium: [
                'Kunjungi klinik kami untuk evaluasi medis yang tepat',
                'Dapatkan tes jumlah sel darah lengkap (CBC)',
                'Istirahat dan tingkatkan asupan cairan',
                'Pantau suhu badan Anda secara teratur',
                'Hindari aktivitas berat sampai dievaluasi'
            ],
            high: [
                'Cari perhatian medis segera di klinik atau rumah sakit kami',
                'Dapatkan tes darah yang disetujui (Dengue NS1, IgM, IgG)',
                'Tetap terhidrasi dengan baik untuk mencegah komplikasi',
                'Pantau tanda-tanda peringatan seperti pendarahan parah',
                'Hindari pengobatan sendiri, konsultasikan dengan profesional medis'
            ]
        };
        
        return currentLanguage === 'en' ? enRecs[result.riskLevel] : bmRecs[result.riskLevel];
    },
    
    resetChecker() {
        document.querySelectorAll('.symptom-input').forEach(input => {
            input.checked = false;
        });
        
        document.getElementById('resultContainer').classList.add('d-none');
        this.selectedSymptoms = [];
        
        // Scroll back to top of checker
        document.querySelector('.symptom-checker-section').scrollIntoView({ behavior: 'smooth' });
    },
    
    bookAppointment() {
        const modal = document.getElementById('appointmentModal');
        if (modal) {
            modal.style.display = 'block';
            modal.scrollIntoView({ behavior: 'smooth' });
        }
    },
    
    showAlert(message) {
        alert(message);
    }
};