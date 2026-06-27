// Vita Nova — interactions

(function () {
  'use strict';

  // ----- Footer year -----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Scroll progress bar -----
  const fill = document.getElementById('scrollProgressFill');
  function updateProgress() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (fill) fill.style.width = pct + '%';
  }


  // ----- Scroll progress bar -----
  const fill = dlProgressFill');
  function updateProgress() {                                   const h = do
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (fill) fill.style.width = pct + '%';
  }
                                                              // ----- Float
  const floating = document.getElementById('floatingCta');
  function updateFloating() {                                   if (!floatin
    if (window.scrollY > 600)                               floating.classLi
    else floating.classList.remove('visible');
  }

  window.addEventListener('scroll', () => {
    updateProgress();                                           updateFloati
  }, { passive: true });
  updateProgress();                                           updateFloating
                                                              // ----- Mobil
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');             navToggle. String(open));
    });
    navLinks.querySelectorAll('a').forEach(a => {                 a.addEventnavLinks.classList.remove('open'));
    });                                                       }

  // ----- Theme toggle (light/dark) -----                    const themeBtndocument.querySelector('[data-theme-toggle]');                const root = d
  const savedTheme = localStorage.getItem('vn-theme');
  if (savedTheme === 'dark') root.setAttribute('data-theme', 'dark');
                                                              if (themeBtn)
    themeBtn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') ===    'dark';
      if (isDark) {
        root.removeAttribute('data-theme');                         localStoht');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('vn-theme', 'dark');                 }
    });
  }

  // ----- Language toggle -----
  const langBtn = document.querySelector('[data-lang-toggle]');
  const langLabel = document.querySelector('[data-lang-label]');
  let lang = 'en';                                            if (langBtn) {
    langBtn.addEventListener('click', () => {
      lang = lang === 'en' ? 'ar' : 'en';
      if (lang === 'ar') {
        root.setAttribute('dir', 'rtl');
        root.setAttribute('lang', 'ar');                            if (lang= 'English';
      } else {
        root.setAttribute('dir', 'ltr');                            root.set
        if (langLabel) langLabel.textContent = 'العربية';         }
    });
  }                                                         
  // ----- Contact form -----
  const form = document.querySelector('.contact-form');       const note = frm-note') : null;
  if (form && note) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const school = data.get('school');                          const name
      const email = data.get('email');
      if (!school || !name || !email) {                             note.texhool, name, andemail.';
        note.style.color = '#ff8a8a';                               return;
      }
      note.textContent = "Thanks — we'll be in touch within one working day.
      note.style.color = '#b6e3a8';
      form.reset
    });
  }

  // ----- Hero particle canvas -----
  const canvas = document.getElementById('heroParticles');
  if (canvas &&
    const ctx = canvas.getContext('2d');
    let particles = [];
    let raf;

    function resize() {
      const rectct();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio);
    }

    function spawn() {
      const rectct();
      const count = Math.min(40, Math.floor(rect.width / 20));
      particles = [];
      for (let i
        particles.push({
          x: Math.random() * rect.width,
          y: Mat
          r: Math.random() * 1.6 + 0.4,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (M
          a: Math.random() * 0.5 + 0.2
        });
      }
    }

    function tic
      const rect = canvas.getBoundingClientRect();
      ctx.clearRight);
      const isDark = root.getAttribute('data-theme') === 'dark';
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x  *= -1;
        if (p.y < 0 || p.y > rect.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc();
        ctx.fillStyle = isDark
          ? `rgb
          : `rgba(184, 137, 61, ${p.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    }

    function init() {
      resize();
      spawn();
      cancelAnimationFrame(raf);
      tick();
    }
    init();
    window.addEv
  }

  // ----- Price estimator (calculator) -----
  const calcForm = document.querySelector('.calc-form');
  const calcResult = document.querySelector('.calc-result');
  if (calcForm &
    const baseRates = {
      'annual-day': 35000,
      'graduatio
      'sports-day': 18000,
      'academic-
      'teacher-pta': 6000,
      'other': 12000
    };
    const perGuest = 25;
    const extras
      'av': 4000,
      'catering': 15000,
      'decor': 8
      'photography': 3500,
      'security': 2500
    };

    function calc() {
      const typecalcForm.querySelector('[name="event-type"]').value;
      const guests =
parseInt(calcFors"]').value, 10)|| 0;
      const base
      let extrasTotal = 0;
      const picked = [];
      calcForm.querySelectorAll('[name="extras"]:checked').forEach(cb => {
        extrasTotal += extrasPrice[cb.value] || 0;
        picked.p
      });
      const guestCost = guests * perGuest;
      const low trasTotal * 0.85+ guestCost * 0.85);
      const high = Math.round(base * 1.25 + extrasTotal * 1.25 + guestCost * 1.
      calcResult.innerHTML = `
        <p class="calc-label">Estimated budget range</p>
        <p classcaleString()} –${high.toLocaleString()}</p>
        <p class'—'} guests ·${picked.length} extra${picked.length === 1 ? '' : 's'} · indicative only, final quote on request.</p>
      `;
    }

    calcForm.add> {
      e.preventDefault();
      calc();
    });
    calcForm.addEventListener('change', calc);
    calc();
  }
})();
