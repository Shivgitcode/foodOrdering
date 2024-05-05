/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme1": ["#ffc200"],
        "theme2": ["#333333"],
        "theme3": ["#2f2f2f"]

      },
      fontFamily: {
        "mont": ["Montserrat", "sans-serif"],
        "grand": ["Grand Hotel", "cursive"]
      }
    },
  },
  plugins: [],
}