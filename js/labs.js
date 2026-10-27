/* Kurva — interactive economics labs. No external dependencies. */
(function () {
  'use strict';

  const NF = new Intl.NumberFormat('id-ID');
  const NF2 = new Intl.NumberFormat('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  const cleanups = [];
  let chartUID = 0;

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function $$(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function num(value, digits) {
    const d = digits == null ? 2 : digits;
    const safe = Math.abs(value) < 1e-9 ? 0 : value;
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 0,
      maximumFractionDigits: d
    }).format(safe);
  }

  function fractionMarkup(numerator, denominator) {
    const top = escapeHTML(numerator);
    const bottom = escapeHTML(denominator);
    return '<span class="frac live-frac" role="math" aria-label="' + top + ' dibagi ' + bottom + '"><span>' + top + '</span><span>' + bottom + '</span></span>';
  }

  function rupiah(value, digits) {
    const d = digits == null ? 0 : digits;
    const safe = Math.abs(value) < 0.5 && !d ? 0 : value;
    return 'Rp' + new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: d,
      maximumFractionDigits: d
    }).format(safe);
  }

  function ribuan(value) {
    return 'Rp' + num(value, 2) + ' ribu';
  }

  function near(a, b, tolerance) {
    return Math.abs(a - b) <= (tolerance == null ? 0.01 : tolerance);
  }

  function niceStep(raw) {
    if (!Number.isFinite(raw) || raw <= 0) return 1;
    const exponent = Math.floor(Math.log10(raw));
    const fraction = raw / Math.pow(10, exponent);
    let nice;
    if (fraction <= 1) nice = 1;
    else if (fraction <= 1.5) nice = 1.5;
    else if (fraction <= 2) nice = 2;
    else if (fraction <= 2.5) nice = 2.5;
    else if (fraction <= 3) nice = 3;
    else if (fraction <= 4) nice = 4;
    else if (fraction <= 5) nice = 5;
    else nice = 10;
    return nice * Math.pow(10, exponent);
  }

  function niceTicks(max, target) {
    const safeMax = Number.isFinite(max) && max > 0 ? max : 10;
    const step = niceStep(safeMax / Math.max(2, target || 5));
    const axisMax = Math.ceil((safeMax - step * 1e-8) / step) * step;
    const ticks = [];
    for (let value = 0; value <= axisMax + step * 1e-8; value += step) {
      ticks.push(Number(value.toFixed(6)));
    }
    return { max: Number(axisMax.toFixed(6)), step: step, ticks: ticks };
  }

  function addCleanup(fn) {
    cleanups.push(fn);
  }

  function cleanup() {
    while (cleanups.length) {
      const fn = cleanups.pop();
      try { fn(); } catch (error) { /* no-op */ }
    }
  }

  function setPressed(buttons, activeButton) {
    buttons.forEach((button) => {
      const active = button === activeButton;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function setText(selector, value) {
    const element = $(selector);
    if (element) element.textContent = value;
  }

  function paintRange(input) {
    if (!input) return;
    const min = Number(input.min || 0);
    const max = Number(input.max || 100);
    const value = Number(input.value || min);
    const fill = max > min ? ((value - min) / (max - min)) * 100 : 0;
    input.style.setProperty('--fill', fill + '%');
  }

  /* ------------------------------------------------------------------
     Chart helpers
     ------------------------------------------------------------------ */

  function chartFrame(width, height, spec) {
    const compact = width < 440;
    const pad = spec.pad || {
      l: compact ? 47 : 58,
      r: compact ? 16 : 24,
      t: 24,
      b: compact ? 43 : 49
    };
    const plotW = width - pad.l - pad.r;
    const plotH = height - pad.t - pad.b;
    const xMax = spec.xMax;
    const yMax = spec.yMax;
    const xTicks = spec.xTicks || [];
    const yTicks = spec.yTicks || [];

    function sx(value) {
      return pad.l + (clamp(value, 0, xMax) / xMax) * plotW;
    }

    function sy(value) {
      return height - pad.b - (clamp(value, 0, yMax) / yMax) * plotH;
    }

    function exactSx(value) {
      return pad.l + (value / xMax) * plotW;
    }

    function exactSy(value) {
      return height - pad.b - (value / yMax) * plotH;
    }

    let grid = '';
    yTicks.forEach((tick) => {
      const y = sy(tick);
      grid += '<line class="chart-grid-line" x1="' + pad.l + '" y1="' + y.toFixed(2) + '" x2="' + (width - pad.r) + '" y2="' + y.toFixed(2) + '"/>';
      grid += '<text class="chart-tick" x="' + (pad.l - 9) + '" y="' + (y + 4).toFixed(2) + '" text-anchor="end">' + escapeHTML(num(tick, 1)) + '</text>';
    });
    xTicks.forEach((tick) => {
      const x = sx(tick);
      grid += '<line class="chart-grid-line" x1="' + x.toFixed(2) + '" y1="' + pad.t + '" x2="' + x.toFixed(2) + '" y2="' + (height - pad.b) + '"/>';
      grid += '<text class="chart-tick" x="' + x.toFixed(2) + '" y="' + (height - pad.b + 17) + '" text-anchor="middle">' + escapeHTML(num(tick, 1)) + '</text>';
    });

    const labels =
      '<line class="chart-axis" x1="' + pad.l + '" y1="' + (height - pad.b) + '" x2="' + (width - pad.r) + '" y2="' + (height - pad.b) + '"/>' +
      '<line class="chart-axis" x1="' + pad.l + '" y1="' + pad.t + '" x2="' + pad.l + '" y2="' + (height - pad.b) + '"/>' +
      '<text class="chart-axis-label chart-axis-label-x" x="' + (width - pad.r) + '" y="' + (height - 10) + '" text-anchor="end">' + escapeHTML(spec.xLabel || 'Kuantitas') + '</text>' +
      '<text class="chart-axis-label" x="14" y="' + ((pad.t + height - pad.b) / 2).toFixed(2) + '" text-anchor="middle" transform="rotate(-90 14 ' + ((pad.t + height - pad.b) / 2).toFixed(2) + ')">' + escapeHTML(spec.yLabel || 'Harga') + '</text>';

    return {
      pad: pad,
      plotW: plotW,
      plotH: plotH,
      xMax: xMax,
      yMax: yMax,
      sx: sx,
      sy: sy,
      exactSx: exactSx,
      exactSy: exactSy,
      markup: grid + labels,
      top: pad.t,
      bottom: height - pad.b,
      left: pad.l,
      right: width - pad.r
    };
  }

  function chartClip(frame) {
    const id = 'kurva-clip-' + (++chartUID);
    return {
      id: id,
      defs: '<defs><clipPath id="' + id + '"><rect x="' + frame.left + '" y="' + frame.top + '" width="' + frame.plotW + '" height="' + frame.plotH + '"/></clipPath></defs>'
    };
  }

  function pathFrom(points) {
    return points.map((point, index) => {
      return (index === 0 ? 'M' : 'L') + point[0].toFixed(2) + ' ' + point[1].toFixed(2);
    }).join(' ');
  }

  function linePath(x1, y1, x2, y2) {
    return 'M' + x1.toFixed(2) + ' ' + y1.toFixed(2) + 'L' + x2.toFixed(2) + ' ' + y2.toFixed(2);
  }

  function svgPoint(frame, q, p, classes, radius) {
    return '<circle class="' + classes + '" cx="' + frame.sx(q).toFixed(2) + '" cy="' + frame.sy(p).toFixed(2) + '" r="' + (radius || 5) + '"/>';
  }

  function mountChart(container, draw, options) {
    if (!container) return null;
    const opts = Object.assign({ ratio: 0.63, min: 265, max: 430 }, options || {});
    let width = 0;
    let raf = 0;

    function paint() {
      const nextWidth = Math.round(container.clientWidth || 0);
      if (nextWidth < 100) return;
      const nextHeight = Math.round(clamp(nextWidth * opts.ratio, opts.min, opts.max));
      width = nextWidth;
      const label = typeof opts.label === 'function' ? opts.label() : (opts.label || 'Grafik ekonomi interaktif');
      container.innerHTML =
        '<svg class="chart-svg" viewBox="0 0 ' + nextWidth + ' ' + nextHeight + '" width="' + nextWidth + '" height="' + nextHeight + '" role="img" aria-label="' + escapeHTML(label) + '">' +
        draw(nextWidth, nextHeight) +
        '</svg>';
    }

    paint();

    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(() => {
        const nextWidth = Math.round(container.clientWidth || 0);
        if (!nextWidth || nextWidth === width) return;
        window.cancelAnimationFrame(raf);
        raf = window.requestAnimationFrame(paint);
      });
      observer.observe(container);
      addCleanup(() => observer.disconnect());
    } else {
      const onResize = () => {
        if (Math.round(container.clientWidth || 0) !== width) paint();
      };
      window.addEventListener('resize', onResize);
      addCleanup(() => window.removeEventListener('resize', onResize));
    }
    addCleanup(() => window.cancelAnimationFrame(raf));

    return { render: paint };
  }

  /* ------------------------------------------------------------------
     Home: coffee market simulation
     ------------------------------------------------------------------ */

  const HERO_SCENARIOS = {
    normal: {
      demand: { q0: 120, slope: 2 },
      supply: { q0: -60, slope: 4 },
      price: 30,
      qty: 60,
      button: 'Pasar normal',
      change: 'Permintaan dan penawaran seimbang. Tidak ada kurva yang bergeser.',
      caption: 'Permintaan dan penawaran bertemu di titik E. Harga cenderung menuju titik ini.'
    },
    viral: {
      demand: { q0: 150, slope: 2 },
      supply: { q0: -60, slope: 4 },
      price: 35,
      qty: 80,
      button: 'Tren viral',
      change: 'Permintaan bergeser ke kanan. Harga dan jumlah sama-sama naik.',
      caption: 'Tren meningkatkan permintaan pada setiap tingkat harga. Kurva D bergeser ke kanan; E bergerak ke kanan atas.'
    },
    harvest: {
      demand: { q0: 120, slope: 2 },
      supply: { q0: -40, slope: 4 },
      price: 26.67,
      qty: 66.67,
      button: 'Panen raya',
      change: 'Penawaran bergeser ke kanan. Harga turun, jumlah yang diperdagangkan naik.',
      caption: 'Panen raya menambah pasokan pada setiap harga. Kurva S bergeser ke kanan; E bergerak ke kanan bawah.'
    },
    drought: {
      demand: { q0: 120, slope: 2 },
      supply: { q0: -100, slope: 4 },
      price: 36.67,
      qty: 46.67,
      button: 'Musim kering',
      change: 'Penawaran bergeser ke kiri. Harga naik, jumlah yang diperdagangkan turun.',
      caption: 'Gagal panen mengurangi pasokan. Kurva S bergeser ke kiri; E bergerak ke kiri atas.'
    }
  };

  function drawHeroMarket(width, height, scenario) {
    const frame = chartFrame(width, height, {
      xMax: 160,
      yMax: 60,
      xTicks: [0, 40, 80, 120, 160],
      yTicks: [0, 15, 30, 45, 60],
      xLabel: 'Kuantitas (ton)',
      yLabel: 'Harga (Rp ribu)'
    });
    const clip = chartClip(frame);

    const demandTop = Math.min(frame.yMax, scenario.demand.q0 / scenario.demand.slope);
    const supplyStart = Math.max(0, -scenario.supply.q0 / scenario.supply.slope);
    const supplyEndP = Math.min(frame.yMax, (frame.xMax - scenario.supply.q0) / scenario.supply.slope);
    const demandAt80 = scenario.demand.q0 - scenario.demand.slope * (frame.yMax * 0.8);
    const supplyAt80 = scenario.supply.q0 + scenario.supply.slope * (frame.yMax * 0.8);

    let inner = clip.defs;
    inner += '<g clip-path="url(#' + clip.id + ')">';
    inner += '<path class="chart-line chart-line-demand" d="' + pathFrom([
      [frame.sx(0), frame.sy(demandTop)],
      [frame.sx(scenario.demand.q0), frame.sy(0)]
    ]) + '"/>';
    inner += '<path class="chart-line chart-line-supply" d="' + pathFrom([
      [frame.sx(scenario.supply.q0 + scenario.supply.slope * supplyStart), frame.sy(supplyStart)],
      [frame.sx(scenario.supply.q0 + scenario.supply.slope * supplyEndP), frame.sy(supplyEndP)]
    ]) + '"/>';
    inner += '</g>';

    inner += '<text class="chart-curve-label chart-curve-label-demand" x="' + (frame.sx(demandAt80) - 13).toFixed(2) + '" y="' + (frame.sy(frame.yMax * 0.8) - 9).toFixed(2) + '">D</text>';
    inner += '<text class="chart-curve-label chart-curve-label-supply" x="' + (frame.sx(supplyAt80) + 11).toFixed(2) + '" y="' + (frame.sy(frame.yMax * 0.8) - 9).toFixed(2) + '">S</text>';

    const ex = frame.sx(scenario.qty);
    const ey = frame.sy(scenario.price);
    inner += '<line class="chart-guide chart-guide-hero" x1="' + ex.toFixed(2) + '" y1="' + ey.toFixed(2) + '" x2="' + ex.toFixed(2) + '" y2="' + frame.bottom + '"/>';
    inner += '<line class="chart-guide chart-guide-hero" x1="' + frame.left + '" y1="' + ey.toFixed(2) + '" x2="' + ex.toFixed(2) + '" y2="' + ey.toFixed(2) + '"/>';
    inner += '<circle class="chart-eq-halo" cx="' + ex.toFixed(2) + '" cy="' + ey.toFixed(2) + '" r="15"/>';
    inner += '<circle class="chart-eq" cx="' + ex.toFixed(2) + '" cy="' + ey.toFixed(2) + '" r="6"/>';
    inner += '<text class="chart-point-label" x="' + (ex + 12).toFixed(2) + '" y="' + (ey - 12).toFixed(2) + '">E</text>';
    inner += '<text class="chart-mini-note" x="' + frame.left + '" y="' + (frame.top - 8) + '">Pasar kopi · D / S / E</text>';
    return inner + frame.markup;
  }

  function initHeroLab() {
    const plot = $('[data-hero-plot]');
    if (!plot) return;
    const buttons = $$('[data-hero-scenario]');
    let current = 'normal';

    const chart = mountChart(plot, (width, height) => drawHeroMarket(width, height, HERO_SCENARIOS[current]), {
      ratio: 0.65,
      min: 270,
      max: 430,
      label: () => 'Grafik pasar kopi, skenario ' + HERO_SCENARIOS[current].button + '. Harga seimbang ' + num(HERO_SCENARIOS[current].price) + ' ribu rupiah dan kuantitas ' + num(HERO_SCENARIOS[current].qty) + ' ton.'
    });

    function update(key) {
      if (!HERO_SCENARIOS[key]) return;
      current = key;
      const scenario = HERO_SCENARIOS[key];
      setPressed(buttons, buttons.find((button) => button.dataset.heroScenario === key));
      setText('[data-hero-price]', ribuan(scenario.price));
      setText('[data-hero-qty]', num(scenario.qty) + ' ton');
      setText('[data-hero-change]', scenario.change);
      setText('[data-hero-caption]', scenario.caption);
      if (chart) chart.render();
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => update(button.dataset.heroScenario));
    });
    update('normal');
  }

  /* ------------------------------------------------------------------
     Meeting 1: opportunity cost + dynamic hotel pricing
     ------------------------------------------------------------------ */

  function initOpportunityLab() {
    const lab = $('#lab-opportunity');
    if (!lab) return;
    const options = $$('.choice-option', lab);
    const selectedLabel = $('[data-choice-selected]', lab);
    const gain = $('[data-choice-gain]', lab);
    const cost = $('[data-choice-cost]', lab);
    const explain = $('[data-choice-explain]', lab);

    function update(active) {
      options.forEach((button) => {
        const selected = button === active;
        button.classList.toggle('is-selected', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      const alternatives = options
        .filter((button) => button !== active)
        .map((button) => ({ label: button.dataset.label, value: Number(button.dataset.return) }))
        .sort((a, b) => b.value - a.value);
      const best = alternatives[0];
      if (selectedLabel) selectedLabel.textContent = active.dataset.label;
      if (gain) gain.textContent = 'Rp' + num(Number(active.dataset.return)) + ' juta';
      if (cost) cost.textContent = best ? 'Rp' + num(best.value) + ' juta' : '—';
      if (explain && best) {
        explain.textContent = 'Alternatif terbaik yang dilepas adalah ' + best.label + ' dengan potensi Rp' + num(best.value) + ' juta. Alternatif lain yang nilainya lebih rendah bukan biaya peluang.';
      }
    }

    options.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.classList.contains('is-selected')));
      button.addEventListener('click', () => update(button));
    });
    const initial = lab.querySelector('.choice-option.is-selected') || options[0];
    if (initial) update(initial);
  }

  function initHotelLab() {
    const lab = $('#lab-hotel');
    if (!lab) return;
    const slider = $('[data-occupancy]', lab);
    const roomGrid = $('[data-room-grid]', lab);
    const output = $('[data-occupancy-output]', lab);
    const status = $('[data-room-status]', lab);
    const price = $('[data-hotel-price]', lab);
    const tier = $('[data-hotel-tier]', lab);
    const rule = $('[data-hotel-rule]', lab);
    const presets = $$('[data-rooms]', lab);
    if (!slider || !roomGrid) return;

    if (!roomGrid.children.length) {
      for (let index = 0; index < 100; index += 1) {
        const room = document.createElement('span');
        room.className = 'room';
        roomGrid.appendChild(room);
      }
    }
    const rooms = $$('.room', roomGrid);

    function update() {
      const available = clamp(Number(slider.value), 0, 100);
      const occupied = 100 - available;
      rooms.forEach((room, index) => {
        room.classList.toggle('is-occupied', index < occupied);
        room.style.setProperty('--room-i', String(index));
      });
      if (status) status.textContent = available + ' kamar tersisa';
      if (output) output.textContent = available + '%';
      let currentPrice;
      let tierName;
      let ruleText;
      if (available > 60) {
        currentPrice = 'Rp500.000';
        tierName = 'Harga dasar';
        ruleText = available + '% > 60% → kategori harga dasar.';
      } else if (available >= 20) {
        currentPrice = 'Rp750.000';
        tierName = 'Harga menengah';
        ruleText = available + '% berada di 20%–60% → kategori harga menengah.';
      } else {
        currentPrice = 'Rp1.200.000';
        tierName = 'Harga tinggi';
        ruleText = available + '% < 20% → kategori harga tinggi.';
      }
      if (price) price.textContent = currentPrice;
      if (tier) tier.textContent = tierName;
      if (rule) rule.textContent = ruleText;
      slider.setAttribute('aria-valuetext', available + ' kamar tersisa dari 100');
      paintRange(slider);
      presets.forEach((button) => button.classList.toggle('is-active', Number(button.dataset.rooms) === available));
    }

    slider.addEventListener('input', update);
    presets.forEach((button) => {
      button.addEventListener('click', () => {
        slider.value = button.dataset.rooms;
        update();
      });
    });
    update();
  }

  /* ------------------------------------------------------------------
     Meeting 2: ripple chain
     ------------------------------------------------------------------ */

  const RIPPLE_SCENARIOS = {
    fuel: {
      title: 'Harga BBM naik',
      description: 'Biaya energi dan transportasi meningkat di seluruh ekonomi.',
      chain: [
        { type: 'Macro', title: 'Biaya transportasi naik', copy: 'Harga BBM masuk ke biaya logistik dan perjalanan.' },
        { type: 'Micro', title: 'Ojol menaikkan tarif', copy: 'Pengemudi perlu menutup biaya operasional yang lebih tinggi.' },
        { type: 'Micro', title: 'Pengguna mengurangi pesanan', copy: 'Harga perjalanan naik, sebagian konsumen beralih ke opsi lain.' },
        { type: 'Macro', title: 'Konsumsi melemah', copy: 'Jika terjadi di banyak sektor, konsumsi rumah tangga menekan PDB.' }
      ],
      lesson: 'Guncangan makro mengubah biaya mikro. Respons jutaan pelaku mikro kemudian kembali muncul sebagai perubahan makro.'
    },
    currency: {
      title: 'Rupiah melemah',
      description: 'Barang dan jasa yang dibayar dengan dolar menjadi lebih mahal.',
      chain: [
        { type: 'Macro', title: 'Biaya impor naik', copy: 'Harga bahan baku, perangkat, dan cloud dalam rupiah meningkat.' },
        { type: 'Micro', title: 'Margin startup tertekan', copy: 'Perusahaan memilih menaikkan harga, memangkas biaya, atau menyerap kerugian.' },
        { type: 'Micro', title: 'Harga layanan menyesuaikan', copy: 'Sebagian konsumen mengurangi pembelian atau mencari alternatif lokal.' },
        { type: 'Macro', title: 'Inflasi dan investasi tertekan', copy: 'Biaya naik dapat menahan konsumsi dan menunda rencana investasi baru.' }
      ],
      lesson: 'Nilai tukar adalah harga makro yang langsung masuk ke keputusan mikro. Pengusaha mengubah harga dan rencana; agregatnya terlihat di inflasi dan investasi.'
    },
    viral: {
      title: 'Produk lokal viral',
      description: 'Permintaan melonjak cepat karena konten media sosial dan ulasan positif.',
      chain: [
        { type: 'Micro', title: 'Permintaan melonjak', copy: 'Satu produk lokal mendapat perhatian jauh di atas kapasitas normalnya.' },
        { type: 'Micro', title: 'Produsen menambah kapasitas', copy: 'Shift kerja dan pasokan bahan ditambah; sebagian produsen menaikkan harga.' },
        { type: 'Macro', title: 'Pekerjaan dan ekspor bertambah', copy: 'Pesanan yang berlanjut menciptakan pendapatan dan membuka pasar luar negeri.' },
        { type: 'Macro', title: 'PDB dan citra produk naik', copy: 'Jika momentum terjaga, kontribusi sektor lokal terhadap output meningkat.' }
      ],
      lesson: 'Satu perubahan mikro dapat merambat ke lapangan kerja dan ekspor. Namun lonjakan sementara baru menjadi dampak makro jika berlanjut dalam jangka panjang.'
    },
    harvest: {
      title: 'Panen pangan gagal',
      description: 'Pasokan pangan dari daerah produsen menurun akibat cuaca ekstrem.',
      chain: [
        { type: 'Macro', title: 'Pasokan pangan turun', copy: 'Gangguan cuaca dan distribusi mengurangi jumlah barang yang siap dipasarkan.' },
        { type: 'Micro', title: 'Harga pangan naik', copy: 'Pedagang dan konsumen berebut pasokan yang lebih sedikit.' },
        { type: 'Micro', title: 'Konsumsi rumah tangga menyesuaikan', copy: 'Konsumen beralih ke barang substitusi atau mengurangi porsi belanja.' },
        { type: 'Macro', title: 'Inflasi pangan meningkat', copy: 'Pangan punya bobot besar di IHK, sehingga inflasi umum ikut tertekan.' }
      ],
      lesson: 'Gangguan pasokan dari satu wilayah bisa terasa di banyak meja makan. Efek mikro pada harga berubah menjadi angka makro ketika dirata-ratakan secara nasional.'
    }
  };

  function initRippleLab() {
    const lab = $('#lab-ripple');
    if (!lab) return;
    const buttons = $$('[data-ripple]', lab);
    const origin = $('[data-ripple-origin]', lab);
    const chain = $('[data-ripple-chain]', lab);
    const lesson = $('[data-ripple-lesson]', lab);
    let current = 'fuel';

    function render() {
      const scenario = RIPPLE_SCENARIOS[current];
      const activeButton = buttons.find((button) => button.dataset.ripple === current);
      setPressed(buttons, activeButton);
      if (origin) {
        origin.innerHTML = '<span class="micro-label">Guncangan awal</span><h4>' + escapeHTML(scenario.title) + '</h4><p>' + escapeHTML(scenario.description) + '</p>';
      }
      if (chain) {
        chain.innerHTML = scenario.chain.map((node, index) => {
          return '<article class="ripple-node" style="--i:' + index + '">' +
            '<span class="ripple-type ' + (node.type === 'Macro' ? 'macro' : 'micro') + '">' + (node.type === 'Macro' ? 'Makro' : 'Mikro') + '</span>' +
            '<span class="ripple-no">0' + (index + 1) + '</span>' +
            '<h4>' + escapeHTML(node.title) + '</h4>' +
            '<p>' + escapeHTML(node.copy) + '</p>' +
            '</article>';
        }).join('');
      }
      if (lesson) {
        lesson.innerHTML = '<span class="micro-label">Yang baru saja terjadi</span><p>' + escapeHTML(scenario.lesson) + '</p>';
      }
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        current = button.dataset.ripple;
        render();
      });
    });
    render();
  }

  /* ------------------------------------------------------------------
     Meeting 3: demand, supply, equilibrium lab
     ------------------------------------------------------------------ */

  const DS_SCENARIOS = {
    base: { label: 'Awal', demandC: 100, supplyB: -20, demandSlope: 2, supplySlope: 4 },
    'demand-up': { label: 'Permintaan naik', demandC: 120, supplyB: -20, demandSlope: 2, supplySlope: 4 },
    'demand-down': { label: 'Permintaan turun', demandC: 80, supplyB: -20, demandSlope: 2, supplySlope: 4 },
    'supply-up': { label: 'Penawaran naik', demandC: 100, supplyB: 0, demandSlope: 2, supplySlope: 4 },
    'supply-down': { label: 'Penawaran turun', demandC: 100, supplyB: -40, demandSlope: 2, supplySlope: 4 }
  };

  function dsEquilibrium(scenario) {
    const price = (scenario.demandC - scenario.supplyB) / (scenario.demandSlope + scenario.supplySlope);
    return {
      price: price,
      qty: scenario.demandC - scenario.demandSlope * price
    };
  }

  function dsQuantity(scenario, price) {
    return {
      demand: scenario.demandC - scenario.demandSlope * price,
      supply: scenario.supplyB + scenario.supplySlope * price
    };
  }

  function drawDemandSupplyChart(width, height, scenario, chosenPrice) {
    const frame = chartFrame(width, height, {
      xMax: 200,
      yMax: 50,
      xTicks: [0, 40, 80, 120, 160, 200],
      yTicks: [0, 10, 20, 30, 40, 50],
      xLabel: 'Jumlah (unit)',
      yLabel: 'Harga (ribu Rp)'
    });
    const clip = chartClip(frame);
    const eq = dsEquilibrium(scenario);
    const quantities = dsQuantity(scenario, chosenPrice);
    const demandTop = Math.min(frame.yMax, scenario.demandC / scenario.demandSlope);
    const supplyStartP = Math.max(0, -scenario.supplyB / scenario.supplySlope);
    const supplyEndP = Math.min(frame.yMax, (frame.xMax - scenario.supplyB) / scenario.supplySlope);
    const labelP = frame.yMax * 0.55;
    const demandLabelQ = scenario.demandC - scenario.demandSlope * labelP;
    const supplyLabelQ = scenario.supplyB + scenario.supplySlope * labelP;

    let inner = clip.defs;
    inner += '<g clip-path="url(#' + clip.id + ')">';
    inner += '<path class="chart-line chart-line-demand" d="' + pathFrom([
      [frame.sx(0), frame.sy(demandTop)],
      [frame.sx(scenario.demandC), frame.sy(0)]
    ]) + '"/>';
    inner += '<path class="chart-line chart-line-supply" d="' + pathFrom([
      [frame.sx(scenario.supplyB + scenario.supplySlope * supplyStartP), frame.sy(supplyStartP)],
      [frame.sx(scenario.supplyB + scenario.supplySlope * supplyEndP), frame.sy(supplyEndP)]
    ]) + '"/>';

    const qd = Math.max(0, quantities.demand);
    const qs = Math.max(0, quantities.supply);
    const gap = qd - qs;
    const priceY = frame.sy(chosenPrice);
    inner += '<line class="chart-price-line" x1="' + frame.left + '" y1="' + priceY.toFixed(2) + '" x2="' + frame.right + '" y2="' + priceY.toFixed(2) + '"/>';

    if (Math.abs(gap) > 0.02) {
      inner += '<path class="chart-gap-line" d="' + linePath(frame.sx(qs), priceY, frame.sx(qd), priceY) + '"/>';
      const gapLabelX = (frame.sx(qs) + frame.sx(qd)) / 2;
      inner += '<text class="chart-annotation chart-annotation-accent" x="' + gapLabelX.toFixed(2) + '" y="' + (priceY - 10).toFixed(2) + '" text-anchor="middle">' + (gap > 0 ? 'kurang ' : 'lebih ') + num(Math.abs(gap)) + '</text>';
    }

    inner += '<line class="chart-guide" x1="' + frame.sx(eq.qty).toFixed(2) + '" y1="' + frame.sy(eq.price).toFixed(2) + '" x2="' + frame.sx(eq.qty).toFixed(2) + '" y2="' + frame.bottom + '"/>';
    inner += '<line class="chart-guide" x1="' + frame.left + '" y1="' + frame.sy(eq.price).toFixed(2) + '" x2="' + frame.sx(eq.qty).toFixed(2) + '" y2="' + frame.sy(eq.price).toFixed(2) + '"/>';
    inner += '<circle class="chart-point-muted" cx="' + frame.sx(eq.qty).toFixed(2) + '" cy="' + frame.sy(eq.price).toFixed(2) + '" r="5"/>';

    if (Math.abs(gap) > 0.02) {
      inner += '<circle class="chart-point-demand" cx="' + frame.sx(qd).toFixed(2) + '" cy="' + priceY.toFixed(2) + '" r="4.5"/>';
      inner += '<circle class="chart-point-supply" cx="' + frame.sx(qs).toFixed(2) + '" cy="' + priceY.toFixed(2) + '" r="4.5"/>';
    }
    inner += '</g>';

    inner += '<text class="chart-curve-label chart-curve-label-demand" x="' + (frame.sx(demandLabelQ) - 13).toFixed(2) + '" y="' + (frame.sy(labelP) - 8).toFixed(2) + '">D</text>';
    inner += '<text class="chart-curve-label chart-curve-label-supply" x="' + (frame.sx(supplyLabelQ) + 10).toFixed(2) + '" y="' + (frame.sy(labelP) - 8).toFixed(2) + '">S</text>';
    inner += '<circle class="chart-eq-halo" cx="' + frame.sx(eq.qty).toFixed(2) + '" cy="' + frame.sy(eq.price).toFixed(2) + '" r="14"/>';
    inner += '<circle class="chart-eq" cx="' + frame.sx(eq.qty).toFixed(2) + '" cy="' + frame.sy(eq.price).toFixed(2) + '" r="5.5"/>';
    inner += '<text class="chart-point-label" x="' + (frame.sx(eq.qty) + 10).toFixed(2) + '" y="' + (frame.sy(eq.price) - 10).toFixed(2) + '">E</text>';
    if (Math.abs(chosenPrice - eq.price) > 0.04) {
      inner += '<text class="chart-price-tag" x="' + (frame.right - 4) + '" y="' + (priceY - 7).toFixed(2) + '" text-anchor="end">P dipilih · ' + num(chosenPrice) + '</text>';
    }
    inner += '<text class="chart-mini-note" x="' + frame.left + '" y="' + (frame.top - 8) + '">Pasar saat ini · ' + escapeHTML(scenario.label) + '</text>';
    return inner + frame.markup;
  }

  function initDemandSupplyLab() {
    const lab = $('#lab-demand-supply');
    if (!lab) return;
    const slider = $('[data-ds-price]', lab);
    const tabs = $$('[data-ds-scenario]', lab);
    const output = $('[data-ds-price-out]', lab);
    const eqLabel = $('[data-ds-eq]', lab);
    const qdLabel = $('[data-ds-qd]', lab);
    const qsLabel = $('[data-ds-qs]', lab);
    const status = $('[data-ds-status]', lab);
    const equation = $('[data-ds-equation]', lab);
    if (!slider) return;
    let current = 'base';

    const chart = mountChart($('[data-ds-plot]', lab), (width, height) => {
      return drawDemandSupplyChart(width, height, DS_SCENARIOS[current], Number(slider.value));
    }, {
      ratio: 0.66,
      min: 280,
      max: 440,
      label: () => {
        const scenario = DS_SCENARIOS[current];
        const eq = dsEquilibrium(scenario);
        return 'Kurva permintaan dan penawaran skenario ' + scenario.label + '. Harga keseimbangan ' + num(eq.price) + ' ribu rupiah, kuantitas ' + num(eq.qty) + ' unit.';
      }
    });

    function render() {
      const scenario = DS_SCENARIOS[current];
      const eq = dsEquilibrium(scenario);
      const chosenPrice = Number(slider.value);
      const quantities = dsQuantity(scenario, chosenPrice);
      const qd = Math.max(0, quantities.demand);
      const qs = Math.max(0, quantities.supply);
      const difference = qd - qs;

      setPressed(tabs, tabs.find((button) => button.dataset.dsScenario === current));
      if (output) output.textContent = rupiah(chosenPrice * 1000);
      if (eqLabel) eqLabel.textContent = 'P = ' + num(eq.price) + ' · Q = ' + num(eq.qty);
      if (qdLabel) qdLabel.textContent = num(qd);
      if (qsLabel) qsLabel.textContent = num(qs);
      if (equation) {
        const sign = scenario.supplyB < 0 ? ' − ' : ' + ';
        equation.innerHTML =
          '<span><i>Qd</i> = ' + num(scenario.demandC) + ' − ' + num(scenario.demandSlope) + '(' + num(chosenPrice) + ') = ' + num(qd) + '</span>' +
          '<span><i>Qs</i> = ' + (scenario.supplyB < 0 ? '−' + num(Math.abs(scenario.supplyB)) : num(scenario.supplyB)) + ' + ' + num(scenario.supplySlope) + '(' + num(chosenPrice) + ') = ' + num(qs) + '</span>';
      }

      if (status) {
        status.classList.remove('is-balance', 'is-shortage', 'is-surplus');
        if (Math.abs(difference) < 0.02) {
          status.classList.add('is-balance');
          status.innerHTML = '<span class="status-dot"></span><p><strong>Seimbang.</strong> Jumlah yang diminta sama dengan jumlah yang ditawarkan.</p>';
        } else if (difference > 0) {
          status.classList.add('is-shortage');
          status.innerHTML = '<span class="status-dot"></span><p><strong>Kekurangan ' + num(difference) + ' unit.</strong> Qd &gt; Qs, sehingga pembeli bersaing dan harga cenderung naik.</p>';
        } else {
          status.classList.add('is-surplus');
          status.innerHTML = '<span class="status-dot"></span><p><strong>Kelebihan ' + num(Math.abs(difference)) + ' unit.</strong> Qs &gt; Qd, sehingga penjual menurunkan harga.</p>';
        }
      }
      paintRange(slider);
      if (chart) chart.render();
    }

    tabs.forEach((button) => {
      button.addEventListener('click', () => {
        current = button.dataset.dsScenario;
        render();
      });
    });
    slider.addEventListener('input', render);
    render();
  }

  /* ------------------------------------------------------------------
     Meeting 4: elasticity calculator
     ------------------------------------------------------------------ */

  const ELASTICITY_PRESETS = {
    phone: { p1: 10, p2: 12, q1: 100, q2: 80 },
    medicine: { p1: 10, p2: 12, q1: 100, q2: 99 },
    holiday: { p1: 10, p2: 12, q1: 100, q2: 55 },
    rice: { p1: 10, p2: 12, q1: 100, q2: 92 }
  };

  function signedPercent(value) {
    if (Math.abs(value) < 1e-9) return '0%';
    const prefix = value > 0 ? '+' : '−';
    return prefix + num(Math.abs(value), 2) + '%';
  }

  function classifyElasticity(value, deltaQ, deltaP) {
    if (!isFinite(value)) return { label: 'Tidak terdefinisi', cls: 'is-undefined' };
    if (deltaQ === 0) return { label: 'Inelastis sempurna', cls: 'is-inelastic' };
    if (Math.abs(value - 1) < 0.005) return { label: 'Elastis uniter', cls: 'is-unit' };
    if (value > 1) return { label: 'Elastis', cls: 'is-elastic' };
    return { label: 'Inelastis', cls: 'is-inelastic' };
  }

  function drawElasticityChart(width, height, state) {
    if (!state.valid) {
      const emptyFrame = chartFrame(width, height, {
        xMax: 100,
        yMax: 30,
        xTicks: [0, 25, 50, 75, 100],
        yTicks: [0, 10, 20, 30],
        xLabel: 'Jumlah (unit)',
        yLabel: 'Harga (ribu Rp)'
      });
      return '<text class="chart-empty-message" x="' + (width / 2) + '" y="' + (height / 2) + '" text-anchor="middle">Isi dua titik dengan angka yang valid.</text>' + emptyFrame.markup;
    }

    const xScale = niceTicks(Math.max(10, Math.max(state.q1, state.q2) * 1.45), 5);
    const yScale = niceTicks(Math.max(5, Math.max(state.p1, state.p2) * 1.65), 4);
    const frame = chartFrame(width, height, {
      xMax: xScale.max,
      yMax: yScale.max,
      xTicks: xScale.ticks,
      yTicks: yScale.ticks,
      xLabel: 'Jumlah (unit)',
      yLabel: 'Harga (ribu Rp)'
    });
    const clip = chartClip(frame);
    const slope = state.q2 === state.q1 ? null : (state.p2 - state.p1) / (state.q2 - state.q1);
    const lineLabelQ = Math.min(frame.xMax, Math.max(state.q1, state.q2) * 1.18 + frame.xMax * 0.08);
    const lineLabelP = slope == null ? frame.yMax * 0.75 : state.p1 + slope * (lineLabelQ - state.q1);

    let inner = clip.defs;
    inner += '<g clip-path="url(#' + clip.id + ')">';
    if (slope == null) {
      inner += '<path class="chart-line chart-line-demand" d="' + linePath(frame.sx(state.q1), frame.top, frame.sx(state.q1), frame.bottom) + '"/>';
    } else {
      const pAtZero = state.p1 + slope * (0 - state.q1);
      const pAtMax = state.p1 + slope * (frame.xMax - state.q1);
      inner += '<path class="chart-line chart-line-demand" d="' + linePath(frame.sx(0), frame.sy(pAtZero), frame.sx(frame.xMax), frame.sy(pAtMax)) + '"/>';
    }
    inner += '</g>';

    const x1 = frame.sx(state.q1);
    const y1 = frame.sy(state.p1);
    const x2 = frame.sx(state.q2);
    const y2 = frame.sy(state.p2);
    inner += '<path class="chart-delta" d="' + pathFrom([[x1, y1], [x2, y1], [x2, y2]]) + '"/>';
    inner += '<line class="chart-guide" x1="' + x1 + '" y1="' + y1 + '" x2="' + frame.left + '" y2="' + y1 + '"/>';
    inner += '<line class="chart-guide" x1="' + x1 + '" y1="' + y1 + '" x2="' + x1 + '" y2="' + frame.bottom + '"/>';
    inner += '<line class="chart-guide" x1="' + x2 + '" y1="' + y2 + '" x2="' + frame.left + '" y2="' + y2 + '"/>';
    inner += '<line class="chart-guide" x1="' + x2 + '" y1="' + y2 + '" x2="' + x2 + '" y2="' + frame.bottom + '"/>';
    inner += '<circle class="chart-point-muted" cx="' + x1 + '" cy="' + y1 + '" r="11"/>';
    inner += '<circle class="chart-point-muted" cx="' + x2 + '" cy="' + y2 + '" r="11"/>';
    inner += '<text class="chart-point-index" x="' + x1 + '" y="' + (y1 + 4) + '" text-anchor="middle">1</text>';
    inner += '<text class="chart-point-index" x="' + x2 + '" y="' + (y2 + 4) + '" text-anchor="middle">2</text>';
    inner += '<text class="chart-point-label" x="' + (lineLabelQ) + '" y="' + (frame.sy(clamp(lineLabelP, 2, frame.yMax - 2)) - 10) + '">D</text>';
    inner += '<text class="chart-mini-note" x="' + frame.left + '" y="' + (frame.top - 8) + '">Dua titik di kurva permintaan</text>';
    return inner + frame.markup;
  }

  function initElasticityLab() {
    const lab = $('#lab-elasticity');
    if (!lab) return;
    const p1Input = $('[data-el-p1]', lab);
    const p2Input = $('[data-el-p2]', lab);
    const q1Input = $('[data-el-q1]', lab);
    const q2Input = $('[data-el-q2]', lab);
    const presets = $$('[data-el-preset]', lab);
    const edOutput = $('[data-el-ed]', lab);
    const classOutput = $('[data-el-class]', lab);
    const marker = $('[data-el-marker]', lab);
    const interpretation = $('[data-el-interpretation]', lab);
    const tr1Output = $('[data-el-tr1]', lab);
    const tr2Output = $('[data-el-tr2]', lab);
    const bar1 = $('[data-el-bar1]', lab);
    const bar2 = $('[data-el-bar2]', lab);
    const trNote = $('[data-el-tr-note]', lab);
    const steps = $('[data-el-steps]', lab);
    const takeaway = $('[data-el-takeaway] p', lab);
    if (!p1Input || !q1Input) return;

    const chart = mountChart($('[data-el-plot]', lab), (width, height) => {
      return drawElasticityChart(width, height, readState());
    }, {
      ratio: 0.66,
      min: 280,
      max: 440,
      label: () => {
        const state = readState();
        if (!state.valid) return 'Grafik elastisitas menunggu dua titik yang valid.';
        return 'Dua titik pada kurva permintaan dan perhitungan perubahan harga serta jumlah.';
      }
    });

    function readState() {
      const rawValues = [p1Input.value, p2Input.value, q1Input.value, q2Input.value];
      const p1 = Number(rawValues[0]);
      const p2 = Number(rawValues[1]);
      const q1 = Number(rawValues[2]);
      const q2 = Number(rawValues[3]);
      const filled = rawValues.every((value) => String(value).trim() !== '');
      const avgP = (p1 + p2) / 2;
      const avgQ = (q1 + q2) / 2;
      const deltaP = p2 - p1;
      const deltaQ = q2 - q1;
      const pctP = avgP > 0 ? (deltaP / avgP) * 100 : NaN;
      const pctQ = avgQ > 0 ? (deltaQ / avgQ) * 100 : NaN;
      const ed = pctP === 0 ? Infinity : Math.abs(pctQ / pctP);
      const valid = filled &&
        [p1, p2, q1, q2].every(Number.isFinite) &&
        p1 > 0 && p2 > 0 && p2 !== p1 && q1 >= 0 && q2 >= 0 &&
        avgP > 0 && avgQ > 0 &&
        Number.isFinite(pctP) && Number.isFinite(pctQ);
      return { p1, p2, q1, q2, avgP, avgQ, deltaP, deltaQ, pctP, pctQ, ed, valid };
    }

    function update() {
      const state = readState();
      const classification = classifyElasticity(state.ed, state.deltaQ, state.deltaP);
      const tr1 = state.p1 * state.q1 * 1000;
      const tr2 = state.p2 * state.q2 * 1000;
      const maxTr = Math.max(tr1, tr2, 1);

      if (state.valid && isFinite(state.ed)) {
        if (edOutput) edOutput.textContent = num(state.ed, 2);
        if (classOutput) {
          classOutput.textContent = classification.label;
          classOutput.className = 'el-class-tag ' + classification.cls;
        }
        if (marker) marker.style.width = clamp((state.ed / 3) * 100, 3, 100) + '%';
        const pDir = state.p2 === state.p1 ? 'tidak berubah' : state.p2 > state.p1 ? 'naik' : 'turun';
        const qDir = state.q2 === state.q1 ? 'tidak berubah' : state.q2 > state.q1 ? 'naik' : 'turun';
        if (interpretation) {
          interpretation.textContent = state.p2 === state.p1
            ? 'Harga awal dan harga baru sama, sehingga persentase perubahan harga nol. Elastisitas tidak dapat dihitung dari dua titik ini.'
            : 'Harga ' + pDir + ' 1% → jumlah diminta ' + qDir + ' sekitar ' + num(state.ed, 2) + '%.';
        }
      } else {
        if (edOutput) edOutput.textContent = '—';
        if (classOutput) {
          classOutput.textContent = 'Periksa input';
          classOutput.className = 'el-class-tag is-undefined';
        }
        if (marker) marker.style.width = '0%';
        if (interpretation) interpretation.textContent = 'Harga tidak berubah atau angka belum lengkap. Masukkan dua titik dengan harga yang berbeda.';
      }

      if (tr1Output) tr1Output.textContent = Number.isFinite(tr1) ? rupiah(tr1) : '—';
      if (tr2Output) tr2Output.textContent = Number.isFinite(tr2) ? rupiah(tr2) : '—';
      if (bar1) bar1.style.width = (Number.isFinite(tr1) && Number.isFinite(maxTr) ? clamp((tr1 / maxTr) * 100, 0, 100) : 0) + '%';
      if (bar2) bar2.style.width = (Number.isFinite(tr2) && Number.isFinite(maxTr) ? clamp((tr2 / maxTr) * 100, 0, 100) : 0) + '%';

      if (trNote) {
        if (!state.valid) trNote.textContent = 'lengkapi angka yang valid';
        else if (near(tr1, tr2)) trNote.textContent = 'total penerimaan sama';
        else trNote.textContent = tr2 > tr1 ? 'total penerimaan naik' : 'total penerimaan turun';
      }

      if (steps) {
        if (!state.valid) {
          steps.innerHTML = '<div class="el-steps-empty"><span>!</span><p>Isi keempat angka dengan benar. Harga awal dan harga baru harus lebih dari nol; jumlah tidak boleh negatif dan tidak boleh keduanya nol.</p></div>';
        } else {
          steps.innerHTML =
            '<div><span>Δ<i>Q</i></span><p>' + num(state.q2) + ' − ' + num(state.q1) + ' = <strong>' + num(state.deltaQ) + '</strong></p></div>' +
            '<div><span>Rata-rata <i>Q</i></span><p>' + fractionMarkup('(' + num(state.q1) + ' + ' + num(state.q2) + ')', '2') + ' = <strong>' + num(state.avgQ) + '</strong></p></div>' +
            '<div><span>%Δ<i>Q</i></span><p>' + fractionMarkup(num(state.deltaQ), num(state.avgQ)) + ' = <strong>' + signedPercent(state.pctQ) + '</strong></p></div>' +
            '<div><span>Δ<i>P</i></span><p>' + num(state.p2) + ' − ' + num(state.p1) + ' = <strong>' + num(state.deltaP) + '</strong></p></div>' +
            '<div><span>Rata-rata <i>P</i></span><p>' + fractionMarkup('(' + num(state.p1) + ' + ' + num(state.p2) + ')', '2') + ' = <strong>' + num(state.avgP) + '</strong></p></div>' +
            '<div><span>%Δ<i>P</i></span><p>' + fractionMarkup(num(state.deltaP), num(state.avgP)) + ' = <strong>' + signedPercent(state.pctP) + '</strong></p></div>' +
            '<div class="live-total"><span><i>Ed</i></span><p>' + (isFinite(state.ed) ? '|' + fractionMarkup(signedPercent(state.pctQ), signedPercent(state.pctP)) + '| = <strong>' + num(state.ed, 2) + '</strong>' : '—') + '</p></div>';
        }
      }

      if (takeaway) {
        if (!state.valid || !isFinite(state.ed)) {
          takeaway.textContent = 'Periksa kembali angka. Harga awal dan harga baru perlu berbeda agar persentase perubahan harga dapat dihitung.';
        } else {
          const direction = tr2 > tr1 ? 'naik' : tr2 < tr1 ? 'turun' : 'tetap';
          takeaway.textContent = 'Permintaan ' + classification.label.toLowerCase() + '. Harga ' + (state.p2 >= state.p1 ? 'naik' : 'turun') + ' dan total penerimaan ' + direction + ' dari ' + rupiah(tr1) + ' menjadi ' + rupiah(tr2) + '. ' + (state.ed > 1 ? 'Respons jumlah lebih besar dari perubahan harga.' : state.ed < 1 ? 'Respons jumlah lebih kecil dari perubahan harga.' : 'Respons jumlah sebanding dengan perubahan harga.');
        }
      }

      paintRange(p1Input);
      paintRange(p2Input);
      paintRange(q1Input);
      paintRange(q2Input);
      if (chart) chart.render();
    }

    presets.forEach((button) => {
      button.addEventListener('click', () => {
        const preset = ELASTICITY_PRESETS[button.dataset.elPreset];
        if (!preset) return;
        p1Input.value = preset.p1;
        p2Input.value = preset.p2;
        q1Input.value = preset.q1;
        q2Input.value = preset.q2;
        setPressed(presets, button);
        update();
      });
    });

    [p1Input, p2Input, q1Input, q2Input].forEach((input) => {
      input.addEventListener('input', () => {
        setPressed(presets, null);
        update();
      });
    });

    update();
  }

  /* ------------------------------------------------------------------
     Meeting 5: welfare and price policy lab
     ------------------------------------------------------------------ */

  const WELFARE_SCENARIOS = DS_SCENARIOS;

  function welfareState(scenario, policy, requestedPrice) {
    const eq = dsEquilibrium(scenario);
    const pMaxDemand = scenario.demandC / scenario.demandSlope;
    const pMinSupply = Math.max(0, -scenario.supplyB / scenario.supplySlope);
    const qdAtPrice = Math.max(0, scenario.demandC - scenario.demandSlope * requestedPrice);
    const qsAtPrice = Math.max(0, scenario.supplyB + scenario.supplySlope * requestedPrice);
    let effectivePrice = eq.price;
    let qty = eq.qty;
    let status = 'balance';
    let binding = false;
    let shortage = 0;
    let excess = 0;

    if (policy === 'ceiling' && requestedPrice < eq.price - 1e-9) {
      binding = true;
      effectivePrice = requestedPrice;
      qty = qsAtPrice;
      shortage = Math.max(0, qdAtPrice - qsAtPrice);
      status = 'shortage';
    } else if (policy === 'floor' && requestedPrice > eq.price + 1e-9) {
      binding = true;
      effectivePrice = requestedPrice;
      qty = qdAtPrice;
      excess = Math.max(0, qsAtPrice - qdAtPrice);
      status = 'surplus';
    }

    const demandPriceAtQty = (scenario.demandC - qty) / scenario.demandSlope;
    const supplyPriceAtQty = (qty - scenario.supplyB) / scenario.supplySlope;
    const cs = Math.max(0, 0.5 * qty * ((pMaxDemand - effectivePrice) + (demandPriceAtQty - effectivePrice)));
    const ps = Math.max(0, 0.5 * qty * ((effectivePrice - pMinSupply) + (effectivePrice - supplyPriceAtQty)));

    return {
      scenario: scenario,
      eq: eq,
      policy: policy,
      requestedPrice: requestedPrice,
      effectivePrice: effectivePrice,
      pMaxDemand: pMaxDemand,
      pMinSupply: pMinSupply,
      qty: qty,
      qdAtPrice: qdAtPrice,
      qsAtPrice: qsAtPrice,
      binding: binding,
      status: status,
      shortage: shortage,
      excess: excess,
      demandPriceAtQty: demandPriceAtQty,
      supplyPriceAtQty: supplyPriceAtQty,
      cs: cs,
      ps: ps,
      total: cs + ps
    };
  }

  function drawWelfareChart(width, height, state) {
    const frame = chartFrame(width, height, {
      xMax: 130,
      yMax: 60,
      xTicks: [0, 25, 50, 75, 100, 125],
      yTicks: [0, 15, 30, 45, 60],
      xLabel: 'Jumlah (unit)',
      yLabel: 'Harga (ribu Rp)'
    });
    const clip = chartClip(frame);
    const scenario = state.scenario;
    const demandTop = Math.min(frame.yMax, scenario.demandC / scenario.demandSlope);
    const supplyStartP = Math.max(0, -scenario.supplyB / scenario.supplySlope);
    const supplyEndP = Math.min(frame.yMax, (frame.xMax - scenario.supplyB) / scenario.supplySlope);
    const price = state.effectivePrice;
    const qty = state.qty;
    const pMax = Math.min(frame.yMax, state.pMaxDemand);
    const pMin = Math.max(0, state.pMinSupply);
    const demandAtQty = Math.min(frame.yMax, state.demandPriceAtQty);
    const supplyAtQty = Math.max(0, state.supplyPriceAtQty);

    const csPolygon = qty > 0
      ? [
        [frame.sx(0), frame.sy(price)],
        [frame.sx(0), frame.sy(pMax)],
        [frame.sx(qty), frame.sy(demandAtQty)],
        [frame.sx(qty), frame.sy(price)]
      ]
      : null;
    const psPolygon = qty > 0
      ? [
        [frame.sx(0), frame.sy(price)],
        [frame.sx(0), frame.sy(pMin)],
        [frame.sx(qty), frame.sy(supplyAtQty)],
        [frame.sx(qty), frame.sy(price)]
      ]
      : null;

    let inner = clip.defs;
    inner += '<g clip-path="url(#' + clip.id + ')">';
    if (csPolygon) inner += '<path class="chart-area chart-area-cs" d="' + pathFrom(csPolygon) + 'Z"/>';
    if (psPolygon) inner += '<path class="chart-area chart-area-ps" d="' + pathFrom(psPolygon) + 'Z"/>';
    inner += '<path class="chart-line chart-line-demand" d="' + pathFrom([
      [frame.sx(0), frame.sy(demandTop)],
      [frame.sx(scenario.demandC), frame.sy(0)]
    ]) + '"/>';
    inner += '<path class="chart-line chart-line-supply" d="' + pathFrom([
      [frame.sx(scenario.supplyB + scenario.supplySlope * supplyStartP), frame.sy(supplyStartP)],
      [frame.sx(scenario.supplyB + scenario.supplySlope * supplyEndP), frame.sy(supplyEndP)]
    ]) + '"/>';
    inner += '</g>';

    const labelP = frame.yMax * 0.57;
    const demandLabelQ = scenario.demandC - scenario.demandSlope * labelP;
    const supplyLabelQ = scenario.supplyB + scenario.supplySlope * labelP;
    inner += '<text class="chart-curve-label chart-curve-label-demand" x="' + (frame.sx(demandLabelQ) - 13).toFixed(2) + '" y="' + (frame.sy(labelP) - 8).toFixed(2) + '">D</text>';
    inner += '<text class="chart-curve-label chart-curve-label-supply" x="' + (frame.sx(supplyLabelQ) + 10).toFixed(2) + '" y="' + (frame.sy(labelP) - 8).toFixed(2) + '">S</text>';

    inner += '<line class="chart-guide" x1="' + frame.sx(state.eq.qty).toFixed(2) + '" y1="' + frame.sy(state.eq.price).toFixed(2) + '" x2="' + frame.sx(state.eq.qty).toFixed(2) + '" y2="' + frame.bottom + '"/>';
    inner += '<line class="chart-guide" x1="' + frame.left + '" y1="' + frame.sy(state.eq.price).toFixed(2) + '" x2="' + frame.sx(state.eq.qty).toFixed(2) + '" y2="' + frame.sy(state.eq.price).toFixed(2) + '"/>';
    inner += '<circle class="chart-point-muted" cx="' + frame.sx(state.eq.qty).toFixed(2) + '" cy="' + frame.sy(state.eq.price).toFixed(2) + '" r="4.5"/>';

    if (state.policy !== 'none') {
      const policyY = frame.sy(state.requestedPrice);
      inner += '<line class="chart-policy-line' + (state.binding ? ' is-binding' : '') + '" x1="' + frame.left + '" y1="' + policyY.toFixed(2) + '" x2="' + frame.right + '" y2="' + policyY.toFixed(2) + '"/>';
      inner += '<text class="chart-price-tag" x="' + (frame.right - 4) + '" y="' + (policyY - 7).toFixed(2) + '" text-anchor="end">' + (state.policy === 'ceiling' ? 'HET' : 'Harga dasar') + ' · ' + num(state.requestedPrice) + (state.binding ? '' : ' (tidak mengikat)') + '</text>';

      if (state.binding) {
        const gap = state.qdAtPrice - state.qsAtPrice;
        if (Math.abs(gap) > 0.02) {
          inner += '<line class="chart-policy-line is-binding" x1="' + frame.sx(state.qsAtPrice).toFixed(2) + '" y1="' + policyY.toFixed(2) + '" x2="' + frame.sx(state.qdAtPrice).toFixed(2) + '" y2="' + policyY.toFixed(2) + '"/>';
          inner += '<text class="chart-annotation chart-annotation-accent" x="' + ((frame.sx(state.qdAtPrice) + frame.sx(state.qsAtPrice)) / 2).toFixed(2) + '" y="' + (policyY - 10).toFixed(2) + '" text-anchor="middle">' + (state.status === 'shortage' ? 'kurang ' : 'lebih ') + num(Math.abs(gap)) + ' unit</text>';
        }
        inner += '<circle class="chart-point-demand" cx="' + frame.sx(state.qdAtPrice).toFixed(2) + '" cy="' + policyY.toFixed(2) + '" r="4.5"/>';
        inner += '<circle class="chart-point-supply" cx="' + frame.sx(state.qsAtPrice).toFixed(2) + '" cy="' + policyY.toFixed(2) + '" r="4.5"/>';
      }
    }

    if (qty > 4) {
      const areaLabelX = frame.sx(qty * 0.28);
      if (state.cs > 0) inner += '<text class="chart-area-label" x="' + areaLabelX.toFixed(2) + '" y="' + frame.sy((price + pMax) / 2).toFixed(2) + '" text-anchor="middle">SK</text>';
      if (state.ps > 0) inner += '<text class="chart-area-label" x="' + areaLabelX.toFixed(2) + '" y="' + frame.sy((price + pMin) / 2).toFixed(2) + '" text-anchor="middle">SP</text>';
    }

    inner += '<circle class="chart-eq-halo" cx="' + frame.sx(state.eq.qty).toFixed(2) + '" cy="' + frame.sy(state.eq.price).toFixed(2) + '" r="13"/>';
    inner += '<circle class="chart-eq" cx="' + frame.sx(state.eq.qty).toFixed(2) + '" cy="' + frame.sy(state.eq.price).toFixed(2) + '" r="5.5"/>';
    inner += '<text class="chart-point-label" x="' + (frame.sx(state.eq.qty) + 10).toFixed(2) + '" y="' + (frame.sy(state.eq.price) - 10).toFixed(2) + '">E</text>';
    inner += '<text class="chart-mini-note" x="' + frame.left + '" y="' + (frame.top - 8) + '">' + escapeHTML(scenario.label) + ' · ' + (state.policy === 'none' ? 'tanpa intervensi' : state.policy === 'ceiling' ? 'HET' : 'harga dasar') + '</text>';
    return inner + frame.markup;
  }

  function initWelfareLab() {
    const lab = $('#lab-welfare');
    if (!lab) return;
    const scenarioButtons = $$('[data-w-scenario]', lab);
    const policyButtons = $$('[data-w-policy]', lab);
    const control = $('[data-w-control]', lab);
    const controlWrap = $('[data-w-control-wrap]', lab);
    const controlOut = $('[data-w-control-out]', lab);
    const controlHint = $('[data-w-control-hint]', lab);
    const eqLabel = $('[data-w-eq]', lab);
    const priceLabel = $('[data-w-price]', lab);
    const qtyLabel = $('[data-w-qty]', lab);
    const status = $('[data-w-status]', lab);
    const csLabel = $('[data-w-cs]', lab);
    const psLabel = $('[data-w-ps]', lab);
    const totalLabel = $('[data-w-total]', lab);
    const totalLabel2 = $('[data-w-total-2]', lab);
    const policyNote = $('[data-w-policy-note]', lab);
    const functions = $('[data-w-functions]', lab);
    const eqMath = $('[data-w-eq-math]', lab);
    if (!control) return;

    let currentScenario = 'base';
    let currentPolicy = 'none';

    const chart = mountChart($('[data-w-plot]', lab), (width, height) => {
      return drawWelfareChart(width, height, welfareState(WELFARE_SCENARIOS[currentScenario], currentPolicy, Number(control.value)));
    }, {
      ratio: 0.65,
      min: 290,
      max: 450,
      label: () => {
        const state = welfareState(WELFARE_SCENARIOS[currentScenario], currentPolicy, Number(control.value));
        return 'Grafik surplus konsumen dan produsen. Harga berlaku ' + num(state.effectivePrice) + ' ribu rupiah, jumlah transaksi ' + num(state.qty) + ' unit.';
      }
    });

    function scenarioMarkup() {
      const scenario = WELFARE_SCENARIOS[currentScenario];
      const supplyIntercept = scenario.supplyB < 0
        ? '−' + num(Math.abs(scenario.supplyB))
        : num(scenario.supplyB);
      return '<i>Qd</i> = ' + num(scenario.demandC) + ' − ' + num(scenario.demandSlope) + 'P; <i>Qs</i> = ' + supplyIntercept + ' + ' + num(scenario.supplySlope) + 'P';
    }

    function render() {
      const scenario = WELFARE_SCENARIOS[currentScenario];
      const requested = clamp(Number(control.value), 5, 35);
      const state = welfareState(scenario, currentPolicy, requested);

      setPressed(scenarioButtons, scenarioButtons.find((button) => button.dataset.wScenario === currentScenario));
      setPressed(policyButtons, policyButtons.find((button) => button.dataset.wPolicy === currentPolicy));

      if (controlWrap) controlWrap.hidden = currentPolicy === 'none';
      if (controlOut) controlOut.textContent = rupiah(requested * 1000);
      if (controlHint) {
        controlHint.textContent = currentPolicy === 'ceiling'
          ? 'HET mengikat hanya jika berada di bawah Pe. Saat ini Pe = ' + rupiah(state.eq.price * 1000) + '.'
          : currentPolicy === 'floor'
            ? 'Harga dasar mengikat hanya jika berada di atas Pe. Saat ini Pe = ' + rupiah(state.eq.price * 1000) + '.'
            : '';
      }

      if (eqLabel) eqLabel.textContent = 'Pe ' + num(state.eq.price) + ' · Qe ' + num(state.eq.qty);
      if (priceLabel) priceLabel.textContent = rupiah(state.effectivePrice * 1000);
      if (qtyLabel) qtyLabel.textContent = num(state.qty) + ' unit';
      if (csLabel) csLabel.textContent = rupiah(state.cs * 1000);
      if (psLabel) psLabel.textContent = rupiah(state.ps * 1000);
      if (totalLabel) totalLabel.textContent = rupiah(state.total * 1000);
      if (totalLabel2) totalLabel2.textContent = rupiah(state.total * 1000);
      if (functions) functions.innerHTML = scenarioMarkup();
      if (eqMath) {
        eqMath.innerHTML = num(scenario.demandC) + ' − ' + num(scenario.demandSlope) + 'P = ' +
          (scenario.supplyB < 0 ? '−' + num(Math.abs(scenario.supplyB)) : num(scenario.supplyB)) + ' + ' + num(scenario.supplySlope) + 'P → P = ' + num(state.eq.price) + '; Q = ' + num(state.eq.qty);
      }

      if (status) {
        status.classList.remove('is-balance', 'is-shortage', 'is-surplus');
        if (state.status === 'shortage') {
          status.classList.add('is-shortage');
          status.innerHTML = '<span class="status-dot"></span><p><strong>HET benar-benar membatasi harga.</strong> Yang ingin dibeli ' + num(state.qdAtPrice) + ' unit, lebih banyak dari yang ingin dijual (' + num(state.qsAtPrice) + ' unit). Transaksi mengikuti jumlah yang tersedia; ' + num(state.shortage) + ' unit permintaan tidak terpenuhi.</p>';
        } else if (state.status === 'surplus') {
          status.classList.add('is-surplus');
          status.innerHTML = '<span class="status-dot"></span><p><strong>Harga dasar benar-benar membatasi harga.</strong> Penjual ingin menawarkan ' + num(state.qsAtPrice) + ' unit, lebih banyak dari yang ingin dibeli (' + num(state.qdAtPrice) + ' unit). Transaksi mengikuti jumlah yang ingin dibeli; tersisa ' + num(state.excess) + ' unit kelebihan barang.</p>';
        } else if (currentPolicy !== 'none') {
          status.classList.add('is-balance');
          status.innerHTML = '<span class="status-dot"></span><p><strong>' + (currentPolicy === 'ceiling' ? 'HET tidak mengubah pasar.' : 'Harga dasar tidak mengubah pasar.') + '</strong> Patokan harganya berada di sisi yang tidak mengubah keseimbangan.</p>';
        } else {
          status.classList.add('is-balance');
          status.innerHTML = '<span class="status-dot"></span><p><strong>Seimbang.</strong> Tidak ada kebijakan yang mengikat.</p>';
        }
      }

      if (policyNote) {
        if (currentPolicy === 'none') {
          policyNote.innerHTML = '<span class="micro-label">Status kebijakan</span><p>Tidak ada intervensi harga. Pasar berada di keseimbangan Pe = ' + rupiah(state.eq.price * 1000) + ' dan Qe = ' + num(state.eq.qty) + ' unit.</p>';
        } else if (!state.binding) {
          policyNote.innerHTML = '<span class="micro-label">Status kebijakan</span><p><strong>Patokan ini tidak mengubah hasil pasar.</strong> ' + (currentPolicy === 'ceiling' ? 'HET' : 'Harga dasar') + ' sebesar ' + rupiah(requested * 1000) + ' masih ' + (currentPolicy === 'ceiling' ? 'di atas' : 'di bawah') + ' harga keseimbangan. Harga pasar tetap ' + rupiah(state.eq.price * 1000) + '.</p>';
        } else if (state.status === 'shortage') {
          policyNote.innerHTML = '<span class="micro-label">Status kebijakan</span><p><strong>HET membatasi harga di bawah keseimbangan.</strong> Konsumen ingin membeli lebih banyak daripada yang tersedia. Harga lebih murah, tetapi jumlah transaksi turun menjadi ' + num(state.qty) + ' unit dan ' + num(state.shortage) + ' unit permintaan tidak terpenuhi.</p>';
        } else {
          policyNote.innerHTML = '<span class="micro-label">Status kebijakan</span><p><strong>Harga dasar membatasi harga di atas keseimbangan.</strong> Penjual menawarkan lebih banyak daripada yang ingin dibeli. Transaksi turun menjadi ' + num(state.qty) + ' unit; kelebihan ' + num(state.excess) + ' unit barang tidak terserap pasar.</p>';
        }
      }

      paintRange(control);
      if (chart) chart.render();
    }

    scenarioButtons.forEach((button) => {
      button.addEventListener('click', () => {
        currentScenario = button.dataset.wScenario;
        render();
      });
    });

    policyButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const previous = currentPolicy;
        currentPolicy = button.dataset.wPolicy;
        if (currentPolicy !== 'none' && previous !== currentPolicy) {
          const eq = dsEquilibrium(WELFARE_SCENARIOS[currentScenario]);
          const suggestion = currentPolicy === 'ceiling'
            ? Math.floor(eq.price) - 5
            : Math.ceil(eq.price) + 5;
          control.value = clamp(suggestion, 5, 35);
        }
        render();
      });
    });

    control.addEventListener('input', render);
    render();
  }

  /* ------------------------------------------------------------------
     Meeting 6: diminishing utility + consumer optimum
     ------------------------------------------------------------------ */

  const BITE_DATA = [
    { tu: 30, mu: 30, message: 'Mangkuk pertama memberi tambahan 30 util. Kepuasan total sekarang 30.' },
    { tu: 50, mu: 20, message: 'Mangkuk kedua menambah 20 util. Totalnya naik ke 50, tetapi tambahannya lebih kecil.' },
    { tu: 60, mu: 10, message: 'Mangkuk ketiga hanya menambah 10 util. Hukum Gossen I terlihat: tambahan kepuasan makin kecil.' },
    { tu: 60, mu: 0, message: 'MU = 0. Total kepuasan berhenti bertambah dan mencapai maksimum 60 util.' },
    { tu: 50, mu: -10, message: 'Mangkuk kelima membuat terlalu kenyang. MU negatif dan total kepuasan turun menjadi 50 util.' }
  ];

  function initBiteLab() {
    const lab = $('#lab-bites');
    if (!lab) return;
    const buttons = $$('[data-bite]', lab);
    const reset = $('.bite-reset', lab);
    const tuLabel = $('[data-bite-tu]', lab);
    const muLabel = $('[data-bite-mu]', lab);
    const fill = $('[data-bite-fill]', lab);
    const message = $('[data-bite-message]', lab);
    const chart = $('[data-bite-chart]', lab);
    const bars = $$('.mu-bar', lab);
    const table = $('.bite-table', lab);
    const tableRows = table ? $$('.bite-table > div', table).filter((row) => !row.classList.contains('bite-table-head')) : [];
    let bowls = 0;

    function render() {
      const current = bowls > 0 ? BITE_DATA[bowls - 1] : { tu: 0, mu: null, message: 'Klik mangkuk pertama untuk mulai. Perhatikan tambahan kepuasan yang mengecil.' };
      if (tuLabel) tuLabel.textContent = num(current.tu);
      if (muLabel) muLabel.textContent = current.mu == null ? '—' : (current.mu > 0 ? '+' : current.mu < 0 ? '−' : '') + num(Math.abs(current.mu));
      if (fill) fill.style.width = clamp((current.tu / 60) * 100, 0, 100) + '%';
      if (message) message.textContent = current.message;
      if (chart) chart.dataset.current = String(bowls);

      buttons.forEach((button, index) => {
        const eaten = index < bowls;
        button.classList.toggle('is-eaten', eaten);
        button.classList.toggle('is-current', index === bowls - 1);
        button.setAttribute('aria-pressed', String(eaten));
      });

      bars.forEach((bar, index) => {
        bar.classList.toggle('is-visible', index < bowls);
        bar.classList.toggle('is-current', index === bowls - 1);
      });

      tableRows.forEach((row, index) => row.classList.toggle('is-current', index === bowls - 1));
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        bowls = clamp(Number(button.dataset.bite), 0, BITE_DATA.length);
        render();
      });
    });
    if (reset) {
      reset.addEventListener('click', () => {
        bowls = 0;
        render();
      });
    }
    render();
  }

  function drawConsumerChart(width, height, state) {
    const xScale = niceTicks(Math.max(state.x * 1.55, state.xIntercept * 1.18, 4), 5);
    const yScale = niceTicks(Math.max(state.y * 1.55, state.yIntercept * 1.18, 4), 5);
    const frame = chartFrame(width, height, {
      xMax: xScale.max,
      yMax: yScale.max,
      xTicks: xScale.ticks,
      yTicks: yScale.ticks,
      xLabel: 'Kopi (gelas)',
      yLabel: 'Roti (buah)'
    });
    const clip = chartClip(frame);
    const budgetX = frame.sx(state.xIntercept);
    const budgetY = frame.sy(state.yIntercept);
    const originX = frame.sx(0);
    const originY = frame.sy(0);

    function icPath(utility) {
      const startX = Math.max(0.0001, utility / frame.yMax);
      if (startX >= frame.xMax) return '';
      const points = [];
      const samples = 90;
      for (let index = 0; index <= samples; index += 1) {
        const x = startX + ((frame.xMax - startX) * index) / samples;
        const y = utility / x;
        if (y >= 0 && y <= frame.yMax + 0.01) points.push([frame.sx(x), frame.sy(y)]);
      }
      return points.length > 1 ? pathFrom(points) : '';
    }

    const lowerPath = icPath(state.utility * 0.45);
    const highPath = icPath(state.utility * 1.8);
    const currentPath = icPath(state.utility);
    const labelX = clamp(state.x * 1.65, state.x * 1.25, frame.xMax * 0.92);
    const labelY = state.utility / labelX;

    let inner = clip.defs;
    inner += '<g clip-path="url(#' + clip.id + ')">';
    inner += '<path class="chart-feasible" d="' + pathFrom([[originX, originY], [originX, budgetY], [budgetX, originY]]) + 'Z"/>';
    if (lowerPath) inner += '<path class="chart-ic is-lower" d="' + lowerPath + '"/>';
    if (highPath) inner += '<path class="chart-ic is-higher" d="' + highPath + '"/>';
    if (currentPath) inner += '<path class="chart-ic" d="' + currentPath + '"/>';
    inner += '<path class="chart-budget-line" d="' + linePath(originX, budgetY, budgetX, originY) + '"/>';
    inner += '</g>';

    const ex = frame.sx(state.x);
    const ey = frame.sy(state.y);
    inner += '<line class="chart-guide" x1="' + ex + '" y1="' + ey + '" x2="' + ex + '" y2="' + originY + '"/>';
    inner += '<line class="chart-guide" x1="' + ex + '" y1="' + ey + '" x2="' + originX + '" y2="' + ey + '"/>';
    inner += '<circle class="chart-eq-halo" cx="' + ex + '" cy="' + ey + '" r="14"/>';
    inner += '<circle class="chart-eq" cx="' + ex + '" cy="' + ey + '" r="5.5"/>';
    inner += '<text class="chart-point-label" x="' + (ex + 10) + '" y="' + (ey - 10) + '">E</text>';
    if (labelY > 0 && labelY < frame.yMax) {
      inner += '<text class="chart-curve-label chart-curve-label-ic" x="' + frame.sx(labelX).toFixed(2) + '" y="' + (frame.sy(labelY) - 8).toFixed(2) + '">IC*</text>';
    }
    inner += '<text class="chart-label" x="' + (budgetX - 5) + '" y="' + (budgetY + 18) + '" text-anchor="end">garis anggaran</text>';
    inner += '<text class="chart-mini-note" x="' + frame.left + '" y="' + (frame.top - 8) + '">Kombinasi X dan Y · U = X·Y</text>';
    return inner + frame.markup;
  }

  function initConsumerLab() {
    const lab = $('#lab-consumer');
    if (!lab) return;
    const budgetInput = $('[data-c-budget]', lab);
    const pxInput = $('[data-c-px]', lab);
    const pyInput = $('[data-c-py]', lab);
    const budgetOut = $('[data-c-budget-out]', lab);
    const pxOut = $('[data-c-px-out]', lab);
    const pyOut = $('[data-c-py-out]', lab);
    const xLabel = $('[data-c-x]', lab);
    const yLabel = $('[data-c-y]', lab);
    const uLabel = $('[data-c-u]', lab);
    const mrsLabel = $('[data-c-mrs]', lab);
    const ratioLabel = $('[data-c-ratio]', lab);
    const muxLabel = $('[data-c-mux]', lab);
    const muyLabel = $('[data-c-muy]', lab);
    const spentLabel = $('[data-c-spent]', lab);
    const equation = $('[data-c-equation]', lab);
    if (!budgetInput || !pxInput || !pyInput) return;

    function state() {
      const budget = Number(budgetInput.value);
      const px = Number(pxInput.value);
      const py = Number(pyInput.value);
      const x = budget / (2 * px);
      const y = budget / (2 * py);
      return {
        budget: budget,
        px: px,
        py: py,
        x: x,
        y: y,
        utility: x * y,
        mrs: y / x,
        ratio: px / py,
        mux: y / px,
        muy: x / py,
        spent: x * px + y * py,
        xIntercept: budget / px,
        yIntercept: budget / py
      };
    }

    const chart = mountChart($('[data-c-plot]', lab), (width, height) => {
      return drawConsumerChart(width, height, state());
    }, {
      ratio: 0.68,
      min: 300,
      max: 460,
      label: () => {
        const current = state();
        return 'Garis anggaran dan kurva indiferen konsumen. Optimum ' + num(current.x, 1) + ' kopi dan ' + num(current.y, 1) + ' roti, dengan utilitas ' + num(current.utility, 1) + '.';
      }
    });

    function render() {
      const current = state();
      if (budgetOut) budgetOut.textContent = rupiah(current.budget * 1000);
      if (pxOut) pxOut.textContent = rupiah(current.px * 1000);
      if (pyOut) pyOut.textContent = rupiah(current.py * 1000);
      if (xLabel) xLabel.textContent = num(current.x, 1);
      if (yLabel) yLabel.textContent = num(current.y, 1);
      if (uLabel) uLabel.textContent = num(current.utility, 1);
      if (mrsLabel) mrsLabel.textContent = num(current.mrs, 2);
      if (ratioLabel) ratioLabel.textContent = num(current.ratio, 2);
      if (muxLabel) muxLabel.textContent = num(current.mux, 2);
      if (muyLabel) muyLabel.textContent = num(current.muy, 2);
      if (spentLabel) spentLabel.textContent = 'Anggaran terpakai: ' + rupiah(current.spent * 1000) + ' dari ' + rupiah(current.budget * 1000) + '.';
      if (equation) {
        const coefficient = Math.abs(current.ratio - 1) < 1e-9 ? '' : num(current.ratio, 2);
        const ratioX = '<span class="frac" role="math" aria-label="MU x dibagi P x"><span><i>MU</i><sub>x</sub></span><span><i>P</i><sub>x</sub></span></span>';
        const ratioY = '<span class="frac" role="math" aria-label="MU y dibagi P y"><span><i>MU</i><sub>y</sub></span><span><i>P</i><sub>y</sub></span></span>';
        equation.innerHTML =
          '<span class="micro-label">Jejak hitung</span>' +
          '<p>' + ratioX + ' = ' + ratioY + ' → ' + fractionMarkup('Y', num(current.px)) + ' = ' + fractionMarkup('X', num(current.py)) + ' → <i>Y</i> = ' + coefficient + '<i>X</i></p>' +
          '<p>' + num(current.px) + '<i>X</i> + ' + num(current.py) + ' × ' + num(current.ratio, 2) + '<i>X</i> = ' + num(current.budget) + ' → <i>X</i> = ' + num(current.x, 2) + ', <i>Y</i> = ' + num(current.y, 2) + '</p>';
      }
      paintRange(budgetInput);
      paintRange(pxInput);
      paintRange(pyInput);
      if (chart) chart.render();
    }

    [budgetInput, pxInput, pyInput].forEach((input) => input.addEventListener('input', render));
    render();
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */

  function initLabs(route) {
    cleanup();
    if (!route) return;
    try {
      if (route.id === 'home') initHeroLab();
      if (route.id === 'm1') {
        initOpportunityLab();
        initHotelLab();
      }
      if (route.id === 'm2') initRippleLab();
      if (route.id === 'm3') initDemandSupplyLab();
      if (route.id === 'm4') initElasticityLab();
      if (route.id === 'm5') initWelfareLab();
      if (route.id === 'm6') {
        initBiteLab();
        initConsumerLab();
      }
    } catch (error) {
      if (window.console && console.error) console.error('Kurva lab error:', error);
    }
  }

  window.KURVA = window.KURVA || {};
  window.KURVA.initLabs = initLabs;
})();
