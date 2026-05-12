# Panduan Belajar Next.js, TypeScript, React, dan Skill Software Engineer

Dokumen ini dibuat untuk programmer pemula yang sedang belajar dari project portfolio ini. Fokus utamanya adalah memahami teknologi yang sudah digunakan sekarang, yaitu **Next.js**, **React.js**, dan **TypeScript**, sekaligus menyiapkan fondasi untuk pengembangan berikutnya seperti **CMS portfolio** dan **blog**.

Project ini cocok dijadikan bahan belajar karena ukurannya tidak terlalu besar, tetapi sudah punya banyak konsep penting:

- Routing dan layout Next.js.
- Komponen React.
- TypeScript untuk type safety.
- Data portfolio yang dipisah dari UI.
- Animasi interaktif.
- Theme dark/light.
- SEO metadata.
- Struktur folder yang mulai modular.

## Gambaran Project Saat Ini

Project ini adalah website portfolio modern. Halaman utama menyusun beberapa section:

- Hero
- About
- Skills
- Projects
- Contact
- Footer

Struktur penting saat ini:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css

  animations/
    FloatingElements.tsx
    MagneticHover.tsx
    ParallaxTilt.tsx
    ParticleBackground.tsx
    RevealOnScroll.tsx
    ScrollReveal.tsx
    TextReveal.tsx
    TypewriterEffect.tsx

  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      AboutSection.tsx
      SkillsSection.tsx
      ProjectsSection.tsx
      ContactSection.tsx
    ui/

  data/
    profile.ts
    projects.ts
    skills.ts

  lib/
    theme-context.tsx

  types/
    index.ts
    profile.ts
    project.ts
    skill.ts
```

File paling penting untuk dipahami pertama:

- `src/app/layout.tsx`: layout utama aplikasi dan metadata SEO.
- `src/app/page.tsx`: halaman utama yang menyusun semua section.
- `src/components/sections/*`: isi utama portfolio.
- `src/data/*`: data profile, skill, dan project.
- `src/types/*`: definisi bentuk data TypeScript.
- `src/lib/theme-context.tsx`: contoh state global sederhana untuk dark/light mode.

## Instalasi dan Menjalankan Project

Bagian ini menjelaskan cara menyiapkan project portfolio di komputer lokal. Ikuti langkahnya berurutan.

### 1. Pastikan Node.js dan npm Terpasang

Project ini berjalan dengan ekosistem Node.js. Node.js dipakai untuk menjalankan Next.js, sedangkan npm dipakai untuk mengelola dependency.

Cek versi Node.js:

```bash
node -v
```

Cek versi npm:

```bash
npm -v
```

Jika command tersebut menampilkan nomor versi, berarti Node.js dan npm sudah terpasang.

Penjelasan:

- `node`: runtime untuk menjalankan JavaScript di luar browser.
- `npm`: package manager untuk install library seperti Next.js, React, TypeScript, dan Framer Motion.
- `package.json`: daftar dependency dan script project.
- `package-lock.json`: file pengunci versi dependency agar install lebih konsisten.

### 2. Masuk ke Folder Project

Pastikan terminal berada di root project:

```bash
cd d:\dev\source\self\new-portfolio
```

Root project adalah folder yang berisi file seperti:

- `package.json`
- `package-lock.json`
- `next.config.js`
- `tsconfig.json`
- folder `src`
- folder `public`
- folder `docs`

### 3. Install Dependency

Jalankan:

```bash
npm install
```

Command ini akan membaca `package.json` dan `package-lock.json`, lalu mengunduh semua dependency ke folder `node_modules`.

Dependency penting di project ini:

| Dependency | Fungsi |
| --- | --- |
| `next` | Framework utama untuk aplikasi React dengan routing, build, metadata, dan optimasi. |
| `react` | Library untuk membangun UI berbasis component. |
| `react-dom` | Menghubungkan React dengan DOM browser. |
| `typescript` | Menambahkan type checking ke JavaScript. |
| `framer-motion` | Library animasi React. |
| `gsap` | Library animasi lanjutan. |
| `aos` | Library animation on scroll. |
| `react-icons` | Kumpulan icon untuk React. |
| `react-intersection-observer` | Membantu mendeteksi elemen yang masuk viewport. |
| `@types/node` | Type definition untuk Node.js. |
| `@types/react` | Type definition untuk React. |

Catatan:

- Project ini belum memasang ReactBits. Tidak ada dependency atau import `reactbits`, `ReactBits`, atau `react-bits`.
- Animasi yang aktif saat ini berasal dari komponen custom di `src/animations`, `framer-motion`, dan canvas background.
- Folder `node_modules` tidak perlu diedit manual.
- Jika install bermasalah, hapus `node_modules` dan jalankan `npm install` lagi.
- Jangan mengubah `package-lock.json` secara manual.

### 4. Jalankan Development Server

Untuk menjalankan project saat development:

```bash
npm run dev
```

Script ini menjalankan:

```bash
next dev
```

Biasanya aplikasi bisa dibuka di:

```txt
http://localhost:3000
```

Penjelasan:

- Mode development dipakai saat coding.
- Perubahan file akan otomatis direload oleh Next.js.
- Error akan muncul di terminal atau browser.
- Gunakan mode ini untuk belajar, eksperimen, dan memperbaiki UI.

### 5. Build Production

Untuk mengecek apakah project siap production:

```bash
npm run build
```

Script ini menjalankan:

```bash
next build --webpack
```

Build akan:

- Mengecek error TypeScript.
- Mengecek struktur route Next.js.
- Mengoptimasi aplikasi untuk production.
- Membuat output build di folder `.next`.

Jika build gagal, baca error dari atas ke bawah. Biasanya error terjadi karena:

- TypeScript type tidak cocok.
- Import path salah.
- Component memakai `window` atau `document` di Server Component.
- Ada dependency atau file yang belum tersedia.
- Ada JSX yang tidak valid.

### 6. Jalankan Build Production di Lokal

Setelah build berhasil, jalankan versi production:

```bash
npm run start
```

Script ini menjalankan:

```bash
next start
```

Gunakan command ini untuk mengecek perilaku aplikasi seperti saat sudah dideploy.

Catatan penting:

- `npm run start` membutuhkan hasil dari `npm run build`.
- Jika belum build, jalankan `npm run build` terlebih dahulu.
- Karena project memakai `output: 'export'`, hasil deploy utama berada di folder `out`. Untuk GitHub Pages, gunakan `npm run deploy` setelah build.

### 7. Linting

Di `package.json`, tersedia script:

```bash
npm run lint
```

Script saat ini menjalankan:

```bash
next lint
```

Linting dipakai untuk mengecek gaya kode, potensi bug, dan aturan penulisan. Jika command lint bermasalah karena perubahan versi Next.js, nanti script bisa disesuaikan dengan konfigurasi ESLint yang lebih baru.

Untuk pemula, pahami lint sebagai "pemeriksa kerapian dan potensi masalah kode".

## Script Project di `package.json`

Project ini punya script utama:

| Script | Command Asli | Kapan Dipakai |
| --- | --- | --- |
| `npm run dev` | `next dev` | Saat coding dan melihat perubahan langsung. |
| `npm run build` | `next build --webpack` | Saat mengecek apakah project siap production dan menghasilkan static output. |
| `npm run start` | `next start` | Saat menjalankan hasil build production. |
| `npm run lint` | `next lint` | Saat mengecek aturan kode dan potensi masalah. |
| `npm run deploy` | `gh-pages -d out --dotfiles` | Saat deploy static output dari folder `out` ke GitHub Pages. |

Alur harian yang disarankan:

```bash
npm run dev
```

Lalu setelah selesai mengerjakan fitur:

```bash
npm run build
```

Jika build berhasil, project lebih aman untuk disimpan, di-commit, atau dideploy.

## Penjelasan Setting Project

### `next.config.js`

Isi saat ini:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

Penjelasan:

- `next.config.js` adalah file konfigurasi Next.js.
- `output: 'export'` membuat hasil build static ke folder `out`, cocok untuk hosting seperti GitHub Pages.
- `trailingSlash: true` membuat URL static lebih aman untuk hosting berbasis file.
- `images.unoptimized: true` diperlukan karena static export tidak memakai optimizer image bawaan server Next.js.

Setting yang mungkin ditambahkan nanti:

- Redirect atau rewrite URL.
- Konfigurasi eksperimen Next.js jika diperlukan.
- Optimasi build tertentu.

### `tsconfig.json`

File ini mengatur cara TypeScript bekerja di project.

Setting penting saat ini:

| Setting | Arti |
| --- | --- |
| `strict: true` | TypeScript akan lebih ketat mengecek type. Ini bagus untuk belajar dan mencegah bug. |
| `allowJs: true` | File JavaScript masih diizinkan. Berguna saat migrasi bertahap. |
| `noEmit: true` | TypeScript hanya mengecek type, tidak menghasilkan file build sendiri. Build ditangani Next.js. |
| `jsx: react-jsx` | Mengaktifkan syntax JSX/TSX modern. |
| `moduleResolution: bundler` | Cara TypeScript mencari module mengikuti pola bundler modern. |
| `paths @/*` | Membuat alias import dari folder `src`. |

Contoh alias:

```ts
import HeroSection from '@/components/sections/HeroSection';
```

Artinya sama seperti import dari:

```ts
import HeroSection from '../components/sections/HeroSection';
```

Kelebihan alias `@/*`:

- Import lebih pendek.
- Lebih mudah dibaca.
- Tidak banyak `../../`.

### `next-env.d.ts`

File ini dibuat oleh Next.js untuk membantu TypeScript mengenali type bawaan Next.js. Biasanya file ini tidak perlu diedit manual.

### `.next`

Folder `.next` adalah hasil build dan cache Next.js.

Catatan:

- Tidak perlu diedit manual.
- Bisa dihapus jika build cache bermasalah.
- Akan dibuat ulang oleh `npm run dev` atau `npm run build`.

### `public`

Folder `public` dipakai untuk asset statis seperti:

- gambar
- icon
- file resume
- favicon
- Open Graph image

File di dalam `public` bisa diakses langsung dari root URL.

Contoh:

```txt
public/profile.jpg
```

Bisa dipakai sebagai:

```txt
/profile.jpg
```

### `src/app/globals.css`

File ini berisi style global untuk aplikasi.

Gunakan untuk:

- CSS variable.
- Theme dasar.
- Reset style.
- Style global section.

Hindari membuat file ini terlalu sulit dibaca. Jika style makin besar, pertimbangkan memecah style ke CSS Modules atau struktur style yang lebih modular.

## Step-by-Step Pengembangan Project Portfolio

Bagian ini menjelaskan urutan pengembangan project yang disarankan. Ikuti urutan ini agar tidak bingung dan tidak mengubah terlalu banyak hal sekaligus.

### Step 1: Pahami Halaman Utama

Mulai dari:

```txt
src/app/page.tsx
```

File ini menyusun halaman utama:

- `Navbar`
- `HeroSection`
- `AboutSection`
- `SkillsSection`
- `ProjectsSection`
- `ContactSection`
- `Footer`
- `ParticleBackground`
- `FloatingElements`

Tujuan belajar:

- Paham bahwa halaman utama adalah komposisi beberapa component.
- Paham bahwa setiap section punya tanggung jawab sendiri.

### Step 2: Pahami Layout Global

Buka:

```txt
src/app/layout.tsx
```

Yang dipelajari:

- Metadata SEO.
- Struktur `<html>` dan `<body>`.
- `ThemeProvider` yang membungkus aplikasi.

Tujuan belajar:

- Paham layout adalah pembungkus semua halaman.
- Paham metadata membantu SEO dan social preview.

### Step 3: Pahami Data Portfolio

Buka:

```txt
src/data/profile.ts
src/data/skills.ts
src/data/projects.ts
```

Yang dipelajari:

- Data disimpan sebagai array atau object.
- UI membaca data dari file ini.
- Mengubah data bisa mengubah tampilan tanpa mengubah JSX besar.
- Beberapa data icon disimpan sebagai string, lalu dirender lewat `iconMap` di component.

Tujuan belajar:

- Paham konsep data-driven UI.
- Bisa menambah skill atau project baru.
- Bisa menambah social link atau skill baru tanpa mematahkan render icon.

### Step 4: Pahami TypeScript Type

Buka:

```txt
src/types/profile.ts
src/types/skill.ts
src/types/project.ts
src/types/index.ts
```

Yang dipelajari:

- Type adalah kontrak bentuk data.
- Data di `src/data` harus mengikuti type di `src/types`.
- Type membantu mencegah typo dan data tidak lengkap.

Tujuan belajar:

- Bisa membaca type.
- Bisa membuat type baru untuk fitur blog atau CMS.

### Step 5: Pahami Component Section

Buka folder:

```txt
src/components/sections
```

Mulai dari urutan:

1. `HeroSection.tsx`
2. `AboutSection.tsx`
3. `SkillsSection.tsx`
4. `ProjectsSection.tsx`
5. `ContactSection.tsx`

Yang dipelajari:

- Cara component memakai data.
- Cara JSX membentuk UI.
- Cara class CSS dipakai.
- Cara animasi dibungkus di component.
- Cara `HeroSection.tsx` dan `SkillsSection.tsx` mengubah nama icon string menjadi komponen React melalui `iconMap`.

Tujuan belajar:

- Bisa membuat section baru.
- Bisa memecah section besar menjadi component kecil.

Catatan icon:

- `src/data/profile.ts` menyimpan social icon seperti `FaGithub`, `FaLinkedin`, dan `FaInstagram`.
- `src/data/skills.ts` menyimpan skill icon seperti `FaReact`, `SiTypescript`, dan `SiMysql`.
- String tersebut tidak bisa langsung dirender sebagai `<social.icon />`.
- Component harus punya map icon, lalu render dengan `{iconMap[social.icon]}` atau `{iconMap[skill.icon]}`.

### Step 6: Pahami Theme

Buka:

```txt
src/lib/theme-context.tsx
```

Yang dipelajari:

- `"use client"`
- `useState`
- `useEffect`
- `createContext`
- `useContext`
- custom hook `useTheme`

Tujuan belajar:

- Paham kenapa theme harus berjalan di browser.
- Paham contoh sederhana state yang dipakai banyak component.

### Step 7: Pahami Animasi

Buka folder:

```txt
src/animations
```

Yang dipelajari:

- Animasi sering butuh Client Component.
- Framer Motion dipakai untuk animasi React.
- Animasi harus reusable dan tidak terlalu berat.

Tujuan belajar:

- Bisa memakai animasi tanpa mencampur semua logic ke section.
- Bisa membedakan UI utama dan enhancement visual.

### Step 8: Tambahkan Konten Asli

Setelah paham struktur, ganti placeholder:

- Nama profile.
- Role.
- Deskripsi diri.
- Link GitHub/LinkedIn.
- Project asli.
- Skill asli.
- Gambar profile.

File yang biasanya diubah:

```txt
src/data/profile.ts
src/data/skills.ts
src/data/projects.ts
public/
```

Tujuan belajar:

- Berlatih mengubah data tanpa merusak struktur.
- Membuat portfolio mulai terasa personal.

### Step 9: Tambahkan Halaman Project Detail

Setelah project list stabil, buat halaman detail:

```txt
src/app/projects/[slug]/page.tsx
```

Materi yang dipelajari:

- Dynamic route.
- Slug.
- Mencari data project berdasarkan slug.
- Metadata per project.

Tujuan:

- Setiap project bisa punya studi kasus sendiri.

### Step 10: Tambahkan Blog

Struktur awal yang disarankan:

```txt
src/app/blog/page.tsx
src/app/blog/[slug]/page.tsx
src/data/blog-posts.ts
src/types/blog.ts
```

Materi yang dipelajari:

- Blog list.
- Blog detail.
- Content model.
- Dynamic route.
- SEO artikel.

Tujuan:

- Portfolio tidak hanya menampilkan hasil, tetapi juga proses berpikir dan pembelajaran.

### Step 11: Tambahkan Contact API

Jika form contact ingin benar-benar mengirim pesan:

```txt
src/app/api/contact/route.ts
```

Materi yang dipelajari:

- API route.
- Request dan response.
- Validasi input.
- Environment variable.
- Integrasi email service.

Tujuan:

- Contact form tidak hanya tampilan, tetapi berfungsi.

### Step 12: Persiapan CMS

CMS sebaiknya dibuat setelah struktur portfolio dan blog stabil.

Tahapan aman:

1. Mulai dari data statis di `src/data`.
2. Tambahkan blog statis.
3. Tambahkan MDX jika ingin artikel lebih fleksibel.
4. Baru pertimbangkan database atau headless CMS.
5. Jika membuat CMS sendiri, tambahkan auth dan dashboard admin.

Tujuan:

- Tidak over-engineering di awal.
- Belajar bertahap dari static content ke dynamic content.

## Environment Variable

Saat project mulai memakai API seperti email service, database, atau CMS, kamu akan membutuhkan environment variable.

Contoh file:

```txt
.env.local
```

Contoh isi:

```env
CONTACT_EMAIL_TO=nama@email.com
EMAIL_SERVICE_API_KEY=isi_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Aturan penting:

- Jangan commit `.env.local` ke Git.
- Variable tanpa prefix `NEXT_PUBLIC_` hanya boleh dipakai di server.
- Variable dengan prefix `NEXT_PUBLIC_` bisa terbaca di browser.
- Secret key jangan pernah memakai prefix `NEXT_PUBLIC_`.

Contoh aman:

```env
EMAIL_SERVICE_API_KEY=secret_key
```

Contoh yang harus dihindari:

```env
NEXT_PUBLIC_EMAIL_SERVICE_API_KEY=secret_key
```

## Build dan Deploy

### Sebelum Deploy

Jalankan:

```bash
npm run build
```

Cek:

- Tidak ada error TypeScript.
- Tidak ada route yang rusak.
- Tidak ada import yang salah.
- Gambar penting punya `alt`.
- Link internal memakai `next/link`.
- Metadata dasar sudah tersedia.

### Deploy ke Vercel

Vercel cocok untuk Next.js karena dibuat untuk workflow Next.js.

Alur umum:

1. Push project ke GitHub.
2. Login ke Vercel.
3. Import repository.
4. Pastikan framework terdeteksi sebagai Next.js.
5. Tambahkan environment variable jika ada.
6. Deploy.

Setelah deploy:

- Cek halaman utama.
- Cek responsive layout.
- Cek link social.
- Cek metadata social preview.
- Cek contact form jika sudah aktif.

## Troubleshooting Dasar

### Port 3000 Sudah Dipakai

Jika `npm run dev` gagal karena port 3000 sudah dipakai, Next.js biasanya menawarkan port lain. Kamu juga bisa menghentikan proses lama atau memakai port berbeda.

### Module Tidak Ditemukan

Contoh error:

```txt
Module not found
```

Yang perlu dicek:

- Nama file benar.
- Path import benar.
- Alias `@/` mengarah ke `src`.
- Dependency sudah di-install.

### Error TypeScript

Yang perlu dilakukan:

- Baca nama file dan nomor line.
- Lihat type yang diminta.
- Cocokkan data dengan type.
- Jangan langsung memakai `any`.

### Error Karena `window` atau `document`

Jika error muncul karena `window` atau `document`, kemungkinan kode berjalan sebagai Server Component.

Solusi:

- Pindahkan logic ke Client Component.
- Tambahkan `"use client"` pada component yang memang butuh browser API.
- Pastikan akses browser API dilakukan di `useEffect` jika perlu.

### Styling Tidak Berubah

Cek:

- Class name benar.
- File CSS ter-import.
- Cache browser.
- Style tidak tertimpa selector lain.

### Icon Social atau Skill Tidak Muncul

Jika icon seperti GitHub, LinkedIn, Instagram, atau skill tidak tampil, cek:

- Nama icon di file data sesuai dengan key di `iconMap`.
- Icon sudah di-import dari package yang benar, misalnya `react-icons/fa` atau `react-icons/si`.
- Component merender `{iconMap[social.icon]}` atau `{iconMap[skill.icon]}`, bukan `<social.icon />`.
- Jika menambah icon baru di `src/data/profile.ts` atau `src/data/skills.ts`, tambahkan juga icon tersebut ke `iconMap` component terkait.

### Build Berhasil tetapi Tampilan Berbeda

Cek:

- Perbedaan development dan production.
- Data environment variable.
- Image remote domain.
- Component yang bergantung pada browser API.

## Urutan Belajar yang Disarankan

Jangan mulai dari semua teknologi sekaligus. Ikuti urutan ini agar lebih ringan.

### 1. Dasar Web

Pelajari dulu:

- HTML: struktur halaman.
- CSS: styling, layout, responsive design.
- JavaScript: logic, variable, function, array, object, condition, loop.
- DOM: cara JavaScript berinteraksi dengan halaman.

Target pemahaman:

- Bisa membuat halaman sederhana dengan section.
- Bisa membuat button yang bereaksi saat diklik.
- Bisa memakai array dan object untuk menyimpan data.

### 2. JavaScript Modern

Materi penting:

- `const` dan `let`
- Arrow function
- Array method: `map`, `filter`, `find`
- Object destructuring
- Spread operator
- Module import/export
- Promise dan async/await

Contoh yang sering muncul di React:

```ts
const technologies = ['React', 'Next.js', 'TypeScript'];

const labels = technologies.map((tech) => tech.toUpperCase());
```

### 3. TypeScript Dasar

TypeScript adalah JavaScript yang ditambah sistem type. Tujuannya membantu kita menemukan error lebih cepat sebelum aplikasi dijalankan.

Materi penting:

- Type dasar: `string`, `number`, `boolean`
- Array type
- Object type
- Union type
- Optional property
- Function parameter type
- Return type
- Type alias
- Interface

Contoh:

```ts
type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tool';
};

const skill: Skill = {
  name: 'Next.js',
  level: 85,
  category: 'frontend',
};
```

Maknanya:

- `name` harus teks.
- `level` harus angka.
- `category` hanya boleh salah satu dari nilai yang sudah ditentukan.

### 4. React.js

React adalah library untuk membangun UI dengan konsep component.

Materi penting:

- Component
- Props
- State
- Event handler
- Conditional rendering
- List rendering dengan `map`
- Hooks seperti `useState`, `useEffect`, dan `useContext`

Contoh component:

```tsx
type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return <span className="tech-tag">{label}</span>;
}
```

Maknanya:

- `TechBadge` adalah komponen kecil.
- Komponen menerima data lewat `props`.
- `label` harus bertipe `string`.

### 5. Next.js

Next.js adalah framework React. React mengurus UI, sedangkan Next.js menambahkan fitur aplikasi lengkap seperti routing, layout, metadata, optimasi image, API route, dan rendering.

Materi penting:

- App Router
- `layout.tsx`
- `page.tsx`
- Server Component
- Client Component
- Metadata API
- Dynamic route
- Route Handler
- `next/image`
- `next/link`

Di project ini:

- `src/app/layout.tsx` adalah layout global.
- `src/app/page.tsx` adalah halaman utama `/`.
- Metadata SEO ditulis di `layout.tsx`.

## Istilah Penting

### Framework

Framework adalah kerangka kerja yang memberi struktur dan aturan. Next.js adalah framework untuk React.

### Library

Library adalah kumpulan fungsi atau komponen yang membantu pekerjaan tertentu. React adalah library UI.

### Component

Component adalah bagian UI yang bisa dipakai ulang. Contoh: `Navbar`, `Footer`, `HeroSection`, `SkillsSection`.

### Props

Props adalah data yang dikirim dari parent component ke child component.

### State

State adalah data yang bisa berubah dan mempengaruhi tampilan UI. Contoh: dark mode aktif atau tidak.

### Hook

Hook adalah fungsi khusus React untuk menggunakan fitur React di function component. Contoh: `useState`, `useEffect`, `useContext`.

### JSX dan TSX

JSX adalah syntax untuk menulis HTML-like code di JavaScript. TSX adalah JSX yang memakai TypeScript.

### Type

Type menjelaskan bentuk data. Contoh: `string`, `number`, atau object seperti `Project`.

### Interface

Interface mirip dengan type. Biasanya dipakai untuk mendefinisikan bentuk object.

### Module

Module adalah file yang mengekspor dan mengimpor kode. Contoh: `export const projects` lalu di file lain `import { projects }`.

### Routing

Routing adalah cara aplikasi menentukan halaman berdasarkan URL. Di Next.js App Router, file `page.tsx` menjadi halaman.

### Layout

Layout adalah struktur yang membungkus halaman. Cocok untuk navbar, footer, provider, dan metadata global.

### Server Component

Server Component adalah component Next.js yang dirender di server. Ini cocok untuk konten statis dan data yang tidak butuh interaksi browser.

### Client Component

Client Component adalah component yang berjalan di browser. Ini diperlukan untuk state, effect, event click, animasi interaktif, dan akses `window` atau `document`.

### Metadata

Metadata adalah informasi untuk browser dan search engine, seperti title, description, dan Open Graph.

### API Route / Route Handler

Route Handler adalah endpoint backend kecil di dalam Next.js. Cocok untuk contact form, submit pesan, atau integrasi email.

### CMS

CMS atau Content Management System adalah sistem untuk mengelola konten tanpa mengubah kode langsung. Contoh konten: profile, project, blog post, skill.

### MDX

MDX adalah Markdown yang bisa memakai component React. Cocok untuk blog teknis atau dokumentasi portfolio.

## Skill Set Software Engineer yang Perlu Dikuasai

### Frontend

Skill utama:

- HTML semantic.
- CSS responsive.
- JavaScript modern.
- TypeScript.
- React component.
- Next.js App Router.
- Animasi UI.
- Accessibility dasar.
- SEO dasar.

Yang perlu dilatih di project ini:

- Membaca `page.tsx` untuk memahami komposisi halaman.
- Membaca `components/sections` untuk memahami section.
- Membaca `data` untuk memahami data-driven UI.
- Membaca `types` untuk memahami type safety.

### TypeScript

Skill utama:

- Membuat type untuk data.
- Membuat type untuk props.
- Menghindari `any`.
- Memahami union type.
- Memahami optional property.
- Memahami import/export type.

Latihan dari project:

- Buka `src/types/project.ts`.
- Bandingkan dengan `src/data/projects.ts`.
- Pastikan setiap data project mengikuti type `Project`.

### React

Skill utama:

- Membuat component kecil.
- Mengirim props.
- Menggunakan state.
- Menggunakan effect dengan hati-hati.
- Mapping array ke UI.
- Memecah UI menjadi bagian kecil.

Latihan dari project:

- Baca `SkillsSection.tsx`.
- Cari bagian yang melakukan `skills.map`.
- Pahami bagaimana data berubah menjadi card skill.

### Next.js

Skill utama:

- App Router.
- Layout dan page.
- Metadata.
- Server Component.
- Client Component.
- Dynamic route.
- Route Handler.
- Optimasi image.
- Deployment.

Latihan dari project:

- Baca `src/app/layout.tsx`.
- Baca `src/app/page.tsx`.
- Pahami kenapa semua section di-import ke halaman utama.

### UI/UX

Skill utama:

- Konsistensi spacing.
- Warna dan kontras.
- Responsiveness.
- Hover dan focus state.
- Navigasi yang jelas.
- Form yang mudah dipakai.

Latihan dari project:

- Buka `src/app/globals.css`.
- Cari style untuk card, section, dan button.
- Coba pahami pola class yang berulang.

### Software Architecture

Skill utama:

- Memisahkan data dari UI.
- Memisahkan component berdasarkan tanggung jawab.
- Membuat folder yang mudah dinavigasi.
- Menghindari file terlalu besar.
- Membuat type sebagai kontrak data.

Arsitektur yang cocok untuk project ini:

- `app`: routing dan layout Next.js.
- `components/layout`: navbar dan footer.
- `components/sections`: bagian utama halaman.
- `components/ui`: komponen kecil reusable.
- `animations`: komponen animasi.
- `data`: konten portfolio.
- `types`: type data.
- `lib`: helper, context, utility.

## Cara Membaca Project Ini

Ikuti alur ini:

1. Mulai dari `src/app/page.tsx`.
2. Lihat component apa saja yang dirender.
3. Buka satu section, misalnya `SkillsSection.tsx`.
4. Cari data yang dipakai dari folder `data`.
5. Buka type yang digunakan dari folder `types`.
6. Baca style yang terkait di `globals.css`.
7. Jika ada animasi, buka file di folder `animations`.

Dengan cara ini, kamu belajar dari luar ke dalam.

## Materi Belajar Berdasarkan Folder

### `src/app`

Pelajari:

- App Router.
- Layout.
- Page.
- Metadata.
- Global CSS.

Pertanyaan belajar:

- Kenapa `layout.tsx` membungkus semua halaman?
- Kenapa `page.tsx` menjadi halaman utama?
- Apa fungsi `metadata`?

### `src/components`

Pelajari:

- Component React.
- Props.
- Composition.
- Pemisahan layout dan section.

Pertanyaan belajar:

- Apa bedanya `layout` dan `sections`?
- Kapan component perlu dipindah ke `ui`?

### `src/data`

Pelajari:

- Data-driven UI.
- Array object.
- Import/export data.

Pertanyaan belajar:

- Kenapa data project tidak ditulis langsung di JSX?
- Apa keuntungan data dipisah?

### `src/types`

Pelajari:

- TypeScript type.
- Type sebagai kontrak.
- Export type dari `index.ts`.

Pertanyaan belajar:

- Apa yang terjadi jika data tidak sesuai type?
- Kenapa type membantu saat refactor?

### `src/animations`

Pelajari:

- Client Component.
- Framer Motion.
- Event mouse.
- Scroll reveal.
- Animasi yang reusable.

Pertanyaan belajar:

- Kenapa animasi biasanya butuh `"use client"`?
- Bagaimana membuat animasi tidak mengganggu performa?

### `src/lib`

Pelajari:

- Context.
- Custom hook.
- Helper.
- Shared logic.

Pertanyaan belajar:

- Kenapa theme context ada di `lib`?
- Apa fungsi `useTheme`?

## Roadmap Belajar 12 Minggu

### Minggu 1-2: Dasar Web dan JavaScript

Target:

- Paham HTML, CSS, JavaScript dasar.
- Bisa membuat halaman portfolio sederhana tanpa React.

Latihan:

- Buat section hero sederhana.
- Buat array skill dan tampilkan dengan JavaScript.

### Minggu 3-4: TypeScript Dasar

Target:

- Paham type dasar, object type, union type.
- Bisa membuat type untuk skill dan project.

Latihan:

- Buat file latihan `Skill` dan `Project`.
- Coba ubah data salah type dan lihat error.

### Minggu 5-6: React Dasar

Target:

- Paham component, props, state, dan list rendering.
- Bisa membuat section portfolio sendiri.

Latihan:

- Buat component `TechBadge`.
- Buat component `ProjectCard`.
- Render daftar project dari array.

### Minggu 7-8: Next.js Dasar

Target:

- Paham App Router, layout, page, dan metadata.
- Bisa membuat halaman baru.

Latihan:

- Buat route `/projects`.
- Buat route `/about`.
- Tambahkan metadata halaman.

### Minggu 9-10: Arsitektur dan Refactor

Target:

- Bisa memisahkan data, type, component, dan helper.
- Bisa membaca struktur project dengan cepat.

Latihan:

- Pindahkan data hardcoded ke `src/data`.
- Buat type baru untuk social links.
- Rapikan component yang terlalu panjang.

### Minggu 11-12: CMS dan Blog Preparation

Target:

- Paham konsep CMS, blog, slug, dan content model.
- Bisa membuat rencana blog portfolio.

Latihan:

- Buat type `BlogPost`.
- Buat data blog statis.
- Buat halaman `/blog`.
- Buat halaman `/blog/[slug]`.

## Rencana Pengembangan CMS Portfolio

CMS bisa dibuat bertahap. Jangan langsung membuat sistem kompleks.

### Tahap 1: Data Statis

Simpan semua konten di `src/data`.

Cocok untuk:

- Profile.
- Skill.
- Project.
- Social link.
- Navigation.

Kelebihan:

- Mudah dipahami.
- Tidak perlu database.
- Cocok untuk pemula.

### Tahap 2: MDX untuk Blog

Gunakan MDX untuk artikel blog.

Cocok untuk:

- Artikel belajar.
- Catatan project.
- Studi kasus.
- Dokumentasi perjalanan belajar.

Struktur yang mungkin:

```txt
content/
  blog/
    belajar-nextjs.mdx
    refactor-portfolio.mdx
```

### Tahap 3: Headless CMS

Jika konten sering berubah, baru pertimbangkan CMS.

Pilihan konsep:

- Admin panel sendiri.
- Headless CMS eksternal.
- Database + dashboard internal.

Konten yang bisa dikelola CMS:

- Profile.
- Skills.
- Projects.
- Blog posts.
- Testimonials.
- Experience.
- Certificates.

### Tahap 4: CMS Custom

Jika ingin membangun CMS sendiri, materi yang perlu dipelajari:

- Authentication.
- Authorization.
- Database.
- CRUD.
- File upload.
- Rich text editor.
- API route.
- Form validation.
- Admin dashboard.

## Rencana Blog Portfolio

Blog bisa membantu portfolio terlihat lebih kuat karena menunjukkan cara berpikir.

Topik blog yang cocok:

- Perjalanan belajar TypeScript.
- Catatan migrasi React ke Next.js.
- Cara membuat portfolio modern.
- Studi kasus project yang pernah dibuat.
- Penjelasan bug yang pernah diperbaiki.
- Catatan belajar UI/UX.

Struktur data blog:

```ts
type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  author: string;
  featured: boolean;
};
```

Route blog yang direkomendasikan:

```txt
/blog
/blog/[slug]
/tags/[tag]
```

## Materi Lanjutan untuk Menjadi Software Engineer Handal

### Clean Code

Pelajari:

- Nama variable yang jelas.
- Function kecil.
- Component punya satu tanggung jawab.
- Hindari duplikasi.
- Hindari logic terlalu panjang di JSX.

### Git

Pelajari:

- `git status`
- `git add`
- `git commit`
- `git branch`
- `git checkout`
- Pull request.
- Commit message yang jelas.

### Testing

Pelajari:

- Unit test.
- Component test.
- End-to-end test.
- Testing behavior, bukan implementation detail.

Untuk project ini, testing awal bisa fokus pada:

- Contact form validation.
- Helper function.
- Component yang menerima props.

### Debugging

Pelajari:

- Membaca error message.
- Menggunakan browser devtools.
- Menggunakan console dengan bijak.
- Menelusuri alur data dari `page` ke component.

### Performance

Pelajari:

- Image optimization.
- Lazy loading.
- Bundle size.
- Mengurangi Client Component.
- Menghindari animasi berat.

### Security Dasar

Pelajari:

- Jangan expose secret key di client.
- Validasi input user.
- Sanitasi data.
- Rate limit untuk API publik.
- Environment variable.

### Accessibility

Pelajari:

- Semantic HTML.
- Alt text.
- Label form.
- Keyboard navigation.
- Focus state.
- Kontras warna.

## Checklist Ketika Menambah Fitur Baru

Sebelum coding:

- Apa tujuan fitur?
- Data apa yang dibutuhkan?
- Type apa yang perlu dibuat?
- Component mana yang terdampak?
- Apakah perlu Server Component atau Client Component?
- Apakah perlu route baru?

Saat coding:

- Buat type terlebih dahulu jika ada data baru.
- Simpan data di `src/data` jika kontennya statis.
- Buat component kecil jika UI berulang.
- Gunakan props yang jelas.
- Hindari `any`.

Setelah coding:

- Jalankan build.
- Cek tampilan desktop dan mobile.
- Cek error TypeScript.
- Cek link dan image.
- Cek aksesibilitas dasar.

## Checklist Khusus Next.js

- Gunakan `next/link` untuk link internal.
- Gunakan `next/image` untuk image penting.
- Tambahkan metadata untuk halaman penting.
- Jangan pakai `"use client"` jika tidak perlu.
- Jangan akses `window` atau `document` di Server Component.
- Simpan API server di `app/api`.
- Simpan route halaman di `app`.

## Checklist Khusus TypeScript

- Buat type untuk setiap data domain.
- Hindari `any`.
- Gunakan union type untuk pilihan terbatas.
- Gunakan optional property hanya jika data boleh kosong.
- Pastikan props component punya type.
- Export type dari `src/types/index.ts` jika sering dipakai.

## Latihan Praktis dari Project Ini

### Latihan 1: Tambah Skill Baru

Tujuan:

- Belajar data-driven UI.
- Belajar type checking.

Langkah:

1. Buka `src/data/skills.ts`.
2. Tambahkan skill baru.
3. Pastikan field sesuai type `Skill`.
4. Cek tampilan di section Skills.

### Latihan 2: Tambah Project Baru

Tujuan:

- Belajar array object.
- Belajar rendering project card.

Langkah:

1. Buka `src/data/projects.ts`.
2. Tambahkan project baru.
3. Pastikan category sesuai type.
4. Cek filter project.

### Latihan 3: Buat Halaman Project Detail

Tujuan:

- Belajar dynamic route Next.js.

Struktur target:

```txt
src/app/projects/[slug]/page.tsx
```

Konsep yang dipelajari:

- Slug.
- Dynamic route.
- Mencari data dengan `find`.
- Metadata per halaman.

### Latihan 4: Buat Blog Statis

Tujuan:

- Persiapan menuju blog dan CMS.

Struktur target:

```txt
src/app/blog/page.tsx
src/app/blog/[slug]/page.tsx
src/data/blog-posts.ts
src/types/blog.ts
```

Konsep yang dipelajari:

- Content model.
- List page.
- Detail page.
- Dynamic route.

### Latihan 5: Buat Contact Form Fungsional

Tujuan:

- Belajar form dan API route.

Struktur target:

```txt
src/app/api/contact/route.ts
```

Konsep yang dipelajari:

- Client form.
- Submit state.
- Server validation.
- Response JSON.
- Error handling.

## Kesalahan Umum Pemula

- Menghafal syntax tanpa memahami alur data.
- Menaruh semua kode dalam satu file.
- Menggunakan `any` agar error hilang.
- Membuat semua component menjadi Client Component.
- Tidak membaca error TypeScript.
- Menambahkan library baru terlalu cepat.
- Mengubah banyak hal sekaligus saat refactor.
- Tidak mengecek tampilan mobile.
- Tidak menulis nama variable yang jelas.

## Cara Belajar yang Efektif dari Project Ini

Gunakan pola belajar ini:

1. Baca satu file.
2. Tulis ulang ringkasan fungsinya.
3. Ubah hal kecil.
4. Jalankan project.
5. Lihat hasilnya.
6. Jika error, baca error pelan-pelan.
7. Catat istilah baru.

Contoh:

- Hari ini hanya belajar `page.tsx`.
- Besok belajar `layout.tsx`.
- Lusa belajar `SkillsSection.tsx`.
- Setelah paham, baru belajar `ProjectsSection.tsx`.

Belajar software engineering itu bertahap. Target awal bukan langsung menjadi ahli, tetapi bisa membaca kode, memahami alurnya, dan membuat perubahan kecil dengan percaya diri.

## Ringkasan Akhir

Untuk menjadi software engineer yang handal dengan project ini, fokuslah pada fondasi berikut:

- Pahami JavaScript sebelum terlalu dalam ke framework.
- Gunakan TypeScript untuk membuat data dan props lebih aman.
- Pahami React sebagai cara membangun UI berbasis component.
- Pahami Next.js sebagai framework aplikasi lengkap di atas React.
- Pisahkan data, type, component, dan logic.
- Bangun fitur secara bertahap.
- Jangan takut membaca error, karena error adalah petunjuk belajar.

Project portfolio ini bisa berkembang menjadi:

- Portfolio profesional.
- Blog teknis.
- CMS pribadi.
- Dokumentasi perjalanan belajar.
- Showcase kemampuan software engineering.

Gunakan dokumen ini sebagai peta belajar. Saat bingung, kembali ke struktur project, baca satu file kecil, lalu pahami hubungan antara data, type, component, dan halaman.
