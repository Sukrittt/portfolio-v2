export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Framer Motion",
      "GSAP",
      "Redux",
      "Jotai",
      "Three.js",
      "Web Components",
    ],
  },
  {
    name: "UI / Design",
    skills: [
      "Responsive Design",
      "WCAG Compliance",
      "Cross-browser Testing",
      "Design Fidelity",
      "Accessibility",
      "Animation",
      "Shadcn",
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "tRPC",
      "Prisma",
      "Drizzle",
      "Firebase",
      "Redis",
      "MongoDB",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Git",
      "AWS",
      "Docker",
      "Microservices",
      "Postman",
      "Swagger",
      "Clerk",
      "Vercel",
      "Netlify",
      "CI/CD",
    ],
  },
];
