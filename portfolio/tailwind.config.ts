import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        blue: {
          400: "#60a5fa",
          500: "#3b82f6",
        },
        purple: {
          400: "#a78bfa",
          500: "#8b5cf6",
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulse_dot: "pulse_dot 2s infinite",
        heartbeat: "heartbeat 1.5s infinite",
        spin_slow: "spin 20s linear infinite",
        spin_medium: "spin 14s linear infinite reverse",
        spin_fast: "spin 8s linear infinite",
        blobmove: "blobmove 12s ease-in-out infinite alternate",
        blobmove2: "blobmove 15s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulse_dot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.3)" },
        },
        heartbeat: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        blobmove: {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(40px,30px) scale(1.1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
