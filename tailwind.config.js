/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
            'mob': '425px',
          },
      },
    },
    plugins: [],
  }