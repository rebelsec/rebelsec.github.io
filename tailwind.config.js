/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./layouts/**/*.html", "./themes/NgeBlog/layouts/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
