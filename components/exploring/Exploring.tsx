"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const AREAS = [
  {
    id: "cloud",
    label: "Cloud Engineering",
    sublabel: "AWS · Infrastructure · IaC · Architecture",
    emphasis: 82,
    accent: "#00d4ff",
  },
  {
    id: "security",
    label: "Cybersecurity",
    sublabel: "Defensive · Offensive · Networking · Tooling",
    emphasis: 78,
    accent: "#7c3aed",
  },
  {
    id: "ai",
    label: "AI Systems",
    sublabel: "Agents · LLMs · Automation · Reasoning",
    emphasis: 70,
    accent: "#f59e0b",
  },
  {
    id: "software",
    label: "Software Engineering",
    sublabel: "Full-stack · APIs · Architecture · Databases",
    emphasis: 80,
    accent: "#22c55e",
  },
  {
    id: "networks",
    label: "Networking",
    sublabel: "TCP/IP · Infrastructure · VoIP · Protocols",
    emphasis: 60,
    accent: "#e879f9",
  },
];

function ExploreBar({ area, delay }: { area: (typeof AREAS)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Label row */}
      <div className="flex items-baseline justify-between mb-2.5">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-semibold text-[#f0f4f8]">{area.label}</span>
          <span className="label-mono-sm hidden sm:inline">{area.sublabel}</span>
        </div>
        <span className="label-mono-sm" style={{ color: area.accent, opacity: 0.6 }}>ACTIVE</span>
      </div>
      {/* Sub-label on mobile */}
      <div className="label-mono-sm sm:hidden mb-2">{area.sublabel}</div>

      {/* Bar */}
      <div
        className="relative h-[3px] rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.05)" }}
        role="presentation"
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full origin-left"
          style={{ background: `linear-gradient(90deg, ${area.accent}, ${area.accent}50)` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: area.emphasis / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.1, delay: delay + 0.12, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Shimmer */}
        {inView && (
          <motion.div
            className="absolute inset-y-0 w-12 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${area.accent}80, transparent)`,
              left: `${area.emphasis}%`,
            }}
            initial={{ x: -48, opacity: 0 }}
            animate={{ x: 0, opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, delay: delay + 1.1 }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default function Exploring() {
  return (
    <section
      id="exploring"
      className="relative section-padding bg-[#080a0f] overflow-hidden"
      aria-labelledby="exploring-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — header */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeUp} className="eyebrow">CURRENTLY EXPLORING</motion.span>
            <motion.h2
              variants={fadeUp}
              id="exploring-heading"
              className="text-heading-xl font-bold text-[#f0f4f8] mb-5"
            >
              Active areas of{" "}
              <span className="text-[#8b9ab0] font-normal">focus.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[0.9375rem] text-[#8b9ab0] leading-relaxed max-w-sm">
              These bars represent where attention is currently invested — not a percentage of mastery, but a signal of active exploration.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 p-4 rounded-xl border border-[#1e2d40] bg-[#0d1117]"
            >
              <p className="label-mono text-[#8b9ab0] mb-1.5">NOTE</p>
              <p className="text-xs text-[#8b9ab0] leading-relaxed">
                Emphasis reflects current investment, not relative skill level. All domains are studied seriously.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — bars */}
          <div className="space-y-7">
            {AREAS.map((area, i) => (
              <ExploreBar key={area.id} area={area} delay={i * 0.09} />
            ))}

            {/* Replaced static terminal stub with a clean status row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.7 }}
              className="pt-5 border-t border-[#1e2d40] flex items-center gap-3"
            >
              <span className="status-dot" aria-hidden="true" />
              <span className="label-mono text-[#8b9ab0]">ALL DOMAINS ACTIVE</span>
              <span className="label-mono-sm ml-auto">BUILDING IN PROGRESS</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
