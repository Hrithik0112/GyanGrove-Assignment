import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "heading-color": "#e8e7e7",
        "subtitle-color": "#989090",
        "logo-color": "#CF2D2D",
        "border-color": "#B0BABF",
      },
      screens: {
        sm: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
