/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary-color": "rgb(235,51,0)",
        "secondary-color" : "#D9D9D9",
      }
    },
  },

  plugins: [
    require('tailwindcss-animated'),
  ],
}

