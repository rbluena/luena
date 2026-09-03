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
      { label: "Live product", href: "#" },
      { label: "Chrome Web Store", href: "#" },
      { label: "Source code", href: "#" },
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
        title: "Real-time sync",
        body: "Convex keeps prompts and preferences synchronized.",
      },
      {
        title: "Custom workflows",
        body: "Users can define prompts and personalize their AI assistant.",
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
    links: [
      { label: "Live product", href: "#" },
      { label: "Source code", href: "#" },
    ],
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
    stack: ["GatsbyJS", "GraphQL", "Contentful"],
    description: null,
  },
  {
    company: "GreenRush.com",
    title: "Frontend Developer",
    period: "Jul 2018 — Mar 2020",
    stack: ["React", "Redux Saga", "Google Maps API"],
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
