export type ExperienceType = "education" | "community" | "leadership" | "work";

export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: ExperienceType;
  period: string;
  location?: string;
  description: string;
  contributions: string[];
  learned: string[];
  impact?: string;
}

export const experiences: Experience[] = [
  {
    id: "uict",
    role: "Computer Science Student",
    organization: "UICT",
    type: "education",
    period: "2024 Aug — Present",
    location: "Kampala, Uganda",
    description:
      "Computer Science student at the Uganda Institute of Information and Communications Technology, building technical foundations across software engineering, networking, databases, systems and security.",
    contributions: [
      "Built real-world projects spanning web systems, networking and data management",
      "Organised and participated in student technology activities",
      "Applied academic concepts to practical problem-solving through independent projects",
    ],
    learned: [
      "Core CS fundamentals: algorithms, data structures, systems, networking",
      "How to move from theory to working implementations",
      "The value of building things beyond the curriculum",
    ],
    impact: "Student with a strong project portfolio spanning multiple technical domains.",
  },
  {
    id: "alx",
    role: "Student Recruitment & Community Ambassador",
    organization: "ALX Africa",
    type: "community",
    period: "2026 Mar — Present",
    location: "Uganda",
    description:
      "Served as a recruitment and community ambassador for ALX Africa, connecting prospective students with technology education opportunities and supporting community initiatives.",
    contributions: [
      "Recruited and guided prospective students through the ALX application process",
      "Represented ALX Africa",
      "Contributed to building local awareness of technology education pathways",
    ],
    learned: [
      "How to communicate the value of technology education to diverse audiences",
      "Community building and outreach at scale",
      "The importance of access and representation in technology",
    ],
    impact: "Contributed to expanding technology education access in Uganda.",
  },
  {
    id: "aws-community",
    role: "Core Team Member, Student Builder & Community Contributor",
    organization: "AWS Student Builder Community at UICT",
    type: "leadership",
    period: "2026 June — Present",
    location: "Uganda",
    description:
      "Active participant in AWS student and builder communities, attending events, exploring cloud infrastructure, contributing to community knowledge-sharing and helping organise student technology activities.",
    contributions: [
      "Attended and contributed to AWS-related student events and workshops",
      "Explored cloud architecture, AWS services and deployment concepts",
      "Helped organise student builder sessions and technology discussions",
      "Participated in community knowledge-sharing on cloud and emerging tech",
    ],
    learned: [
      "AWS cloud fundamentals and architecture principles",
      "How cloud communities operate and create value",
      "Technology leadership within student builder contexts",
    ],
    impact: "Active contributor to the local AWS student builder ecosystem.",
  },
];
