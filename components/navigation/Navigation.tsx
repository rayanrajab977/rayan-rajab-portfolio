"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#journey", label: "Journey" },
  { href: "#ideas", label: "Ideas" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[rgba(8,10,15,0.88)] backdrop-blur-xl border-b border-[#1e2d40]"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav
          className="section-container flex items-center justify-between h-16"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50 rounded-lg p-1 -ml-1"
            aria-label="Rayan Rajab — back to top"
          >
            <div className="relative w-7 h-7 flex items-center justify-center">
              <div className="absolute inset-0 border border-[#00d4ff]/30 rounded group-hover:border-[#00d4ff]/65 transition-colors duration-300" />
              <span
                className="label-mono-cyan font-bold"
                style={{ fontSize: "0.625rem", letterSpacing: "0.18em" }}
              >
                R/
              </span>
            </div>
            <span className="hidden sm:block text-xs font-semibold text-[#4a5568] group-hover:text-[#8b9ab0] transition-colors duration-300 tracking-[0.08em]">
              RAYAN RAJAB
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className={cn(
                      "relative px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/40",
                      isActive ? "text-[#f0f4f8]" : "text-[#4a5568] hover:text-[#8b9ab0]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-3.5 right-3.5 h-px bg-[#00d4ff]"
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA — secondary style so it doesn't compete with on-page CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden md:flex btn-secondary text-xs px-4 py-2"
            >
              Let&apos;s connect
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 text-[#8b9ab0] hover:text-[#f0f4f8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50 rounded active:scale-95"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-[#0d1117] border-l border-[#1e2d40] flex flex-col md:hidden"
              role="dialog"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e2d40]">
                <span className="label-mono-cyan text-[0.6rem]">NAVIGATION</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 text-[#4a5568] hover:text-[#f0f4f8] transition-colors rounded active:scale-95"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>
              <nav className="flex flex-col px-3 py-4 gap-0.5 flex-1">
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.button
                    key={href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleNavClick(href)}
                    className="flex items-center gap-3 text-left px-3 py-3 text-[#8b9ab0] hover:text-[#f0f4f8] hover:bg-white/[0.03] rounded-lg transition-all duration-200 text-sm font-medium group"
                  >
                    <span
                      className="label-mono-sm text-[#1e2d40] group-hover:text-[#4a5568] transition-colors"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {label}
                  </motion.button>
                ))}
              </nav>
              <div className="px-5 py-5 border-t border-[#1e2d40]">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Let&apos;s connect
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
