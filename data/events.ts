export interface CommunityEvent {
  id: string;
  name: string;
  topic: string;
  audience: string;
  role: string;
  period: string;
  takeaway: string;
  tag: string;
}

export const events: CommunityEvent[] = [
  {
    id: "aws-event-1",
    name: "AWS Student Builders Meetup",
    topic: "Building with KIRO",
    audience: "Student developers and technology enthusiasts",
    role: "Participant & Contributor",
    period: "21st , Aug, 2026",
    takeaway:
      "Deepened understanding of cloud architecture and how AWS services interconnect to form scalable systems.",
    tag: "CLOUD",
  },
  {
    id: "aws-event-2",
    name: "AWS  Student Community Day Kampala",
    topic: "Cloud + Connect + Commune",
    audience: "Student builders and early-career technologists",
    role: "Attendee & Community Contributor",
    period: "SAT, 07, 11, 2026",
    takeaway:
      "Connected with builders using cloud technology to solve real problems in African contexts. Reinforced the importance of community in technology growth.",
    tag: "COMMUNITY",
  },
  {
    id: "campus-tech",
    name: "Campus Technology Session",
    topic: "Introduction to Cloud & Cybersecurity for Students",
    audience: "Fellow UICT students",
    role: "Organiser / Facilitator",
    period: "24th JUNE 2026",
    takeaway:
      "Facilitated peer learning in cloud and security concepts. Learned how to translate technical topics for mixed-experience audiences.",
    tag: "LEADERSHIP",
  },
  {
    id: "alx-outreach",
    name: "ALX Africa Uganda Meet & Greet",
    topic: "Technology Education Pathways",
    audience: "Prospective technology students",
    role: "Ambassador",
    period: "1st April, 2026",
    takeaway:
      "Helped prospective students understand how to access technology education and what paths are available in the African tech ecosystem.",
    tag: "OUTREACH",
  },
];
