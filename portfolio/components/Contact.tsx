"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_jkmzxwt";
    const TEMPLATE_ID = "template_2suup3s";
    const PUBLIC_KEY = "zOE8VT0P9fXs0uI-2";

    const templateParams = {
      from_name: formState.name,
      reply_to: formState.email,
      message: formState.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Let's Work Together" title="Get In Touch" />
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-slate-400 leading-relaxed mb-6">
              Whether you have an exciting project, want to discuss a role, or just want to say hi — my inbox is always open. I typically respond within 24 hours.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:roumohmoud22@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-white p-3 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">✉️</div>
                roumohmoud22@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/rodina-elnaggar" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-white p-3 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">💼</div>
                www.linkedin.com/in/rodina-elnaggar
              </a>
              <a href="https://github.com/rodinaalnaggar755-jpg" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-white p-3 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">🐙</div>
                https://github.com/rodinaalnaggar755-jpg
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
          >
            <div className="mb-5">
              <label className="block text-sm text-slate-400 mb-2 font-medium">Your Name</label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Jane Smith"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-slate-200 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm text-slate-400 mb-2 font-medium">Email</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="jane@gmail.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-slate-200 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm text-slate-400 mb-2 font-medium">Message</label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-slate-200 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all min-h-[110px] resize-y"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitted ? "✓ Message Sent!" : loading ? "Sending..." : "Send Message →"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
