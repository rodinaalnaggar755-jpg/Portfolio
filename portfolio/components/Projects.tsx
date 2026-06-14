"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const projects = [
  {
    img: "/assets/gym.png",
    title: "Gym Website",
    description:
      "A modern, fully responsive fitness platform featuring dynamic workout programs, membership plans, trainer profiles, and an interactive BMI calculator with smooth user experience.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    gradient: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 50%, #1a1a1a 100%)",
    LiveDemo: "https://gym-website-de6p.vercel.app/",
    github: "https://github.com/rodinaalnaggar755-jpg/GYM-Website",
  },
  {
    img: "/assets/egyptos.png",
    title: "Egyptos",
    description:
      "A comprehensive tourism platform showcasing Egypt's rich history, cultural heritage, and top destinations. Features interactive travel guides, historical insights, and a seamless user interface designed to enhance the tourist exploration experience.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #b45309 50%, #1a1a1a 100%)",
    github: "https://github.com/Egyptos-Team",
  },
];

function ProjectCard({
  project,
  delay = 0,
}: {
  project: (typeof projects)[0];
  delay?: number;
}) {
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
      <div
        className="h-44 relative overflow-hidden"
        style={{ background: project.gradient }}
      >
        <Image
          src={project.img}
          alt={project.title}
          width={500}
          height={500}
          className="object-cover"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30">
          {project.img}
        </div> */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a
            href={project.LiveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold z-10"
          >
            Live Preview ↗
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-head text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-purple-400 text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.LiveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            ↗ Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-md border border-white/10 bg-transparent text-slate-400 text-sm hover:bg-white/10 hover:text-white transition-all inline-flex items-center gap-2"
          >
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
