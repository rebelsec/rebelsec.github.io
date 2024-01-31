/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
  "./layouts/**/*.html",
  "./themes/ngeblog/layouts/**/*.html",
],
  theme: {
    extend: {},
  },  
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

