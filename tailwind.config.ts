import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: "#FFF1F4",
          100: "#FFE2E9",
          500: "#9E1733",
          700: "#7A0F24",
          900: "#3A0813",
        },
        gold: {
          100: "#FFF1C8",
          300: "#F4CA69",
          500: "#D9A12A",
          700: "#A77513",
        },
        cream: "#FFF7EA",
        charcoal: "#18181B",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(217, 161, 42, 0.22)",
        maroon: "0 24px 80px rgba(122, 15, 36, 0.26)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
      opacity: {
        7: "0.07",
        8: "0.08",
        12: "0.12",
        18: "0.18",
        22: "0.22",
        24: "0.24",
        26: "0.26",
        28: "0.28",
        34: "0.34",
        35: "0.35",
        46: "0.46",
        48: "0.48",
        54: "0.54",
        58: "0.58",
        62: "0.62",
        64: "0.64",
        68: "0.68",
        72: "0.72",
        74: "0.74",
        76: "0.76",
        78: "0.78",
        82: "0.82",
        86: "0.86",
        88: "0.88",
        92: "0.92",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite",
      },
    },
  },
  plugins: [forms],
};

export default config;
