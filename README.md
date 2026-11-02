# Kurva — Lab Pengantar Ekonomi

Situs belajar interaktif untuk materi Pengantar Ekonomi semester 1, pertemuan 1–7, dengan panduan kisi-kisi UTS terpisah. Materi, visualisasi, kuis, dan kalkulator dibuat dengan HTML, CSS, dan JavaScript lokal tanpa framework atau proses build.

## Menjalankan secara lokal

Buka `index.html` di browser, atau sajikan folder ini melalui server HTTP lokal.

## Offline di ponsel

Kurva dapat dipasang sebagai aplikasi web dan menyimpan app shell, materi, font, serta aset secara lokal. Buka situs sekali saat online agar cache offline selesai dibuat. Di Chrome Android, pilih **⋮ → Instal aplikasi** (atau **Tambahkan ke layar utama**); setelah itu Kurva bisa dibuka tanpa koneksi. Progres belajar tetap tersimpan di perangkat.

## Struktur

- `index.html` — kerangka situs dan navigasi.
- `css/style.css` — tampilan responsif.
- `js/` — materi, interaksi, dan lab visual.
- `assets/fonts/` — font lokal.
- `manifest.webmanifest` dan `sw.js` — instalasi PWA dan cache offline.

Situs ini disiapkan sebagai situs statis dan dapat di-deploy langsung dari folder ini.
