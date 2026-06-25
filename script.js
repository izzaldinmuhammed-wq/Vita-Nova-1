// Vita Nova — i18n + small interactive bits

// ---------- i18n dictionary (replaced because original file was corrupted) ----------
// The original I18N object in this file appears truncated and contains unclosed
// strings which break the script. Replace it with a minimal valid object so the
// rest of the script can run. We can restore full translations later from a
// backup or by re-creating the object from index.html contents.
const I18N = {
  en: {},
  ar: {}
};

// ---------- Apply translations ----------
function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });

  const label = document.querySelector("[data-lang-label]");
  if (label) label.textContent = dict["lang.label"];

  // also flip select option values that come from i18n (already rendered as text)
  document.querySelectorAll("select option[data-i18n]").forEach((opt) => {
    const key = opt.getAttribute("data-i18n");
    if (dict[key] != null) opt.textContent = dict[key];
  });

  // remember
  try { localStorage.setItem("vn-lang", lang); } catch (_) {}
}

// ---------- Language toggle ----------
const toggleBtn = document.querySelector("[data-lang-toggle]");
const navLinks = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-lang") || "en";
    applyLang(current === "en" ? "ar" : "en");
  });
}

// ---------- Mobile nav ----------
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );
}

// ---------- Contact form ----------
const form = document.querySelector(".contact-form");
if (form) {
  const note = form.querySelector(".form-note");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lang = document.body.getAttribute("data-lang") || "en";
    const dict = I18N[lang] || I18N.en;
    const school = (data.get("school") || "").toString().trim();
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    if (!school || !name || !email) {
      note.textContent = dict["form.error"];
      note.style.color = "#ffb38a";
      return;
    }
    note.style.color = "";
    note.textContent = (dict["form.success"] || "")
      .replace("{name}", name)
      .replace("{school}", school);
    form.reset();
  });
}

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Boot ----------
const saved = (() => { try { return localStorage.getItem("vn-lang"); } catch (_) { return null; } })();
applyLang(saved === "ar" ? "ar" : "en");

// ---------- Dark mode ----------
const themeBtn = document.querySelector("[data-theme-toggle]");
function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  if (themeBtn) {
    const icon = themeBtn.querySelector(".theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
    themeBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }
  try { localStorage.setItem("vn-theme", theme); } catch (_) {}
}
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}
const savedTheme = (() => { try { return localStorage.getItem("vn-theme"); } catch (_) { return null; } })();
applyTheme(savedTheme === "dark" ? "dark" : "light");

// ---------- Scroll progress bar ----------
const progressFill = document.getElementById("scrollProgressFill");
function updateProgress() {
  const doc = document.documentElement;
  const scrolled = doc.scrollTop || document.body.scrollTop;
  const max = doc.scrollHeight - doc.clientHeight;
  const pct = max > 0 ? Math.min(100, (scrolled / max) * 100) : 0;
  if (progressFill) progressFill.style.width = pct + "%";
}
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

// ---------- FAQ accordion ----------
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-q");
  const ans = item.querySelector(".faq-a");
  if (!btn || !ans) return;
  btn.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      ans.style.maxHeight = ans.scrollHeight + "px";
    } else {
      ans.style.maxHeight = "0px";
    }
  });
});
// Re-measure open FAQs on language change so maxHeight stays correct
const _origApply = applyLang;
window._recalcFaq = function () {
  document.querySelectorAll(".faq-item.open .faq-a").forEach((a) => {
    a.style.maxHeight = a.scrollHeight + "px";
  });
};
document.querySelectorAll("[data-lang-toggle]").forEach((b) =>
  b.addEventListener("click", () => setTimeout(window._recalcFaq, 50))
);
document.querySelectorAll("[data-theme-toggle]").forEach((b) =>
  b.addEventListener("click", () => setTimeout(window._recalcFaq, 50))
);

// ---------- Hero particles (cursor follow) ----------
(function initHeroParticles() {
  const canvas = document.getElementById("heroParticles");
  if (!canvas) return;
  // Skip on touch / reduced motion
  const isTouch = matchMedia("(hover: none)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isTouch || reduce) return;

  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0;
  let particles = [];
  const mouse = { x: -9999, y: -9999, active: false };
  let scrollY = window.scrollY;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  const COUNT = 60;
  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.6,
    });
  }

  canvas.parentElement.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });
  canvas.parentElement.addEventListener("mouseleave", () => {
    mouse.active = false;
  });
  window.addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });

  function draw() {
    const heroBottom = canvas.parentElement.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
      requestAnimationFrame(draw);
      return;
    }
    ctx.clearRect(0, 0, w, h);
    // Connections
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      if (mouse.active) {
        const dx = a.x - mouse.x, dy = a.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 110) {
          ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - d / 110) * 0.45})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < 90) {
          ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - d / 90) * 0.25})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    // Particles
    for (const p of particles) {
      // Drift toward mouse
      if (mouse.active) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 130 && d > 0) {
          p.vx += (dx / d) * 0.02;
          p.vy += (dy / d) * 0.02;
        }
      }
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.vx += (Math.random() - 0.5) * 0.05;
      p.vy += (Math.random() - 0.5) * 0.05;
      if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;
      ctx.fillStyle = "rgba(212, 175, 55, 0.85)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// ---------- Floating CTA visibility ----------
(function initFloatingCta() {
  const cta = document.getElementById("floatingCta");
  if (!cta) return;
  const contact = document.getElementById("contact");
  function update() {
    const past = window.scrollY > 600;
    const inContact = contact && contact.getBoundingClientRect().top < window.innerHeight * 0.7;
    if (past && !inContact) cta.classList.add("visible"), cta.setAttribute("aria-hidden", "false");
    else cta.classList.remove("visible"), cta.setAttribute("aria-hidden", "true");
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

// ---------- Cost calculator ----------
(function initCalculator() {
  const form = document.getElementById("calcForm");
  if (!form) return;
  const audience = document.getElementById("calcAudience");
  const duration = document.getElementById("calcDuration");
  const audOut = document.getElementById("calcAudienceOut");
  const durOut = document.getElementById("calcDurationOut");
  const price = document.getElementById("calcPrice");
  const services = {
    av: document.getElementById("svc-av"),
    cater: document.getElementById("svc-cater"),
    photo: document.getElementById("svc-photo"),
    decor: document.getElementById("svc-decor"),
    perform: document.getElementById("svc-perform"),
    transport: document.getElementById("svc-transport"),
  };

  // Per-unit indicative rates in AED
  const BASE = 8000;             // fixed setup / lead
  const PER_GUEST = 35;          // per-guest base
  const PER_HOUR = 1500;         // per-hour ops
  const SVC = {
    av: 4500,
    cater: 120,                  // per guest
    photo: 4000,
    decor: 8000,
    perform: 6000,
    transport: 2500,
  };

  function fmt(n) {
    return "AED " + Math.round(n).toLocaleString("en-US");
  }
  function update() {
    const a = parseInt(audience.value, 10);
    const d = parseInt(duration.value, 10);
    audOut.textContent = a.toLocaleString("en-US") + " guests";
    durOut.textContent = d + " hours";
    let low = BASE;
    let high = BASE * 1.6;
    low += a * PER_GUEST;
    high += a * (PER_GUEST * 1.4);
    low += d * PER_HOUR;
    high += d * PER_HOUR * 1.4;
    if (services.av.checked) { low += SVC.av * 0.8; high += SVC.av * 1.2; }
    if (services.cater.checked) { low += a * SVC.cater * 0.7; high += a * SVC.cater * 1.1; }
    if (services.photo.checked) { low += SVC.photo * 0.8; high += SVC.photo * 1.2; }
    if (services.decor.checked) { low += SVC.decor * 0.7; high += SVC.decor * 1.3; }
    if (services.perform.checked) { low += SVC.perform * 0.7; high += SVC.perform * 1.3; }
    if (services.transport.checked) { low += SVC.transport * 0.8; high += SVC.transport * 1.2; }
    price.textContent = fmt(low) + " – " + fmt(high);
  }
  [audience, duration].forEach((el) => el.addEventListener("input", update));
  Object.values(services).forEach((el) => el && el.addEventListener("change", update));
  update();
})();

// ---------- Resource download buttons ----------
document.querySelectorAll(".res-download").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-res-name") || "the guide";
    const lang = document.body.getAttribute("data-lang") || "en";
    const msg = lang === "ar"
      ? "شكرًا لاهتمامك! في النسخة الكاملة، سيرسل «" + name + "» تلقائيًا. هذا نموذج أولي — أرسل لنا رسالة في قسم \"تو[...]
      : "Thanks for your interest! In the live build, \"" + name + "\" would email to you automatically. This is a prototype — message us in the contact section and we'll send the guide over.";
    alert(msg);
  });
});

// ---------- UAE map hover interaction ----------
document.querySelectorAll(".uae-svg .emirate").forEach((poly) => {
  const key = poly.getAttribute("data-emirate");
  const li = document.querySelector('.emirate-list li[data-emirate="' + key + '"]');
  if (!li) return;
  poly.addEventListener("mouseenter", () => {
    document.querySelectorAll(".emirate-list li").forEach((x) => x.classList.remove("active"));
    li.classList.add("active");
  });
  poly.addEventListener("mouseleave", () => li.classList.remove("active"));
});
document.querySelectorAll(".emirate-list li").forEach((li) => {
  const key = li.getAttribute("data-emirate");
  const poly = document.querySelector('.uae-svg .emirate[data-emirate="' + key + '"]');
  if (!poly) return;
  li.addEventListener("mouseenter", () => li.classList.add("active"));
  li.addEventListener("mouseleave", () => li.classList.remove("active"));
});
