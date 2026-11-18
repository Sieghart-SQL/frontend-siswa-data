# Frontend Data Siswa

Aplikasi web **React (Vite)** untuk menampilkan, menambah, mengedit, dan menghapus Data Siswa. Semua operasi memanggil API dari repo backend.

## Fitur

- Menampilkan daftar siswa
- Menambah data siswa
- Mengedit data siswa
- Menghapus data siswa (dengan konfirmasi)
- Pesan sukses dan error dari server

## Teknologi

- React
- Vite
- Fetch API

## Prasyarat

Backend harus sudah berjalan lebih dulu: https://github.com/Sieghart-SQL/backend-siswa-data

## Instalasi

```bash
git clone https://github.com/Sieghart-SQL/frontend-siswa-data.git
cd frontend-siswa-data
npm install
```

Buat file `.env` di root project:

```env
VITE_API_URL=http://localhost:3001/api/siswa
```

## Menjalankan

```bash
npm run dev
```

Buka alamat yang muncul di terminal, biasanya `http://localhost:5173`.

## Urutan menjalankan seluruh aplikasi

1. Nyalakan MySQL (Laragon/XAMPP)
2. Jalankan backend: `npm start`
3. Jalankan frontend: `npm run dev`

## Struktur utama

```
src/
├── components/
│   ├── Pesan.jsx       # Kotak pesan error dan sukses
│   ├── FormSiswa.jsx   # Form tambah dan edit siswa
│   └── TabelSiswa.jsx  # Tabel daftar siswa
├── App.jsx             # State dan pemanggilan API
├── App.css             # Styling halaman
├── index.css           # Styling global
└── main.jsx            # Entry point React
```

## Field Data Siswa

Kode Siswa, Nama Siswa, Alamat Siswa, Tgl Siswa, dan Jurusan Siswa.