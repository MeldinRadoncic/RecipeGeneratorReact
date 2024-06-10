// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will scan these files for class names
  ],
  theme: {
    extend: {
      colors:{
        orangered: '#ff4500',
        download:'#000000'
      }
    },
  },
  plugins: [],
}
