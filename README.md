# KWASACA — Official Website

<p align="center">
  <img src="public/kwasaca-logo.png" alt="KWASACA Logo" width="120" />
</p>

<p align="center">
  <strong>Kwara State Agency for Control of AIDS (KWASACA)</strong><br>
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


---

## 🏥 About KWASACA

**KWASACA** (Kwara State Agency for Control of AIDS) is the apex state body responsible for coordinating, monitoring, and evaluating HIV/AIDS response activities across Kwara State, Nigeria.

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



