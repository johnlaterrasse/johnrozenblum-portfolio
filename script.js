/* ============================================
   JOHN ROZENBLUM — script.js
   Cursor · Scroll animations · Language · Nav
   ============================================ */

/* ---- CURSEUR RÉTICULE ---- */
(function() {
  const r = document.createElement('div');
  r.className = 'cursor-reticle';
  document.body.appendChild(r);
  document.addEventListener('mousemove', e => {
    r.style.left = e.clientX + 'px';
    r.style.top  = e.clientY + 'px';
  });
})();

/* ---- HERO ANIMATION ---- */
const hero = document.querySelector('.hero');
if (hero) {
  setTimeout(() => hero.classList.add('loaded'), 100);
}

/* ---- SCROLL ANIMATIONS ---- */
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => obs.observe(el));
}

/* ---- NAV SCROLL (fond blanc au scroll) ---- */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  // Parallax hero
  const bg = document.querySelector('.hero-bg');
  if (bg) bg.style.transform = `scale(1.05) translateY(${scrollY * 0.2}px)`;
}, { passive: true });

/* ---- NAVIGATION BURGER ---- */
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
    });
  });
}

/* ---- NAV ACTIVE STATE ---- */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* ---- LANGUE FR / EN ---- */
let currentLang = localStorage.getItem('jr_lang') || 'fr';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('jr_lang', lang);
  // innerHTML (pas textContent) pour rendre les <br> dans les titres
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.innerHTML = lang === 'fr' ? el.dataset.fr : el.dataset.en;
  });
  // Placeholders
  document.querySelectorAll('[data-fr-placeholder]').forEach(el => {
    el.placeholder = lang === 'fr' ? el.dataset.frPlaceholder : el.dataset.enPlaceholder;
  });
  // Options de select
  document.querySelectorAll('option[data-fr]').forEach(el => {
    el.textContent = lang === 'fr' ? el.dataset.fr : el.dataset.en;
  });
  const toggle = document.querySelector('.lang-toggle');
  if (toggle) toggle.textContent = lang === 'fr' ? 'EN' : 'FR';
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  const toggle = document.querySelector('.lang-toggle');
  if (toggle) toggle.addEventListener('click', () => applyLang(currentLang === 'fr' ? 'en' : 'fr'));
});

/* ---- LIGHTBOX PROJETS ---- */
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  // Open
  document.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.project;
      const data = PROJECTS[key];
      if (!data) return;

      const lang = currentLang;
      lightbox.querySelector('.lightbox-title').textContent = data.name;
      lightbox.querySelector('.lightbox-desc').textContent = lang === 'fr' ? data.fr : data.en;

      const metaEl = lightbox.querySelector('.lightbox-meta');
      metaEl.innerHTML = `
        <div class="lightbox-meta-item"><strong>Lieu</strong>${data.loc}</div>
        <div class="lightbox-meta-item"><strong>Type</strong>${data.type}</div>
        ${data.surface ? `<div class="lightbox-meta-item"><strong>Surface</strong>${data.surface}</div>` : ''}
        ${data.style ? `<div class="lightbox-meta-item"><strong>Style</strong>${data.style}</div>` : ''}
      `;

      const gallery = lightbox.querySelector('.lightbox-gallery');
      gallery.innerHTML = data.images.map(src => `<img src="${src}" alt="${data.name}" loading="lazy">`).join('');

      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close
  document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ---- OBJETS CARDS — lightbox si data-object, sinon -> contact ---- */
const lightboxObj = document.getElementById('lightbox-object');
if (lightboxObj) {
  document.querySelectorAll('[data-object]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const key  = card.dataset.object;
      const data = OBJECTS[key];
      if (!data) return;

      const lang = currentLang;
      lightboxObj.querySelector('.lightbox-title').textContent = data.name;
      lightboxObj.querySelector('.lightbox-desc').textContent  = lang === 'fr' ? data.fr : data.en;
      lightboxObj.querySelector('.lightbox-object-tag').textContent = lang === 'fr' ? data.tag : 'On request';

      const gallery = lightboxObj.querySelector('.lightbox-gallery');
      gallery.innerHTML = data.images.map(src => `<img src="${src}" alt="${data.name}" loading="lazy">`).join('');

      lightboxObj.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  lightboxObj.querySelector('.lightbox-close').addEventListener('click', closeObjLightbox);
  lightboxObj.addEventListener('click', e => { if (e.target === lightboxObj) closeObjLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeObjLightbox(); });

  function closeObjLightbox() {
    lightboxObj.classList.remove('open');
    document.body.style.overflow = '';
  }
} else {
  /* Fallback pages sans lightbox-object : click -> contact */
  document.querySelectorAll('.object-card:not([data-object])').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => { window.location.href = 'contact.html'; });
  });
}

/* ---- HERO SCROLL — bouton Découvrir ---- */
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
  heroScroll.addEventListener('click', () => {
    const nextSection = document.querySelector('section + section, .hero + section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  });
}

/* ---- NAV LOGO — scroll to top ---- */
const navLogo = document.querySelector('.nav-logo');
if (navLogo) {
  navLogo.addEventListener('click', e => {
    // Si déjà sur index.html, juste scroll to top sans naviguer
    const isHome = window.location.pathname === '/' ||
                   window.location.pathname.endsWith('index.html') ||
                   window.location.pathname === '';
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Sinon laisse le href="index.html" naviguer normalement
  });
}

/* ---- TICKER DUPLICATION ---- */
const ticker = document.querySelector('.ticker-inner');
if (ticker) {
  ticker.innerHTML += ticker.innerHTML;
}

/* ---- CONTACT FORM ---- */
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const original = btn.textContent;

    btn.textContent = currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...';
    btn.disabled = true;

    const data = {
      name:     form.nom.value,
      email:    form.email.value,
      type:     form.type.value,
      surface:  form.surface.value,
      message:  form.message.value,
      _subject: `Nouveau projet — ${form.type.value || 'Design'} — ${form.nom.value}`
    };

    try {
      const res  = await fetch('https://formsubmit.co/ajax/hello@johnrozenblum.com', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(data)
      });
      const json = await res.json();
      if (json.success === 'true' || json.success === true) {
        btn.textContent    = currentLang === 'fr' ? 'Message envoyé ✓' : 'Message sent ✓';
        btn.style.background = '#4a7c59';
        form.reset();
        setTimeout(() => { btn.textContent = original; btn.style.background = ''; btn.disabled = false; }, 4000);
      } else {
        throw new Error('failed');
      }
    } catch {
      btn.textContent    = currentLang === 'fr' ? 'Erreur — réessayez' : 'Error — please retry';
      btn.style.background = '#c0392b';
      btn.disabled = false;
      setTimeout(() => { btn.textContent = original; btn.style.background = ''; }, 4000);
    }
  });
}
