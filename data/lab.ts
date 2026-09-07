export type LabStatus = "IDEA" | "EXPERIMENT" | "BUILDING" | "PROTOTYPE" | "PAUSED";

export interface LabItem {
  id: string;
  title: string;
  description: string;
  status: LabStatus;
  tags: string[];
  notes?: string;
}

export const labItems: LabItem[] = [
  {
    id: "self-prompting-ai",
    title: "Self-Prompting AI System",
    description:
      "An AI system that generates its own follow-up prompts based on intermediate outputs, progressively refining its understanding of a problem without human intervention at each step.",
    status: "EXPERIMENT",
    tags: ["AI", "Agents", "LLM"],
    notes: "Exploring prompt chaining architectures and self-evaluation loops.",
  },
  {
    id: "autonomous-cyber-inv",
    title: "Autonomous Cybersecurity Investigator",
    description:
      "AI agent that receives a security alert, decomposes it into investigative sub-questions, gathers evidence and produces a structured incident finding. Extended from the project concept.",
    status: "EXPERIMENT",
    tags: ["AI", "Cybersecurity", "Agents"],
  },
  {
    id: "ai-public-info",
    title: "AI Public Information Assistant",
    description:
      "A conversational AI assistant for surfacing public information, government services, local regulations, civic data, trained to be accurate and citation-aware.",
    status: "IDEA",
    tags: ["AI", "LLM", "Civic Tech"],
  },
  {
    id: "cloud-homelab",
    title: "Cloud Homelab Architecture",
    description:
      "Experimenting with self-hosted cloud-adjacent infrastructure, running services, exploring networking configurations and learning infrastructure-as-code through practice.",
    status: "BUILDING",
    tags: ["Cloud", "Infrastructure", "Networking"],
  },
  {
    id: "security-scanner",
    title: "Lightweight Security Scanner",
    description:
      "A simple tool for scanning local network configurations and surfaces common misconfigurations, primarily for learning and defensive security exploration.",
    status: "PROTOTYPE",
    tags: ["Cybersecurity", "Networking", "Python"],
  },
  {
    id: "automation-workflows",
    title: "Personal Automation Workflows",
    description:
      "A collection of automation scripts and small tools that eliminate repetitive tasks in development workflows, file processing, report generation, deployment helpers.",
    status: "BUILDING",
    tags: ["Automation", "Python", "DevOps"],
  },
];
