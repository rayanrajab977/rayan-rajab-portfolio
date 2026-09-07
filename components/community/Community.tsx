"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { events } from "@/data/events";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const TAG_COLORS: Record<string, string> = {
  CLOUD:      "#00d4ff",
  COMMUNITY:  "#22c55e",
  LEADERSHIP: "#7c3aed",
  OUTREACH:   "#f59e0b",
};

export default function Community() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section
      id="community"
      className="relative section-padding bg-[#080a0f] overflow-hidden"
      aria-labelledby="community-heading"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <motion.span variants={fadeUp} className="eyebrow">BUILDING WITH PEOPLE</motion.span>
            <motion.h2
              variants={fadeUp}
              id="community-heading"
              className="text-heading-xl font-bold text-[#f0f4f8]"
            >
              Technology is a{" "}
              <span className="text-[#8b9ab0] font-normal">team sport.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-[0.9375rem] text-[#8b9ab0] max-w-md leading-relaxed">
              Events, workshops, student activities and community initiatives — where ideas move from individual to collective.
            </motion.p>
          </div>

          {/* Scroll controls */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1e2d40] text-[#4a5568] hover:text-[#f0f4f8] hover:border-[rgba(0,212,255,0.3)] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1e2d40] text-[#4a5568] hover:text-[#f0f4f8] hover:border-[rgba(0,212,255,0.3)] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={15} />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll track */}
        <div className="relative">
          {/* Edge fades */}
          <div
            className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none transition-opacity duration-300"
            style={{ background: "linear-gradient(to right, #080a0f, transparent)", opacity: canScrollLeft ? 1 : 0 }}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #080a0f, transparent)" }}
            aria-hidden="true"
          />

          <div
            ref={scrollRef}
            onScroll={updateScroll}
            className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
            role="list"
            aria-label="Community events"
          >
            {events.map((event, i) => {
              const tagColor = TAG_COLORS[event.tag] ?? "#8b9ab0";
              return (
                <motion.article
                  key={event.id}
                  role="listitem"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.09, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  /* y-lift + stronger border on hover */
                  whileHover={{
                    y: -3,
                    boxShadow: `0 0 0 1px ${tagColor}25, 0 10px 36px rgba(0,0,0,0.5)`,
                  }}
                  style={{
                    borderColor: "#1e2d40",
                    transition: "border-color 0.25s",
                  }}
                  className="flex-shrink-0 w-[300px] sm:w-[320px] rounded-xl border bg-[#0d1117] p-5 flex flex-col gap-4"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${tagColor}28`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#1e2d40";
                  }}
                >
                  {/* Top accent bar — 1px color top border per tag */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px rounded-t-xl"
                    style={{ background: `linear-gradient(90deg, ${tagColor}50, transparent)` }}
                    aria-hidden="true"
                  />

                  {/* Tag + period */}
                  <div className="flex items-center justify-between">
                    <span
                      className="tag-pill"
                      style={{ color: tagColor, borderColor: `${tagColor}30`, background: `${tagColor}08` }}
                    >
                      {event.tag}
                    </span>
                    <span className="label-mono-sm text-[#4a5568]">{event.period}</span>
                  </div>

                  {/* Name + topic */}
                  <div>
                    <h3 className="text-sm font-bold text-[#f0f4f8] leading-snug mb-1.5">
                      {event.name}
                    </h3>
                    <p className="text-xs font-mono" style={{ color: tagColor }}>
                      {event.topic}
                    </p>
                  </div>

                  {/* Details */}
                  <dl className="grid grid-cols-2 gap-x-3 gap-y-3">
                    <div>
                      <dt className="label-mono text-[#8b9ab0] mb-1">AUDIENCE</dt>
                      <dd className="text-xs text-[#8b9ab0] leading-snug">{event.audience}</dd>
                    </div>
                    <div>
                      <dt className="label-mono text-[#8b9ab0] mb-1">MY ROLE</dt>
                      <dd className="text-xs text-[#8b9ab0] leading-snug">{event.role}</dd>
                    </div>
                  </dl>

                  {/* Takeaway */}
                  <div className="pt-3 border-t border-[#1e2d40] flex gap-2.5">
                    <Users size={11} className="text-[#4a5568] mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-[#8b9ab0] leading-relaxed italic">{event.takeaway}</p>
                  </div>
                </motion.article>
              );
            })}

            {/* More coming placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="flex-shrink-0 w-[220px] rounded-xl border border-dashed border-[#1e2d40] flex flex-col items-center justify-center gap-3 text-center p-6"
            >
              <div className="w-7 h-7 rounded-full border border-[#1e2d40] flex items-center justify-center text-[#4a5568]">
                <span className="text-base leading-none">+</span>
              </div>
              <p className="text-xs text-[#4a5568] leading-relaxed">
                More events added over time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
