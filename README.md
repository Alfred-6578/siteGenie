# siteGenie

**AI-powered landing page generator — describe your business, get a fully-designed, editable, production-ready landing page in seconds.**

siteGenie turns a short business description into a complete landing page: AI writes the copy, picks the layouts, assembles the sections, and renders a live, fully-editable preview. Users can swap color palettes, edit text and images inline, regenerate individual sections, and export clean HTML + CSS ready to deploy.

---

## Table of Contents

- [Overview](#overview)
- [Core User Flow](#core-user-flow)
- [Feature Catalog](#feature-catalog)
  - [Marketing Landing Page](#1-marketing-landing-page-the-projects-own-homepage)
  - [Business Intake Form](#2-business-intake-form-generate)
  - [AI Generation Pipeline](#3-ai-generation-pipeline)
  - [Live Editable Preview](#4-live-editable-preview-preview)
  - [Section System](#5-section-system-the-building-blocks)
  - [Inline Editing](#6-inline-editing)
  - [Section Controls](#7-section-controls-per-section-panel)
  - [Color Palette System](#8-color-palette-system)
  - [Export Engine](#9-export-engine)
  - [Persistence](#10-persistence-localstorage)
  - [AI Test Mode](#11-ai-test-mode)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Data Model Reference](#data-model-reference)

---

## Overview

siteGenie has two distinct surfaces:

1. **The marketing site** ([app/page.tsx](app/page.tsx)) — the public-facing homepage that sells siteGenie itself. Hero, animated industry previews, feature grid, animated how-it-works, testimonials, final CTA, and footer.
2. **The generator app** ([app/(routes)/generate/page.tsx](app/(routes)/generate/page.tsx) and [app/(routes)/preview/page.tsx](app/(routes)/preview/page.tsx)) — the actual tool: a form that collects business info, a progress screen while Gemini generates the page, and a live editor with inline editing, palette switching, section regeneration, and export.

---

## Core User Flow

```
/ (marketing)
    │
    ▼  "Generate Your First Page"
/generate
    │  fill BusinessForm (name, description, industry, audience, features, benefits, style, CTA, color mood)
    │  submit → useAI().generate(formData)
    │  POST /api/generate  →  Google Gemini 2.5 Flash
    │  AI returns JSON → parsed into Section[]
    ▼
/preview
    │  inline-edit any text or image
    │  switch color palette (9 built-in themes)
    │  change section layouts from dropdowns
    │  regenerate individual sections with AI
    │  toggle sections on/off
    ▼  "Export"
    └─ Copy HTML to clipboard / download single HTML file / download HTML + CSS pair
```

---

## Feature Catalog

### 1. Marketing Landing Page (the project's own homepage)

The home route renders a polished showcase of siteGenie. Assembled in [app/page.tsx](app/page.tsx) from seven sections.

#### 1.1 Navbar — [components/Navbar.tsx](components/Navbar.tsx)
- Fixed, blurred, scroll-aware — background switches from transparent to semi-opaque after 20px of scroll.
- Smooth in-page scrolling to anchor sections (`home`, `preview`, `features`, `how-it-works`, `testimonial`) with a fixed-navbar offset calculation.
- Mobile burger menu — animated hamburger that slides a right-side panel in, locks body scroll while open, and auto-closes on navigation.
- "Get Started" CTA links to [/generate](app/(routes)/generate/page.tsx).

#### 1.2 Hero — [components/landingPage/hero/Hero.tsx](components/landingPage/hero/Hero.tsx)
- Split layout: animated typographic headline on the left, floating product image on the right.
- Word-by-word staggered entrance animation on the headline ([LeftHeroContent.tsx](components/landingPage/hero/LeftHeroContent.tsx)).
- Trust pills ("No credit card required", "Generate in few seconds", "Fully customizable") fade in on load.
- Right side ([RightHeroContent.tsx](components/landingPage/hero/RightHeroContent.tsx)) renders a floating product image with a gradient orb glow and 30 sparkle particles for depth.

#### 1.3 Interactive Preview Showcase — [components/landingPage/preview/](components/landingPage/preview/)
The centerpiece of the marketing site: a browser-window mockup that tilts with mouse position and swaps between four fully-animated industry designs.

- [PreviewSystem.tsx](components/landingPage/preview/PreviewSystem.tsx) — tab switcher + 3D perspective tilt that tracks cursor (`rotateX` / `rotateY` clamped to ±10°).
- Four mini landing pages rendered inside the mockup card:
  - [SaasPreview.tsx](components/landingPage/preview/SaasPreview.tsx) — NuroAI, with animated stat cards, chat preview, testimonial grid.
  - [PortfolioPreview.tsx](components/landingPage/preview/PortfolioPreview.tsx)
  - [RestaurantPreview.tsx](components/landingPage/preview/RestaurantPreview.tsx)
  - [EcommercePreview.tsx](components/landingPage/preview/EcommercePreview.tsx)
- Each preview uses IntersectionObserver (via [useInView](hooks/useInView.ts)) to trigger staggered entrance animations only when scrolled into view.

#### 1.4 Features Grid — [components/landingPage/features/](components/landingPage/features/)
Six feature cards driven by data in [data/FeatureCards.ts](data/FeatureCards.ts):
1. **AI Copy Generator** — compelling headlines, descriptions, CTAs.
2. **Custom Layouts** — 20+ section layouts, drag to reorder, hide/show.
3. **Responsive Design** — mobile-first, scales phone → 4K.
4. **Instant Export** — clean HTML/CSS, clipboard or file.
5. **Color Themes** — professional palettes, one-click swap.
6. **Template Library** — pre-built industry templates.

Each card carries its own icon, gradient, feature bullet list, and animation hints (idle/hover/special) defined in [types/features.ts](types/features.ts).

#### 1.5 How It Works — [components/landingPage/how-it-works/](components/landingPage/how-it-works/)
Three-step animated walkthrough with scroll-locked auto-scroll:
1. **Input Your Info** — typed-text preview ([TypingPreview.tsx](components/landingPage/how-it-works/TypingPreview.tsx)).
2. **AI Generates** — animated gradient progress bar ([GradientProgressbar.tsx](components/landingPage/how-it-works/GradientProgressbar.tsx)).
3. **Customize & Export** — rotating icons demo ([IconsDemo.tsx](components/landingPage/how-it-works/IconsDemo.tsx)).

When the container enters the viewport, the page is auto-scrolled to the section's bottom over 8 seconds with wheel/touch/keyboard locking (`lockScroll` / `unlockScroll` in [Container.tsx](components/landingPage/how-it-works/Container.tsx)). Each step card has a different entrance direction (down / right / left) and shadow depth that intensifies when in view.

#### 1.6 Testimonials — [components/landingPage/testimonial/](components/landingPage/testimonial/)
Embla-powered testimonial carousel/grid with autoplay.

#### 1.7 Final CTA — [components/landingPage/finalCTA/](components/landingPage/finalCTA/)
High-energy conversion block with:
- Animated gradient background (cyan → purple → indigo) with a shifting keyframe.
- Two rotating light rays behind the content.
- Five floating geometric shapes ([FloatingShape.tsx](components/landingPage/finalCTA/FloatingShape.tsx)) — circles, squares, triangles in various sizes, durations, and delays.
- Ambient particle system ([ParticleSystem.tsx](components/landingPage/finalCTA/ParticleSystem.tsx)).
- Click the button → [Confetti.tsx](components/landingPage/finalCTA/Confetti.tsx) fires for 3 seconds, then navigates to /generate.
- Trust row with checkmarks ("No credit card", "Free forever", "2 min setup").

#### 1.8 Footer — [components/landingPage/footer/Footer.tsx](components/landingPage/footer/Footer.tsx)

---

### 2. Business Intake Form (`/generate`)

[components/generator/BusinessForm.tsx](components/generator/BusinessForm.tsx) — collects the structured input the AI needs. Fields:

| Field | Type | Required | Notes |
|---|---|---|---|
| `businessName` | text | ✓ | |
| `description` | textarea | ✓ | |
| `industry` | select | | 19 options in [lib/constants.ts](lib/constants.ts): SaaS, E-commerce, Restaurant, Cafe/Bar, Agency, Portfolio, Healthcare, Education, Real Estate, Fitness, Finance, Travel/Tourism, Non-Profit, Blog/Media, Tech Startup, Mobile App, Retail/Store, Event/Conference, Other |
| `style` | select | | 11 options: Modern, Minimal, Bold, Elegant, Playful, Professional, Futuristic, Luxury, Vintage, Creative, Clean |
| `targetAudience` | text | ✓ | |
| `colorMood` | visual picker | | 14 color moods (see [Color Palette System](#8-color-palette-system)) |
| `features` | multi-input (tag style) | ✓ | Enter to add, max 8 |
| `benefits` | multi-input | | Optional, max 2 |
| `ctaPreference` | select | | 12 options: Sign Up, Get Started, Learn More, Contact Us, Book Now, Try Free, Download, Subscribe, Join Now, Request Demo, Shop Now, View More |

Supporting primitives:
- [FormInput.tsx](components/generator/FormInput.tsx), [FormTextArea.tsx](components/generator/FormTextArea.tsx), [FormSelect.tsx](components/generator/FormSelect.tsx)
- [FormMultiInput.tsx](components/generator/FormMultiInput.tsx) — Enter-to-add tag input with `max` cap.
- [FormColorMood.tsx](components/generator/FormColorMood.tsx) — visual swatch picker.
- [Popup.tsx](components/generator/Popup.tsx) — positioned error toast.

Client-side validation runs on submit. First failing field is surfaced via the top-right popup.

---

### 3. AI Generation Pipeline

#### 3.1 API Route — [app/api/generate/route.ts](app/api/generate/route.ts)
Next.js Route Handler that proxies the browser → **Google Gemini 2.5 Flash** (`generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent`). Keeps `GEMINI_API_KEY` server-side. Generation config: `temperature: 0.7`, `maxOutputTokens: 8048`, `topP: 0.95`, `topK: 40`. Commented-out OpenAI branch remains for reference.

#### 3.2 Prompt Engineering — [lib/ai.ts](lib/ai.ts)
The system prompt is long and highly structured. It instructs the model to return **only valid JSON** matching an exact schema for four sections (`hero`, `features`, `content`, `cta`) and contains:
- **Layout selection rules** — when to choose `centered` vs `split` vs `background` for hero, `grid` vs `cards` vs `alternating` for features, etc.
- **Feature count rules** — auto-expand 1–2 features to 3, cap grid at 6, cap alternating at 4.
- **Image generation rules** — unique Picsum seeds per image, format `https://picsum.photos/seed/{businessType}-{section}-{descriptor}/{w}/{h}`.
- **Three content variants always generated** — `single`, `twoCol`, `image` — so the user can switch layout in the editor without re-calling the AI.
- **Per-industry guidance** — SaaS / E-commerce / Healthcare / Education / Finance have tailored tone instructions ([getIndustryGuidance](lib/ai.ts)).
- **Per-style tone guidance** — Professional / Friendly / Bold / Minimalist ([getToneGuidance](lib/ai.ts)).
- **Copywriting principles** — benefit-first headlines, action-verb CTAs, tone matching by vertical.

#### 3.3 Response Parsing — `parseAIResponse` in [lib/ai.ts](lib/ai.ts)
- Strips ` ```json ` / ` ``` ` fences if the model wraps output despite instructions.
- `JSON.parse`s the cleaned string.
- Maps each key (`hero`, `features`, `content`, `cta`) into a typed `Section` with a `generateId()` uuid and explicit `order`.
- Appends a default footer section using `businessName` and `description.substring(0, 100)`.
- Returns a `LandingPage` object: `{ id, businessName, theme, sections, createdAt, updatedAt }`.

#### 3.4 Section Regeneration — `regenerateSection` in [lib/ai.ts](lib/ai.ts)
Targeted prompt to rebuild a single section. Preserves the section's original `id`, `order`, and `visible` flags, replaces only the content. Invoked from the section settings panel in the editor.

#### 3.5 `useAI` Hook — [hooks/useAi.ts](hooks/useAi.ts)
React state wrapper around `generateLandingPage` / `regenerateSection`. Exposes:
- `generate(formData)` — returns the parsed `LandingPage` or `null`.
- `regenerate(sectionType, formData, currentSection)` — returns the replacement `Section` or `null`.
- `isGenerating`, `error`, `progress` (0–99 simulated progress bar, capped at 99 until the promise resolves to 100).

#### 3.6 Loader & Error Screens
- [components/preview/AiGenerationLoader.tsx](components/preview/AiGenerationLoader.tsx) — full-screen progress UI with five labeled stages ("Analyzing your business", "Crafting compelling copy", "Designing your layout", "Optimizing for conversions", "Almost ready to launch"). Icons pulse at the active stage, checkmark when passed. Gradient progress bar + 20 floating particles (client-only to avoid hydration mismatch).
- [components/preview/AiGenerationError.tsx](components/preview/AiGenerationError.tsx) — fallback with retry.

---

### 4. Live Editable Preview (`/preview`)

[app/(routes)/preview/page.tsx](app/(routes)/preview/page.tsx) renders the generated landing page with the editor chrome on top.

- **Guard states** — shows "Loading..." while the context hydrates from localStorage, and "No landing page found → Generate one now" if nothing is stored.
- [EditorPanel.tsx](components/editor/EditorPanel.tsx) — fixed top bar: Back link, business name, palette switcher, export button.
- [PreviewPage.tsx](components/editor/PreviewPage.tsx) — renders a generated navbar plus every visible section sorted by `order`.
- [SectionRenderer.tsx](components/editor/SectionRenderer.tsx) — dispatches each section to the right component by `type` and renders a skeleton when that section is being regenerated.

---

### 5. Section System (the building blocks)

All generated-page sections live under [components/sections/](components/sections/). Every section type has **multiple layouts** — the same content renders differently depending on the chosen layout.

#### 5.1 Hero — [components/sections/hero/](components/sections/hero/)
| Layout | File | Description |
|---|---|---|
| `centered` | [HeroCentered.tsx](components/sections/hero/HeroCentered.tsx) | Text stacked above a wide product image. |
| `split` | [HeroSplit.tsx](components/sections/hero/HeroSplit.tsx) | Two-column: copy + button on the left, image on the right. |
| `background` | [HeroBackground.tsx](components/sections/hero/HeroBackground.tsx) | Full-bleed background image with dark overlay and centered copy. |
| skeleton | [HeroSkeleton.tsx](components/sections/hero/HeroSkeleton.tsx) | Layout-matched shimmer during regeneration. |

#### 5.2 Features — [components/sections/features/](components/sections/features/)
| Layout | File | Description |
|---|---|---|
| `grid` | [FeaturesGrid.tsx](components/sections/features/FeaturesGrid.tsx) | Balanced 3-column grid with icon + title + description. |
| `cards` | [FeaturesCards.tsx](components/sections/features/FeaturesCards.tsx) | Elevated cards on a surface background. |
| `alternating` | [FeaturesAlternating.tsx](components/sections/features/FeaturesAlternating.tsx) | Large image/text pairs, alternating sides per row. |
| skeleton | [FeaturesSkeleton.tsx](components/sections/features/FeaturesSkeleton.tsx) | |

#### 5.3 Content — [components/sections/content/](components/sections/content/)
Always stores all three variants (the AI generates all three). The user can toggle between them live without a re-generate.
| Layout | File | Description |
|---|---|---|
| `single` | [ContentSingle.tsx](components/sections/content/ContentSingle.tsx) | Mission-statement paragraph, optional image, optional CTA. |
| `two-col` | [ContentTwoColumn.tsx](components/sections/content/ContentTwoColumn.tsx) | Problem→Solution / Before→After. Right column can be a list or a paragraph. |
| `image` | [ContentImage.tsx](components/sections/content/ContentImage.tsx) | 2–3 visual "story blocks" with alternating image positions. |
| skeleton | [ContentSkeleton.tsx](components/sections/content/ContentSkeleton.tsx) | |

#### 5.4 CTA — [components/sections/cta/](components/sections/cta/)
| Layout | File | Description |
|---|---|---|
| `centered` | [CTACentered.tsx](components/sections/cta/CTACentered.tsx) | Gradient band, centered heading + button. |
| `split` | [CTASplit.tsx](components/sections/cta/CTASplit.tsx) | Gradient left, white card with ctaTitle/ctaDescription on the right. |
| skeleton | [CTASkeleton.tsx](components/sections/cta/CTASkeleton.tsx) | |

#### 5.5 Footer — [components/sections/footer/](components/sections/footer/)
- [FooterSimple.tsx](components/sections/footer/FooterSimple.tsx) — company name, description, copyright.
- [FooterSection.tsx](components/sections/footer/FooterSection.tsx) — dispatcher.
- [FooterSkeleton.tsx](components/sections/footer/FooterSkeleton.tsx)

#### 5.6 Generated-page Navbar — [components/sections/navbar/Navbar.tsx](components/sections/navbar/Navbar.tsx)
Lightweight navbar auto-assembled from the landing page data (business name, hero CTA text and URL, anchor links to `#features` / `#content`).

Additional typed-but-not-yet-rendered types exist in [types/section.ts](types/section.ts): `social-proof`, `pricing`, `faq`. These are scaffolded in `SectionType` and `SectionSettings` layout options, ready for future section components.

---

### 6. Inline Editing

#### 6.1 EditableText — [components/editor/EditableText.tsx](components/editor/EditableText.tsx)
Any text on the preview page becomes editable by clicking. Features:
- Click-to-edit with dashed outline on hover.
- Renders as the chosen tag (`h1`, `h2`, `h3`, `p`, `span`) while not editing — preserves semantics.
- `multiline` mode uses a `<textarea>` that auto-resizes to content height.
- Enter-to-save (single-line), Escape-to-cancel, blur-to-save.
- Writes through `updateSection(sectionId, { [field]: text })` using a deep-path-aware update (supports nested keys like `stories.0.content`).
- Optional `onSave` override for custom write handlers.

#### 6.2 EditableImage — [components/editor/EditableImage.tsx](components/editor/EditableImage.tsx)
- Hover overlay exposes "URL" and "Remove" buttons.
- URL modal: paste any image URL, commits via `updateSection`.
- Upload branch is scaffolded (commented out) — reads File → data URL with a 5MB size guard.
- Empty-state placeholder with upload icon when no image is set.

---

### 7. Section Controls (per-section panel)

[components/editor/SectionSettings.tsx](components/editor/SectionSettings.tsx) renders a floating ⚙︎ button at the top-right of every section in edit mode. Clicking it opens a panel with:

- **Layout Style** select — live-swap between that section type's layouts (e.g. `grid` ↔ `cards` ↔ `alternating` for features, or `single` ↔ `two-col` ↔ `image` for content).
- **Hide / Show Section** — toggles `visible`. Hidden sections render a gray placeholder in edit mode and are omitted entirely on export.
- **Regenerate** — calls `useAI().regenerate(section.type, formData, section)`. While pending, [SectionControls.tsx](components/editor/SectionControls.tsx) swaps the live section for its matching skeleton (tracked via `regeneratingSections` in the landing page context).
- Error surface: failed regenerations show inline red copy inside the panel.
- Delete branch is scaffolded but disabled (footer and hero are protected).

---

### 8. Color Palette System

#### 8.1 Built-in palettes — [lib/theme.ts](lib/theme.ts)
Nine production-ready palettes, each with eight tokens (`primary`, `secondary`, `accent`, `background`, `surface`, `text`, `textSecondary`, `border`):
- Professional Blue (default surfaced on marketing site)
- Energetic Orange
- Calm Green
- Bold Purple
- Elegant Black
- Warm Red
- Trustworthy Navy (fallback)
- Creative Pink
- (The intake form additionally lists 14 named color moods — 5 are placeholders for future palettes.)

#### 8.2 ThemeProvider — [context/ThemeProvider.tsx](context/ThemeProvider.tsx)
Wraps the app and injects the active palette as CSS custom properties on a container div:
```
--color-primary, --color-secondary, --color-accent,
--color-background, --color-surface,
--color-body-text, --color-body-text-secondary, --color-border
```
Every section component references these variables, so the entire page re-themes on palette change with zero re-render of section content.

#### 8.3 PaletteSwitcher — [components/editor/PaletteSwitcher.tsx](components/editor/PaletteSwitcher.tsx)
Top-bar dropdown showing a swatch trio for each palette. Clicking calls `updateLandingPage({ theme: id })`. A `useCloseOnOutside` hook closes the panel on outside click or Escape.

---

### 9. Export Engine

[lib/export.ts](lib/export.ts) — converts the in-memory `LandingPage` into standalone, deployable HTML.

- **Per-section generators** — `generateHeroHTML`, `generateFeaturesHTML`, `generateContentHTML`, `generateCTAHTML`, `generateFooterHTML` mirror the React components' layouts with plain HTML + Tailwind classes.
- **`generateFullHTML(landingPage)`** — returns a single file with Tailwind CDN, injected CSS variables from the current palette, and a generated navbar. Only visible sections are included, ordered by `order`.
- **`generateSeparateFiles(landingPage)`** — returns `{ html, css }` — the same HTML but linking to `styles.css` instead of inlining custom CSS.

Exposed via [ExportButton.tsx](components/editor/ExportButton.tsx):
- **Copy HTML** — clipboard copy with a 2-second "Copied!" confirmation.
- **Download Single File** — single `.html` named `{business-name}.html`.
- **Download HTML + CSS** — two files (`index.html`, `styles.css`) via back-to-back blob downloads.

---

### 10. Persistence (localStorage)

[context/LandingPageProvider.tsx](context/LandingPageProvider.tsx) wraps the app and keeps two keys in localStorage:

| Key | Written by | Purpose |
|---|---|---|
| `currentLandingPage` | `LandingPageProvider` (auto-syncs on every change) | Full generated `LandingPage` — survives reload, powers `/preview` on revisit. |
| `businessFormData` | `/generate` on submit | The original `BusinessFormData` — read by section regeneration so Gemini gets the same business context. |

The provider also exposes:
- `setLandingPage`, `updateLandingPage` (top-level fields with auto `updatedAt`)
- `updateSection(id, updates)` — deep-path-aware, supports dotted keys like `stories.0.content` and arrays.
- `reorderSections(sectionIds[])` — reassigns `order` by index.
- `toggleSectionVisibility(id)`
- `startRegeneration(id)` / `finishRegeneration(id)` — drives skeleton swaps in `SectionRenderer`.
- Auto-applies the landing page's saved `theme` to `ThemeProvider` whenever the page loads or changes.

---

### 11. AI Test Mode

Set `NEXT_PUBLIC_AI_TEST_MODE=true` to bypass Gemini and return a deterministic mock response after a 14-second delay. Useful for working on the editor UI without burning tokens. See `generateMockResponse` in [lib/ai.ts](lib/ai.ts).

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16.1.1** (App Router) |
| Runtime | React 19.2 |
| Styling | **Tailwind CSS v4** (PostCSS), CSS custom properties for theming |
| Language | TypeScript 5 |
| AI | Google Gemini 2.5 Flash via Next.js route handler |
| Icons | lucide-react, react-icons |
| Motion / animation | framer-motion, hand-written IntersectionObserver hook, custom CSS keyframes |
| Carousel | embla-carousel + embla-carousel-autoplay |
| Particles | tsparticles + react-tsparticles |
| Utilities | clsx + tailwind-merge (`cn`), custom `generateId` / `slugify` / `formatDate` in [lib/utils.ts](lib/utils.ts) |
| Testing | Jest 30, @testing-library/react, jest-environment-jsdom |

See [package.json](package.json) for exact versions.

---

## Project Structure

```
site-genie/
├── app/
│   ├── (routes)/
│   │   ├── generate/page.tsx       # Business form + AI trigger
│   │   └── preview/page.tsx        # Editor + live preview
│   ├── api/generate/route.ts       # Server-side Gemini proxy
│   ├── layout.tsx                  # ThemeProvider + LandingPageProvider
│   ├── page.tsx                    # Marketing homepage
│   └── globals.css                 # Tailwind + animation keyframes
│
├── components/
│   ├── Navbar.tsx                  # Marketing navbar
│   ├── Header.tsx                  # Shared section header (pre-headline, main, sub)
│   ├── landingPage/                # Marketing site sections
│   │   ├── hero/
│   │   ├── preview/                # Industry mockups (SaaS/Portfolio/Restaurant/Ecommerce)
│   │   ├── features/
│   │   ├── how-it-works/
│   │   ├── testimonial/
│   │   ├── finalCTA/               # Animated CTA with confetti & particles
│   │   └── footer/
│   ├── generator/                  # /generate form + inputs
│   ├── preview/                    # Loading + error screens
│   ├── editor/                     # Inline editing + export + palette switcher
│   ├── sections/                   # Generated-page sections (hero/features/content/cta/footer)
│   │                               # Each has layout variants + a skeleton.
│   └── ui/                         # Button, Input, Select, Textarea, Pill
│
├── context/
│   ├── ThemeProvider.tsx           # Palette → CSS custom properties
│   └── LandingPageProvider.tsx     # Generated page state + localStorage sync
│
├── hooks/
│   ├── useAi.ts                    # generate / regenerate with progress state
│   └── useInView.ts                # One-shot IntersectionObserver hook
│
├── lib/
│   ├── ai.ts                       # Prompt engineering + response parsing
│   ├── export.ts                   # LandingPage → HTML / HTML+CSS
│   ├── theme.ts                    # COLOR_PALETTES + helpers
│   ├── constants.ts                # INDUSTRIES / STYLES / CTA_OPTIONS / COLOR_MOODS
│   └── utils.ts                    # cn, generateId, capitalize, formatDate, slugify
│
├── data/FeatureCards.ts            # Feature grid data
├── types/
│   ├── section.ts                  # LandingPage + Section discriminated union
│   ├── form.ts                     # BusinessFormData
│   ├── theme.ts                    # ColorPalette
│   └── features.ts                 # FeatureCard
│
├── assets/                         # Logos + hero imagery
├── public/                         # Static assets
└── __test__/ai.test.ts             # AI module tests
```

---

## Environment Variables

Create a `.env.local` at the project root:

```env
# Required — server-side (used by app/api/generate/route.ts)
GEMINI_API_KEY=your_gemini_api_key

# Required — client-side (used by lib/ai.ts to decide whether to call the API)
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# Optional — returns a hardcoded mock instead of hitting Gemini
NEXT_PUBLIC_AI_TEST_MODE=false
AI_TEST_MODE=false
```

Get a Gemini key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey).

---

## Getting Started

```bash
# 1. Install
npm install

# 2. Add your Gemini API key (see above)
cp .env.example .env.local   # then edit

# 3. Dev server
npm run dev                  # http://localhost:3000

# 4. Production build
npm run build && npm start
```

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Next dev server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint (eslint-config-next) |
| `npm test` | Jest once |
| `npm run test:watch` | Jest in watch mode |

---

## Data Model Reference

Types live in [types/section.ts](types/section.ts).

```ts
LandingPage {
  id: string
  businessName: string
  theme: string              // palette id, e.g. 'professional-blue'
  sections: Section[]        // ordered by .order
  createdAt: Date
  updatedAt: Date
}

Section = HeroSection | FeaturesSection | ContentSection
        | CTASection | FooterSection | SocialProofSection
        | PricingSection | FAQSection

BaseSection { id, type, visible, order }
```

Section-type → layout enum:
- `hero` → `centered | split | background`
- `features` → `grid | cards | alternating`
- `content` → `single | two-col | image` (all three always present in the data)
- `cta` → `centered | split`
- `footer` → `simple | detailed`

---

**Status:** Marketing site complete. Generator, editor, export, and Gemini integration fully working. Social-proof / pricing / FAQ section types scaffolded in the type system, ready to be rendered.
