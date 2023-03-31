/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./*.{html,js}",
    "./pages/*.{html,js}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'lab': ['Lab Grotesque', 'sans-serif']
      },
    },
    container: {
      padding: {
        DEFAULT: '20px',
      },
      center: true
    }
  },
  plugins: [],
}
