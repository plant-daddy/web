/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      green: {
        300: '#65CCB7',
        500: '#327F6B',
        700: '#124647',
        800: '#11222E',
        900: '#0C1922'
      },
      gray: {
        50: '#F2F2F2',
        300: '#D0E1DD',
        600: '#718096',
        800: '#282C3E',
        900: '#171923'
      },
      red: { 500: '#E83F5B' }
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {
      width: {
        960: '960px'
      },
      zIndex: {
        '-1': '-1'
      },
      transformOrigin: {
        0: '0%'
      },
      borderWidth: {
        1: '1px'
      },
      padding: {
        21: '84px',
        45: '180px'
      }
    }
  }
}
