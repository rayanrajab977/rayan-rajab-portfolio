"use client";

import { motion } from "framer-motion";
import { FlaskConical, Lightbulb, Hammer, Box, PauseCircle } from "lucide-react";
import { labItems } from "@/data/lab";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import type { LabStatus } from "@/data/lab";

const STATUS_CONFIG: Record<LabStatus, { color: string; icon: typeof FlaskConical; label: string }> = {
  IDEA:       { color: "#8b9ab0", icon: Lightbulb,    label: "IDEA"       },
  EXPERIMENT: { color: "#00d4ff", icon: FlaskConical, label: "EXPERIMENT" },
  BUILDING:   { color: "#22c55e", icon: Hammer,       label: "BUILDING"   },
  PROTOTYPE:  { color: "#f59e0b", icon: Box,          label: "PROTOTYPE"  },
  PAUSED:     { color: "#4a5568", icon: PauseCircle,  label: "PAUSED"     },
};

export default function Lab() {
  return (
    <section
      id="lab"
      className="relative section-padding bg-[#0d1117] overflow-hidden"
      aria-labelledby="lab-heading"
    >
      {/* Violet grid texture */}
      <div
        className="absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
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
          <motion.span variants={fadeUp} className="eyebrow">THE LAB</motion.span>
          <motion.h2
            variants={fadeUp}
            id="lab-heading"
            className="text-heading-xl font-bold text-[#f0f4f8] max-w-xl mb-4"
          >
            Where ideas live{" "}
            <span className="text-[#8b9ab0] font-normal">before they ship.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[0.9375rem] text-[#8b9ab0] max-w-lg leading-relaxed">
            Unfinished experiments, concepts in progress and ideas worth testing. This is where curiosity runs ahead of certainty.
          </motion.p>
        </motion.div>

        {/* Status legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap gap-4 mb-10"
          aria-label="Status legend"
        >
          {Object.entries(STATUS_CONFIG).map(([status, cfg]) => {
            const Icon = cfg.icon;
            return (
              <div key={status} className="flex items-center gap-1.5">
                <Icon size={10} style={{ color: cfg.color }} strokeWidth={1.5} />
                <span className="label-mono" style={{ color: cfg.color }}>{cfg.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Lab grid */}
        <motion.div
          variants={staggerContainer(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
        >
          {labItems.map((item) => {
            const cfg = STATUS_CONFIG[item.status];
            const Icon = cfg.icon;

            return (
              <motion.article
                key={item.id}
                variants={fadeUp}
                role="listitem"
                className="group relative rounded-xl border border-[#1e2d40] bg-[#080a0f] p-5 overflow-hidden"
                whileHover={{
                  y: -3,
                  boxShadow: `0 0 0 1px ${cfg.color}18, 0 10px 36px rgba(0,0,0,0.55)`,
                  borderColor: `${cfg.color}22`,
                }}
                style={{
                  transition: "border-color 0.25s",
                }}
              >
                {/* Top color rule */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, ${cfg.color}40, transparent)` }}
                  aria-hidden="true"
                />

                {/* Status badge — unified tag-pill */}
                <div className="mb-4">
                  <span
                    className="tag-pill"
                    style={{
                      color: cfg.color,
                      borderColor: `${cfg.color}30`,
                      background: `${cfg.color}07`,
                    }}
                  >
                    <Icon size={9} strokeWidth={1.5} aria-hidden="true" />
                    {cfg.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#f0f4f8] mb-2 leading-snug group-hover:text-white transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#8b9ab0] leading-relaxed mb-4">{item.description}</p>

                {/* Tech tags — unified tag-pill without color (neutral) */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill"
                      style={{ color: "#4a5568", borderColor: "#1e2d40", background: "transparent" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Notes */}
                {item.notes && (
                  <div className="mt-4 pt-3 border-t border-[#1e2d40]">
                    <p className="text-[0.65rem] text-[#4a5568] italic leading-relaxed">{item.notes}</p>
                  </div>
                )}

                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                  style={{
                    background: `radial-gradient(ellipse at top right, ${cfg.color}12, transparent 70%)`,
                  }}
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #1e2d40)" }} />
          <span className="label-mono-sm text-[#2a3a50]">EXPERIMENTS ADDED AS CURIOSITY DEMANDS</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #1e2d40)" }} />
        </motion.div>
      </div>
    </section>
  );
}
