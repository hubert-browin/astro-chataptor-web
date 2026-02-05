import { colors, fontFamily } from './design-tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        'status-new': '#f43f5e',
        'status-waiting': '#f97316',
        'status-responded': '#9ca3af',
      },
      fontFamily: {
        sans: [fontFamily.sans, 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
