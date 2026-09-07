import type { Variants } from "framer-motion";

// ─── Easing Curves ────────────────────────────────────────
export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const;
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

// ─── Duration Tokens ─────────────────────────────────────
export const DURATION = {
  fast: 0.2,
  medium: 0.4,
  slow: 0.7,
  xslow: 1.0,
} as const;

// ─── Shared Variants ─────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.medium, ease: EASE_PREMIUM },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE_PREMIUM },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

// ─── Stagger Container ────────────────────────────────────
export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// ─── Viewport defaults ───────────────────────────────────
export const viewportOnce = { once: true, margin: "-80px" };
