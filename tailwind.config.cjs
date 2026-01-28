/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: '#eff6ff',
        //   100: '#dbeafe',
        //   200: '#bfdbfe',
        //   300: '#93c5fd',
        //   400: '#60a5fa',
        //   500: '#3b82f6',
        //   600: '#2563eb',
        //   700: '#1d4ed8',
        //   800: '#1e40af',
        //   900: '#1e3a8a',
        //   950: '#172554',
        // },
        // secondary: {
        //   50: '#faf5ff',
        //   100: '#f3e8ff',
        //   200: '#e9d5ff',
        //   300: '#d8b4fe',
        //   400: '#c084fc',
        //   500: '#a855f7',
        //   600: '#9333ea',
        //   700: '#7c3aed',
        //   800: '#6b21a8',
        //   900: '#581c87',
        //   950: '#3b0764',
        // },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        primary: {             // cf. https://uicolors.app/generate/114b82
          '50': '#f1f7fe',
          '100': '#e2eefc',
          '200': '#bfdcf8',
          '300': '#86c1f3',
          '400': '#46a1ea',
          '500': '#1e85d9',
          '600': '#1068b9',
          '700': '#0f5495',
          '800': '#114b82',   // bleu foncé CHU
          '900': '#133c67',
          '950': '#0d2644',
        },
        secondary: {               // cf. https://uicolors.app/generate/0cbaeb
          '50': '#f0faff',
          '100': '#e0f5fe',
          '200': '#b9ecfe',
          '300': '#7cdefd',
          '400': '#36cffa',
          '500': '#0cbaeb',
          '600': '#00a3da',     // bleu clair CHU
          '700': '#0177a3',
          '800': '#066486',
          '900': '#0b536f',
          '950': '#07354a',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Arial"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
