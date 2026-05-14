"use client";

import BackgroundBlobs from "@/components/BackgroundBlobs";
import { ThemeProvider } from "@/components/ThemeProvider";
import HeroSection from "@/components/HeroSec";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <BackgroundBlobs />
      <Navbar />
      <main>
        <HeroSection />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
