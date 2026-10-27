window.KURVA_CONTENT = window.KURVA_CONTENT || {};

KURVA_CONTENT.home = `
<section class="home-hero">
  <div class="hero-copy">
    <p class="eyebrow"><span class="eyebrow-mark"></span> Pengantar Ekonomi · Semester 1</p>
    <h1>Belajar ekonomi, <em>lihat idenya bergerak.</em></h1>
    <p class="hero-lead">Pilih satu pertemuan untuk mulai. Tiap bab berisi ringkasan, visual interaktif, dan latihan.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" id="startCourse" href="#/materi/1">
        <span>Mulai pertemuan 01</span>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg>
      </a>
      <a class="home-choose-link" href="#materi-index">Pilih pertemuan <span aria-hidden="true">↓</span></a>
    </div>
    <p class="home-overview">6 pertemuan <span aria-hidden="true">·</span> simulasi <span aria-hidden="true">·</span> latihan</p>
  </div>
</section>

<section class="module-index-section" id="materi-index">
  <div class="section-topline index-heading">
    <div>
      <p class="eyebrow">Materi</p>
      <h2>Pilih pertemuan.</h2>
    </div>
    <p class="section-intro">Mulai dari 01 untuk mengikuti urutan kuliah. Kamu juga bisa langsung membuka bab yang dibutuhkan.</p>
  </div>

  <ol class="module-index">
    <li class="module-row" data-module-row="m1">
      <a class="module-link" href="#/materi/1">
        <span class="module-number">01</span>
        <div class="module-copy">
          <div class="module-meta"><span>16 menit</span><span class="completion" data-completion="m1">Belum selesai</span></div>
          <h3>Konsep dasar &amp; pilihan</h3>
          <p>Kelangkaan, pilihan, dan biaya peluang.</p>
        </div>
        <span class="module-enter" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg></span>
      </a>
    </li>
    <li class="module-row" data-module-row="m2">
      <a class="module-link" href="#/materi/2">
        <span class="module-number">02</span>
        <div class="module-copy">
          <div class="module-meta"><span>18 menit</span><span class="completion" data-completion="m2">Belum selesai</span></div>
          <h3>Mikro, makro &amp; pelaku ekonomi</h3>
          <p>Keputusan individu dan gambaran ekonomi nasional.</p>
        </div>
        <span class="module-enter" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg></span>
      </a>
    </li>
    <li class="module-row" data-module-row="m3">
      <a class="module-link" href="#/materi/3">
        <span class="module-number">03</span>
        <div class="module-copy">
          <div class="module-meta"><span>22 menit</span><span class="completion" data-completion="m3">Belum selesai</span></div>
          <h3>Permintaan, penawaran &amp; keseimbangan</h3>
          <p>Bagaimana permintaan dan penawaran membentuk harga pasar.</p>
        </div>
        <span class="module-enter" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg></span>
      </a>
    </li>
    <li class="module-row" data-module-row="m4">
      <a class="module-link" href="#/materi/4">
        <span class="module-number">04</span>
        <div class="module-copy">
          <div class="module-meta"><span>20 menit</span><span class="completion" data-completion="m4">Belum selesai</span></div>
          <h3>Elastisitas</h3>
          <p>Mengukur respons jumlah terhadap perubahan harga.</p>
        </div>
        <span class="module-enter" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg></span>
      </a>
    </li>
    <li class="module-row" data-module-row="m5">
      <a class="module-link" href="#/materi/5">
        <span class="module-number">05</span>
        <div class="module-copy">
          <div class="module-meta"><span>24 menit</span><span class="completion" data-completion="m5">Belum selesai</span></div>
          <h3>Pasar, surplus &amp; intervensi</h3>
          <p>Surplus, kesejahteraan, dan kebijakan harga.</p>
        </div>
        <span class="module-enter" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg></span>
      </a>
    </li>
    <li class="module-row" data-module-row="m6">
      <a class="module-link" href="#/materi/6">
        <span class="module-number">06</span>
        <div class="module-copy">
          <div class="module-meta"><span>21 menit</span><span class="completion" data-completion="m6">Belum selesai</span></div>
          <h3>Perilaku konsumen</h3>
          <p>Utilitas, anggaran, dan pilihan konsumen.</p>
        </div>
        <span class="module-enter" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg></span>
      </a>
    </li>
  </ol>
</section>

<details class="home-demo">
  <summary>
    <span class="home-demo-icon" aria-hidden="true">↗</span>
    <span class="home-demo-copy"><small>Ingin mencoba dulu?</small><strong>Simulasi pasar kopi</strong><small>Ubah skenario, lihat harga berubah.</small></span>
    <span class="home-demo-toggle" aria-hidden="true"></span>
  </summary>
  <div class="home-demo-content">
    <div class="hero-sim">
      <div class="sim-toolbar">
        <span class="sim-live"><i></i> pasar kopi · ilustrasi</span>
        <span class="sim-code">D / S / E</span>
      </div>
      <div class="plot hero-plot" data-hero-plot>
        <div class="plot-fallback">Menyiapkan kurva…</div>
      </div>
      <div class="hero-readout">
        <div>
          <span class="micro-label">Harga seimbang</span>
          <strong data-hero-price>Rp30 ribu</strong>
        </div>
        <div>
          <span class="micro-label">Kuantitas</span>
          <strong data-hero-qty>60 ton</strong>
        </div>
        <p class="sim-change" data-hero-change>Gunakan skenario di bawah.</p>
      </div>
      <div class="scenario-chips" data-hero-scenarios aria-label="Pilih skenario pasar kopi">
        <button type="button" class="chip is-active" data-hero-scenario="normal">Pasar normal</button>
        <button type="button" class="chip" data-hero-scenario="viral">Tren viral</button>
        <button type="button" class="chip" data-hero-scenario="harvest">Panen raya</button>
        <button type="button" class="chip" data-hero-scenario="drought">Musim kering</button>
      </div>
      <p class="sim-caption" data-hero-caption>Permintaan dan penawaran bertemu di titik E. Harga cenderung menuju titik ini.</p>
    </div>
  </div>
</details>
`;
