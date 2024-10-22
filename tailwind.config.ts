/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

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
  			center: 'true',
  			padding: '2rem',
  			screens: {
  				sm: '100%',
  				md: '100%',
  				lg: '1024px',
  				xl: '1280px'
  			}
  		},
  		colors: {
  			primary: '#003366',
  			secondary: '#FF6600',
  			hover_Color: '#eff2fd',
  			foreground: 'var(--foreground)',
  			coal: '#353535',
  			lemon: '#dafb57',
  			lilac: '#7e92e3',
  			background: '#f5f7fd',
  			lightGray: '#8f8f8f',
  			borderColor: '#e4e9f9',
  			gray: '#5d5d5d',
  			light: '#eff2fd'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		padding: {
  			padding_base: '48px',
  			padding_small: '16px',
  			padding_medium: '32px',
  			padding_extra: '80px',
  			padding_extra_large: '160px',
  			padding_top_bottom: '24px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"), // Existing animate plugin
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".dashboard-containers": {
          maxWidth: "100%",  // Default for all screen sizes
          paddingTop: "4rem",   // Default padding for all screen sizes
          paddingBottom: "2rem",   // Default padding for all screen sizes
          paddingRight: "1rem",   // Default padding for all screen sizes
          paddingLeft: "1rem",   // Default padding for all screen sizes
          margin: "0 auto",  // Center the container

          // For small screens (sm)
          "@screen sm": {
            maxWidth: "100%", // Full width
            padding: "4rem", // Adjust padding for small screens
          },

          // For medium screens (md)
          "@screen md": {
            maxWidth: "100%", // Medium screen container width
            padding: "2rem",   // Adjust padding for medium screens
          },

          // For large screens (lg)
          "@screen lg": {
            maxWidth: "100%", // Larger screen container width
            padding: "3rem", 
          },

          // For extra-large screens (xl)
          "@screen xl": {
            maxWidth: "100%", // Maximum width for the container on extra-large screens
            padding: "4rem",
          },
        },
      });
    },
  ],
};
export default config;
