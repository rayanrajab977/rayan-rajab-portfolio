"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "project" | "link" | "text";

const CURSOR_LABELS: Partial<Record<CursorState, string>> = {
  project: "VIEW",
  link: "OPEN",
};

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring following
  const springX = useSpring(mouseX, { stiffness: 500, damping: 40, mass: 0.3 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40, mass: 0.3 });

  // Slightly laggier follower for the ring
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 30, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 30, mass: 0.5 });

  useEffect(() => {
    setMounted(true);

    // Hide on touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      // Determine cursor state from element
      const target = e.target as HTMLElement;
      const closest = target.closest(
        "[data-cursor], a, button, [role='button'], [tabindex='0']"
      ) as HTMLElement | null;

      if (!closest) {
        setState("default");
        return;
      }

      const cursorAttr = closest.getAttribute("data-cursor");
      if (cursorAttr === "project") { setState("project"); return; }
      if (cursorAttr === "link")    { setState("link");    return; }

      const tag = closest.tagName.toLowerCase();
      if (tag === "a")                   { setState("link");  return; }
      if (tag === "button")              { setState("hover"); return; }
      if (closest.getAttribute("role") === "button") { setState("project"); return; }

      setState("hover");
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY]);

  // Don't render until mounted (avoids hydration mismatch)
  // Also hide on touch-only devices
  if (!mounted) return null;

  const label = CURSOR_LABELS[state];
  const isExpanded = state !== "default";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      {/* Dot — tight follower */}
      <motion.div
        className="absolute rounded-full bg-[#00d4ff] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: 6,
          height: 6,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Ring — laggier follower */}
      <motion.div
        className="absolute rounded-full border border-[#00d4ff]/50 flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: isExpanded ? (label ? 64 : 36) : 24,
          height: isExpanded ? (label ? 64 : 36) : 24,
          borderColor: isExpanded
            ? "rgba(0,212,255,0.7)"
            : "rgba(0,212,255,0.4)",
          backgroundColor: isExpanded
            ? "rgba(0,212,255,0.06)"
            : "transparent",
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.15 }}
            className="text-[#00d4ff] font-mono font-bold"
            style={{ fontSize: "0.45rem", letterSpacing: "0.1em" }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
