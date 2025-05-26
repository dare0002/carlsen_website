/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  safelist: [
    'bg-pink',
    'bg-orange',
    'bg-green',
    'bg-lightblue',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        offwhite: "#F6F1E7",
        green: "#285442",
        lightgreen: "#9BC1B1",
        pink: "#EEA6BB",
        orange: "#FFB656",
        lightblue: "#A4CBF3",
      }, 

      safelist: [
      'bg-pink',
      'bg-orange',
      'bg-green',
      'bg-lightblue',
    ],

      fontSize: {
        'base': 'clamp(1rem, 0.9rem + 0.6vw, 1.25rem)', // ~16–20px
        'lg': 'clamp(1.125rem, 1rem + 0.7vw, 1.5rem)',  // ~18–24px
        'xl': 'clamp(1.25rem, 1.1rem + 0.85vw, 1.75rem)', // ~20–28px
        '2xl': 'clamp(1.5rem, 1.25rem + 1vw, 2.25rem)',   // ~24–36px
        '3xl': 'clamp(1.875rem, 1.5rem + 1.25vw, 3rem)',  // ~30–48px
        '4xl': 'clamp(2.5rem, 2rem + 2vw, 4rem)',  
      }
    },
  },
  plugins: [],
};
