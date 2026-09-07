"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Shield, Brain, Code2, Network } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const CAPABILITIES = [
  {
    id: "cloud",
    icon: Cloud,
    label: "CLOUD",
    headline: "Building on the cloud.",
    description:
      "Infrastructure, deployment pipelines, cloud architecture and AWS exploration. Moving from local environments to scalable, distributed systems.",
    keywords: ["AWS", "Infrastructure", "Deployment", "Architecture", "IaC"],
    meta: "01",
    accent: "#00d4ff",
  },
  {
    id: "security",
    icon: Shield,
    label: "CYBERSECURITY",
    headline: "Understanding attack and defence.",
    description:
      "Security analysis, defensive security, offensive security fundamentals, networking and security tooling. Building things that are secure by design.",
    keywords: ["Defensive Security", "Threat Analysis", "Security Tooling", "Networking", "CTF"],
    meta: "02",
    accent: "#7c3aed",
  },
  {
    id: "ai",
    icon: Brain,
    label: "AI",
    headline: "Building intelligent systems.",
    description:
      "AI assistants, agentic workflows, autonomous systems, prompt engineering and experimentation. Using language models as building blocks, not magic.",
    keywords: ["LLMs", "AI Agents", "Prompt Engineering", "Automation", "Python"],
    meta: "03",
    accent: "#f59e0b",
  },
  {
    id: "software",
    icon: Code2,
    label: "SOFTWARE/WEB DEV",
    headline: "Turning ideas into working web products..",
    description:
      "Building responsive web applications and practical digital solutions, from interfaces and dashboards to APIs and the systems behind them. I focus on writing clean, purposeful code and collaborating with others to turn ideas into products that work.",
    keywords: ["React", "Node.js", "Python", "Django", "PostgreSQL", "APIs"],
    meta: "04",
    accent: "#22c55e",
  },
  {
    id: "networks",
    icon: Network,
    label: "NETWORKS",
    headline: "Understanding how things connect.",
    description:
      "Networking fundamentals, infrastructure configuration, VoIP, troubleshooting and network architecture. The foundation beneath every distributed system.",
    keywords: ["TCP/IP", "VoIP", "Network Architecture", "Infrastructure", "Troubleshooting"],
    meta: "05",
    accent: "#e879f9",
  },
];

export default function Capabilities() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = CAPABILITIES.find((c) => c.id === activeId) ?? null;

  return (
    <section
      id="capabilities"
      className="relative section-padding bg-[#0d1117] overflow-hidden"
      aria-labelledby="capabilities-heading"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-35"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.025) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow">WHAT I BUILD</motion.span>
          <motion.h2
            variants={fadeUp}
            id="capabilities-heading"
            className="text-heading-xl font-bold text-[#f0f4f8] max-w-xl"
          >
            Five domains.{" "}
            <span className="text-[#8b9ab0] font-normal">One builder.</span>
          </motion.h2>
        </motion.div>

        {/* Capability modules */}
        <motion.div
          variants={staggerContainer(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3"
          role="list"
        >
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            const isActive = activeId === cap.id;

            return (
              <motion.article
                key={cap.id}
                variants={fadeUp}
                role="listitem"
                onMouseEnter={() => setActiveId(cap.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(cap.id)}
                onBlur={() => setActiveId(null)}
                tabIndex={0}
                aria-label={`${cap.label} — ${cap.headline}`}
                className="relative group rounded-xl border bg-[#080a0f] p-6 cursor-default overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50"
                style={{
                  borderColor: isActive ? `${cap.accent}30` : "#1e2d40",
                  boxShadow: isActive
                    ? `0 0 0 1px ${cap.accent}18, 0 12px 40px rgba(0,0,0,0.55)`
                    : "none",
                  transform: isActive ? "translateY(-4px)" : "translateY(0)",
                  transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                }}
              >
                {/* Scan line */}
                {isActive && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 0.65, ease: "linear" }}
                    className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${cap.accent}90, transparent)`,
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Corner index */}
                <div
                  className="label-mono-sm mb-5"
                  style={{ color: cap.accent, opacity: isActive ? 0.7 : 0.22, transition: "opacity 0.25s" }}
                  aria-hidden="true"
                >
                  {cap.meta}
                </div>

                {/* Icon */}
                <motion.div
                  animate={{ color: isActive ? cap.accent : "#3a4a5c" }}
                  transition={{ duration: 0.22 }}
                  className="mb-5"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.div>

                {/* Label */}
                <div
                  className="label-mono mb-3"
                  style={{
                    color: isActive ? cap.accent : "#8b9ab0",
                    transition: "color 0.22s",
                  }}
                >
                  {cap.label}
                </div>

                {/* Headline */}
                <h3 className="text-sm font-semibold text-[#f0f4f8] leading-snug mb-3">
                  {cap.headline}
                </h3>

                {/* Description */}
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="text-xs text-[#8b9ab0] leading-relaxed overflow-hidden"
                    >
                      {cap.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Keywords — use unified tag-pill style */}
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-wrap gap-1.5 mt-4"
                >
                  {cap.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="tag-pill"
                      style={{
                        borderColor: isActive ? `${cap.accent}35` : "#1e2d40",
                        color: isActive ? cap.accent : "#4a5568",
                        transition: "border-color 0.22s, color 0.22s",
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </motion.div>

                {/* Bottom accent bar */}
                <motion.div
                  animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 right-0 h-px origin-left"
                  style={{ background: `linear-gradient(90deg, ${cap.accent}, transparent)` }}
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Summary bar */}
        <div className="mt-8 h-10 flex items-center border-t border-[#1e2d40] pt-4">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: active.accent }}
                  aria-hidden="true"
                />
                <span className="text-xs text-[#8b9ab0]">
                  <span
                    className="label-mono mr-2"
                    style={{ color: active.accent }}
                  >
                    {active.label}
                  </span>
                  {active.description}
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {/* Dimmer instruction — label-mono-sm so it reads as hint, not content */}
                <span className="label-mono-sm text-[#2a3a50]">hover a domain to explore</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
