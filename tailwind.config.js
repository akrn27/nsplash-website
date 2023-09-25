/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'black': '#222429',
      'dark': '#171719',
      'blue': '#3481EF',
      'orange': '#FF4E00',
      'red': '#dc2626',
      'yellow': '#F7DF1E',
      'light-gray': '#e2e8f0',
      'gray': '#979797',
      'white': '#F5F6F6',
      'dark-gray': 'rgb(71 85 105)',
      'light-yellow': '#d3f26a'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

