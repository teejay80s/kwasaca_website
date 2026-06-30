# KWASACA — Official Website

<p align="center">
  <img src="public/kwasaca-logo.png" alt="KWASACA Logo" width="120" />
</p>

<p align="center">
  <strong>Kwara State AIDS Control Agency (KWASACA)</strong><br>
  Coordinating HIV/AIDS response across all 16 LGAs of Kwara State, Nigeria.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2-000000?style=flat-square&logo=next.js" alt="Next.js 14.2" />
  <img src="https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript" alt="TypeScript 5.4" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS 3.4" />
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase" alt="Supabase" />
  <img src="https://img.shields.io/badge/Sanity_CMS-F03E2F?style=flat-square&logo=sanity" alt="Sanity CMS" />
  <img src="https://img.shields.io/badge/Claude_AI-9775FA?style=flat-square&logo=anthropic" alt="Claude AI" />
  <img src="https://img.shields.io/badge/Resend-000000?style=flat-square&logo=resend" alt="Resend" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel" alt="Vercel" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT License" />
</p>

---

## 📋 Full Table of Contents

- [About KWASACA](#-about-kwasaca)
- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project File Tree](#-project-file-tree)
- [Architecture & Data Flow](#-architecture--data-flow)
- [Pages & Routes](#-pages--routes)
- [API Endpoints](#-api-endpoints)
- [Server Components vs Client Components](#-server-components-vs-client-components)
- [Design System & Brand](#-design-system--brand)
- [Component Library](#-component-library)
- [AI Chatbot System](#-ai-chatbot-system)
- [Language & Translation System](#-language--translation-system)
- [Animation System](#-animation-system)
- [Content Management (Sanity CMS)](#-content-management-sanity-cms)
- [Database (Supabase)](#-database-supabase)
- [Email System (Resend)](#-email-system-resend)
- [Authentication & Admin](#-authentication--admin)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [Environment Variables](#-environment-variables)
- [Getting Started](#-getting-started)
- [Deployment (Vercel)](#-deployment-vercel)
- [Security Checklist](#-security-checklist)
- [Common Patterns & Conventions](#-common-patterns--conventions)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🏥 About KWASACA

**KWASACA** (Kwara State AIDS Control Agency) is the apex state body responsible for coordinating, monitoring, and evaluating HIV/AIDS response activities across Kwara State, Nigeria.

| Attribute | Value |
|-----------|-------|
| **Established** | Agency under Kwara State Government |
| **Coverage** | All 16 Local Government Areas (LGAs) of Kwara State |
| **Supervision** | Office of the Deputy Governor of Kwara State |
| **HIV Prevalence (Kwara)** | 1.0% (below national average of 1.5%) |
| **Key Partners** | NACA, UNAIDS, PEPFAR, Global Fund, World Bank, SFH Nigeria, WHO, UNICEF |

**Kwara State's 16 LGAs:** Asa, Baruten, Edu, Ekiti, Ifelodun, Ilorin East, Ilorin South, Ilorin West, Irepodun, Isin, Kaiama, Moro, Offa, Oke-Ero, Oyun, Pategi.

This digital platform serves as the official web presence for KWASACA — providing public health information, service directories, news updates, and interactive tools to the citizens of Kwara State.

---

## 📌 Project Overview

| Attribute | Detail |
|-----------|--------|
| **Framework** | Next.js 14.2.3 (App Router) |
| **Language** | TypeScript 5.4 |
| **Styling** | Tailwind CSS 3.4 + custom CSS in `app/globals.css` |
| **Database** | Supabase (PostgreSQL) |
| **CMS** | Sanity.io |
| **AI** | Anthropic Claude Sonnet 4 |
| **Email** | Resend |
| **Forms** | React Hook Form + Zod |
| **Icons** | Lucide React |
| **Fonts** | Cormorant Garamond (headings), Outfit (body) |
| **Auth** | Supabase SSR (cookie-based) |
| **Deployment** | Vercel (auto-deploy from GitHub `main` branch) |

---

## ✨ Features

### For Citizens & Visitors
| Feature | Description | Implementation |
|---------|-------------|----------------|
| **🏠 Homepage** | Hero with background image, animated title, CTA buttons, quick-access cards, stats counter bar | `app/page.tsx` |
| **🔬 About Page** | Image carousel, mandate overview, leadership hierarchy, partner logos | `app/about/page.tsx` + `ImageCarousel.tsx` |
| **📋 Programs & Services** | 6 programs with featured card layout, testing centers by LGA | `app/programs/page.tsx` |
| **📰 News & Updates** | Sanity CMS-driven news with categories, search, and article pages | `app/news/page.tsx` + `app/news/[slug]/page.tsx` |
| **📊 Data & Reports** | HIV prevalence stats, annual reports, downloadable PDFs | `app/data-reports/page.tsx` |
| **🔬 Research Portal** | Research proposal submission with file uploads, form validation | `app/research/page.tsx` + `ResearchForm.tsx` |
| **🤝 Get Involved** | Information for NGOs, donors, volunteers, faith organizations | `app/get-involved/page.tsx` |
| **📞 Contact & Complaints** | Contact form + complaint filing with email notifications | `app/contact/page.tsx` + `ContactForm.tsx` |
| **🤖 AI Chatbot** | Claude-powered assistant with 14-section knowledge base retrieval | `Chatbot.tsx` + `api/chat/route.ts` + `lib/knowledge-base.ts` |
| **🌐 Multi-Language** | English, Yoruba (`?lang=yo`), Hausa (`?lang=ha`) via query params | `LanguageToggle.tsx` + `lib/translations.ts` |

### For Administrators
| Feature | Description | Implementation |
|---------|-------------|----------------|
| **📊 Admin Dashboard** | Central interface for managing submissions | `app/admin/page.tsx` |
| **📥 Research Inbox** | Review, filter, and manage research proposals | `app/admin/research/page.tsx` + `api/admin/research/route.ts` |
| **📩 Complaint Management** | Manage public complaints with reply functionality | `app/admin/complaints/page.tsx` + `api/admin/complaints/route.ts` |
| **✍️ Sanity CMS Studio** | Embedded content management for news, events, reports, programs | `app/studio/[[...tool]]/page.tsx` |
| **🔐 Authentication** | Supabase SSR auth for admin routes | `middleware.ts` + `utils/supabase/` |

---

## 🛠 Tech Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | [Next.js](https://nextjs.org/) | 14.2.3 | React framework with App Router, SSR, SSG, API routes |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5.4 | Type safety across entire codebase |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first CSS with responsive design |
| **Database** | [Supabase](https://supabase.com/) | 2.43 | PostgreSQL database, auth, file storage |
| **CMS** | [Sanity.io](https://www.sanity.io/) | 3.38 | Headless CMS for news, events, programs, reports |
| **AI** | [Anthropic Claude](https://www.anthropic.com/) | 0.24 | Sonnet 4 model for AI chatbot with knowledge retrieval |
| **Email** | [Resend](https://resend.com/) | 3.2 | Transactional emails (complaint replies, confirmations) |
| **Forms** | React Hook Form + Resolvers | 7.51 / 3.3 | Form state management |
| **Validation** | [Zod](https://zod.dev/) | 3.23 | Schema validation for forms and env vars |
| **Icons** | [Lucide React](https://lucide.dev/) | 0.376 | Consistent icon component library |
| **Sanity Client** | [next-sanity](https://www.sanity.io/plugins/next-sanity) | 9.0 | Sanity image URL builder + client |
| **Utilities** | clsx, tailwind-merge | — | Class name merging utilities |
| **Fonts** | Cormorant Garamond + Outfit | — | Serif headings, clean sans body (Google Fonts) |
| **Dev Tools** | ESLint, PostCSS, Autoprefixer | — | Code quality and CSS processing |

---

## 📁 Project File Tree

```
kwasaca/
├── app/                              # Next.js App Router pages and API routes
│   ├── layout.tsx                    # Root layout — Navbar, Footer, Chatbot wrapper
│   ├── page.tsx                      # Homepage (async server component, fetches Sanity news)
│   ├── loading.tsx                   # Root loading state (spinner)
│   ├── not-found.tsx                 # 404 page
│   ├── globals.css                   # All custom CSS styles + keyframes + responsive rules
│   │
│   ├── about/page.tsx                # About page — mandate, leadership, partners, carousel
│   ├── programs/page.tsx             # Programs page — 6 programs in grid + testing centers
│   ├── contact/page.tsx              # Contact page — form + complaint filing
│   ├── data-reports/page.tsx         # Data & Reports page — stats + downloadable PDFs
│   ├── get-involved/page.tsx         # Get Involved page — NGOs, donors, volunteers
│   ├── research/page.tsx             # Research portal — submission form
│   │
│   ├── news/
│   │   ├── page.tsx                  # News listing page (fetched from Sanity)
│   │   └── [slug]/page.tsx           # Individual news article (static generation)
│   │
│   ├── admin/
│   │   ├── page.tsx                  # Admin dashboard
│   │   ├── layout.tsx                # Admin layout wrapper
│   │   ├── loading.tsx               # Admin loading state
│   │   ├── complaints/
│   │   │   ├── page.tsx              # Complaints inbox (fetch + filter + reply)
│   │   │   └── loading.tsx
│   │   └── research/
│   │       ├── page.tsx              # Research submissions inbox
│   │       └── loading.tsx
│   │
│   ├── auth/
│   │   ├── login/page.tsx            # Admin login page
│   │   ├── callback/route.ts         # Supabase auth callback handler
│   │   └── actions.ts               # Auth server actions (login, signout)
│   │
│   ├── studio/[[...tool]]/page.tsx   # Embedded Sanity CMS Studio
│   │
│   └── api/                          # API Routes (serverless functions)
│       ├── chat/route.ts             # POST — AI chatbot with knowledge retrieval
│       ├── contact/route.ts          # POST — Contact/complaint → Supabase + Resend email
│       ├── research/route.ts         # POST — Research submission → Supabase + Resend email
│       ├── revalidate/route.ts       # POST — Sanity webhook cache revalidation
│       ├── upload/route.ts           # POST — File upload for research attachments
│       ├── auth/signout/route.ts     # POST — Supabase auth signout
│       ├── admin/
│       │   ├── complaints/route.ts   # GET/PATCH — Admin complaints CRUD
│       │   ├── research/route.ts     # GET/PATCH — Admin research submissions CRUD
│       │   └── contact/route.ts      # GET — Admin contact submissions
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                # Main navigation (client component)
│   │   │   - Sticky with backdrop blur
│   │   │   - Desktop: logo + links + CTAs
│   │   │   - Mobile (<640px): logo hides text, hamburger menu
│   │   │   - Admin mode: extra Admin + Sign Out links
│   │   │   - Props: { isAdmin?: boolean }
│   │   │   - State: open (menu), scrolled (scroll listener)
│   │   │   - Closes menu on route change (pathname effect)
│   │   │
│   │   ├── Footer.tsx                # Footer (server component)
│   │   │   - 140px logo, pt-28, pb-12
│   │   │   - Link columns with large text/spacing
│   │   │   - Partner organization logos
│   │   │
│   │   └── Chatbot.tsx               # AI chatbot widget (client component)
│   │       - Fixed bottom-right FAB, appears after 3s delay
│   │       - Dark green theme (no white backgrounds)
│   │       - Suggestion buttons → API → knowledge retrieval → Claude
│   │       - Error handling with message display
│   │       - Loading dots animation
│   │       - State: open, messages, input, loading, shown
│   │
│   ├── ui/
│   │   ├── ScrollReveal.tsx           # IntersectionObserver animation controller
│   │   │   - Watches .reveal (fade up) and .count (number count-up) elements
│   │   │   - Single effect, no cleanup issues
│   │   │
│   │   ├── ImageCarousel.tsx          # Auto-sliding image carousel
│   │   │   - 4 African-themed images (community, women, children, mother & child)
│   │   │   - Gradient overlay + dot navigation
│   │   │   - 5-second auto-advance
│   │   │   - State: currentIndex
│   │   │
│   │   ├── LanguageToggle.tsx         # Language switcher (client component)
│   │   │   - Positioned in hero top-right
│   │   │   - Uses searchParams from URL
│   │   │   - Toggles between EN / YO / HA
│   │   │   - Full page navigation on switch
│   │   │   - Props: { currentLang: string }
│   │   │
│   │   └── LoadingSpinner.tsx         # Reusable spinner component
│   │
│   └── forms/
│       ├── ContactForm.tsx            # Contact + complaint form (React Hook Form + Zod)
│       │   - Fields: name, email, phone, type (enquiry/complaint), subject, message
│       │   - Props: { defaultType?: string }
│       │   - POST to /api/contact on submit
│       │   - Shows success/error toast
│       │
│       └── ResearchForm.tsx           # Research proposal form (React Hook Form + Zod)
│           - Fields: name, email, organization, title, abstract, file upload
│           - POST to /api/research on submit
│           - File upload via /api/upload
│           - Shows success/error toast
│
├── lib/                              # Shared utilities, clients, and data
│   ├── anthropic.ts                  # Anthropic Claude SDK client + system prompt builder
│   │   - Exports: anthropic (client instance), buildSystemPrompt(context)
│   │
│   ├── knowledge-base.ts             # Structured knowledge for AI chatbot (14 sections)
│   │   - Each section: id, title, keywords[], content (string)
│   │   - Exports: getRelevantContext(query, maxSections=5), getAllKnowledge()
│   │   - Keyword overlap scoring for relevance matching
│   │   - Sections: about-kwasaca, contact, hiv-testing, art-treatment, pmtct,
│   │     ovc-support, community-outreach, hiv-basics, testing-locations,
│   │     programs-overview, stigma, prep, partners, lgas
│   │
│   ├── translations.ts               # All static text in 3 languages
│   │   - en: English (default)
│   │   - yo: Yoruba
│   │   - ha: Hausa
│   │   - Structure: { hero: {}, about: {}, programs: {}, ... }
│   │
│   ├── logos.ts                      # Logo image paths for Navbar and Footer
│   │   - KWASACA_LOGO, KWARA_LOGO
│   │
│   ├── env.ts                        # Environment variable validation (Zod schema)
│   │   - Validates all required env vars at runtime
│   │   - ANTHROPIC_API_KEY starts with sk-ant-
│   │
│   ├── sanity.ts                     # Sanity client, image builder, and GROQ queries
│   │   - Exports: client, imageBuilder, sanityFetch
│   │   - Queries: getAllNews, getNewsBySlug
│   │
│   ├── supabase.ts                   # Supabase admin client (service role)
│   │   - Exports: supabaseAdmin, getServiceRoleClient
│   │   - For server-side database operations
│   │
│   ├── resend.ts                     # Resend email client
│   │   - Exports: resend (client instance)
│   │
│   ├── utils.ts                      # General utilities
│   │   - formatDate helper
│   │
│   └── validations.ts               # Zod validation schemas for forms
│       - contactSchema, researchSchema
│
├── utils/supabase/                   # Supabase client helpers for different contexts
│   ├── client.ts                     # Browser-side Supabase client (anon key)
│   ├── server.ts                     # Server-side Supabase client (service role)
│   └── middleware.ts                 # Supabase middleware client (for Next.js middleware)
│
├── sanity/schemas/                   # Sanity CMS content schemas
│   ├── index.ts                      # Schema registry (exports all schemas)
│   ├── news.ts                       # News article: title, slug, content, category, image, date
│   ├── program.ts                    # Program: title, description, icon, link, order
│   ├── event.ts                      # Event: title, date, location, description, registration link
│   └── report.ts                     # Report: title, description, file upload, date
│
├── public/                           # Static assets (served at root /)
│   ├── kwasaca-logo.png              # KWASACA organization logo
│   ├── kwara-logo.webp               # Kwara State Government logo
│   ├── logo/
│   │   ├── kwara-state-logo.webp     # Kwara State logo (alternate)
│   │   └── kwara state logo.webp     # Kwara State logo (alternate)
│   ├── naca logo.jpeg                # NACA partner logo
│   ├── UNAIDS_logo.png               # UNAIDS partner logo
│   ├── pepfar logo.jpg               # PEPFAR partner logo
│   ├── gf logo.png                   # Global Fund partner logo
│   ├── wb logo.jpeg                  # World Bank partner logo
│   ├── sfh logo.png                  # SFH Nigeria partner logo
│   ├── who logo.jpeg                 # WHO partner logo
│   └── unicef logo.png               # UNICEF partner logo
│
├── middleware.ts                     # Next.js middleware (auth redirect for /admin)
├── next.config.js                    # Next.js configuration (image remote patterns)
├── tailwind.config.ts                # Tailwind CSS configuration (colors, fonts, animations)
├── postcss.config.js                 # PostCSS configuration (Tailwind + Autoprefixer)
├── tsconfig.json                     # TypeScript configuration
├── sanity.config.ts                  # Sanity Studio configuration
├── package.json                      # Dependencies and scripts
├── supabase-setup.sql                # Supabase table creation + RLS policies SQL
├── supabase-schema.sql               # Supabase database schema reference
├── vercel.json                       # Vercel deployment configuration
└── .gitignore                        # Git ignore rules
```

---

## 🏗 Architecture & Data Flow

### High-Level Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                        Browser (Client)                       │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  Next.js 14 App Router                                 │  │
│  │  ├── Server Components (page.tsx files — SSR/SSG)      │  │
│  │  ├── Client Components ('use client' — interactivity)  │  │
│  │  │   ├── Navbar.tsx (sticky, scroll-aware)             │  │
│  │  │   ├── Chatbot.tsx (FAB, messages, send)             │  │
│  │  │   ├── ImageCarousel.tsx (auto-slide, dots)          │  │
│  │  │   ├── LanguageToggle.tsx (EN/YO/HA switch)          │  │
│  │  │   ├── ScrollReveal.tsx (IntersectionObserver)       │  │
│  │  │   ├── ContactForm.tsx (React Hook Form + Zod)       │  │
│  │  │   └── ResearchForm.tsx (React Hook Form + Zod)      │  │
│  │  └── API Routes (serverless functions)                 │  │
│  └────────────────────────────────────────────────────────┘  │
└───────────────────────────┬──────────────────────────────────┘
                            │
      ┌─────────────────────┼─────────────────────┐
      ▼                     ▼                     ▼
 ┌──────────┐        ┌──────────┐          ┌──────────┐
 │ Supabase │        │  Sanity  │          │ Anthropic│
 │PostgreSQL│        │   CMS    │          │  Claude  │
 │  + Auth  │        │ Content  │          │ Sonnet 4 │
 └────┬─────┘        └──────────┘          └──────────┘
      │                    │
      ▼                    ▼
 ┌──────────┐       ┌──────────────┐
 │  Resend  │       │  /api/       │
 │ (Email)  │       │ revalidate   │
 └──────────┘       └──────────────┘
```

### Data Flow Details

**1. Public Page Rendering**
```
Request → Next.js Server → 
  ├── Sanity: fetch news/articles (GROQ query)
  ├── Supabase: no DB calls for public pages
  └── Returns server-rendered HTML (SSR) or static HTML (SSG)
```

**2. Contact / Complaint Form**
```
User fills form → Zod validation (client-side) →
  POST /api/contact →
    ├── INSERT into Supabase `contact_submissions` table
    ├── Send email via Resend (notification to admin)
    └── Return { success: true }
```

**3. Research Submission**
```
User fills form + uploads file → Zod validation →
  POST /api/research →
    ├── POST /api/upload (file → Supabase Storage)
    ├── INSERT into Supabase `research_submissions` table
    ├── Send email via Resend (notification to admin)
    └── Return { success: true }
```

**4. AI Chatbot**
```
User types message →
  POST /api/chat { messages: [...] } →
    ├── Extract last user message
    ├── getRelevantContext(query) → keyword matching on 14 knowledge sections
    ├── buildSystemPrompt(relevantContext) → injects knowledge as reference
    ├── anthropic.messages.create({ model, system, messages })
    └── Return { message: claudeResponse }
```

**5. Sanity Webhook (Cache Revalidation)**
```
Sanity publish → POST /api/revalidate { webhook secret } →
  ├── Verify secret matches SANITY_WEBHOOK_SECRET
  └── revalidatePath('/') + revalidatePath('/news/[slug]')
```

### Server vs Client Rendering

| Rendering Strategy | Pages | Rationale |
|--------------------|-------|-----------|
| **SSR (Server-Side Render)** | Homepage, About, Programs, News, Contact, Admin, etc. | Dynamic content, needs fresh data from Sanity/Supabase per request |
| **SSG (Static Site Generation)** | `/news/[slug]` | Individual news articles are pre-rendered at build time; webhook revalidates on publish |
| **Client Component** | Navbar, Chatbot, Carousel, Forms, LanguageToggle, ScrollReveal | Need browser APIs (scroll, fetch, IntersectionObserver, Form state) |

---

## 📄 Pages & Routes

| Route | Rendering | File | Description |
|-------|-----------|------|-------------|
| `/` | SSR | `app/page.tsx` | **Homepage** — Hero (bg image, title, CTA), About snapshot (carousel + float cards), Programs (grid), Latest News (Sanity), Research CTA, Partners (logo grid), Contact Strip (3 cards) |
| `/about` | SSR | `app/about/page.tsx` | **About** — Image carousel, mandate/vision/mission, leadership hierarchy, partner organizations |
| `/programs` | SSR | `app/programs/page.tsx` | **Programs** — 6 programs in responsive grid (1 featured + 5 regular), testing center locations by LGA |
| `/news` | SSR | `app/news/page.tsx` | **News** — Article listing from Sanity CMS, categories, search |
| `/news/[slug]` | SSG | `app/news/[slug]/page.tsx` | **Article** — Individual news article with full content, generated at build time |
| `/data-reports` | SSR | `app/data-reports/page.tsx` | **Data & Reports** — HIV prevalence statistics, annual report downloads |
| `/research` | SSR | `app/research/page.tsx` | **Research Portal** — Submission form (name, email, org, title, abstract, file) |
| `/get-involved` | SSR | `app/get-involved/page.tsx` | **Get Involved** — Sections for NGOs, donors, volunteers, faith orgs |
| `/contact` | SSR | `app/contact/page.tsx` | **Contact** — Form + complaint filing with type selection |
| `/admin` | SSR | `app/admin/page.tsx` | **Admin Dashboard** — Overview of submissions |
| `/admin/research` | SSR | `app/admin/research/page.tsx` | **Research Inbox** — Review/filter/manage proposals |
| `/admin/complaints` | SSR | `app/admin/complaints/page.tsx` | **Complaint Inbox** — Manage/reply to complaints |
| `/auth/login` | SSR | `app/auth/login/page.tsx` | **Login** — Admin authentication |
| `/studio/[[...tool]]` | SSR | `app/studio/[[...tool]]/page.tsx` | **Sanity Studio** — Embedded CMS |

---

## 🔌 API Endpoints

| Route | Method | Input | Output | Description |
|-------|--------|-------|--------|-------------|
| `/api/chat` | POST | `{ messages: [{role, content}] }` | `{ message: string }` | AI chatbot — retrieves relevant knowledge, sends to Claude, returns response |
| `/api/contact` | POST | `{ name, email, phone, type, subject, message }` | `{ success: true }` | Save contact/complaint to Supabase + send email notification |
| `/api/research` | POST | `{ name, email, organization, title, abstract, fileUrl }` | `{ success: true }` | Save research proposal to Supabase + send email |
| `/api/revalidate` | POST | `{ secret }` + Sanity payload | `{ revalidated: true }` | Webhook receiver — revalidates page cache on Sanity publish |
| `/api/upload` | POST | `FormData { file }` | `{ url: string }` | Upload file to Supabase Storage, return public URL |
| `/api/admin/complaints` | GET | — | `{ complaints: [...] }` | Fetch all complaints (admin only) |
| `/api/admin/complaints` | PATCH | `{ id, status, reply }` | `{ success: true }` | Update complaint status/reply |
| `/api/admin/research` | GET | — | `{ submissions: [...] }` | Fetch all research submissions (admin only) |
| `/api/admin/research` | PATCH | `{ id, status, notes }` | `{ success: true }` | Update research submission status |
| `/api/admin/contact` | GET | — | `{ submissions: [...] }` | Fetch all contact submissions (admin only) |
| `/api/auth/signout` | POST | — | `{ success: true }` | Clear Supabase auth session cookie |

---

## ⚛ Server Components vs Client Components

### Server Components (default in App Router)
| File | Why server |
|------|-----------|
| `app/page.tsx` | Fetches Sanity news data, no interactivity needed |
| All `app/*/page.tsx` | Static content rendering |
| `Footer.tsx` | No state, no browser APIs |
| `lib/*.ts` | Pure utilities, no React |

### Client Components (`'use client'` directive)
| File | Why client | Browser APIs Used |
|------|-----------|-------------------|
| `Navbar.tsx` | Scroll listener, menu toggle state | `window.scrollY`, `useState`, `useEffect` |
| `Chatbot.tsx` | Message state, fetch API, timers | `fetch`, `setTimeout`, `scrollIntoView` |
| `ImageCarousel.tsx` | Auto-slide timer, dot clicks | `setInterval`, `useState` |
| `LanguageToggle.tsx` | URL param reading, navigation | `useSearchParams`, `useRouter` |
| `ScrollReveal.tsx` | IntersectionObserver | `IntersectionObserver`, `getBoundingClientRect` |
| `ContactForm.tsx` | Form state, validation, submit | `fetch`, `useForm` |
| `ResearchForm.tsx` | Form state, validation, file upload | `fetch`, `useForm` |

---

## 🎨 Design System & Brand

### Color Palette

| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| green-deep | `#0d3320` | — | Hero/footer dark backgrounds, chatbot popup background |
| green-deeper | `#0a2417` | — | Chatbot header, input area |
| green-base | `#14532d` | `green-DEFAULT` | Primary buttons, user message bubbles, accent elements |
| green-mid | `#166534` | `green-mid` | Hover states for green elements |
| green-glow | `#16a34a` | — | Accent text/indicators (online status dot) |
| green-light | `#dcfce7` | `green-light` | Light green borders/pills |
| green-pale | `#f0fdf4` | `green-pale` | Card backgrounds, suggestion buttons |
| red-warm | `#dc2626` | `red-warm` | File Complaint CTA, notification badge |
| red-base | `#b91c1c` | — | Red hover |
| ink | `#0a1a0e` | `ink` | Dark text, AI message text |
| cream | `#fafaf7` | — | Alternate section backgrounds |

### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings | Cormorant Garamond (serif) | 600-700 | `text-3xl` to `text-5xl` |
| Body | Outfit (sans-serif) | 400-600 | `text-sm` to `text-base` |
| Nav links | Outfit | 500 | `text-sm` |
| Small text | Outfit | 400 | `text-xs` to `text-[13px]` |

### Logo Specifications
| Element | Desktop Size | Mobile Size (<640px) | Container |
|---------|-------------|---------------------|-----------|
| Kwara State logo | 52×52 | 40×40 | `.logo-wrap`, rounded-full, white bg |
| KWASACA logo | 90×76 | 52×52 | `.logo-wrap-kwasaca`, rounded-full, `object-fit: contain` |
| Footer logo | 140px wide | 140px | In Footer component |

### Key CSS Classes (from `app/globals.css`)
```
.nav-container        → max-width: 1280px, padding: 0 24px, flexbox
.nav-brand            → flex align-center, gap: 12px
.brand-logos          → flex align-center, gap: 8px
.logo-wrap            → 52×52, rounded-full, white bg, flex center
.logo-wrap-kwasaca    → 90×76, rounded-full, white bg, flex center
.logo-img             → width: auto, height: 100%, object-fit: contain
.brand-text-wrap      → flex column (hidden on mobile)
.desktop-nav          → flex row, gap list (hidden on mobile at 1024px)
.nav-ctas             → desktop CTA buttons (hidden on mobile)
.mobile-toggle        → display: none (shown on mobile at 1024px)
.mobile-menu          → display: none (shown on mobile at 1024px)
```

### Mobile Breakpoints
| Breakpoint | Changes |
|------------|---------|
| **≤1024px** | `.desktop-nav` hidden, `.nav-ctas` hidden, `.mobile-toggle` shown, `.mobile-menu` shown, nav height 68px |
| **≤640px** | `.brand-text-wrap` hidden, logo gap 4px, logo-divider hidden, Kwara logo 40×40, KWASACA logo 52×52, nav padding 0 8px, nav-brand gap 6px |

---

## 🧩 Component Library

### Navbar (`components/layout/Navbar.tsx`)
```
Props: { isAdmin?: boolean }
State: open (boolean), scrolled (boolean)
Hooks: useState, useEffect (scroll handler, route change handler)
Dependencies: lucide-react (Menu, X), next/link, next/navigation (usePathname)
Sub-components: none (self-contained)
Behavior:
  - Sticky top with backdrop-filter: blur(20px)
  - Adds .nav-scrolled class when scrollY > 8px
  - Closes mobile menu on route change
  - Shows Admin + Sign Out links when isAdmin = true
```

### Chatbot (`components/layout/Chatbot.tsx`)
```
Props: none (self-contained singleton)
State: open, messages[], input, loading, shown
Hooks: useState, useRef (bottomRef), useEffect (3s delay, scroll to bottom)
Dependencies: lucide-react (MessageCircle, X, Send, Bot)
Behavior:
  - FAB button appears after 3 seconds (setTimeout)
  - Opens 340px popup with dark green theme
  - 4 suggestion buttons for quick queries
  - POST /api/chat with conversation history
  - Displays typing dots while loading
  - Error fallback message on fetch failure
```

### ImageCarousel (`components/ui/ImageCarousel.tsx`)
```
Props: none (uses hardcoded images)
State: currentIndex (number)
Hooks: useState, useEffect (auto-advance every 5s)
Images: 4 public health themed (community, women, children, mother & child)
Features: gradient overlay, dot indicators, auto-play
```

### ScrollReveal (`components/ui/ScrollReveal.tsx`)
```
Props: none (DOM-based)
Hooks: useEffect (IntersectionObserver)
Behavior:
  - Queries all .reveal elements → adds .visible class when in viewport
  - Queries all .count elements → animates number count-up
  - Runs once on mount, single cleanup
```

### LanguageToggle (`components/ui/LanguageToggle.tsx`)
```
Props: { currentLang: string }
Hooks: useSearchParams, useRouter
Behavior:
  - Shows current language badge
  - Cycles EN → YO → HA on click
  - Updates URL query param ?lang=
  - Triggers full page navigation (server reads lang param)
```

---

## 🤖 AI Chatbot System

### Architecture
```
Chatbot.tsx (client)
  → POST /api/chat { messages }
    → lib/knowledge-base.ts :: getRelevantContext(query)
        → keyword matching on 14 KnowledgeSection objects
        → returns top 5 section contents as string
    → lib/anthropic.ts :: buildSystemPrompt(context)
        → combines base guidelines + reference knowledge
    → anthropic.messages.create({ model, system, messages })
    → return response to client
```

### Knowledge Base Structure (`lib/knowledge-base.ts`)
```typescript
interface KnowledgeSection {
  id: string           // unique identifier
  title: string        // display title
  keywords: string[]   // search keywords for matching
  content: string      // full knowledge text
}
```

### 14 Knowledge Sections
| ID | Title | Keywords |
|----|-------|----------|
| about-kwasaca | About KWASACA | KWASACA, agency, about, Kwara, HIV, AIDS, state, government |
| contact | Contact Information | contact, address, location, phone, email, office, Ilorin |
| hiv-testing | HIV Testing & Counseling | test, testing, counseling, HIV test, screening, status, free, confidential |
| art-treatment | ART (Antiretroviral Therapy) | ART, treatment, antiretroviral, therapy, medicine, ARV |
| pmtct | PMTCT | PMTCT, mother, child, pregnancy, baby, prevention, transmission |
| ovc-support | OVC Support | OVC, orphan, vulnerable, children, child, support, care |
| community-outreach | Community Outreach | outreach, community, prevention, awareness, education |
| hiv-basics | Basic HIV/AIDS Information | HIV, AIDS, virus, symptoms, transmission, cure, prevention |
| testing-locations | Testing Center Locations | location, centers, facilities, hospital, clinic, where, LGA |
| programs-overview | Programs Overview | programs, services, offer, what we do, initiatives |
| stigma | HIV Stigma & Discrimination | stigma, discrimination, mental health, disclosure, acceptance |
| prep | PrEP (Pre-Exposure Prophylaxis) | PrEP, pre-exposure, prophylaxis, prevention pill, daily pill |
| partners | Partner Organizations | NACA, UNAIDS, PEPFAR, Global Fund, World Bank, SFH, WHO, UNICEF |
| lgas | Local Government Areas | LGA, local government, 16, areas, districts, Kwara |

### Retrieval Algorithm
```typescript
function getRelevantContext(query: string, maxSections = 5): string
  1. Tokenize query into words (lowercase, split by whitespace)
  2. For each knowledge section:
     a. Score += 2 for each keyword match
     b. Score += 1 for each content text match
  3. Filter sections with score > 0
  4. Sort descending by score
  5. Take top maxSections (default 5)
  6. Join as markdown: "## Title\nContent"
  7. If no matches: return first 3 sections as fallback
```

### System Prompt Architecture (`lib/anthropic.ts`)
```typescript
BASE_PROMPT = `
You are the official AI Assistant for KWASACA...
GUIDELINES:
- Empathetic, non-judgmental about HIV/AIDS topics
- Encourage testing — "Know Your Status"
- Never stigmatize people living with HIV
- Refer serious medical questions to professionals
- Keep answers concise (2-3 paragraphs)
- Respond in English by default, Hausa/Yoruba if asked
- Confidentiality and privacy
`

function buildSystemPrompt(context: string): string
  = BASE_PROMPT + 
    "\n=== REFERENCE KNOWLEDGE ===" +
    context +
    "\n=== END REFERENCE KNOWLEDGE ==="
```

### API Route (`app/api/chat/route.ts`)
```
POST /api/chat
  Request:  { messages: [{ role: 'user'|'assistant', content: string }] }
  Process:
    1. Extract last user message from array
    2. Call getRelevantContext(lastUserMsg) → top 5 knowledge sections
    3. Call buildSystemPrompt(context) → full system prompt
    4. Call anthropic.messages.create(model='claude-sonnet-4-20250514', max_tokens=1024)
    5. Extract text from response.content[0]
  Response: { message: string }
  Error Handling:
    - 401 → "AI service configuration error"
    - 429 → "AI service temporarily busy"
    - Generic → "Failed to get response..." + try again suggestion
```

---

## 🌐 Language & Translation System

### Architecture
```
URL query param: ?lang=yo or ?lang=ha (default: en)
├── Server Component (page.tsx) reads searchParams.lang
├── Passes lang to LanguageToggle component (client)
├── Imports translation object from lib/translations.ts
└── Uses tr.section.key for all display strings
```

### Translation File Structure (`lib/translations.ts`)
```typescript
const translations = {
  en: {
    hero: { title: "...", subtitle: "...", ... },
    about: { heading: "...", ... },
    programs: { heading: "...", ... },
    news: { heading: "...", ... },
    research: { heading: "...", ... },
    partners: { heading: "...", ... },
    contact: { heading: "...", ... },
    footer: { ... },
  },
  yo: { /* Yoruba translations */ },
  ha: { /* Hausa translations */ },
}
```

### Usage Pattern in Pages
```typescript
export default async function HomePage({
  searchParams,
}: {
  searchParams: { lang?: string }
}) {
  const lang = (searchParams?.lang as keyof typeof translations) || 'en'
  const tr = translations[lang] || translations.en

  return <h1>{tr.hero.title}</h1>
}
```

---

## 🎬 Animation System

### Scroll Reveal (`ScrollReveal.tsx`)
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Count-Up Animation
```typescript
// Elements with class .count get their innerText animated
// from 0 to the element's text content (number) over 2 seconds
// trigger: when element enters viewport
```

### Keyframe Animations (`app/globals.css`)
```css
@keyframes fade-up    { /* 0% → 100% opacity + translateY */ }
@keyframes blink      { /* 0%, 50%, 100% opacity toggle */ }
@keyframes popUp      { /* scale 0.9 → 1.0, opacity 0 → 1 */ }
```

### Where Animations Are Applied
| Element | Animation | Trigger |
|---------|-----------|---------|
| Section headings, cards, icons | `.reveal` → fade-up + translateY | Scroll into viewport |
| Stats numbers | `.count` → count-up from 0 to value | Scroll into viewport |
| Chatbot popup | `popUp` (0.25s ease) | Click FAB button |
| Loading dots | `blink` (1.4s, staggered 0.2s) | While waiting for AI response |
| Navbar | `.nav-scrolled` class toggle | scrollY > 8px |
| FAB button | `hover:scale-105` | Hover |

---

## 📝 Content Management (Sanity CMS)

### Sanity Configuration (`sanity.config.ts`)
```
Project ID: from env NEXT_PUBLIC_SANITY_PROJECT_ID
Dataset: production
Studio path: /studio/[[...tool]] (embedded in Next.js)
```

### Sanity Schemas (`sanity/schemas/`)

**news.ts** — News Article
```typescript
fields: [
  { name: 'title', type: 'string', required },
  { name: 'slug', type: 'slug', source: 'title' },
  { name: 'content', type: 'array', of: [{ type: 'block' }] },
  { name: 'category', type: 'string' },
  { name: 'image', type: 'image' },
  { name: 'publishedAt', type: 'datetime' },
]
```

**program.ts** — Program
```typescript
fields: [
  { name: 'title', type: 'string', required },
  { name: 'description', type: 'text' },
  { name: 'icon', type: 'image' },
  { name: 'link', type: 'url' },
  { name: 'order', type: 'number' },
]
```

**event.ts** — Event
```typescript
fields: [
  { name: 'title', type: 'string', required },
  { name: 'date', type: 'datetime' },
  { name: 'location', type: 'string' },
  { name: 'description', type: 'text' },
  { name: 'registrationLink', type: 'url' },
]
```

**report.ts** — Report
```typescript
fields: [
  { name: 'title', type: 'string', required },
  { name: 'description', type: 'text' },
  { name: 'file', type: 'file' },
  { name: 'publishedAt', type: 'datetime' },
]
```

### Sanity Client (`lib/sanity.ts`)
```typescript
Exports:
- client: SanityClient (configured with project ID + dataset + read token)
- imageBuilder(source): returns ImageUrlBuilder
- sanityFetch<T>(query, params?): fetches and caches data

Key Queries:
- getAllNews: `*[_type == "news"] | order(publishedAt desc)`
- getNewsBySlug: `*[_type == "news" && slug.current == $slug][0]`
```

### Webhook Revalidation
```
Sanity Publish → POST /api/revalidate
  Headers: { content-type: application/json }
  Body: { secret: SANITY_WEBHOOK_SECRET, ...sanityPayload }
  Response: { revalidated: true }
  Effect: Clears Next.js cache for revalidatePath('/') and revalidatePath('/news/[slug]')
```

---

## 🗄 Database (Supabase)

### Tables (`supabase-setup.sql`)

**contact_submissions**
```sql
CREATE TABLE contact_submissions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT,
  type        TEXT NOT NULL CHECK (type IN ('enquiry', 'complaint')),
  subject     TEXT NOT NULL,
  message     TEXT NOT NULL,
  status      TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'closed')),
  reply       TEXT,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
```

**research_submissions**
```sql
CREATE TABLE research_submissions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  email         TEXT NOT NULL,
  organization  TEXT,
  title         TEXT NOT NULL,
  abstract      TEXT NOT NULL,
  file_url      TEXT,
  status        TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'approved', 'rejected')),
  notes         TEXT,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);
```

**admin_users**
```sql
CREATE TABLE admin_users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email       TEXT UNIQUE NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT now()
);
```

### Row Level Security (RLS)
All tables have RLS enabled with policies:
- Authenticated admins can read all rows
- Anyone can INSERT (for public forms)
- Only authenticated admins can UPDATE status/reply

### Supabase Client (`lib/supabase.ts`)
```typescript
// Server-side only (uses SERVICE_ROLE_KEY)
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
```

### Client-Side Helpers (`utils/supabase/`)
```typescript
client.ts      → createBrowserClient (anon key, for browser)
server.ts      → createServerClient (service role, for server components)
middleware.ts  → createMiddlewareClient (for Next.js middleware)
```

---

## 📧 Email System (Resend)

### Configuration (`lib/resend.ts`)
```typescript
import { Resend } from 'resend'
export const resend = new Resend(process.env.RESEND_API_KEY)
```

### Emails Sent
| Event | From | To | Template |
|-------|------|----|----------|
| Contact form submitted | `RESEND_FROM_EMAIL` | `NOTIFICATION_EMAIL` | New contact/complaint notification |
| Complaint replied | `RESEND_FROM_EMAIL` | Submitter's email | Reply from admin |
| Research submitted | `RESEND_FROM_EMAIL` | `NOTIFICATION_EMAIL` | New research submission notification |

---

## 🔐 Authentication & Admin

### Auth Flow
```
1. Admin visits /admin → middleware intercepts
2. middleware checks Supabase session cookie
3. No session → redirect to /auth/login
4. Admin logs in with email/password via Supabase Auth
5. Session stored in cookies (SSR-compatible)
6. Layout reads session → passes isAdmin bool to Navbar
```

### Middleware (`middleware.ts`)
```typescript
// Protects /admin, /admin/* routes
// Uses createMiddlewareClient from @supabase/ssr
// Redirects to /auth/login if no session
```

### Admin UI
- **Dashboard** (`/admin`): Summary cards with counts of submissions
- **Research Inbox** (`/admin/research`): List of proposals, filter by status, update status, add notes
- **Complaint Inbox** (`/admin/complaints`): List of complaints, reply functionality, status management

---

## 📱 Responsive Breakpoints

All breakpoints defined in `app/globals.css`:

### Desktop (≥1025px)
```
.nav-container: height 76px, padding 0 24px
.desktop-nav: visible (flex row)
.nav-ctas: visible
.mobile-toggle: hidden
.mobile-menu: hidden
.brand-logos: gap 8px
.logo-wrap: 52×52
.logo-wrap-kwasaca: 90×76
```

### Tablet / Small Desktop (≤1024px)
```
.nav-container: height 68px
.desktop-nav: hidden
.nav-ctas: hidden
.mobile-toggle: visible (flex)
.mobile-menu: visible (block, closed by default)
.topbar-links: hidden
```

### Mobile (≤640px)
```
.nav-container: padding 0 8px, height 62px
.topbar-inner: padding 0 8px
.brand-text-wrap: hidden (display: none)
.brand-logos: gap 4px
.logo-divider: hidden
.logo-wrap: 40×40
.logo-wrap-kwasaca: 52×52
.nav-brand: gap 6px
.topbar-left span: hidden
```

---

## 🔐 Environment Variables

All required environment variables, validated at runtime via `lib/env.ts` (Zod schema):

```env
# ── Supabase ──
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...

# ── Sanity ──
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=sk-...
SANITY_WEBHOOK_SECRET=your-secret

# ── Anthropic Claude ──
ANTHROPIC_API_KEY=sk-ant-api03-...

# ── Resend ──
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=kwasaca@yourdomain.com
NOTIFICATION_EMAIL=admin@yourdomain.com

# ── Site URL ──
NEXT_PUBLIC_SITE_URL=https://kwasaca.kw.gov.ng (or http://localhost:3000 for dev)
```

**Security note:** `.env.local` is in `.gitignore` and will never be committed. Set these as Environment Variables in Vercel for production.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Supabase account (free tier)
- Sanity account (free tier)
- Anthropic API key (console.anthropic.com)
- Resend API key (resend.com)

### 1. Clone
```bash
git clone https://github.com/teejay80s/kwasaca.git
cd kwasaca
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Copy `.env.local.example` to `.env.local` and fill in all keys (see Environment Variables section above).

### 4. Set Up Supabase Database
1. Go to [supabase.com](https://supabase.com) → your project → SQL Editor
2. Open `supabase-setup.sql`
3. Run the SQL to create tables and RLS policies

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 6. Access Sanity Studio
Go to [http://localhost:3000/studio](http://localhost:3000/studio) — log in with your Sanity account.

### 7. Access Admin Dashboard
Go to [http://localhost:3000/admin](http://localhost:3000/admin) — log in with Supabase Auth credentials.

---

## 🌐 Deployment (Vercel)

### Automatic Deploys from GitHub
The `vercel.json` configures automatic deployment from the `main` branch:
```json
{
  "version": 2,
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "git": {
    "deploymentEnabled": { "main": true, "master": false }
  }
}
```

### Manual Deploy Steps
1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/kwasaca.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com/new)
   - Select the `kwasaca` repository
   - Framework: Next.js (auto-detected)

3. **Add Environment Variables:**
   - Copy all variables from your `.env.local` into Vercel's Environment Variables
   - Set for Production, Preview, and Development environments

4. **Deploy:**
   - Click Deploy
   - Vercel builds (`npm run build`) and deploys
   - Every push to `main` triggers a new deployment

### Custom Domain
- Project → Settings → Domains → Add `kwasaca.kw.gov.ng`
- Update DNS records as instructed by Vercel

### Build Scripts
```bash
npm run dev      # Development server on localhost:3000
npm run build    # Production build (run before deploy)
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🔒 Security Checklist

- [x] `.env.local` excluded from git (in `.gitignore`)
- [x] Supabase Row Level Security enabled on all tables
- [x] Service role key only used server-side (never exposed to client)
- [x] Form validation with Zod schemas (client + server)
- [x] API routes validate request bodies
- [x] File upload restricted to research attachments only
- [ ] **Add Supabase Auth middleware** to protect `/admin` routes
- [ ] Add rate limiting to API routes (prevent abuse)
- [ ] Run `npm audit` before production deploy
- [ ] Set up Vercel environment variables (never hardcoded)
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Set `SANITY_WEBHOOK_SECRET` to a strong random string

---

## 📐 Common Patterns & Conventions

### Import Pattern
```typescript
// React/Next
import { useState } from 'react'
import Link from 'next/link'

// Third-party
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Internal — use @/ alias
import { supabaseAdmin } from '@/lib/supabase'
import { buildSystemPrompt } from '@/lib/anthropic'
```

### CSS Convention
- Use Tailwind utility classes for 95% of styling
- Custom CSS in `app/globals.css` for complex animations, keyframes, and responsive overrides
- Class naming: `.kebab-case` for custom classes
- Color tokens: use Tailwind theme values where possible (`bg-green-DEFAULT`, `text-ink`)

### Translation Pattern
```typescript
const lang = (searchParams?.lang as keyof typeof translations) || 'en'
const tr = translations[lang] || translations.en

// In JSX:
<h1>{tr.hero.title}</h1>
```

### Admin Check Pattern
```typescript
const { data: { user } } = await supabaseAdmin.auth.getUser()
const isAdmin = !!user

// Pass to Navbar:
<Navbar isAdmin={isAdmin} />
```

### Partner Logo Pattern
```tsx
<div className="... flex items-center justify-center">
  <img
    src={partner.logo}
    alt={partner.name}
    style={{ mixBlendMode: 'multiply', objectFit: 'contain', maxHeight: '100%' }}
  />
</div>
// mixBlendMode: 'multiply' removes white backgrounds from JPEG/PNG logos
```

### API Route Error Pattern
```typescript
try {
  // ... logic
} catch (error) {
  console.error('Route error:', error)
  return NextResponse.json(
    { error: 'Human-readable error message' },
    { status: 500 }
  )
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

**Guidelines:**
- TypeScript types required for all new code
- Tailwind classes follow existing patterns
- New components: add description to this README
- Test with `npm run build` before submitting

---

## 📄 License

This project is open source.  
All rights to the KWASACA brand, name, and official content belong to the **Kwara State AIDS Control Agency**.

---

## 📬 Contact

**KWASACA — Kwara State AIDS Control Agency**  
Ilorin, Kwara State, Nigeria  
Website: [kwasaca.kw.gov.ng](https://kwasaca.kw.gov.ng)

---

<p align="center">
  <strong>Know Your Status. Get Tested. Stay Safe.</strong><br>
  <sub>Built with ❤️ for the people of Kwara State</sub>
</p>
