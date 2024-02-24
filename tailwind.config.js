/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary-color": "rgb(202,3,3)",
        "secondary-color" : "#D9D9D9",
        "dark":"#242424"
      }
    },
  },

  plugins: [
    require('tailwindcss-animated'),
  ],
}

