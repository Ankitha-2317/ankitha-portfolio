import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0F172A",
        card: "#111827",
        accent: {
          DEFAULT: "#7C3AED",
          hover: "#8B5CF6",
        },
        muted: "#CBD5E1",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-glow":
          "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #C084FC 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.35)",
        "glow-sm": "0 0 20px rgba(124, 58, 237, 0.25)",
        card: "0 8px 30px rgba(0, 0, 0, 0.35)",
      },
      animation: {
        "spin-slow": "spin 16s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
} satisfies Config;
