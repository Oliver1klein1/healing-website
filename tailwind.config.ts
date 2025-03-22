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
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
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
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glow: {
          '0%': {
            opacity: '0.4',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: '0.8',
            transform: 'scale(1.2)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config; 