"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, AlertTriangle } from "lucide-react";
import type { Project } from "@/data/projects";
import ArchDiagram from "./ArchDiagram";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const STATUS_LABELS: Record<Project["status"], string> = {
  live:      "LIVE",
  building:  "BUILDING",
  prototype: "PROTOTYPE",
  concept:   "CONCEPT / RESEARCH",
  paused:    "PAUSED",
};

export default function ProjectModal({ project, onClose }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!project) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, handleKey]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[rgba(4,6,10,0.88)] backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-[4%] bottom-[4%] z-[70] mx-auto max-w-3xl rounded-2xl border border-[#1e2d40] bg-[#0d1117] overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b border-[#1e2d40] flex-shrink-0"
              style={{ borderBottomColor: `${project.accent}25` }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="label-mono text-[0.55rem]"
                  style={{ color: project.accent }}
                >
                  PROJECT {project.index}
                </span>
                <span
                  className="label-mono text-[0.55rem] px-2 py-1 rounded border"
                  style={{ borderColor: `${project.accent}30`, color: project.accent }}
                >
                  {STATUS_LABELS[project.status]}
                </span>
                {(project.type === "experiment" || project.type === "research") && (
                  <span className="flex items-center gap-1.5 label-mono text-[0.55rem] text-[#f59e0b] px-2 py-1 rounded border border-[#f59e0b]/30">
                    <AlertTriangle size={9} />
                    EXPERIMENT / RESEARCH CONCEPT
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#4a5568] hover:text-[#f0f4f8] transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50"
                aria-label="Close case study"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto">
              {/* Header */}
              <div
                className="px-6 pt-8 pb-6 border-b border-[#1e2d40]"
                style={{ background: `radial-gradient(ellipse at top left, ${project.accent}06 0%, transparent 60%)` }}
              >
                <h2 className="text-heading-lg font-bold text-[#f0f4f8] mb-2">{project.title}</h2>
                <p className="text-[#8b9ab0] text-sm leading-relaxed max-w-xl">{project.tagline}</p>
              </div>

              <div className="px-6 py-8 space-y-10">
                {/* Problem */}
                <section>
                  <h3 className="label-mono-cyan mb-3">THE PROBLEM</h3>
                  <p className="text-sm text-[#8b9ab0] leading-relaxed">{project.problem}</p>
                </section>

                {/* Approach */}
                <section>
                  <h3 className="label-mono-cyan mb-3">MY APPROACH</h3>
                  <p className="text-sm text-[#8b9ab0] leading-relaxed">{project.approach}</p>
                </section>

                {/* Architecture */}
                <section>
                  <h3 className="label-mono-cyan mb-5">ARCHITECTURE</h3>
                  <div className="p-5 rounded-xl border border-[#1e2d40] bg-[#080a0f]">
                    <ArchDiagram nodes={project.architecture} accent={project.accent} />
                  </div>
                </section>

                {/* Technologies */}
                <section>
                  <h3 className="label-mono-cyan mb-3">TECHNOLOGIES</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono border"
                        style={{
                          borderColor: `${project.accent}30`,
                          color: project.accent,
                          background: `${project.accent}08`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Challenges + Learned — two column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <section>
                    <h3 className="label-mono-cyan mb-3">CHALLENGES</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="flex gap-2.5 text-xs text-[#8b9ab0] leading-relaxed">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: project.accent }}
                            aria-hidden="true"
                          />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3 className="label-mono-cyan mb-3">WHAT I LEARNED</h3>
                    <ul className="space-y-2">
                      {project.learned.map((l, i) => (
                        <li key={i} className="flex gap-2.5 text-xs text-[#8b9ab0] leading-relaxed">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "#7c3aed" }}
                            aria-hidden="true"
                          />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Links */}
                {(project.links.github || project.links.live || project.links.demo) && (
                  <section>
                    <h3 className="label-mono-cyan mb-3">LINKS</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.links.github && project.links.github !== "[ADD LINK]" && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs px-4 py-2 flex items-center gap-2"
                        >
                          <Github size={13} /> GitHub
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-xs px-4 py-2 flex items-center gap-2"
                        >
                          <ExternalLink size={13} /> Live
                        </a>
                      )}
                    </div>
                  </section>
                )}

                {/* Current status note */}
                <section className="p-4 rounded-xl border border-[#1e2d40] bg-[#080a0f]">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: project.accent }}
                      aria-hidden="true"
                    />
                    <span className="label-mono-cyan text-[0.55rem]">CURRENT STATUS</span>
                  </div>
                  <p className="text-xs text-[#8b9ab0]">
                    {project.status === "building" &&
                      "Actively in development. Architecture is defined and core functionality is being built."}
                    {project.status === "prototype" &&
                      "Core functionality demonstrated. Needs refinement before production readiness."}
                    {project.status === "concept" &&
                      "Conceptual and exploratory stage. Design and architecture defined; implementation ongoing."}
                    {project.status === "live" && "Live and operational."}
                    {project.status === "paused" && "Development paused. Will be revisited."}
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
