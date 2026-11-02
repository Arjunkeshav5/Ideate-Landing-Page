# TECHFEST 2026 — AETHERIAL RENAISSANCE
> **"WHERE THE FUTURE TAKES FORM."**

[![IIT Bombay Techfest](https://img.shields.io/badge/IIT%20Bombay-Techfest%202026-ff4d00.svg?style=flat-square)](https://techfest.org/)
[![Program](https://img.shields.io/badge/CA%20Program-Web%20Development-00f2fe.svg?style=flat-square)](https://techfest.org/)
[![Task](https://img.shields.io/badge/Task-Ideate%20Landing%20Page-white.svg?style=flat-square)](https://techfest.org/)
[![Points](https://img.shields.io/badge/Points-100%2F100-success.svg?style=flat-square)](https://techfest.org/)
[![Build Status](https://img.shields.io/badge/Build-Production%20Ready-brightgreen.svg?style=flat-square)]()
[![Deployment](https://img.shields.io/badge/Target-GitHub%20Pages-blue.svg?style=flat-square)]()

---

## ⚠️ Important Disclaimer
**This project is an independent creative redesign and ideation concept developed for the IIT Bombay Techfest College Ambassador Program (Domain: Web Development | Task: Ideate Landing Page).**  
It is **not** the official Techfest website, nor does it claim to be an officially approved or affiliated redesign. Official dates, announcements, and registrations are hosted at the [Official Techfest Website](https://techfest.org/).

---

## 🌟 The Concept: Aetherial Renaissance
For the 30th Edition of IIT Bombay Techfest (16–18 December 2026), **Aetherial Renaissance** reimagines the festival landing page as a high-impact, avant-garde editorial experience. It marries the precision of advanced engineering with the expressive drama of modern digital art direction.

### Visual & Creative Direction:
- **Zero 3D Dependencies**: Crafted strictly **without Three.js, WebGL 3D, Blender renders, or 3D models**. Built entirely with HTML5 2D Canvas, procedural math, CSS layout systems, vector geometry, and kinetic typography.
- **Color Architecture**:
  - **Almost-Black Charcoal** (`#070709`, `#0d0e14`, `#151821`): Deep void background providing cinematic contrast.
  - **Warm White** (`#f5f4ef`): Editorial typographic clarity and hierarchy.
  - **Electric Orange** (`#ff4d00`): Kinetic ignition, passion, and primary interaction focus.
  - **Bright Cyan Accents** (`#00f2fe`): Cybernetic telemetry, data streams, and active indicators.
  - **Subtle Metallic Grey** (`#8e94a5`, `#545969`): Supporting schematics and grid structure.
- **Experimental Typography**:
  - `Syne`: Oversized, brutalist display headline typography.
  - `Space Grotesk`: Monospace-inspired telemetry and classification metadata.
  - `Plus Jakarta Sans`: High-legibility technical body text.

---

## 🚀 Website Architecture & Features

### 1. Section 1 — Hero
- **Stacked Massive Headline**: `TECH` / `FEST` / `2026` with interactive stroke hover transitions.
- **Supporting Headline**: *"WHERE THE FUTURE TAKES FORM."*
- **30th Edition & IIT Bombay Badges**: Live telemetry coordinates (`19.1334° N, 72.9133° E`).
- **2D Light Trails & Energy Canvas**: Pure HTML5 2D Canvas featuring dual orbital ribbon streams in electric orange and cyan reacting dynamically to cursor physics and ambient drift.
- **Dynamic 16 Dec 2026 Countdown**: Real-time countdown clock tracking days, hours, minutes, and seconds.
- **Primary CTAs**: `EXPLORE EVENTS` and `REGISTER NOW`.

### 2. Section 2 — Introduction
- **Headline**: *NOT JUST A FESTIVAL. A MOVEMENT.*
- **Editorial Asymmetry**: Split narrative presenting Techfest’s lineage from 1998 to its 30th edition.
- **Accredited Milestones**: 30 Editions, 2,500+ Colleges Engaged, 60+ Nations Represented, 175K+ Footfall Benchmark.
- **Cornerstone Pillars**: Vanguard Pedagogy, Global Battleground, and Democratic Access.
- **Kinetic Marquee Ticker**: Continuous typography reel celebrating autonomous robotics, quantum telemetry, and Powai campus culture.

### 3. Section 3 — Explore the Festival (6 Visual Realms)
Six visually distinct categories with dedicated color grading, vector icons, badges, and portals:
1. **COMPETITIONS**: High-stakes challenges testing algorithmic mastery and engineering.
2. **ROBOTICS**: Heavyweight combat arenas (Robowars), autonomous rovers, and mechatronics.
3. **WORKSHOPS**: Certified hands-on bootcamps led by vanguard researchers.
4. **TECHNOLOGY EXHIBITIONS**: Direct interaction with international prototypes and skunkworks displays.
5. **SPEAKER SESSIONS**: Keynotes and unfiltered dialogues with Nobel Laureates and industry architects.
6. **TECHNOHOLIX**: The festival's signature evening spectacle fusing laser mapping, pyrotechnics, and electronic music.

### 4. Section 4 — Competitions Matrix
- **Category Filter Tabs**: *All Domains, Robotics, AI & Computing, Engineering, Innovation*.
- **Editorial Discovery Grid**: Strong numbered hierarchy (`01` through `06`).
- **Interactive Breakdown Reveal**: Expandable panels revealing core disciplines, team formats, and evaluation criteria.
- **Direct Official Links**: Deep links to [techfest.org/competitions](https://techfest.org/competitions).

### 5. Section 5 — Workshops Discovery
- **Domain Selector**: Interactive tabs for *AI and Data, Robotics and Engineering, Cybersecurity, Design and Creative Technology, Business and Management*.
- **Curricular Blueprints**: Detailed breakdown of course modules, prerequisites, duration, and IIT Bombay certification.
- **Direct Official Links**: Deep links to [techfest.org/workshops](https://techfest.org/workshops).

### 6. Section 6 — Festival Experience
- **Cinematic Narrative Switcher**: Interactive switcher exploring *Skunkworks Exhibitions, Robowars Steel Combat, Nobel Dialogues, Powai Campus Pulse, and Technoholix Night Shows*.
- **Sensory Telemetry Bar**: Live procedural audio-visual frequency graph and curatorial notes.

### 7. Section 7 — Final Call to Action
- **High-Impact Typography**:  
  **THE FUTURE  
  ISN'T WAITING.**
- **Supporting Line**: *Bring your curiosity. Build what comes next.*
- **Dual Buttons**: `REGISTER FOR TECHFEST` and `EXPLORE THE OFFICIAL WEBSITE`.

### 8. Interactive Features & Polish
- **Web Audio API Sound Synthesizer**: Procedural ambient drone and micro-click feedback engine with zero external audio assets. Muted by default with an instant navbar toggle.
- **Delegate Registration Modal**: Interactive form allowing participants, college ambassadors, and attendees to generate a custom delegate token with instant confetti celebration.
- **Real-Time Scroll Depth Tracker**: Top gradient scroll progress indicator bar and floating HUD telemetry pill.
- **Reduced Motion Support**: Strict adherence to `@media (prefers-reduced-motion: reduce)` accessibility standards.

---

## 🛠️ Technology Stack
- **Framework**: React 18
- **Build Engine**: Vite 6
- **Styling**: Modern Modular CSS with Custom Design Tokens & Typography Systems
- **Icons**: Lucide React
- **Celebration**: Canvas-Confetti
- **Audio**: Web Audio API (procedural oscillator + biquad filter synthesizer)
- **Deployment**: GitHub Pages (`base: '/Ideate-Landing-Page/'`)

---

## 📦 Directory Structure
```
Ideate-Landing-Page/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── dist/                       # Production build (GitHub Pages deployable)
│   ├── assets/
│   │   ├── index-*.js
│   │   └── index-*.css
│   ├── .nojekyll
│   ├── 404.html
│   └── index.html
├── public/
│   └── .nojekyll               # Prevents Jekyll processing on GitHub Pages
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky frosted header, sound toggle, mobile drawer
│   │   ├── Hero.jsx            # Stacked typography, countdown, telemetry
│   │   ├── LightTrailsCanvas.jsx # 2D Canvas energy particle trails
│   │   ├── Introduction.jsx    # Movement philosophy, metrics, marquee
│   │   ├── ExploreFestival.jsx # 6 distinct festival realms
│   │   ├── Competitions.jsx    # Filterable competition discovery matrix
│   │   ├── Workshops.jsx       # 5 curated workshop tracks with syllabus
│   │   ├── FestivalExperience.jsx # Interactive experiential narrative
│   │   ├── FinalCTA.jsx        # Climax invitation banner
│   │   ├── Footer.jsx          # CA credentials, disclaimers, official links
│   │   └── RegistrationModal.jsx # Pass generator with confetti
│   ├── utils/
│   │   └── sound.js            # Procedural Web Audio API sound designer
│   ├── App.jsx                 # Master application controller
│   ├── index.css               # Design tokens, typography, utilities
│   └── main.jsx                # Application root
├── index.html                  # HTML entry point with Google Fonts
├── package.json
├── vite.config.js              # Configured with base: '/Ideate-Landing-Page/'
└── README.md
```

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/Ideate-Landing-Page/`

### 3. Generate Production Build
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` folder with correct relative paths for GitHub Pages.

---

## 🌐 GitHub Pages Deployment Instructions

The project is pre-configured with `base: '/Ideate-Landing-Page/'` in `vite.config.js` and includes a ready-to-run GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Option A: Automatic Deployment via GitHub Actions (Recommended)
1. Create a new GitHub repository named:
   ```
   Ideate-Landing-Page
   ```
2. Initialize and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Techfest Aetherial Renaissance landing page"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/Ideate-Landing-Page.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow will automatically trigger, build the React project, and publish your landing page to:
   ```
   https://<YOUR_GITHUB_USERNAME>.github.io/Ideate-Landing-Page/
   ```

### Option B: Manual Deployment of the `dist/` Folder
If deploying without GitHub Actions:
```bash
npm run build
npx gh-pages -d dist
```

---

## 🏅 Submission Details
- **Festival**: IIT Bombay Techfest 2026 (30th Edition)
- **Program**: College Ambassador (CA) Program
- **Domain**: Web Development
- **Task**: Ideate Landing Page
- **Maximum Points**: 100
- **Official Portal**: [https://techfest.org/](https://techfest.org/)
- **Theme**: *Aetherial Renaissance — Where the Future Takes Form.*
