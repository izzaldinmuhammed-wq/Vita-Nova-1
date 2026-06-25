// Vita Nova — i18n + small interactive bits

// ---------- i18n dictionary ----------
const I18N = {
  en: {
    "brand": "Vita Nova",
    "nav.services": "Services",
    "nav.events": "Events",
    "nav.process": "Process",
    "nav.why": "Why us",
    "nav.story": "Story",
    "nav.faq": "FAQ",
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

    "story.eyebrow": "Our story",
    "story.title": "We started Vita Nova after a thousand school runs went sideways.",
    "story.p1": "Between us, we've spent over fifteen years inside UAE schools — running events, coordinating calendars, chasing suppliers, and standing next to nervous principals at 6am on event day. We loved the work and hated the chaos. The same last-minute rushes, the same vendor phone calls, the same frantic WhatsApp threads the night before.",
    "story.p2": "So in 2024 we built the team we wished we'd had: one point of contact, transparent budgets, calm on the day, and a real plan B. Vita Nova is what event management looks like when it's run by people who've actually been on the other side of the clipboard.",
    "story.p3": "Today we work with schools across all seven Emirates — and we still get to every load-in at sunrise.",
    "story.caption": "Founded 2024, Dubai · A team built by people who've been on the other side of the clipboard",

    "faq.eyebrow": "Common questions",
    "faq.title": "Things schools ask before they book",
    "faq.q1.t": "How far in advance should we book?",
    "faq.q1.d": "<p>Ideally 6–8 weeks for most events, 12+ weeks for annual days and graduations. We've also pulled off miracles in two weeks when a school suddenly finds out the Minister is visiting — but more time always means a calmer day.</p>",
    "faq.q2.t": "Do you handle permits and approvals?",
    "faq.q2.d": "<p>Yes. We coordinate with the relevant UAE authorities for venue, fire, safety, and child-event permits, and we share a risk assessment with your leadership team before the day.</p>",
    "faq.q3.t": "Can you work with our budget?",
    "faq.q3.d": "<p>Always. We present a transparent budget with three tiers before you commit, and every dirham is tracked in a shared sheet so you always know where the money went.</p>",
    "faq.q4.t": "Do you provide the equipment and decor?",
    "faq.q4.d": "<p>Yes — sound, lighting, staging, decor, signage, photo walls, marquees, and anything else you need. Everything is rented or sourced, never permanent, and we leave your campus exactly as we found it.</p>",
    "faq.q5.t": "Are your staff child-safeguarding trained?",
    "faq.q5.d": "<p>Every Vita Nova team member is safeguarding-trained and background-checked. We follow your school's safeguarding policy on the day, and we never photograph or film students without explicit consent.</p>",
    "faq.q6.t": "Which Emirates do you cover?",
    "faq.q6.d": "<p>All seven. We have vetted suppliers in Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.</p>",
    "faq.q7.t": "What happens after the event?",
    "faq.q7.d": "<p>You receive a full debrief within a week: photos, video highlights, attendance and spend reports, plus a short debrief call so next year is even better.</p>",
    "faq.q8.t": "Can we see a sample timeline first?",
    "faq.q8.d": "<p>Of course. After our first call we'll send a sample run-of-show and budget for the kind of event you have in mind — no obligation, yours to keep.</p>",

    "mvv.eyebrow": "What we stand for",
    "mvv.title": "Mission, vision, and the values we won't compromise.",
    "mvv.m.t": "Mission",
    "mvv.m.d": "To make every school event in the UAE feel like the team had months to prepare — even when they had weeks.",
    "mvv.v.t": "Vision",
    "mvv.v.d": "A future where school events in the Emirates are benchmarks for the region — safe, sustainable, joyful, and unmistakably student-led.",
    "mvv.va.t": "Values",
    "mvv.va1.t": "Calm.",
    "mvv.va1.d": "We bring the spare plan, the spare patience, and the spare mic.",
    "mvv.va2.t": "Honesty.",
    "mvv.va2.d": "Budgets you can read. Schedules you can trust. Mistakes owned fast.",
    "mvv.va3.t": "Safety.",
    "mvv.va3.d": "Every child on campus is treated like our own. Every permit, signed.",
    "mvv.va4.t": "Craft.",
    "mvv.va4.d": "Good enough isn't. We sweat the details so the day feels effortless.",
    "mvv.va5.t": "Joy.",
    "mvv.va5.d": "If the kids aren't delighted, we haven't done our job.",

    "sus.eyebrow": "Sustainability",
    "sus.title": "Better events, lighter footprint.",
    "sus.p1": "UAE schools are leading the region on climate action, and events shouldn't be the exception. We design every Vita Nova event with the planet in mind — without ever cutting corners on the experience.",
    "sus.p2": "Our default is reusable. Our backup is recyclable. Single-use is the last resort, not the first.",
    "sus.c1.t": "Reusable over disposable",
    "sus.c1.d": "Backdrops, signage, props and stage sets designed to be stored and reused year after year.",
    "sus.c2.t": "Local suppliers first",
    "sus.c2.d": "Shorter trips, fresher food, smaller carbon bills — and better support for the UAE economy.",
    "sus.c3.t": "Plant-forward menus",
    "sus.c3.d": "At least one fully plant-based menu option at every event, no questions asked.",
    "sus.c4.t": "Zero printed waste",
    "sus.c4.d": "Digital tickets, QR check-ins, and shared event apps replace paper programs and flyers.",
    "sus.c5.t": "Honest reporting",
    "sus.c5.d": "Every event ships with a short sustainability report — what we reused, what we recycled, what we'll do better.",

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
    "nav.story": "قصتنا",
    "nav.faq": "الأسئلة",
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

    "story.eyebrow": "قصتنا",
    "story.title": "بدأنا فيتا نوفا بعد ألف مهمة مدرسية خرجت عن السيطرة.",
    "story.p1": "بيننا نحن الفريق، أمضينا أكثر من خمس عشرة سنة داخل مدارس الإمارات — نُدير فعاليات، وننسّق جداول، ونتابع مورّدين، ونقف بجانب مديرين قلقين عند السادسة صباحًا في يوم الحدث. أحببنا العمل وكَرِهنا الفوضى. نفس التسرّع في اللحظة الأخيرة، ونفس اتصالات المورّدين، ونفس خيوط واتساب المحمومة في الليلة السابقة.",
    "story.p2": "فقررنا في 2024 أن نُكوِّن الفريق الذي كنّا نتمنّى وجوده معنا: جهة اتصال واحدة، وميزانيات شفافة، وهدوء في يوم الحدث، وخطة بديلة حقيقية. فيتا نوفا هي إدارة الفعاليات حين يتولاها أشخاص كانوا فعلًا على الجانب الآخر من قائمة المهام.",
    "story.p3": "اليوم نعمل مع مدارس في الإمارات السبع — ولا نزال نصل إلى موقع التحميل عند شروق الشمس.",
    "story.caption": "تأسست في 2024، دبي · فريق بناه أشخاص كانوا على الجانب الآخر من قائمة المهام",

    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة تطرحها المدارس قبل الحجز",
    "faq.q1.t": "كم يجب أن نحجز مُسبقًا؟",
    "faq.q1.d": "<p>مثاليًا قبل 6 إلى 8 أسابيع لمعظم الفعاليات، و12 أسبوعًا أو أكثر لليوم السنوي وحفلات التخرّج. تمكّنا أيضًا من تنفيذ «معجزات» في أسبوعين حين تكتشف المدرسة فجأة زيارة وزير — لكن المزيد من الوقت يعني دائمًا يومًا أكثر هدوءًا.</p>",
    "faq.q2.t": "هل تتولّون التصاريح والموافقات؟",
    "faq.q2.d": "<p>نعم. ننسّق مع الجهات الإماراتية المعنية لتصاريح المكان والسلامة من الحرائق وفعاليات الأطفال، ونشارك فريق قيادتكم تقييم المخاطر قبل اليوم.</p>",
    "faq.q3.t": "هل يمكنكم العمل بميزانيتنا؟",
    "faq.q3.d": "<p>دائمًا. نعرض ميزانية شفافة بثلاثة مستويات قبل أن تلتزموا، وكل درهم موثّق في جدول مشترك لتعرفوا أين ذهب المال.</p>",
    "faq.q4.t": "هل تؤمّنون المعدات والديكور؟",
    "faq.q4.d": "<p>نعم — الصوت والإضاءة والمسرح والديكور واللوحات وجدران التصوير والخيام وكل ما تحتاجونه. كل شيء مُستأجر أو مُورَّد، لا شيء دائم، ونترك حرمكم كما وجدناه تمامًا.</p>",
    "faq.q5.t": "هل طاقمكم مدرَّب على حماية الطفل؟",
    "faq.q5.d": "<p>كل عضو في فريق فيتا نوفا مدرَّب على حماية الطفل ومُختبَر خلفيًا. نلتزم بسياسة حماية الطفل في مدرستكم في يوم الحدث، ولا نلتقط صورًا أو مقاطع فيديو للطلاب دون موافقة صريحة.</p>",
    "faq.q6.t": "أي الإمارات تغطّون؟",
    "faq.q6.d": "<p>الإمارات السبع كلها. لدينا مورّدون معتمدون في أبوظبي ودبي والشارقة وعجمان وأم القيوين ورأس الخيمة والفجيرة.</p>",
    "faq.q7.t": "ماذا يحدث بعد الفعالية؟",
    "faq.q7.d": "<p>تتسلّمون تقريرًا كاملًا خلال أسبوع: صور وفيديو وأعداد الحضور وتقارير الإنفاق، إضافة إلى جلسة تقييم قصيرة لجعل العام القادم أفضل.</p>",
    "faq.q8.t": "هل يمكنكم إرسال جدول زمني نموذجي أولًا؟",
    "faq.q8.d": "<p>بالطبع. بعد لقائنا الأول نُرسل لكم نموذجًا لجدول الحفل وميزانية بحسب نوع الفعالية التي تتخيلونها — بلا التزام، وتبقى لكم.</p>",

    "mvv.eyebrow": "ما نؤمن به",
    "mvv.title": "الرسالة والرؤية والقيم التي لا نتهاون فيها.",
    "mvv.m.t": "الرسالة",
    "mvv.m.d": "أن نشعر في كل فعالية مدرسية في الإمارات وكأن الفريق أعدّ لشهور — حتى لو أُعطي أسابيع.",
    "mvv.v.t": "الرؤية",
    "mvv.v.d": "مستقبل تُعدّ فيه فعاليات المدارس في الإمارات معيارًا للمنطقة — آمنة ومستدامة ومُفرحة ويقودها الطلاب بوضوح.",
    "mvv.va.t": "القيم",
    "mvv.va1.t": "الهدوء.",
    "mvv.va1.d": "نحضر الخطة البديلة والصبر الاحتياطي ومايكروفونًا احتياطيًا.",
    "mvv.va2.t": "الصدق.",
    "mvv.va2.d": "ميزانيات يمكن قراءتها. جداول يمكن الوثوق بها. الأخطاء تُعترَف بها سريعًا.",
    "mvv.va3.t": "السلامة.",
    "mvv.va3.d": "كل طفل في الحرم يُعامَل كأنه طفلنا. كل تصريح، موقَّع.",
    "mvv.va4.t": "الإتقان.",
    "mvv.va4.d": "«يكفي» ليس كافيًا. نهتمّ بالتفاصيل حتى يبدو اليوم بلا جهد.",
    "mvv.va5.t": "البهجة.",
    "mvv.va5.d": "إن لم يفرح الأطفال، لم ننجز مهمّتنا.",

    "sus.eyebrow": "الاستدامة",
    "sus.title": "فعاليات أفضل، أثر بيئي أخفّ.",
    "sus.p1": "تتقدم مدارس الإمارات في المنطقة بالعمل المناخي، ولا يجب أن تكون الفعاليات استثناءً. نصمّم كل فعالية من فعاليات فيتا نوفا مع مراعاة الكوكب — دون أي تنازل عن جودة التجربة.",
    "sus.p2": "خيارنا الأول هو القابل لإعادة الاستخدام. والاحتياطي هو القابل لإعادة التدوير. أما الاستخدام مرة واحدة فهو الملاذ الأخير، لا الخيار الأول.",
    "sus.c1.t": "قابل لإعادة الاستخدام لا للاستهلاك",
    "sus.c1.d": "خلفيات ولوحات ودعائم ومسرح مصمَّمة للتخزين وإعادة الاستخدام عامًا بعد عام.",
    "sus.c2.t": "المورّدون المحليون أولًا",
    "sus.c2.d": "رحلات أقصر، وطعام أطزج، وفواتير كربون أقل — ودعم أفضل لاقتصاد الإمارات.",
    "sus.c3.t": "قوائم نباتية أوّلًا",
    "sus.c3.d": "على الأقل قائمة نباتية كاملة في كل فعالية، دون أسئلة.",
    "sus.c4.t": "بدون هدر مطبوعات",
    "sus.c4.d": "تذاكر رقمية ودخول بالرمز السري وتطبيقات مشتركة للفعاليات بدلاً من البرامج والمنشورات الورقية.",
    "sus.c5.t": "تقارير صادقة",
    "sus.c5.d": "كل فعالية تأتي مع تقرير استدامة موجز — ما أعدنا استخدامه، وما أعدنا تدويره، وما سنفعله أفضل.",

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