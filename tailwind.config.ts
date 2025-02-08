// tailwind.config.ts
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c2a9d",   // Dark purple for header
        secondary: "#7e3ccf", // Medium purple for navbar
      },
    },
  },
  plugins: [],
};
export default config;
