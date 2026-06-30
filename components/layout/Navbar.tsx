"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { KWASACA_LOGO, KWARA_LOGO } from "@/lib/logos";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/news", label: "News" },
  { href: "/data-reports", label: "Data & Reports" },
  { href: "/research", label: "Research" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Navbar({ isAdmin }: { isAdmin?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Topbar */}
      <div className="topbar-strip">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span className="topbar-dot" />
            <span>
              Official Website of Kwara State AIDS Control Agency
              (KWASACA)
            </span>
          </div>
          <div className="topbar-links">
            {["Hausa", "Accessibility", "Kwara State Govt"].map((t) => (
              <a key={t} href="#" className="topbar-link">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`main-nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-container">
          {/* Brand */}
          <Link href="/" className="nav-brand">
            <div className="brand-logos">
              <div className="logo-wrap">
                <img
                  src={KWARA_LOGO}
                  alt="Kwara State Government Logo"
                  className="logo-img"
                />
              </div>
              <div className="logo-divider" />
              <div className="logo-wrap-kwasaca">
                <img
                  src={KWASACA_LOGO}
                  alt="KWASACA Logo"
                  className="logo-img"
                />
              </div>
            </div>
            <div className="brand-text-wrap">
              <strong className="brand-name">KWASACA</strong>
              <span className="brand-sub">
                Kwara State AIDS Control Agency
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="desktop-nav">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${pathname === href ? "nav-link-active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            {isAdmin && (
              <>
                <li>
                  <Link
                    href="/admin"
                    className={`nav-link ${pathname.startsWith("/admin") ? "nav-link-active" : ""}`}
                  >
                    Admin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/login?signout"
                    className="nav-link text-red-warm hover:text-red-warm"
                  >
                    Sign Out
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Desktop CTAs */}
          <div className="nav-ctas">
            <Link href="/contact?type=complaint" className="btn-ghost-nav">
              File Complaint
            </Link>
            <Link href="/contact" className="btn-solid-nav">
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
          <div className="mobile-menu-inner">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`mobile-link ${pathname === href ? "mobile-link-active" : ""}`}
              >
                {label}
              </Link>
            ))}
            {isAdmin && (
              <>
                <Link href="/admin" className="mobile-link">
                  Admin Dashboard
                </Link>
                <Link
                  href="/auth/login?signout"
                  className="mobile-link text-red-warm"
                >
                  Sign Out
                </Link>
              </>
            )}
            <div className="mobile-ctas">
              <Link
                href="/contact?type=complaint"
                className="mobile-btn-outline"
              >
                File Complaint
              </Link>
              <Link href="/contact" className="mobile-btn-solid">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
