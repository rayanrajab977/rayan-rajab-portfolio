"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import IntersectionOrb from "./IntersectionOrb";

const FACTS = [
  { label: "Focus",     value: "Cloud · Cybersecurity · AI · Networking" },
  { label: "Currently", value: "CS student at UICT" },
  { label: "Location",  value: "Kampala, Uganda" },
  { label: "Mode",      value: "Building" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative section-padding bg-[#080a0f] overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Left edge rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.12), transparent)" }}
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left — text ──────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeUp} className="eyebrow">
              WHO AM I?
            </motion.span>

            <motion.h2
              variants={fadeUp}
              id="about-heading"
              className="text-heading-xl font-bold text-[#f0f4f8] mb-6"
            >
              Technology builder.{" "}
              <span className="text-[#8b9ab0] font-normal">Curious engineer.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-[#8b9ab0] leading-relaxed text-[0.9375rem]">
              <p>
                I&apos;m a Computer Science student and technology builder. I work across
                cloud computing, cybersecurity and networking deeply and collaborate in software/web 
                development and AI, not because
                they&apos;re on a curriculum, but because they&apos;re the tools that let you build
                things that actually matter.
              </p>
              <p>
                I&apos;ve built systems from scratch, experimented with infrastructure, explored how
                AI agents can reason through problems, and helped organise technology communities where
                students learn by building.
              </p>
              <p className="text-[#f0f4f8]">
                The common thread: understanding technology, then turning that knowledge into practical solutions to problems that matter.
              </p>
            </motion.div>

            {/* Fact grid */}
            <motion.dl
              variants={staggerContainer(0.07, 0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 grid grid-cols-2 gap-2.5"
            >
              {FACTS.map(({ label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="group p-4 rounded-xl border border-[#1e2d40] bg-[#0d1117] transition-all duration-300 hover:border-[rgba(0,212,255,0.18)] hover:bg-[rgba(0,212,255,0.03)]"
                  style={{ transition: "border-color 0.3s, background-color 0.3s" }}
                >
                  <dt className="label-mono-sm text-[#4a5568] mb-1.5 group-hover:text-[#8b9ab0] transition-colors duration-300">
                    {label}
                  </dt>
                  <dd className="text-sm text-[#f0f4f8] font-medium leading-snug">{value}</dd>
                </motion.div>
              ))}
            </motion.dl>

            {/* Meta line — replaced generic accent-line with a data-point */}
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
              <span className="label-mono-cyan text-[0.5625rem]">CS · UICT · KAMPALA</span>
              <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(to right, rgba(0,212,255,0.3), transparent)" }} />
            </motion.div>
          </motion.div>

          {/* ── Right — orb ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-sm mx-auto">
              <div className="text-center mb-5">
                <span className="label-mono-sm">AREAS OF EXPLORATION — hover to explore</span>
              </div>

              <IntersectionOrb />

              {/* Key principles */}
              <div className="mt-16 pt-6 border-t border-[#1e2d40] grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "LEARN", sub: "deep fundamentals" },
                  { label: "BUILD", sub: "real systems" },
                  { label: "SHARE", sub: "with community" },
                ].map(({ label, sub }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5">
                    <span className="text-[0.6875rem] font-bold tracking-[0.12em] text-[#00d4ff] font-mono">
                      {label}
                    </span>
                    <span className="label-mono-sm">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
