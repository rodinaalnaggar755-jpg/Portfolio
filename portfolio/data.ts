export const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const techStack = [
  { icon: "⬛", label: "Next.js 14" },
  { icon: "🔷", label: "TypeScript" },
  { icon: "🌊", label: "Tailwind CSS" },
  { icon: "⚛️", label: "React 18" },
  { icon: "🎬", label: "Framer Motion" },
  { icon: "🎨", label: "Shadcn/ui" },
  { icon: "🗄️", label: "Prisma" },
  { icon: "⚡", label: "tRPC" },
];

export const stats = [
  { value: 5, label: "Years Exp." },
  { value: 40, label: "Projects Shipped" },
  { value: 12, label: "Happy Clients" },
  { value: 98, label: "Lighthouse Score" },
];

export const experiences = [
  {
    date: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "Vercel-Partner Agency · Remote",
    description:
      "Led frontend architecture for 8 SaaS products. Migrated a legacy React CRA app to Next.js App Router, improving LCP by 62%. Mentored 3 junior devs. Owned design system used across 4 products.",
    tags: ["Next.js 14", "TypeScript", "Tailwind", "tRPC", "Storybook", "Turborepo"],
  },
  {
    date: "2020 — 2022",
    role: "Frontend Developer",
    company: "FinTech Startup · Cairo, EG",
    description:
      "Built the investor-facing dashboard from scratch. Implemented real-time data with WebSockets, complex charts with D3.js, and accessibility compliance (WCAG 2.1 AA). Reduced bundle size by 45%.",
    tags: ["React", "Redux Toolkit", "D3.js", "WebSockets", "Jest", "WCAG"],
  },
  {
    date: "2019 — 2020",
    role: "Junior Frontend Developer",
    company: "Digital Agency · Freelance",
    description:
      "Delivered 20+ client websites with pixel-perfect fidelity from Figma designs. First professional exposure to performance optimization, SEO, and responsive design systems.",
    tags: ["React", "SCSS", "Gatsby", "GraphQL", "Figma"],
  },
  {
    date: "2015 — 2019",
    role: "B.Sc. Computer Science",
    company: "Cairo University · GPA 3.8 / 4.0",
    description:
      "Graduated with honors. Senior thesis on adaptive UI rendering for low-bandwidth environments. Vice-president of the ACM Student Chapter. Hackathon winner × 3.",
    tags: ["Algorithms", "HCI", "Systems"],
  },
];

export const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time metrics dashboard with interactive charts, date range filters, and multi-tenant auth. Built for 10k+ daily active users.",
    tags: ["Next.js 14", "TypeScript", "Recharts", "Shadcn/ui"],
    emoji: "📊",
    gradient: "from-slate-900 via-indigo-950 to-purple-950",
    demo: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack storefront with Stripe payments, optimistic UI updates, edge caching, and a perfect 100/100 Lighthouse score.",
    tags: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    emoji: "🛒",
    gradient: "from-slate-900 via-emerald-950 to-teal-950",
    demo: "#",
    github: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "Streaming AI completions with a custom Lexical rich-text editor, markdown rendering, and real-time collaboration via Liveblocks.",
    tags: ["React 18", "OpenAI", "Liveblocks", "Lexical"],
    emoji: "🤖",
    gradient: "from-slate-900 via-violet-950 to-purple-950",
    demo: "#",
    github: "#",
  },
  {
    title: "Music Streaming UI",
    description:
      "Spotify-inspired player with animated waveforms, playlist management, and a custom audio visualizer using the Web Audio API.",
    tags: ["React", "Web Audio", "Framer Motion", "Zustand"],
    emoji: "🎵",
    gradient: "from-slate-900 via-orange-950 to-red-950",
    demo: "#",
    github: "#",
  },
  {
    title: "Travel Planning App",
    description:
      "Interactive map-based itinerary builder with offline support (PWA), collaborative trip sharing, and AI destination suggestions.",
    tags: ["Next.js", "MapLibre", "PWA", "Tanstack Query"],
    emoji: "🗺️",
    gradient: "from-slate-900 via-sky-950 to-blue-950",
    demo: "#",
    github: "#",
  },
  {
    title: "Component Design System",
    description:
      "Open-source component library with 60+ accessible components, Storybook docs, automated visual regression tests, and full dark mode.",
    tags: ["React", "Radix UI", "Storybook", "Chromatic"],
    emoji: "🏗️",
    gradient: "from-slate-900 via-blue-950 to-indigo-950",
    demo: "#",
    github: "#",
  },
];

export const skillCategories = [
  {
    icon: "⚛️",
    iconBg: "bg-blue-500/10",
    title: "Frontend Core",
    skills: [
      { name: "React / Next.js", pct: 98 },
      { name: "TypeScript", pct: 95 },
      { name: "Tailwind CSS", pct: 99 },
      { name: "HTML / CSS / JS", pct: 99 },
    ],
  },
  {
    icon: "🎬",
    iconBg: "bg-purple-500/10",
    title: "Animation & UI",
    skills: [
      { name: "Framer Motion", pct: 92 },
      { name: "Shadcn / Radix UI", pct: 96 },
      { name: "D3.js / Recharts", pct: 80 },
      { name: "Figma → Code", pct: 94 },
    ],
  },
  {
    icon: "⚡",
    iconBg: "bg-emerald-500/10",
    title: "Performance & DX",
    skills: [
      { name: "Core Web Vitals", pct: 95 },
      { name: "Testing (Jest/Playwright)", pct: 85 },
      { name: "CI/CD / GitHub Actions", pct: 82 },
      { name: "Accessibility (WCAG)", pct: 90 },
    ],
  },
  {
    icon: "🗄️",
    iconBg: "bg-amber-500/10",
    title: "Backend & Data",
    skills: [
      { name: "Node.js / tRPC", pct: 78 },
      { name: "PostgreSQL / Prisma", pct: 75 },
      { name: "GraphQL / REST", pct: 80 },
      { name: "Vercel / AWS", pct: 83 },
    ],
  },
];

export const contactLinks = [
  { icon: "✉️", label: "alex@example.com", href: "mailto:alex@example.com" },
  { icon: "💼", label: "linkedin.com/in/alexcarter", href: "#" },
  { icon: "🐙", label: "github.com/alexcarter", href: "#" },
  { icon: "🐦", label: "twitter.com/alexcarter_dev", href: "#" },
];
