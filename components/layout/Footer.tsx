import Link from "next/link";
import { KWASACA_LOGO } from "@/lib/logos";

const footerLinks = {
  Agency: [
    { label: "About KWASACA", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Our Mandate", href: "/about#mandate" },
    { label: "Org Structure", href: "/about#structure" },
    { label: "Partners", href: "/about#partners" },
  ],
  Programs: [
    { label: "HIV Prevention", href: "/programs#prevention" },
    { label: "Treatment & ART", href: "/programs#art" },
    { label: "PMTCT", href: "/programs#pmtct" },
    { label: "Testing Centers", href: "/programs#testing" },
    { label: "OVC Support", href: "/programs#ovc" },
    { label: "Community Outreach", href: "/programs#outreach" },
  ],
  Resources: [
    { label: "Data & Reports", href: "/data-reports" },
    { label: "Submit Research", href: "/research" },
    { label: "News & Events", href: "/news" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact Us", href: "/contact" },
    { label: "File a Complaint", href: "/contact?type=complaint" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0d3320" }} className="text-white/70">
      <div className="max-w-[1280px] mx-auto px-12 pt-28 pb-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2.2fr_1fr_1fr_1fr] gap-16 mb-20 pb-20 border-b border-white/[0.07]">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-start mb-5">
              <img
                src={KWASACA_LOGO}
                alt="KWASACA Logo"
                className="w-[140px] h-[140px] object-contain"
              />
            </div>

            <div className="text-xs text-white/35 mb-5 tracking-wide uppercase">
              Kwara State Agency for Control of AIDS
            </div>
            <p className="text-[14px] text-white/45 leading-[1.8] font-light max-w-[320px]">
              The apex coordinating body for HIV/AIDS response in Kwara State,
              Nigeria. Working toward ending AIDS as a public health threat by
              2030 in line with UNAIDS 95-95-95 targets.
            </p>
            <div className="flex gap-2 mt-8">
              {["𝕏", "f", "in", "▶"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/[0.06] border border-white/[0.08] rounded-lg flex items-center justify-center text-sm text-white/45 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-bold text-white/90 uppercase tracking-[0.1em] mb-6">
                {title}
              </h4>
              <ul className="space-y-3.5">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[14px] text-white/45 hover:text-white/90 transition-colors font-light"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} KWASACA — An Agency of the Kwara State
            Government of Nigeria. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Use", "Accessibility", "Sitemap"].map(
              (t) => (
                <a
                  key={t}
                  href="#"
                  className="text-xs text-white/25 hover:text-white/60 transition-colors"
                >
                  {t}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
