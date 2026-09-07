export type ProjectStatus = "live" | "building" | "prototype" | "concept" | "paused";

export interface ArchNode {
  id: string;
  label: string;
  tier: number;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  description: string;
  status: ProjectStatus;
  type?: "experiment" | "research" | "production" | "concept";
  problem: string;
  approach: string;
  architecture: ArchNode[];
  technologies: string[];
  challenges: string[];
  learned: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  accent: string;
}

export const projects: Project[] = [
  {
    id: "securetrack",
    index: "01",
    title: "SecureTrack",
    tagline: "Smart Security Personnel Tracking & Monitoring",
    category: "Software / IoT",
    tags: ["Node.js", "React", "PostgreSQL", "IoT", "Geolocation"],
    description:
      "A system designed to monitor security personnel using wearable technology, location tracking, geofencing and real-time monitoring dashboards — bringing data-driven oversight to physical security operations.",
    status: "building",
    type: "production",
    problem:
      "Security operations often lack real-time visibility into personnel positions, patrol coverage and incident response. Supervisors cannot easily verify that guards are where they should be, and anomalies go undetected until it is too late.",
    approach:
      "Built a full-stack system combining wearable IoT devices for personnel tracking with a live web dashboard. The system ingests location data, enforces geofence boundaries and surfaces alerts when personnel deviate from expected patrol routes.",
    architecture: [
      { id: "wearable", label: "Wearable Device", tier: 0 },
      { id: "gateway", label: "IoT Gateway", tier: 1 },
      { id: "api", label: "REST API (Node/Express)", tier: 2 },
      { id: "db", label: "PostgreSQL", tier: 3 },
      { id: "dashboard", label: "React Dashboard", tier: 2 },
      { id: "alerts", label: "Alert Engine", tier: 3 },
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "React", "IoT / Wearables", "Geolocation API", "WebSockets"],
    challenges: [
      "Handling real-time location data streams at low latency",
      "Designing reliable geofence logic that accounts for GPS drift",
      "Building a dashboard that surfaces critical alerts without noise",
    ],
    learned: [
      "Real-time system design and WebSocket architecture",
      "Tradeoffs between polling and push-based data delivery",
      "The complexity of translating physical-world constraints into software logic",
    ],
    links: {
      github: "[ADD LINK]",
    },
    accent: "#00d4ff",
  },
  {
    id: "butabika",
    index: "02",
    title: "Butabika Ward Reporting System",
    tagline: "Digital Ward Reporting & Management",
    category: "Software / Healthcare",
    tags: ["Python", "Django", "SQLite", "JavaScript"],
    description:
      "A digital system designed to modernise ward reporting workflows at a healthcare facility, replacing manual paper-based processes with structured digital data entry, reporting and record management.",
    status: "prototype",
    type: "production",
    problem:
      "Healthcare facilities running manual, paper-based ward reporting face data quality issues, reporting delays and difficulty generating consistent summaries. Staff time is consumed by administrative work instead of care.",
    approach:
      "Designed and built a Django web application allowing ward staff to capture structured reports digitally. The system includes summary views and simplified data management — improving consistency and reducing administrative overhead.",
    architecture: [
      { id: "browser", label: "Browser Client", tier: 0 },
      { id: "django", label: "Django Application", tier: 1 },
      { id: "views", label: "Views / Templates", tier: 2 },
      { id: "models", label: "Data Models", tier: 2 },
      { id: "sqlite", label: "SQLite Database", tier: 3 },
    ],
    technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
    challenges: [
      "Designing data models that capture complex ward reporting requirements",
      "Ensuring the interface is simple enough for non-technical healthcare staff",
      "Handling sensitive operational data responsibly",
    ],
    learned: [
      "The importance of user research before building healthcare tools",
      "Django's ORM and admin interface as rapid development tools",
      "How software design decisions carry real-world consequences in critical environments",
    ],
    links: {
      github: "[ADD LINK]",
    },
    accent: "#7c3aed",
  },
  {
    id: "kampclean",
    index: "03",
    title: "KampClean",
    tagline: "Garbage Pickup Scheduling for Kampala",
    category: "Software / Urban Tech",
    tags: ["Web App", "Scheduling", "Maps", "Urban Infrastructure"],
    description:
      "A concept application connecting Kampala residents and businesses with structured garbage pickup scheduling — addressing the gap between waste generation and reliable collection in urban areas.",
    status: "concept",
    type: "concept",
    problem:
      "Urban waste management in Kampala faces coordination challenges — residents lack reliable ways to request or schedule pickups, and collectors operate without structured routing. The result is inconsistent service and environmental impact.",
    approach:
      "Designed a scheduling platform where residents register pickup needs, and collectors receive structured route assignments. The system visualises pickup density on a map to optimise routing and surface high-need areas.",
    architecture: [
      { id: "user", label: "Resident / Business", tier: 0 },
      { id: "frontend", label: "Web Frontend", tier: 1 },
      { id: "api", label: "Scheduling API", tier: 2 },
      { id: "routing", label: "Route Engine", tier: 2 },
      { id: "db", label: "Database", tier: 3 },
      { id: "collector", label: "Collector App", tier: 1 },
    ],
    technologies: ["React", "Node.js", "Maps API", "PostgreSQL", "REST API"],
    challenges: [
      "Designing for low-data-usage environments",
      "Building routing logic that handles variable pickup density",
      "Creating a system that works without requiring technical literacy from all users",
    ],
    learned: [
      "How infrastructure problems in urban contexts create software opportunities",
      "The importance of constraint-aware design",
      "Route optimisation fundamentals",
    ],
    links: {},
    accent: "#22c55e",
  },
  {
    id: "autonomous-cyber",
    index: "04",
    title: "Autonomous Cyber Investigation",
    tagline: "AI-Driven Security Incident Reasoning",
    category: "AI / Cybersecurity",
    tags: ["AI Agents", "LLM", "Cybersecurity", "Reasoning Systems"],
    description:
      "An experimental concept exploring how AI agents can investigate security incidents autonomously — reasoning through evidence, generating investigative prompts, gathering contextual information and progressively refining hypotheses toward findings.",
    status: "concept",
    type: "experiment",
    problem:
      "Security incident investigation is time-intensive and expertise-dependent. Analysts must manually correlate alerts, query multiple systems and build a mental model of an evolving incident. The cognitive load is high and response time suffers.",
    approach:
      "Explored an architecture where an AI reasoning agent receives an initial alert, decomposes it into investigative sub-questions, queries simulated evidence sources, refines its hypothesis at each step and produces a structured finding — mimicking how a human analyst reasons through an incident.",
    architecture: [
      { id: "alert", label: "Security Alert", tier: 0 },
      { id: "agent", label: "AI Reasoning Agent", tier: 1 },
      { id: "evidence", label: "Evidence Gatherer", tier: 2 },
      { id: "hypothesis", label: "Hypothesis Engine", tier: 2 },
      { id: "refine", label: "Refinement Loop", tier: 3 },
      { id: "finding", label: "Structured Finding", tier: 4 },
    ],
    technologies: ["LLM / AI APIs", "Python", "Agent Frameworks", "Prompt Engineering", "Security Tooling"],
    challenges: [
      "Getting AI agents to reason coherently across multi-step investigations",
      "Preventing hallucinated evidence in security contexts",
      "Designing feedback loops that improve hypothesis quality",
    ],
    learned: [
      "The potential and limits of LLM reasoning in high-stakes domains",
      "How to structure agentic workflows with clear evidence boundaries",
      "Why explainability is non-negotiable in security tooling",
    ],
    links: {},
    accent: "#f59e0b",
  },
];
