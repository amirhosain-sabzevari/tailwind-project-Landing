/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      "center": true,
      padding: '2rem',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

