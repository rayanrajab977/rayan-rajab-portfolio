"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Users, Zap } from "lucide-react";
import { experiences } from "@/data/experience";
import { staggerContainer, fadeUp, fadeLeft, viewportOnce } from "@/lib/animations";
import type { ExperienceType } from "@/data/experience";

const TYPE_CONFIG: Record<ExperienceType, { icon: typeof GraduationCap; color: string; label: string }> = {
  education:  { icon: GraduationCap, color: "#00d4ff", label: "EDUCATION"  },
  community:  { icon: Users,         color: "#22c55e", label: "COMMUNITY"  },
  leadership: { icon: Zap,           color: "#7c3aed", label: "LEADERSHIP" },
  work:       { icon: Zap,           color: "#f59e0b", label: "WORK"       },
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative section-padding bg-[#0d1117] overflow-hidden"
      aria-labelledby="experience-heading"
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
          <motion.span variants={fadeUp} className="eyebrow">BEYOND THE CODE</motion.span>
          <motion.h2
            variants={fadeUp}
            id="experience-heading"
            className="text-heading-xl font-bold text-[#f0f4f8] max-w-xl"
          >
            Education, community{" "}
            <span className="text-[#8b9ab0] font-normal">and leadership.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[0.9375rem] text-[#8b9ab0] max-w-lg leading-relaxed">
            Building technology is only part of the story. The rest is about the communities built around it.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Animated vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-[#1e2d40] hidden sm:block"
            aria-hidden="true"
          >
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#00d4ff] to-[#7c3aed] origin-top"
            />
          </div>

          <div className="space-y-10" role="list">
            {experiences.map((exp, i) => {
              const cfg = TYPE_CONFIG[exp.type];
              const Icon = cfg.icon;

              return (
                <motion.article
                  key={exp.id}
                  role="listitem"
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-1 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border bg-[#0d1117] z-10"
                    style={{ borderColor: `${cfg.color}40`, boxShadow: `0 0 14px ${cfg.color}15` }}
                    aria-hidden="true"
                  >
                    <Icon size={14} style={{ color: cfg.color }} strokeWidth={1.5} />
                  </div>

                  {/* Card */}
                  <div className="card-base p-6 rounded-xl">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span
                        className="tag-pill"
                        style={{ color: cfg.color, borderColor: `${cfg.color}35`, background: `${cfg.color}08` }}
                      >
                        {cfg.label}
                      </span>
                      <span className="label-mono-sm text-[#4a5568]">{exp.period}</span>
                      {exp.location && (
                        <span className="label-mono-sm text-[#4a5568]">{exp.location}</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#f0f4f8] mb-0.5">{exp.role}</h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: cfg.color }}>
                      {exp.organization}
                    </p>

                    <p className="text-sm text-[#8b9ab0] leading-relaxed mb-5">{exp.description}</p>

                    {/* Two-col detail — headers lifted from #4a5568 → #8b9ab0 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="label-mono text-[#8b9ab0] mb-3">CONTRIBUTIONS</h4>
                        <ul className="space-y-2">
                          {exp.contributions.map((c, ci) => (
                            <li key={ci} className="flex gap-2.5 text-xs text-[#8b9ab0] leading-relaxed">
                              <span
                                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                                style={{ background: cfg.color }}
                                aria-hidden="true"
                              />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="label-mono text-[#8b9ab0] mb-3">WHAT I LEARNED</h4>
                        <ul className="space-y-2">
                          {exp.learned.map((l, li) => (
                            <li key={li} className="flex gap-2.5 text-xs text-[#8b9ab0] leading-relaxed">
                              <span
                                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-[#7c3aed]"
                                aria-hidden="true"
                              />
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {exp.impact && (
                      <div className="mt-5 pt-4 border-t border-[#1e2d40] flex items-start gap-3">
                        <span className="label-mono-sm text-[#4a5568] mt-0.5 flex-shrink-0">IMPACT</span>
                        <p className="text-xs text-[#f0f4f8] leading-relaxed">{exp.impact}</p>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
