/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: "2rem", // Adds padding around the container
        screens: {
          sm: "100%", // Customize container width on small screens
          md: "100%", // Customize container width on medium screens
          lg: "1024px", // Set custom width for large screens
          xl: "1280px", // Set custom width for extra-large screens
        },
      },
      colors: {
        primary: "#003366",
        secondary: "#FF6600",
        hover_Color: "#eff2fd",
        foreground: "var(--foreground)",
        coal: "#353535",
        lemon: "#dafb57",
        lilac: "#7e92e3",
        background: "#f5f7fd",
        lightGray: "#8f8f8f",
        borderColor: "#e4e9f9",
        gray: "#5d5d5d",
        light: "#eff2fd",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      padding:{
        padding_base: "48px",
        padding_small: "16px",
        padding_medium: "32px",
        padding_extra: "80px",
        padding_extra_large: "160px",
        padding_top_bottom: "24px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
