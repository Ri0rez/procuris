/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'animation': '28s slide infinite linear'
      },

      keyframes: {
        slide: {
          'from':{ transform: 'translateX(0)' },
          'to':{ transform: 'translateX(-100%)' },
        }
      }
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'rouge': '#F41B1B',
      'bleu': '#65B6ED',
      'bleu1': '#89caf5',
      'black':'#252525',
      'gris':'#ececec',
      'gris2':'#8d8d8d',
      'gris3':'#D9D9D9',
      'blanc':'#ffffff',
      'noir':'#252525',
    },

    fontFamily :{
      'sans': ['Inria Sans', 'sans-serif', "system-ui", "-apple-system",],
      'hero': ['Inter', 'sans-serif'],
    },

  },
  plugins: [],
}
 
