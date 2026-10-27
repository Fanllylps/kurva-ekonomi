window.KURVA_CONTENT = window.KURVA_CONTENT || {};

KURVA_CONTENT.home = `
<section class="home-hero">
  <div class="hero-copy">
    <p class="eyebrow"><span class="eyebrow-mark"></span> Pengantar Ekonomi · Semester 1</p>
    <h1>Belajar ekonomi dengan <em>menggeser kurvanya</em>, bukan menghafal gambarnya.</h1>
    <p class="hero-lead">Enam catatan kuliah diubah menjadi lab kecil. Ubah harga, geser permintaan, lihat keseimbangan bergerak. Setelah itu, uji pemahamanmu dengan soal dan hitungan bertahap.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" id="startCourse" href="#/materi/1">
        <span>Mulai pertemuan 01</span>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg>
      </a>
      <a class="btn btn-ghost" href="#materi-index">Lihat peta 6 materi</a>
    </div>
    <dl class="hero-stats">
      <div><dt>06</dt><dd>pertemuan</dd></div>
      <div><dt>06</dt><dd>lab interaktif</dd></div>
      <div><dt>24</dt><dd>soal cek paham</dd></div>
    </dl>
  </div>

  <div class="hero-sim-wrap" aria-label="Simulasi pasar kopi">
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
    <div class="hero-note">
      <span class="note-scribble">coba klik</span>
      <p>Setiap skenario hanya menggeser satu atau dua kurva. Perhatikan ke mana titik E pergi.</p>
    </div>
  </div>
</section>

<section class="home-manifesto">
  <div class="manifesto-number">00</div>
  <div class="manifesto-copy">
    <p class="eyebrow">Cara membaca situs ini</p>
    <h2>Konsep dulu, visual kemudian, hitungan terakhir.</h2>
  </div>
  <p class="manifesto-body">Ekonomi terasa abstrak kalau dimulai dari definisi. Di sini, setiap bab punya satu pertanyaan sederhana, satu visual yang bisa dimainkan, lalu rumus yang muncul sebagai konsekuensi—bukan hafalan terpisah.</p>
</section>

<section class="howto" aria-labelledby="howto-title">
  <div class="section-topline">
    <p class="eyebrow">Ritme belajar</p>
    <h2 id="howto-title">Tiga langkah, ulangi tiap pertemuan.</h2>
  </div>
  <ol class="howto-steps">
    <li>
      <span class="howto-index">01</span>
      <h3>Baca intinya</h3>
      <p>Mulai dari pertanyaan kunci dan satu kalimat definisi. Jangan langsung menyalin semua slide.</p>
    </li>
    <li>
      <span class="howto-index">02</span>
      <h3>Mainkan labnya</h3>
      <p>Geser slider, ganti skenario, dan prediksi arah perubahan sebelum melihat jawabannya.</p>
    </li>
    <li>
      <span class="howto-index">03</span>
      <h3>Uji hitungan</h3>
      <p>Buka langkah pengerjaan satu per satu, lalu kerjakan kuis tanpa melihat catatan.</p>
    </li>
  </ol>
</section>

<section class="module-index-section" id="materi-index">
  <div class="section-topline index-heading">
    <div>
      <p class="eyebrow">Indeks materi</p>
      <h2>Enam pertemuan, satu alur.</h2>
    </div>
    <p class="section-intro">Kamu bisa lompat ke bab mana pun, tapi urutan 01 → 06 disusun supaya konsep baru selalu berdiri di atas konsep sebelumnya.</p>
  </div>

  <ol class="module-index">
    <li class="module-row" data-module-row="m1">
      <a class="module-link" href="#/materi/1">
        <span class="module-number">01</span>
        <div class="module-copy">
          <div class="module-meta"><span>Pertemuan satu</span><span>± 16 menit</span><span class="completion" data-completion="m1">Belum selesai</span></div>
          <h3>Konsep dasar &amp; pilihan</h3>
          <p>Kenapa sumber daya selalu terbatas, dan bagaimana menghitung sesuatu yang kita lepaskan saat memilih.</p>
          <div class="tag-row"><span>kelangkaan</span><span>opportunity cost</span><span>dynamic pricing</span></div>
        </div>
        <div class="module-mini" aria-hidden="true">
          <svg viewBox="0 0 180 104" fill="none">
            <path d="M18 80h144" class="mini-axis"/>
            <path d="M30 70C58 70 66 22 92 22s48 20 58 48" class="mini-line"/>
            <circle cx="30" cy="70" r="5" class="mini-dot"/>
            <path d="M30 70l32-34m0 0-2 14m2-14-13 4" class="mini-arrow"/>
            <text x="119" y="36" class="mini-label">pilihan</text>
            <text x="18" y="96" class="mini-label">waktu</text>
          </svg>
        </div>
        <span class="module-enter" aria-hidden="true">
          <span>Buka</span>
          <svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg>
        </span>
      </a>
    </li>

    <li class="module-row" data-module-row="m2">
      <a class="module-link" href="#/materi/2">
        <span class="module-number">02</span>
        <div class="module-copy">
          <div class="module-meta"><span>Pertemuan dua</span><span>± 18 menit</span><span class="completion" data-completion="m2">Belum selesai</span></div>
          <h3>Mikro, makro &amp; pelaku ekonomi</h3>
          <p>Dua lensa untuk melihat hal yang sama: keputusan individu dan denyut perekonomian nasional.</p>
          <div class="tag-row"><span>mikro</span><span>makro</span><span>PDB &amp; inflasi</span></div>
        </div>
        <div class="module-mini" aria-hidden="true">
          <svg viewBox="0 0 180 104" fill="none">
            <circle cx="53" cy="51" r="18" class="mini-ring"/>
            <circle cx="53" cy="51" r="4" class="mini-dot"/>
            <circle cx="128" cy="51" r="31" class="mini-ring"/>
            <circle cx="128" cy="51" r="4" class="mini-dot"/>
            <path d="M77 51h15M86 46l6 5-6 5" class="mini-arrow"/>
            <text x="27" y="86" class="mini-label">mikro</text>
            <text x="104" y="96" class="mini-label">makro</text>
          </svg>
        </div>
        <span class="module-enter" aria-hidden="true">
          <span>Buka</span>
          <svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg>
        </span>
      </a>
    </li>

    <li class="module-row" data-module-row="m3">
      <a class="module-link" href="#/materi/3">
        <span class="module-number">03</span>
        <div class="module-copy">
          <div class="module-meta"><span>Pertemuan tiga</span><span>± 22 menit</span><span class="completion" data-completion="m3">Belum selesai</span></div>
          <h3>Permintaan, penawaran &amp; keseimbangan</h3>
          <p>Dari hukum permintaan sampai titik temu pasar. Di sini kurva mulai benar-benar bergerak.</p>
          <div class="tag-row"><span>kurva D–S</span><span>perpindahan vs pergeseran</span><span>ekuilibrium</span></div>
        </div>
        <div class="module-mini" aria-hidden="true">
          <svg viewBox="0 0 180 104" fill="none">
            <path d="M18 80h144M18 80V16" class="mini-axis"/>
            <path d="M34 26l104 44" class="mini-line supply"/>
            <path d="M34 70l104-44" class="mini-line demand"/>
            <path d="M93 47h24M93 47v24" class="mini-dash"/>
            <circle cx="93" cy="47" r="5" class="mini-dot"/>
            <text x="103" y="39" class="mini-label">E</text>
          </svg>
        </div>
        <span class="module-enter" aria-hidden="true">
          <span>Buka</span>
          <svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg>
        </span>
      </a>
    </li>

    <li class="module-row" data-module-row="m4">
      <a class="module-link" href="#/materi/4">
        <span class="module-number">04</span>
        <div class="module-copy">
          <div class="module-meta"><span>Pertemuan empat</span><span>± 20 menit</span><span class="completion" data-completion="m4">Belum selesai</span></div>
          <h3>Elastisitas</h3>
          <p>Seberapa besar reaksi pembeli dan penjual ketika harga berubah—dan mengapa itu menentukan strategi harga.</p>
          <div class="tag-row"><span>Ed</span><span>total revenue</span><span>elastisitas silang</span></div>
        </div>
        <div class="module-mini" aria-hidden="true">
          <svg viewBox="0 0 180 104" fill="none">
            <path d="M18 80h144M18 80V16" class="mini-axis"/>
            <path d="M38 28l92 52" class="mini-line"/>
            <circle cx="58" cy="40" r="5" class="mini-dot"/>
            <circle cx="116" cy="68" r="5" class="mini-dot"/>
            <path d="M58 40h58v28" class="mini-dash"/>
            <text x="119" y="30" class="mini-label">panel</text>
            <text x="119" y="42" class="mini-label">datar = elastis</text>
          </svg>
        </div>
        <span class="module-enter" aria-hidden="true">
          <span>Buka</span>
          <svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg>
        </span>
      </a>
    </li>

    <li class="module-row" data-module-row="m5">
      <a class="module-link" href="#/materi/5">
        <span class="module-number">05</span>
        <div class="module-copy">
          <div class="module-meta"><span>Pertemuan lima</span><span>± 24 menit</span><span class="completion" data-completion="m5">Belum selesai</span></div>
          <h3>Pasar, surplus &amp; intervensi</h3>
          <p>Mengukur kesejahteraan di sekitar titik keseimbangan, lalu melihat apa yang berubah saat pemerintah ikut campur.</p>
          <div class="tag-row"><span>surplus konsumen</span><span>surplus produsen</span><span>HET &amp; harga dasar</span></div>
        </div>
        <div class="module-mini" aria-hidden="true">
          <svg viewBox="0 0 180 104" fill="none">
            <path d="M18 80h144M18 80V16" class="mini-axis"/>
            <path d="M34 26l104 44" class="mini-line supply"/>
            <path d="M34 70l104-44" class="mini-line demand"/>
            <path d="M93 47l34 11H93z" class="mini-fill ps"/>
            <path d="M93 47L50 37v10z" class="mini-fill cs"/>
            <path d="M93 47h24M93 47v24" class="mini-dash"/>
            <circle cx="93" cy="47" r="4" class="mini-dot"/>
            <text x="101" y="62" class="mini-label">S</text>
          </svg>
        </div>
        <span class="module-enter" aria-hidden="true">
          <span>Buka</span>
          <svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg>
        </span>
      </a>
    </li>

    <li class="module-row" data-module-row="m6">
      <a class="module-link" href="#/materi/6">
        <span class="module-number">06</span>
        <div class="module-copy">
          <div class="module-meta"><span>Pertemuan enam</span><span>± 21 menit</span><span class="completion" data-completion="m6">Belum selesai</span></div>
          <h3>Perilaku konsumen</h3>
          <p>Bagaimana kepuasan, anggaran, dan preferensi bertemu di satu kombinasi barang yang paling masuk akal.</p>
          <div class="tag-row"><span>utilitas</span><span>kurva indiferen</span><span>Gossen II</span></div>
        </div>
        <div class="module-mini" aria-hidden="true">
          <svg viewBox="0 0 180 104" fill="none">
            <path d="M18 80h144M18 80V16" class="mini-axis"/>
            <path d="M34 65c25 0 22-34 48-34 23 0 23 31 44 31 9 0 12-4 14-10" class="mini-line"/>
            <path d="M48 80L137 21" class="mini-line budget"/>
            <circle cx="107" cy="45" r="5" class="mini-dot"/>
            <text x="113" y="38" class="mini-label">optimal</text>
          </svg>
        </div>
        <span class="module-enter" aria-hidden="true">
          <span>Buka</span>
          <svg viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5"/></svg>
        </span>
      </a>
    </li>
  </ol>
</section>

<section class="red-thread">
  <div class="red-thread-head">
    <p class="eyebrow">Benang merah</p>
    <h2>Satu keputusan kecil, efeknya bisa naik ke seluruh ekonomi.</h2>
  </div>
  <div class="thread-line" aria-label="Alur konsep ekonomi dari kelangkaan hingga kesejahteraan">
    <a href="#/materi/1"><span>01</span>Kelangkaan</a>
    <a href="#/materi/1"><span>02</span>Pilihan</a>
    <a href="#/materi/3"><span>03</span>Pasar</a>
    <a href="#/materi/4"><span>04</span>Respons harga</a>
    <a href="#/materi/5"><span>05</span>Kesejahteraan</a>
    <a href="#/materi/6"><span>06</span>Konsumen</a>
  </div>
  <p class="thread-caption">Enam bab, satu pertanyaan yang sama: <em>siapa mendapat apa, berapa banyak, dan dengan biaya apa?</em></p>
</section>

<section class="formula-cta">
  <div class="formula-cta-copy">
    <p class="eyebrow">Untuk sebelum ujian</p>
    <h2>Semua rumus, di satu lembar.</h2>
    <p>Elastisitas, keseimbangan, surplus, garis anggaran, dan utilitas—tanpa harus membuka enam bab satu per satu.</p>
    <a href="#/rumus" class="btn btn-dark">Buka lembar rumus <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg></a>
  </div>
  <div class="formula-paper" aria-hidden="true">
    <span class="formula-paper-label">RUMUS / 06</span>
    <p><i>Ed</i> = <span class="frac"><span>%ΔQ</span><span>%ΔP</span></span></p>
    <p><i>Qd</i> = <i>Qs</i></p>
    <p><i>SK</i> = <span class="frac"><span>1</span><span>2</span></span> × <i>Q</i> × (<i>P</i><sub>maks</sub> − <i>Pe</i>)</p>
    <p><span class="frac"><span><i>MU</i><sub>x</sub></span><span><i>P</i><sub>x</sub></span></span> = <span class="frac"><span><i>MU</i><sub>y</sub></span><span><i>P</i><sub>y</sub></span></span></p>
  </div>
</section>
`;
