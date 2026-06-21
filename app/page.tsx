import Link from "next/link";
import { getLatestNews } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageCarousel from "@/components/ui/ImageCarousel";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { getTranslations } from "@/lib/translations";
import type { Lang } from "@/lib/translations";
import {
  ArrowRight,
  MapPin,
  Phone,
  Shield,
  Pill,
  Baby,
  TestTube,
  Users,
  Globe,
} from "lucide-react";

const programs = [
  {
    num: "01",
    icon: Shield,
    title: "HIV Prevention & Awareness",
    desc: "Community sensitization, condom distribution, and mass awareness campaigns reaching every LGA in Kwara State. Targeted interventions for youth, women, and key populations.",
  },
  {
    num: "02",
    icon: Pill,
    title: "Treatment & ART",
    desc: "Antiretroviral therapy access, viral load monitoring, adherence support, and clinical care across government health facilities.",
  },
  {
    num: "03",
    icon: Baby,
    title: "PMTCT Program",
    desc: "Prevention of Mother-to-Child Transmission protecting newborns through antenatal care, HIV testing, and postnatal follow-up.",
  },
  {
    num: "04",
    icon: TestTube,
    title: "Testing & Counseling",
    desc: "Free, confidential HIV testing at over 30 certified facilities with trained counselors across all 16 LGAs.",
  },
  {
    num: "05",
    icon: Users,
    title: "OVC Support",
    desc: "Comprehensive care for Orphans and Vulnerable Children affected by HIV/AIDS: education support, nutrition, psychosocial care.",
  },
  {
    num: "06",
    icon: Globe,
    title: "Community Outreach",
    desc: "Grassroots engagement through LACA committees, faith-based organizations, and trained community health volunteers.",
  },
];

const partners = [
  { name: "NACA", logo: "/naca logo.jpeg" },
  { name: "UNAIDS", logo: "/UNAIDS_logo.png" },
  { name: "PEPFAR", logo: "/pepfar logo.jpg" },
  { name: "Global Fund", logo: "/gf logo.png" },
  { name: "World Bank", logo: "/wb logo.jpeg" },
  { name: "SFH Nigeria", logo: "/sfh logo.png" },
  { name: "WHO Nigeria", logo: "/who logo.jpeg" },
  { name: "UNICEF", logo: "/unicef logo.png" },
];

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { lang?: string }
}) {
  const lang = (searchParams?.lang === 'yo' || searchParams?.lang === 'ha') ? searchParams.lang satisfies Lang : 'en' as Lang
  const tr = getTranslations(lang)

  let news: any[] = [];
  try {
    news = await getLatestNews(3);
  } catch {
    news = [];
  }

  return (
    <>
      <ScrollReveal />
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#0d3320" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(13,51,32,0.92),rgba(13,51,32,0.6) 40%,rgba(13,51,32,0.88)),url('https://images.unsplash.com/photo-1584515933487-779824d29309?w=1920&q=85') center/cover" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,transparent 50%,rgba(13,51,32,0.6))" }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute right-[-80px] top-[-120px] w-[45%] h-[130%] pointer-events-none" style={{ background: "rgba(255,255,255,0.03)", transform: "skewX(-10deg)", borderLeft: "1px solid rgba(255,255,255,0.05)" }} />
        <div className="absolute left-0 top-0 w-[6px] h-full z-[5]" style={{ background: "#dc2626" }} />

        <div className="absolute top-4 right-4 z-20">
          <LanguageToggle current={lang} />
        </div>

        <div className="absolute right-[60px] top-1/2 -translate-y-1/2 rotate-90 z-[5] pointer-events-none">
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <path d="M18 2C10 2 4 8 4 16c0 8 14 18 14 18s14-10 14-18C32 8 26 2 18 2z" fill="rgba(220,38,38,0.3)" stroke="#dc2626" strokeWidth="1.5" />
            <path d="M18 6C12 6 8 10 8 16c0 6 10 14 10 14s10-8 10-14c0-6-4-10-10-10z" fill="none" stroke="#dc2626" strokeWidth="1.2" opacity="0.5" />
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
          <div className="absolute right-[4%] bottom-[12%] w-[170px] h-[250px]" style={{ animation: "bigRibbonPulse 5s ease-in-out infinite" }}>
            <svg viewBox="0 0 100 140" fill="none" className="w-full h-full drop-shadow-[0_0_80px_rgba(220,38,38,0.12)]">
              <path d="M50 8C25 8 6 27 6 52c0 36 44 80 44 80s44-44 44-80C94 27 75 8 50 8z" fill="rgba(220,38,38,0.12)" stroke="rgba(220,38,38,0.25)" strokeWidth="2" />
              <path d="M50 16C30 16 15 31 15 51c0 28 35 59 35 59s35-31 35-59C85 31 70 16 50 16z" fill="rgba(220,38,38,0.06)" stroke="rgba(220,38,38,0.15)" strokeWidth="1.2" />
              <path d="M50 24C36 24 24 36 24 50c0 20 26 40 26 40s26-20 26-40C76 36 64 24 50 24z" fill="none" stroke="rgba(220,38,38,0.12)" strokeWidth="1" />
            </svg>
          </div>
          {[
            { w: 100, r: "14%", b: "30%", d: "0s" },
            { w: 220, r: "8%", b: "22%", d: "1.2s" },
            { w: 380, r: "2%", b: "12%", d: "2.4s" },
            { w: 50, r: "20%", b: "36%", d: "0.6s" },
          ].map((c, i) => (
            <div key={i} className="absolute rounded-full border border-solid" style={{ width: c.w, height: c.w, right: c.r, bottom: c.b, borderColor: "rgba(220,38,38,0.05)", animation: `pulseR 5s cubic-bezier(0,0.5,0.5,1) infinite`, animationDelay: c.d }} />
          ))}
          {[
            { l: "5%", b: "-50px", w: 26, d: "0s", dur: "22s" },
            { l: "22%", b: "-40px", w: 16, d: "3s", dur: "26s" },
            { l: "45%", b: "-60px", w: 12, d: "6s", dur: "24s" },
            { l: "62%", b: "-30px", w: 20, d: "2s", dur: "28s" },
            { l: "80%", b: "-55px", w: 14, d: "5s", dur: "22s" },
            { l: "92%", b: "-35px", w: 18, d: "8s", dur: "26s" },
          ].map((r, i) => (
            <svg key={i} className="absolute opacity-0" style={{ left: r.l, bottom: r.b, width: r.w, animation: `fRibbon ${r.dur} ease-in-out infinite`, animationDelay: r.d }} viewBox="0 0 24 36" fill="none">
              <path d="M12 2C6 2 2 7 2 14c0 8 10 20 10 20S22 22 22 14c0-7-4-12-10-12z" fill="rgba(220,38,38,0.18)" stroke="#dc2626" strokeWidth="0.7" />
            </svg>
          ))}
        </div>

        <div className="flex-1 flex items-center w-full max-w-7xl mx-auto px-12 max-lg:px-8 max-sm:px-5 pt-[120px] pb-[60px] relative z-10">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-20 max-md:gap-10 w-full items-center">
            <div>
              <h1 className="font-serif text-[clamp(48px,6vw,88px)] font-bold text-white leading-[1.05] tracking-[-0.02em] mb-3">
                <span className="block overflow-hidden"><span className="hero-title-line-1">{tr.hero.title1 as string}</span></span>
                <span className="block overflow-hidden"><span className="hero-title-line-2">{tr.hero.title2 as string}</span></span>
                <span className="block overflow-hidden"><span className="hero-title-line-3">{tr.hero.title3 as string}</span></span>
              </h1>
              <p className="text-base text-white/60 leading-[1.8] max-w-[460px] my-5 mb-10 font-light fade-in-5">
                {tr.hero.desc as string}
              </p>
              <div className="flex flex-wrap gap-3.5 items-center fade-in-65">
                <Link href="/programs#testing" className="inline-flex items-center gap-2.5 bg-[#dc2626] text-white font-semibold text-sm px-[30px] py-4 rounded-xl tracking-[0.02em] transition-all duration-[0.25s] hover:bg-[#b91c1c] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(220,38,38,0.3)]">
                  <MapPin size={16} />
                  {tr.hero.btnTesting as string}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 text-white/80 font-medium text-sm px-[26px] py-[15px] rounded-xl border border-white/20 transition-all duration-[0.25s] hover:text-white hover:border-white/40 hover:bg-white/[0.06] hover:-translate-y-px">
                  <Phone size={15} />
                  {tr.hero.btnHelp as string}
                </Link>
              </div>
            </div>
            <div className="max-md:hidden fade-in-6">
              <div className="flex flex-col gap-3">
                <Link href="/programs#testing" className="flex items-center gap-4 p-[18px_22px] rounded-xl border border-white/[0.08] bg-white/[0.06] backdrop-blur-[16px] transition-all duration-300 hover:bg-white/[0.1] hover:translate-x-[6px] hover:border-white/[0.15] fade-in-7">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(74,222,128,0.15)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: "#4ade80" }}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                  </div>
                  <div><h4 className="text-sm font-semibold text-white mb-0.5">{tr.hero.quick1Title as string}</h4><p className="text-xs text-white/45">{tr.hero.quick1Desc as string}</p></div>
                </Link>
                <Link href="/programs#art" className="flex items-center gap-4 p-[18px_22px] rounded-xl border border-white/[0.08] bg-white/[0.06] backdrop-blur-[16px] transition-all duration-300 hover:bg-white/[0.1] hover:translate-x-[6px] hover:border-white/[0.15] fade-in-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(220,38,38,0.15)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: "#f87171" }}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M4 10h16" /></svg>
                  </div>
                  <div><h4 className="text-sm font-semibold text-white mb-0.5">{tr.hero.quick2Title as string}</h4><p className="text-xs text-white/45">{tr.hero.quick2Desc as string}</p></div>
                </Link>
                <Link href="/get-involved" className="flex items-center gap-4 p-[18px_22px] rounded-xl border border-white/[0.08] bg-white/[0.06] backdrop-blur-[16px] transition-all duration-300 hover:bg-white/[0.1] hover:translate-x-[6px] hover:border-white/[0.15] fade-in-9">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(212,165,58,0.15)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: "#b8860b" }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <div><h4 className="text-sm font-semibold text-white mb-0.5">{tr.hero.quick3Title as string}</h4><p className="text-xs text-white/45">{tr.hero.quick3Desc as string}</p></div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 fade-in-1s">
          <div className="w-6 h-[38px] border border-white/15 rounded-xl flex justify-center pt-1.5">
            <div className="w-0.5 h-2 bg-white/30 rounded" style={{ animation: "scrollWheel 1.8s infinite" }} />
          </div>
          <span className="text-[10px] text-white/30 uppercase tracking-[0.12em]">{tr.hero.scroll as string}</span>
        </div>

        <div className="relative z-10 bg-black/25 backdrop-blur-[12px] border-t border-white/[0.05]">
          <div className="grid grid-cols-4 max-sm:grid-cols-2 max-w-7xl mx-auto">
            <div className="py-7 px-9 max-sm:px-5 text-center relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-px after:bg-white/[0.06] max-sm:after:hidden">
              <div className="font-serif text-[42px] max-sm:text-[32px] font-bold text-white leading-none mb-1.5"><span className="count" data-target="1.0">0</span><span className="text-[#b8860b] text-[26px]">%</span></div>
              <div className="text-[11.5px] text-white/45 tracking-[0.03em]">{tr.hero.stat1Label as string}</div>
              <span className="inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[rgba(74,222,128,0.12)] text-[#4ade80]">{tr.hero.stat1Badge as string}</span>
            </div>
            <div className="py-7 px-9 max-sm:px-5 text-center relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-px after:bg-white/[0.06] max-sm:after:hidden">
              <div className="font-serif text-[42px] max-sm:text-[32px] font-bold text-white leading-none mb-1.5"><span className="count" data-target="16">0</span></div>
              <div className="text-[11.5px] text-white/45 tracking-[0.03em]">{tr.hero.stat2Label as string}</div>
            </div>
            <div className="py-7 px-9 max-sm:px-5 text-center relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-px after:bg-white/[0.06] max-sm:after:hidden">
              <div className="font-serif text-[42px] max-sm:text-[32px] font-bold text-white leading-none mb-1.5"><span className="count" data-target="48">0</span><span className="text-[#b8860b] text-[26px]">K+</span></div>
              <div className="text-[11.5px] text-white/45 tracking-[0.03em]">{tr.hero.stat3Label as string}</div>
            </div>
            <div className="py-7 px-9 max-sm:px-5 text-center">
              <div className="font-serif text-[42px] max-sm:text-[32px] font-bold text-white leading-none mb-1.5"><span className="count" data-target="12">0</span></div>
              <div className="text-[11.5px] text-white/45 tracking-[0.03em]">{tr.hero.stat4Label as string}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="py-32 px-12 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-[20px] overflow-hidden border border-gray-200 relative">
              <ImageCarousel />
            </div>
            {/* Float cards */}
            <div className="absolute -top-4 -left-8 bg-green-deep text-white rounded-xl px-5 py-4 shadow-xl">
              <div className="font-serif text-[32px] font-bold text-green-400 leading-none mb-1">
                2003
              </div>
              <div className="text-[11px] text-white/55">{tr.about.yearLabel as string}</div>
            </div>
            <div className="absolute -bottom-6 -right-7 bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-xl min-w-[180px]">
              <div className="font-serif text-[40px] font-bold text-green-DEFAULT leading-none mb-1">
                1%
              </div>
              <div className="text-xs text-gray-400 mb-2">
                {tr.about.prevalenceLabel as string}
              </div>
              <span className="inline-flex items-center gap-1 bg-green-light text-green-mid text-[10px] font-semibold px-2 py-0.5 rounded">
                {tr.about.prevalenceBadge as string}
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-eyebrow mb-5">
              <span className="section-pill">{tr.about.pill as string}</span>
            </div>
            <h2 className="section-heading mb-5">
              {tr.about.heading1 as string}
              <br />
              {tr.about.heading2 as string}
              <em className="text-green-DEFAULT italic">{tr.about.headingEm as string}</em>
            </h2>
            <p className="text-[15.5px] text-gray-500 leading-[1.8] mb-9 font-light">
              {tr.about.desc as string}
            </p>
            <div className="space-y-3 mb-10">
              {[
                { title: tr.about.feature1Title as string, sub: tr.about.feature1Sub as string },
                { title: tr.about.feature2Title as string, sub: tr.about.feature2Sub as string },
                { title: tr.about.feature3Title as string, sub: tr.about.feature3Sub as string },
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-green-pale hover:border-green-light transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-green-DEFAULT mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-ink mb-0.5">{f.title}</p>
                    <p className="text-xs text-gray-400">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="link-arrow">
              {tr.about.link as string} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute top-0 left-0 right-0 h-1 opacity-10" style={{ background: "linear-gradient(90deg,transparent,#dc2626,#14532d,#dc2626,transparent)" }} />
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(220,38,38,0.04),transparent 70%)" }} />
        <div className="absolute bottom-[-120px] left-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none opacity-[0.03]" style={{ background: "radial-gradient(circle,#14532d,transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-12 max-lg:px-8 max-sm:px-5 py-[120px] max-lg:py-20 max-sm:py-[60px]">
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[11px] px-3.5 py-1.5 rounded-full uppercase tracking-[0.08em] text-green-base bg-green-light mb-5 reveal">
              <span className="w-[5px] h-[5px] rounded-full bg-green-base" />
              {tr.programs.pill as string}
            </span>
            <h2 className="font-serif text-[clamp(32px,4.5vw,48px)] font-semibold text-ink leading-[1.1] tracking-[-0.02em] mb-5 reveal delay-1">
              {tr.programs.heading as string}<em className="not-italic text-green-base">{tr.programs.headingEm as string}</em>
            </h2>
            <p className="text-[15px] text-gray-400 leading-[1.7] max-w-[580px] font-light reveal delay-2">
              {tr.programs.desc as string}
            </p>
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:w-full gap-6 max-lg:gap-[18px]">
            <div className="col-span-2 max-md:col-span-1 grid grid-cols-2 max-lg:grid-cols-1 gap-8 bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-[0.4s] hover:shadow-[0_24px_64px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[rgba(220,38,38,0.08)] reveal">
              <div className="relative overflow-hidden min-h-[280px] max-lg:min-h-[200px] max-sm:min-h-[180px]">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=85" alt="" loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right,rgba(13,51,32,0.25),transparent 60%)" }} />
              </div>
              <div className="py-10 pr-10 max-lg:p-7 max-sm:p-5 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-red-warm bg-[rgba(220,38,38,0.06)] px-3 py-1 rounded-[6px] w-fit mb-3">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  {tr.programs.flagship as string}
                </span>
                <h3 className="font-serif text-[clamp(22px,2.5vw,28px)] font-semibold text-ink mb-2.5 tracking-[-0.01em] leading-[1.2]">{programs[0].title}</h3>
                <p className="text-sm text-gray-400 leading-[1.7] font-light mb-5">{programs[0].desc}</p>
                <div className="flex gap-6 max-sm:flex-col max-sm:gap-3">
                  <div><span className="font-serif text-[26px] font-bold text-ink leading-none">500<span className="text-green-base">K+</span></span><span className="block text-[10.5px] text-gray-400 uppercase tracking-[0.04em] mt-1">{tr.programs.reached as string}</span></div>
                  <div><span className="font-serif text-[26px] font-bold text-ink leading-none">16</span><span className="block text-[10.5px] text-gray-400 uppercase tracking-[0.04em] mt-1">{tr.programs.lgas as string}</span></div>
                  <div><span className="font-serif text-[26px] font-bold text-ink leading-none">200<span className="text-green-base">+</span></span><span className="block text-[10.5px] text-gray-400 uppercase tracking-[0.04em] mt-1">{tr.programs.sensitizers as string}</span></div>
                </div>
              </div>
            </div>

            {programs.slice(1).map(({ num, icon: Icon, title, desc }, idx) => (
              <div key={num} className={`bg-white border border-gray-200 rounded-xl p-8 pr-7 pb-7 max-sm:p-5 max-sm:pr-4 max-sm:pb-4 transition-all duration-[0.4s] relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.05)] hover:border-[rgba(220,38,38,0.08)] reveal max-md:w-full ${idx === 0 ? "" : idx === 1 ? "delay-1" : idx === 2 ? "" : idx === 3 ? "delay-1" : idx === 4 ? "" : ""}`}>
                <div className="absolute top-0 left-0 right-0 h-[3px] origin-left transition-transform duration-[0.5s]" style={{ background: "linear-gradient(90deg,#dc2626,rgba(220,38,38,0.15),transparent)", transform: "scaleX(0)" }} />
                <div className="w-12 h-12 rounded-xl bg-green-pale border border-green-light flex items-center justify-center mb-[18px]">
                  <Icon size={20} className="text-green-base" />
                </div>
                <span className="absolute top-[18px] right-[22px] font-serif text-[40px] font-bold leading-none text-gray-100">{num}</span>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2 tracking-[-0.01em] leading-[1.25]">{title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.7] font-light mb-[18px]">{desc}</p>
                <div className="flex items-center gap-2.5 pt-4 border-t border-gray-100">
                  <div className="w-[30px] h-[30px] rounded-lg bg-green-pale flex items-center justify-center shrink-0">
                    <ArrowRight size={12} className="text-green-base" />
                  </div>
                  <span className="text-[13px] font-semibold text-green-base">{tr.programs.learnMore as string}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center reveal delay-2">
            <Link href="/programs" className="inline-flex items-center gap-2.5 text-sm font-semibold text-green-base px-8 py-3.5 border border-gray-200 rounded-xl transition-all duration-300 hover:border-green-base hover:bg-green-pale hover:gap-3.5">
              {tr.programs.viewAll as string}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="py-32 px-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-14 gap-8">
            <div>
              <span className="section-pill mb-4 inline-flex">
                {tr.news.pill as string}
              </span>
              <h2 className="section-heading">
                {tr.news.heading as string}
                <em className="italic text-green-DEFAULT">{tr.news.headingEm as string}</em>
              </h2>
            </div>
            <Link href="/news" className="link-arrow flex-shrink-0">
              {tr.news.all as string} <ArrowRight size={16} />
            </Link>
          </div>

          {news.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6">
              {/* Featured */}
              <Link
                href={`/news/${news[0]?.slug?.current || "#"}`}
                className="card group flex flex-col"
              >
                <div
                  className="h-[280px] relative overflow-hidden flex-shrink-0"
                  style={{ background: "#0d3320" }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom,transparent 40%,rgba(13,51,32,0.7))",
                    }}
                  />
                  <span className="absolute top-5 left-5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded bg-red-warm text-white">
                    {tr.news.featured as string}
                  </span>
                </div>
                <div className="p-9 flex flex-col flex-1">
                  <p className="text-[11.5px] text-gray-400 font-medium mb-3 uppercase tracking-wider">
                    {news[0]?.publishedAt
                      ? formatDate(news[0].publishedAt)
                      : ""}{" "}
                    · {news[0]?.category || "News"}
                  </p>
                  <h2 className="font-serif text-2xl font-semibold text-ink leading-[1.3] mb-3 tracking-tight group-hover:text-green-DEFAULT transition-colors">
                    {news[0]?.title ||
                      "KWASACA Launches New Mobile HIV Testing Drive Across Ilorin Metropolis"}
                  </h2>
                  <p className="text-sm text-gray-500 leading-[1.7] flex-1 font-light">
                    {news[0]?.excerpt ||
                      "The agency has deployed mobile testing units to communities across Ilorin as part of the quarterly outreach initiative in partnership with SFH Nigeria and the Global Fund."}
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-green-light flex items-center justify-center text-xs font-bold text-green-mid">
                        KW
                      </div>
                      <span className="text-sm font-medium text-ink">
                        {tr.news.author as string}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-green-DEFAULT flex items-center gap-1.5">
                      {tr.news.readMore as string} <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Smaller cards */}
              <div className="flex flex-col gap-6">
                {(news.slice(1, 3).length > 0
                  ? news.slice(1, 3)
                  : [
                      {
                        title:
                          "World AIDS Day 2025 Planning Meeting Convenes in Ilorin",
                        category: "Event",
                        publishedAt: "2025-03-10",
                        slug: { current: "#" },
                      },
                      {
                        title:
                          "2024 Annual HIV Situation Report Published — Download Now",
                        category: "Report",
                        publishedAt: "2025-02-28",
                        slug: { current: "#" },
                      },
                    ]
                ).map((n: any, i: number) => (
                  <Link
                    key={i}
                    href={`/news/${n?.slug?.current || "#"}`}
                    className="card group flex flex-col flex-1"
                  >
                    <div className="h-[120px] relative overflow-hidden flex-shrink-0 bg-green-pale">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(-45deg,transparent 0px,transparent 12px,rgba(20,83,45,0.05) 12px,rgba(20,83,45,0.05) 13px)",
                        }}
                      />
                      <span
                        className={`absolute top-2.5 left-3 text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white
                        ${n.category === "Event" ? "bg-red-warm" : n.category === "Report" ? "bg-green-DEFAULT" : "bg-green-glow"}`}
                      >
                        {n.category || "News"}
                      </span>
                    </div>
                    <div className="p-5 flex-1">
                      <p className="text-[11px] text-gray-400 font-medium mb-2 uppercase tracking-wide">
                        {n.publishedAt ? formatDate(n.publishedAt) : ""}
                      </p>
                      <h3 className="font-serif text-[17px] font-semibold text-ink leading-[1.35] group-hover:text-green-DEFAULT transition-colors">
                        {n.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            /* Placeholder when no CMS data yet */
            <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6">
              <div className="card flex flex-col">
                <div
                  className="h-[280px] relative overflow-hidden flex-shrink-0"
                  style={{ background: "#0d3320" }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <span className="absolute top-5 left-5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded bg-red-warm text-white">
                    Featured
                  </span>
                </div>
                <div className="p-9">
                  <p className="text-[11.5px] text-gray-400 uppercase tracking-wider mb-3">
                    March 18, 2025 · Press Release
                  </p>
                  <h2 className="font-serif text-2xl font-semibold text-ink leading-[1.3] mb-3">
                    KWASACA Launches New Mobile HIV Testing Drive Across Ilorin
                    Metropolis
                  </h2>
                  <p className="text-sm text-gray-500 leading-[1.7] font-light">
                    The agency has deployed mobile testing units to 12
                    communities across Ilorin East, West and South LGAs as part
                    of the quarterly outreach initiative.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  {
                    cat: "Event",
                    title:
                      "World AIDS Day 2025 Planning Meeting Convenes in Ilorin",
                    date: "March 10, 2025",
                  },
                  {
                    cat: "Report",
                    title:
                      "2024 Annual HIV Situation Report Published — Download Now",
                    date: "Feb 28, 2025",
                  },
                ].map((n, i) => (
                  <div key={i} className="card flex flex-col flex-1">
                    <div className="h-[120px] relative bg-green-pale flex-shrink-0">
                      <span
                        className={`absolute top-2.5 left-3 text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white ${n.cat === "Event" ? "bg-red-warm" : "bg-green-DEFAULT"}`}
                      >
                        {n.cat}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-2">
                        {n.date}
                      </p>
                      <h3 className="font-serif text-[17px] font-semibold text-ink leading-[1.35]">
                        {n.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── RESEARCH CTA ── */}
      <section className="py-32 px-12" style={{ background: "#fafaf7" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-ink rounded-2xl px-14 py-14 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full border border-white/[0.04]" />
            <div className="absolute right-10 -bottom-20 w-44 h-44 rounded-full bg-red-warm/15" />
            <div className="relative z-10">
              <span className="inline-flex items-center text-green-400 bg-green-400/10 border border-green-400/20 font-semibold px-3 py-1 rounded-full text-[11px] uppercase tracking-widest mb-5">
                {tr.research.pill as string}
              </span>
              <h2 className="font-serif text-[clamp(24px,3vw,40px)] font-semibold text-white leading-[1.2] mb-3">
                {tr.research.heading as string}
              </h2>
              <p className="text-[15px] text-white/55 max-w-[480px] leading-[1.8] font-light">
                {tr.research.desc as string}
              </p>
            </div>
            <Link
              href="/research"
              className="relative z-10 inline-flex items-center gap-2 bg-white text-ink text-sm font-bold px-8 py-4 rounded-xl hover:bg-green-light hover:text-green-deep transition-all whitespace-nowrap flex-shrink-0"
            >
              {tr.research.cta as string} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-16 px-12 bg-white border-t border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-center text-[11px] font-semibold text-gray-400 uppercase tracking-[0.12em] mb-10">
            {tr.partners.title as string}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {partners.map((p) => (
              <div
                key={p.name}
                className="w-[130px] h-[64px] flex items-center justify-center p-3 bg-white border border-gray-200 rounded-lg hover:border-green-base hover:shadow-sm transition-all"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="py-20 px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
          <Link href="/contact" className="p-8 border border-gray-200 rounded-xl transition-all duration-[0.35s] relative overflow-hidden hover:border-green-light hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] reveal">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-green-base origin-left" style={{ transform: "scaleX(0)" }} />
            <div className="w-[52px] h-[52px] rounded-xl bg-green-pale border border-green-light flex items-center justify-center mb-[18px]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#14532d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <h3 className="text-lg font-semibold text-ink mb-2 tracking-[-0.01em]">{tr.contact.enquiryTitle as string}</h3>
            <p className="text-[13.5px] text-gray-400 leading-[1.65] font-light mb-[18px]">{tr.contact.enquiryDesc as string}</p>
            <span className="text-[13px] font-semibold text-green-base flex items-center gap-1.5 transition-all duration-[0.25s]">
              {tr.contact.enquiryCta as string}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </Link>
          <Link href="/contact?type=complaint" className="p-8 border border-gray-200 rounded-xl transition-all duration-[0.35s] relative overflow-hidden hover:border-green-light hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] reveal delay-1">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-green-base origin-left" style={{ transform: "scaleX(0)" }} />
            <div className="w-[52px] h-[52px] rounded-xl bg-green-pale border border-green-light flex items-center justify-center mb-[18px]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#14532d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
            </div>
            <h3 className="text-lg font-semibold text-ink mb-2 tracking-[-0.01em]">{tr.contact.complaintTitle as string}</h3>
            <p className="text-[13.5px] text-gray-400 leading-[1.65] font-light mb-[18px]">{tr.contact.complaintDesc as string}</p>
            <span className="text-[13px] font-semibold text-green-base flex items-center gap-1.5 transition-all duration-[0.25s]">
              {tr.contact.complaintCta as string}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </Link>
          <Link href="/get-involved" className="p-8 border border-gray-200 rounded-xl transition-all duration-[0.35s] relative overflow-hidden hover:border-green-light hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] reveal delay-2">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-green-base origin-left" style={{ transform: "scaleX(0)" }} />
            <div className="w-[52px] h-[52px] rounded-xl bg-green-pale border border-green-light flex items-center justify-center mb-[18px]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#14532d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <h3 className="text-lg font-semibold text-ink mb-2 tracking-[-0.01em]">{tr.contact.partnerTitle as string}</h3>
            <p className="text-[13.5px] text-gray-400 leading-[1.65] font-light mb-[18px]">{tr.contact.partnerDesc as string}</p>
            <span className="text-[13px] font-semibold text-green-base flex items-center gap-1.5 transition-all duration-[0.25s]">
              {tr.contact.partnerCta as string}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
