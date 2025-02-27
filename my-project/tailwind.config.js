/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'strong': '1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.5)',
      },
      colors: { 
        
        'deep-purple': '#4B168B',  
        "hover-purpal": "#743fb7",
        'golden-yellow': '#FBCF30',   
        'deep-purple-OP50':'#7e22ce50',
        'golden-Yellow-OP70':'#fbcf30ab',
        'deep-purple-OP70':'#7e22ce70',
        'Light-purple':'#a16ae5',
        'light-Dark':'#0000001a',
        'Difult-color': '#F8FAFC',
        'DIP-yellow':'#FFD166',
        'HiLight_purple':'#BA85FF',
        'cG':'#D7D7D7',
        'dimLight':'#F2F2F2',
        'Hover-yellow':'#fac241',
        'BLACK' : "#262626",
        "Nut-PUR" : "#8E54DA",
        "Light-Dir-purple":"#B379FF",
        "Natural-yellow": "#E4BD1E"
      },
      width:{
        "120" : "26rem"
      },
      placecolors: {
        placeholder: '#ffffff', // Custom placeholder color
      }
    },
    fontFamily:{
      Itim: ["Itim", 'cursive'],
      Inter:["Inter", 'serif'],
      AndadaPro:["Andada Pro", "serif"],
      Assistant: ["Assistant", "sans-serif"]
    }
  },
  plugins: [],
}
