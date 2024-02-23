/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  content: [
    "./node_modules/flowbite/**/*.js"
],
  plugins: [
    require('flowbite/plugin')
  ],
  colors:{
    "primary-color": "var(--primary-color)",
    "secondary-color" : "var(--secondary-color)",
  }
}