"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";


const projects = [
  {
    icon: "📊",
    title: "SaaS Analytics Dashboard",
    description: "Real-time metrics dashboard with interactive charts, date range filters, and multi-tenant auth. Built for 10k+ daily active users.",
    tags: ["Next.js 14", "TypeScript", "Recharts", "Shadcn/ui"],
    gradient: "linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#1a1035 100%)",
  },
  {
    icon: "🛒",
    title: "E-Commerce Platform",
    description: "Full-stack storefront with Stripe payments, optimistic UI updates, edge caching, and perfect 100/100 Lighthouse score.",
    tags: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    gradient: "linear-gradient(135deg,#0c1a12 0%,#064e3b 50%,#022c22 100%)",
  },
  {
    icon: "🤖",
    title: "AI Writing Assistant",
    description: "Streaming AI completions with a custom lexical rich-text editor, markdown rendering, and real-time collaboration via Liveblocks.",
    tags: ["React 18", "OpenAI", "Liveblocks", "Lexical"],
    gradient: "linear-gradient(135deg,#130f1a 0%,#4c1d95 50%,#2e1065 100%)",
  },
  {
    icon: "🎵",
    title: "Music Streaming UI",
    description: "Spotify-inspired player with animated waveforms, playlist management, and a custom audio visualizer using the Web Audio API.",
    tags: ["React", "Web Audio", "Framer Motion", "Zustand"],
    gradient: "linear-gradient(135deg,#1c0a00 0%,#7c2d12 50%,#431407 100%)",
  },
  {
    icon: "🗺️",
    title: "Travel Planning App",
    description: "Interactive map-based itinerary builder with offline support (PWA), collaborative trip sharing, and AI destination suggestions.",
    tags: ["Next.js", "MapLibre", "PWA", "Tanstack Query"],
    gradient: "linear-gradient(135deg,#0f1117 0%,#1e293b 50%,#0c4a6e 100%)",
  },
  {
    icon: "🏗️",
    title: "Component Design System",
    description: "Open-source component library with 60+ accessible components, Storybook docs, automated visual regression tests, and full dark mode.",
    tags: ["React", "Radix UI", "Storybook", "Chromatic"],
    gradient: "linear-gradient(135deg,#0a1628 0%,#1e3a5f 50%,#0c2340 100%)",
  },
];

function ProjectCard({ project, delay = 0 }: { project: typeof projects[0]; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(99,102,241,0.15)] hover:-translate-y-1.5 transition-all"
    >
      <div className="h-44 relative overflow-hidden" style={{ background: project.gradient }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold">
            Live Preview ↗
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30">
          {project.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-head text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-purple-400 text-xs font-mono">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href="#" className="px-3.5 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            ↗ Live Demo
          </a>
          <a href="#" className="px-3.5 py-2 rounded-md border border-white/10 bg-transparent text-slate-400 text-sm hover:bg-white/10 hover:text-white transition-all inline-flex items-center gap-2">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Projects section
export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Selected Work" title="Projects I'm Proud Of" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
