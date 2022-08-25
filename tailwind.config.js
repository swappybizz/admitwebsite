/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",

],
theme: {
  extend: {
    colors: {
      'admit-red': '#FF595A',
      "admit-blue": "#002856",
      "admit-dark-blue": "#002A3A",

      "admit-blue-pressed": "#075985",

    },
  }
},
  plugins: [],
}



