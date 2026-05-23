"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";


const experiences = [
   {
    date: "2022 — 2025",
    role: "Management Technology and Information Systems",
    company: "PortSaid University · GPA 3.5 / 4.0",
    description: "Earned a Bachelor's degree with a focus on bridging the gap between business management and information technology. Studied core concepts of systems analysis, and business optimization strategies while maintaining a 3.5/4.0 GPA.",
    tags: ["Information Systems", "Artificial intelligence", "Database Management", "Software Development Life Cycle (SDLC)", "Accounting" , "Economy"],
  },
  {
    date: "2025 — Present",
    role: "Media Buyer",
    company: "The Best Construction - On site",
    description: "Developed and executed targeted lead-generation campaigns across Meta , Google & LinkedIn Ads to drive sales for high-value real estate projects. Analyzed performance metrics, optimized ad spend, and implemented SEO strategies and maximize ROI.",
    tags: ["Meta Ads", "LinkedIn Ads", "Google Ads", "SEO"],
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
