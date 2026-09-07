"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openProject = (id: string) => {
    setActiveProject(projects.find((p) => p.id === id) ?? null);
  };

  return (
    <>
      <section
        id="work"
        className="relative section-padding bg-[#080a0f] overflow-hidden"
        aria-labelledby="projects-heading"
      >
        <div className="divider mb-0" aria-hidden="true" />

        <div className="section-container">
          {/* Header */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              THINGS I&apos;VE BUILT
            </motion.span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <motion.h2
                variants={fadeUp}
                id="projects-heading"
                className="text-heading-xl font-bold text-[#f0f4f8]"
              >
                Selected work.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-sm text-[#8b9ab0] max-w-xs leading-relaxed md:text-right"
              >
                Each one represents a real problem, a deliberate decision, and something learned.
                Click any project to read the full case study.
              </motion.p>
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            role="list"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onOpen={openProject} />
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-[#1e2d40] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <p className="text-xs text-[#4a5568] max-w-md leading-relaxed">
              More experiments and work-in-progress projects live in{" "}
              <button
                onClick={() => document.getElementById("lab")?.scrollIntoView({ behavior: "smooth" })}
                className="text-[#8b9ab0] hover:text-[#00d4ff] underline underline-offset-2 transition-colors"
              >
                The Lab
              </button>
              .
            </p>
            {/* Placeholder guard — don't render a broken href */}
            <a
              href="https://github.com/rayanrajab977"
              className="btn-secondary text-xs px-4 py-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile (add real link)"
              title="https://github.com/rayanrajab977"
            >
              View GitHub
            </a>
          </motion.div>
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
