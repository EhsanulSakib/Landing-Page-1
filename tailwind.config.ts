import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05071A",
        primaryText: "#FFFFFF",
        primary: "#376AED",
        secondary: "#A8C0FF",
        tertiary: "#ED7CFF",
      },
    },
  },
  plugins: [],
};
export default config;
