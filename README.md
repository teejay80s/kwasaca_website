# KWASACA — Official Website

<p align="center">
  <img src="public/kwasaca-logo.png" alt="KWASACA Logo" width="120" />
</p>

<p align="center">
  <strong>Kwara State Agency for Control of AIDS (KWASACA)</strong><br>
  Coordinating HIV/AIDS response across all 16 LGAs of Kwara State, Nigeria.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2-000000?style=flat-square&logo=next.js" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase" alt="Supabase" />
  <img src="https://img.shields.io/badge/Sanity_CMS-F03E2F?style=flat-square&logo=sanity" alt="Sanity CMS" />
  <img src="https://img.shields.io/badge/Claude_AI-9775FA?style=flat-square&logo=anthropic" alt="Claude AI" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel" alt="Vercel" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT License" />
</p>

---

## 📋 Table of Contents

- [About KWASACA](#-about-kwasaca)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Pages & Routes](#-pages--routes)
- [API Endpoints](#-api-endpoints)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Content Management (Sanity)](#-content-management-sanity)
- [AI Chatbot](#-ai-chatbot)
- [Deployment (Vercel)](#-deployment-vercel)
- [Security Checklist](#-security-checklist)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🏥 About KWASACA

**KWASACA** (Kwara State Agency for Control of AIDS) is the apex state body responsible for coordinating, monitoring, and evaluating HIV/AIDS response activities across Kwara State, Nigeria.

- **Coverage:** All 16 Local Government Areas of Kwara State
- **Supervision:** Office of the Deputy Governor of Kwara State
- **HIV Prevalence:** 1.0% in Kwara State (below national average of 1.5%)
- **Partners:** NACA, UNAIDS, PEPFAR, Global Fund, World Bank, SFH Nigeria, WHO, UNICEF

This digital platform serves as the official web presence for KWASACA — providing public health information, service directories, news updates, and interactive tools to the citizens of Kwara State.

---

## ✨ Features

### For Citizens & Visitors
| Feature | Description |
|---------|-------------|
| **🏠 Homepage** | Hero section, quick-access cards, live stats counter, animated scroll reveals |
| **🔬 About Page** | Image carousel, mandate overview, leadership hierarchy, partner organizations |
| **📋 Programs & Services** | All 6 programs (HIV Prevention, ART, PMTCT, Testing, OVC Support, Community Outreach) |
| **📰 News & Updates** | Sanity CMS-driven news articles with categories and search |
| **📊 Data & Reports** | HIV prevalence statistics, annual reports, downloadable PDFs |
| **🔬 Research Portal** | Submit research proposals with file uploads |
| **🤝 Get Involved** | Information for NGOs, donors, volunteers, and faith-based organizations |
| **📞 Contact & Complaints** | Contact form, complaint filing system with email notifications |

### For Administrators
| Feature | Description |
|---------|-------------|
| **📊 Admin Dashboard** | Centralized interface for managing submissions and data |
| **📥 Research Inbox** | Review and manage research proposal submissions |
| **📩 Complaint Management** | Inbox for public complaints with reply functionality |
| **🎨 Sanity CMS Studio** | Embedded content management for news, events, reports, programs |

### Technical Features
| Feature | Description |
|---------|-------------|
| **🤖 AI Chatbot** | Claude AI-powered assistant with knowledge retrieval — answers questions about HIV/AIDS, testing centers, programs, and KWASACA services |
| **🌐 Language Support** | Multi-language via query params: English (`?lang=en`), Yoruba (`?lang=yo`), Hausa (`?lang=ha`) |
| **📱 Fully Responsive** | Mobile-first design with adaptive layouts, sticky navbar with animated scroll, dark green theme |
| **⚡ SSR + SSG** | Server-side rendering and static generation for optimal performance |
| **🔒 Supabase Auth** | Secure admin authentication with row-level security |
| **📧 Email Notifications** | Resend-powered email for complaint replies and submission confirmations |
| **🔄 Sanity Webhook** | Automatic cache revalidation on content publish |

---

## 🛠 Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | [Next.js 14.2](https://nextjs.org/) (App Router) | Full-stack React framework with SSR, SSG, API routes |
| **Language** | [TypeScript 5.4](https://www.typescriptlang.org/) | Type safety across the entire codebase |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first CSS with responsive design |
| **Database** | [Supabase](https://supabase.com/) (PostgreSQL) | Research submissions, complaints, admin auth |
| **CMS** | [Sanity.io](https://www.sanity.io/) | Content management for news, events, programs, reports |
| **AI Chat** | [Anthropic Claude](https://www.anthropic.com/) (Sonnet 4) | Intelligent chatbot with knowledge retrieval |
| **Email** | [Resend](https://resend.com/) | Transactional email (complaint replies, confirmations) |
| **Forms** | React Hook Form + Zod | Type-safe form validation |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent icon system |
| **Fonts** | Cormorant Garamond + Outfit | Serif headings + clean sans body |
| **Deployment** | [Vercel](https://vercel.com/) | Edge network, automatic deploys from GitHub |

---

## 🏗 Architecture

```
┌────────────────────────────────────────────────────────┐
│                    Browser (Client)                     │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Next.js App Router                              │  │
│  │  ├── Pages (SSR/SSG)                             │  │
│  │  ├── API Routes (serverless functions)           │  │
│  │  └── Client Components (chatbot, carousel, etc.) │  │
│  └──────────────────────────────────────────────────┘  │
└───────────────────────┬────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
   ┌──────────┐   ┌──────────┐   ┌──────────┐
   │ Supabase │   │  Sanity  │   │ Anthropic│
   │(Postgres)│   │   CMS    │   │  Claude  │
   │ + Auth   │   │ Content  │   │   AI     │
   └──────────┘   └──────────┘   └──────────┘
        │
        ▼
   ┌──────────┐
   │  Resend  │
   │ (Email)  │
   └──────────┘
```

### Data Flow
1. **Public pages** → Server-rendered with data from Sanity CMS + Supabase
2. **Contact/Complaint forms** → POST to Supabase database → Email notification via Resend
3. **Research submissions** → POST to Supabase database + file upload
4. **AI Chatbot** → User message → `/api/chat` → Knowledge retrieval (keyword matching) → Claude API → Response
5. **Sanity publishes** → Webhook hits `/api/revalidate` → Cache cleared

---

## 📄 Pages & Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | SSR | Homepage with hero, about, programs, news, partners, contact strip |
| `/about` | SSR | About KWASACA, mandate, leadership, partners |
| `/programs` | SSR | All HIV programs + testing centers by LGA |
| `/news` | SSR | News listing from Sanity CMS |
| `/news/[slug]` | SSG | Individual news article |
| `/data-reports` | SSR | Statistics, reports, downloadable PDFs |
| `/research` | SSR | Research submission form |
| `/get-involved` | SSR | Information for NGOs, donors, volunteers |
| `/contact` | SSR | Contact form + complaint filing |
| `/admin` | SSR | Admin dashboard (requires auth) |
| `/admin/research` | SSR | Review research submissions |
| `/admin/complaints` | SSR | Manage public complaints |
| `/auth/login` | SSR | Admin login page |
| `/studio/[[...tool]]` | SSR | Embedded Sanity CMS Studio |

---

## 🔌 API Endpoints

| Route | Method | Description |
|-------|--------|-------------|
| `/api/chat` | POST | AI chatbot — sends user message + retrieves relevant knowledge → Claude generates response |
| `/api/contact` | POST | Contact/complaint submission → saves to Supabase + sends email |
| `/api/research` | POST | Research proposal → saves to Supabase + sends email |
| `/api/revalidate` | POST | Sanity webhook — revalidates cached pages |
| `/api/admin/complaints` | GET/PATCH | Admin: list and update complaints |
| `/api/admin/research` | GET/PATCH | Admin: list and update research submissions |
| `/api/upload` | POST | File upload for research attachments |
| `/api/auth/signout` | POST | Supabase auth signout |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (free tier)
- Sanity account (free tier)
- Anthropic API key
- Resend API key

### 1. Clone & Install
```bash
git clone https://github.com/teejay80s/kwasaca.git
cd kwasaca
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.local.example .env.local
# Fill in your keys (see Environment Variables section)
```

### 3. Set Up Supabase Database
1. Go to your Supabase project → SQL Editor
2. Open and run `supabase-setup.sql`
3. This creates all required tables (research, contact, complaints)

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 5. Access Sanity Studio
Go to [http://localhost:3000/studio](http://localhost:3000/studio)  
Log in with your Sanity account.

---

## 🔐 Environment Variables

Create `.env.local` with these variables:

```env
# Supabase — get from supabase.com → Project Settings → API
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Sanity — get from sanity.io/manage → API → Tokens
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
SANITY_WEBHOOK_SECRET=your_webhook_secret

# Anthropic — get from console.anthropic.com
ANTHROPIC_API_KEY=sk-ant-...

# Resend — get from resend.com
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=kwasaca@yourdomain.com
NOTIFICATION_EMAIL=admin@yourdomain.com

# URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🗄 Database Setup

The project uses Supabase (PostgreSQL) with the following tables:

| Table | Purpose |
|-------|---------|
| `contact_submissions` | Contact form and complaint data |
| `research_submissions` | Research proposal submissions |
| `admin_users` | Authorized admin accounts |

Run `supabase-setup.sql` in your Supabase SQL Editor to create all tables with proper Row Level Security policies.

---

## 📝 Content Management (Sanity)

Manage all dynamic content via Sanity Studio at `/studio`:

- **News** — Press releases, coverage, announcements
- **Programs** — Program descriptions and updates
- **Reports** — Upload annual reports and fact sheets
- **Events** — Upcoming events with registration

Sanity schemas are in `sanity/schemas/`:
- `news.ts` — News articles with title, slug, content, category, image
- `program.ts` — Program details with description, icon, link
- `event.ts` — Events with date, location, registration link
- `report.ts` — Reports with file upload, description

### Webhook Revalidation
When content is published in Sanity, a webhook hits `/api/revalidate` which automatically refreshes the website cache. Configure in Sanity → API → Webhooks:
- **URL:** `https://yourdomain.com/api/revalidate`
- **Secret:** Must match `SANITY_WEBHOOK_SECRET`

---

## 🤖 AI Chatbot

The AI chatbot uses **Anthropic Claude (Sonnet 4)** with a custom knowledge retrieval system.

### How It Works
1. User types a question in the chat popup
2. The app sends the message to `/api/chat`
3. The API retrieves relevant knowledge sections via keyword matching from a structured knowledge base
4. Relevant knowledge is injected into the system prompt as reference material
5. Claude generates a response grounded in the retrieved knowledge

### Knowledge Base
The knowledge base (`lib/knowledge-base.ts`) contains 14 structured sections covering:
- About KWASACA, Contact Info, HIV Testing, ART Treatment, PMTCT, OVC Support, Community Outreach, HIV Basics, Testing Locations, Programs Overview, Stigma & Discrimination, PrEP, Partner Organizations, LGAs

### Chatbot UI
- Dark green theme matching the KWASACA brand
- Floating action button appears after 3 seconds
- Quick suggestion buttons for common queries
- Typing indicator animation while waiting for response
- Error handling with descriptive messages

---

## 🌐 Deployment (Vercel)

This project is optimized for **Vercel** deployment with automatic deploys from GitHub.

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fteejay80s%2Fkwasaca)

### Manual Deploy

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: KWASACA official website"
   git branch -M main
   git remote add origin https://github.com/teejay80s/kwasaca.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com) → Add New Project
   - Select the `kwasaca` repository
   - Framework preset: Next.js (auto-detected)

3. **Add Environment Variables:**
   - Copy all variables from your `.env.local` into Vercel's environment variable settings
   - Set them for Production, Preview, and Development

4. **Deploy:**
   - Click Deploy
   - Vercel builds and deploys automatically
   - Every push to `main` triggers a new deployment

### Custom Domain
Set up your custom domain in Vercel:
- Project → Settings → Domains → Add `kwasaca.kw.gov.ng`
- Update DNS records as instructed by Vercel

---

## 🔒 Security Checklist

- [x] `.env.local` excluded from git (already in `.gitignore`)
- [x] Supabase Row Level Security enabled
- [x] Service role key only used server-side
- [x] Form validation with Zod schemas
- [ ] **Add Supabase Auth middleware** to protect `/admin` routes
- [ ] Add rate limiting to API routes
- [ ] Run `npm audit` before production deploy
- [ ] Set up Vercel environment variables (never in code)
- [ ] Enable HTTPS (automatic with Vercel)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please ensure:
- TypeScript types are used throughout
- Tailwind classes follow existing patterns
- Test with `npm run build` before submitting

---

## 📄 License

This project is open source. All rights to the KWASACA brand and content belong to the Kwara State Agency for Control of AIDS.

---

## 📬 Contact

**KWASACA — Kwara State Agency for Control of AIDS**  
Ilorin, Kwara State, Nigeria  
Website: [kwasaca.kw.gov.ng](https://kwasaca.kw.gov.ng)

---

<p align="center">
  <strong>Know Your Status. Get Tested. Stay Safe.</strong><br>
  <sub>Built with ❤️ for the people of Kwara State</sub>
</p>
#   k w a s a c a _ w e b s i t e  
 #   k w a s a c a _ w e b s i t e  
 #   k w a s a c a _ w e b s i t e  
 