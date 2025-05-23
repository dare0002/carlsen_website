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
    // osv
  ],

   
      
      fontSize: {
        'base': 'clamp(0.875rem, 0.788rem + 0.4348vw, 1.125rem)',
        'lg': 'clamp(1.05rem, 0.9261rem + 0.6196vw, 1.4063rem)',
        'xl': 'clamp(1.26rem, 1.0868rem + 0.8658vw, 1.7578rem)',
        '2xl': 'clamp(1.512rem, 1.2736rem + 1.1918vw, 2.1973rem)', 
        '3xl': 'clamp(1.8144rem, 1.4902rem + 1.6212vw, 2.7466rem)', 
        '4xl': 'clamp(2.5rem, 5vw, 6rem)'
        // '4xl':'clamp(2.1773rem, -1.7094rem + 19.4333vw, 13.3514rem)', 
      }
    },
  },
  plugins: [],
};
