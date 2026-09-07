"use client";

import { motion } from "framer-motion";

interface Props {
  variant?: "node" | "line" | "arrow";
  /** Accent color for the node dot. Defaults to cyan. */
  color?: "cyan" | "violet" | "green" | "amber";
  /** Whether the node pulses with a glow ring. */
  glow?: boolean;
}

const COLOR_MAP = {
  cyan:   "#00d4ff",
  violet: "#7c3aed",
  green:  "#22c55e",
  amber:  "#f59e0b",
};

export default function SectionDivider({
  variant = "node",
  color = "cyan",
  glow = false,
}: Props) {
  const accent = COLOR_MAP[color];

  return (
    <div
      className="relative flex flex-col items-center"
      aria-hidden="true"
    >
      {/* Line down */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="w-px h-10 origin-top"
        style={{ background: `linear-gradient(to bottom, transparent, ${accent}20)` }}
      />

      {variant === "node" && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <div
            className="w-7 h-7 rounded-full border bg-[#080a0f] flex items-center justify-center z-10"
            style={{ borderColor: `${accent}25` }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: `${accent}90` }}
            />
          </div>
          {glow && (
            <motion.div
              animate={{ scale: [1, 1.9, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-7 h-7 rounded-full border pointer-events-none"
              style={{ borderColor: `${accent}30` }}
            />
          )}
        </motion.div>
      )}

      {variant === "line" && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-px origin-center"
          style={{ background: `linear-gradient(to right, transparent, ${accent}30, transparent)` }}
        />
      )}

      {variant === "arrow" && (
        <motion.svg
          initial={{ opacity: 0, y: -3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.18 }}
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
        >
          <path
            d="M1 1L4.5 5L8 1"
            stroke={`${accent}40`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      )}

      {/* Line down */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-px h-10 origin-top"
        style={{ background: `linear-gradient(to bottom, ${accent}20, transparent)` }}
      />
    </div>
  );
}
