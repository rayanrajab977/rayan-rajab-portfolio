"use client";

import { motion } from "framer-motion";
import { Globe, Server, Database, Cpu, Wifi, Bot, GitBranch, Shield, Monitor } from "lucide-react";
import type { ArchNode } from "@/data/projects";

interface Props {
  nodes: ArchNode[];
  accent: string;
}

/**
 * Maps node label keywords → Lucide icons for semantic clarity.
 * Falls back to Server for anything unrecognised.
 */
function iconForNode(label: string) {
  const l = label.toLowerCase();
  if (l.includes("browser") || l.includes("client") || l.includes("frontend") || l.includes("react") || l.includes("dashboard")) return Monitor;
  if (l.includes("database") || l.includes("sqlite") || l.includes("postgres") || l.includes("db")) return Database;
  if (l.includes("api") || l.includes("rest") || l.includes("express") || l.includes("django") || l.includes("views")) return Server;
  if (l.includes("agent") || l.includes("ai") || l.includes("llm") || l.includes("hypothesis") || l.includes("reasoning")) return Bot;
  if (l.includes("gateway") || l.includes("wearable") || l.includes("iot") || l.includes("device")) return Wifi;
  if (l.includes("alert") || l.includes("security") || l.includes("finding")) return Shield;
  if (l.includes("route") || l.includes("routing") || l.includes("engine")) return Cpu;
  if (l.includes("model") || l.includes("backend")) return GitBranch;
  if (l.includes("frontend") || l.includes("web")) return Globe;
  return Server;
}

export default function ArchDiagram({ nodes, accent }: Props) {
  const tiers = nodes.reduce<Record<number, ArchNode[]>>((acc, node) => {
    if (!acc[node.tier]) acc[node.tier] = [];
    acc[node.tier].push(node);
    return acc;
  }, {});

  const tierKeys = Object.keys(tiers).map(Number).sort();

  return (
    <div className="w-full overflow-x-auto" aria-label="Architecture diagram">
      <div className="min-w-[280px] py-2">
        {tierKeys.map((tier, ti) => (
          <div key={tier} className="flex flex-col items-center">
            {/* Nodes in this tier */}
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {tiers[tier].map((node, ni) => {
                const Icon = iconForNode(node.label);
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 10, scale: 0.93 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: ti * 0.16 + ni * 0.07,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg border"
                    style={{
                      borderColor: `${accent}35`,
                      backgroundColor: `${accent}07`,
                      minWidth: "120px",
                    }}
                  >
                    <Icon
                      size={11}
                      style={{ color: `${accent}90`, flexShrink: 0 }}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span
                      className="text-[0.6875rem] font-mono font-medium tracking-wide"
                      style={{ color: accent }}
                    >
                      {node.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Connector to next tier */}
            {ti < tierKeys.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                  delay: (ti + 1) * 0.16,
                  duration: 0.28,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center my-1.5"
                style={{ transformOrigin: "top" }}
                aria-hidden="true"
              >
                <div className="w-px h-5" style={{ background: `${accent}35` }} />
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                  <path
                    d="M0 0 L4 5 L8 0"
                    stroke={`${accent}55`}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
