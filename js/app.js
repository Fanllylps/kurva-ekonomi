(function () {
  'use strict';

  const MODULES = [
    { id: 'm1', num: '01', short: 'Konsep dasar', title: 'Konsep dasar & pilihan', accent: '#d94f2b', accentDark: '#a4371c' },
    { id: 'm2', num: '02', short: 'Mikro & makro', title: 'Mikro, makro & pelaku ekonomi', accent: '#3158a6', accentDark: '#213d78' },
    { id: 'm3', num: '03', short: 'Permintaan & penawaran', title: 'Permintaan, penawaran & keseimbangan', accent: '#1f6a4b', accentDark: '#164b36' },
    { id: 'm4', num: '04', short: 'Elastisitas', title: 'Elastisitas permintaan & penawaran', accent: '#9a6414', accentDark: '#744a0c' },
    { id: 'm5', num: '05', short: 'Pasar & surplus', title: 'Pasar, surplus & intervensi', accent: '#8c3b4e', accentDark: '#662838' },
    { id: 'm6', num: '06', short: 'Perilaku konsumen', title: 'Perilaku konsumen', accent: '#146d6e', accentDark: '#0e4f50' },
    { id: 'm7', num: '07', short: 'Produksi & biaya', title: 'Produksi dan biaya produksi', accent: '#65518d', accentDark: '#4b3a70' }
  ];

  const STORAGE_KEY = 'kurva-econ-progress-v1';
  const DEFAULT_ACCENT = '#d94f2b';
  const DEFAULT_ACCENT_DARK = '#a4371c';

  const app = document.getElementById('app');
  const state = loadState();
  let currentRoute = { type: 'home', id: 'home' };
  let revealObserver = null;
  let toastTimer = null;
  let previousFocus = null;

  function loadState() {
    const fallback = { done: [], last: null };
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!parsed || typeof parsed !== 'object') return fallback;
      return {
        done: Array.isArray(parsed.done) ? parsed.done.filter((id) => MODULES.some((m) => m.id === id)) : [],
        last: MODULES.some((m) => m.id === parsed.last) ? parsed.last : null
      };
    } catch (error) {
      return fallback;
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      showToast('Progres tidak dapat disimpan di browser ini.');
    }
  }

  function mathSpeech(node) {
    if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('frac')) {
      const numerator = node.children[0];
      const denominator = node.children[1];
      if (numerator && denominator) {
        return mathSpeech(numerator) + ' dibagi ' + mathSpeech(denominator);
      }
    }
    return Array.from(node.childNodes).map((child) => {
      if (child.nodeType === Node.TEXT_NODE) return child.nodeValue;
      return child.nodeType === Node.ELEMENT_NODE ? mathSpeech(child) : '';
    }).join('').replace(/\s+/g, ' ').trim();
  }

  function labelMathFractions(root) {
    root.querySelectorAll('.frac').forEach((fraction) => {
      fraction.setAttribute('role', 'math');
      if (fraction.hasAttribute('aria-label')) return;
      const numerator = fraction.children[0];
      const denominator = fraction.children[1];
      if (numerator && denominator) {
        fraction.setAttribute('aria-label', mathSpeech(numerator) + ' dibagi ' + mathSpeech(denominator));
      }
    });
  }

  function isDone(id) {
    return state.done.includes(id);
  }

  function setDone(id, value) {
    const unique = new Set(state.done);
    if (value) unique.add(id);
    else unique.delete(id);
    state.done = MODULES.map((m) => m.id).filter((moduleId) => unique.has(moduleId));
    state.last = id;
    saveState();
    updateProgressUI();
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getRoute() {
    const hash = window.location.hash || '#/';
    if (hash === '#/' || hash === '#' || hash === '') {
      return { type: 'home', id: 'home' };
    }
    if (hash === '#/rumus') {
      return { type: 'formula', id: 'rumus' };
    }
    if (hash === '#/uts') {
      return { type: 'exam', id: 'uts' };
    }
    const match = hash.match(/^#\/materi\/([1-7])\/?(?:\?focus=([^&]+))?$/);
    if (match) {
      const moduleId = 'm' + match[1];
      let focus = null;
      try { focus = match[2] ? decodeURIComponent(match[2]) : null; } catch (error) { /* Ignore malformed focus targets. */ }
      return { type: 'module', id: moduleId, focus: focus };
    }
    return { type: 'home', id: 'home' };
  }

  function getModule(id) {
    return MODULES.find((module) => module.id === id);
  }

  function getContent(route) {
    if (route.type === 'module') return window.KURVA_CONTENT[route.id];
    if (route.type === 'formula') return window.KURVA_CONTENT.rumus;
    if (route.type === 'exam') return window.KURVA_CONTENT.uts;
    return window.KURVA_CONTENT.home;
  }

  function setAccent(route) {
    const root = document.documentElement;
    const module = route.type === 'module' ? getModule(route.id) : null;
    const accent = module ? module.accent : route.type === 'formula' ? '#1f6a4b' : route.type === 'exam' ? '#65518d' : DEFAULT_ACCENT;
    const accentDark = module ? module.accentDark : route.type === 'formula' ? '#164b36' : route.type === 'exam' ? '#4b3a70' : DEFAULT_ACCENT_DARK;
    root.style.setProperty('--accent', accent);
    root.style.setProperty('--accent-dark', accentDark);
    document.body.dataset.route = route.id;
  }

  function setMeta(route) {
    let title = 'Kurva — Lab Ekonomi Semester 1';
    if (route.type === 'module') {
      const module = getModule(route.id);
      title = route.id === 'm1'
        ? 'Konsep dasar & pilihan — Kurva'
        : module.num + ' · ' + module.title + ' — Kurva';
    } else if (route.type === 'formula') {
      title = 'Lembar rumus — Kurva';
    } else if (route.type === 'exam') {
      title = 'Panduan kisi-kisi UTS — Kurva';
    }
    document.title = title;
  }

  function updateRail(route) {
    document.querySelectorAll('[data-rail]').forEach((link) => {
      const active = route.type === 'module' && link.dataset.rail === route.id;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const homeLink = document.querySelector('[data-nav-home]');
    if (homeLink) {
      homeLink.classList.toggle('is-active', route.type === 'home');
      if (route.type === 'home') homeLink.setAttribute('aria-current', 'page');
      else homeLink.removeAttribute('aria-current');
    }
    const formulaLink = document.querySelector('[data-nav-formula]');
    if (formulaLink) {
      formulaLink.classList.toggle('is-active', route.type === 'formula');
      if (route.type === 'formula') formulaLink.setAttribute('aria-current', 'page');
      else formulaLink.removeAttribute('aria-current');
    }
    const examLink = document.querySelector('[data-nav-exam]');
    if (examLink) {
      examLink.classList.toggle('is-active', route.type === 'exam');
      if (route.type === 'exam') examLink.setAttribute('aria-current', 'page');
      else examLink.removeAttribute('aria-current');
    }
    document.querySelectorAll('[data-rail]').forEach((link) => {
      const status = link.querySelector('.rail-status');
      if (!status) return;
      const done = isDone(link.dataset.rail);
      link.classList.toggle('is-complete', done);
      status.textContent = done ? '✓' : '';
    });
  }

  function updateProgressUI() {
    const count = state.done.length;
    const pct = Math.round((count / MODULES.length) * 100);
    const meter = document.querySelector('[data-progress-meter]');
    if (meter) {
      meter.style.setProperty('--progress', pct + '%');
      meter.setAttribute('aria-valuenow', String(pct));
      meter.setAttribute('aria-valuetext', count + ' dari ' + MODULES.length + ' pertemuan selesai');
    }
    const countLabel = document.querySelector('[data-progress-count]');
    if (countLabel) countLabel.textContent = count + ' dari ' + MODULES.length;
    document.querySelectorAll('[data-mobile-progress]').forEach((el) => {
      el.textContent = count + '/' + MODULES.length;
    });

    document.querySelectorAll('[data-rail]').forEach((link) => {
      const done = isDone(link.dataset.rail);
      link.classList.toggle('is-complete', done);
      const status = link.querySelector('.rail-status');
      if (status) status.textContent = done ? '✓' : '';
    });

    document.querySelectorAll('[data-completion]').forEach((el) => {
      const id = el.dataset.completion;
      const done = isDone(id);
      el.textContent = done ? 'Selesai' : state.last === id ? 'Terakhir dibuka' : 'Belum selesai';
      el.classList.toggle('is-done', done);
      el.classList.toggle('is-last', !done && state.last === id);
    });

    document.querySelectorAll('[data-module-row]').forEach((row) => {
      row.classList.toggle('is-complete', isDone(row.dataset.moduleRow));
    });

    document.querySelectorAll('[data-complete]').forEach((button) => {
      const id = button.dataset.complete;
      const done = isDone(id);
      button.classList.toggle('is-complete', done);
      button.setAttribute('aria-pressed', String(done));
      const label = button.querySelector('[data-complete-label]');
      if (label) label.textContent = done ? 'Selesai — batalkan' : 'Tandai selesai';
    });

    const start = document.getElementById('startCourse');
    if (start) {
      const next = state.done.length === MODULES.length
        ? MODULES[0]
        : MODULES.find((module) => !isDone(module.id)) || MODULES[0];
      const label = start.querySelector('span');
      if (label) {
        if (state.done.length === MODULES.length) label.textContent = 'Ulang dari pertemuan 01';
        else if (state.last === next.id) label.textContent = 'Lanjutkan pertemuan ' + next.num;
        else if (state.done.length > 0) label.textContent = 'Lanjut ke pertemuan ' + next.num;
        else label.textContent = 'Mulai pertemuan ' + next.num;
      }
      start.setAttribute('href', '#/materi/' + next.id.slice(1));
    }
  }

  function renderRoute(options) {
    const opts = options || {};
    const route = getRoute();
    const wasInitial = Boolean(opts.initial);
    currentRoute = route;
    const content = getContent(route);

    if (typeof content !== 'string') {
      app.innerHTML = '<div class="error-state"><p class="eyebrow">Konten tidak ditemukan</p><h1>Materi ini belum termuat.</h1><p>Coba muat ulang halaman.</p><a class="btn btn-primary" href="#/">Kembali ke beranda</a></div>';
      return;
    }

    if (!wasInitial) {
      previousFocus = document.activeElement;
    }

    app.innerHTML = content;
    labelMathFractions(app);
    app.classList.add('is-entering');

    setAccent(route);
    setMeta(route);
    updateRail(route);
    closeRail(false);

    if (route.type === 'module' && state.last !== route.id) {
      state.last = route.id;
      saveState();
    }

    updateProgressUI();
    initPageInteractions(route);
    if (window.KURVA && typeof window.KURVA.initLabs === 'function') {
      window.KURVA.initLabs(route);
    }
    initRevealAnimations();

    if (!wasInitial) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      app.focus({ preventScroll: true });
    }

    const anchorId = window.location.hash && !window.location.hash.startsWith('#/')
      ? decodeURIComponent(window.location.hash.slice(1))
      : '';
    if (route.type === 'module' && route.focus) {
      requestAnimationFrame(() => {
        const target = document.getElementById(route.focus);
        if (!target) return;
        target.classList.add('answer-focus');
        if (typeof target.focus === 'function') target.focus({ preventScroll: true });
        target.scrollIntoView({ behavior: wasInitial ? 'auto' : 'smooth', block: 'center' });
      });
    }
    if (anchorId) {
      requestAnimationFrame(() => {
        const target = document.getElementById(anchorId);
        if (target) target.scrollIntoView({ behavior: wasInitial ? 'auto' : 'smooth', block: 'start' });
      });
    }
  }

  function initPageInteractions(route) {
    initQuizzes();
    initSteppers();
    initPrintButton();
    // Buttons created after render.
    document.querySelectorAll('[data-complete]').forEach((button) => {
      // Avoid double-listening by replacing handler through property assignment.
      button.onclick = function () {
        const id = button.dataset.complete;
        const next = !isDone(id);
        setDone(id, next);
        if (next) {
          const module = getModule(id);
          if (state.done.length === MODULES.length) {
            showToast('Semua pertemuan selesai. Saatnya buka lembar rumus.');
          } else {
            showToast(module ? module.title + ' ditandai selesai.' : 'Pertemuan ditandai selesai.');
          }
        } else {
          showToast('Tanda selesai dibatalkan.');
        }
      };
    });
    if (route.type === 'formula') {
      const print = document.querySelector('[data-print]');
      if (print) print.onclick = () => window.print();
    }
  }

  function initPrintButton() {
    const print = document.querySelector('[data-print]');
    if (print) print.onclick = () => window.print();
  }

  function initRevealAnimations() {
    if (revealObserver) revealObserver.disconnect();
    const elements = Array.from(app.querySelectorAll('.reveal'));
    if (!elements.length) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px 16% 0px', threshold: 0.01 });
    elements.forEach((el) => revealObserver.observe(el));
  }

  function initQuizzes() {
    document.querySelectorAll('[data-quiz]').forEach((quiz) => {
      const questions = Array.from(quiz.querySelectorAll('.quiz-question'));
      const progress = quiz.querySelector('[data-quiz-progress]');
      const result = quiz.querySelector('[data-quiz-result]');
      let answered = 0;
      let score = 0;

      function updateProgress() {
        if (progress) progress.textContent = answered + ' / ' + questions.length + ' dijawab';
      }

      function finish() {
        if (answered !== questions.length) return;
        let message = '';
        if (score === questions.length) message = score + '/' + questions.length + ' — kuat. Konsep ini sudah kamu kuasai.';
        else if (score === questions.length - 1) message = score + '/' + questions.length + ' — hampir. Satu jebakan lagi untuk diulang.';
        else if (score >= 2) message = score + '/' + questions.length + ' — lumayan. Buka lagi bagian yang masih terasa kabur.';
        else message = score + '/' + questions.length + ' — jangan buru-buru. Baca kartu ingat, lalu coba lagi.';
        if (result) {
          result.textContent = message;
          result.classList.add('has-result');
        }
        quiz.classList.toggle('is-strong', score === questions.length);
        quiz.classList.toggle('is-weak', score < 2);
      }

      questions.forEach((question) => {
        const options = Array.from(question.querySelectorAll('.option'));
        const answer = question.dataset.answer;
        const explain = question.querySelector('.explain');
        options.forEach((option) => {
          option.addEventListener('click', () => {
            if (question.classList.contains('is-answered')) return;
            question.classList.add('is-answered');
            const chosen = option.dataset.opt;
            const isCorrect = chosen === answer;
            if (isCorrect) {
              score += 1;
              option.classList.add('is-correct');
              option.setAttribute('aria-label', option.textContent.trim() + ' — jawaban benar');
            } else {
              option.classList.add('is-wrong');
              const correct = question.querySelector('.option[data-opt="' + answer + '"]');
              if (correct) correct.classList.add('is-correct');
            }
            options.forEach((btn) => { btn.disabled = true; });
            if (explain) explain.hidden = false;
            answered += 1;
            updateProgress();
            finish();
          });
        });
      });

      const reset = quiz.querySelector('.quiz-reset');
      if (reset) {
        reset.addEventListener('click', () => {
          answered = 0;
          score = 0;
          questions.forEach((question) => {
            question.classList.remove('is-answered');
            question.querySelectorAll('.option').forEach((option) => {
              option.disabled = false;
              option.classList.remove('is-correct', 'is-wrong');
              option.removeAttribute('aria-label');
            });
            const explain = question.querySelector('.explain');
            if (explain) explain.hidden = true;
          });
          if (result) {
            result.textContent = 'Pilih jawaban tanpa membuka catatan dulu.';
            result.classList.remove('has-result');
          }
          quiz.classList.remove('is-strong', 'is-weak');
          updateProgress();
        });
      }
      updateProgress();
    });
  }

  function initSteppers() {
    document.querySelectorAll('[data-stepper]').forEach((stepper) => {
      const steps = Array.from(stepper.querySelectorAll('.stepper-steps > li'));
      if (!steps.length) return;
      const next = stepper.querySelector('.stepper-next');
      const all = stepper.querySelector('.stepper-all');
      let revealed = 0;
      stepper.classList.add('stepper-enhanced');

      function paint() {
        steps.forEach((step, index) => {
          step.classList.toggle('is-revealed', index < revealed);
        });
        if (next) {
          if (revealed === steps.length) {
            next.hidden = true;
            if (all) all.hidden = true;
          } else {
            next.hidden = false;
            next.innerHTML = 'Buka langkah ' + (revealed + 1) + ' <span aria-hidden="true">↓</span>';
            next.setAttribute('aria-expanded', String(revealed > 0));
          }
        }
      }

      if (next) {
        next.addEventListener('click', () => {
          revealed = Math.min(steps.length, revealed + 1);
          paint();
          const lastRevealed = steps[revealed - 1];
          if (lastRevealed) lastRevealed.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
      }
      if (all) {
        all.addEventListener('click', () => {
          revealed = steps.length;
          paint();
        });
      }
      paint();
    });
  }

  function openRail() {
    document.body.classList.add('rail-open');
    const button = document.querySelector('[data-rail-open]');
    if (button) button.setAttribute('aria-expanded', 'true');
    const close = document.querySelector('[data-rail-close]');
    if (close) window.setTimeout(() => close.focus(), 60);
  }

  function closeRail(restoreFocus) {
    if (!document.body.classList.contains('rail-open')) return;
    document.body.classList.remove('rail-open');
    const button = document.querySelector('[data-rail-open]');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
      if (restoreFocus !== false) button.focus();
    }
  }

  function showToast(message) {
    const toast = document.querySelector('[data-toast]');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3600);
  }

  function resetProgress() {
    if (!state.done.length && !state.last) {
      showToast('Belum ada progres yang perlu direset.');
      return;
    }
    const confirmed = window.confirm('Reset tanda selesai dan pertemuan terakhir? Progres di perangkat ini akan dihapus.');
    if (!confirmed) return;
    state.done = [];
    state.last = null;
    saveState();
    updateProgressUI();
    showToast('Progres belajar direset.');
  }

  function handleGlobalNavigation() {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;

      if (href.startsWith('#/')) {
        closeRail(false);
        if (href === (window.location.hash || '#/')) {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      if (href === '#') {
        event.preventDefault();
        return;
      }

      const target = document.getElementById(href.slice(1));
      if (target) {
        event.preventDefault();
        closeRail(false);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });

    document.querySelectorAll('[data-rail-open]').forEach((button) => {
      button.addEventListener('click', openRail);
    });
    document.querySelectorAll('[data-rail-close]').forEach((button) => {
      button.addEventListener('click', () => closeRail(true));
    });
    document.querySelectorAll('[data-rail-overlay]').forEach((overlay) => {
      overlay.addEventListener('click', () => closeRail(true));
    });
    document.querySelectorAll('[data-reset-progress]').forEach((button) => {
      button.addEventListener('click', resetProgress);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeRail(true);
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeRail(false);
    });
    window.addEventListener('hashchange', () => {
      const route = getRoute();
      if (route.type !== 'home' || window.location.hash === '#/' || window.location.hash === '#' || window.location.hash === '') {
        renderRoute();
      }
    });
  }

  function boot() {
    if (!window.KURVA_CONTENT) {
      app.innerHTML = '<div class="error-state"><h1>Konten belum termuat.</h1><p>Periksa koneksi atau muat ulang halaman.</p></div>';
      return;
    }
    handleGlobalNavigation();
    renderRoute({ initial: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
