/* ================================================================
   Jacob Qumsieh Portfolio — main.js  v6
   ================================================================
   Modules (all initialised in DOMContentLoaded):
     1.  Project Data
     2.  Hero Three.js Particle Scene
     3.  Custom Cursor
     4.  Scroll Progress Bar
     5.  Navigation (sticky glass, active highlight, hamburger)
     6.  Typewriter Effect
     7.  Scroll Reveal (IntersectionObserver)
     8.  Stats Counter Animation
     9.  Skill Bar Animation
     10. Card 3D Tilt (GPU-only transform)
     11. Magnetic Buttons
     12. Project Cards (injected from data)
     13. Project Modal (case study)
     14. Contact Form (FormSubmit AJAX)
     15. Tech Orbit (3D perspective ellipse, 11 devicon badges)
     16. Hero Parallax & 3D Card Tilt (mouse-driven, desktop only)
   ================================================================ */

'use strict';

/* ── Micro-helpers ─────────────────────────────────── */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

/* ================================================================
   1. PROJECT DATA
   ================================================================ */
const projectsData = [
  {
    id: 'iqprec',
    num: '01',
    title: 'IQPREC',
    category: 'SaaS Platform',
    image: 'assets/IQPREC.webp',
    imageAlt: 'IQPREC Arabic-first Fantasy Premier League AI assistant dashboard',
    excerpt: 'Co-founded and built an Arabic-first AI assistant for Fantasy Premier League managers: live squad analysis, transfer advice, and a growing community of Arab FPL players.',
    description: 'IQPREC is an Arabic-first AI intelligence platform for Fantasy Premier League managers, co-founded with a friend in Beit Sahour, Palestine. It connects to a manager\'s real FPL squad and gives live, data-backed captain picks, transfer advice, and lineup recommendations, natively in Arabic.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Claude AI'],
    url: 'https://iqprec.com',
    caseStudyUrl: 'case-study-iqprec.html',
    problem: 'Arab FPL managers had no tools built for them. Generic AI assistants don\'t know a manager\'s real squad, don\'t pull live FPL data, and don\'t understand the Arab FPL community, so every recommendation was generic and none of it was in Arabic.',
    solution: 'Co-founded and built IQPREC from scratch on a self-hosted Node.js/Express and PostgreSQL backend: a platform that links to a manager\'s real FPL team ID and layers live FPL data, Arab community ownership data, and Claude AI-powered analysis on top, delivered natively in Arabic rather than as a translation layer bolted onto an English tool.',
    design: 'Built for speed and clarity during a live gameweek: a real-time ticker, at-a-glance captain and transfer recommendations, and a clean dashboard that surfaces the one decision that matters most before each deadline.',
    result: 'IQPREC is live, self-funded with no outside investment, and growing steadily within the Arab FPL community, with a free tier and a paid Pro tier (€15/mo or €110/season) already in market.',
  },
  {
    id: 'ironpulse',
    num: '02',
    title: 'IronPulse',
    category: 'Landing Page',
    image: 'assets/IronPulse.webp',
    imageAlt: 'IronPulse gym coaching landing page',
    excerpt: 'Helped a gym coach get his business online with a conversion-focused landing page that turns website visitors into paying clients.',
    description: 'IronPulse is a high-converting landing page built for a personal gym coach. Every element, from the layout to the copy and CTAs, is designed to move visitors from curiosity to action.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    url: 'https://sanctishell.com/IronPulse/',
    caseStudyUrl: 'case-study-ironpulse.html',
    problem: 'A personal trainer had no digital presence. Potential clients were finding competitors online while his business relied entirely on word of mouth, limiting growth and reach.',
    solution: 'Built a focused, conversion-optimised landing page with compelling CTAs, social proof, animated stats, and a clear coaching inquiry flow that guides visitors toward booking.',
    design: 'Bold, athletic aesthetic with dark tones and high-contrast typography. Scroll-triggered animations build momentum and urgency, keeping visitors engaged throughout.',
    result: 'A professional online presence that clearly communicates the coaching offer, establishes credibility, and gives potential clients a direct path to get in touch.',
  },
  {
    id: 'sanctishell',
    num: '03',
    title: 'SanctiShell',
    category: 'eCommerce Website',
    image: 'assets/SanctiShell.webp',
    imageAlt: 'SanctiShell eCommerce store for handcrafted Mother-of-Pearl religious items',
    excerpt: 'Built and self-host the online storefront for my father\'s family artisan business: a WordPress + WooCommerce store selling handcrafted Mother-of-Pearl pieces from Bethlehem, with no Shopify-style subscription fees.',
    description: 'SanctiShell is the online storefront for my father\'s family Mother-of-Pearl artisan workshop in Bethlehem, a craft the Qumsiyeh family has practiced for generations. I built a custom WordPress theme on top of WooCommerce and self-host it on my own VPS, so the business keeps full commerce functionality without a recurring Shopify-style platform fee.',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'Self-Hosted VPS'],
    url: 'https://sanctishell.com/',
    caseStudyUrl: 'case-study-sanctishell.html',
    problem: 'My father\'s family has carved Mother-of-Pearl religious pieces in Bethlehem for generations, but the craft had no online presence: every sale depended on foot traffic and word of mouth, with no way for buyers outside the Holy Land to find or purchase the work.',
    solution: 'Built a custom WooCommerce storefront on WordPress, self-hosted on my own VPS: full product catalog, cart, and checkout for the collection (crosses, rosaries, religious gifts, jewelry), owned outright instead of rented from a platform like Shopify, so the business keeps its full margin on every sale with no monthly subscription.',
    design: 'A quiet, reverent aesthetic that lets the craftsmanship speak for itself: warm imagery, generous whitespace, and a product-first layout that carries the weight of a decades-old family tradition without feeling like a generic e-commerce template.',
    result: 'A real, self-hosted online store for a family business that previously had none, live and taking orders with zero recurring platform fees.',
  },
  {
    id: 'wijalamr',
    num: '04',
    title: 'Wij Al Amar',
    category: 'Restaurant Website',
    image: 'assets/Wij-Al-Amar.webp',
    imageAlt: 'Wij Al Amar restaurant website',
    excerpt: 'Gave Wij Al Amar a modern online presence that helps new customers find the restaurant, explore the menu, and plan their visit.',
    description: 'Wij Al Amar is a restaurant website designed to bring a beloved Bethlehem dining spot into the digital age. The site builds appetite and trust before a customer even walks through the door.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    url: 'https://sanctishell.com/wij-al-amar/',
    caseStudyUrl: 'case-study-wij-al-amar.html',
    problem: 'The restaurant had no website, making it nearly invisible to anyone searching online. New customers had no way to browse the menu, see the atmosphere, or find contact details.',
    solution: 'Designed and built a full restaurant website with sections for the menu, gallery, location, and contact, optimised for mobile and built for local search discoverability.',
    design: 'Warm, inviting aesthetic that captures the restaurant\'s character. Strong imagery, clean typography, and clear calls to action build appetite and confidence in first-time visitors.',
    result: 'A professional online presence that makes it easy for new customers to discover Wij Al Amar, see what they offer, and decide to visit, all before leaving the house.',
  },
  {
    id: 'zuwadeh',
    num: '05',
    title: 'Zuwadeh',
    category: 'Restaurant Website',
    image: 'assets/Zuwadeh.webp',
    imageAlt: 'Zuwadeh restaurant website in Beit Sahour',
    excerpt: 'Designed a food-forward website for Zuwadeh café, turning their menu, reviews, and location into a discovery engine for new customers.',
    description: 'Zuwadeh is a full restaurant website for a popular café in Beit Sahour. The site showcases breakfast dishes, pastries, specialty coffee, and customer reviews in a format that attracts and converts.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    url: 'https://sanctishell.com/zuwadeh/',
    caseStudyUrl: 'case-study-zuwadeh.html',
    problem: 'Zuwadeh had loyal regulars but no online visibility. Visitors and new locals searching for a breakfast or coffee spot in Beit Sahour had no way to find or evaluate the café.',
    solution: 'Designed and built a restaurant website showcasing the full menu, customer reviews, location, and contact, giving new customers everything they need to choose Zuwadeh.',
    design: 'Light, food-forward design that makes the menu the hero. Clear visual hierarchy and strong content organisation ensure customers can quickly find what they want and feel confident visiting.',
    result: 'A complete digital presence for Zuwadeh that communicates quality, variety, and atmosphere, making it easy for new customers to discover and choose the café over competitors.',
  },
];

/* ================================================================
   2. HERO THREE.JS PARTICLE SCENE
   ================================================================ */
class HeroScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.isVisible = true;
    this.mouse = { x: 0, y: 0 };
    this.camTarget = { x: 0, y: 0 };
    this.mouseScene = { x: 0, y: 0 };
    this.PARTICLE_COUNT = window.innerWidth < 768 ? 60 : 130;
    this.CONNECT_DIST = 18;
    this.CONNECT_DIST_SQ = this.CONNECT_DIST * this.CONNECT_DIST;
    this.MAX_LINES = 260;
    this._raf = null;

    this._init();
    this._bindEvents();
    this._animate();
  }

  _init() {
    const W = window.innerWidth, H = window.innerHeight;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas, alpha: true, antialias: false,
      powerPreference: 'low-power',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(W, H);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    this.camera.position.z = 50;

    this._buildParticles();
    this._buildLines();
    this._buildSpheres();
  }

  _buildParticles() {
    const n = this.PARTICLE_COUNT;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const red = new THREE.Color('#e63946');
    const grey = new THREE.Color('#606060');

    this.velocities = [];
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 110;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 65;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
      this.velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.007,
      });
      const c = Math.random() > 0.38 ? red : grey;
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    this.particles = new THREE.Points(geo, new THREE.PointsMaterial({
      size: 1.5, vertexColors: true,
      transparent: true, opacity: 0.8,
      sizeAttenuation: true,
    }));
    this.scene.add(this.particles);
  }

  _buildLines() {
    const geo = new THREE.BufferGeometry();
    const buf = new Float32Array(this.MAX_LINES * 6);
    geo.setAttribute('position', new THREE.BufferAttribute(buf, 3));
    geo.setDrawRange(0, 0);
    this.lineSegs = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({
      color: 0xe63946, transparent: true, opacity: 0.18,
    }));
    this.scene.add(this.lineSegs);
  }

  _buildSpheres() {
    const cfgs = [
      { r: 9, x: 36, y: 16, z: -22, s: 0.0007 },
      { r: 5.5, x: -28, y: -12, z: -16, s: 0.0012 },
      { r: 3.5, x: 12, y: -22, z: -8, s: 0.0017 },
    ];
    this.spheres = cfgs.map(c => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(c.r, 9, 9),
        new THREE.MeshBasicMaterial({
          color: 0xe63946, wireframe: true,
          transparent: true, opacity: 0.06,
        })
      );
      mesh.position.set(c.x, c.y, c.z);
      mesh.userData.speed = c.s;
      this.scene.add(mesh);
      return mesh;
    });
  }

  _updateLines() {
    const pp = this.particles.geometry.attributes.position.array;
    const lp = this.lineSegs.geometry.attributes.position.array;
    const n = this.PARTICLE_COUNT;
    const dSq = this.CONNECT_DIST_SQ;
    let count = 0;

    for (let i = 0; i < n && count < this.MAX_LINES; i++) {
      const ix = pp[i * 3], iy = pp[i * 3 + 1], iz = pp[i * 3 + 2];
      for (let j = i + 1; j < n && count < this.MAX_LINES; j++) {
        const dx = ix - pp[j * 3];
        const dy = iy - pp[j * 3 + 1];
        const dz = iz - pp[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < dSq) {
          const b = count * 6;
          lp[b] = ix; lp[b + 1] = iy; lp[b + 2] = iz;
          lp[b + 3] = pp[j * 3]; lp[b + 4] = pp[j * 3 + 1]; lp[b + 5] = pp[j * 3 + 2];
          count++;
        }
      }
    }
    this.lineSegs.geometry.setDrawRange(0, count * 2);
    this.lineSegs.geometry.attributes.position.needsUpdate = true;
  }

  _animate() {
    this._raf = requestAnimationFrame(() => this._animate());
    if (!this.isVisible) return;

    const pp = this.particles.geometry.attributes.position.array;
    const n = this.PARTICLE_COUNT;

    for (let i = 0; i < n; i++) {
      pp[i * 3] += this.velocities[i].x;
      pp[i * 3 + 1] += this.velocities[i].y;
      pp[i * 3 + 2] += this.velocities[i].z;

      /* Mouse repulsion */
      const mdx = pp[i * 3] - this.mouseScene.x;
      const mdy = pp[i * 3 + 1] - this.mouseScene.y;
      const mdSq = mdx * mdx + mdy * mdy;
      if (mdSq < 196 && mdSq > 0.01) {
        const d = Math.sqrt(mdSq);
        const f = (14 - d) / 14 * 0.055;
        pp[i * 3] += (mdx / d) * f;
        pp[i * 3 + 1] += (mdy / d) * f;
      }

      /* Boundary wrap */
      if (pp[i * 3] > 55) pp[i * 3] = -55;
      if (pp[i * 3] < -55) pp[i * 3] = 55;
      if (pp[i * 3 + 1] > 33) pp[i * 3 + 1] = -33;
      if (pp[i * 3 + 1] < -33) pp[i * 3 + 1] = 33;
    }
    this.particles.geometry.attributes.position.needsUpdate = true;

    this._updateLines();

    /* Camera parallax */
    this.camTarget.x += (this.mouse.x * 5.5 - this.camTarget.x) * 0.04;
    this.camTarget.y += (this.mouse.y * 3.2 - this.camTarget.y) * 0.04;
    this.camera.position.x = this.camTarget.x;
    this.camera.position.y = this.camTarget.y;
    this.camera.lookAt(0, 0, 0);

    /* Sphere rotation */
    this.spheres.forEach(s => {
      s.rotation.x += s.userData.speed;
      s.rotation.y += s.userData.speed * 0.6;
    });

    this.renderer.render(this.scene, this.camera);
  }

  _bindEvents() {
    window.addEventListener('resize', () => {
      const W = window.innerWidth, H = window.innerHeight;
      this.camera.aspect = W / H;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(W, H);
    });

    document.addEventListener('mousemove', e => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      this.mouseScene.x = this.mouse.x * 55;
      this.mouseScene.y = this.mouse.y * 33;
    }, { passive: true });

    /* Pause when hero is off-screen */
    const heroEl = $('#hero');
    if (heroEl && 'IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => {
        this.isVisible = e.isIntersecting;
      }, { threshold: 0 }).observe(heroEl);
    }
  }
}

/* ================================================================
   3. CUSTOM CURSOR
   ================================================================ */
function initCursor() {
  const dot = $('#cursor-dot');
  const ring = $('#cursor-ring');
  if (!dot || !ring) return;

  let mx = -200, my = -200;
  let rx = -200, ry = -200;
  const LAG = 0.12;

  /* Move dot immediately on raw event */
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = `${mx}px`;
    dot.style.top = `${my}px`;
  }, { passive: true });

  /* Lerp ring for smooth lag */
  (function raf() {
    rx += (mx - rx) * LAG;
    ry += (my - ry) * LAG;
    ring.style.left = `${rx}px`;
    ring.style.top = `${ry}px`;
    requestAnimationFrame(raf);
  })();

  /* Grow ring on interactive elements */
  const INTERACTIVE = 'a, button, [data-tilt], .project-card, .service-card, .social-link, .stat, .contact-social-link';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(INTERACTIVE)) ring.classList.add('hovered');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(INTERACTIVE)) ring.classList.remove('hovered');
  });

  /* Click feedback */
  document.addEventListener('mousedown', () => ring.classList.add('clicking'));
  document.addEventListener('mouseup', () => ring.classList.remove('clicking'));

  /* Hide when leaving window */
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
}

/* ================================================================
   4. SCROLL PROGRESS BAR
   ================================================================ */
function initScrollProgress() {
  const bar = $('#scroll-progress');
  if (!bar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const pct = window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      bar.style.transform = `scaleX(${pct})`;
      ticking = false;
    });
  }, { passive: true });
}

/* ================================================================
   4b. BACK TO TOP
   ================================================================ */
function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ================================================================
   5. NAVIGATION
   ================================================================ */
function initNav() {
  const nav = $('#nav');
  const burger = $('#hamburger');
  const mobileNav = $('#mobile-nav');
  const closeBtn = $('#mobile-nav-close');
  if (!nav) return;

  /* Sticky glass effect */
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Open / close mobile nav */
  const openMobile = () => {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    burger.classList.add('active');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const closeMobile = () => {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  burger && burger.addEventListener('click', openMobile);
  closeBtn && closeBtn.addEventListener('click', closeMobile);

  /* Close when a link is clicked */
  $$('.mobile-link').forEach(l => l.addEventListener('click', closeMobile));

  /* Close on backdrop (outside .mobile-nav-links) */
  mobileNav.addEventListener('click', e => {
    if (!e.target.closest('.mobile-nav-links') &&
      !e.target.closest('.mobile-nav-close')) {
      closeMobile();
    }
  });

  /* Smooth scroll — CSS `scroll-behavior: smooth` + `scroll-margin-top`
     on sections (see styles.css) handle the animation and nav-height
     offset natively; we just close the mobile menu on click. */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href');
    if (hash.length < 2 || !$(hash)) return;
    closeMobile();
  });

  /* Active link via IntersectionObserver */
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(l => l.classList.remove('active'));
      const active = navLinks.find(l => l.dataset.section === entry.target.id);
      active && active.classList.add('active');
    });
  }, { threshold: 0.35, rootMargin: '-10% 0px -55% 0px' }).observe
    ? sections.forEach(s => {
      new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) return;
        navLinks.forEach(l => l.classList.remove('active'));
        const active = navLinks.find(l => l.dataset.section === entries[0].target.id);
        active && active.classList.add('active');
      }, { threshold: 0.35, rootMargin: '-10% 0px -55% 0px' }).observe(s);
    })
    : null;
}

/* ================================================================
   6. TYPEWRITER EFFECT
   ================================================================ */
function initTypewriter() {
  const el = $('#typed-tagline');
  if (!el) return;

  const phrases = [
    'Full Stack Developer & Product Builder',
    'Crafting high-performance web experiences',
    'From concept to deployed product',
    'Engineering meets thoughtful design',
  ];
  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const phrase = phrases[pi];
    el.textContent = deleting
      ? phrase.slice(0, ci - 1)
      : phrase.slice(0, ci + 1);

    deleting ? ci-- : ci++;

    let delay = deleting ? 38 : 68;
    if (!deleting && ci === phrase.length) { delay = 2400; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }

    setTimeout(tick, delay);
  }
  setTimeout(tick, 1400);
}

/* ================================================================
   7. SCROLL REVEAL
   ================================================================ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  $$('.reveal').forEach(el => obs.observe(el));
}

/* ================================================================
   8. STATS COUNTER
   ================================================================ */
function initCounters() {
  const statsEl = $('.about-stats');
  if (!statsEl) return;

  new IntersectionObserver(([entry], obs) => {
    if (!entry.isIntersecting) return;

    $$('[data-target]', statsEl).forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = target / 50;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current);
      }, 18);
    });
    obs.unobserve(entry.target);
  }, { threshold: 0.5 }).observe(statsEl);
}

/* ================================================================
   9. SKILL BAR ANIMATION
   ================================================================ */
function initSkillBars() {
  const section = $('#skills');
  if (!section) return;

  new IntersectionObserver(([entry], obs) => {
    if (!entry.isIntersecting) return;
    $$('.skill-fill[data-width]', section).forEach((bar, i) => {
      setTimeout(() => { bar.style.width = `${bar.dataset.width}%`; }, i * 50);
    });
    obs.unobserve(entry.target);
  }, { threshold: 0.15 }).observe(section);
}

/* ================================================================
   10. 3D TILT EFFECT (GPU: only translate3d / rotateX / rotateY)
   ================================================================ */
function initTilt() {
  $$('[data-tilt]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.06s linear, box-shadow 0.3s, border-color 0.3s';
    });
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const rx = ((e.clientY - cy) / (r.height / 2)) * -8;
      const ry = ((e.clientX - cx) / (r.width / 2)) * 8;
      el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s, border-color 0.3s';
      el.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  });
}

/* ================================================================
   11. MAGNETIC BUTTONS
   ================================================================ */
function initMagnetic() {
  $$('.magnetic').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'transform 0.06s linear, box-shadow 0.3s, background 0.3s, border-color 0.3s, color 0.3s';
    });
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      btn.style.transform = `translate(${(e.clientX - cx) * 0.28}px, ${(e.clientY - cy) * 0.28}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s, background 0.3s, border-color 0.3s, color 0.3s';
      btn.style.transform = '';
    });
  });
}

/* ================================================================
   12. PROJECT CARDS (injected from projectsData)
   ================================================================ */
function buildProjectCards() {
  const grid = $('#projects-grid');
  if (!grid) return;

  projectsData.forEach((p, idx) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-id', p.id);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Open case study: ${p.title}`);

    card.innerHTML = `
      ${p.image ? `<div class="project-card-img">
        <img src="${p.image}" alt="${p.imageAlt || p.title}" loading="lazy">
      </div>` : ''}
      <div class="project-card-body">
        <span class="project-cat">${p.category}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-excerpt">${p.excerpt}</p>
        <div class="project-tech" aria-label="Technologies: ${p.tech.join(', ')}">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
        <span class="project-link-btn" aria-hidden="true">
          View Case Study
          <svg viewBox="0 0 24 24">
            <path d="M7 17l9.2-9.2M17 17V7H7"/>
          </svg>
        </span>
      </div>
    `;

    /* Staggered reveal */
    const revealObs = new IntersectionObserver(([entry], obs) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => card.classList.add('visible'), idx * 90);
      obs.unobserve(card);
    }, { threshold: 0.1 });
    revealObs.observe(card);

    /* Open modal */
    card.addEventListener('click', () => openModal(p.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(p.id);
      }
    });

    /* 3D tilt */
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.06s linear, box-shadow 0.3s, border-color 0.3s, opacity 0.8s';
    });
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const rx = ((e.clientY - cy) / (r.height / 2)) * -5;
      const ry = ((e.clientX - cx) / (r.width / 2)) * 5;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s, border-color 0.3s';
      card.style.transform = '';
    });

    grid.appendChild(card);
  });
}

/* ================================================================
   13. PROJECT MODAL
   ================================================================ */
const modal = $('#project-modal');
const modalClose = $('#modal-close');
const modalBack = $('#modal-backdrop');

function openModal(id) {
  const p = projectsData.find(x => x.id === id);
  if (!p || !modal) return;

  /* Populate content */
  $('#modal-category').textContent = p.category;
  $('#modal-title').textContent = p.title;
  $('#modal-desc').textContent = p.description;
  $('#modal-problem').textContent = p.problem;
  $('#modal-solution').textContent = p.solution;
  $('#modal-design').textContent = p.design;
  $('#modal-result').textContent = p.result;

  $('#modal-tech').innerHTML = p.tech.map(t => `<span>${t}</span>`).join('');

  const link = $('#modal-link');
  link.href = p.url;
  link.style.display = p.url === '#' ? 'none' : 'inline-flex';

  const caseStudyLink = $('#modal-case-study-link');
  if (caseStudyLink) {
    if (p.caseStudyUrl) {
      caseStudyLink.href = p.caseStudyUrl;
      caseStudyLink.style.display = 'inline-flex';
    } else {
      caseStudyLink.style.display = 'none';
    }
  }

  /* Open */
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  /* Reset scroll */
  const scroll = $('.modal-scroll');
  if (scroll) scroll.scrollTop = 0;

  /* Focus close button for a11y */
  setTimeout(() => modalClose && modalClose.focus(), 100);
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal() {
  if (!modal) return;
  modalClose && modalClose.addEventListener('click', closeModal);
  modalBack && modalBack.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ================================================================
   14. CONTACT FORM — FormSubmit AJAX
       On first submission, FormSubmit sends a verification email
       to qumsiyeh37@gmail.com — click the link once to activate.
   ================================================================ */
function initContactForm() {
  const form = $('#contact-form');
  const label = $('#submit-label');
  const btn = $('#form-submit');
  const toast = $('#form-toast');
  if (!form) return;

  /* Per-field helpers */
  function setError(inp, msg) {
    inp.classList.add('invalid');
    const errEl = inp.parentElement.querySelector('.form-error');
    if (errEl) errEl.textContent = msg;
    inp.addEventListener('input', () => {
      inp.classList.remove('invalid');
      if (errEl) errEl.textContent = '';
    }, { once: true });
  }

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  /* Toast helper */
  function showToast(msg, type) {
    if (!toast) return;
    toast.textContent = msg;
    toast.className = `form-toast show ${type}`;
    setTimeout(() => { toast.className = 'form-toast'; }, 5000);
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const nameInp = $('#c-name', form);
    const emailInp = $('#c-email', form);
    const serviceInp = $('#c-service', form);
    const msgInp = $('#c-msg', form);
    const name = nameInp.value.trim();
    const email = emailInp.value.trim();
    const service = serviceInp ? serviceInp.value : '';
    const msg = msgInp.value.trim();

    /* Validate */
    let ok = true;
    if (!name) { setError(nameInp, 'Please enter your name'); ok = false; }
    if (!validEmail(email)) { setError(emailInp, 'Please enter a valid email'); ok = false; }
    if (msg.length < 10) { setError(msgInp, 'Message must be at least 10 characters'); ok = false; }
    if (!ok) return;

    /* Loading state */
    btn.disabled = true;
    label.textContent = 'Sending…';

    try {
      const res = await fetch('https://formsubmit.co/ajax/qumsiyeh37@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          service: service || 'Not specified',
          message: msg,
          _subject: `New portfolio message from ${name}`,
          _replyto: email,
          _captcha: 'false',
        }),
      });

      const data = await res.json();

      if (data.success === 'true' || res.ok) {
        label.textContent = '✓ Message Sent!';
        btn.style.background = '#22c55e';
        showToast("Message received! I'll get back to you soon.", 'success');
        form.reset();
        setTimeout(() => {
          label.textContent = 'Send Message';
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      } else {
        throw new Error('FormSubmit failure');
      }

    } catch {
      label.textContent = '✕ Failed — Try Again';
      btn.style.background = '';
      btn.disabled = false;
      showToast('Something went wrong. Try emailing me directly at qumsiyeh37@gmail.com', 'error');
      setTimeout(() => { label.textContent = 'Send Message'; }, 3500);
    }
  });
}

/* ================================================================
   15. TECH ORBIT
   11 technology icons orbit in a 3D-perspective ellipse using
   requestAnimationFrame. Depth illusion: icons near the "bottom"
   of the ellipse (sin(a) → +1) appear larger and fully opaque;
   icons near the "top" (sin(a) → -1) appear smaller and faded.
   Hovering any badge pauses the entire orbit.
   ================================================================ */
function initTechOrbit() {
  const container = $('#tech-orbit');
  /* Only run on desktop — CSS hides the element below 1100px */
  if (!container || window.innerWidth <= 1100) return;

  const stage = container.querySelector('.orbit-stage');
  if (!stage) return;

  /* ── Technology definitions ────────────────────────── */
  const TECHS = [
    { name: 'HTML', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Tailwind', icon: 'devicon-tailwindcss-plain', style: 'color:#38bdf8' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'WordPress', icon: 'devicon-wordpress-plain colored' },
  ];

  const N = TECHS.length;
  const RX = 198;      /* horizontal radius (px) */
  const RY = 70;       /* vertical radius — flattened for 3D illusion */
  const SPEED = 0.00018;  /* rad/ms → full revolution ≈ 35 s */

  /* ── Build badge DOM elements ──────────────────────── */
  const badges = TECHS.map(tech => {
    const el = document.createElement('div');
    el.className = 'orbit-badge';
    el.innerHTML =
      `<div class="orbit-badge-icon">` +
      `<i class="${tech.icon}"${tech.style ? ` style="${tech.style}"` : ''}></i>` +
      `</div>` +
      `<span class="orbit-badge-label">${tech.name}</span>`;
    stage.appendChild(el);

    /* Track hover state per-badge */
    let hovered = false;
    el.addEventListener('mouseenter', () => { hovered = true; });
    el.addEventListener('mouseleave', () => { hovered = false; });

    return { el, isHovered: () => hovered };
  });

  /* ── Orbit state ───────────────────────────────────── */
  let angle = 0;
  let lastTs = null;
  let scenePaused = false; /* true when hero section is off-screen */

  /* Pause animation when hero scrolls out of view (save GPU) */
  const heroEl = $('#hero');
  if (heroEl) {
    new IntersectionObserver(
      ([e]) => { scenePaused = !e.isIntersecting; },
      { threshold: 0 }
    ).observe(heroEl);
  }

  /* ── Animation loop ────────────────────────────────── */
  function tick(ts) {
    if (lastTs === null) lastTs = ts;
    const dt = ts - lastTs;
    lastTs = ts;

    /* Advance angle only when scene is visible and nothing is hovered */
    const anyHovered = badges.some(b => b.isHovered());
    if (!scenePaused && !anyHovered) {
      angle += dt * SPEED;
    }

    badges.forEach((badge, i) => {
      const a = angle + (2 * Math.PI / N) * i;

      /* 3D ellipse position: cos for X, sin for Y */
      const x = Math.cos(a) * RX;
      const y = Math.sin(a) * RY;

      /*
       * Depth illusion: sin(a) ranges −1 (far/top) → +1 (near/bottom).
       * Map to a 0→1 normalised value `t`, then derive scale + opacity.
       */
      const t = (Math.sin(a) + 1) / 2;          /* 0 = far, 1 = near */
      const scale = (0.70 + 0.42 * t).toFixed(3);   /* 0.70 → 1.12       */
      const opac = (0.32 + 0.68 * t).toFixed(3);   /* 0.32 → 1.00       */
      const zIdx = Math.round(t * 20);              /* 0–20 stacking      */

      const hov = badge.isHovered();
      const finalScale = hov ? (parseFloat(scale) * 1.18).toFixed(3) : scale;

      /* GPU-only transforms: translate3d + scale */
      badge.el.style.transform =
        `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0) scale(${finalScale})`;
      badge.el.style.opacity = hov ? '1' : opac;
      badge.el.style.zIndex = hov ? '25' : zIdx;
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ================================================================
   16. HERO PARALLAX
   Subtle mouse-driven parallax on the tech orbit container.
   When the mouse moves over the hero, the orbit shifts slightly
   in the opposite direction, creating a sense of 3D depth.
   Uses smooth lerp for natural, non-distracting motion.
   Disabled on touch/mobile devices and screens ≤ 1100px.
   ================================================================ */
function initHeroParallax() {
  /* Only on non-touch large screens */
  if (window.innerWidth <= 1100 || window.matchMedia('(pointer: coarse)').matches) return;

  const hero = $('#hero');
  const orbit = $('#tech-orbit');
  if (!hero || !orbit) return;

  /* Target mouse position (normalised 0→1) */
  let mx = 0.5, my = 0.5;
  /* Current lerped values */
  let cx = 0.5, cy = 0.5;

  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    mx = (e.clientX - r.left) / r.width;
    my = (e.clientY - r.top) / r.height;
  }, { passive: true });

  /* Reset to center when mouse leaves hero */
  hero.addEventListener('mouseleave', () => { mx = 0.5; my = 0.5; });

  (function raf() {
    /* Smooth lerp — 6% per frame ≈ natural lag */
    cx += (mx - cx) * 0.06;
    cy += (my - cy) * 0.06;

    /* Map 0..1 → −1..+1 */
    const dx = (cx - 0.5) * 2;
    const dy = (cy - 0.5) * 2;

    /* Orbit shifts opposite to mouse movement (max ±16px / ±9px).
     * Always include translateY(-50%) to preserve the CSS centering. */
    orbit.style.transform =
      `translateY(-50%) translate3d(${(dx * -16).toFixed(1)}px, ${(dy * -9).toFixed(1)}px, 0)`;

    requestAnimationFrame(raf);
  })();
}

/* ================================================================
   INIT — Wire everything after DOM is ready
   ================================================================ */
/* ================================================================
   17. PRELOADER
   ================================================================ */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const hide = () => preloader.classList.add('hidden');

  if (document.readyState === 'complete') {
    setTimeout(hide, 320);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 320), { once: true });
    /* Fallback: never block user for more than 2s */
    setTimeout(hide, 2000);
  }
}

/* ================================================================
   18. CURRENCY CONVERTER
   ================================================================ */
function initCurrencyConverter() {
  const select = document.getElementById('currency-select');
  if (!select) return;

  const rates   = { USD: 1,    EUR: 0.92, GBP: 0.79, ILS: 3.65, JOD: 0.71 };
  const symbols = { USD: '$',  EUR: '€',  GBP: '£',  ILS: '₪',  JOD: 'JD ' };

  select.addEventListener('change', () => {
    const cur    = select.value;
    const rate   = rates[cur];
    const symbol = symbols[cur];

    document.querySelectorAll('.pricing-price[data-usd-low]').forEach(el => {
      const low  = Math.round(parseInt(el.dataset.usdLow, 10) * rate).toLocaleString();
      const high = Math.round(parseInt(el.dataset.usdHigh, 10) * rate).toLocaleString();
      el.querySelector('.price-amount').textContent = `${symbol}${low}–${high}`;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {

  initPreloader();

  /* Hero particle scene (needs Three.js loaded first) */
  const heroCanvas = $('#hero-canvas');
  if (heroCanvas && typeof THREE !== 'undefined') {
    new HeroScene(heroCanvas);
  } else if (heroCanvas) {
    console.warn('[Portfolio] Three.js not loaded — hero canvas skipped.');
  }

  initCursor();
  initScrollProgress();
  initBackToTop();
  initNav();
  initTypewriter();
  initReveal();
  initCounters();
  initSkillBars();
  buildProjectCards(); /* must precede initTilt so project cards exist in DOM */
  initTilt();
  initMagnetic();
  initModal();
  initContactForm();
  initCurrencyConverter();
  initTechOrbit();      /* 3D orbit of 11 technologies in hero section */
  initHeroParallax();   /* mouse-driven 3D tilt + parallax for hero */
});
