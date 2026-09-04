export const site = {
  name: "Rabii Luena",
  role: "Frontend Engineer · Product Builder",
  email: "rbluena@gmail.com",
  location: "Nairobi, Kenya",
  links: {
    github: "https://github.com/rbluena",
    linkedin: "https://www.linkedin.com/in/rbluena/",
    portfolio: "https://rabiiluena.com",
    email: "mailto:rbluena@gmail.com",
  },
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  status: "live" | "in-progress" | "shipped";
  statusLabel: string;
  tier: "founded" | "professional";
  bullets?: string[];
  description?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export type Project = {
  index: string;
  name: string;
  category: string;
  description: string;
  /** Replace with a real screenshot path (e.g. "/images/andika.png") when available. */
  image: string | null;
  imageAlt: string;
  technologies: string[];
  links: { label: string; href: string }[];
  highlights: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Andika AI",
    category: "PRODUCT",
    description:
      "An AI writing assistant that lives inside your browser. Generate, rewrite, expand, and improve text without leaving the application you're working in.",
    image: null,
    imageAlt: "Andika AI browser extension interface shown inside a browser window",
    technologies: [
      "TypeScript",
      "React",
      "Chrome Extension APIs",
      "Shadow DOM",
      "Convex",
      "Vercel AI SDK",
      "OpenRouter",
    ],
    links: [
      { label: "Live product", href: "https://andika.site" },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/andika-ai/mpfdamjlkbalibemcfifpaleplkmfloo",
      },
    ],
    highlights: [
      {
        title: "Shadow DOM",
        body: "Isolated extension UI that works across host websites.",
      },
      {
        title: "Multi-model AI",
        body: "Provider-agnostic routing using OpenRouter and Vercel AI SDK.",
      },
      {
        title: "Quick Command Bar",
        body: "Fast, keyboard-driven interface for generating and editing text.",
      },
    ],
  },
  {
    index: "02",
    name: "Gapwise",
    category: "PRODUCT",
    description:
      "An AI-powered product discovery platform that turns real user frustrations into potential business opportunities.",
    image: null,
    imageAlt: "Gapwise product discovery dashboard shown inside a browser window",
    technologies: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Google Gemini",
      "Vercel AI SDK",
      "Tailwind CSS",
    ],
    links: [{ label: "Live product", href: "https://gapwise.site" }],
    highlights: [
      {
        title: "AI research pipeline",
        body: "Gemini extracts structured insights from unstructured conversations.",
      },
      {
        title: "Insight clustering",
        body: "Recurring problems are grouped into meaningful themes.",
      },
      {
        title: "Real-time collaboration",
        body: "Convex synchronizes shared ideation state.",
      },
      {
        title: "Product validation",
        body: "Discovery → clustering → validation → collaboration.",
      },
    ],
  },
];

export const otherProjects = [
  {
    name: "Visula",
    description:
      "Visual schema design and migration tooling with AI-assisted ETL operations for headless CMS platforms.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Zustand"],
    href: "#",
  },
];

export const expertise = [
  {
    domain: "UI Engineering",
    description:
      "Component architecture, responsive interfaces, accessibility, design systems, interaction quality, and frontend performance.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "React Native"],
  },
  {
    domain: "API & Systems Design",
    description:
      "API design, data modeling, state management, backend workflows, and scalable application architecture.",
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL", "Convex"],
  },
  {
    domain: "AI & LLM Integration",
    description:
      "AI-powered product experiences, provider abstraction, structured generation, prompt systems, and streaming workflows.",
    tags: ["Vercel AI SDK", "OpenRouter", "Google Gemini", "Claude API"],
  },
  {
    domain: "Browser Engineering",
    description:
      "Browser-native applications and integrations that operate inside existing web applications.",
    tags: ["Chrome Extension APIs", "Content Scripts", "Shadow DOM", "Browser APIs"],
  },
];

export const experience = [
  {
    company: "Andika AI",
    title: "Technical Founder",
    period: "Sept 2025 — May 2026",
    stack: ["Next.js", "Convex", "OpenRouter"],
    description:
      "Built the full product solo: Chrome Extension APIs, React UI, Convex backend, and multi-provider AI routing via OpenRouter and the Vercel AI SDK.",
  },
  {
    company: "Finotify",
    title: "Full-stack Developer",
    period: "Jun 2024 — Nov 2024",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Zapier"],
    description:
      "Worked across frontend and backend systems, connecting product workflows with APIs, automation, and persistent data.",
  },
  {
    company: "Bejamas",
    title: "Software Developer",
    period: "Sep 2021 — Apr 2022",
    stack: ["GatsbyJS", "GraphQL", "Contentful", "TDD"],
    description: null,
  },
  {
    company: "AM2 Studio",
    title: "Frontend Developer",
    period: "Jul 2018 — Mar 2020",
    stack: ["React", "Redux Saga", "Google Maps API", "TDD"],
    description: null,
  },
];

export const principles = [
  "Usability",
  "Accessibility",
  "Performance",
  "Security",
  "Testability",
  "Scalability",
  "Developer Experience",
];

export const principleDetails = [
  {
    title: "Architecture",
    body: "Prefer simple boundaries and explicit responsibilities. Complexity should be introduced intentionally.",
  },
  {
    title: "Product",
    body: "Technical decisions should improve the product, not merely make the implementation more sophisticated.",
  },
  {
    title: "Maintainability",
    body: "Code should be understandable and safe for the next engineer to modify.",
  },
  {
    title: "Performance",
    body: "Performance is part of product quality, especially when building interactive applications.",
  },
];

export const FOUNDED_PROJECTS: ProjectData[] = [
  {
    id: "andika-ai",
    name: "Andika AI",
    tagline: "AI writing assistant that lives in every browser input field",
    status: "live",
    statusLabel: "Live",
    tier: "founded",
    bullets: [
      "UI injected via Shadow DOM — isolated from host page styles, works on any website",
      "Provider-agnostic AI routing via OpenRouter and Vercel AI SDK — Claude, Gemini, GPT-4",
      "Real-time state sync across devices via Convex",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Shadow DOM",
      "Vercel AI SDK",
      "OpenRouter",
      "Convex",
      "Tailwind CSS",
    ],
    liveUrl: "https://andika.ai",
    githubUrl: "https://github.com/rbluena/andika-ai",
  },
  {
    id: "gapwise",
    name: "Gapwise",
    tagline: "From Reddit pain points to validated business ideas",
    status: "live",
    statusLabel: "Live",
    tier: "founded",
    bullets: [
      "AI pipeline using Google Gemini to extract structured insight from unstructured threads",
      "Real-time collaborative ideation via Convex — live state, no page refresh",
      "Full loop: discovery → clustering → validation → collaboration",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Google Gemini",
      "Convex",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://gapwise.io",
    githubUrl: "https://github.com/rbluena/gapwise",
  },
];

export const PROFESSIONAL_PROJECTS: ProjectData[] = [
  {
    id: "finotify",
    name: "Finotify",
    tagline: "Financial automation platform integrating Zapier for real-time account sync",
    description: "Financial automation platform integrating Zapier for real-time account sync",
    status: "shipped",
    statusLabel: "Shipped",
    tier: "professional",
    techStack: ["React", "TypeScript", "Zapier API", "Tailwind CSS", "Node.js"],
    liveUrl: "https://finotify.com",
    githubUrl: "https://github.com/rbluena/finotify",
  },
  {
    id: "visula",
    name: "Visula",
    tagline: "Visual schema design and migration tool with AI-assisted ETL for headless CMSs",
    description: "Visual schema design and migration tool with AI-assisted ETL for headless CMSs",
    status: "shipped",
    statusLabel: "Shipped",
    tier: "professional",
    techStack: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://visula.dev",
    githubUrl: "https://github.com/rbluena/visula",
  },
  {
    id: "greenrush",
    name: "GreenRush",
    tagline: "Cart, checkout, and Google Maps delivery integration for a medical delivery platform",
    description:
      "Cart, checkout, and Google Maps delivery integration for a medical delivery platform",
    status: "shipped",
    statusLabel: "Shipped",
    tier: "professional",
    techStack: ["React", "TypeScript", "Google Maps API", "Stripe", "Tailwind CSS"],
    liveUrl: "https://greenrush.delivery",
    githubUrl: "https://github.com/rbluena/greenrush",
  },
];
