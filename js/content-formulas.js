window.KURVA_CONTENT = window.KURVA_CONTENT || {};

KURVA_CONTENT.rumus = `
<article class="chapter formula-page" data-module="rumus">
  <header class="chapter-hero formula-hero">
    <div class="chapter-kicker"><a href="#/">Indeks materi</a><span>/</span><span>Lembar rumus</span></div>
    <div class="chapter-title-row">
      <div>
        <p class="eyebrow">Panduan belajar · pertemuan 1–7</p>
        <h1>Rumus ekonomi, <em>dibaca pelan-pelan.</em></h1>
        <p class="chapter-lead">Huruf dan singkatan di rumus bukan kode rahasia. Mulai dari kamus simbol, ikuti contoh hitungnya, lalu lihat gambar untuk memahami ceritanya.</p>
      </div>
      <div class="chapter-stamp formula-stamp" aria-hidden="true">
        <span>Σ</span>
        <small>PANDUAN<br>RUMUS</small>
      </div>
    </div>
  <div class="formula-actions">
    <button type="button" class="btn btn-primary print-trigger" data-print><span>Cetak / simpan PDF</span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7V3h10v4M5 14H3V8h14v6h-2M5 11h10v6H5z"/></svg></button>
      <a class="btn btn-ghost" href="#f-kamus">Mulai dari arti simbol</a>
    </div>
  </header>

  <nav class="formula-jump" aria-label="Bagian lembar rumus">
    <a href="#f-kamus">Kamus simbol</a>
    <a href="#f-pilihan">01 · Pilihan</a>
    <a href="#f-pasar">02 · Pasar</a>
    <a href="#f-elastisitas">03 · Elastisitas</a>
    <a href="#f-surplus">04 · Surplus</a>
    <a href="#f-konsumen">05 · Konsumen</a>
    <a href="#f-produksi">06 · Produksi &amp; biaya</a>
    <a href="#f-jebakan">07 · Jebakan ujian</a>
  </nav>

  <section class="formula-section formula-glossary" id="f-kamus">
    <header class="formula-section-head">
      <span>?</span>
      <div><p class="eyebrow">Mulai dari sini</p><h2>Kamus huruf, tanda, dan singkatan.</h2></div>
    </header>
    <p class="formula-section-intro">Baca simbol sebagai cara menyingkat cerita. Arti beberapa huruf bisa berubah menurut bab—lihat keterangannya, bukan hanya hafalkan hurufnya.</p>

    <div class="formula-primer" aria-label="Cara membaca lambang perubahan">
      <div class="primer-card">
        <span class="primer-symbol">Δ (delta)</span>
        <strong>artinya perubahan</strong>
        <p>ΔQ = jumlah baru − jumlah awal</p>
        <small>Contoh: dari 100 ke 80 barang, ΔQ = 80 − 100 = −20.</small>
      </div>
      <div class="primer-card">
        <span class="primer-symbol">%Δ (persen perubahan)</span>
        <strong>seberapa besar perubahannya</strong>
        <p>perubahan ÷ nilai pembanding × 100%</p>
        <small>Tanda − berarti turun; tanda + berarti naik.</small>
      </div>
      <div class="primer-card">
        <span class="primer-symbol">1 dan 2 kecil</span>
        <strong>urutan waktu, bukan pangkat</strong>
        <p>P₁, Q₁ = keadaan awal<br>P₂, Q₂ = keadaan baru</p>
        <small>Huruf kecil di bawah disebut subskrip.</small>
      </div>
    </div>
    <p class="symbol-note"><strong>Tanda hitung:</strong> × berarti dikali, ÷ berarti dibagi, dan ½ berarti setengah. Jika angka dan huruf menempel—seperti 2P—artinya 2 × P. Kerjakan bagian di dalam tanda kurung lebih dulu.</p>

    <div class="formula-glossary-block">
      <h3>Pasar: harga, jumlah, dan titik temu</h3>
      <dl class="symbol-grid">
        <div><dt>Q</dt><dd><strong>Jumlah barang.</strong> Q berasal dari <i>quantity</i> (kuantitas/jumlah). Satuannya bisa unit, kilogram, atau ton.</dd></div>
        <div><dt>P</dt><dd><strong>Harga.</strong> P berasal dari <i>price</i>. Periksa satuannya: rupiah atau ribu rupiah.</dd></div>
        <div><dt>Qd</dt><dd><strong>Jumlah yang diminta pembeli</strong> pada suatu harga. d = <i>demand</i> (permintaan).</dd></div>
        <div><dt>Qs</dt><dd><strong>Jumlah yang ditawarkan penjual</strong> pada suatu harga. s = <i>supply</i> (penawaran).</dd></div>
        <div><dt>D · S</dt><dd><strong>Kurva permintaan · kurva penawaran.</strong> D menurun, S biasanya menaik pada grafik harga dan jumlah.</dd></div>
        <div><dt>E</dt><dd><strong>Titik keseimbangan pasar</strong> pada gambar—tempat kurva D dan S berpotongan.</dd></div>
        <div><dt><i>P</i><sup>*</sup> · <i>Q</i><sup>*</sup></dt><dd><strong>Harga dan jumlah keseimbangan.</strong> Tanda bintang berarti nilai pada titik keseimbangan.</dd></div>
        <div><dt>Pe · Qe</dt><dd><strong>Harga dan jumlah keseimbangan</strong> dengan huruf e dari <i>equilibrium</i> (keseimbangan). Maknanya sama dengan P* dan Q*.</dd></div>
        <div><dt>c, d, m, n</dt><dd><strong>Angka tetap dari soal</strong> dalam fungsi permintaan/penawaran, bukan singkatan yang perlu dicari artinya. Contoh: Qd = 100 − 2P; angka 100 dan 2 diberikan oleh model.</dd></div>
      </dl>
    </div>

    <div class="formula-glossary-block">
      <h3>Perubahan dan pilihan</h3>
      <dl class="symbol-grid">
        <div><dt>Δ</dt><dd><strong>Delta = perubahan.</strong> ΔP berarti perubahan harga; ΔQ berarti perubahan jumlah.</dd></div>
        <div><dt>%Δ</dt><dd><strong>Persentase perubahan.</strong> Dipakai agar perubahan harga dan jumlah yang satuannya berbeda bisa dibandingkan.</dd></div>
        <div><dt>|Ed|</dt><dd><strong>Nilai absolut Ed.</strong> Garis tegak mengabaikan tanda minus; yang dibandingkan hanya besar responsnya.</dd></div>
        <div><dt>OC</dt><dd><strong>Biaya peluang</strong> (<i>opportunity cost</i>): nilai alternatif terbaik yang dilepas saat memilih.</dd></div>
        <div><dt>MB</dt><dd><strong>Manfaat tambahan</strong> (<i>marginal benefit</i>): manfaat dari satu langkah atau satu unit tambahan.</dd></div>
        <div><dt>MC</dt><dd><strong>Biaya tambahan</strong> (<i>marginal cost</i>): biaya untuk satu langkah atau satu unit tambahan.</dd></div>
      </dl>
    </div>

    <div class="formula-glossary-block">
      <h3>Elastisitas dan penerimaan</h3>
      <dl class="symbol-grid">
        <div><dt>Ed</dt><dd><strong>Elastisitas harga permintaan</strong> (<i>elasticity of demand</i>): seberapa peka jumlah yang diminta terhadap perubahan harga.</dd></div>
        <div><dt>Ey</dt><dd><strong>Elastisitas pendapatan:</strong> seberapa peka permintaan terhadap perubahan pendapatan (Y).</dd></div>
        <div><dt>Exy</dt><dd><strong>Elastisitas silang:</strong> perubahan permintaan barang X akibat perubahan harga barang lain, Y.</dd></div>
        <div><dt>Es</dt><dd><strong>Elastisitas penawaran</strong> (<i>elasticity of supply</i>): seberapa peka jumlah yang dijual terhadap perubahan harga.</dd></div>
        <div><dt>TR</dt><dd><strong>Total penerimaan penjualan</strong> (<i>total revenue</i>): harga per barang × jumlah barang yang terjual.</dd></div>
      </dl>
      <p class="symbol-note"><strong>Catatan huruf Y:</strong> pada rumus elastisitas pendapatan, Y berarti pendapatan. Pada contoh konsumen, X dan Y hanya nama untuk dua jenis barang. Arti huruf mengikuti konteksnya.</p>
    </div>

    <div class="formula-glossary-block">
      <h3>Surplus, kebijakan, dan konsumen</h3>
      <dl class="symbol-grid">
        <div><dt>SK</dt><dd><strong>Surplus konsumen:</strong> selisih antara batas harga yang rela dibayar pembeli dan harga yang benar-benar dibayar.</dd></div>
        <div><dt>SP</dt><dd><strong>Surplus produsen:</strong> selisih antara harga yang diterima penjual dan batas harga minimum yang rela diterima.</dd></div>
        <div><dt>ST</dt><dd><strong>Surplus total</strong> = SK + SP. Ukuran manfaat gabungan pembeli dan penjual dalam model pasar.</dd></div>
        <div><dt>HET</dt><dd><strong>Harga Eceran Tertinggi:</strong> batas harga paling tinggi yang boleh dikenakan. Jika di bawah harga keseimbangan, barang bisa kurang.</dd></div>
        <div><dt>Pmaks · Pmin</dt><dd><strong>Harga maksimum pada kurva permintaan · harga minimum pada kurva penawaran.</strong> Keduanya membantu menghitung luas surplus.</dd></div>
        <div><dt>I</dt><dd><strong>Pendapatan atau anggaran</strong> yang tersedia untuk belanja.</dd></div>
        <div><dt>Px · Py</dt><dd><strong>Harga barang X · harga barang Y.</strong> Huruf x dan y kecil menandai barang yang berbeda.</dd></div>
        <div><dt>U</dt><dd><strong>Utilitas:</strong> ukuran/model untuk mewakili tingkat kepuasan. Angkanya bukan rupiah.</dd></div>
        <div><dt>TU</dt><dd><strong>Utilitas total:</strong> seluruh kepuasan dari jumlah barang yang dikonsumsi.</dd></div>
        <div><dt>MU</dt><dd><strong>Utilitas marginal</strong> (<i>marginal utility</i>): tambahan kepuasan dari satu unit barang berikutnya. Sederhananya: “tambahan puasnya berapa?”</dd></div>
        <div><dt>MRS</dt><dd><strong>Tingkat kesediaan menukar barang</strong> (<i>marginal rate of substitution</i>): berapa Y yang rela dilepas untuk mendapat satu X tambahan, dengan kepuasan tetap.</dd></div>
      </dl>
    </div>

    <div class="formula-glossary-block">
      <h3>Produksi dan biaya</h3>
      <dl class="symbol-grid">
        <div><dt>Q</dt><dd><strong>Jumlah output</strong> yang diproduksi. Arti simbol dapat berbeda menurut konteks bab.</dd></div>
        <div><dt>K · L · R · T</dt><dd><strong>Input fungsi produksi:</strong> modal, tenaga kerja, sumber daya alam/material, dan teknologi.</dd></div>
        <div><dt>TP · AP · MP</dt><dd><strong>Produk total, rata-rata, dan marginal.</strong> MP = ΔTP ÷ ΔL; tambahan output dari tambahan tenaga kerja.</dd></div>
        <div><dt>FC · VC · TC</dt><dd><strong>Biaya tetap, variabel, dan total.</strong> TC = FC + VC; jika v konstan, VC = vQ.</dd></div>
        <div><dt>AFC · AVC · ATC</dt><dd><strong>Biaya tetap, variabel, dan total rata-rata.</strong> ATC = AFC + AVC.</dd></div>
        <div><dt>MC</dt><dd><strong>Biaya marginal</strong> (<i>marginal cost</i>): perubahan biaya total akibat perubahan output.</dd></div>
        <div><dt>MR</dt><dd><strong>Penerimaan marginal</strong> (<i>marginal revenue</i>): tambahan penerimaan dari penjualan output tambahan.</dd></div>
        <div><dt>BEP</dt><dd><strong>Titik impas</strong> (<i>break-even point</i>): jumlah output saat penerimaan total sama dengan biaya total.</dd></div>
        <div><dt>v</dt><dd><strong>Biaya variabel per unit.</strong> Pada BEP unit, kontribusi per unit = P − v.</dd></div>
      </dl>
    </div>

    <div class="formula-glossary-block">
      <h3>Singkatan dan istilah sehari-hari</h3>
      <dl class="symbol-grid symbol-grid-compact">
        <div><dt>RT · PT · AP · LN</dt><dd>Label pada diagram pelaku ekonomi: <strong>rumah tangga</strong>, <strong>perusahaan</strong>, <strong>pemerintah</strong>, dan <strong>luar negeri</strong>. Ini penanda singkat di diagram.</dd></div>
        <div><dt>IC</dt><dd><i>Indifference curve</i> (kurva indiferen): garis yang menghubungkan pilihan barang dengan tingkat kepuasan yang sama. IC₂ yang lebih jauh dari titik nol menunjukkan kepuasan lebih tinggi daripada IC₁.</dd></div>
        <div><dt>PDB</dt><dd>Produk Domestik Bruto: nilai barang dan jasa akhir yang dihasilkan di dalam suatu negara.</dd></div>
        <div><dt>PDRB</dt><dd>Produk Domestik Regional Bruto: ukuran produksi untuk suatu daerah/provinsi.</dd></div>
        <div><dt>IHK</dt><dd>Indeks Harga Konsumen: ukuran perubahan harga barang dan jasa yang biasa dibeli rumah tangga.</dd></div>
        <div><dt>IHSG</dt><dd>Indeks Harga Saham Gabungan: gambaran pergerakan saham yang tercatat di Bursa Efek Indonesia.</dd></div>
        <div><dt>BBM</dt><dd>Bahan Bakar Minyak.</dd></div>
        <div><dt>UMKM</dt><dd>Usaha Mikro, Kecil, dan Menengah.</dd></div>
        <div><dt>BUMN · BUMD</dt><dd>Badan Usaha Milik Negara · Badan Usaha Milik Daerah.</dd></div>
        <div><dt>KOL</dt><dd><i>Key Opinion Leader</i> (tokoh berpengaruh): orang yang pendapat atau rekomendasinya dapat memengaruhi pilihan orang lain, misalnya kreator konten.</dd></div>
        <div><dt>SEO</dt><dd><i>Search Engine Optimization</i>: cara mengatur situs dan kontennya agar lebih mudah ditemukan lewat mesin pencari.</dd></div>
        <div><dt>AI</dt><dd><i>Artificial Intelligence</i> (kecerdasan buatan): teknologi yang menjalankan tugas yang biasanya memerlukan kecerdasan manusia.</dd></div>
        <div><dt>QRIS</dt><dd><i>Quick Response Code Indonesian Standard</i>: standar kode QR nasional agar pembayaran digital bisa dilakukan lintas penyedia.</dd></div>
        <div><dt>E-commerce</dt><dd>Jual-beli barang atau jasa melalui internet.</dd></div>
        <div><dt>Fintech</dt><dd><i>Financial technology</i>: layanan keuangan yang menggunakan teknologi, misalnya dompet digital atau pembayaran melalui aplikasi.</dd></div>
        <div><dt>Startup</dt><dd>Usaha rintisan yang sedang mengembangkan produk atau cara usaha baru; istilah ini bukan singkatan.</dd></div>
        <div><dt>Cloud</dt><dd>Layanan komputasi atau penyimpanan melalui internet, sehingga perusahaan tidak harus memiliki semua server sendiri.</dd></div>
      </dl>
    </div>

    <div class="formula-reading-visual" aria-label="Cara membaca elastisitas dengan contoh">
      <div class="reading-visual-head"><span class="micro-label">Contoh baca, bukan hafalan</span><h3>Ed = 1,22 itu maksudnya apa?</h3></div>
      <div class="reading-visual-flow">
        <div><span class="reading-big">Harga +1%</span><small>harga naik satu persen</small></div>
        <span class="reading-arrow" aria-hidden="true">→</span>
        <div><span class="reading-big">Jumlah −1,22%</span><small>jumlah yang diminta turun kira-kira 1,22%</small></div>
        <span class="reading-arrow" aria-hidden="true">→</span>
        <div class="reading-result"><span class="reading-big">1,22 &gt; 1</span><small>respons jumlah lebih besar: permintaan elastis</small></div>
      </div>
      <p>Untuk besaran, Ed memakai nilai absolut. Tanda turun tetap diceritakan dengan kata-kata, walaupun nilai kategorinya ditulis positif.</p>
    </div>
  </section>

  <section class="formula-section" id="f-pilihan">
    <header class="formula-section-head">
      <span>01</span>
      <div><p class="eyebrow">Kelangkaan &amp; pilihan</p><h2>Sebelum menghitung pasar.</h2></div>
    </header>
    <div class="formula-card-grid">
      <article class="formula-sheet-card">
        <span class="sheet-label">Biaya peluang</span>
        <p class="formula-main">OC = nilai alternatif terbaik yang tidak dipilih</p>
        <p>OC adalah singkatan dari <i>opportunity cost</i> (biaya peluang). Bukan jumlah semua alternatif dan bukan hanya uang yang keluar.</p>
        <a href="#/materi/1">Latihan di pertemuan 01 →</a>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Keputusan marginal</span>
        <p class="formula-main">Lakukan jika <i>MB</i> &gt; <i>MC</i></p>
        <p>MB = manfaat tambahan; MC = biaya tambahan. Ambil satu langkah lagi hanya jika manfaat tambahan melebihi biaya tambahannya.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Tiga pertanyaan</span>
        <p class="formula-main">What · How · For whom</p>
        <p>Apa yang diproduksi, bagaimana caranya, dan siapa yang mendapat hasilnya.</p>
      </article>
      <article class="formula-sheet-card accent-sheet">
        <span class="sheet-label">Harga hotel dinamis</span>
        <p class="formula-main">Sisa kamar (%) = <span class="frac"><span>kamar tersisa</span><span>total kamar</span></span> × 100%</p>
        <p>&gt;60% sisa kamar = dasar; 20–60% = menengah; &lt;20% = tinggi. Ini aturan latihan hotel di situs, bukan aturan baku semua hotel.</p>
      </article>
    </div>
    <div class="formula-worked">
      <div class="worked-heading"><span class="micro-label">Contoh dengan angka</span><h3>Memilih iklan: apa yang dikorbankan?</h3></div>
      <div class="worked-choice-visual" aria-label="Perbandingan potensi omzet dua strategi">
        <div><span>Iklan dipilih</span><strong>Rp45 juta</strong><small>yang diharapkan didapat</small></div>
        <span class="worked-choice-arrow" aria-hidden="true">→</span>
        <div class="worked-choice-cost"><span>Alternatif terbaik yang dilepas</span><strong>Rp40 juta</strong><small>inilah biaya peluang (OC)</small></div>
      </div>
      <p class="worked-explanation">Jangan jumlahkan semua alternatif yang tidak dipilih. Cari satu alternatif terbaik yang dilepas. Untuk keputusan tambahan: jika manfaat satu iklan tambahan Rp100 ribu dan biayanya Rp70 ribu, MB &gt; MC, jadi langkah itu masih layak.</p>
    </div>
  </section>

  <section class="formula-section" id="f-pasar">
    <header class="formula-section-head">
      <span>02</span>
      <div><p class="eyebrow">Permintaan, penawaran, keseimbangan</p><h2>Fungsi dan titik temu.</h2></div>
    </header>
    <div class="formula-card-grid">
      <article class="formula-sheet-card wide-sheet">
        <span class="sheet-label">Bentuk umum</span>
        <div class="sheet-math-row">
          <p class="formula-main"><i>Qd</i> = c − d<i>P</i></p>
          <p class="formula-main"><i>Qs</i> = −m + n<i>P</i></p>
          <p class="formula-main"><i>Qd</i> = <i>Qs</i></p>
        </div>
        <p><i>Qd</i>: jumlah yang ingin dibeli; <i>Qs</i>: jumlah yang ingin dijual; <i>P</i>: harga. Huruf kecil adalah angka dari soal. Harga keseimbangan ditemukan saat jumlah beli = jumlah jual.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Koordinat ekuilibrium</span>
        <p class="formula-main"><i>P</i><sup>*</sup> = <span class="frac"><span>c + m</span><span>d + n</span></span></p>
        <p>Masukkan P* ke salah satu rumus jumlah untuk mencari Q*. Jika Qs ditulis −m + nP, saat menyamakan fungsi, −m pindah ruas menjadi +m.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Membaca pergeseran</span>
        <p class="formula-main">D naik → D bergeser kanan</p>
        <p>Harga ↑, jumlah ↑. S naik → S bergeser kanan: harga ↓, jumlah ↑. Harga sendiri hanya menggerakkan titik di sepanjang kurva.</p>
        <a href="#/materi/3">Lab pasar →</a>
      </article>
    </div>
    <div class="formula-worked market-worked">
      <div class="worked-heading"><span class="micro-label">Contoh dari lab pasar</span><h3>Ikuti angka sampai menemukan titik temu.</h3></div>
      <div class="market-walkthrough">
        <div><span class="walk-no">01</span><strong>Samakan jumlah</strong><code>100 − 2P = −20 + 4P</code><p>Jumlah yang mau dibeli harus sama dengan yang mau dijual.</p></div>
        <span class="reading-arrow" aria-hidden="true">→</span>
        <div><span class="walk-no">02</span><strong>Cari harga</strong><code>120 = 6P → P = 20</code><p>Harga P dihitung dalam ribu rupiah.</p></div>
        <span class="reading-arrow" aria-hidden="true">→</span>
        <div class="market-walk-result"><span class="walk-no">03</span><strong>Masukkan ke rumus jumlah</strong><code>Q = 100 − 2(20) = 60</code><p>Hasilnya: Rp20.000 dan 60 unit.</p></div>
      </div>
      <div class="market-visual-key"><span><i class="market-dot demand-dot"></i>Kurva D: pembeli</span><span class="market-visual-center">D bertemu S = E</span><span><i class="market-dot supply-dot"></i>Kurva S: penjual</span></div>
    </div>
  </section>

  <section class="formula-section" id="f-elastisitas">
    <header class="formula-section-head">
      <span>03</span>
      <div><p class="eyebrow">Respons terhadap perubahan</p><h2>Elastisitas dan penerimaan.</h2></div>
    </header>
    <div class="formula-card-grid">
      <article class="formula-sheet-card span-two">
        <span class="sheet-label">Elastisitas harga permintaan · metode titik tengah</span>
        <p class="formula-main formula-with-fraction"><i>Ed</i> = <span class="ratio-equation" role="math" aria-label="Perubahan persentase jumlah dibagi perubahan persentase harga; masing-masing dihitung dengan rata-rata titik awal dan titik akhir."><span class="ratio-term">(<span class="frac"><span><i>Q</i><sub>2</sub> − <i>Q</i><sub>1</sub></span><span>(<span class="frac"><span><i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub></span><span>2</span></span>)</span></span>)</span><span class="ratio-divide">÷</span><span class="ratio-term">(<span class="frac"><span><i>P</i><sub>2</sub> − <i>P</i><sub>1</sub></span><span>(<span class="frac"><span><i>P</i><sub>1</sub> + <i>P</i><sub>2</sub></span><span>2</span></span>)</span></span>)</span></span></p>
        <p>Ed mengukur respons jumlah terhadap harga. Saat memberi nama kategori, gunakan nilai absolut: abaikan tanda minus, bukan arah ceritanya.</p>
        <a href="#/materi/4">Kalkulator elastisitas →</a>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Kategori</span>
        <div class="mini-table">
          <div><span>|Ed| &gt; 1</span><strong>Elastis</strong></div>
          <div><span>= 1</span><strong>Uniter</strong></div>
          <div><span>&lt; 1</span><strong>Inelastis</strong></div>
          <div><span>= 0</span><strong>Inelastis sempurna</strong></div>
        </div>
        <p>|Ed| membandingkan persentase perubahan jumlah dengan persentase perubahan harga. “Uniter” artinya keduanya berubah dengan persentase yang sama.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Uji total penerimaan</span>
        <p class="formula-main"><i>TR</i> = <i>P</i> × <i>Q</i></p>
        <p>TR berarti total uang penjualan. Jika permintaan elastis, harga naik biasanya membuat TR turun; jika inelastis, TR biasanya naik.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Elastisitas pendapatan</span>
        <p class="formula-main"><i>Ey</i> = <span class="frac"><span>%ΔQ</span><span>%ΔY</span></span></p>
        <p>Y di sini berarti pendapatan: &gt;1 biasanya barang mewah; 0–1 barang normal; &lt;0 barang inferior.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Elastisitas silang</span>
        <p class="formula-main"><i>Exy</i> = <span class="frac"><span>%ΔQ<sub>x</sub></span><span>%ΔP<sub>y</sub></span></span></p>
        <p>Perubahan permintaan X dibanding perubahan harga Y: tanda + biasanya barang pengganti; tanda − biasanya barang pelengkap.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Elastisitas penawaran</span>
        <p class="formula-main"><i>Es</i> = <span class="frac"><span>%ΔQ<sub>s</sub></span><span>%ΔP</span></span></p>
        <p>Umumnya positif. Lebih elastis dalam jangka panjang ketika kapasitas dapat disesuaikan.</p>
      </article>
    </div>
    <div class="formula-worked elasticity-worked">
      <div class="worked-heading"><span class="micro-label">Contoh dari kalkulator</span><h3>Kenapa hasilnya 1,22?</h3></div>
      <div class="elasticity-visual" aria-label="Harga naik 18,18 persen sementara jumlah yang diminta turun 22,22 persen">
        <div class="elasticity-change price-change"><span>Harga</span><strong>Rp10 ribu → Rp12 ribu</strong><i style="--change-width:72%"></i><small>naik 2 ÷ rata-rata 11 = +18,18%</small></div>
        <div class="elasticity-compare" aria-hidden="true">dibandingkan</div>
        <div class="elasticity-change quantity-change"><span>Jumlah dibeli</span><strong>100 → 80 unit</strong><i style="--change-width:88%"></i><small>turun 20 ÷ rata-rata 90 = −22,22%</small></div>
      </div>
      <div class="elasticity-answer"><span>22,22% ÷ 18,18%</span><strong>= 1,22</strong><p>Setiap perubahan harga 1% berkaitan dengan perubahan jumlah sekitar 1,22% pada contoh ini. Karena lebih dari 1, permintaan disebut elastis.</p></div>
      <p class="worked-explanation">Rumus memakai rata-rata agar perhitungan dari harga lama ke baru memberi hasil yang sama jika arah perbandingannya dibalik. TR juga bisa dicek langsung: Rp10.000 × 100 = Rp1.000.000; Rp12.000 × 80 = Rp960.000.</p>
    </div>
  </section>

  <section class="formula-section" id="f-surplus">
    <header class="formula-section-head">
      <span>04</span>
      <div><p class="eyebrow">Kesejahteraan &amp; kebijakan</p><h2>Luas segitiga di sekitar ekuilibrium.</h2></div>
    </header>
    <div class="formula-card-grid">
      <article class="formula-sheet-card">
        <span class="sheet-label">Surplus konsumen</span>
        <p class="formula-main">SK = <span class="frac"><span>1</span><span>2</span></span> × Q × (P<sub>maks</sub> − Pe)</p>
        <p>Gunakan saat pasar seimbang tanpa intervensi dan kurvanya berupa garis lurus. <i>P</i><sub>maks</sub> adalah titik potong kurva permintaan dengan sumbu harga.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Surplus produsen</span>
        <p class="formula-main">SP = <span class="frac"><span>1</span><span>2</span></span> × Q × (Pe − P<sub>min</sub>)</p>
        <p><i>P</i><sub>min</sub> adalah titik potong kurva penawaran dengan sumbu harga.</p>
      </article>
      <article class="formula-sheet-card accent-sheet">
        <span class="sheet-label">Surplus total</span>
        <p class="formula-main">ST = SK + SP</p>
        <p>Satuan mengikuti satuan P dan Q. Jika P dalam ribu rupiah dan Q dalam unit, hasilnya dalam ribu rupiah.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Kebijakan harga</span>
        <p class="formula-main">HET &lt; Pe → jumlah yang ingin dibeli &gt; yang tersedia</p>
        <p class="formula-main">Harga dasar &gt; Pe → kelebihan penawaran</p>
        <p>Patokan harga hanya mengubah pasar jika HET berada di bawah Pe atau harga dasar berada di atas Pe.</p>
      </article>
      <article class="formula-sheet-card wide-sheet">
        <span class="sheet-label">Pajak &amp; subsidi</span>
        <div class="policy-formula-row">
          <p><strong>Pajak</strong> menggeser S ke kiri/atas → harga dibayar konsumen naik, jumlah turun.</p>
          <p><strong>Subsidi</strong> menggeser S ke kanan/bawah → harga dibayar konsumen turun, jumlah naik.</p>
        </div>
      </article>
    </div>
    <div class="formula-worked surplus-worked">
      <div class="worked-heading"><span class="micro-label">Contoh dan gambar</span><h3>Rumus surplus adalah luas dua segitiga.</h3></div>
      <div class="surplus-formula-visual" aria-label="Ilustrasi segitiga surplus konsumen dan produsen">
        <div class="triangle-equation consumer-triangle"><span class="triangle-shape" aria-hidden="true"></span><div><strong>SK · manfaat pembeli</strong><code><span class="frac"><span>1</span><span>2</span></span> × 60 × (50 − 20) = 900</code><small>Setengah × alas (jumlah) × tinggi (selisih harga).</small></div></div>
        <div class="triangle-equation producer-triangle"><span class="triangle-shape" aria-hidden="true"></span><div><strong>SP · manfaat penjual</strong><code><span class="frac"><span>1</span><span>2</span></span> × 60 × (20 − 5) = 450</code><small>Semua angka ini dalam ribu rupiah × unit.</small></div></div>
      </div>
      <div class="surplus-total-visual"><span>Rp900.000 + Rp450.000</span><strong>= Rp1.350.000 surplus total</strong></div>
      <p class="worked-explanation">Angka 900 dan 450 masih dalam ribu rupiah karena harga pada contoh ditulis dalam ribuan. Setelah dikalikan jumlah unit, sebut hasil akhirnya Rp900.000 dan Rp450.000.</p>
    </div>
  </section>

  <section class="formula-section" id="f-konsumen">
    <header class="formula-section-head">
      <span>05</span>
      <div><p class="eyebrow">Perilaku konsumen</p><h2>Dari utilitas ke titik singgung.</h2></div>
    </header>
    <div class="formula-card-grid">
      <article class="formula-sheet-card">
        <span class="sheet-label">Utilitas marginal</span>
        <p class="formula-main"><i>MU</i> = <span class="frac"><span>Δ<i>TU</i></span><span>Δ<i>Q</i></span></span></p>
        <p>MU adalah tambahan kepuasan dari satu unit lagi; TU adalah seluruh kepuasan. Saat MU = 0, TU berhenti bertambah. Hukum Gossen I: tambahan puas biasanya makin kecil.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Garis anggaran</span>
        <p class="formula-main"><i>I</i> = <i>Px</i>·<i>X</i> + <i>Py</i>·<i>Y</i></p>
        <p>Titik potong sumbu X = <span class="frac"><span>I</span><span>Px</span></span>; sumbu Y = <span class="frac"><span>I</span><span>Py</span></span>. Kemiringan = −<span class="frac"><span>Px</span><span>Py</span></span>. Pendapatan naik → garis bergeser sejajar ke luar.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">MRS</span>
        <p class="formula-main"><i>MRS</i><sub>xy</sub> = <span class="frac"><span><i>MU</i><sub>x</sub></span><span><i>MU</i><sub>y</sub></span></span></p>
        <p>Jumlah Y yang rela dilepas untuk satu unit X tambahan, dengan kepuasan tetap.</p>
      </article>
      <article class="formula-sheet-card accent-sheet">
        <span class="sheet-label">Keseimbangan konsumen</span>
        <p class="formula-main"><i>MRS</i> = <span class="frac"><span><i>P</i><sub>x</sub></span><span><i>P</i><sub>y</sub></span></span></p>
        <p class="formula-main"><span class="frac"><span><i>MU</i><sub>x</sub></span><span><i>P</i><sub>x</sub></span></span> = <span class="frac"><span><i>MU</i><sub>y</sub></span><span><i>P</i><sub>y</sub></span></span></p>
        <p>Titik singgung kurva indiferen tertinggi dengan garis anggaran; seluruh anggaran habis.</p>
        <a href="#/materi/6">Lab konsumen →</a>
      </article>
      <article class="formula-sheet-card wide-sheet">
        <span class="sheet-label">Contoh U = X·Y</span>
        <div class="sheet-math-row">
          <p class="formula-main"><i>MUx</i> = Y</p>
          <p class="formula-main"><i>MUy</i> = X</p>
          <p class="formula-main"><span class="frac"><span><i>Y</i></span><span><i>P</i><sub>x</sub></span></span> = <span class="frac"><span><i>X</i></span><span><i>P</i><sub>y</sub></span></span></p>
        </div>
        <p>Artinya: anggaran 120 ribu rupiah; kopi (X) 10 ribu; roti (Y) 5 ribu. Syarat optimum memberi Y = 2X. Anggaran: 10X + 5(2X) = 120, jadi X = 6 kopi dan Y = 12 roti. U = 72 adalah skor model kepuasan, bukan Rp72.</p>
      </article>
    </div>
    <div class="formula-worked consumer-worked">
      <div class="worked-heading"><span class="micro-label">Terjemahkan rumus ke keputusan</span><h3>MU per rupiah harus seimbang.</h3></div>
      <div class="consumer-balance-visual">
        <div><span>Setiap Rp1.000 untuk kopi</span><strong>MUx ÷ Px = 1,2</strong><small>tambahan kepuasan per Rp1.000</small></div>
        <span class="balance-equals" aria-label="sama dengan">=</span>
        <div><span>Setiap Rp1.000 untuk roti</span><strong>MUy ÷ Py = 1,2</strong><small>tambahan kepuasan per Rp1.000</small></div>
      </div>
      <p class="worked-explanation">Kalau satu barang memberi lebih banyak tambahan kepuasan per Rp1.000 yang dibelanjakan, pindahkan sebagian anggaran ke barang itu. Berhenti saat tambahan kepuasan per Rp1.000 kedua barang sama—dan seluruh anggaran sudah terpakai.</p>
    </div>
  </section>

  <section class="formula-section" id="f-produksi">
    <header class="formula-section-head">
      <span>06</span>
      <div><p class="eyebrow">Produksi, biaya, dan titik impas</p><h2>Input menjadi output; output menentukan biaya.</h2></div>
    </header>
    <div class="formula-card-grid">
      <article class="formula-sheet-card">
        <span class="sheet-label">Fungsi produksi</span>
        <p class="formula-main"><i>Q</i> = <i>f</i>(<i>K</i>, <i>L</i>, <i>R</i>, <i>T</i>)</p>
        <p>Jumlah output bergantung pada modal, tenaga kerja, sumber daya/material, dan teknologi yang dipakai.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Produktivitas</span>
        <p class="formula-main">Produktivitas = <span class="frac"><span>Output</span><span>Input</span></span></p>
        <p>Nyatakan jenis input dan satuannya. Contoh: paket per jam kerja.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Produk marginal</span>
        <p class="formula-main"><i>MP</i> = <span class="frac"><span>Δ<i>TP</i></span><span>Δ<i>L</i></span></span></p>
        <p>Tambahan output dari tambahan tenaga kerja. MP menurun tidak otomatis berarti TP turun.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Biaya total</span>
        <p class="formula-main"><i>TC</i> = <i>FC</i> + <i>VC</i> = <i>FC</i> + <i>vQ</i></p>
        <p>Bentuk terakhir berlaku saat biaya variabel per unit v konstan. Pada Q = 0, TC = FC.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Biaya rata-rata</span>
        <p class="formula-main"><i>AFC</i> = <span class="frac"><span><i>FC</i></span><span><i>Q</i></span></span></p>
        <p class="formula-main"><i>ATC</i> = <i>AFC</i> + <i>AVC</i></p>
        <p>Biaya tetap per unit turun ketika FC dibagi ke lebih banyak unit.</p>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Biaya marginal</span>
        <p class="formula-main"><i>MC</i> = <span class="frac"><span>Δ<i>TC</i></span><span>Δ<i>Q</i></span></span> = <span class="frac"><span>Δ<i>VC</i></span><span>Δ<i>Q</i></span></span></p>
        <p>FC tidak berubah saat output berubah, jadi perubahan TC berasal dari VC. Jika TC berupa fungsi kontinu, MC = dTC/dQ.</p>
      </article>
      <article class="formula-sheet-card accent-sheet">
        <span class="sheet-label">Titik impas · unit</span>
        <p class="formula-main"><i>BEP</i> = <span class="frac"><span><i>FC</i></span><span><i>P</i> − <i>v</i></span></span></p>
        <p>Gunakan kontribusi per unit P − v. Jika hasil pecahan unit, bulatkan ke atas untuk jumlah minimum yang tidak rugi.</p>
        <a href="#/materi/7">Lab titik impas →</a>
      </article>
      <article class="formula-sheet-card">
        <span class="sheet-label">Hubungan laba</span>
        <p class="formula-main">Laba = TR − TC</p>
        <p>Jika harga tetap, TR = P × Q. Dengan VC = vQ, laba = (P − v)Q − FC.</p>
      </article>
    </div>
    <div class="formula-worked">
      <div class="worked-heading"><span class="micro-label">Contoh dari pertemuan 07</span><h3>Berapa pengguna aplikasi agar biaya tertutup?</h3></div>
      <div class="market-walkthrough">
        <div><span class="walk-no">01</span><strong>Kontribusi per pengguna</strong><code>Rp50.000 − Rp20.000 = Rp30.000</code><p>Harga dikurangi biaya variabel per pengguna.</p></div>
        <span class="reading-arrow" aria-hidden="true">→</span>
        <div><span class="walk-no">02</span><strong>Hitung jumlah impas</strong><code>Rp100.000.000 ÷ Rp30.000 = 3.333,33</code><p>Biaya tetap dibagi kontribusi per pengguna.</p></div>
        <span class="reading-arrow" aria-hidden="true">→</span>
        <div class="market-walk-result"><span class="walk-no">03</span><strong>Bulatkan ke atas</strong><code>Minimum 3.334 pengguna</code><p>Di bawah jumlah itu, penerimaan belum menutup seluruh biaya.</p></div>
      </div>
      <p class="worked-explanation">Pada 10.000 pengguna, TR = Rp500 juta dan TC = Rp100 juta + Rp200 juta = Rp300 juta. Laba model = Rp200 juta per bulan, sebelum pajak dan biaya lain yang tidak dicakup contoh.</p>
    </div>
  </section>

  <section class="formula-section" id="f-jebakan">
    <header class="formula-section-head">
      <span>07</span>
      <div><p class="eyebrow">Pemeriksaan terakhir</p><h2>Delapan jebakan sebelum ujian.</h2></div>
    </header>
    <ol class="exam-traps">
      <li><span>01</span><p><strong>Permintaan vs jumlah diminta.</strong> “Permintaan naik” berarti kurva bergeser; “jumlah diminta naik” bisa berarti harga turun.</p></li>
      <li><span>02</span><p><strong>Gerak vs geser.</strong> Harga barang itu sendiri = gerak di kurva. Faktor non-harga = geser kurva.</p></li>
      <li><span>03</span><p><strong>Tanda negatif Ed.</strong> Kategorisasi memakai nilai absolut; tanda negatif hanya mencerminkan kurva menurun.</p></li>
      <li><span>04</span><p><strong>Metode titik tengah.</strong> Bagi perubahan dengan rata-rata dua angka, bukan selalu dengan angka awal.</p></li>
      <li><span>05</span><p><strong>Kekurangan barang ≠ surplus konsumen.</strong> Kekurangan berarti Qd &gt; Qs. Surplus konsumen adalah manfaat bersih pembeli.</p></li>
      <li><span>06</span><p><strong>Satuan.</strong> Jika P dalam ribu rupiah, surplus juga dalam ribu rupiah. Jangan lupa menyebut satuan.</p></li>
      <li><span>07</span><p><strong>Pendapatan vs harga.</strong> Elastisitas pendapatan memakai %ΔY; elastisitas silang memakai %ΔP barang lain.</p></li>
      <li><span>08</span><p><strong>Optimum konsumen.</strong> Cari X, lalu substitusikan untuk Y, lalu cek apakah anggaran habis dan MU per rupiah sama.</p></li>
    </ol>
  </section>

  <footer class="formula-footer">
    <div>
      <span class="micro-label">Sumber materi</span>
      <p>Disusun dari bahan ajar Pertemuan 1–7 Pengantar Ekonomi, termasuk materi Produksi dan Biaya Produksi, dengan rujukan Mankiw, <em>Principles of Economics</em>; Pindyck dan Rubinfeld, <em>Microeconomics</em>; Sukirno, <em>Pengantar Teori Mikroekonomi</em>; serta Case, Fair &amp; Oster.</p>
    </div>
    <a class="btn btn-dark" href="#/materi/1">Ulang dari pertemuan 01 <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg></a>
  </footer>
</article>
`;
