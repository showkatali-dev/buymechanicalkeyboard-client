import tailwindcssAnimate from "tailwindcss-animate";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      boxShadow: {
        sam: "0px 6px 17px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [tailwindcssAnimate, daisyui],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#00026E",
          "primary-content": "#DADEE7",
          secondary: "#F77B02",
          accent: "#1b1b38",
          "base-100": "#FFFFFF",
          "base-200": "#EBF0F4",
          "base-300": "#ECF3FE",
        },
      },
    ],
  },
};
