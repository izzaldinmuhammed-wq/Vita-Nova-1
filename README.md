# Vita Nova — Event Management for Schools (UAE)

A static, single-page marketing site for **Vita Nova**, a UAE-based event management company that plans events for schools.

## What's inside

- `index.html` — the page (hero, services, event types, process, why-us, contact, footer)
- `styles.css` — design system and layout
- `script.js` — mobile nav toggle, footer year, contact-form confirmation

No build step, no dependencies. Just open `index.html` in a browser.

## Sections covered

- **Services** (12 areas): academic guides & orientation, annual programs, graduations, sports days, creative & design, marketing & comms, budget & finance, logistics & suppliers, safety/permits, giveaways, workshops/trips, year-round calendar planning
- **Event types** (9 categories) tailored to a school year
- **5-step process**: Discover → Design → Plan → Deliver → Review
- **Why Vita Nova**: child-safe, UAE-wide vendor network, transparent budgets, calm on the day
- **Contact form** with client-side validation (no backend wired up — point it at your email service)

## Customise

- Brand name in `index.html` and footer copy
- Contact details in the footer (`hello@vitanova.ae`, phone)
- Colors via the `:root` CSS variables at the top of `styles.css`:
  - `--primary` (deep blue), `--accent` (gold), `--accent-2` (coral)

## Hosting

Drop the three files onto any static host: Netlify, Vercel, GitHub Pages, or a plain web server.