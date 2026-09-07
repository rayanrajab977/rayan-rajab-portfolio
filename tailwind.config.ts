import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base
        void: "#080a0f",
        charcoal: "#0d1117",
        surface: "#111827",
        "surface-2": "#1a2234",
        border: "#1e2d40",
        "border-2": "#263347",

        // Text
        "text-primary": "#f0f4f8",
        "text-secondary": "#8b9ab0",
        "text-muted": "#4a5568",

        // Accents
        cyan: {
          DEFAULT: "#00d4ff",
          dim: "#0099cc",
          glow: "rgba(0,212,255,0.15)",
          subtle: "rgba(0,212,255,0.06)",
        },
        violet: {
          DEFAULT: "#7c3aed",
          dim: "#5b21b6",
          subtle: "rgba(124,58,237,0.08)",
        },

        // Status
        green: "#22c55e",
        amber: "#f59e0b",
        red: "#ef4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        display: ["clamp(3rem,8vw,7rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-sm": ["clamp(2rem,5vw,4.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "heading-xl": ["clamp(1.75rem,4vw,3rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "heading-lg": ["clamp(1.5rem,3vw,2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      spacing: {
        section: "clamp(5rem,10vw,9rem)",
        "section-sm": "clamp(3rem,6vw,5rem)",
      },
      maxWidth: {
        site: "1280px",
        prose: "720px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scan-line": "scanLine 4s linear infinite",
        "blink": "blink 1.2s step-end infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        scanLine: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(200%)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16,1,0.3,1)",
        "out-expo": "cubic-bezier(0.19,1,0.22,1)",
      },
      boxShadow: {
        "glow-cyan": "0 0 40px rgba(0,212,255,0.12), 0 0 80px rgba(0,212,255,0.06)",
        "glow-cyan-sm": "0 0 20px rgba(0,212,255,0.15)",
        "glow-violet": "0 0 40px rgba(124,58,237,0.12)",
        card: "0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 1px 0 rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
