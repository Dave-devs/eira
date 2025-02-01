import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CA1515",
        lightHover: "",
        darkHover: "",
        darkTheme: "#001219",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        playfair: ["Playfair_Display", "serif"],
        playwrite: ["Playwrite_IN", "serif"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
