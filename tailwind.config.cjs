/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors: {
      transparent: 'transparent',

      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#76768a',
      'gray-100': '#e1e1e6',
      'gray-200': '#c4c4cc',

      'cyan-500': '#81d8f7',
      'cyan-300': '#B5E6F8',
      'black': '#000',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
