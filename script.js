// Vita Nova — i18n + small interactive bits

// ---------- i18n dictionary ----------
const I18N = {
  en: {
    "brand": "Vita Nova",
    "nav.services": "Services",
    "nav.events": "Events",
    "nav.process": "Process",
    "nav.why": "Why us",
    "nav.quote": "Get a quote",
    "lang.label": "العربية",

    "hero.eyebrow": "UAE · Event Management for Schools",
    "hero.title1": "Events that make",
    "hero.title2": "school life unforgettable.",
    "hero.lede": "From the first syllabus night to the final graduation ceremony, Vita Nova plans and runs every detail so your team can focus on the students. Budgets, logistics, suppliers, design, run-of-show — we handle it end to end.",
    "hero.cta1": "Plan your event",
    "hero.cta2": "Explore services",
    "hero.trust1": "events delivered",
    "hero.trust2": "partner schools",
    "hero.trust3": "Emirates served",

    "stack.l1": "Annual Day",
    "stack.t1": '"Horizons of Tomorrow"',
    "stack.m1": "600 guests · 14 acts · Dubai",
    "stack.l2": "Sports Day",
    "stack.t2": "Inter-House Athletics",
    "stack.m2": "4 houses · 22 stations · Sharjah",
    "stack.l3": "Graduation",
    "stack.t3": "Class of 2026",
    "stack.m3": "320 graduates · Abu Dhabi",

    "services.eyebrow": "What we do",
    "services.title": "Full-service event management for schools",
    "services.lede": "One team, one timeline, one point of contact. Vita Nova runs the entire event so your staff don't have to.",

    "s1.t": "Academic guides & orientation",
    "s1.d": "Curriculum nights, new-student orientations, parent welcome evenings, and university-prep roadshows — informative, on-brand, and welcoming.",
    "s2.t": "Annual programs & functions",
    "s2.d": "Year-opening assemblies, founders' days, cultural weeks, appreciation evenings, and end-of-year celebrations.",
    "s3.t": "Annual days & graduations",
    "s3.d": "Stage shows, awards nights, and full graduation ceremonies with choreography, AV, and confetti — all choreographed to the minute.",
    "s4.t": "Sports days & tournaments",
    "s4.d": "Inter-house athletics, swimming galas, football tournaments, and inclusive games days — equipment, marshals, scoring, and medals.",
    "s5.t": "Creative & design",
    "s5.d": "Themes, stage sets, backdrops, branding, invitations, signage, photo zones, and on-site decor that tie the whole event together.",
    "s6.t": "Marketing & comms",
    "s6.d": "Event identity, social media campaigns, sponsor decks, ticket flows, parent apps, and post-event highlight reels.",
    "s7.t": "Budget & finance",
    "s7.d": "Transparent budgeting, multi-vendor quotations, payment scheduling, sponsor management, and final reconciliation with a line-by-line report.",
    "s8.t": "Logistics & suppliers",
    "s8.d": "Caterers, photographers, videographers, AV, transport, security, first aid, marquees, giveaways — vetted, contracted, and managed.",
    "s9.t": "Safety, permits & compliance",
    "s9.d": "UAE authority permits, risk assessments, child-safeguarding protocols, first aid, fire safety, and insurance coordination.",
    "s10.t": "Giveaways & merchandise",
    "s10.d": "Branded kits, trophies, medals, certificates, yearbooks, and custom merchandise — sourced, packed, and delivered to your campus.",
    "s11.t": "Workshops & trips",
    "s11.d": "Leadership camps, team-building days, educational excursions, and overnight retreats with full supervision plans.",
    "s12.t": "Year-round calendar planning",
    "s12.d": "We build the school's full event calendar at the start of the academic year so nothing clashes and every deadline is met.",

    "events.eyebrow": "Events we love to run",
    "events.title": "Made for the rhythm of a school year",

    "e1.t": "Curriculum & academic guides",
    "e1.d": "Subject showcases, IGCSE/A-Level evenings, university fairs.",
    "e2.t": "Orientation & welcome days",
    "e2.d": "New-student intake, KG1 settling-in mornings, parent tours.",
    "e3.t": "Annual day & cultural festivals",
    "e3.d": "Flagship stage productions with themes, dances, and awards.",
    "e4.t": "Graduation ceremonies",
    "e4.d": "Processionals, gowns, speeches, photo walls, and after-parties.",
    "e5.t": "Sports days & inter-house events",
    "e5.d": "Athletics, swimming galas, football leagues, fun runs.",
    "e6.t": "National & heritage days",
    "e6.d": "UAE National Day, Flag Day, Islamic and cultural celebrations.",
    "e7.t": "Teacher appreciation & PTA events",
    "e7.d": "Staff awards, wellness retreats, parent–school evenings.",
    "e8.t": "Competitions & olympiads",
    "e8.d": "Spelling bees, science fairs, robotics, art exhibitions.",
    "e9.t": "Community & fundraising galas",
    "e9.d": "Charity dinners, auction nights, alumni reunions.",

    "process.eyebrow": "How we work",
    "process.title": "A clear, calm process from kick-off to cleanup",
    "p1.t": "Discover",
    "p1.d": "We meet with your leadership team to understand goals, audience, tone, and constraints. We visit the venue and review the calendar.",
    "p2.t": "Design",
    "p2.d": "A creative brief, theme, run-of-show, and budget — presented for sign-off in plain language, no jargon.",
    "p3.t": "Plan",
    "p3.d": "Suppliers, contracts, permits, risk assessments, comms, and a shared project timeline with weekly check-ins.",
    "p4.t": "Deliver",
    "p4.d": "On-site team from load-in to load-out. We run the rehearsal, the show, and the wrap — leaving the school spotless.",
    "p5.t": "Review",
    "p5.d": "Photos, video, attendance and spend reports, plus a debrief so next year is even better.",

    "why.eyebrow": "Why schools choose Vita Nova",
    "why.title": "Calm, capable, and built for schools.",
    "why.lede": "We speak the language of safeguarding, timetables, and parents. We're vendor-agnostic, budget-disciplined, and we treat every student like a guest of honor.",
    "w1.t": "One point of contact",
    "w1.d": "A dedicated event lead from the first call to the final report.",
    "w2.t": "Transparent budgets",
    "w2.d": "Every dirham tracked, every quote in a shared sheet.",
    "w3.t": "UAE-wide network",
    "w3.d": "Vetted suppliers across all seven Emirates.",
    "w4.t": "Child-safe by design",
    "w4.d": "Safeguarding-trained crew, DBS-checked staff, and clear protocols.",
    "w5.t": "Calm on the day",
    "w5.d": "We bring the spare plan, the spare mic, and the spare patience.",

    "contact.eyebrow": "Let's plan your next event",
    "contact.title": "Tell us what you're imagining.",
    "contact.lede": "Share a few details and we'll come back within one working day with a free, no-obligation proposal.",
    "form.school": "School name",
    "form.name": "Your name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.type": "Event type",
    "form.notes": "Tell us a bit more",
    "form.notesPh": "Date, audience size, theme, anything important...",
    "form.submit": "Send enquiry",
    "form.t1": "Annual day / cultural festival",
    "form.t2": "Graduation ceremony",
    "form.t3": "Sports day / tournament",
    "form.t4": "Academic guide / orientation",
    "form.t5": "Teacher / PTA event",
    "form.t6": "Other",
    "form.success": "Thanks {name} — we've received your enquiry for {school} and will reply within one working day.",
    "form.error": "Please fill in your school name, your name, and email.",

    "footer.tag": "Event management for schools across the United Arab Emirates.",
    "footer.visit": "Visit",
    "footer.address": "Vita Nova Events L.L.C.<br />Dubai, United Arab Emirates",
    "footer.contact": "Contact",
    "footer.follow": "Follow",
    "footer.rights": "All rights reserved.",
    "footer.designed": "Designed in the UAE.",
  },

  ar: {
    "brand": "فيتا نوفا",
    "nav.services": "خدماتنا",
    "nav.events": "الفعاليات",
    "nav.process": "منهجيتنا",
    "nav.why": "لماذا نحن",
    "nav.quote": "اطلب عرض سعر",
    "lang.label": "English",

    "hero.eyebrow": "الإمارات · إدارة فعاليات للمدارس",
    "hero.title1": "فعاليات تصنع",
    "hero.title2": "ذكريات لا تُنسى في حياة المدرسة.",
    "hero.lede": "من أول أمسية تعريفية بالمنهج إلى حفل التخرّج الأخير، تتولّى فيتا نوفا تخطيط وتنفيذ كل التفاصيل ليتفرّغ فريقكم للطلاب. الميزانية، واللوجستيات، والمورّدون، والتصميم، وبرنامج الحفل — نتكفّل بكل شيء من البداية حتى النهاية.",
    "hero.cta1": "خطّط لفعاليتك",
    "hero.cta2": "استكشف خدماتنا",
    "hero.trust1": "فعالية منجزة",
    "hero.trust2": "مدرسة شريكة",
    "hero.trust3": "إمارات نخدمها",

    "stack.l1": "اليوم السنوي",
    "stack.t1": "«آفاق الغد»",
    "stack.m1": "600 مدعو · 14 فقرة · دبي",
    "stack.l2": "اليوم الرياضي",
    "stack.t2": "ألعاب بيوت المدرسة",
    "stack.m2": "4 بيوت · 22 محطة · الشارقة",
    "stack.l3": "التخرّج",
    "stack.t3": "دفعة 2026",
    "stack.m3": "320 خريجًا · أبوظبي",

    "services.eyebrow": "ماذا نقدّم",
    "services.title": "إدارة فعاليات متكاملة للمدارس",
    "services.lede": "فريق واحد، وخط زمني واحد، وجهة اتصال واحدة. تتولّى فيتا نوفا إدارة كامل الفعالية حتى لا ينشغل طاقمكم.",

    "s1.t": "أدلة أكاديمية واستقبال الطلاب",
    "s1.d": "أمسيات تعريفية بالمنهج، واستقبال الطلاب الجدد، وأمسيات ترحيب بأولياء الأمور، ومعارض جامعية — واضحة ومنسجمة مع هوية المدرسة.",
    "s2.t": "برامج ومناسبات سنوية",
    "s2.d": "طوابير افتتاح العام، وأيام المؤسسين، والأسابيع الثقافية، وأمسيات التقدير، واحتفالات نهاية العام.",
    "s3.t": "الأيام السنوية وحفلات التخرّج",
    "s3.d": "عروض مسرحية، وأمسيات جوائز، وحفلات تخرّج كاملة بإخراج فني وصوت وإضاءة وحفل ختامي مثير.",
    "s4.t": "الأيام الرياضية والبطولات",
    "s4.d": "ألعاب بيوت، ومهرجانات سباحة، وبطولات كرة قدم، وأيام ألعاب شاملة — تجهيزات وحكام وتسجيل وميداليات.",
    "s5.t": "الإبداع والتصميم",
    "s5.d": "ثيمات وخلفيات مسرحية وهوية بصرية ودعوات ولوحات إرشادية وأركان تصوير وديكور داخلي يوحّد الفعالية.",
    "s6.t": "التسويق والتواصل",
    "s6.d": "هوية الفعالية، وحملات التواصل الاجتماعي، وعروض الرعاة، وأنظمة التذاكر، وتطبيقات لأولياء الأمور، وفيديوهات ختامية.",
    "s7.t": "الميزانية والمالية",
    "s7.d": "ميزانية شفافة، وعروض أسعار متعددة، وجدول دفعات، وإدارة الرعاة، وتسوية نهائية بتقرير مفصّل.",
    "s8.t": "اللوجستيات والمورّدون",
    "s8.d": "مطاعم، ومصورون، وفيديوغرافيون، وصوت وإضاءة، ونقل، وأمن، وإسعافات أولية، وخيام، وهدايا — مختارون ومتعاقد معهم.",
    "s9.t": "السلامة والتصاريح والامتثال",
    "s9.d": "تصاريح السلطات الإماراتية، وتقييمات المخاطر، وبروتوكولات حماية الطفل، والإسعافات الأولية، والسلامة من الحرائق، والتنسيق التأميني.",
    "s10.t": "الهدايا والمنتجات",
    "s10.d": "حقائب تحمل هوية المدرسة، وكؤوس، وميداليات، وشهادات، وكتب تذكارية، ومنتجات مخصّصة — تجهيز وتوصيل إلى حرمكم.",
    "s11.t": "ورش عمل ورحلات",
    "s11.d": "معسكرات قيادية، وأيام لبناء الفريق، ورحلات تعليمية، ومعسكرات ليلية بخطط إشراف كاملة.",
    "s12.t": "تخطيط تقويم العام الدراسي",
    "s12.d": "نبني تقويم الفعاليات الكامل لبداية العام الدراسي حتى لا تتضارب المناسبات وتُحترم كل المواعيد.",

    "events.eyebrow": "فعاليات نحب أن ننفّذها",
    "events.title": "مصمَّمة على إيقاع العام الدراسي",

    "e1.t": "أدلة أكاديمية ومناهج",
    "e1.d": "معارض المواد، وأمسيات IGCSE/A-Level، ومعارض جامعية.",
    "e2.t": "أيام استقبال وترحيب",
    "e2.d": "استقبال الطلاب الجدد، وصباحيات تأقلم الروضة، وجولات لأولياء الأمور.",
    "e3.t": "اليوم السنوي والمهرجانات الثقافية",
    "e3.d": "إنتاجات مسرحية رائدة بثيمات ورقصات وجوائز.",
    "e4.t": "حفلات التخرّج",
    "e4.d": "مواكب، وأردية، وخطابات، وجدران تصوير، وحفلات بعد التخرّج.",
    "e5.t": "أيام رياضية وفعاليات بيوت",
    "e5.d": "ألعاب قوى، ومهرجانات سباحة، ودوريات كرة قدم، وسباقات ممتعة.",
    "e6.t": "الأيام الوطنية والتراثية",
    "e6.d": "اليوم الوطني الإماراتي، ويوم العلم، واحتفالات إسلامية وثقافية.",
    "e7.t": "تقدير المعلمين وفعاليات أولياء الأمور",
    "e7.d": "جوائز الموظفين، ومعسكرات رفاهية، وأمسيات أسرية.",
    "e8.t": "مسابقات وأولمبيادات",
    "e8.d": "مسابقات إملاء، ومعارض علوم، وروبوتات، ومعارض فنون.",
    "e9.t": "حفلات مجتمعية وجمع تبرعات",
    "e9.d": "عشاءات خيرية، وأمسيات مزادات، ولقاءات خريجين.",

    "process.eyebrow": "كيف نعمل",
    "process.title": "عملية واضحة وهادئة من الانطلاقة حتى الانتهاء",
    "p1.t": "الاكتشاف",
    "p1.d": "نلتقي بفريق قيادتكم لفهم الأهداف والجمهور والأسلوب والقيود. نزور المكان ونراجع التقويم.",
    "p2.t": "التصميم",
    "p2.d": "ملف إبداعي، وثيم، وبرنامج حفل، وميزانية — تُعرض للموافقة بلغة واضحة بلا مصطلحات.",
    "p3.t": "التخطيط",
    "p3.d": "مورّدون، وعقود، وتصاريح، وتقييمات مخاطر، وتواصل، وخط زمني مشترك بمراجعات أسبوعية.",
    "p4.t": "التنفيذ",
    "p4.d": "فريق في الموقع من التحميل حتى الانتهاء. ندير البروفة والحفل والتنظيف — ونترك المدرسة نظيفة.",
    "p5.t": "المراجعة",
    "p5.d": "صور وفيديو وتقارير حضور وإنفاق، إضافة إلى جلسة تقييم لجعل العام القادم أفضل.",

    "why.eyebrow": "لماذا تختار المدارس فيتا نوفا",
    "why.title": "هدوء وكفاءة وصُنع للمدارس.",
    "why.lede": "نتحدث لغة الحماية والجداول الدراسية وأولياء الأمور. لا نرتبط بمورّد بعينه، ونلتزم بالميزانية، ونعامل كل طالب كضيف شرف.",
    "w1.t": "جهة اتصال واحدة",
    "w1.d": "مدير فعالية مخصّص من أول مكالمة حتى التقرير الأخير.",
    "w2.t": "ميزانيات شفافة",
    "w2.d": "كل درهم موثّق، وكل عرض سعر في جدول مشترك.",
    "w3.t": "شبكة في كل الإمارات",
    "w3.d": "مورّدون معتمدون في الإمارات السبع.",
    "w4.t": "أمان الطفل أساس التصميم",
    "w4.d": "طاقم مدرَّب على حماية الطفل، وموظفون حاصلون على فحص DBS، وبروتوكولات واضحة.",
    "w5.t": "هدوء في يوم الحدث",
    "w5.d": "نحضر الخطة البديلة، والمايكروفون الاحتياطي، والصبر الاحتياطي.",

    "contact.eyebrow": "لنخطّط لفعاليتك القادمة",
    "contact.title": "أخبرنا بما تتخيّله.",
    "contact.lede": "شارِكنا بعض التفاصيل وسنعود إليك خلال يوم عمل بعرض مجاني بلا التزامات.",
    "form.school": "اسم المدرسة",
    "form.name": "اسمك",
    "form.email": "البريد الإلكتروني",
    "form.phone": "الهاتف",
    "form.type": "نوع الفعالية",
    "form.notes": "أخبرنا بالمزيد",
    "form.notesPh": "التاريخ، حجم الجمهور، الثيم، أي تفاصيل مهمة...",
    "form.submit": "إرسال الطلب",
    "form.t1": "اليوم السنوي / مهرجان ثقافي",
    "form.t2": "حفل تخرّج",
    "form.t3": "يوم رياضي / بطولة",
    "form.t4": "دليل أكاديمي / استقبال",
    "form.t5": "فعالية للمعلمين / أولياء الأمور",
    "form.t6": "أخرى",
    "form.success": "شكرًا {name} — استلمنا طلبك لـ {school} وسنردّ خلال يوم عمل.",
    "form.error": "يرجى إدخال اسم المدرسة واسمك والبريد الإلكتروني.",

    "footer.tag": "إدارة فعاليات للمدارس في جميع أنحاء الإمارات العربية المتحدة.",
    "footer.visit": "زورونا",
    "footer.address": "فيتا نوفا للفعاليات ش.ذ.م.م<br />دبي، الإمارات العربية المتحدة",
    "footer.contact": "تواصل",
    "footer.follow": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.designed": "صُمِّم في الإمارات.",
  },
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