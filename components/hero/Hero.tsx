"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, User } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const WORD_DELAY_BASE = 0.55;
const WORDS = ["I", "BUILD", "THINGS", "THAT", "MATTER."];

function AnimatedWord({
  word,
  delay,
  accent,
}: {
  word: string;
  delay: number;
  accent?: boolean;
}) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`inline-block ${accent ? "text-[#00d4ff]" : ""}`}
      >
        {word}
      </motion.span>
    </span>
  );
}

// ─── Photo placeholder ───────────────────────────────────────────
// To add your photo: place the image file in /public/ (e.g. /public/rayan.jpg)
// then change PHOTO_SRC below from null to "/rayan.jpg"
const PHOTO_SRC: string | null = "/rayan.jpeg";

function PhotoPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex-shrink-0 hidden lg:flex flex-col items-center gap-4"
    >
      {/* Outer glow frame */}
      <div className="relative">
        {/* Animated border ring */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-[3px] rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.35) 0%, rgba(124,58,237,0.2) 50%, rgba(0,212,255,0.1) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Main photo / placeholder area */}
        <div
          className="relative w-[280px] xl:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border border-[#1e2d40]"
          style={{ background: "#0d1117" }}
        >
          {PHOTO_SRC ? (
            /* ── Real photo — swap PHOTO_SRC above ── */
            <Image
              src={PHOTO_SRC}
              alt="Rayan Rajab"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1280px) 280px, 320px"
            />
          ) : (
            /* ── Placeholder shown until photo is added ── */
            <>
              {/* Subtle grid inside placeholder */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,212,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.04) 1px,transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden="true"
              />

              {/* Radial glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,212,255,0.07) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Center icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/05 flex items-center justify-center"
                >
                  <User size={28} className="text-[#4a5568]" strokeWidth={1} />
                </motion.div>

                <div className="text-center px-6">
                  <p className="label-mono-sm text-[#2a3a50] mb-1">ADD YOUR PHOTO</p>
                  <p
                    className="font-mono text-[#1e2d40]"
                    style={{ fontSize: "0.5625rem" }}
                  >
                    /public/rayan.jpg
                  </p>
                </div>
              </div>

              {/* Corner coordinate decorations */}
              <div
                className="absolute top-3 left-3 label-mono-sm text-[#1e2d40]"
                aria-hidden="true"
              >
                00°N
              </div>
              <div
                className="absolute top-3 right-3 label-mono-sm text-[#1e2d40]"
                aria-hidden="true"
              >
                00°E
              </div>
              <div
                className="absolute bottom-3 left-3 label-mono-sm text-[#1e2d40]"
                aria-hidden="true"
              >
                KLA
              </div>
            </>
          )}

          {/* Bottom name strip — always visible */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3"
            style={{
              background:
                "linear-gradient(to top, rgba(8,10,15,0.95) 0%, rgba(8,10,15,0.6) 60%, transparent 100%)",
            }}
          >
            <p className="text-xs font-semibold text-[#f0f4f8]">Rayan Rajab</p>
            <p className="label-mono-sm" style={{ color: "#00d4ff", opacity: 0.7 }}>
              Technology Builder
            </p>
          </div>
        </div>

        {/* Scan line across photo */}
        <motion.div
          animate={{ y: ["-100%", "400%"] }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "linear",
          }}
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)" }}
          aria-hidden="true"
        />
      </div>

      {/* Status badge below photo */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e2d40] bg-[#0d1117]"
      >
        <span className="status-dot" />
        <span className="label-mono text-[#22c55e]">AVAILABLE</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [typedStatus, setTypedStatus] = useState("");
  const statusFull = "BUILDING";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTypedStatus(statusFull.slice(0, i));
        if (i >= statusFull.length) clearInterval(interval);
      }, 80);
      return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () =>
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080a0f]"
      aria-label="Hero — Rayan Rajab"
    >
      {/* ── Background layers ─────────────────────── */}
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, transparent, #080a0f)" }}
      />
      <div className="absolute inset-0" aria-hidden="true">
        <ParticleField />
      </div>

      {/* Scan line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute top-0 left-0 right-0 h-px overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3.5, delay: 0.5, ease: "linear", repeat: Infinity, repeatDelay: 6 }}
          className="absolute top-0 left-0 w-1/3 h-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.6), transparent)",
          }}
        />
      </motion.div>

      {/* ── Main content ──────────────────────────── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 section-container flex flex-col justify-center min-h-screen pt-16 pb-16"
      >
        {/* Two-column layout: text left, photo right */}
        <div className="flex items-center justify-between gap-12 xl:gap-20">

          {/* ── Left column — all existing text content ── */}
          <div className="flex-1 min-w-0 max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="flex items-center gap-2">
                <span className="status-dot" />
                <span className="label-mono-cyan">SYSTEM STATUS: {typedStatus}</span>
                <span
                  className="inline-block w-[2px] h-[0.65rem] bg-[#00d4ff] ml-0.5"
                  style={{ animation: "blink 1.2s step-end infinite" }}
                />
              </div>
              <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#1e2d40]">
                <span className="label-mono">CLOUD / CYBERSECURITY / AI / WEB DEV</span>
              </div>
            </motion.div>

            {/* Headline */}
            <h1
              className="font-extrabold tracking-tight mb-6 flex flex-wrap gap-x-[0.3em] gap-y-0"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 5rem)", lineHeight: "0.95", letterSpacing: "-0.035em" }}
              aria-label="I Build Things That Matter"
            >
              {WORDS.map((word, i) => (
                <AnimatedWord
                  key={word}
                  word={word}
                  delay={WORD_DELAY_BASE + i * 0.1}
                  accent={word === "MATTER."}
                />
              ))}
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-[#8b9ab0] max-w-[560px] leading-relaxed mb-8"
            >
              I&apos;m{" "}
              <span className="text-[#f0f4f8] font-medium">Ssekibuule Rayan Rajab</span>, a
              technology builder exploring cloud computing, cybersecurity, AI and software
              engineering through real-world projects and experiments.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <button onClick={scrollToWork} className="btn-primary group">
                Explore my work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                Let&apos;s connect
              </button>
            </motion.div>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
              className="flex flex-wrap gap-2 mt-8"
              aria-label="Technology focus areas"
            >
              {[
                "Cloud Computing",
                "Cybersecurity",
                "Artificial Intelligence",
                "Software Engineering",
                "Networking",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-[0.7rem] font-mono tracking-wider border border-[#1e2d40] text-[#4a5568] rounded-full hover:border-[#00d4ff]/30 hover:text-[#8b9ab0] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — photo placeholder ── */}
          <PhotoPlaceholder />
        </div>

        {/* Corner coordinates — only on xl where photo isn't taking the space */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="absolute bottom-24 right-8 hidden lg:block"
          aria-hidden="true"
        >
          <span className="label-mono text-[0.55rem]">0.3136°N / 32.5811°E</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          onClick={scrollToWork}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4a5568] hover:text-[#8b9ab0] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]/50 rounded"
          aria-label="Scroll to work section"
        >
          <span className="label-mono text-[0.55rem]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
