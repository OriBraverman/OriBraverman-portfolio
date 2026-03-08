# Ori Braverman — Portfolio

[![Deploy to GitHub Pages](https://github.com/OriBraverman/OriBraverman-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/OriBraverman/OriBraverman-portfolio/actions/workflows/deploy.yml)  
🌐 **Live:** [oribraverman.github.io/OriBraverman-portfolio](https://oribraverman.github.io/OriBraverman-portfolio/)

A modern, high-performance personal portfolio website showcasing my projects, tech stack, and professional profile. Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS** — deployed via **GitHub Pages**.

---

## ✨ Features

| Feature | Description |
|---|---|
| **Hero Section** | Eye-catching landing with gradient text, animated scroll indicator |
| **About Me** | Personal introduction with stat cards |
| **Tech Stack Grid** | Visual grid organized by category (Languages, Web, AI, Tools) |
| **Projects Gallery** | Dynamic gallery populated from real GitHub repository data |
| **Project Filter** | Smooth category filter (All, Web, Games, ML, Systems, Hardware) |
| **Lazy-Loaded Images** | Suspense-based image loading with fallback placeholders |
| **Testimonials** | Placeholder endorsements section |
| **Responsive Design** | Mobile-first layout with dark glass-morphism aesthetic |
| **Smooth Animations** | CSS keyframe animations for fade-in, slide-up, scale effects |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 3 |
| **Unit Testing** | Vitest + React Testing Library |
| **E2E Testing** | Playwright |
| **Deployment** | GitHub Pages via GitHub Actions |

---

## 📁 Project Structure

```
├── public/                  # Static assets
│   └── favicon.svg
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── TechStack.tsx
│   │   ├── ProjectsGallery.tsx
│   │   ├── ProjectFilter.tsx
│   │   ├── LazyImage.tsx
│   │   ├── Testimonials.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── projects.json    # Portfolio project data
│   ├── __tests__/
│   │   └── ProjectFilter.test.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── e2e/
│   ├── local.spec.ts        # Local E2E tests
│   └── production.spec.ts   # Production E2E tests
├── playwright.config.ts     # Local Playwright config
├── playwright.prod.config.ts # Production Playwright config
├── vitest.config.ts
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
git clone https://github.com/OriBraverman/OriBraverman-portfolio.git
cd OriBraverman-portfolio
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🧪 Testing

### Unit Tests (Vitest)

Runs unit tests for the Project Filter logic and component rendering:

```bash
npm test
```

### Local E2E Tests (Playwright)

Builds the app, serves it locally, and runs full end-to-end tests:

```bash
npm run build
npx playwright install chromium
npx playwright test --config=playwright.config.ts
```

### Production E2E Tests

Runs Playwright tests directly against the live deployed site:

```bash
npx playwright test --config=playwright.prod.config.ts
```

You can also specify a custom production URL:

```bash
PROD_URL=https://your-custom-domain.com npx playwright test --config=playwright.prod.config.ts
```

---

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push to the `main` branch
2. The workflow builds the project and deploys to the `gh-pages` branch
3. GitHub Pages serves the site from `gh-pages`

### Manual Deploy

```bash
npm run build
# The dist/ folder contains the production build
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/OriBraverman">Ori Braverman</a>
</p>
