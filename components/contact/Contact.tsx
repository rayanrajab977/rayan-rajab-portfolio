"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download, ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const TERMINAL_LINES = [
  { delay: 0.2,  text: "rayan@builder:~$ connect --init",         color: "#f0f4f8" },
  { delay: 0.9,  text: "> establishing connection...",             color: "#4a5568" },
  { delay: 1.6,  text: "> identity verified: Rayan Rajab",        color: "#00d4ff" },
  { delay: 2.3,  text: "> status: available for opportunities",   color: "#22c55e" },
  { delay: 3.0,  text: "> connection established.",                color: "#f0f4f8" },
];

const LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    sublabel: "Let's connect professionally",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rayan-rajab-profile/",
    accent: "#0a66c2",
    cta: "Connect",
  },
  {
    id: "github",
    label: "GitHub",
    sublabel: "See what I'm building",
    icon: Github,
    href: "https://github.com/rayanrajab977/rayanrajab977",
    accent: "#f0f4f8",
    cta: "Follow",
  },
  {
    id: "email",
    label: "Email",
    sublabel: "Direct line",
    icon: Mail,
    href: "mailto:rajabrayan977@gmail.com",
    accent: "#00d4ff",
    cta: "Send",
  },
  {
    id: "cv",
    label: "Download CV",
    sublabel: "Full résumé / curriculum vitae",
    icon: Download,
    href: "[ADD CV URL]",
    accent: "#7c3aed",
    cta: "Download",
  },
];

function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setVisibleLines(0);
    const timers = TERMINAL_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      className="rounded-xl border border-[#1e2d40] bg-[#080a0f] overflow-hidden"
      aria-label="Terminal visualization"
      aria-hidden="true"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e2d40]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
        <span className="ml-3 label-mono text-[0.55rem] text-[#4a5568]">terminal — rayan@builder</span>
      </div>
      {/* Lines */}
      <div className="p-5 space-y-2 font-mono text-[0.72rem] min-h-[160px]">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ color: line.color }}
          >
            {line.text}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        {visibleLines > 0 && visibleLines < TERMINAL_LINES.length + 1 && (
          <span
            className="inline-block w-[6px] h-[0.8em] bg-[#00d4ff] align-middle"
            style={{ animation: "blink 1.2s step-end infinite" }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative section-padding bg-[#080a0f] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Top divider */}
      <div className="divider mb-0" aria-hidden="true" />

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeUp} className="eyebrow">LET&apos;S BUILD SOMETHING</motion.span>

            <motion.h2
              variants={fadeUp}
              id="contact-heading"
              className="text-heading-xl font-bold text-[#f0f4f8] mb-5"
            >
              Have an idea worth{" "}
              <span className="text-[#00d4ff]">exploring?</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-sm text-[#8b9ab0] leading-relaxed max-w-md mb-10">
              Whether it&apos;s a project, opportunity, collaboration or just a problem worth thinking through — reach out. The best things start with a conversation.
            </motion.p>

            {/* Link cards */}
            <motion.div
              variants={staggerContainer(0.08, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {LINKS.map((link) => {
                const Icon = link.icon;
                const isPlaceholder =
                  link.href.startsWith("[") || link.href.includes("[ADD");

                return (
                  <motion.a
                    key={link.id}
                    variants={fadeUp}
                    href={isPlaceholder ? undefined : link.href}
                    target={link.id !== "email" && link.id !== "cv" ? "_blank" : undefined}
                    rel={link.id !== "email" && link.id !== "cv" ? "noopener noreferrer" : undefined}
                    className="group relative flex items-center gap-4 p-4 rounded-xl border border-[#1e2d40] bg-[#0d1117] hover:border-[#263347] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50"
                    style={{ cursor: isPlaceholder ? "not-allowed" : "pointer" }}
                    aria-label={`${link.label}: ${link.sublabel}`}
                    aria-disabled={isPlaceholder}
                    whileHover={isPlaceholder ? {} : { y: -2, boxShadow: `0 0 0 1px ${link.accent}25, 0 8px 32px rgba(0,0,0,0.4)` }}
                  >
                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors duration-300"
                      style={{
                        borderColor: `${link.accent}30`,
                        background: `${link.accent}08`,
                        color: link.accent,
                      }}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-[#f0f4f8] group-hover:text-white transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs text-[#4a5568] truncate">{link.sublabel}</div>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={14}
                      className="text-[#4a5568] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#8b9ab0] transition-all duration-200 flex-shrink-0"
                    />

                    {isPlaceholder && (
                      <div className="absolute inset-0 rounded-xl flex items-center justify-center bg-[#0d1117]/60 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="label-mono text-[0.55rem] text-[#4a5568]">LINK COMING SOON</span>
                      </div>
                    )}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — terminal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <TerminalPanel />

            {/* Status card */}
            <div className="p-5 rounded-xl border border-[#1e2d40] bg-[#0d1117]">
              <div className="flex items-center gap-3 mb-3">
                <span className="status-dot" />
                <span className="label-mono-cyan text-[0.6rem]">CURRENT STATUS</span>
              </div>
              <p className="text-sm text-[#f0f4f8] font-medium mb-1">
                Available for opportunities
              </p>
              <p className="text-xs text-[#8b9ab0] leading-relaxed">
                Open to internships, project collaborations, community work and interesting problems in cloud, cybersecurity, AI and software engineering.
              </p>
              <dl className="mt-4 pt-4 border-t border-[#1e2d40] grid grid-cols-2 gap-3">
                {[
                  { label: "LOCATION", value: "Kampala, Uganda" },
                  { label: "TIMEZONE", value: "EAT (UTC+3)" },
                  { label: "AVAILABLE", value: "Immediately" },
                  { label: "PREFERENCE", value: "Remote / Local" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="label-mono text-[0.5rem] text-[#4a5568] mb-0.5">{label}</dt>
                    <dd className="text-xs text-[#8b9ab0]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
