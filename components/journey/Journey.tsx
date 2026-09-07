"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const CHAPTERS = [
  {
    id: "started",
    phase: "PHASE 01",
    label: "WHERE I STARTED",
    headline: ["Learning the", "foundations."],
    body: "It started with curiosity about how things work — how software runs, how networks carry data, how systems talk to each other. Computer Science gave me the vocabulary. The real learning started when I began applying it.",
    accent: "#00d4ff",
    detail: "CS fundamentals · Networking · Databases · Software development",
  },
  {
    id: "changed",
    phase: "PHASE 02",
    label: "WHAT CHANGED",
    headline: ["From learning technology", "to building with it."],
    body: "There is a gap between understanding a concept and using it to solve a real problem. Crossing that gap changes how you think. I stopped asking 'what is this' and started asking 'what can I build with this'. The projects followed.",
    accent: "#7c3aed",
    detail: "Real projects · Systems thinking · Problem-first mindset",
  },
  {
    id: "now",
    phase: "PHASE 03",
    label: "WHERE I AM NOW",
    headline: ["Building, experimenting,", "connecting."],
    body: "Building projects across cloud, security, AI and software. Experimenting with ideas in The Lab. Contributing to technology communities where students build together. Every week something new gets tested.",
    accent: "#22c55e",
    detail: "Cloud · Cybersecurity · AI · Community · Open experiments",
  },
  {
    id: "heading",
    phase: "PHASE 04",
    label: "WHERE I'M HEADING",
    headline: ["Deeper.", "More deliberate."],
    body: "The direction is clear: cloud engineering, cybersecurity, AI systems and the infrastructure that makes distributed systems work at scale. Getting there through building, not waiting.",
    accent: "#f59e0b",
    detail: "Cloud Engineering · Cybersecurity · AI Systems · Distributed Infrastructure · Technology Leadership",
  },
];

function ChapterCard({ chapter, index }: { chapter: (typeof CHAPTERS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "start 0.38"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -20 : 20, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, x }} className="relative">
      <article
        className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 lg:gap-10 p-6 lg:p-8 rounded-2xl border border-[#1e2d40] bg-[#0d1117] transition-colors duration-400 hover:border-[#263347]"
        aria-label={chapter.label}
        /* Top accent stroke per chapter */
        style={{ borderTopColor: `${chapter.accent}30` }}
      >
        {/* Left — phase meta */}
        <div className="flex lg:flex-col gap-4 lg:gap-4">
          {/* Number badge */}
          <div
            className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0"
            style={{ borderColor: `${chapter.accent}30`, background: `${chapter.accent}07` }}
            aria-hidden="true"
          >
            <span
              className="font-mono font-bold"
              style={{ fontSize: "0.625rem", color: chapter.accent }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {/* Phase label — elevated to text-[#8b9ab0] and slightly larger */}
            <div
              className="label-mono-sm font-mono"
              style={{ color: chapter.accent, opacity: 0.7 }}
            >
              {chapter.phase}
            </div>
            <div
              className="text-[0.6875rem] font-semibold tracking-wide"
              style={{ color: "#f0f4f8" }}
            >
              {chapter.label}
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div>
          {/* Headline — split across two spans for controlled line break */}
          <h3 className="text-heading-lg font-bold text-[#f0f4f8] mb-4 leading-tight">
            {chapter.headline[0]}{" "}
            <span className="block">{chapter.headline[1]}</span>
          </h3>

          <p className="text-[0.9375rem] text-[#8b9ab0] leading-relaxed mb-5">{chapter.body}</p>

          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-[0.625rem] font-mono tracking-wide"
            style={{ borderColor: `${chapter.accent}25`, color: `${chapter.accent}cc` }}
          >
            {chapter.detail}
          </div>
        </div>
      </article>

      {/* Connector between cards */}
      {index < CHAPTERS.length - 1 && (
        <div className="hidden lg:flex items-center justify-center py-2" aria-hidden="true">
          <div
            className="w-px h-7"
            style={{
              background: `linear-gradient(to bottom, ${chapter.accent}40, ${CHAPTERS[index + 1].accent}40)`,
            }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative section-padding bg-[#0d1117] overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 max-w-2xl"
        >
          <motion.span variants={fadeUp} className="eyebrow">THE JOURNEY</motion.span>
          <motion.h2
            variants={fadeUp}
            id="journey-heading"
            className="text-heading-xl font-bold text-[#f0f4f8] mb-4"
          >
            Learning.{" "}
            <span className="text-[#8b9ab0] font-normal">Building.</span>{" "}
            Leading.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[0.9375rem] text-[#8b9ab0] leading-relaxed">
            Not a linear path. A series of intentional decisions to go deeper, build more and operate in communities where the work is real.
          </motion.p>
        </motion.div>

        {/* Chapters */}
        <div className="max-w-3xl space-y-0">
          {CHAPTERS.map((chapter, i) => (
            <ChapterCard key={chapter.id} chapter={chapter} index={i} />
          ))}
        </div>

        {/* Final strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-3xl flex items-center gap-6"
        >
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(245,158,11,0.3), transparent)" }} />
          <span className="label-mono-sm text-[#2a3a50]">STORY STILL BEING WRITTEN</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(0,212,255,0.3), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
