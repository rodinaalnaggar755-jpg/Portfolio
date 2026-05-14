
"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex items-center justify-between bg-[#111827]/70 backdrop-blur-xl border-b border-white/10">
        <a href="/" className="font-head text-xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Rodina
        </a>
        
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link>
            <Link href="#experience" className="text-sm text-slate-400 hover:text-white transition-colors">Experience</Link>
            <Link href="#projects" className="text-sm text-slate-400 hover:text-white transition-colors">Projects</Link>
            <Link href="#skills" className="text-sm text-slate-400 hover:text-white transition-colors">Skills</Link>
            <Link href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          )}

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me ↗
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Fixed below navbar */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-40 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className=" text-center rounded-2xl bg-[#1f2937]/55 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 space-y-1">
            {[
              { href: "/", label: "Home" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 sm:hidden">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Hire Me ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
