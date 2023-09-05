/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'black': '#222429',
      'blue': '#3481EF',
      'orange': '#FF4E00',
      'yellow': '#F7DF1E',
      'gray': '#979797',
      'white': '#F5F6F6',
      'dark-gray': 'rgb(71 85 105)'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

