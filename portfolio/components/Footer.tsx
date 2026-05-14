export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-slate-400 text-sm relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>Built with</span>
          <span className="text-rose-500 animate-pulse">♥</span>
          <span>using Next.js, TypeScript & Tailwind CSS</span>
        </div>
        <div>© 2026 Alex Carter · All rights reserved</div>
        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
