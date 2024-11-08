/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#fcd34d",
        primaryDark: "#58E6D9",
      },
      fontFamily: {
        sans: ["var(--font-mont)", ...fontFamily.sans],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        gradientRadial:
          "repeating-radial-gradient(rgba(0,0,0,0.4),#f5f5f5 5px,#f5f5f5 100px)",
      },
    },
  },
  plugins: [],
};
