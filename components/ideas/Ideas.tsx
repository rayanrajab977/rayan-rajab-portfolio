"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { ideas } from "@/data/ideas";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const TOPIC_COLORS: Record<string, string> = {
  CLOUD:        "#00d4ff",
  CYBERSECURITY:"#7c3aed",
  AI:           "#f59e0b",
  BUILDING:     "#22c55e",
  CONTEXT:      "#e879f9",
  GROWTH:       "#8b9ab0",
};

export default function Ideas() {
  return (
    <section
      id="ideas"
      className="relative section-padding bg-[#080a0f] overflow-hidden"
      aria-labelledby="ideas-heading"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow">THINKING OUT LOUD</motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              variants={fadeUp}
              id="ideas-heading"
              className="text-heading-xl font-bold text-[#f0f4f8] max-w-xl"
            >
              Ideas worth{" "}
              <span className="text-[#8b9ab0] font-normal">writing down.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-[#8b9ab0] max-w-xs leading-relaxed md:text-right">
              Notes, lessons and perspectives on building technology, coming soon.
            </motion.p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
        >
          {ideas.map((idea) => {
            const topicColor = TOPIC_COLORS[idea.topic] ?? "#8b9ab0";
            const isUnavailable = !idea.available;

            return (
              <motion.article
                key={idea.id}
                variants={fadeUp}
                role="listitem"
                className="group relative rounded-xl border border-[#1e2d40] bg-[#0d1117] p-5 flex flex-col gap-3 cursor-default"
                /* Dim unavailable cards at rest, full opacity on hover */
                style={{ opacity: isUnavailable ? 0.6 : 1 }}
                whileHover={{
                  y: -3,
                  opacity: 1,
                  boxShadow: `0 0 0 1px ${topicColor}20, 0 10px 36px rgba(0,0,0,0.5)`,
                  borderColor: `${topicColor}22`,
                }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Top color rule — accent per topic */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-xl"
                  style={{ background: `linear-gradient(90deg, ${topicColor}45, transparent)` }}
                  aria-hidden="true"
                />

                {/* Topic + read time */}
                <div className="flex items-center justify-between">
                  {/* Unified tag-pill */}
                  <span
                    className="tag-pill"
                    style={{
                      color: topicColor,
                      borderColor: `${topicColor}28`,
                      background: `${topicColor}07`,
                    }}
                  >
                    {idea.topic}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#4a5568]">
                    <Clock size={9} />
                    <span className="label-mono-sm">{idea.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#f0f4f8] leading-snug group-hover:text-white transition-colors duration-200">
                  {idea.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-[#8b9ab0] leading-relaxed flex-1">{idea.excerpt}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#1e2d40]">
                  <span className="label-mono-sm text-[#4a5568]">{idea.date}</span>
                  {idea.available ? (
                    <button className="flex items-center gap-1 text-[0.6875rem] font-medium text-[#00d4ff] transition-all duration-200 group-hover:gap-1.5">
                      Read <ArrowUpRight size={11} />
                    </button>
                  ) : (
                    /* Clearly styled unavailable state — dashed pill */
                    <span
                      className="tag-pill"
                      style={{ color: "#2a3a50", borderColor: "#1e2d40", borderStyle: "dashed" }}
                    >
                      COMING SOON
                    </span>
                  )}
                </div>

                {/* Hover tint — raised from 05 to 10 (was functionally invisible) */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${topicColor}10 0%, transparent 65%)`,
                  }}
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Coming soon note */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-10 p-5 rounded-xl border border-dashed border-[#1e2d40] text-center"
        >
          <p className="text-xs text-[#4a5568] leading-relaxed max-w-md mx-auto">
            Writing starts when the ideas have had enough time to develop. These topics are queued, published as thinking becomes clear enough to be worth sharing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
