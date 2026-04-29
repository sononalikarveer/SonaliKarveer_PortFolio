/* ══════════════════════════════════════════════════════
   SONALI KARVEER PORTFOLIO — main.js
   ══════════════════════════════════════════════════════ */

'use strict';

/* ── PAGE LOADER ── */
(function () {
  const loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.innerHTML = `
    <div class="loader-inner">
      <div class="loader-logo">SK<span>.</span></div>
      <div class="loader-bar"><div class="loader-bar-inner"></div></div>
    </div>`;
  document.body.prepend(loader);

  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1300);
  });
})();

/* ── NAVBAR SCROLL ── */
(function () {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── HAMBURGER / DRAWER ── */
(function () {
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('navDrawer');
  const closeBtn  = document.getElementById('drawerClose');
  if (!hamburger || !drawer) return;

  // Overlay element
  const overlay = document.createElement('div');
  overlay.className = 'drawer-overlay';
  document.body.appendChild(overlay);

  const openDrawer  = () => { drawer.classList.add('open'); overlay.classList.add('show'); document.body.style.overflow = 'hidden'; };
  const closeDrawer = () => { drawer.classList.remove('open'); overlay.classList.remove('show'); document.body.style.overflow = ''; };

  hamburger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
})();

/* ── SCROLL REVEAL ── */
(function () {
  const targets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if (!targets.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(t => io.observe(t));
})();

/* ── STATS COUNTER ── */
(function () {
  const nums = document.querySelectorAll('.stat-num[data-count]');
  if (!nums.length) return;

  let triggered = false;

  const runCounters = () => {
    nums.forEach(el => {
      const target   = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const suffix   = el.dataset.suffix || '';
      const duration = 1600;
      const start    = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3);
        const val      = (target * ease).toFixed(decimals);
        el.textContent = val + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });
  };

  const io = new IntersectionObserver(
    (entries) => {
      if (!triggered && entries.some(e => e.isIntersecting)) {
        triggered = true;
        runCounters();
        io.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  const statsRow = document.getElementById('statsRow');
  if (statsRow) io.observe(statsRow);
})();

/* ── SMOOTH ANCHOR SCROLL ── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 68; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── CONTACT FORM ── */
(function () {
  const btn      = document.getElementById('cf-submit');
  const feedback = document.getElementById('form-feedback');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const name  = document.getElementById('fname')?.value.trim();
    const email = document.getElementById('femail')?.value.trim();
    const msg   = document.getElementById('fmsg')?.value.trim();

    if (!name || !email || !msg) {
      feedback.textContent = 'Please fill in your name, email, and message.';
      feedback.className   = 'form-feedback error';
      return;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.className   = 'form-feedback error';
      return;
    }

    // Simulate send
    btn.textContent = 'Sending…';
    btn.disabled    = true;

    setTimeout(() => {
      feedback.textContent = '✅ Message sent! Sonali will get back to you soon.';
      feedback.className   = 'form-feedback success';
      btn.innerHTML        = 'Send Message <i class="fas fa-paper-plane"></i>';
      btn.disabled         = false;
      ['fname','femail','forg','fmsg'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
    }, 1200);
  });
})();

/* ── ACTIVE NAV LINK ON SCROLL ── */
(function () {
  const sections = document.querySelectorAll('section[id], div[id="statsRow"]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !links.length) return;

  const onScroll = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY + 90 >= sec.offsetTop) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('active-nav', link.getAttribute('href') === '#' + current);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ── PCARD: show SVG overlay on hover via JS backup ── */
/* (handled via CSS, nothing extra needed) */

/* ── LAZY LOAD PROJECT IMAGES (graceful fallback) ── */
(function () {
  const imgs = document.querySelectorAll('.pcard-img');
  imgs.forEach(img => {
    img.addEventListener('error', function () {
      // If project image fails to load, just hide it — SVG layer still visible
      this.style.display = 'none';
    });
  });
})();
