import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf5ff",
          100: "#dfeaff",
          200: "#c5d9ff",
          300: "#a1beff",
          400: "#7c9afd",
          500: "#556ff7",
          600: "#3f4dec",
          700: "#313bd1",
          800: "#2b35a8",
          900: "#2a3385",
          950: "#191d4d",
        },
        secondary: {
          50: "#ebffff",
          100: "#cdfbff",
          200: "#8ff4ff",
          300: "#62edfe",
          400: "#1bd9f5",
          500: "#00bcdb",
          600: "#0296b8",
          700: "#0a7894",
          800: "#126178",
          900: "#134f66",
          950: "#063446",
        },
        gray: colors.zinc,
      },
      fontFamily: {
        sans: ["'Exo 2 Variable'", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
      },
    },
  },
  plugins: [],
};
