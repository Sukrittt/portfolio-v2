export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  live?: string;
  stars?: number;
  period?: string;
}

export const projects: Project[] = [
  {
    slug: "limetta",
    title: "Limetta",
    tagline: "Finance management app",
    description:
      "Next.js expense tracking app with multiple account management, money transfers, and dues tracking.",
    highlights: [
      "Multiple account management",
      "Money transfers between accounts",
      "Dues tracking system",
      "57 GitHub stars",
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    github: "https://github.com/sukrittt/Limetta",
    stars: 57,
  },
  {
    slug: "spitha-diamonds",
    title: "Spitha Diamonds",
    tagline: "Jewelry eCommerce platform",
    description:
      "Full-stack jewelry platform with SSR and Edge Functions, improving load times by 25% and SEO by 30+.",
    highlights: [
      "SSR & Edge Functions for 25% faster load times",
      "SEO improvements of 30+",
      "Secure modular admin panel",
      "Inventory, orders, and appointments management",
    ],
    tech: ["Next.js", "TypeScript", "Edge Functions", "Tailwind CSS"],
    live: "https://spithadiamonds.vercel.app",
    period: "June 2024 – Nov 2024",
  },
  {
    slug: "claspr",
    title: "Claspr",
    tagline: "AI-powered classroom tool",
    description:
      "AI classroom tool with 10+ interactive features including AI assistant, folder org system, and productivity shortcuts.",
    highlights: [
      "AI-powered assistant",
      "Folder organization system",
      "Productivity shortcuts",
      "40% faster load speeds with optimized data fetch",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/Sukrittt/claspr",
    live: "https://claspr.vercel.app",
    period: "Jan 2024 – June 2024",
  },
];
