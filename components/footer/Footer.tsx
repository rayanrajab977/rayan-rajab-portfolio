"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

/* ── Replace href values before deploying ── */
const SOCIAL = [
  { label: "GitHub",   icon: Github,   href: null as string | null },
  { label: "LinkedIn", icon: Linkedin, href: null as string | null },
  { label: "Email",    icon: Mail,     href: null as string | null },
];

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Work",       href: "#work"       },
  { label: "Experience", href: "#experience" },
  { label: "Journey",    href: "#journey"    },
  { label: "Ideas",      href: "#ideas"      },
  { label: "Contact",    href: "#contact"    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0d1117] border-t border-[#1e2d40]" role="contentinfo">
      {/* Top gradient rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.18), transparent)" }}
        aria-hidden="true"
      />

      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 w-fit focus-visible:outline-none group"
              aria-label="Back to top"
            >
              <div className="w-7 h-7 flex items-center justify-center border border-[#00d4ff]/25 rounded group-hover:border-[#00d4ff]/55 transition-colors duration-300">
                <span
                  className="font-mono font-bold text-[#00d4ff]"
                  style={{ fontSize: "0.625rem", letterSpacing: "0.18em" }}
                >
                  R/
                </span>
              </div>
              <span className="text-sm font-semibold text-[#f0f4f8] group-hover:text-white transition-colors">
                Rayan Rajab
              </span>
            </button>
            <p className="text-xs text-[#4a5568] leading-relaxed max-w-[200px]">
              Technology Builder<br />Cloud · Cybersecurity · AI · Software
            </p>
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="label-mono text-[#22c55e]">CURRENTLY BUILDING</span>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="label-mono text-[#4a5568] mb-4">NAVIGATION</p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-xs text-[#8b9ab0] hover:text-[#f0f4f8] transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#00d4ff] text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="label-mono text-[#4a5568] mb-4">CONNECT</p>
            <div className="flex flex-col gap-3">
              {SOCIAL.map(({ label, icon: Icon, href }) => {
                /* No href = not yet configured; render as muted non-link */
                if (!href) {
                  return (
                    <div
                      key={label}
                      className="flex items-center gap-2.5 text-xs text-[#2a3a50] cursor-not-allowed select-none w-fit"
                      aria-label={`${label} — link not yet configured`}
                    >
                      <Icon size={13} strokeWidth={1.5} />
                      {label}
                    </div>
                  );
                }
                return (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2.5 text-xs text-[#8b9ab0] hover:text-[#f0f4f8] transition-colors duration-200 group focus-visible:outline-none focus-visible:text-[#00d4ff] w-fit"
                    aria-label={label}
                  >
                    <Icon
                      size={13}
                      strokeWidth={1.5}
                      className="group-hover:text-[#00d4ff] transition-colors duration-200"
                    />
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1e2d40] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="label-mono-sm text-[#2a3a50]">
            © {year} Rayan Rajab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="label-mono-sm text-[#2a3a50]">Built with curiosity.</p>
            <p className="label-mono-sm text-[#2a3a50] hidden sm:block">
              Next.js · TypeScript · Tailwind · Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
