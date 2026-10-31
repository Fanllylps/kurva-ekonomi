window.KURVA_CONTENT = window.KURVA_CONTENT || {};

KURVA_CONTENT.m4 = `
<article class="chapter" data-module="m4">
  <header class="chapter-hero">
    <div class="chapter-kicker"><a href="#/">Indeks materi</a><span>/</span><span>Pertemuan 04</span></div>
    <div class="chapter-title-row">
      <div>
        <p class="eyebrow">Elastisitas permintaan &amp; penawaran</p>
        <h1>Bukan hanya arah yang berubah. <em>Seberapa besar?</em></h1>
        <p class="chapter-lead">Hukum permintaan tahu ke mana jumlah bergerak. Elastisitas mengukur seberapa sensitif gerakan itu—dan apakah kenaikan harga benar-benar menambah penerimaan.</p>
      </div>
      <div class="chapter-stamp" aria-hidden="true">
        <span>04</span>
          <small>SEBERAPA<br>PEKA?</small>
      </div>
    </div>
    <div class="chapter-brief">
      <div class="brief-question">
        <span class="micro-label">Pertanyaan kunci</span>
        <p>Ketika harga berubah 1%, berapa persen jumlah yang diminta atau ditawarkan ikut berubah?</p>
      </div>
      <div class="brief-aims">
        <span class="micro-label">Setelah bab ini</span>
        <ul>
          <li>Menghitung Ed dengan metode titik tengah.</li>
          <li>Menghubungkan elastisitas dengan total penerimaan.</li>
          <li>Membaca elastisitas pendapatan, silang, dan penawaran.</li>
        </ul>
      </div>
    </div>
  </header>

  <nav class="chapter-map" aria-label="Isi pertemuan 4">
    <span class="map-label">Isi bab</span>
    <a href="#m4-rumus">Rumus</a>
    <a href="#m4-klasifikasi">Klasifikasi</a>
    <a href="#m4-faktor">Faktor</a>
    <a href="#m4-lab">Lab elastisitas</a>
    <a href="#m4-pendapatan">Pendapatan &amp; silang</a>
    <a href="#m4-penawaran">Penawaran</a>
    <a href="#m4-cek">Cek paham</a>
  </nav>

  <section class="lesson" id="m4-rumus">
    <header class="section-heading">
      <span class="section-no">4.1</span>
      <div>
        <p class="eyebrow">Definisi dan rumus</p>
        <h2>Elastisitas mengukur kepekaan, bukan besar perubahan.</h2>
      </div>
    </header>

    <div class="prose-grid">
      <div class="prose reveal">
        <p>Elastisitas mengukur seberapa responsif jumlah barang yang diminta atau ditawarkan terhadap perubahan faktor yang memengaruhinya, terutama harga. Konsep ini dipopulerkan Alfred Marshall; Sadono Sukirno menekankan bahwa perubahan harga kecil dapat menimbulkan perubahan permintaan besar bila permintaan sangat responsif.</p>
        <p>Karena itu, “harga naik 10% dan permintaan turun 20%” memberi informasi berbeda dari “harga naik 10% dan permintaan turun 2%”. Elastisitas merangkum keduanya menjadi satu angka yang bisa dibandingkan antarbarang.</p>
      </div>
      <aside class="margin-note reveal">
        <span class="note-no">Tanda negatif</span>
        <p>Karena kurva permintaan menurun, Ed mentahnya negatif. Dalam praktik, kita sering mengambil <strong>nilai absolut</strong> untuk menyebut kategori “elastis” atau “inelastis”.</p>
      </aside>
    </div>

    <div class="formula-showcase reveal">
      <div class="formula-showcase-label">
        <span class="micro-label">Rumus elastisitas permintaan harga</span>
        <p>Persentase perubahan jumlah dibagi persentase perubahan harga.</p>
      </div>
      <div class="formula-big">
        <span><i>Ed</i> =</span>
        <span class="frac"><span>% Δ<i>Q</i><sub>d</sub></span><span>% Δ<i>P</i></span></span>
        <span>=</span>
        <span class="ratio-equation" role="math" aria-label="Perubahan jumlah dibagi jumlah awal, lalu dibagi perubahan harga dibagi harga awal."><span class="ratio-term">(<span class="frac"><span><i>Q</i><sub>2</sub> − <i>Q</i><sub>1</sub></span><span><i>Q</i><sub>1</sub></span></span>)</span><span class="ratio-divide">÷</span><span class="ratio-term">(<span class="frac"><span><i>P</i><sub>2</sub> − <i>P</i><sub>1</sub></span><span><i>P</i><sub>1</sub></span></span>)</span></span>
      </div>
      <span class="formula-note">Untuk rentang perubahan yang cukup besar, gunakan metode titik tengah agar persentasenya simetris.</span>
    </div>

    <div class="midpoint-block reveal">
      <div class="midpoint-copy">
        <span class="micro-label">Metode titik tengah / busur</span>
        <h3>Mengapa memakai rata-rata?</h3>
        <p>Jika kita selalu membagi perubahan dengan nilai awal, kenaikan dari 10 ke 12 memberi persentase berbeda dari penurunan 12 ke 10. Metode titik tengah memakai rata-rata sebagai basis sehingga hasilnya tidak bergantung pada arah gerak.</p>
      </div>
      <div class="formula-card">
        <span class="micro-label">Rumus Sukirno</span>
        <p class="formula-main formula-fraction-line"><i>Ed</i> = <span class="ratio-equation" role="math" aria-label="Perubahan jumlah dibagi rata-rata jumlah, lalu dibagi perubahan harga dibagi rata-rata harga."><span class="ratio-term">(<span class="frac"><span><i>Q</i><sub>2</sub> − <i>Q</i><sub>1</sub></span><span>(<span class="frac"><span><i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub></span><span>2</span></span>)</span></span>)</span><span class="ratio-divide">÷</span><span class="ratio-term">(<span class="frac"><span><i>P</i><sub>2</sub> − <i>P</i><sub>1</sub></span><span>(<span class="frac"><span><i>P</i><sub>1</sub> + <i>P</i><sub>2</sub></span><span>2</span></span>)</span></span>)</span></span></p>
        <p class="formula-note">Ambil nilai absolut untuk klasifikasi permintaan.</p>
      </div>
    </div>

    <div class="step-example reveal">
      <div class="step-example-head">
        <span class="micro-label">Contoh dari materi</span>
        <span class="step-example-tag">harga naik Rp2.000</span>
      </div>
      <div class="step-example-grid">
        <div class="step-mini">
          <span>01 · Perubahan Q</span>
          <p class="math-line"><span class="frac"><span>80 − 100</span><span>90</span></span> = <strong>−22,2%</strong></p>
        </div>
        <div class="step-mini">
          <span>02 · Perubahan P</span>
          <p class="math-line"><span class="frac"><span>2.000</span><span>11.000</span></span> = <strong>18,2%</strong></p>
        </div>
        <div class="step-mini result">
          <span>03 · Bagi</span>
          <p class="math-line"><span class="frac"><span>22,2%</span><span>18,2%</span></span> ≈ <strong>1,22</strong></p>
          <em>Elastis</em>
        </div>
      </div>
      <p class="step-example-note">Harga naik dari Rp10.000 ke Rp12.000; jumlah diminta turun dari 100 ke 80 unit. Karena |Ed| &gt; 1, permintaan elastis.</p>
    </div>
  </section>

  <section class="lesson" id="m4-klasifikasi">
    <header class="section-heading">
      <span class="section-no">4.2</span>
      <div>
        <p class="eyebrow">Membaca koefisien</p>
        <h2>Lima kategori, satu garis bilangan.</h2>
      </div>
    </header>

    <div class="elasticity-spectrum reveal" aria-hidden="true">
      <div class="spectrum-line"></div>
      <div class="spectrum-mark mark-zero"><span>0</span><small>sempurna inelastis</small></div>
      <div class="spectrum-mark mark-one"><span>1</span><small>uniter</small></div>
      <div class="spectrum-mark mark-two"><span>&gt; 1</span><small>elastis</small></div>
      <div class="spectrum-mark mark-inf"><span>∞</span><small>sempurna elastis</small></div>
      <span class="spectrum-band band-in">inelastis</span>
      <span class="spectrum-band band-unit">uniter</span>
      <span class="spectrum-band band-el">elastis</span>
    </div>

    <div class="table-shell reveal">
      <table class="compare-table elasticity-table">
        <thead><tr><th>|Ed|</th><th>Kategori</th><th>Arti</th><th>Contoh</th></tr></thead>
        <tbody>
          <tr><td>&gt; 1</td><td><strong>Elastis</strong></td><td>Jumlah diminta berubah lebih besar dari perubahan harga.</td><td>Barang mewah, restoran, tiket wisata.</td></tr>
          <tr><td>= 1</td><td><strong>Elastis uniter</strong></td><td>Perubahan jumlah sebanding dengan perubahan harga.</td><td>Untuk ilustrasi: harga naik 10%, jumlah turun 10%.</td></tr>
          <tr><td>&lt; 1</td><td><strong>Inelastis</strong></td><td>Jumlah diminta berubah lebih kecil dari perubahan harga.</td><td>Beras, garam, obat vital.</td></tr>
          <tr><td>= 0</td><td><strong>Inelastis sempurna</strong></td><td>Jumlah diminta tidak berubah berapa pun harganya.</td><td>Obat yang wajib digunakan; kurva vertikal.</td></tr>
          <tr><td>∞</td><td><strong>Elastis sempurna</strong></td><td>Pada harga tertentu permintaan tak terbatas; kenaikan harga kecil menghilangkan permintaan.</td><td>Komoditas sangat homogen di pasar dengan banyak penjual; kurva horizontal.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="caution-box reveal">
      <span class="caution-mark">!</span>
      <p><strong>Elastis bukan berarti kemiringan garis yang sama di semua titik.</strong> Pada kurva permintaan linear, nilai absolut elastisitas berubah sepanjang kurva: bagian harga tinggi cenderung elastis, bagian harga rendah cenderung inelastis. Elastisitas bergantung pada rasio <span class="math"><span class="frac"><span>P</span><span>Q</span></span></span>, bukan hanya kemiringan garis.</p>
    </div>
  </section>

  <section class="lesson" id="m4-faktor">
    <header class="section-heading">
      <span class="section-no">4.3</span>
      <div>
        <p class="eyebrow">Kenapa sebagian barang lebih sensitif?</p>
        <h2>Tiga faktor utama, dua faktor tambahan.</h2>
      </div>
    </header>

    <div class="factor-cards">
      <article class="factor-detail reveal">
        <span class="factor-detail-no">01</span>
        <h3>Ketersediaan barang pengganti</h3>
        <p>Semakin banyak substitusi yang dekat, semakin elastis permintaan. Jika harga satu merek kaos naik, pembeli mudah beralih ke merek lain.</p>
        <span class="factor-pill">lebih banyak pengganti → lebih elastis</span>
      </article>
      <article class="factor-detail reveal">
        <span class="factor-detail-no">02</span>
        <h3>Proporsi pendapatan</h3>
        <p>Semakin besar porsi pengeluaran untuk barang itu, semakin elastis. Kenaikan harga motor atau TV membuat orang berpikir ulang; harga minuman ringan murah mungkin tidak.</p>
        <span class="factor-pill">porsi anggaran besar → lebih elastis</span>
      </article>
      <article class="factor-detail reveal">
        <span class="factor-detail-no">03</span>
        <h3>Jangka waktu</h3>
        <p>Dalam jangka panjang konsumen punya lebih banyak waktu mencari alternatif. Dua minggu setelah BBM naik mungkin belum banyak berubah; enam bulan kemudian bisa beralih ke transportasi umum.</p>
        <span class="factor-pill">lebih panjang waktu → lebih elastis</span>
      </article>
      <article class="factor-detail subtle reveal">
        <span class="factor-detail-no">04</span>
        <h3>Kebutuhan pokok vs kemewahan</h3>
        <p>Barang kebutuhan pokok cenderung inelastis karena sulit ditunda. Barang mewah cenderung elastis karena bisa dikurangi lebih dulu.</p>
        <span class="factor-pill">kebutuhan pokok → lebih inelastis</span>
      </article>
      <article class="factor-detail subtle reveal">
        <span class="factor-detail-no">05</span>
        <h3>Definisi pasar</h3>
        <p>Pasar yang sempit (satu merek) umumnya lebih elastis daripada kategori luas (semua minuman). Konsumen bisa berpindah merek tanpa meninggalkan kategori.</p>
        <span class="factor-pill">definisi sempit → lebih elastis</span>
      </article>
    </div>

    <div class="shadow-pricing reveal">
      <div>
        <p class="eyebrow">Implikasi bisnis</p>
        <h2>Elastisitas menentukan arah strategi harga.</h2>
      </div>
      <div class="pricing-pair">
        <div>
          <span class="micro-label">Permintaan elastis</span>
          <p>Hindari kenaikan harga besar. Diskon dapat mendorong lonjakan jumlah yang cukup untuk menaikkan penerimaan.</p>
        </div>
        <div>
          <span class="micro-label">Permintaan inelastis</span>
          <p>Kenaikan harga relatif kecil dapat menaikkan penerimaan, tetapi tetap perhatikan daya beli dan risiko reputasi.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="lesson" id="m4-lab">
    <header class="section-heading">
      <span class="section-no">4.4</span>
      <div>
        <p class="eyebrow">Lab 04 · kalkulator busur</p>
        <h2>Masukkan dua titik. Lihat reaksi dan penerimaannya.</h2>
      </div>
    </header>

    <div class="lab" id="lab-elasticity">
      <header class="lab-head">
        <div>
          <p class="eyebrow">Dari harga ke elastisitas</p>
          <h3>Hitung seperti ujian, lihat seperti grafik.</h3>
        </div>
        <span class="lab-badge">metode titik tengah</span>
      </header>
      <p class="lab-intro">Harga dalam <strong>ribu rupiah</strong>; Q (jumlah barang) dalam unit. P1 dan Q1 = harga dan jumlah awal; P2 dan Q2 = harga dan jumlah baru. Ed mengukur seberapa peka jumlah yang diminta terhadap harga. Coba preset, lalu ubah angkanya sendiri.</p>

      <div class="el-layout">
        <div class="el-input-panel">
          <div class="preset-row" data-el-presets>
            <button type="button" class="scenario-tab is-active" data-el-preset="phone">Ponsel</button>
            <button type="button" class="scenario-tab" data-el-preset="medicine">Obat vital</button>
            <button type="button" class="scenario-tab" data-el-preset="holiday">Liburan</button>
            <button type="button" class="scenario-tab" data-el-preset="rice">Beras</button>
          </div>

          <div class="el-input-grid">
            <label class="number-field">
              <span>Harga awal <em>P1</em></span>
              <div><span class="input-prefix">Rp</span><input type="number" min="1" max="999" step="1" value="10" data-el-p1></div>
              <small>ribu</small>
            </label>
            <label class="number-field">
              <span>Harga baru <em>P2</em></span>
              <div><span class="input-prefix">Rp</span><input type="number" min="1" max="999" step="1" value="12" data-el-p2></div>
              <small>ribu</small>
            </label>
            <label class="number-field">
              <span>Jumlah awal <em>Q1</em></span>
              <div><input type="number" min="1" max="99999" step="1" value="100" data-el-q1></div>
              <small>unit</small>
            </label>
            <label class="number-field">
              <span>Jumlah baru <em>Q2</em></span>
              <div><input type="number" min="0" max="99999" step="1" value="80" data-el-q2></div>
              <small>unit</small>
            </label>
          </div>

          <div class="el-result-card">
            <div class="el-result-main">
              <span class="micro-label">Kepekaan permintaan · Ed</span>
              <strong data-el-ed>1,22</strong>
              <span class="el-class-tag" data-el-class>Elastis</span>
            </div>
            <div class="elasticity-meter" aria-hidden="true">
              <div class="meter-track"><i data-el-marker></i></div>
              <div class="meter-labels"><span>0</span><span>1</span><span>2</span><span>3+</span></div>
            </div>
            <p class="el-interpretation" data-el-interpretation>Harga naik 1% → jumlah diminta turun sekitar 1,22%.</p>
          </div>

          <div class="el-revenue">
            <div class="revenue-head"><span class="micro-label">Total penerimaan · TR</span><span data-el-tr-note>harga naik, penerimaan turun</span></div>
            <div class="revenue-bars">
              <div class="revenue-row">
                <span>Sebelum</span>
                <div class="revenue-track"><i data-el-bar1 style="width:100%"></i></div>
                <strong data-el-tr1>Rp1.000.000</strong>
              </div>
              <div class="revenue-row">
                <span>Sesudah</span>
                <div class="revenue-track"><i data-el-bar2 style="width:96%"></i></div>
                <strong data-el-tr2>Rp960.000</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="el-visual-panel">
          <div class="plot" data-el-plot>
            <div class="plot-fallback">Menyiapkan kurva…</div>
          </div>
          <div class="el-live-steps" data-el-steps>
            <div><span>ΔQ</span><p>80 − 100 = <strong>−20</strong></p></div>
            <div><span>Rata-rata Q</span><p><span class="frac"><span>(100 + 80)</span><span>2</span></span> = <strong>90</strong></p></div>
            <div><span>%ΔQ</span><p><span class="frac"><span>−20</span><span>90</span></span> = <strong>−22,22%</strong></p></div>
            <div><span>ΔP</span><p>12 − 10 = <strong>2</strong></p></div>
            <div><span>Rata-rata P</span><p><span class="frac"><span>(10 + 12)</span><span>2</span></span> = <strong>11</strong></p></div>
            <div><span>%ΔP</span><p><span class="frac"><span>2</span><span>11</span></span> = <strong>18,18%</strong></p></div>
            <div class="live-total"><span>Ed</span><p><span class="frac"><span>22,22%</span><span>18,18%</span></span> = <strong>1,22</strong></p></div>
          </div>
        </div>
      </div>

      <div class="lab-takeaway" data-el-takeaway>
        <span class="micro-label">Baca hasilnya</span>
        <p>Permintaan elastis. Kenaikan harga sebesar 18,18% menurunkan jumlah yang diminta 22,22%; total penerimaan turun dari Rp1.000.000 menjadi Rp960.000.</p>
      </div>
    </div>
  </section>

  <section class="lesson" id="m4-revenue">
    <header class="section-heading">
      <span class="section-no">4.5</span>
      <div>
        <p class="eyebrow">Elastisitas &amp; total penerimaan</p>
        <h2>Harga naik belum tentu untung lebih besar.</h2>
      </div>
    </header>

    <div class="prose">
      <p><strong>Uji total penerimaan</strong> menghubungkan kepekaan permintaan dengan seluruh uang hasil penjualan (<span class="math"><i>TR</i> = <i>P</i> × <i>Q</i></span>). Jika permintaan elastis, kenaikan harga biasanya membuat TR turun. Jika inelastis, TR biasanya naik.</p>
    </div>

    <div class="revenue-rule-grid">
      <article class="revenue-rule reveal">
        <span class="rule-tag">|Ed| &gt; 1</span>
        <h3>Elastis</h3>
        <p><strong>Harga naik → TR turun.</strong> Jumlah yang hilang lebih besar dari tambahan harga per unit.</p>
        <span class="rule-arrow">P ↑ → TR ↓</span>
      </article>
      <article class="revenue-rule reveal">
        <span class="rule-tag">|Ed| = 1</span>
        <h3>Uniter</h3>
        <p><strong>TR mencapai titik ekstrem.</strong> Persentase kenaikan harga dan penurunan jumlah saling meniadakan.</p>
        <span class="rule-arrow">TR maksimum</span>
      </article>
      <article class="revenue-rule reveal">
        <span class="rule-tag">|Ed| &lt; 1</span>
        <h3>Inelastis</h3>
        <p><strong>Harga naik → TR naik.</strong> Jumlah yang berkurang relatif kecil dibanding tambahan penerimaan per unit.</p>
        <span class="rule-arrow">P ↑ → TR ↑</span>
      </article>
    </div>

    <div class="table-shell reveal">
      <table class="compare-table revenue-table">
        <thead><tr><th>Harga (Rp)</th><th>Q diminta</th><th>TR = P × Q</th><th>|Ed| di materi</th><th>Zona</th></tr></thead>
        <tbody>
          <tr><td>1.000</td><td>2.000</td><td>Rp2.000.000</td><td>3</td><td class="status-shortage">Elastis</td></tr>
          <tr><td>800</td><td>4.000</td><td>Rp3.200.000</td><td>1,4</td><td class="status-shortage">Elastis</td></tr>
          <tr class="row-equilibrium"><td>600</td><td>6.000</td><td>Rp3.600.000</td><td>5/7 ≈ 0,71</td><td>Mendekati uniter</td></tr>
          <tr><td>400</td><td>8.000</td><td>Rp3.200.000</td><td>1/3 ≈ 0,33</td><td class="status-surplus">Inelastis</td></tr>
          <tr><td>200</td><td>10.000</td><td>Rp2.000.000</td><td>Semakin kecil</td><td class="status-surplus">Inelastis</td></tr>
        </tbody>
      </table>
    </div>

    <div class="prose">
      <p>Data di atas menunjukkan pola yang penting: pada kurva permintaan garis lurus, elastisitas <em>tidak konstan</em>. Saat harga tinggi, Q relatif kecil sehingga rasio <span class="math"><span class="frac"><span>P</span><span>Q</span></span></span> besar dan permintaan lebih elastis. Saat harga rendah, rasio itu mengecil dan permintaan lebih inelastis. Total penerimaan memuncak di sekitar titik elastisitas uniter.</p>
    </div>
  </section>

  <section class="lesson" id="m4-pendapatan">
    <header class="section-heading">
      <span class="section-no">4.6</span>
      <div>
        <p class="eyebrow">Dua elastisitas lain</p>
        <h2>Harga bukan satu-satunya pemicu.</h2>
      </div>
    </header>

    <div class="two-formula-grid">
      <article class="formula-feature reveal">
        <div class="formula-feature-head">
          <span class="micro-label">Elastisitas pendapatan</span>
          <span class="feature-symbol">E<sub>y</sub></span>
        </div>
        <h3>Reaksi terhadap perubahan pendapatan</h3>
        <p class="formula-main"><i>Ey</i> = <span class="frac"><span>% Δ<i>Q</i></span><span>% Δ<i>Y</i></span></span></p>
        <div class="classification-list">
          <div><span class="cl-val">&gt; 1</span><p><strong>Barang mewah.</strong> Permintaan naik lebih cepat daripada pendapatan.</p></div>
          <div><span class="cl-val">0–1</span><p><strong>Barang normal / kebutuhan.</strong> Permintaan naik, tetapi lebih lambat.</p></div>
          <div><span class="cl-val">&lt; 0</span><p><strong>Barang inferior.</strong> Permintaan turun ketika pendapatan naik.</p></div>
        </div>
        <p class="formula-foot">Contoh: smartphone baru atau liburan luar negeri (mewah); beras dan gula (normal); mi instan dan baju bekas (inferior).</p>
      </article>

      <article class="formula-feature reveal">
        <div class="formula-feature-head">
          <span class="micro-label">Elastisitas silang</span>
          <span class="feature-symbol">E<sub>xy</sub></span>
        </div>
        <h3>Reaksi terhadap harga barang lain</h3>
        <p class="formula-main"><i>Exy</i> = <span class="frac"><span>% Δ<i>Q</i><sub>x</sub></span><span>% Δ<i>P</i><sub>y</sub></span></span></p>
        <div class="classification-list">
          <div><span class="cl-val">&gt; 0</span><p><strong>Substitusi.</strong> Harga Y naik → permintaan X naik (teh–kopi).</p></div>
          <div><span class="cl-val">&lt; 0</span><p><strong>Komplementer.</strong> Harga Y naik → permintaan X turun (mobil–bensin).</p></div>
          <div><span class="cl-val">= 0</span><p><strong>Tidak berhubungan.</strong> Harga Y tidak memengaruhi permintaan X.</p></div>
        </div>
        <p class="formula-foot">Contoh substitusi: harga mobil naik, permintaan bus kota dapat meningkat. Contoh komplementer: harga kopi naik, permintaan gula dapat menurun.</p>
      </article>
    </div>

    <div class="caution-box reveal">
      <span class="caution-mark">!</span>
      <p>Untuk elastisitas silang, <strong>tanda</strong> yang paling penting. Tanda positif menunjukkan substitusi; tanda negatif menunjukkan komplementer. Besaran angkanya menunjukkan seberapa kuat hubungan tersebut.</p>
    </div>
  </section>

  <section class="lesson" id="m4-penawaran">
    <header class="section-heading">
      <span class="section-no">4.7</span>
      <div>
        <p class="eyebrow">Sisi produsen</p>
        <h2>Seberapa cepat penawaran bisa menyesuaikan?</h2>
      </div>
    </header>

    <div class="prose-grid">
      <div class="prose reveal">
        <p>Elastisitas penawaran mengukur respons jumlah yang ditawarkan terhadap perubahan harga. Nilainya umumnya positif karena kenaikan harga biasanya mendorong produsen menawarkan lebih banyak—selama kapasitas memungkinkan.</p>
        <p><span class="math"><i>Es</i> = % ΔQ<sub>s</sub> ÷ % ΔP</span>, dengan metode titik tengah yang sama seperti elastisitas permintaan.</p>
      </div>
      <aside class="formula-card small reveal">
        <span class="micro-label">Rumus</span>
        <p class="formula-main"><i>Es</i> = <span class="frac"><span>% Δ<i>Q</i><sub>s</sub></span><span>% Δ<i>P</i></span></span></p>
        <p class="formula-note"><i>Q</i><sub>s</sub>: jumlah ditawarkan; <i>P</i>: harga. Gunakan rata-rata untuk perubahan yang cukup besar.</p>
      </aside>
    </div>

    <div class="table-shell reveal">
      <table class="compare-table elasticity-table">
        <thead><tr><th>Nilai Es</th><th>Kategori</th><th>Arti</th><th>Contoh</th></tr></thead>
        <tbody>
          <tr><td>&gt; 1</td><td><strong>Elastis</strong></td><td>Jumlah ditawarkan berubah lebih besar dari harga; mudah menambah produksi.</td><td>Pakaian, barang pabrikan.</td></tr>
          <tr><td>= 1</td><td><strong>Elastis uniter</strong></td><td>Perubahan penawaran sebanding dengan perubahan harga.</td><td>Barang elektronik tertentu, kipas angin.</td></tr>
          <tr><td>&lt; 1</td><td><strong>Inelastis</strong></td><td>Jumlah ditawarkan sulit ditambah dalam waktu singkat.</td><td>Mangga, padi—bergantung masa tanam dan panen.</td></tr>
          <tr><td>= 0</td><td><strong>Inelastis sempurna</strong></td><td>Jumlah ditawarkan tetap berapa pun harga.</td><td>Tanah, lukisan pelukis yang sudah meninggal.</td></tr>
          <tr><td>∞</td><td><strong>Elastis sempurna</strong></td><td>Produsen bersedia menawarkan berapa pun pada satu harga.</td><td>Contoh teoretis pada komoditas yang sangat mudah dipasok.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="supply-time reveal">
      <div class="supply-time-head">
        <span class="micro-label">Faktor waktu</span>
        <h3>Semakin lama, semakin banyak yang bisa diubah.</h3>
      </div>
      <div class="time-track">
        <article>
          <span>Jangka amat singkat</span>
          <div class="time-bar"><i style="width:24%"></i></div>
          <h4>Kapasitas terkunci</h4>
          <p>Lelang ikan tuna 100 kg: harga naik dua kali, jumlah tetap 100 kg. Es = 0.</p>
        </article>
        <article>
          <span>Jangka pendek</span>
          <div class="time-bar"><i style="width:58%"></i></div>
          <h4>Sebagian input bisa diubah</h4>
          <p>Konveksi menambah lembur dan bahan baku; kapasitas alat tetap. Es cenderung &lt; 1.</p>
        </article>
        <article>
          <span>Jangka panjang</span>
          <div class="time-bar"><i style="width:92%"></i></div>
          <h4>Semua faktor bisa disesuaikan</h4>
          <p>Pabrik mobil listrik membangun pabrik baru. Penawaran lebih elastis.</p>
        </article>
      </div>
    </div>

    <div class="two-column-notes">
      <div class="insight-note">
        <span class="micro-label">Biaya produksi</span>
        <p>Penawaran elastis jika menambah output hanya membutuhkan tambahan biaya kecil—misalnya konveksi kaos yang bisa menambah shift. Penawaran inelastis jika tambahan output membuat biaya melonjak atau butuh investasi besar.</p>
      </div>
      <div class="insight-note">
        <span class="micro-label">Waktu</span>
        <p>Dalam jangka sangat singkat, jumlah benar-benar tetap. Dalam jangka panjang, produsen bisa menambah mesin, pabrik, dan tenaga kerja, sehingga respons lebih besar.</p>
      </div>
    </div>
    <aside class="uts-source-marker" id="uts-ref-m4-elasticity" tabindex="-1" aria-label="Rujukan UTS tentang elastisitas penawaran">
      <span class="micro-label">Kisi-kisi UTS · Bab 04</span>
      <p><strong>Inti jawaban:</strong> Es = persentase perubahan Qs ÷ persentase perubahan P. Es &gt; 1 berarti penawaran elastis: persentase respons jumlah yang ditawarkan lebih besar daripada persentase perubahan harga.</p>
    </aside>
  </section>

  <section class="lesson" id="m4-cek">
    <header class="section-heading">
      <span class="section-no">4.8</span>
      <div>
        <p class="eyebrow">Rangkuman &amp; cek paham</p>
        <h2>Angka kecil yang mengubah strategi.</h2>
      </div>
    </header>

    <div class="cheat-sheet reveal">
      <div class="cheat-head">
        <span class="micro-label">Kartu ingat · pertemuan 04</span>
        <span class="cheat-code">Ed · Ey · Exy · Es</span>
      </div>
      <div class="cheat-grid">
        <div><strong>Ed busur</strong><p>%ΔQ ÷ %ΔP memakai rata-rata Q dan P; ambil nilai absolut.</p></div>
        <div><strong>Kategori</strong><p>&gt;1 elastis, =1 uniter, &lt;1 inelastis, 0 inelastis sempurna.</p></div>
        <div><strong>TR</strong><p>Elastis: P↑ membuat TR↓. Inelastis: P↑ membuat TR↑.</p></div>
        <div><strong>Ey</strong><p>&gt;1 mewah, 0–1 normal, &lt;0 inferior.</p></div>
        <div><strong>Exy</strong><p>Positif substitusi, negatif komplementer, nol tidak berhubungan.</p></div>
        <div><strong>Es</strong><p>Umumnya positif; lebih elastis dalam jangka panjang.</p></div>
      </div>
    </div>

    <div class="quiz" data-quiz="m4">
      <div class="quiz-heading">
        <div>
          <p class="eyebrow">Kuis · 4 soal</p>
          <h3>Hitung dulu, baru pilih.</h3>
        </div>
        <p class="quiz-progress" data-quiz-progress>0 / 4 dijawab</p>
      </div>

      <div class="quiz-question" data-answer="c">
        <p class="q-text"><span class="q-no">01</span> Harga naik 10% dan jumlah yang diminta turun 25%. Berapa nilai absolut elastisitas permintaannya?</p>
        <div class="options">
          <button type="button" class="option" data-opt="a"><span>A</span> 0,4</button>
          <button type="button" class="option" data-opt="b"><span>B</span> 1,0</button>
          <button type="button" class="option" data-opt="c"><span>C</span> 2,5</button>
          <button type="button" class="option" data-opt="d"><span>D</span> 15</button>
        </div>
        <p class="explain" hidden>|Ed| = <span class="frac"><span>25%</span><span>10%</span></span> = 2,5. Permintaan elastis karena lebih besar dari 1.</p>
      </div>

      <div class="quiz-question" data-answer="a">
        <p class="q-text"><span class="q-no">02</span> Jika permintaan elastis, penurunan harga akan membuat total penerimaan…</p>
        <div class="options">
          <button type="button" class="option" data-opt="a"><span>A</span> Naik, karena lonjakan jumlah diminta lebih besar dari penurunan harga per unit</button>
          <button type="button" class="option" data-opt="b"><span>B</span> Turun, karena harga lebih murah</button>
          <button type="button" class="option" data-opt="c"><span>C</span> Tetap, karena elastisitas tidak memengaruhi TR</button>
          <button type="button" class="option" data-opt="d"><span>D</span> Tidak dapat diketahui</button>
        </div>
        <p class="explain" hidden>Pada permintaan elastis, respons jumlah sangat kuat. Potongan harga dapat menaikkan TR karena kenaikan Q mengimbangi penurunan P.</p>
      </div>

      <div class="quiz-question" data-answer="d">
        <p class="q-text"><span class="q-no">03</span> Elastisitas silang antara barang X dan Y bernilai −0,8. Hubungan yang paling tepat adalah…</p>
        <div class="options">
          <button type="button" class="option" data-opt="a"><span>A</span> Substitusi</button>
          <button type="button" class="option" data-opt="b"><span>B</span> Barang inferior</button>
          <button type="button" class="option" data-opt="c"><span>C</span> Tidak berhubungan</button>
          <button type="button" class="option" data-opt="d"><span>D</span> Komplementer</button>
        </div>
        <p class="explain" hidden>Tanda negatif menunjukkan komplementer: kenaikan harga Y menurunkan permintaan X. Angka 0,8 menunjukkan kekuatan hubungan, bukan tanda.</p>
      </div>

      <div class="quiz-question" data-answer="b">
        <p class="q-text"><span class="q-no">04</span> Mengapa elastisitas penawaran umumnya lebih besar dalam jangka panjang?</p>
        <div class="options">
          <button type="button" class="option" data-opt="a"><span>A</span> Karena konsumen punya lebih banyak uang dalam jangka panjang</button>
          <button type="button" class="option" data-opt="b"><span>B</span> Karena produsen dapat menambah kapasitas dan seluruh faktor produksi</button>
          <button type="button" class="option" data-opt="c"><span>C</span> Karena harga selalu turun dalam jangka panjang</button>
          <button type="button" class="option" data-opt="d"><span>D</span> Karena hukum penawaran hanya berlaku jangka panjang</button>
        </div>
        <p class="explain" hidden>Dalam jangka panjang, produsen bisa membangun pabrik, menambah mesin, dan menyesuaikan tenaga kerja, sehingga penawaran lebih responsif terhadap harga.</p>
      </div>

      <div class="quiz-footer">
        <p class="quiz-result" data-quiz-result aria-live="polite">Pilih jawaban tanpa membuka catatan dulu.</p>
        <button type="button" class="text-button quiz-reset">Ulangi kuis</button>
      </div>
    </div>

    <div class="chapter-complete">
      <div>
        <span class="micro-label">Pertemuan 04</span>
        <h3>Sudah peka dengan elastisitas?</h3>
        <p>Progres disimpan hanya di perangkat ini.</p>
      </div>
      <button type="button" class="complete-button" data-complete="m4">
        <span data-complete-label>Tandai selesai</span>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9"/></svg>
      </button>
    </div>

    <nav class="chapter-pager" aria-label="Navigasi pertemuan">
      <a href="#/materi/3" class="pager-prev"><span>Sebelumnya</span><strong>03 · Permintaan &amp; penawaran</strong></a>
      <a href="#/materi/5" class="pager-next"><span>Pertemuan berikutnya</span><strong>05 · Pasar &amp; surplus</strong><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg></a>
    </nav>
  </section>
</article>
`;
