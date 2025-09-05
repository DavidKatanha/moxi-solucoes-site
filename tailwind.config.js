/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          moxiGreen: '#80C342',
          moxiGray: '#495D47',
          moxiYellow: '#FFD976',
        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          lato: ['Lato', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }