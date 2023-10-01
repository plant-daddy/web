/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      green: {
        300: '#65CCB7',
        500: '#327F6B',
        800: '#124647'
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
      }
    }
  }
}
