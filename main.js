// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Animate stat counters
const animateValue = (element, start, end, duration, suffix = '') => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const text = entry.target.textContent;
            const match = text.match(/(\d+)/);
            if (match) {
                const value = parseInt(match[1]);
                const suffix = text.replace(match[1], '');
                animateValue(entry.target, 0, value, 1500, suffix);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value').forEach(el => {
    statObserver.observe(el);
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile nav after click
            const navCollapse = document.getElementById('mainNav');
            if (navCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navCollapse)?.hide();
            }
        }
    });
});

// Language switcher
const LANG_KEY = 'nexngn-lang';
const TITLES = {
    en: 'Revolutionary Rotary Machine Technology',
    pl: 'Rewolucyjna Technologia Maszyny Rotacyjnej'
};

function setLanguage(lang) {
    document.documentElement.className = 'lang-' + lang;
    document.documentElement.lang = lang;
    document.title = TITLES[lang] || TITLES.en;
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem(LANG_KEY, lang);
}

(function initLanguage() {
    var urlLang = new URLSearchParams(window.location.search).get('lang');
    var storedLang = localStorage.getItem(LANG_KEY);
    var browserLang = navigator.language && navigator.language.startsWith('pl') ? 'pl' : 'en';
    setLanguage(urlLang || storedLang || browserLang);
})();

document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        setLanguage(this.dataset.lang);
    });
});
