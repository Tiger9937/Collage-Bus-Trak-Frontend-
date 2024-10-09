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
        'deep-purple-OP50':'#7e22ce50',
        'golden-yellow-OP70':'#fbcf30ab',
        'deep-purple-OP70':'#7e22ce70',
        'Light-purple':'#a16ae5'
      },
      placecolors: {
        placeholder: '#ffffff', // Custom placeholder color
      },
    },
  },
  plugins: [],
}
