import { cn } from "../utils";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-purple-400">
        <span>//</span>
        {label}
      </p>
      <h2 className="font-head text-4xl font-extrabold leading-tight md:text-5xl">
        {title}
      </h2>
      <div className="mt-4 h-0.5 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
    </div>
  );
}
