import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          deep: "#061018",
          soft: "#13233D",
        },
        gold: {
          DEFAULT: "#2563EB",
          soft: "#3B82F6",
        },
        globe: {
          DEFAULT: "#2563EB",
          soft: "#3B82F6",
        },
        beige: {
          DEFAULT: "#F4F6F8",
          deep: "#E8ECF1",
        },
        sky: {
          DEFAULT: "#FFFFFF",
          mid: "#E8EEF6",
        },
        cream: "#F4F6F8",
        muted: "#5B6573",
        ink: "#111827",
        surface: "#F4F6F8",
      },
      fontFamily: {
        serif: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "none",
        soft: "none",
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
};

export default config;
