import { motion } from "framer-motion";


const techOrbs = [
  { icon: "⬛", label: "Next.js 14" },
  { icon: "⚛️", label: "React 18" },
  { icon: "🔷", label: "TypeScript" },
  { icon: "🎬", label: "Framer Motion" },
  { icon: "🌊", label: "Tailwind CSS" },
  { icon: "🔷", label: "JavaScript" },
  { icon: "🔷", label: "CSS" },
  { icon: "🔷", label: "HTML5" },

];

export default function HeroSection() {
  return (
    <section id="hero" className="mx-6 min-h-screen flex items-center py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6 text-blue-400 text-sm font-mono tracking-wider"
          >
            <span className="w-8 h-px bg-blue-400"></span>
            Frontend Developer & Media Buyer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-head text-5xl md:text-7xl font-extrabold leading-none mb-6"
          >
            Rodina
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              El_Naggar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed"
          >
                  I build high-performance, visually stunning web applications with a strong focus on UX . Combining frontend development mastery with media buying expertise .   
             </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {techOrbs.map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm backdrop-blur-sm hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-white transition-all cursor-default"
              >
                <span>{tech.icon}</span>
                {tech.label}
              </span>
            ))}
          </motion.div>

        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center h-[380px]"
        >
          <div className="relative w-80 h-80">
            {/* Center cube */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl shadow-[0_0_40px_rgba(99,102,241,0.4)] animate-[float_4s_ease-in-out_infinite]">
              💻
            </div>

            {/* Orbits */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-blue-500/15 animate-[spin_8s_linear_infinite]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-sm animate-[counter-spin1_8s_linear_infinite]">
                ⚛️
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-purple-500/15 animate-[spin_14s_linear_infinite_reverse]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-sm animate-[counter-spin2_14s_linear_infinite_reverse]">
                ⬛
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-emerald-500/15 animate-[spin_20s_linear_infinite]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-sm animate-[counter-spin3_20s_linear_infinite]">
                🎬
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
 }