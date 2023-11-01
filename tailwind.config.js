/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dark: '#1C2226',
        light: '#FAFAFA',
        blue: '#024190',
        green: '#6EE7B7',
        lemon: '#BBE903',
        pink: '#AD85AD'
      },
      backgroundImage: {
        'linear-gradient': 'linear-gradient(to left, #A0C1FF, #EAF7FE)',
        'glass': 'linear-gradient(113.9deg, rgba(255,255,255,0.1) 17.93%, rgba(255,255,255,0.1) 44.28%, rgba(255,255,255,0.15) 63.93%, rgba(255,255,255,0.1) 88.25%)'
      },
      fontFamily: {
        'eBold': ['Euclid Circular A', 'sans'], 
        'eSemi': ['Euclid Circular A', 'sans'], 
        'text': ['Euclid Circular A', 'sans'],
        'eLight': ['Euclid Circular A', 'sans']
      },
    },
  },
  plugins: [],
}
