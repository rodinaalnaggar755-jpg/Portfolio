
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";


const skills = [
  {
    category: "Frontend Core",
    icon: "⚛️",
    color: "blue",
    items: [
      { name: "React / Next.js", pct: 95 },
      { name: "TypeScript", pct: 93 },
      { name: "Tailwind CSS", pct: 99 },
      { name: "HTML / CSS / JS", pct: 99 },
    ],
  },
  {
    category: "Animation & UI",
    icon: "🎬",
    color: "purple",
    items: [
      { name: "Framer Motion", pct: 92 },
      { name: "Shadcn / Radix UI", pct: 96 },
      { name: "D3.js / Recharts", pct: 80 },
      { name: "Figma → Code", pct: 94 },
    ],
  },
  {
    category: "Performance & DX",
    icon: "⚡",
    color: "green",
    items: [
      { name: "Core Web Vitals", pct: 95 },
      { name: "Testing (Jest/Playwright)", pct: 85 },
      { name: "CI/CD / GitHub Actions", pct: 82 },
      { name: "Accessibility (WCAG)", pct: 90 },
    ],
  },
  // {
  //   category: "Backend & Data",
  //   icon: "🗄️",
  //   color: "amber",
  //   items: [
  //     { name: "Node.js / tRPC", pct: 78 },
  //     { name: "PostgreSQL / Prisma", pct: 75 },
  //     { name: "GraphQL / REST", pct: 80 },
  //     { name: "Vercel / AWS", pct: 83 },
  //   ],
  // },
];

function SkillBar({ name, pct }: { name: string; pct: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-200">{name}</span>
        <span className="text-slate-400 font-mono text-sm">{pct}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-md overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-md bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>
    </div>
  );
}

// Skill card component
function SkillCard({ skill, delay = 0 }: { skill: typeof skills[0]; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const colorClasses = {
    blue: "bg-blue-500/20",
    purple: "bg-purple-500/20",
    green: "bg-emerald-500/20",
    amber: "bg-amber-500/20",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${colorClasses[skill.color as keyof typeof colorClasses]}`}>
          {skill.icon}
        </div>
        <h3 className="font-head text-base font-bold">{skill.category}</h3>
      </div>
      {skill.items.map((item, i) => (
        <SkillBar key={i} name={item.name} pct={item.pct} />
      ))}
    </motion.div>
  );
}

// Skills section
export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Technical Arsenal" title="Skills & Expertise" />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} delay={i * 0.15} />
          ))}
        </div>

        {/* Code window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 max-w-2xl mx-auto bg-black/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl"
        >
          <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-400 font-mono">portfolio/app/page.tsx</span>
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed text-slate-400">
            <div><span className="text-slate-500">// Server Component — zero client JS by default</span></div>
            <div><span className="text-purple-400">export async function</span> <span className="text-blue-400">generateMetadata</span>() {"{"}</div>
            <div className="pl-4"><span className="text-purple-400">return</span> {"{"}</div>
            <div className="pl-8">title: <span className="text-green-400">'Rodina EL_Naggar · Frontend Dev'</span>,</div>
            <div className="pl-8">description: <span className="text-green-400">'Building fast, beautiful UIs'</span>,</div>
            <div className="pl-8">openGraph: {'{'} images: ["/og.png"] {'}'}</div>
            <div className="pl-4">{"}"}</div>
            <div>{"}"}</div>
            <br />
            <div><span className="text-purple-400">export default function</span> <span className="text-blue-400">Page</span>() {"{"}</div>
            <div className="pl-4"><span className="text-purple-400">return</span> &lt;<span className="text-blue-400">HeroSection</span> /&gt;</div>
            <div>{"}"}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}