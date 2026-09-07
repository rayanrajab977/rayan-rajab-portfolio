export interface Idea {
  id: string;
  title: string;
  excerpt: string;
  topic: string;
  date: string;
  readTime: string;
  available: boolean;
}

export const ideas: Idea[] = [
  {
    id: "cloud-learning",
    title: "What I'm Actually Learning About Cloud",
    excerpt:
      "Beyond certifications and tutorials, what it actually means to understand cloud architecture by building things and breaking them.",
    topic: "CLOUD",
    date: "November 2026",
    readTime: "~5 min",
    available: false,
  },
  {
    id: "cyber-lessons",
    title: "Cybersecurity Is Not a Feature",
    excerpt:
      "Lessons from exploring security concepts: why security cannot be bolted on after the fact, and what that means for builders.",
    topic: "CYBERSECURITY",
    date: "2026 October",
    readTime: "~6 min",
    available: false,
  },
  {
    id: "building-ai",
    title: "Building With AI vs. Using AI",
    excerpt:
      "There is a meaningful difference between prompting an AI tool and building systems that use AI as a component. Why that distinction matters.",
    topic: "AI",
    date: "2026 Dec",
    readTime: "~7 min",
    available: false,
  },
  {
    id: "failed-projects",
    title: "Lessons from Things That Didn't Work",
    excerpt:
      "The projects that failed, the assumptions that were wrong and what each one taught me about building software in the real world.",
    topic: "BUILDING",
    date: "2027 Jan",
    readTime: "~8 min",
    available: false,
  },
  {
    id: "tech-uganda",
    title: "Building Technology in Uganda",
    excerpt:
      "What it means to build technology in a context where infrastructure constraints, connectivity realities and local problems shape every design decision.",
    topic: "CONTEXT",
    date: "2027 Feb",
    readTime: "~6 min",
    available: false,
  },
  {
    id: "student-builders",
    title: "On Being a Student Who Builds",
    excerpt:
      "The gap between what universities teach and what building real systems requires, and how to close it while still in school.",
    topic: "GROWTH",
    date: "2027 Mar",
    readTime: "~5 min",
    available: false,
  },
];
