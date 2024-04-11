// ./tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Tenor Sans', 'Roboto','sans-serif'],
      },
      fontWeight: {
        'light': 400,
        'normal': 400,
        'medium': 400,
        'semibold': 400,
        'bold': 400,
      },
      colors: {
        "foreground": "#cc9999",
        "background": "#e5e5e5",
      }
    },
  },
  plugins: [],
};