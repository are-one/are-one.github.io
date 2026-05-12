# Skill Set Portfolio dan Panduan AI Agent

Dokumen ini merangkum skill set dan panduan teknis untuk project portfolio modern yang **sudah berjalan dengan Next.js + TypeScript**. Selain dapat digunakan sebagai dokumentasi personal branding, dokumen ini juga ditulis agar mudah dibaca oleh AI agent yang akan membantu pengembangan project ke depan.

Fokus utama dokumen ini:

- **Next.js App Router** (sudah aktif).
- **TypeScript** sebagai standar penulisan kode (sudah aktif).
- Arsitektur modular yang mudah dipelihara.
- Pemisahan data, UI, animasi, dan logic.
- Panduan praktis agar AI agent tidak salah membaca arah project.

## Status Project Saat Ini

**✅ MIGRASI SELESAI** - Project telah selesai dimigrasi dari Create React App ke Next.js + TypeScript.

Struktur folder saat ini:

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css       # Styling global
│   ├── layout.tsx        # Root layout + ThemeProvider
│   └── page.tsx          # Halaman utama
├── components/
│   ├── layout/           # Layout components (Client Components)
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/         # Section components (Client Components)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/               # UI components (belum dibuat)
├── animations/            # Animation components (Client Components)
│   ├── FloatingElements.tsx
│   ├── MagneticHover.tsx
│   ├── ParallaxTilt.tsx
│   ├── ParticleBackground.tsx
│   ├── RevealOnScroll.tsx
│   ├── ScrollReveal.tsx
│   ├── TextReveal.tsx
│   └── TypewriterEffect.tsx
├── data/                  # Static data (typed)
│   ├── profile.ts
│   ├── projects.ts
│   └── skills.ts
├── types/                 # TypeScript type definitions
│   ├── index.ts
│   ├── profile.ts
│   ├── project.ts
│   └── skill.ts
└── lib/                   # Utilities
    └── theme-context.tsx  # Theme context (Client Component)
```

## Panduan Rencana untuk AI Agent

Gunakan panduan ini ketika AI agent harus membuat atau memperbarui rencana untuk fitur web, perbaikan bug, refaktorisasi, atau investigasi. Tujuannya adalah menghasilkan rencana yang singkat, jelas, dan siap dipakai untuk pengambilan keputusan.

Rencana harus mudah dipahami oleh model AI yang lebih kecil atau lebih lama. Gunakan langkah konkret, template tetap, dan checklist ringkas. Hindari rencana panjang yang terlalu abstrak.

### Format Rencana Standar

Gunakan format berikut untuk setiap rencana:

```md
## Tujuan

Jelaskan hasil akhir yang ingin dicapai dalam 1-2 kalimat.

## Konteks Singkat

Sebutkan kondisi project saat ini, file terkait, dan batasan penting.

## Ruang Lingkup

- Termasuk:
- Tidak termasuk:

## Langkah Implementasi

1. Langkah pertama yang konkret.
2. Langkah kedua yang konkret.
3. Langkah ketiga yang konkret.

## Risiko

- Risiko utama:
- Mitigasi:

## Verifikasi

- Cara memastikan perubahan berhasil.
- Command yang perlu dijalankan jika tersedia.

## Keputusan yang Dibutuhkan

- Hal yang perlu dipilih atau dikonfirmasi sebelum lanjut, jika ada.
```

### Checklist Rencana

Sebelum rencana dianggap siap, pastikan:

- Tujuan jelas dan tidak melebar.
- File atau area kode yang terdampak disebutkan.
- Langkah implementasi bisa dieksekusi berurutan.
- Ada batasan yang jelas antara termasuk dan tidak termasuk.
- Ada cara verifikasi.
- Risiko utama disebutkan.
- **Next.js sudah aktif** (project tidak lagi menggunakan CRA).
- Tidak mengubah arsitektur besar tanpa alasan yang jelas.

### Rencana untuk Fitur Web

Untuk fitur baru, rencana harus menjawab:

- UI apa yang berubah atau ditambahkan.
- Data apa yang dibutuhkan.
- Component apa yang dibuat atau diperbarui.
- Apakah perlu Server Component atau Client Component.
- Apakah perlu route baru, API route, atau perubahan metadata.
- Bagaimana fitur diverifikasi di desktop dan mobile.

Template singkat:

```md
## Tujuan

Menambahkan [nama fitur] agar pengguna dapat [hasil].

## Ruang Lingkup

- Tambah/perbarui component: [nama component]
- Tambah/perbarui data: [nama file data]
- Tidak termasuk: [batasan]

## Langkah Implementasi

1. Buat atau update type data di `src/types/`.
2. Tambahkan data/config yang dibutuhkan di `src/data/`.
3. Buat/update component UI di `src/components/`.
4. Hubungkan component ke page/section.
5. Verifikasi responsive layout dan state interaksi.
```

### Rencana untuk Perbaikan Bug

Untuk bugfix, rencana harus menjawab:

- Gejala bug.
- Kemungkinan penyebab.
- File yang paling mungkin terdampak.
- Perubahan minimum yang diperlukan.
- Cara membuktikan bug sudah selesai.

Template singkat:

```md
## Tujuan

Memperbaiki bug [deskripsi singkat] pada [area].

## Dugaan Penyebab

[Penyebab teknis yang paling mungkin.]

## Langkah Implementasi

1. Reproduksi atau baca alur bug.
2. Periksa file terkait.
3. Terapkan perubahan terkecil yang memperbaiki penyebab.
4. Jalankan verifikasi.

## Verifikasi

- Bug tidak muncul pada skenario utama.
- Tidak ada regresi pada section terkait.
```

### Rencana untuk Refaktorisasi

Untuk refactor, rencana harus menjaga perilaku lama tetap sama kecuali ada permintaan perubahan eksplisit.

Rencana refactor harus menjawab:

- Apa yang dipindahkan, dipecah, atau diketik ulang.
- Perilaku apa yang harus tetap sama.
- Apakah refactor dilakukan bertahap.
- Bagaimana menghindari perubahan visual yang tidak disengaja.

Template singkat:

```md
## Tujuan

Merapikan [area kode] tanpa mengubah perilaku UI.

## Prinsip

- Perilaku dan tampilan tetap sama.
- Perubahan dilakukan bertahap.
- Data dipisahkan dari UI bila relevan.

## Langkah Implementasi

1. Identifikasi component dan data yang bercampur.
2. Buat type dan file data bila dibutuhkan.
3. Pindahkan logic tanpa mengubah output.
4. Update import dan path.
5. Verifikasi tampilan dan build.
```

### Rencana untuk Investigasi

Untuk investigasi, jangan langsung mengubah kode kecuali sudah jelas penyebabnya.

Rencana investigasi harus menjawab:

- Pertanyaan yang ingin dijawab.
- File atau dependency yang perlu diperiksa.
- Bukti apa yang akan dicari.
- Output akhir investigasi.

Template singkat:

```md
## Tujuan

Menemukan penyebab [masalah/ketidakjelasan].

## Pertanyaan Investigasi

- Apakah [pertanyaan 1]?
- Apakah [pertanyaan 2]?

## Langkah Investigasi

1. Baca file terkait.
2. Periksa dependency atau konfigurasi.
3. Telusuri alur data/component.
4. Rangkum temuan dan rekomendasi.

## Output

- Penyebab paling mungkin.
- File terdampak.
- Rekomendasi perbaikan.
```

### Aturan Singkat untuk AI Agent

- Jika task meminta implementasi, buat rencana singkat lalu eksekusi.
- Jika task meminta rencana saja, jangan ubah kode.
- **Next.js sudah aktif** - jangan tulis rencana migrasi CRA ke Next.js.
- Untuk Next.js, default-kan ke Server Component dan gunakan Client Component hanya saat perlu interaksi.
- Untuk TypeScript, definisikan type sebelum membuat data atau component besar.
- Untuk refactor, jaga tampilan dan perilaku tetap sama kecuali user meminta perubahan.
- Untuk bugfix, pilih perubahan terkecil yang menyelesaikan akar masalah.
- Untuk investigasi, kumpulkan bukti dari file project sebelum menyimpulkan.

## Skill Set Next.js + TypeScript untuk AI Agent

Bagian ini adalah referensi prioritas ketika AI agent membuat keputusan implementasi untuk versi Next.js + TypeScript.

| Area          | Skill yang Dibutuhkan                         | Panduan Keputusan                                                                                                                          |
| ------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Routing       | Next.js App Router                            | Gunakan `src/app`, `layout.tsx`, `page.tsx`, dan dynamic route seperti `projects/[slug]`.                                                  |
| Rendering     | Server Component dan Client Component         | Default gunakan Server Component. Tambahkan `"use client"` hanya untuk state, effect, event browser, form, theme, atau animasi interaktif. |
| Type Safety   | TypeScript                                    | Buat type untuk props, data portfolio, project, skill, social link, navigation, dan response API. Hindari `any`.                           |
| Data          | Typed static data                             | Simpan data di `src/data`. Validasi bentuk data memakai type dari `src/types`.                                                             |
| UI            | Component composition                         | Pisahkan section besar, layout global, dan komponen UI kecil. Hindari satu file terlalu besar.                                             |
| Styling       | CSS Modules, Tailwind CSS, atau CSS variables | Pilih pola yang konsisten. Jangan campur terlalu banyak pendekatan styling tanpa alasan.                                                   |
| Image         | `next/image`                                  | Gunakan untuk profile image, project thumbnail, dan asset penting agar performa lebih baik.                                                |
| Link          | `next/link`                                   | Gunakan untuk navigasi internal. Gunakan anchor biasa untuk link eksternal.                                                                |
| SEO           | Metadata API                                  | Tambahkan title, description, Open Graph, Twitter card, dan metadata halaman project.                                                      |
| Form          | React Hook Form, Zod, Route Handler           | Contact form harus validasi client dan server jika sudah fungsional.                                                                       |
| Animation     | Framer Motion                                 | Bungkus animasi dalam Client Component kecil agar section tetap bisa Server Component.                                                     |
| Performance   | Static-first dan minimal client JS            | Hindari menjadikan semua section Client Component. Kurangi animasi berat di mobile.                                                        |
| Accessibility | Semantic HTML                                 | Gunakan heading berurutan, alt text, label form, focus state, dan aria hanya saat diperlukan.                                              |
| Deployment    | Vercel                                        | Pastikan build Next.js bersih dan environment variable tidak bocor ke client.                                                              |

### Prioritas Implementasi

Jika AI agent harus memilih urutan kerja, gunakan prioritas berikut:

1. ✅ Pertahankan perilaku dan tampilan portfolio yang sudah ada. (SELESAI)
2. ✅ Pindahkan struktur ke Next.js App Router. (SELESAI)
3. ✅ Tambahkan TypeScript type untuk data dan props. (SELESAI)
4. ✅ Pisahkan data dari component. (SELESAI)
5. Optimalkan image, metadata, dan routing. (DAPAT DILANJUTKAN)
6. Rapikan animasi agar terisolasi di Client Component. (SELESAI)
7. Tambahkan fitur baru hanya setelah fondasi migrasi stabil. (BERIKUTNYA)

### Definisi Selesai untuk Refactor Next.js

Refactor **sudah selesai** jika:

- ✅ Project berjalan dengan Next.js dan TypeScript.
- ✅ Halaman utama portfolio tampil lengkap.
- ✅ Section Hero, About, Skills, Projects, Contact, dan Footer tetap ada.
- ✅ Data skill dan project tidak lagi hardcoded langsung di JSX section.
- ✅ Tidak ada penggunaan `any` untuk data domain utama.
- ✅ Metadata dasar tersedia.
- ✅ Build berhasil.
- ✅ Tidak ada perubahan visual besar yang tidak diminta.

## Ringkasan Profil

Software engineer dengan fokus pada pengembangan aplikasi web modern, terutama menggunakan JavaScript, TypeScript, React.js, dan ekosistem frontend modern. Terbiasa membangun antarmuka yang responsif, interaktif, mudah dirawat, serta memperhatikan pengalaman pengguna, struktur komponen, performa, dan kualitas kode.

Project ini menonjolkan kemampuan dalam membangun portfolio interaktif dengan animasi, dark/light mode, reusable components, dan section yang umum digunakan pada website personal seperti hero, about, skills, projects, contact, dan footer.

## Frontend Engineering

| Skill                  | Level | Relevansi di Project                                                                                                                      |
| ---------------------- | ----: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| React.js               |   90% | Membangun UI berbasis komponen seperti `HeroSection`, `AboutSection`, `SkillsSection`, `ProjectsSection`, `ContactSection`, dan `Footer`. |
| JavaScript             |   95% | Mengelola state, event handler, rendering list, filtering project, dan interaksi UI.                                                      |
| TypeScript             |   80% | **Sudah aktif** - Semua file menggunakan TypeScript (.tsx). Type definitions di `src/types/`.                                             |
| Next.js                |   85% | **Sudah aktif** - Menggunakan App Router dengan `layout.tsx` dan `page.tsx`.                                                              |
| CSS Responsive Design  |   90% | Mengatur layout, theme, section styling, grid, card, dan efek visual di `src/app/globals.css`.                                            |
| Component Architecture |   88% | Memisahkan UI menjadi komponen kecil dan reusable di folder `components/`.                                                                |

## Animation and Interaction

| Skill                       | Level | Relevansi di Project                                                                                        |
| --------------------------- | ----: | ----------------------------------------------------------------------------------------------------------- |
| Framer Motion               |   88% | Digunakan untuk animasi entrance, hover state, dan transisi visual di Client Components.                    |
| GSAP                        |   78% | Tersedia sebagai dependency (belum digunakan di migrasi).                                                   |
| AOS / Scroll Animation      |   80% | Diganti dengan `RevealOnScroll.tsx` dan `ScrollReveal.tsx` custom.                                          |
| React Intersection Observer |   82% | Digunakan di `ScrollReveal.tsx` untuk trigger animasi berbasis scroll.                                      |
| Micro-interaction Design    |   85% | Terlihat pada magnetic hover, parallax tilt, typewriter effect, floating elements, dan animated background. |

## Backend and Fullstack Awareness

| Skill                   | Level | Relevansi                                                                               |
| ----------------------- | ----: | --------------------------------------------------------------------------------------- |
| Node.js                 |   85% | Digunakan sebagai fondasi ekosistem tooling dan relevan untuk API/backend portfolio.    |
| REST API Integration    |   82% | Penting untuk menghubungkan contact form, CMS, project data, dan layanan eksternal.     |
| Authentication Concepts |   75% | Relevan untuk project fullstack seperti dashboard atau aplikasi dengan protected route. |
| Database Design         |   78% | Memahami MongoDB dan PostgreSQL untuk kebutuhan aplikasi portfolio dinamis atau CMS.    |
| Deployment Workflow     |   80% | **Sudah aktif** - Next.js siap deploy ke Vercel, Netlify, atau platform cloud lain.     |

## Tools and Workflow

| Skill             | Level | Relevansi                                                                                       |
| ----------------- | ----: | ----------------------------------------------------------------------------------------------- |
| Git               |   88% | Version control untuk pengembangan feature, perbaikan bug, dan kolaborasi.                      |
| Docker            |   70% | Berguna untuk standardisasi environment dan deployment aplikasi fullstack.                      |
| Figma             |   65% | Membantu menerjemahkan desain UI/UX ke komponen frontend yang konsisten.                        |
| npm Scripts       |   80% | Project menggunakan script `dev`, `build`, `start`, dan `lint` dari Next.js.                    |
| Code Organization |   85% | Struktur folder sudah memisahkan `app`, `components`, `animations`, `data`, `types`, dan `lib`. |

## Skill yang Ditampilkan di UI

Daftar skill yang saat ini ditampilkan pada komponen `src/components/sections/SkillsSection.tsx`:

- N8N (Automation)
- Laravel
- React
- Next.js
- TypeScript
- JavaScript
- Node.js
- Python
- MySQL
- MariaDB
- Tailwind CSS
- Docker
- Git

Data skill diambil dari `src/data/skills.ts` (tidak lagi hardcoded). Icon skill disimpan sebagai nama string, lalu diubah menjadi komponen React melalui `iconMap` di `SkillsSection.tsx`.

## Bukti Implementasi di Project

Beberapa bagian project yang menunjukkan penerapan skill teknis:

- `src/app/layout.tsx`: Root layout dengan ThemeProvider, metadata SEO, dan Next.js App Router.
- `src/app/page.tsx`: Halaman utama yang mengkomposisi semua section.
- `src/components/sections/HeroSection.tsx`: Hero section dengan Framer Motion, typewriter effect, social links, call-to-action, dan `iconMap` untuk merender icon social dari data profile.
- `src/components/sections/SkillsSection.tsx`: Rendering skill cards secara dinamis dari `src/data/skills.ts` memakai pola `iconMap`.
- `src/components/sections/ProjectsSection.tsx`: Filter project berdasarkan kategori dan interaksi hover pada project card dari `src/data/projects.ts`.
- `src/animations/`: Kumpulan komponen animasi reusable seperti reveal, parallax, magnetic hover, typewriter, particle background, dan floating elements (semua .tsx).
- `src/app/globals.css`: Styling global, theme, layout section, responsive grid, card style, dan visual treatment.
- `src/types/`: TypeScript type definitions untuk `Skill`, `Project`, `Profile`.
- `src/data/`: Static data yang terpisah dari UI.

## Pola Icon dari Data

Project ini menyimpan nama icon sebagai string di file data, misalnya `FaGithub` di `src/data/profile.ts` atau `SiTypescript` di `src/data/skills.ts`. String tersebut tidak bisa langsung dirender sebagai komponen React.

Pola yang digunakan:

1. Import icon yang dibutuhkan dari `react-icons`.
2. Buat `iconMap: Record<string, React.ReactNode>` di component.
3. Render icon dengan akses map, misalnya `{iconMap[social.icon]}` atau `{iconMap[skill.icon]}`.

Pola ini sudah digunakan di:

- `src/components/sections/HeroSection.tsx` untuk social links seperti GitHub, LinkedIn, dan Instagram.
- `src/components/sections/SkillsSection.tsx` untuk daftar skill.

Jika menambahkan social link atau skill baru, pastikan nama icon di file data juga ditambahkan ke `iconMap` component terkait.

## Catatan Teknologi Project

Saat dokumen ini diperbarui, project **sudah berjalan dengan Next.js + TypeScript**:

**Dependencies utama:**

- `next` 16.x
- `react` 19.x
- `react-dom`
- `framer-motion`
- `react-icons`
- `react-intersection-observer`
- `gsap`
- `aos`
- `typescript`
- `@types/react`
- `@types/node`

**Catatan ReactBits:**

Saat dokumen ini diperbarui, project belum memasang dependency ReactBits dan tidak ada referensi `reactbits`, `ReactBits`, atau `react-bits` di source. Efek animasi yang ada saat ini berasal dari komponen custom di `src/animations/`, `framer-motion`, canvas background, dan dependency animasi lain yang sudah tercantum.

Jika nanti ingin mengambil komponen dari ReactBits, gunakan secara selektif. Portfolio ini sudah memiliki beberapa animasi aktif, sehingga tambahan efek visual sebaiknya diuji di mobile dan tidak dipasang berlebihan.

**Konfigurasi:**

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration dengan path alias `@/*`
- `src/app/layout.tsx` - App Router layout
- `src/app/page.tsx` - Halaman utama

**Tidak lagi menggunakan:**

- ~~`react-scripts`~~ (sudah dihapus)
- ~~`src/App.js`~~ (sudah dihapus)
- ~~`src/index.js`~~ (sudah dihapus)
- ~~File `.js` di `components/` dan `animations/`~~ (sudah dimigrasi ke `.tsx`)

## Rekomendasi Pengembangan Selanjutnya

Karena project **sudah selesai dimigrasi** ke Next.js + TypeScript, berikut adalah rekomendasi untuk pengembangan selanjutnya:

- ✅ Migrasi dari Create React App ke Next.js. (SELESAI)
- ✅ Tambahkan TypeScript agar struktur props, data project, dan reusable animation components lebih aman. (SELESAI)
- ✅ Pisahkan data skill dan project ke file konfigurasi. (SELESAI)
- Tambahkan form contact yang terhubung ke service email atau serverless API.
- Tambahkan testing dasar untuk komponen penting dan utility logic.
- Optimasi performa animasi agar tetap halus di perangkat mobile.
- Ganti placeholder image dengan asset portfolio asli.
- Tambahkan `next/image` untuk optimasi image.
- Tambahkan metadata SEO yang lebih lengkap.
- Pertimbangkan penambahan blog atau CMS jika konten sering berubah.

## Rekomendasi Arsitektur Aplikasi

Project ini **sudah menggunakan** arsitektur modular berbasis feature dan section. Pendekatan ini menjaga portfolio tetap sederhana, tetapi tetap siap berkembang jika nanti ditambahkan blog, CMS, contact API, dashboard kecil, atau halaman detail project.

### Skill Set Arsitektur Aplikasi

Skill arsitektur berikut **sudah diterapkan** dalam project ini:

| Skill Arsitektur                  | Status             | Penerapan di Project Ini                                                            |
| --------------------------------- | ------------------ | ----------------------------------------------------------------------------------- |
| Modular Architecture              | ✅ SELESAI         | Memecah aplikasi menjadi `app`, `components`, `animations`, `data`, `types`, `lib`. |
| Section-Based Architecture        | ✅ SELESAI         | Landing page dibangun dari section di `components/sections/`.                       |
| Component Composition             | ✅ SELESAI         | UI dibangun dari komponen di `components/layout/` dan `components/sections/`.       |
| Data-Driven UI                    | ✅ SELESAI         | Data di `src/data/`, type di `src/types/`.                                          |
| Typed Domain Model                | ✅ SELESAI         | TypeScript types di `src/types/`.                                                   |
| Server-First Architecture         | ✅ SELESAI         | Layout dan page adalah Server Components, interaksi adalah Client Components.       |
| Client Interaction Boundary       | ✅ SELESAI         | `"use client"` digunakan hanya untuk state, effect, form, theme, atau animasi.      |
| Presentation and Logic Separation | ✅ SELESAI         | Data dipisah dari UI di folder `data/`.                                             |
| Static-First Rendering            | ✅ SELESAI         | Portfolio menggunakan static data dan Next.js.                                      |
| Progressive Enhancement           | ✅ SELESAI         | Animasi adalah enhancement, konten utama tetap terbaca.                             |
| SEO-First Architecture            | ✅ SELESAI         | Metadata API di `layout.tsx`.                                                       |
| Performance-Oriented Architecture | ✅ SELESAI         | Minimal client JS, sebagian besar adalah Server Components.                         |
| Accessibility-Aware UI            | DAPAT DITINGKATKAN | Semantic HTML sudah digunakan, dapat ditambah aria labels.                          |
| API Boundary                      | BELUM              | Route `/api/contact/route.ts` dapat ditambahkan jika perlu.                         |

### Pola Arsitektur yang Digunakan

Project ini menggunakan kombinasi pola berikut:

- **Modular Monolith Frontend**: Seluruh portfolio dalam satu aplikasi Next.js, folder dan tanggung jawabnya dipisahkan jelas.
- **Section-Driven Landing Page**: Halaman utama adalah komposisi beberapa section yang bisa dipindah, dihapus, atau diperbarui secara mandiri.
- **Data-Driven Components**: UI membaca data dari file konfigurasi typed di `src/data/`.
- **Server-First with Client Islands**: Sebagian besar UI dirender sebagai Server Component, bagian interaktif menjadi client island kecil.
- **Static-First Content Architecture**: Konten portfolio disimpan statis. CMS atau database hanya ditambahkan jika kebutuhan update konten sudah cukup sering.
- **Design System Lite**: Komponen UI kecil di `components/ui/` (belum dibuat, dapat ditambahkan jika diperlukan).

### Batasan Arsitektur

Agar project tetap sederhana dan tidak over-engineered:

- Jangan memakai state management global seperti Redux/Zustand kecuali ada kebutuhan state lintas halaman yang nyata.
- Jangan menambahkan backend penuh hanya untuk portfolio statis.
- Jangan memakai CMS sebelum konten portfolio benar-benar sering berubah.
- Jangan membuat abstraction terlalu dini untuk component yang hanya dipakai sekali.
- Jangan memindahkan semua animasi ke level global; animasi harus dekat dengan area yang menggunakannya.
- Jangan membuat semua component menjadi Client Component hanya karena ada satu child yang interaktif.

### Target Stack (Sudah Terimplementasi)

| Area       | Status | Implementasi                                                   |
| ---------- | ------ | -------------------------------------------------------------- |
| Framework  | ✅     | Next.js dengan App Router                                      |
| Language   | ✅     | TypeScript                                                     |
| UI Library | ✅     | React                                                          |
| Styling    | ✅     | CSS di `globals.css` (dapat diupgrade ke Tailwind/CSS Modules) |
| Animation  | ✅     | Framer Motion sebagai animasi utama                            |
| Icons      | ✅     | React Icons                                                    |
| Form       | BELUM  | Dapat ditambahkan React Hook Form + Zod                        |
| Content    | ✅     | File data TypeScript di `src/data/`                            |
| Deployment | SIAP   | Vercel (build berhasil)                                        |

### Pembagian Layer

Arsitektur ini dibagi menjadi beberapa layer sederhana:

| Layer                  | Tanggung Jawab                                         | Status                   |
| ---------------------- | ------------------------------------------------------ | ------------------------ |
| `app/`                 | Routing, layout global, metadata, dan halaman Next.js. | ✅ Aktif                 |
| `components/sections/` | Section utama portfolio.                               | ✅ Aktif                 |
| `components/ui/`       | Komponen kecil reusable.                               | ⚪ Kosong (belum dibuat) |
| `animations/`          | Komponen animasi reusable.                             | ✅ Aktif                 |
| `data/`                | Data portfolio.                                        | ✅ Aktif                 |
| `types/`               | TypeScript type/interface.                             | ✅ Aktif                 |
| `lib/`                 | Helper umum.                                           | ✅ Aktif (theme-context) |

### Prinsip Arsitektur

Beberapa prinsip yang **sudah diterapkan**:

- ✅ Data dipisahkan dari UI. Data di `src/data/`, UI di `components/`.
- ✅ TypeScript type untuk data penting di `src/types/`.
- ✅ Section sebagai komponen besar, UI kecil di `components/ui/` (belum dibuat).
- ✅ Logic animasi di folder `animations/` terpisah dari konten.
- ✅ Next.js Metadata API untuk SEO di `app/layout.tsx`.
- ⚪ `next/image` belum digunakan (masih pakai `<img>` biasa).
- ⚪ Route detail project `/projects/[slug]` belum dibuat.
- ✅ Client Components dibatasi hanya untuk bagian yang butuh interaksi.

### Server Component dan Client Component

Di Next.js App Router, default component adalah Server Component. Pembagian yang digunakan:

| Jenis Component  | Contoh                                                                                                                                             | Status   |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Server Component | `layout.tsx`, `page.tsx`, `Footer.tsx`                                                                                                             | ✅ Aktif |
| Client Component | `Navbar.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `SkillsSection.tsx`, `ProjectsSection.tsx`, `ContactSection.tsx`, semua file di `animations/` | ✅ Aktif |

Directive `"use client"` digunakan pada komponen yang membutuhkan hook seperti `useState`, `useEffect`, event listener, atau library animasi berbasis browser.

### Data Model yang Digunakan

Type untuk skill (`src/types/skill.ts`):

```ts
export type Skill = {
  name: string;
  icon: string; // Icon name from react-icons
  level: number;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'design';
};
```

Type untuk project (`src/types/project.ts`):

```ts
export type Project = {
  id: number;
  title: string;
  category: 'frontend' | 'backend' | 'fullstack';
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  gradient: string;
};
```

### Roadmap Pengembangan Selanjutnya

Urutan pengembangan yang disarankan (setelah migrasi selesai):

1. ✅ Buat project Next.js baru dengan TypeScript. (SELESAI)
2. ✅ Pindahkan styling global dan design token. (SELESAI)
3. ✅ Migrasi komponen layout: Navbar, Footer. (SELESAI)
4. ✅ Migrasi section: Hero, About, Skills, Projects, Contact. (SELESAI)
5. ✅ Pindahkan data hardcoded ke folder `data/`. (SELESAI)
6. ✅ Tambahkan type di folder `types/`. (SELESAI)
7. ✅ Pisahkan animasi yang butuh browser API menjadi Client Component. (SELESAI)
8. ⚪ Optimasi image menggunakan `next/image`. (DAPAT DILANJUTKAN)
9. ⚪ Tambahkan metadata SEO yang lebih lengkap. (DAPAT DITINGKATKAN)
10. ⚪ Tambahkan API route untuk contact form. (DAPAT DITAMBAHKAN)
11. ⚪ Jalankan audit build, lint, responsive layout, dan performa animasi. (DAPAT DILAKUKAN)
12. ⚪ Tambahkan fitur baru (blog, CMS, detail project) jika diperlukan. (MENDATANG)

### Target Akhir Arsitektur

Target akhir yang **sudah dicapai**:

- ✅ Mudah diubah kontennya tanpa menyentuh banyak component.
- ✅ Lebih aman dikembangkan karena memakai TypeScript.
- ✅ Lebih baik untuk SEO karena menggunakan Next.js.
- ✅ Lebih siap production karena mendukung metadata, dan deployment Vercel.
- ✅ Tetap interaktif, tetapi animasinya terorganisir dan tidak mengganggu performa.

## Versi Singkat untuk Portfolio

Saya memiliki keahlian utama di React.js, JavaScript, TypeScript, dan ekosistem frontend modern. Saya terbiasa membangun aplikasi web yang responsif, interaktif, dan mudah dikembangkan dengan pendekatan component-based architecture. Selain frontend, saya juga memahami dasar fullstack development menggunakan Node.js, database seperti MongoDB dan PostgreSQL, workflow Git, deployment, serta praktik UI/UX yang mendukung pengalaman pengguna yang baik.

**Status**: Portfolio ini **sudah menggunakan Next.js + TypeScript** dengan arsitektur modular yang mudah dikembangkan.
