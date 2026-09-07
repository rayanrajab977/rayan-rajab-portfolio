"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DOMAINS = [
  { id: "cloud",    label: "CLOUD",    angle: -90,  description: "Infrastructure, deployment, AWS exploration" },
  { id: "security", label: "SECURITY", angle: -18,  description: "Defensive & offensive security, tooling" },
  { id: "ai",       label: "AI",       angle:  54,  description: "Intelligent systems, agents, automation" },
  { id: "software", label: "SOFTWARE", angle: 126,  description: "Web apps, APIs, databases, architecture" },
  { id: "networks", label: "NETWORKS", angle: 198,  description: "Networking, VoIP, infrastructure" },
];

const RADIUS = 110;
const toRad = (deg: number) => (deg * Math.PI) / 180;

export default function IntersectionOrb() {
  const [active, setActive] = useState<string | null>(null);
  const activeItem = DOMAINS.find((d) => d.id === active);

  return (
    <div className="relative flex items-center justify-center w-full" style={{ height: 320 }}>
      {/* SVG layer — orbit + connection lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 320 320"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <circle
          cx="160" cy="160" r={RADIUS}
          fill="none"
          stroke="rgba(0,212,255,0.07)"
          strokeWidth="1"
          strokeDasharray="3 7"
        />
        {DOMAINS.map((d) => {
          const x = 160 + RADIUS * Math.cos(toRad(d.angle));
          const y = 160 + RADIUS * Math.sin(toRad(d.angle));
          const isActive = active === d.id;
          return (
            <line
              key={d.id}
              x1="160" y1="160" x2={x} y2={y}
              stroke={isActive ? "rgba(0,212,255,0.45)" : "rgba(0,212,255,0.08)"}
              strokeWidth={isActive ? 1 : 0.5}
              style={{ transition: "stroke 0.25s, stroke-width 0.25s" }}
            />
          );
        })}
      </svg>

      {/* Domain nodes */}
      {DOMAINS.map((d) => {
        const x = 50 + ((RADIUS * Math.cos(toRad(d.angle))) / 160) * 50;
        const y = 50 + ((RADIUS * Math.sin(toRad(d.angle))) / 160) * 50;
        const isActive = active === d.id;

        return (
          <button
            key={d.id}
            onMouseEnter={() => setActive(d.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(d.id)}
            onBlur={() => setActive(null)}
            onClick={() => setActive(isActive ? null : d.id)}
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            className="absolute group"
            aria-label={`${d.label}: ${d.description}`}
            aria-pressed={isActive}
            /* Visible focus ring instead of outline-none */
          >
            <motion.div
              animate={{
                scale: isActive ? 1.12 : 1,
                borderColor: isActive ? "rgba(0,212,255,0.75)" : "rgba(0,212,255,0.18)",
                backgroundColor: isActive ? "rgba(0,212,255,0.1)" : "rgba(0,212,255,0.03)",
              }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center w-[60px] h-[60px] rounded-full border
                         ring-offset-[#080a0f] group-focus-visible:ring-2 group-focus-visible:ring-[#00d4ff]/60 group-focus-visible:ring-offset-2"
              style={{ borderColor: "rgba(0,212,255,0.18)" }}
            >
              <span
                className="font-mono font-bold leading-tight text-center px-1"
                style={{
                  fontSize: "0.475rem",
                  letterSpacing: "0.1em",
                  color: isActive ? "#00d4ff" : "#4a5568",
                  transition: "color 0.22s",
                }}
              >
                {d.label}
              </span>
            </motion.div>

            {/* Ripple on active */}
            {isActive && (
              <motion.div
                initial={{ scale: 0.85, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-[#00d4ff]/30 pointer-events-none"
              />
            )}
          </button>
        );
      })}

      {/* Center BUILD node */}
      <motion.div
        animate={{
          boxShadow: active
            ? "0 0 36px rgba(0,212,255,0.2), 0 0 0 1px rgba(0,212,255,0.28)"
            : "0 0 16px rgba(0,212,255,0.06), 0 0 0 1px rgba(0,212,255,0.1)",
        }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-[#0d1117] border border-[#00d4ff]/15"
        aria-hidden="true"
      >
        <span
          className="font-mono tracking-[0.22em] text-[#4a5568] mb-0.5"
          style={{ fontSize: "0.5rem" }}
        >
          AT THE
        </span>
        <span className="text-[0.9375rem] font-bold tracking-[0.12em] text-[#00d4ff]">
          BUILD
        </span>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0, 0.25] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-[#00d4ff]/20 pointer-events-none"
        />
      </motion.div>

      {/* Description tooltip */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-9 left-0 right-0 text-center pointer-events-none"
            aria-live="polite"
          >
            <span className="text-[0.75rem] text-[#8b9ab0]">{activeItem.description}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
