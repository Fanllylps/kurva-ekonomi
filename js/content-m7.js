window.KURVA_CONTENT = window.KURVA_CONTENT || {};

KURVA_CONTENT.m7 = `
<article class="chapter" data-module="m7">
  <header class="chapter-hero">
    <div class="chapter-kicker"><a href="#/">Indeks materi</a><span>/</span><span>Pertemuan 07</span></div>
    <div class="chapter-title-row">
      <div>
        <p class="eyebrow">Produksi dan biaya produksi</p>
        <h1>Mengubah input menjadi <em>nilai dan biaya.</em></h1>
        <p class="chapter-lead">Perusahaan menggabungkan tenaga kerja, modal, bahan, dan teknologi untuk menghasilkan barang atau jasa. Memahami produksi membantu kita membaca produktivitas, biaya, dan keputusan jumlah output.</p>
      </div>
      <div class="chapter-stamp" aria-hidden="true">
        <span>07</span>
        <small>PRODUKSI<br>&amp; BIAYA</small>
      </div>
    </div>
    <div class="chapter-brief">
      <div class="brief-question">
        <span class="micro-label">Pertanyaan kunci</span>
        <p>Berapa banyak output yang sebaiknya diproduksi, dan bagaimana produsen tahu biaya tambahannya masih masuk akal?</p>
      </div>
      <div class="brief-aims">
        <span class="micro-label">Setelah bab ini</span>
        <ul>
          <li>Membedakan faktor produksi tetap dan variabel.</li>
          <li>Menjelaskan produktivitas dan hasil marginal yang menurun.</li>
          <li>Menghitung biaya rata-rata, marginal, dan titik impas.</li>
        </ul>
      </div>
    </div>
  </header>

  <nav class="chapter-map" aria-label="Isi pertemuan 7">
    <span class="map-label">Isi bab</span>
    <a href="#m7-produksi">Produksi</a>
    <a href="#m7-input">Input</a>
    <a href="#m7-produktivitas">Produktivitas</a>
    <a href="#m7-hasil">Hasil marginal</a>
    <a href="#m7-efisiensi">Efisiensi</a>
    <a href="#m7-digital">Bisnis digital</a>
    <a href="#m7-biaya">Biaya</a>
    <a href="#m7-lab">Titik impas</a>
    <a href="#m7-cek">Cek paham</a>
  </nav>

  <section class="lesson" id="m7-produksi">
    <header class="section-heading">
      <span class="section-no">7.1</span>
      <div>
        <p class="eyebrow">Dari sumber daya ke output</p>
        <h2>Produksi adalah proses penciptaan nilai guna.</h2>
      </div>
    </header>

    <div class="prose-grid">
      <div class="prose reveal">
        <p><strong>Produksi</strong> adalah kegiatan mengubah input atau sumber daya menjadi output berupa barang maupun jasa. Output bukan hanya benda fisik: pengantaran makanan, layanan konsultasi daring, dan penyimpanan data di cloud juga merupakan jasa yang dihasilkan.</p>
        <p>Perusahaan mengombinasikan beberapa faktor produksi. Cara menggabungkan faktor tersebut, kapasitas yang tersedia, dan teknologi yang dipakai memengaruhi jumlah serta kualitas output.</p>
      </div>
      <aside class="margin-note reveal">
        <span class="note-no">Contoh</span>
        <p>Warung makan mengubah bahan, waktu juru masak, peralatan, dan pengelolaan usaha menjadi hidangan siap santap.</p>
      </aside>
    </div>

    <div class="table-shell reveal">
      <table class="compare-table">
        <thead><tr><th>Faktor produksi</th><th>Balas jasa</th><th>Contoh pada warung makan</th></tr></thead>
        <tbody>
          <tr><td><strong>Tanah / sumber daya alam</strong></td><td>Sewa</td><td>Lahan atau kios, air, dan bahan baku alam.</td></tr>
          <tr><td><strong>Tenaga kerja</strong></td><td>Upah / gaji</td><td>Juru masak, pelayan, dan kasir.</td></tr>
          <tr><td><strong>Modal</strong></td><td>Bunga / penyusutan</td><td>Kompor, etalase, peralatan makan, dan dana usaha.</td></tr>
          <tr><td><strong>Kewirausahaan</strong></td><td>Laba</td><td>Pemilik yang mengatur menu, harga, pegawai, dan menanggung risiko.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="formula-card reveal">
      <span class="micro-label">Fungsi produksi</span>
      <p class="formula-main"><i>Q</i> = <i>f</i>(<i>K</i>, <i>L</i>, <i>R</i>, <i>T</i>)</p>
      <p class="formula-note"><i>Q</i> = output; <i>K</i> = modal; <i>L</i> = tenaga kerja; <i>R</i> = sumber daya alam atau material; <i>T</i> = teknologi. Fungsi ini merangkum hubungan input dengan output, bukan rumus untuk satu jenis usaha tertentu.</p>
    </div>
  </section>

  <section class="lesson" id="m7-input">
    <header class="section-heading">
      <span class="section-no">7.2</span>
      <div>
        <p class="eyebrow">Kapasitas dan waktu</p>
        <h2>Tetap dan variabel bergantung pada jangka waktu.</h2>
      </div>
    </header>

    <div class="compare-pair reveal">
      <article class="compare-card scarcity">
        <p class="compare-tag">Input tetap · sulit diubah dalam jangka pendek</p>
        <h3>Kapasitas yang sudah terpasang</h3>
        <p>Jumlahnya tidak mudah disesuaikan dalam periode keputusan yang sedang dibahas. Contohnya luas kios, jumlah mesin, dan kontrak sewa.</p>
        <span class="compare-key">Tetap untuk periode analisis tertentu</span>
      </article>
      <article class="compare-card abundance">
        <p class="compare-tag">Input variabel · dapat disesuaikan</p>
        <h3>Input yang mengikuti volume kerja</h3>
        <p>Jumlahnya bisa dinaikkan atau diturunkan ketika produksi berubah. Contohnya bahan baku, tenaga kerja harian, dan bahan bakar.</p>
        <span class="compare-key">Berubah bersama rencana output</span>
      </article>
    </div>

    <div class="definition-grid">
      <article class="definition-card reveal">
        <span class="micro-label">Jangka pendek</span>
        <p>Setidaknya satu faktor produksi masih tetap. Perusahaan dapat menambah bahan dan jam kerja, tetapi belum tentu dapat memperluas bangunan atau menambah mesin.</p>
      </article>
      <article class="definition-card reveal">
        <span class="micro-label">Jangka panjang</span>
        <p>Semua faktor produksi dapat diubah. Perusahaan dapat menambah kapasitas, mengganti teknologi, memperluas lokasi, atau merancang ulang proses.</p>
      </article>
      <article class="definition-card reveal">
        <span class="micro-label">Kuncinya</span>
        <p>Jangka pendek dan panjang bukan jumlah hari yang sama untuk semua perusahaan. Pembeda utamanya adalah apakah faktor produksi sudah bisa disesuaikan.</p>
      </article>
    </div>
  </section>

  <section class="lesson" id="m7-produktivitas">
    <header class="section-heading">
      <span class="section-no">7.3</span>
      <div>
        <p class="eyebrow">Mengukur hasil input</p>
        <h2>Produktivitas bertanya: input ini menghasilkan berapa?</h2>
      </div>
    </header>

    <div class="prose-grid">
      <div class="prose reveal">
        <p><strong>Produktivitas</strong> adalah perbandingan output terhadap input yang digunakan. Pilih satuan dengan jelas agar hasilnya bermakna: misalnya 12 meter persegi pasangan bata per pekerja per hari.</p>
        <p>Produktivitas berbeda dari kualitas. Produktivitas mengukur hasil relatif terhadap input; kualitas melihat apakah hasil memenuhi standar atau harapan. Produksi yang lebih cepat belum tentu lebih baik bila cacat dan harus dikerjakan ulang.</p>
      </div>
      <aside class="formula-card small reveal">
        <span class="micro-label">Ukuran dasar</span>
        <p class="formula-main">Produktivitas = <span class="frac"><span>Output</span><span>Input</span></span></p>
        <p class="formula-note">Tentukan dulu input yang dibandingkan dan satuannya.</p>
      </aside>
    </div>

    <div class="definition-grid">
      <article class="definition-card reveal">
        <span class="micro-label">Produktivitas parsial</span>
        <p>Output dibandingkan dengan satu jenis input. Contoh: jumlah paket yang diproses per jam kerja atau meter kubik beton per jam alat.</p>
      </article>
      <article class="definition-card reveal">
        <span class="micro-label">Produktivitas faktor total</span>
        <p>Output dibandingkan dengan gabungan berbagai input. Ukurannya membantu menilai efisiensi penggunaan sumber daya secara lebih menyeluruh.</p>
      </article>
      <article class="definition-card reveal">
        <span class="micro-label">Faktor yang berpengaruh</span>
        <p>Keterampilan, motivasi, teknologi, metode kerja, perencanaan, cuaca, ketersediaan material, dan keselamatan kerja.</p>
      </article>
    </div>
  </section>

  <section class="lesson" id="m7-hasil">
    <header class="section-heading">
      <span class="section-no">7.4</span>
      <div>
        <p class="eyebrow">Hasil marginal yang menurun</p>
        <h2>Menambah pekerja tidak selalu menambah output dengan laju yang sama.</h2>
      </div>
    </header>

    <div class="prose">
      <p><strong>Hukum hasil marginal yang semakin berkurang</strong> berlaku ketika satu input variabel terus ditambah sementara setidaknya satu input lain tetap. Setelah titik tertentu, tambahan output dari setiap unit input baru cenderung mengecil.</p>
    </div>

    <div class="concept-flow reveal" aria-label="Tahapan hasil marginal menurun">
      <div class="flow-step">
        <span class="flow-icon">01</span>
        <strong>Input tetap</strong>
        <p>Area kerja dan jumlah alat belum berubah.</p>
      </div>
      <div class="flow-arrow" aria-hidden="true">→</div>
      <div class="flow-step">
        <span class="flow-icon">02</span>
        <strong>Input variabel ditambah</strong>
        <p>Lebih banyak tenaga kerja masuk ke proses.</p>
      </div>
      <div class="flow-arrow" aria-hidden="true">→</div>
      <div class="flow-step accent-step">
        <span class="flow-icon">03</span>
        <strong>MP akhirnya turun</strong>
        <p>Tambahan pekerja mulai berbagi ruang dan alat yang terbatas.</p>
      </div>
    </div>

    <div class="note-box reveal">
      <span class="micro-label">Contoh area kerja</span>
      <p>Satu area sempit hanya punya satu crane. Menambah pekerja mula-mula membantu pekerjaan berlangsung paralel. Namun setelah terlalu banyak orang hadir, mereka saling menunggu atau menghalangi; output total masih bisa naik, tetapi tambahan outputnya makin kecil.</p>
    </div>

    <div class="formula-card reveal">
      <span class="micro-label">Produk total, rata-rata, dan marginal</span>
      <div class="sheet-math-row">
        <p class="formula-main"><i>AP</i> = <span class="frac"><span><i>TP</i></span><span><i>L</i></span></span></p>
        <p class="formula-main"><i>MP</i> = <span class="frac"><span>Δ<i>TP</i></span><span>Δ<i>L</i></span></span></p>
      </div>
      <p class="formula-note"><i>TP</i> = total produk; <i>AP</i> = produk rata-rata per tenaga kerja; <i>MP</i> = tambahan produk akibat tambahan tenaga kerja. Hukum hasil marginal menurun berarti MP turun setelah suatu titik, bukan berarti TP langsung turun.</p>
    </div>

    <div class="table-shell reveal">
      <table class="compare-table">
        <thead><tr><th>Tenaga kerja (L)</th><th>Produk total (TP)</th><th>Produk marginal (MP)</th><th>Produk rata-rata (AP)</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>0</td><td>—</td><td>—</td></tr>
          <tr><td>1</td><td>10</td><td>10</td><td>10</td></tr>
          <tr><td>2</td><td>24</td><td>14</td><td>12</td></tr>
          <tr><td>3</td><td>36</td><td>12</td><td>12</td></tr>
          <tr><td>4</td><td>44</td><td>8</td><td>11</td></tr>
          <tr><td>5</td><td>48</td><td>4</td><td>9,6</td></tr>
          <tr><td>6</td><td>48</td><td>0</td><td>8</td></tr>
          <tr><td>7</td><td>44</td><td>−4</td><td>6,3</td></tr>
        </tbody>
      </table>
    </div>
    <p class="consumer-formula-help"><strong>Ilustrasi:</strong> angka output hanya contoh unit produk. Dari pekerja ke-3 ke pekerja ke-4, TP naik 8 unit; tambahan ini lebih kecil daripada sebelumnya. Pada pekerja ke-7, MP negatif sehingga TP justru turun.</p>

    <div class="stages-grid">
      <article class="stage-card reveal">
        <span class="stage-number">I</span>
        <h3>Input mulai dimanfaatkan</h3>
        <p>AP meningkat hingga maksimum; sebelum puncak, MP &gt; AP. Di titik maksimum AP, MP = AP. Produsen umumnya belum punya alasan untuk berhenti menambah input variabel.</p>
      </article>
      <article class="stage-card stage-optimal reveal">
        <span class="stage-number">II</span>
        <h3>Daerah produksi rasional</h3>
        <p>MP positif tetapi menurun. TP masih bertambah sampai MP = 0; AP sudah menurun setelah mencapai puncak.</p>
      </article>
      <article class="stage-card reveal">
        <span class="stage-number">III</span>
        <h3>Tambahan input merugikan</h3>
        <p>MP negatif dan TP turun. Mengurangi input variabel justru dapat menaikkan output total.</p>
      </article>
    </div>
    <p class="step-hint">Batas umum: AP maksimum saat MP = AP; TP maksimum saat MP = 0. Keputusan nyata tetap mempertimbangkan harga input dan nilai output.</p>
  </section>

  <section class="lesson" id="m7-efisiensi">
    <header class="section-heading">
      <span class="section-no">7.5</span>
      <div>
        <p class="eyebrow">Menggunakan sumber daya dengan baik</p>
        <h2>Efisiensi berarti mencapai hasil tanpa pemborosan.</h2>
      </div>
    </header>

    <div class="definition-grid">
      <article class="definition-card reveal">
        <span class="micro-label">Efisiensi teknis</span>
        <p>Menghasilkan output maksimum dari kombinasi input yang tersedia, atau mencapai target output tanpa pemborosan fisik.</p>
      </article>
      <article class="definition-card reveal">
        <span class="micro-label">Efisiensi alokatif</span>
        <p>Memilih kombinasi input dengan biaya terendah berdasarkan harga relatif tenaga kerja, modal, bahan, dan input lain.</p>
      </article>
      <article class="definition-card reveal">
        <span class="micro-label">Efisiensi ekonomis</span>
        <p>Memadukan efisiensi teknis dan alokatif: prosesnya tidak boros, dan kombinasi inputnya sesuai dengan harganya.</p>
      </article>
    </div>

    <div class="prose-grid">
      <div class="prose reveal">
        <p>Efisiensi dapat ditingkatkan melalui perencanaan jadwal, penggunaan alat sesuai kapasitas, pengurangan sisa bahan dan pekerjaan ulang, standardisasi, teknologi, serta pelatihan. Ukur hasil secara berkala agar perubahan benar-benar memperbaiki proses.</p>
        <p>Pada tingkat produksi yang dipilih, perusahaan pencari laba biasanya membandingkan penerimaan dan biaya marginal: tambahan output layak diproduksi selama tambahan penerimaannya menutup tambahan biayanya. Dalam kondisi optimum interior, laba maksimum dicapai saat <strong>MR = MC</strong>.</p>
      </div>
      <aside class="formula-card small reveal">
        <span class="micro-label">Skala usaha</span>
        <p class="formula-main">ATC turun → economies of scale</p>
        <p class="formula-note">Biaya rata-rata dapat turun saat skala membesar. Jika organisasi terlalu besar dan biaya rata-rata naik, disebut diseconomies of scale.</p>
      </aside>
    </div>
    <div class="note-box reveal">
      <span class="micro-label">Ukuran operasional</span>
      <p>Bahan kuliah menuliskan ukuran efisiensi sederhana sebagai (output ÷ input) × 100%. Untuk menafsirkan hasilnya sebagai persentase, pembilang dan penyebut harus dibandingkan terhadap basis atau target yang sebanding. Efisiensi biaya dapat dihitung sebagai biaya standar atau anggaran ÷ biaya aktual; jelaskan standar dan satuannya.</p>
    </div>
  </section>

  <section class="lesson" id="m7-digital">
    <header class="section-heading">
      <span class="section-no">7.6</span>
      <div>
        <p class="eyebrow">Produksi di ekonomi digital</p>
        <h2>Server dan data juga bagian dari proses produksi.</h2>
      </div>
    </header>

    <div class="prose">
      <p>Bisnis digital tetap menggunakan faktor produksi konvensional, tetapi mengandalkan sumber daya tambahan: <strong>data</strong> untuk personalisasi dan rekomendasi, <strong>algoritma serta pengetahuan</strong> sebagai teknologi, dan <strong>platform serta jaringan</strong> untuk menghubungkan pengguna. Efek jaringan dapat membuat platform lebih bernilai ketika lebih banyak pihak bergabung.</p>
    </div>

    <div class="table-shell reveal">
      <table class="compare-table">
        <thead><tr><th>Faktor</th><th>Contoh konvensional</th><th>Contoh bisnis digital</th></tr></thead>
        <tbody>
          <tr><td><strong>Sumber daya</strong></td><td>Lahan pabrik, bahan mentah.</td><td>Listrik, pusat data, kapasitas cloud, dan spektrum jaringan.</td></tr>
          <tr><td><strong>Tenaga kerja</strong></td><td>Operator mesin, pekerja produksi.</td><td>Programmer, desainer UI/UX, analis data, customer support, dan mitra pengemudi.</td></tr>
          <tr><td><strong>Modal</strong></td><td>Mesin, gedung, peralatan.</td><td>Server, perangkat lunak, kode sumber, jaringan, dan dana investasi.</td></tr>
          <tr><td><strong>Input digital</strong></td><td>—</td><td>Data, algoritma, pengetahuan, efek jaringan, dan kekayaan intelektual.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="note-box reveal">
      <span class="micro-label">Struktur biaya digital</span>
      <p>Pengembangan produk, riset, dan tim inti sering menjadi biaya tetap besar di awal. Setelah produk berjalan, biaya marginal untuk melayani satu pengguna tambahan bisa rendah—tetapi tidak nol: kapasitas cloud, dukungan pelanggan, biaya pembayaran, royalti, dan biaya akuisisi pelanggan (CAC) tetap perlu dihitung. CAC sering menjadi komponen variabel besar pada platform yang sedang tumbuh. Biaya tetap yang besar juga membuat laba dan rugi sama-sama lebih sensitif terhadap jumlah pengguna (operating leverage).</p>
    </div>

    <div class="digital-cost-grid">
      <article class="digital-cost-card reveal">
        <span class="factor-tag">SaaS</span>
        <h3>Aplikasi berlangganan</h3>
        <p><strong>Tetap:</strong> gaji tim dan riset produk.</p>
        <p><strong>Variabel:</strong> hosting, pembayaran, dan dukungan per pengguna.</p>
      </article>
      <article class="digital-cost-card reveal">
        <span class="factor-tag">Marketplace</span>
        <h3>Platform jual-beli</h3>
        <p><strong>Tetap:</strong> teknologi dan operasi inti.</p>
        <p><strong>Variabel:</strong> pemrosesan pesanan, subsidi ongkir, dan biaya pembayaran.</p>
      </article>
      <article class="digital-cost-card reveal">
        <span class="factor-tag">Streaming</span>
        <h3>Konten dan bandwidth</h3>
        <p><strong>Tetap:</strong> produksi atau lisensi konten.</p>
        <p><strong>Variabel:</strong> bandwidth dan royalti yang bergantung pada pemakaian.</p>
      </article>
      <article class="digital-cost-card reveal">
        <span class="factor-tag">Cloud</span>
        <h3>Layanan komputasi</h3>
        <p><strong>Tetap:</strong> pembangunan pusat data dan infrastruktur dasar.</p>
        <p><strong>Variabel:</strong> listrik, pendinginan, dan kapasitas komputasi yang dipakai.</p>
      </article>
      <article class="digital-cost-card reveal">
        <span class="factor-tag">Transportasi online</span>
        <h3>Platform dan mitra</h3>
        <p><strong>Tetap:</strong> teknologi, regulasi, dan tim operasi.</p>
        <p><strong>Variabel:</strong> insentif mitra, promosi, dan biaya pembayaran.</p>
      </article>
      <article class="digital-cost-card reveal">
        <span class="factor-tag">Edtech</span>
        <h3>Kursus daring</h3>
        <p><strong>Tetap:</strong> produksi kursus rekaman dan tim inti.</p>
        <p><strong>Variabel:</strong> tutor per sesi dan pemrosesan pembayaran; kelas langsung lebih mahal per peserta.</p>
      </article>
    </div>
  </section>

  <section class="lesson" id="m7-biaya">
    <header class="section-heading">
      <span class="section-no">7.7</span>
      <div>
        <p class="eyebrow">Peta biaya perusahaan</p>
        <h2>Biaya menunjukkan pengorbanan untuk menghasilkan output.</h2>
      </div>
    </header>

    <div class="prose">
      <p><strong>Biaya produksi</strong> adalah nilai sumber daya yang dikorbankan untuk menghasilkan barang atau jasa. Untuk memahami keputusan produksi, kelompokkan biaya menurut perilakunya saat jumlah output (<i>Q</i>) berubah.</p>
    </div>

    <div class="compare-pair reveal">
      <article class="compare-card scarcity">
        <p class="compare-tag">Biaya tetap · FC</p>
        <h3>Totalnya tidak berubah saat Q berubah.</h3>
        <p>Biaya tetap tetap dibayar meskipun perusahaan sementara tidak berproduksi. Contoh: sewa, gaji pegawai tetap, penyusutan mesin, asuransi, bunga pinjaman, dan izin usaha.</p>
        <span class="compare-key">Saat Q = 0, FC tetap ada</span>
      </article>
      <article class="compare-card abundance">
        <p class="compare-tag">Biaya variabel · VC</p>
        <h3>Totalnya bergerak mengikuti volume.</h3>
        <p>Biaya variabel berubah searah dengan produksi. Contoh: bahan baku, kemasan, upah borongan, bahan bakar, dan komisi. Saat Q = 0, VC umumnya = 0.</p>
        <span class="compare-key">VC = v × Q jika v konstan</span>
      </article>
    </div>

    <div class="formula-card reveal">
      <span class="micro-label">Biaya total</span>
      <p class="formula-main"><i>TC</i> = <i>FC</i> + <i>VC</i></p>
      <p class="formula-note">Jika biaya variabel per unit (<i>v</i>) konstan, <i>VC</i> = <i>v</i> × <i>Q</i>, sehingga <i>TC</i> = <i>FC</i> + <i>vQ</i>. Mendekati kapasitas, biaya per unit variabel dapat meningkat.</p>
    </div>

    <div class="table-shell reveal">
      <table class="compare-table">
        <thead><tr><th>Singkatan</th><th>Nama</th><th>Pertanyaan yang dijawab</th></tr></thead>
        <tbody>
          <tr><td><strong>FC</strong></td><td>Biaya tetap total</td><td>Berapa biaya yang tetap keluar walau produksi berubah?</td></tr>
          <tr><td><strong>VC</strong></td><td>Biaya variabel total</td><td>Berapa seluruh biaya yang mengikuti volume output?</td></tr>
          <tr><td><strong>TC</strong></td><td>Biaya total</td><td>Berapa seluruh pengorbanan untuk memproduksi Q unit?</td></tr>
          <tr><td><strong>AFC, AVC, ATC</strong></td><td>Biaya rata-rata</td><td>Berapa biaya per unit dari komponen tetap, variabel, dan total?</td></tr>
          <tr><td><strong>MC</strong></td><td>Biaya marginal</td><td>Berapa tambahan biaya untuk menambah output?</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="lesson" id="m7-rata-rata">
    <header class="section-heading">
      <span class="section-no">7.8</span>
      <div>
        <p class="eyebrow">Per unit dan tambahan</p>
        <h2>Rata-rata merangkum biaya; marginal membantu memilih langkah berikutnya.</h2>
      </div>
    </header>

    <div class="table-shell reveal">
      <table class="compare-table">
        <thead><tr><th>Ukuran biaya</th><th>Rumus</th><th>Makna</th></tr></thead>
        <tbody>
          <tr><td><strong>AFC</strong></td><td>FC ÷ Q</td><td>Biaya tetap rata-rata per unit.</td></tr>
          <tr><td><strong>AVC</strong></td><td>VC ÷ Q</td><td>Biaya variabel rata-rata per unit.</td></tr>
          <tr><td><strong>ATC / AC</strong></td><td>TC ÷ Q = AFC + AVC</td><td>Biaya total rata-rata untuk setiap unit.</td></tr>
          <tr><td><strong>MC</strong></td><td>ΔTC ÷ ΔQ = ΔVC ÷ ΔQ</td><td>Tambahan biaya total ketika output bertambah.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="definition-grid">
      <article class="definition-card reveal">
        <span class="micro-label">AFC selalu turun</span>
        <p>Selama FC tetap, biaya tetap dibagi ke semakin banyak unit. Ini tidak otomatis berarti biaya total turun.</p>
      </article>
      <article class="definition-card reveal">
        <span class="micro-label">Bandingkan MC dan ATC</span>
        <p>Jika MC &lt; ATC, tambahan unit menarik rata-rata turun. Jika MC &gt; ATC, tambahan unit mendorong rata-rata naik.</p>
      </article>
      <article class="definition-card reveal">
        <span class="micro-label">Kurva biaya standar</span>
        <p>Pada bentuk kurva U yang umum, MC memotong AVC dan ATC di titik terendahnya. Ini pola model, bukan syarat bagi setiap data nyata.</p>
      </article>
    </div>

    <div class="note-box reveal">
      <span class="micro-label">Contoh hitung singkat</span>
      <p>Jika TC naik dari Rp500.000 menjadi Rp560.000 saat produksi bertambah dari 20 ke 22 unit, maka MC rata-rata untuk dua unit tambahan = (Rp560.000 − Rp500.000) ÷ (22 − 20) = Rp30.000 per unit. Karena FC tidak berubah, perubahan TC tersebut berasal dari VC. Jika TC dinyatakan sebagai fungsi kontinu, MC = dTC/dQ.</p>
    </div>
    <div class="note-box reveal">
      <span class="micro-label">Harga jangka panjang</span>
      <p>Jika perusahaan terus menjual di bawah ATC, penerimaan tidak menutup seluruh biaya rata-rata dan kerugian tidak dapat dipertahankan selamanya. Dalam model sederhana, harga setidaknya perlu menutup ATC untuk menghindari rugi jangka panjang.</p>
    </div>
  </section>

  <section class="lesson" id="m7-lab">
    <header class="section-heading">
      <span class="section-no">7.9</span>
      <div>
        <p class="eyebrow">Lab 07 · titik impas</p>
        <h2>Ubah biaya tetap. Lihat berapa pelanggan yang perlu dicapai.</h2>
      </div>
    </header>

    <div class="prose">
      <p><strong>Titik impas</strong> adalah jumlah output ketika total penerimaan sama dengan total biaya. Pada contoh aplikasi berlangganan, harga Rp50.000 per pengguna dan biaya variabel Rp20.000 memberi kontribusi Rp30.000 per pengguna untuk menutup biaya tetap.</p>
    </div>

    <div class="formula-card reveal">
      <span class="micro-label">Jumlah minimum untuk impas</span>
      <p class="formula-main"><i>BEP</i><sub>unit</sub> = <span class="frac"><span><i>FC</i></span><span><i>P</i> − <i>v</i></span></span></p>
      <p class="formula-note"><i>P</i> = harga per unit; <i>v</i> = biaya variabel per unit; <i>P − v</i> = kontribusi per unit untuk menutup FC. Rumus ini mengasumsikan harga dan biaya variabel per unit tetap pada rentang output yang dihitung.</p>
    </div>

    <div class="stepper" data-stepper>
      <div class="stepper-head">
        <div>
          <span class="micro-label">Contoh dari bahan pertemuan</span>
          <h4>Aplikasi berlangganan dengan biaya bulanan.</h4>
        </div>
        <button type="button" class="text-button stepper-all">Tampilkan semua</button>
      </div>
      <ol class="stepper-steps">
        <li>
          <span class="step-no">01</span>
          <div><p>Tentukan kontribusi per pengguna.</p><p class="math-line">Rp50.000 − Rp20.000 = <strong>Rp30.000</strong></p><p class="step-hint">Sisa harga setelah biaya variabel membantu menutup biaya tetap dan, setelah impas, menghasilkan laba.</p></div>
        </li>
        <li>
          <span class="step-no">02</span>
          <div><p>Bagi biaya tetap dengan kontribusi per unit.</p><p class="math-line">Rp100.000.000 ÷ Rp30.000 = <strong>3.333,33 pengguna</strong></p></div>
        </li>
        <li>
          <span class="step-no">03</span>
          <div><p>Karena pelanggan tidak dapat berupa pecahan, bulatkan ke atas.</p><p class="math-line">Jumlah minimum agar tidak rugi = <strong>3.334 pengguna</strong></p></div>
        </li>
        <li>
          <span class="step-no">04</span>
          <div><p>Uji jika pengguna mencapai 10.000 per bulan.</p><p class="math-line">(Rp50.000 − Rp20.000) × 10.000 − Rp100.000.000 = <strong>laba Rp200.000.000</strong></p><p class="step-conclusion">Setelah impas, tiap pengguna tambahan menyumbang Rp30.000 sebelum biaya lain yang belum dimasukkan ke model.</p></div>
        </li>
      </ol>
      <button type="button" class="btn btn-small stepper-next">Buka langkah 1 <span aria-hidden="true">↓</span></button>
    </div>

    <div class="lab cost-lab" id="lab-production-cost">
      <header class="lab-head">
        <div>
          <p class="eyebrow">Simulasi biaya dan penerimaan</p>
          <h3>Geser Q atau FC. Amati titik impas berpindah.</h3>
        </div>
        <span class="lab-badge">harga Rp50.000 · biaya variabel Rp20.000</span>
      </header>
      <p class="lab-intro">Model bulanan sederhana untuk aplikasi berlangganan. Harga dan biaya variabel per pengguna dibuat tetap agar pengaruh biaya tetap serta jumlah pelanggan terlihat jelas.</p>

      <div class="cost-lab-layout">
        <div class="cost-lab-chart-panel">
          <div class="chart-legend cost-chart-legend">
            <span><i class="legend-cost-revenue"></i>Penerimaan total (TR)</span>
            <span><i class="legend-cost-total"></i>Biaya total (TC)</span>
            <span><i class="legend-e"></i>Titik impas</span>
          </div>
          <div class="plot" data-m7-cost-plot>
            <div class="plot-fallback">Menyiapkan grafik biaya…</div>
          </div>
          <p class="sim-caption">TR = P × Q. TC = FC + v × Q. Kedua garis berpotongan pada jumlah impas.</p>
        </div>

        <div class="cost-lab-controls">
          <div class="control-block">
            <div class="range-label"><label for="m7-fixed-cost">Biaya tetap per bulan</label><output data-m7-fc-out>Rp100.000.000</output></div>
            <input id="m7-fixed-cost" type="range" min="50" max="200" step="10" value="100" data-m7-fixed-cost aria-label="Ubah biaya tetap bulanan dalam juta rupiah">
            <div class="range-ends"><span>Rp50 juta</span><span>Rp200 juta</span></div>
          </div>
          <div class="control-block">
            <div class="range-label"><label for="m7-quantity">Jumlah pengguna per bulan</label><output data-m7-q-out>6.000</output></div>
            <input id="m7-quantity" type="range" min="0" max="10000" step="250" value="6000" data-m7-quantity aria-label="Ubah jumlah pengguna per bulan">
            <div class="range-ends"><span>0</span><span>10.000 pengguna</span></div>
          </div>

          <div class="cost-lab-stats" aria-live="polite">
            <div class="cost-lab-stat"><span class="micro-label">Kontribusi per pengguna</span><strong>Rp30.000</strong><small>Rp50.000 − Rp20.000</small></div>
            <div class="cost-lab-stat"><span class="micro-label">Pengguna saat impas</span><strong data-m7-bep>3.334</strong><small>dibulatkan ke atas</small></div>
            <div class="cost-lab-stat"><span class="micro-label">Penerimaan pada Q</span><strong data-m7-tr>Rp300.000.000</strong><small>harga × jumlah pengguna</small></div>
            <div class="cost-lab-stat"><span class="micro-label">Laba / (rugi) pada Q</span><strong data-m7-profit>Rp80.000.000</strong><small data-m7-tc>Biaya total Rp220.000.000</small></div>
          </div>
        </div>
      </div>
      <div class="lab-takeaway">
        <span class="micro-label">Baca hasilnya</span>
        <p data-m7-cost-note>Di atas titik impas, penerimaan melebihi biaya total pada model ini. Setiap pengguna tambahan menambah kontribusi Rp30.000.</p>
      </div>
      <p class="lab-footnote">Simulasi mengabaikan pajak, diskon, biaya akuisisi pelanggan, biaya bertingkat, dan perubahan harga. Gunakan sebagai alat memahami hubungan dasar, bukan ramalan keuangan usaha.</p>
    </div>
  </section>

  <section class="lesson" id="m7-cek">
    <header class="section-heading">
      <span class="section-no">7.10</span>
      <div>
        <p class="eyebrow">Kartu ingat &amp; cek paham</p>
        <h2>Produksi adalah input; biaya adalah harga dari keputusan itu.</h2>
      </div>
    </header>

    <div class="cheat-sheet reveal">
      <div class="cheat-head">
        <span class="micro-label">Kartu ingat · pertemuan 07</span>
        <span class="cheat-code">Pahami input → output → biaya → keputusan</span>
      </div>
      <div class="cheat-grid">
        <div><strong>Produksi</strong><p><i>Q</i> = <i>f</i>(<i>K</i>, <i>L</i>, <i>R</i>, <i>T</i>).</p></div>
        <div><strong>Produktivitas</strong><p>Output dibanding input; selalu tulis satuannya.</p></div>
        <div><strong>Hasil marginal</strong><p>MP = ΔTP ÷ ΔL. MP menurun tidak selalu berarti TP turun.</p></div>
        <div><strong>Biaya total</strong><p>TC = FC + VC; jika v konstan, VC = vQ.</p></div>
        <div><strong>Biaya per unit</strong><p>ATC = AFC + AVC; AFC = FC ÷ Q.</p></div>
        <div><strong>Biaya tambahan</strong><p>MC = ΔTC ÷ ΔQ; produksi optimum interior saat MR = MC.</p></div>
        <div><strong>Titik impas</strong><p>BEP = FC ÷ (P − v), dengan harga dan biaya variabel per unit tetap.</p></div>
      </div>
    </div>

    <div class="quiz" data-quiz="m7">
      <div class="quiz-heading">
        <div>
          <p class="eyebrow">Kuis · 4 soal</p>
          <h3>Uji hubungan input, output, dan biaya.</h3>
        </div>
        <p class="quiz-progress" data-quiz-progress>0 / 4 dijawab</p>
      </div>

      <div class="quiz-question" data-answer="b">
        <p class="q-text"><span class="q-no">01</span> Dalam jangka pendek, penambahan terus-menerus tenaga kerja pada jumlah mesin tetap dapat menyebabkan…</p>
        <div class="options">
          <button type="button" class="option" data-opt="a"><span>A</span> Semua input menjadi variabel</button>
          <button type="button" class="option" data-opt="b"><span>B</span> Produk marginal menurun setelah titik tertentu</button>
          <button type="button" class="option" data-opt="c"><span>C</span> Biaya tetap selalu menjadi nol</button>
          <button type="button" class="option" data-opt="d"><span>D</span> Produk total langsung menjadi negatif</button>
        </div>
        <p class="explain" hidden>Ketika satu input tetap, input variabel tambahan akhirnya makin kurang produktif. Produk total masih bisa naik selama MP positif.</p>
      </div>

      <div class="quiz-question" data-answer="c">
        <p class="q-text"><span class="q-no">02</span> Jika FC = Rp80.000 dan Q = 20 unit, berapa AFC?</p>
        <div class="options">
          <button type="button" class="option" data-opt="a"><span>A</span> Rp4.000.000 per unit</button>
          <button type="button" class="option" data-opt="b"><span>B</span> Rp80.000 per unit</button>
          <button type="button" class="option" data-opt="c"><span>C</span> Rp4.000 per unit</button>
          <button type="button" class="option" data-opt="d"><span>D</span> Rp1.600.000 per unit</button>
        </div>
        <p class="explain" hidden>AFC = FC ÷ Q = Rp80.000 ÷ 20 = Rp4.000 per unit.</p>
      </div>

      <div class="quiz-question" data-answer="a">
        <p class="q-text"><span class="q-no">03</span> Jika MC &lt; ATC, tambahan output berikutnya cenderung…</p>
        <div class="options">
          <button type="button" class="option" data-opt="a"><span>A</span> Menurunkan ATC</button>
          <button type="button" class="option" data-opt="b"><span>B</span> Menaikkan ATC</button>
          <button type="button" class="option" data-opt="c"><span>C</span> Menghapus FC</button>
          <button type="button" class="option" data-opt="d"><span>D</span> Membuat AVC sama dengan nol</button>
        </div>
        <p class="explain" hidden>Biaya marginal di bawah rata-rata menarik rata-rata turun, seperti nilai tambahan yang lebih kecil dari rata-rata sebelumnya.</p>
      </div>

      <div class="quiz-question" data-answer="d">
        <p class="q-text"><span class="q-no">04</span> FC Rp100 juta, harga Rp50.000, dan biaya variabel Rp20.000 per pengguna. Berapa jumlah minimum agar impas?</p>
        <div class="options">
          <button type="button" class="option" data-opt="a"><span>A</span> 2.000 pengguna</button>
          <button type="button" class="option" data-opt="b"><span>B</span> 3.000 pengguna</button>
          <button type="button" class="option" data-opt="c"><span>C</span> 3.333 pengguna</button>
          <button type="button" class="option" data-opt="d"><span>D</span> 3.334 pengguna</button>
        </div>
        <p class="explain" hidden>Kontribusi per pengguna = Rp50.000 − Rp20.000 = Rp30.000. BEP = Rp100.000.000 ÷ Rp30.000 = 3.333,33, jadi perlu 3.334 pengguna utuh agar tidak rugi.</p>
      </div>

      <div class="quiz-footer">
        <p class="quiz-result" data-quiz-result aria-live="polite">Pilih jawaban tanpa membuka catatan dulu.</p>
        <button type="button" class="text-button quiz-reset">Ulangi kuis</button>
      </div>
    </div>

    <div class="chapter-complete">
      <div>
        <span class="micro-label">Pertemuan 07</span>
        <h3>Bab produksi dan biaya selesai?</h3>
        <p>Lanjutkan dengan mengulang hubungan rumus pada lembar rumus.</p>
      </div>
      <button type="button" class="complete-button" data-complete="m7">
        <span data-complete-label>Tandai selesai</span>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9"/></svg>
      </button>
    </div>

    <nav class="chapter-pager" aria-label="Navigasi pertemuan">
      <a href="#/materi/6" class="pager-prev"><span>Sebelumnya</span><strong>06 · Perilaku konsumen</strong></a>
      <a href="#/rumus" class="pager-next"><span>Pengulangan cepat</span><strong>Lembar rumus lengkap</strong><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg></a>
    </nav>
  </section>
</article>
`;
