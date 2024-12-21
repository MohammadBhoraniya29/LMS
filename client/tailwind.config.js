/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm-custom': '500px', // Custom breakpoint for 425px
      },
    },
  },
  plugins: [],
}