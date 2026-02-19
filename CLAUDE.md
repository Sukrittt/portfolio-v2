# Portfolio 2.0 — CLAUDE.md

> This file is the single source of truth for all sessions. Read this before doing anything.

---

## A. Project Overview

- **Project:** Portfolio 2.0 for Sukrit Saha — immersive 3D interactive portfolio
- **Tech Stack:** Next.js 15 (App Router) + Tailwind v4 + React Three Fiber + GSAP + Framer Motion + Lenis
- **Navigation:** Hybrid — main scroll page with all sections + project detail pages at `/projects/[slug]`
- **Deploy Target:** Vercel
- **Domain:** sukritsaha.in

---

## B. Personal Data

### Identity
| Field | Value |
|-------|-------|
| Name | Sukrit Saha |
| Email | sukritsaha27@gmail.com |
| Location | Bengaluru, India |
| Portfolio | sukritsaha.in |
| LinkedIn | linkedin.com/in/sukrit-saha-b6117a242 |
| GitHub | github.com/sukrittt |
| Twitter | @SukritSaha11 |
| Instagram | sukrit_04 |
| Phone | Not on public site |

### Hero Tagline
"Developer who turns ideas into interactive realities"

### Professional Summary (About section)
"Full-Stack Engineer with 3 years of experience delivering complete product solutions spanning frontend, backend, and mobile ecosystems. Proficient in React, Next.js, NestJS, Prisma, AWS infrastructure, and RabbitMQ-driven microservices."

### Education
1. **Bachelor of Computer Application (BCA)** — Christ University, Bengaluru | 2022–Present | CGPA: 3.35/4
2. **Sri Sri Academy**, Kolkata | 2011–2022 | ISC: 92.25% | ICSE: 95.8%

### Experience

1. **Frontend Developer — Sumeru** | Bengaluru | June 2025–Present
   - Built and launched the complete web platform (Next.js, Tailwind, tRPC, NestJS, MySQL), delivering 4+ core modules and owning all frontend–backend integrations.
   - Led 90% of admin panel development (Next.js, Refine, MUI), implementing RBAC and an availability-calendar system that streamlined consultant slot management.
   - Owned full-stack development across 3 codebases, designing APIs with NestJS/Prisma, managing databases, and implementing RabbitMQ-based microservices while assisting mobile and DevOps teams with AWS (ECS, ECR, Amplify), CI/CD, and backend integrations.

2. **Full Stack Engineer Intern — Metaverse Ventures** | Remote | Nov 2023–May 2025
   - Migrated state from Redux to Jotai, simplifying logic and boosting UI responsiveness by 20%.
   - Built performant, accessible UIs in Next.js + Tailwind with WCAG-compliant components.
   - Integrated Solana Wallet and Web3 UI flows for seamless onboarding and secure transactions.
   - Advocated scalable components and modular design for maintainable micro frontends.

3. **Frontend Developer — Privilon Technologies** | Remote | Feb 2023–Aug 2023
   - Developed real-time dashboards in Next.js, integrating high-frequency APIs for consistent UX.
   - Built 10+ reusable components with Material UI and implemented Chart.js for real-time data.
   - Set up Firebase Auth & Firestore integration, reducing latency and enhancing security.

### Projects

1. **Limetta** (57 GitHub stars) — Finance management app
   - Next.js expense tracking app with multiple account management, money transfers, and dues tracking.
   - GitHub: github.com/sukrittt/Limetta

2. **Spitha Diamonds** (spithadiamonds.vercel.app) — Jewelry eCommerce | June 2024–Nov 2024
   - Full-stack jewelry platform with SSR and Edge Functions, improving load times by 25% and SEO by 30+.
   - Secure modular admin panel for inventory, orders, and appointments.

3. **Claspr** (claspr.vercel.app | github.com/Sukrittt/claspr) — AI classroom tool | Jan 2024–June 2024
   - 10+ interactive features including AI assistant, folder org system, productivity shortcuts.
   - Next.js + Supabase, optimized data fetch for 40% faster load speeds.

### Skills
- **Frontend:** React.js, Next.js (SSR/ISR), TypeScript, JavaScript (ES6+), React Native, HTML5, CSS3, Tailwind CSS, Material UI, Framer Motion, GSAP, Redux, Jotai, Webpack, Three.js, Web Components
- **UI:** Responsive Design, WCAG Compliance, Cross-browser Testing, Design Fidelity, Accessibility, Animation, Component Libraries (MUI, Shadcn)
- **Backend & APIs:** Node.js, NestJS, REST APIs, tRPC, Prisma, Drizzle, Firebase, Redis, MongoDB
- **Tools & Platforms:** Git, AWS, Microservices, Postman, Swagger, Clerk, Vercel, Netlify, CI/CD, Docker

### Interests
Football (Man United), Anime, Gaming, Blender 3D

---

## C. Design Specs

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#050505` | Page background |
| `--text` | `#f5f5f5` | Primary text |
| `--blue` | `#4f7df7` | Primary accent |
| `--violet` | `#7c5bf0` | Secondary accent |
| `--cyan` | `#22d3ee` | Tertiary accent / highlights |

### Typography
- **Headings & Body:** Space Grotesk (via `next/font/google`)
- **Code / Tech Badges:** JetBrains Mono (via `next/font/google`)

### Visual Direction
- Dark cinematic feel
- Hero: Minimal & bold name + particle constellation
- Subtle grain/noise texture overlay
- Smooth scroll via Lenis
- Section transitions powered by GSAP ScrollTrigger + Framer Motion

---

## D. Project Structure

```
Portfolio 2.0/
├── CLAUDE.md
├── public/
│   ├── fonts/                    # (if any local fonts needed)
│   ├── images/                   # Static images (og, favicon, etc.)
│   │   └── og.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout (fonts, metadata, providers)
│   │   ├── page.tsx              # Main scroll page (all 9 sections)
│   │   ├── globals.css           # Tailwind directives + CSS variables
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx      # Project detail page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx        # Fixed nav with section anchors
│   │   │   └── smooth-scroll.tsx # Lenis scroll provider
│   │   ├── sections/
│   │   │   ├── hero.tsx          # Hero section
│   │   │   ├── about.tsx         # About section
│   │   │   ├── journey.tsx       # Career journey timeline
│   │   │   ├── experience.tsx    # Experience cards
│   │   │   ├── projects.tsx      # Project showcase
│   │   │   ├── skills.tsx        # Skills visualization
│   │   │   ├── education.tsx     # Education cards
│   │   │   ├── beyond-code.tsx   # Interests / personal
│   │   │   └── contact.tsx       # Contact CTA
│   │   ├── three/
│   │   │   ├── canvas-wrapper.tsx  # R3F Canvas + Suspense
│   │   │   ├── particles.tsx       # Particle constellation
│   │   │   ├── floating-shapes.tsx # Floating geometry
│   │   │   └── skill-orbit.tsx     # 3D skill orbit
│   │   └── ui/
│   │       ├── magnetic-button.tsx # Magnetic hover button
│   │       ├── reveal-text.tsx     # Text reveal animation
│   │       ├── section-heading.tsx # Reusable section heading
│   │       ├── project-card.tsx    # Project card component
│   │       └── experience-card.tsx # Experience card component
│   ├── data/
│   │   ├── projects.ts           # Project data
│   │   ├── experience.ts         # Experience data
│   │   └── skills.ts             # Skills data (categorized)
│   ├── hooks/
│   │   ├── use-mouse-position.ts # Mouse tracking
│   │   └── use-scroll-progress.ts# Scroll progress
│   └── lib/
│       └── utils.ts              # cn() helper + utilities
├── next.config.ts
├── tailwind.config.ts            # (if not using CSS-only Tailwind v4)
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## E. Section-by-Section Design

### 1. Hero (`#hero`)
- **Layout:** Full viewport height, centered content
- **Content:** Name "SUKRIT SAHA" in large bold type + tagline underneath + scroll indicator at bottom
- **3D:** Particle constellation background via R3F — dots connected by faint lines, slowly rotating, reacts to mouse movement (parallax)
- **Animation:** Name letters stagger-fade-in on load (GSAP), tagline fades up after name, scroll indicator pulses
- **Tech:** React Three Fiber canvas (absolute behind content), GSAP for text animations

### 2. About (`#about`)
- **Layout:** Two-column — text left, floating 3D shapes right (or decorative element)
- **Content:** Professional summary paragraph + key stats (3+ years, 3 companies, etc.)
- **3D:** Subtle floating geometric shapes (icosahedron, torus, box) that rotate slowly
- **Animation:** Text lines reveal on scroll (GSAP ScrollTrigger), shapes float with sin/cos motion
- **Tech:** Framer Motion for text reveal, R3F for shapes

### 3. Journey (`#journey`)
- **Layout:** Horizontal scroll timeline within a vertically-scrolled section
- **Content:** Timeline of career milestones (education → internships → jobs → projects) with dates and brief descriptions
- **Animation:** Horizontal scroll driven by vertical scroll (GSAP ScrollTrigger pin + horizontal translate), milestone cards fade in as they enter viewport
- **Tech:** GSAP ScrollTrigger with pin, Framer Motion for card animations

### 4. Experience (`#experience`)
- **Layout:** Stacked cards, each expanding on hover/click to show details
- **Content:** 3 experience entries (Sumeru, Metaverse Ventures, Privilon) with company, role, dates, bullet points
- **Animation:** Cards slide up on scroll, expand with spring animation on interaction
- **Tech:** Framer Motion layout animations, GSAP ScrollTrigger for entrance

### 5. Projects (`#projects`)
- **Layout:** Featured project cards in a grid or staggered layout
- **Content:** 3 projects (Limetta, Spitha Diamonds, Claspr) with title, description, tech stack tags, links
- **3D:** Cards have subtle 3D tilt on hover (perspective transform)
- **Animation:** Stagger entrance on scroll, hover tilt effect, click navigates to `/projects/[slug]`
- **Tech:** Framer Motion for entrance + hover, CSS perspective for tilt

### 6. Skills (`#skills`)
- **Layout:** Categorized skill grid or orbit visualization
- **Content:** 4 categories (Frontend, UI, Backend & APIs, Tools & Platforms) with skill items
- **3D:** Optional orbit visualization where skill nodes orbit around a center
- **Animation:** Skills fade/scale in on scroll, orbit rotates slowly
- **Tech:** R3F for orbit (optional), Framer Motion for grid entrance

### 7. Education (`#education`)
- **Layout:** Cards or timeline entries
- **Content:** BCA at Christ University + Sri Sri Academy with grades
- **Animation:** Fade up on scroll with stagger
- **Tech:** Framer Motion

### 8. Beyond Code (`#beyond`)
- **Layout:** Bento grid with interest tiles
- **Content:** Football (Man United), Anime, Gaming, Blender 3D — each as a tile with icon/emoji and short text
- **Animation:** Tiles scale in with stagger, subtle hover micro-interactions (scale, glow)
- **Tech:** Framer Motion, CSS

### 9. Contact (`#contact`)
- **Layout:** Full viewport height, centered CTA
- **Content:** "Let's Build Something Together" heading + email link + social links (LinkedIn, GitHub, Twitter, Instagram)
- **3D:** Particle constellation (callback to hero) slowly fading in
- **Animation:** Text reveal on scroll, magnetic hover effect on buttons, particles drift in
- **Tech:** R3F particles, Framer Motion, magnetic button component

---

## F. Phase Tracker

### Phase 1: Project Setup & Foundation
- [x] Initialize Next.js 15 with TypeScript, Tailwind, App Router, src dir
- [x] Install all dependencies (R3F, GSAP, Framer Motion, Lenis, etc.)
- [x] Configure fonts (Space Grotesk + JetBrains Mono via next/font/google)
- [x] Set up color palette in globals.css
- [x] Create `src/lib/utils.ts` with `cn()` helper
- [x] Create `src/components/layout/smooth-scroll.tsx` (Lenis provider)
- [x] Create `src/components/layout/navbar.tsx` (fixed nav with section anchors)
- [x] Create base `src/app/page.tsx` with 9 section placeholders
- [x] Create data files (`projects.ts`, `experience.ts`, `skills.ts`)
- [x] Initialize git repo + initial commit
- [x] Verify: `npm run build` passes

### Phase 2: Hero + 3D Canvas
- [ ] Create `src/components/three/canvas-wrapper.tsx` (R3F Canvas + Suspense + fallback)
- [ ] Create `src/components/three/particles.tsx` (particle constellation)
- [ ] Create `src/hooks/use-mouse-position.ts`
- [ ] Build Hero section with name typography + tagline + scroll indicator
- [ ] Add GSAP stagger animation for hero text
- [ ] Add mouse parallax to particles
- [ ] Verify: Hero renders, particles animate, scroll indicator visible

### Phase 3: About + Career Journey
- [ ] Build About section (two-column layout, professional summary, stats)
- [ ] Create `src/components/three/floating-shapes.tsx`
- [ ] Add GSAP ScrollTrigger text reveal for About
- [ ] Build Journey section (horizontal scroll timeline)
- [ ] Implement GSAP ScrollTrigger pin + horizontal scroll
- [ ] Add milestone cards with Framer Motion entrance
- [ ] Verify: About & Journey render, scroll animations work

### Phase 4: Experience + Projects
- [ ] Build Experience section with expandable cards
- [ ] Create `src/components/ui/experience-card.tsx`
- [ ] Add Framer Motion layout animations for expand/collapse
- [ ] Build Projects section with featured cards
- [ ] Create `src/components/ui/project-card.tsx` with 3D tilt
- [ ] Build `/projects/[slug]` detail page
- [ ] Add page transition animations
- [ ] Verify: Experience expands, project cards tilt, detail pages work

### Phase 5: Skills + Education + Personal
- [ ] Build Skills section (categorized grid)
- [ ] Optional: Create `src/components/three/skill-orbit.tsx`
- [ ] Build Education section with cards
- [ ] Build Beyond Code section (bento grid with interests)
- [ ] Add micro-interactions (hover effects, scale animations)
- [ ] Verify: All 3 sections render with animations

### Phase 6: Contact + Polish
- [ ] Build Contact section (CTA + email + socials)
- [ ] Create `src/components/ui/magnetic-button.tsx`
- [ ] Add particle constellation callback (matching hero)
- [ ] Performance pass (lazy load R3F, reduce bundle, optimize images)
- [ ] Mobile responsiveness pass (all sections)
- [ ] SEO: metadata, OG image, sitemap
- [ ] Accessibility: keyboard nav, aria labels, reduced motion support
- [ ] Final `npm run build` — clean, no warnings
- [ ] Deploy to Vercel

---

## G. NPM Dependencies

### Core
- `next` (v15) — Framework
- `react`, `react-dom` — UI library
- `typescript` — Type safety

### 3D & Animation
- `three` — 3D engine
- `@react-three/fiber` — React renderer for Three.js
- `@react-three/drei` — R3F helpers
- `@react-three/postprocessing` — Post-processing effects
- `gsap` — Animation library (ScrollTrigger, etc.)
- `framer-motion` — React animation library
- `lenis` — Smooth scroll

### UI & Utilities
- `lucide-react` — Icons
- `clsx` — Conditional classnames
- `tailwind-merge` — Merge Tailwind classes

### Dev (included with create-next-app)
- `tailwindcss`, `postcss`, `@tailwindcss/postcss`
- `eslint`, `eslint-config-next`
- `@types/node`, `@types/react`, `@types/react-dom`

---

## H. Session Instructions

### Workflow per Phase
1. **Read Phase Tracker** (Section F) to identify the current phase.
2. **Create a feature branch** from `main`:
   ```
   git checkout -b phase-N-description
   ```
3. **Complete only the current phase** — do not skip ahead.
4. **Run `npm run build`** to catch TypeScript errors.
5. **Run `npm run dev`** to verify visually.
6. **Commit** with a descriptive message on the feature branch.
7. **Push & create PR** to `main`:
   ```
   git push -u origin phase-N-description
   gh pr create --title "Phase N: Description" --body "..."
   ```
8. **Merge the PR** (after validation):
   ```
   gh pr merge --squash --delete-branch
   ```
9. **Mark phase tasks as `[x]`** in CLAUDE.md Phase Tracker.
10. **Pull main** and repeat for next phase.

### Deployment
- **Vercel** is connected to `main` — every merge auto-deploys.
- **Preview deploys** are generated for each PR branch.

### Repo
- GitHub: github.com/Sukrittt/portfolio-v2
- Vercel: (URL added after first deploy)
