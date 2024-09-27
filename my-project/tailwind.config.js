/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#4B168B',  
        'golden-yellow': '#FBCF30',   
      },
      placecolors: {
        placeholder: '#ffffff', // Custom placeholder color
      },
    },
  },
  plugins: [],
}
