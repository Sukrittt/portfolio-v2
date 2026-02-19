export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: "full-time" | "internship" | "freelance";
  bullets: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Sumeru",
    role: "Frontend Developer",
    location: "Bengaluru",
    period: "June 2025 – Present",
    type: "full-time",
    bullets: [
      "Built and launched the complete web platform (Next.js, Tailwind, tRPC, NestJS, MySQL), delivering 4+ core modules and owning all frontend–backend integrations.",
      "Led 90% of admin panel development (Next.js, Refine, MUI), implementing RBAC and an availability-calendar system that streamlined consultant slot management.",
      "Owned full-stack development across 3 codebases, designing APIs with NestJS/Prisma, managing databases, and implementing RabbitMQ-based microservices while assisting mobile and DevOps teams with AWS (ECS, ECR, Amplify), CI/CD, and backend integrations.",
    ],
    tech: ["Next.js", "tRPC", "NestJS", "MySQL", "Prisma", "RabbitMQ", "AWS", "MUI"],
  },
  {
    company: "Metaverse Ventures",
    role: "Full Stack Engineer Intern",
    location: "Remote",
    period: "Nov 2023 – May 2025",
    type: "internship",
    bullets: [
      "Migrated state from Redux to Jotai, simplifying logic and boosting UI responsiveness by 20%.",
      "Built performant, accessible UIs in Next.js + Tailwind with WCAG-compliant components.",
      "Integrated Solana Wallet and Web3 UI flows for seamless onboarding and secure transactions.",
      "Advocated scalable components and modular design for maintainable micro frontends.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Jotai", "Solana", "Web3", "TypeScript"],
  },
  {
    company: "Privilon Technologies",
    role: "Frontend Developer",
    location: "Remote",
    period: "Feb 2023 – Aug 2023",
    type: "internship",
    bullets: [
      "Developed real-time dashboards in Next.js, integrating high-frequency APIs for consistent UX.",
      "Built 10+ reusable components with Material UI and implemented Chart.js for real-time data.",
      "Set up Firebase Auth & Firestore integration, reducing latency and enhancing security.",
    ],
    tech: ["Next.js", "Material UI", "Chart.js", "Firebase", "TypeScript"],
  },
];
