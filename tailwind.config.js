/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'principal-color': '#15242F',
        'secondary-color': '#FF7070',
        'therty-color': '#B4B4B4B2',
        'gray-color': '#696969',
      },
      fontFamily: {
        'sly-font': ['SlyFont', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

