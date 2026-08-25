# Jacob Qumsiyeh — Portfolio

Live at **[jacobqum.dev](https://jacobqum.dev)**

A fast, single-page freelance developer portfolio built with vanilla HTML/CSS/JS and Three.js — no build step, no framework, no dependencies to install. Designed to turn visitors into booked calls.

![status](https://img.shields.io/badge/status-live-e63946) ![stack](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-111111)

---

## Overview

This site is the primary sales asset for Jacob's freelance web development work: every section is built around one goal — moving a visitor toward booking a free intro call. It follows a hero → services → projects → pricing → skills → about → FAQ → contact structure, with a booking CTA present in nearly every section.

## Features

- **Three.js particle hero** — animated network canvas with an orbiting tech-stack ring
- **Case study modals** — each project opens a detail view (problem / solution / design thinking / result)
- **Live currency switcher** — pricing converts between USD, EUR, GBP, ILS, and JOD on the fly
- **Animated skill bars & stat counters** — trigger on scroll via `IntersectionObserver`
- **FAQ accordion** — native `<details>`/`<summary>`, no JS required, fully accessible
- **Contact form** — client-side validated, submits via [FormSubmit](https://formsubmit.co) AJAX (no backend needed)
- **Custom cursor, magnetic buttons, scroll-reveal animations** — desktop-only, degrade gracefully on touch
- **Testimonials section** — ready to go live once real client quotes replace the placeholder copy (see [Customizing](#customizing))
- **Long-form case study** — `case-study-sanctishell.html`, a standalone article linked from the SanctiShell project modal, for SEO depth
- **Fully responsive** — breakpoints at 1100 / 1080 / 900 / 768 / 600 / 480px
- **Accessible by default** — semantic landmarks, ARIA labels, `prefers-reduced-motion` support
- **SEO-ready** — Open Graph, Twitter Card, JSON-LD `Person` schema, canonical URL, sitemap, branded OG banner
- **Three.js perf-aware** — hero render loop pauses via `IntersectionObserver` when scrolled out of view

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Hand-written CSS (custom properties, no framework) |
| Scripting | Vanilla JS (ES6+, no bundler) |
| 3D | [Three.js](https://threejs.org/) r128 (hero particle scene) |
| Icons | [Devicon](https://devicon.dev/) |
| Fonts | Inter (UI) + JetBrains Mono (code snippets), via Google Fonts |
| Forms | [FormSubmit](https://formsubmit.co) (serverless email relay) |
| Booking | [Cal.com](https://cal.com) |

No package manager, no build step — open `index.html` and it runs.

## Project Structure

```
.
├── index.html                     # All markup — single page, sections in DOM order
├── case-study-sanctishell.html     # Standalone long-form case study article
├── og-banner-generator.html        # Dev tool: renders/exports the OG banner (not linked from the site)
├── css/
│   └── styles.css                   # All styles, numbered section comments (1. Design Tokens → 33. Testimonials)
├── js/
│   └── main.js                       # All behavior, one init function per feature (see file header)
├── assets/
│   ├── favicon.svg
│   ├── og-image.png                  # Branded 1200×530 social-share banner
│   ├── Jacob.jpg
│   └── *.png                          # Project screenshots (IronPulse, SanctiShell, Wij Al Amar, Zuwadeh)
├── sitemap.xml
└── README.md
```

## Page Sections

1. **Hero** — headline, positioning statement, primary CTAs
2. **Services** — 3 core offerings (Web Development, SEO, Web Design)
3. **Projects** — case-study cards, click to open a modal (data lives in `js/main.js` → `projectsData`); the SanctiShell card links out to a full write-up
4. **Testimonials** — client quotes (currently placeholder copy, see [Customizing](#customizing))
5. **Pricing** — Starter / Premium tiers with a live currency switcher
6. **Skills** — animated proficiency bars, grouped by Frontend / Backend / Tools
7. **About** — bio, stats counters, code-style profile card
8. **FAQ** — accordion covering process, timeline, payment, support, and remote work
9. **Contact** — validated form (FormSubmit) + direct booking, email, and WhatsApp links

## Running Locally

No install step. Any static file server works, e.g.:

```bash
npx serve .
# or
python -m http.server 8080
```

Then open the printed local URL. Opening `index.html` directly via `file://` will work for layout, but the contact form (fetch) and some relative asset paths behave best served over HTTP.

## Customizing

| What | Where |
|---|---|
| Project case studies | `js/main.js` → `projectsData` array (top of file) |
| **Testimonials (real quotes)** | `index.html` → `#testimonials` — replace the placeholder quote, name, and role in each `.testimonial-card`, and swap the `?` avatar span for the client's initial |
| Pricing tiers & currency rates | `index.html` → `#pricing`, and `js/main.js` → `initCurrencyConverter()` |
| FAQ questions | `index.html` → `#faq` section (`<details>` blocks) |
| Contact form destination email | `js/main.js` → the `fetch('https://formsubmit.co/ajax/...')` call |
| Booking link | Any `https://cal.com/jacob-qumsiyeh-czrzyt` href across the file |
| Colors / spacing / motion | `css/styles.css` → `:root` design tokens at the top |
| OG/social banner | Open `og-banner-generator.html` locally, edit the canvas-drawing script, screenshot/export, save over `assets/og-image.png` |
| Analytics | `index.html` `<head>` — uncomment the Cloudflare Web Analytics `<script>` and paste your beacon token (see comment above it for the 3-step setup) |

## Deployment

Static site — deploy the repo root to any static host (Cloudflare Pages, Netlify, Vercel, GitHub Pages). No environment variables or server-side configuration required.

When shipping changes to `css/styles.css` or `js/main.js`, bump the `?v=` query string on their `<link>`/`<script>` tags in `index.html` to bust cached copies for returning visitors.

## SEO Checklist

- `robots.txt` — managed at the hosting/CDN layer (Cloudflare)
- `sitemap.xml` — at the repo root, submit to Google Search Console after deploying
- Open Graph / Twitter Card meta — in `index.html` `<head>`, pointing at `assets/og-image.png` (regenerate via `og-banner-generator.html`)
- JSON-LD `Person` schema — keep `sameAs` links in sync with active social profiles
- Analytics — Cloudflare Web Analytics hook is in place but commented out; needs a beacon token from your own Cloudflare dashboard to activate (see the `<head>` comment in `index.html`)

## License

All rights reserved. This is a personal portfolio, not an open-source template — feel free to look, not to redistribute as-is.

## Contact

**Jacob Qumsiyeh** — Full Stack Developer
[qumsiyeh37@gmail.com](mailto:qumsiyeh37@gmail.com) · [GitHub](https://github.com/Jacob11Q1) · [LinkedIn](https://www.linkedin.com/in/yacoub-qumseya-9227a2132/)
