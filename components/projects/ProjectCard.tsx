"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Cpu, Bot } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

const STATUS_STYLES: Record<Project["status"], { label: string; color: string }> = {
  live:      { label: "LIVE",      color: "#22c55e" },
  building:  { label: "BUILDING",  color: "#00d4ff" },
  prototype: { label: "PROTOTYPE", color: "#f59e0b" },
  concept:   { label: "CONCEPT",   color: "#8b9ab0" },
  paused:    { label: "PAUSED",    color: "#4a5568" },
};

const TYPE_ICONS = {
  experiment: Bot,
  research:   Bot,
  production: GitBranch,
  concept:    Cpu,
};

// Per-project abstract SVG visualizations
function ProjectVisual({ id, accent }: { id: string; accent: string }) {
  if (id === "securetrack") {
    return (
      <svg viewBox="0 0 240 140" className="w-full h-full" aria-hidden="true">
        {/* Grid */}
        <defs>
          <pattern id="sg" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0L0 0 0 20" fill="none" stroke={`${accent}15`} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="240" height="140" fill={`url(#sg)`} />
        {/* Route path */}
        <motion.path
          d="M 30 110 Q 60 80 80 90 Q 110 100 130 70 Q 150 40 180 60 Q 200 75 210 50"
          fill="none"
          stroke={`${accent}60`}
          strokeWidth="1.5"
          strokeDasharray="6 3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />
        {/* Moving marker */}
        {[
          { cx: 80, cy: 90, delay: 0 },
          { cx: 130, cy: 70, delay: 0.15 },
          { cx: 180, cy: 60, delay: 0.3 },
        ].map(({ cx, cy, delay }, i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="5"
            fill={`${accent}30`}
            stroke={accent}
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {/* Geofence circle */}
        <motion.circle
          cx="130" cy="70" r="22"
          fill="none"
          stroke={`${accent}25`}
          strokeWidth="1"
          strokeDasharray="3 3"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
        {/* Status blips */}
        {[{ x: 30, y: 25 }, { x: 200, y: 30 }, { x: 110, y: 115 }].map(({ x, y }, i) => (
          <motion.rect
            key={i}
            x={x} y={y} width={28} height={8} rx="2"
            fill={`${accent}12`}
            stroke={`${accent}30`}
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 + i * 0.1 }}
          />
        ))}
      </svg>
    );
  }

  if (id === "butabika") {
    return (
      <svg viewBox="0 0 240 140" className="w-full h-full" aria-hidden="true">
        <defs>
          <pattern id="bg" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0L0 0 0 20" fill="none" stroke={`${accent}12`} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="240" height="140" fill={`url(#bg)`} />
        {/* Dashboard bars */}
        {[
          { x: 20, h: 55, delay: 0.2 },
          { x: 55, h: 80, delay: 0.35 },
          { x: 90, h: 45, delay: 0.5 },
          { x: 125, h: 70, delay: 0.65 },
          { x: 160, h: 90, delay: 0.8 },
          { x: 195, h: 60, delay: 0.95 },
        ].map(({ x, h, delay }, i) => (
          <motion.rect
            key={i}
            x={x} y={120 - h} width="22" height={h} rx="2"
            fill={`${accent}20`}
            stroke={`${accent}50`}
            strokeWidth="0.5"
            initial={{ scaleY: 0, originY: "100%" }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${x + 11}px 120px` }}
          />
        ))}
        {/* Baseline */}
        <line x1="15" y1="120" x2="225" y2="120" stroke={`${accent}20`} strokeWidth="0.5" />
        {/* Status indicators */}
        {[{ x: 20, y: 15 }, { x: 80, y: 15 }, { x: 140, y: 15 }].map(({ x, y }, i) => (
          <motion.circle
            key={i}
            cx={x + 4} cy={y + 4} r="3"
            fill={i === 0 ? "#22c55e" : `${accent}40`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + i * 0.1 }}
          />
        ))}
      </svg>
    );
  }

  if (id === "kampclean") {
    return (
      <svg viewBox="0 0 240 140" className="w-full h-full" aria-hidden="true">
        <defs>
          <pattern id="kg" width="24" height="24" patternUnits="userSpaceOnUse">
            <rect width="24" height="24" fill="none" stroke={`${accent}10`} strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="240" height="140" fill={`url(#kg)`} />
        {/* Route segments */}
        {[
          { d: "M 40 100 L 80 70 L 130 85 L 170 55 L 210 70", delay: 0.3 },
        ].map(({ d, delay }, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={`${accent}50`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay, ease: "easeInOut" }}
          />
        ))}
        {/* Stop nodes */}
        {[
          { cx: 40, cy: 100 },
          { cx: 80, cy: 70 },
          { cx: 130, cy: 85 },
          { cx: 170, cy: 55 },
          { cx: 210, cy: 70 },
        ].map(({ cx, cy }, i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r="6"
            fill={`${accent}20`}
            stroke={accent}
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.18, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {/* Label chips */}
        {[{ x: 28, y: 112 }, { x: 120, y: 97 }, { x: 198, y: 82 }].map(({ x, y }, i) => (
          <motion.rect
            key={i}
            x={x} y={y} width="24" height="7" rx="2"
            fill={`${accent}15`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6 + i * 0.1 }}
          />
        ))}
      </svg>
    );
  }

  // autonomous-cyber — investigation graph
  return (
    <svg viewBox="0 0 240 140" className="w-full h-full" aria-hidden="true">
      <defs>
        <pattern id="cg" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0L0 0 0 16" fill="none" stroke={`${accent}10`} strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="240" height="140" fill={`url(#cg)`} />
      {/* Flow nodes */}
      {[
        { x: 20, y: 60, label: "ALERT" },
        { x: 70, y: 40, label: "EVIDENCE" },
        { x: 120, y: 70, label: "HYPOTHESIS" },
        { x: 170, y: 45, label: "INVESTIGATE" },
        { x: 215, y: 70, label: "FINDING" },
      ].map(({ x, y, label }, i) => (
        <motion.g
          key={label}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <circle cx={x} cy={y} r="10" fill={`${accent}15`} stroke={accent} strokeWidth="1" />
          <text
            x={x} y={y + 20}
            textAnchor="middle"
            fontSize="5"
            fill={`${accent}70`}
            fontFamily="monospace"
          >
            {label}
          </text>
        </motion.g>
      ))}
      {/* Connection arrows */}
      {[
        { x1: 30, y1: 60, x2: 60, y2: 45 },
        { x1: 80, y1: 43, x2: 110, y2: 65 },
        { x1: 130, y1: 68, x2: 160, y2: 50 },
        { x1: 180, y1: 48, x2: 205, y2: 65 },
      ].map(({ x1, y1, x2, y2 }, i) => (
        <motion.line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={`${accent}35`}
          strokeWidth="1"
          strokeDasharray="3 2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + i * 0.2, duration: 0.4 }}
        />
      ))}
      {/* Pulse on last node */}
      <motion.circle
        cx="215" cy="70" r="16"
        fill="none"
        stroke={`${accent}30`}
        strokeWidth="1"
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </svg>
  );
}

interface Props {
  project: Project;
  index: number;
  onOpen: (id: string) => void;
}

export default function ProjectCard({ project, index, onOpen }: Props) {
  const status = STATUS_STYLES[project.status];
  const TypeIcon = TYPE_ICONS[project.type ?? "production"];

  return (
    <motion.article
      variants={fadeUp}
      className="group relative rounded-2xl border border-[#1e2d40] bg-[#0d1117] overflow-hidden cursor-pointer hover:border-[rgba(0,212,255,0.2)] transition-all duration-400"
      style={{
        transition: "border-color 0.35s, box-shadow 0.35s, transform 0.35s",
      }}
      whileHover={{
        y: -4,
        boxShadow: `0 0 0 1px ${project.accent}18, 0 12px 48px rgba(0,0,0,0.6)`,
      }}
      onClick={() => onOpen(project.id)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(project.id)}
      tabIndex={0}
      role="button"
      data-cursor="project"
      aria-label={`View ${project.title} case study`}
    >
      {/* Visual area */}
      <div
        className="relative h-44 overflow-hidden border-b border-[#1e2d40]"
        style={{ background: `radial-gradient(ellipse at center, ${project.accent}08 0%, #0d1117 70%)` }}
      >
        <div className="absolute inset-0 p-4">
          <ProjectVisual id={project.id} accent={project.accent} />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(0,0,0,0.45)]">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
            style={{
              borderColor: `${project.accent}50`,
              color: project.accent,
              background: `${project.accent}10`,
            }}
          >
            VIEW CASE STUDY
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Index */}
        <div className="absolute top-3 left-4 label-mono text-[0.55rem] opacity-30">
          PROJECT {project.index}
        </div>

        {/* Type badge */}
        {project.type === "experiment" && (
          <div className="absolute top-3 right-4 flex items-center gap-1.5 px-2 py-1 rounded border border-[#f59e0b]/30 bg-[#f59e0b]/08">
            <TypeIcon size={9} className="text-[#f59e0b]" />
            <span className="label-mono text-[0.5rem] text-[#f59e0b]">EXPERIMENT</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Status + category row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="label-mono text-[0.55rem]"
            style={{ color: status.color }}
          >
            ● {status.label}
          </span>
          <span className="label-mono text-[0.55rem] text-[#4a5568]">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#f0f4f8] mb-1 group-hover:text-white transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-[0.75rem] text-[#8b9ab0] mb-4 leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[0.6rem] font-mono border border-[#1e2d40] text-[#4a5568] group-hover:border-[#263347] transition-colors duration-200"
            >
              {t}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded text-[0.6rem] font-mono text-[#4a5568]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Bottom arrow */}
        <div className="mt-4 pt-4 border-t border-[#1e2d40] flex items-center justify-between">
          <span className="text-[0.7rem] text-[#4a5568] font-mono">
            {project.index} / {project.title.toUpperCase()}
          </span>
          <ArrowUpRight
            size={14}
            className="text-[#4a5568] group-hover:text-[#00d4ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
        aria-hidden="true"
      />
    </motion.article>
  );
}
