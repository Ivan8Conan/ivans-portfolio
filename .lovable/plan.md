
# Ivan Conanta — Professional Portfolio (Multi-page)

Membangun portfolio website multi-halaman berbasis CV Anda. Fokus: hierarki visual tajam, bullet points padat berbasis metrik, terminologi teknis akurat, tanpa kata sifat subjektif.

## Design Direction (langsung build)

- **Style:** Minimal editorial + technical. Monochrome base (near-black `#0A0A0A` on off-white `#FAFAF7`), satu warna aksen tajam (electric lime / signal green — mengasosiasikan "on-device inference / signal detection", cocok dengan tema pose estimation).
- **Typography:** Sans-serif teknis untuk UI/heading (Geist / Inter), mono untuk metrik & tech stack (JetBrains Mono).
- **Layout:** Grid 12 kolom, generous whitespace, section anchors dengan numeric labels (`01 / EXPERIENCE`), garis divider tipis, no gradients, no shadow-glow, no stock photography.
- **Motion:** Restrained — fade + subtle translate on scroll; hover underline animation di links.

## Route Structure

```text
src/routes/
  __root.tsx          → shared shell (nav + footer + meta)
  index.tsx           → Home (hero, snapshot metrics, featured project, CTA)
  about.tsx           → About + Core Competencies + Education + Certifications
  experience.tsx      → Professional Experience (STAR-formatted bullets)
  projects.tsx        → Projects grid (thesis app, Tastivo, Concert Ticketing, MEMBY)
  contact.tsx         → Contact (email, phone, GitHub, location) + downloadable CV link
```

Shared `<Nav>` di `__root.tsx` dengan `<Link activeProps>`. Setiap route punya `head()` unik (title, description, og:title, og:description).

## Content Blueprint (extracted & sharpened from CV)

### Home `/`
- Hero: nama, role tagline ("Mobile & Applied Computer Vision Engineer"), 1-liner positioning.
- Snapshot metrics row (mono): `86.7% classification accuracy` · `3–7 ms on-device inference` · `21,813 frames trained` · `1 app shipped to Google Play`.
- Featured project card: MyDeadliftCoach (thesis) → link ke `/projects`.
- Tech stack pill row.

### About `/about`
- Positioning statement (1 paragraf ringkas, dampak-oriented, tanpa "hardworking / innovative").
- Core Competencies dalam kategori grid: Mobile · AI/CV · Backend · Languages.
- Education timeline.
- Certifications list.
- Leadership & Activities (compact).

### Experience `/experience`
Setiap entry: role · org · timeframe → bullets STAR (Action + Impact + Metric).
- **Undergraduate Researcher — UKDW (2026)** — Thesis / MyDeadliftCoach.
- **Android Mobile Developer — MojadiApp, MSIB Batch 7 (2024)** — Tastivo.

### Projects `/projects`
Grid 2 kolom, tiap card: title · role · stack chips · 2–3 metric bullets · outcome.
1. MyDeadliftCoach — Real-time deadlift pose correction (Flutter, MediaPipe, Gradient Boosting) — 86.7% acc, 3–7 ms latency, Google Play deployed, IP Rights Certificate.
2. Tastivo — F&B e-commerce (Flutter/Dart, Firebase RTDB, FCM, Firebase Storage) — full CRUD cart, push notifications, category filter, password-reset flow.
3. Concert Ticket Booking Platform — Full-stack (HTML/CSS/JS, PHP, MySQL) — auth, multi-filter search, interactive seat selection, CRUD booking + payment. Owned booking-detail module end-to-end.
4. MEMBY — Subscription tracker desktop (Java/JavaFX/FXML, MySQL) — CRUD data layer, automated expiry-reminder engine. Owned backend + DB integration.

### Contact `/contact`
- Email, phone, GitHub, location (Tegal, Indonesia).
- CTA: "Download CV (PDF)" — link ke CV yang di-host sebagai asset.
- Availability line (fresh graduate, open to mobile / ML engineering roles).

## Writing Rules Applied

- Setiap bullet mulai dengan strong verb: *Architected, Engineered, Deployed, Integrated, Implemented, Optimized*.
- Metrik dalam mono font untuk emphasis: `86.7%`, `3–7 ms`, `21,813 frames`, `191 video sequences`.
- Zero subjective adjectives ("innovative", "hardworking", "passionate" → banned).
- Tech names dalam casing kanonik: Flutter, Dart, MediaPipe, Firebase Realtime Database, Firebase Cloud Messaging, JavaFX, MySQL, PHP.
- ATS-friendly plain text tetap terbaca — semantic HTML (`<h1>`, `<h2>`, `<ul>`, `<article>`), no image-based text.

## Design System (src/styles.css)

- Update tokens: `--background` (off-white oklch), `--foreground` (near-black), `--accent` (electric lime oklch), `--muted-foreground`, `--border` (hairline).
- Add font imports via `<link>` in `__root.tsx` head: Geist + JetBrains Mono.
- Utility classes: `.mono` untuk metrik, `.section-label` untuk numeric section headers.

## Files to Create / Modify

- Modify: `src/routes/__root.tsx` (nav, footer, real meta, font links)
- Modify: `src/routes/index.tsx` (replace placeholder with Home)
- Modify: `src/styles.css` (design tokens + typography)
- Create: `src/routes/about.tsx`
- Create: `src/routes/experience.tsx`
- Create: `src/routes/projects.tsx`
- Create: `src/routes/contact.tsx`
- Create: `src/components/site-nav.tsx`, `src/components/site-footer.tsx`, `src/components/metric.tsx`, `src/components/section-heading.tsx`, `src/components/project-card.tsx`
- Create: CV asset pointer via `lovable-assets` for the uploaded PDF → downloadable dari `/contact`.

## Out of Scope (this iteration)

- No CMS/database (static content).
- No dark mode toggle (design is single-theme minimal light; can add later).
- No blog/case-study detail pages (Projects page is self-contained; can extend later).

Approve to build.
