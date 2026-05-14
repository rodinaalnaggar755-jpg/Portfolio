"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";


const experiences = [
  {
    date: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "Vercel-Partner Agency · Remote",
    description: "Led frontend architecture for 8 SaaS products. Migrated a legacy React CRA app to Next.js App Router, improving LCP by 62%. Mentored 3 junior devs. Owned design system used across 4 products.",
    tags: ["Next.js 14", "TypeScript", "Tailwind", "tRPC", "Storybook"],
  },
  {
    date: "2020 — 2022",
    role: "Frontend Developer",
    company: "FinTech Startup · Cairo, EG",
    description: "Built the investor-facing dashboard from scratch. Implemented real-time data with WebSockets, complex charts with D3.js, and accessibility compliance (WCAG 2.1 AA). Reduced bundle size by 45%.",
    tags: ["React", "Redux Toolkit", "D3.js", "WebSockets", "Jest", "WCAG"],
  },
  {
    date: "2023 — 2024",
    role: "Junior Frontend Developer",
    company: "Digital Agency · Freelance",
    description: "Delivered 20+ client websites with pixel-perfect fidelity from Figma designs. First professional exposure to performance optimization, SEO, and responsive design systems.",
    tags: ["React", "SCSS", "Gatsby", "GraphQL", "Figma"],
  },
  {
    date: "2022 — 2025",
    role: "Management Technology and Information Systems",
    company: "PortSaid University · GPA 3.4 / 4.0",
    description: "Graduated with honors. Senior thesis on adaptive UI rendering for low-bandwidth environments. Vice-president of the ACM Student Chapter. Hackathon winner × 3.",
    tags: ["Algorithms", "HCI", "Systems"],
  },
];


function TimelineItem({ item, delay = 0 }: { item: typeof experiences[0]; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="relative pl-10 mb-12"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-1 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.4)]" />

      {/* Dot */}
      <div className="absolute left-[-5px] top-1 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_0_3px_rgba(99,102,241,0.2),0_0_16px_rgba(99,102,241,0.4)]" />

      <div className="text-sm font-mono text-purple-400 mb-1">{item.date}</div>
      <h3 className="font-head text-xl font-bold mb-1">{item.role}</h3>
      <div className="text-blue-400 text-sm font-medium mb-3">{item.company}</div>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-purple-400 text-xs font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// Experience section
export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader label="Experience & Education" title="The Journey" />
        <div className="mt-12">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} item={exp} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
