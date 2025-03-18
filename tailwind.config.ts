import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-orb-1': 'gradient-orb-1 15s linear infinite',
        'gradient-orb-2': 'gradient-orb-2 20s linear infinite',
        'gradient-orb-3': 'gradient-orb-3 18s linear infinite',
      },
      keyframes: {
        'gradient-orb-1': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(-50%, -50%) rotate(90deg) scale(1.5)' },
          '50%': { transform: 'translate(-50%, -50%) rotate(180deg) scale(1)' },
          '75%': { transform: 'translate(-50%, -50%) rotate(270deg) scale(1.5)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg) scale(1)' },
        },
        'gradient-orb-2': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg) scale(1.5)' },
          '25%': { transform: 'translate(-50%, -50%) rotate(-90deg) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) rotate(-180deg) scale(1.5)' },
          '75%': { transform: 'translate(-50%, -50%) rotate(-270deg) scale(1)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(-360deg) scale(1.5)' },
        },
        'gradient-orb-3': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(-50%, -50%) rotate(90deg) scale(1.5)' },
          '50%': { transform: 'translate(-50%, -50%) rotate(180deg) scale(1)' },
          '75%': { transform: 'translate(-50%, -50%) rotate(270deg) scale(1.5)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 