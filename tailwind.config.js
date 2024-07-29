/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily:{
        'Karla':['Karla','sans-serif'],
      },
      colors:{
        'light-coffee':'#C89F94'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        fadeIn:{
          from:{ opacity: 0}, to:{ opacity: 1}
        }
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
        fadeIn:' fadeIn 0.5s ease-in-out'
      },
      backgroundImage:{
        'slider-image':'url("./assets/images/slider.jpg")',
        'product-01': 'url("./assets/images/feature_product1.jpg")',
        'product-02': 'url("./assets/images/feature_product2.jpg")'
      }
    },
  },
  plugins: [],
}

