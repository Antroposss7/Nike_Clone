/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    
    extend: {
      backgroundImage: {
        'hero': "url('../HTML/Starbucks/data/star.webp')",
      },
  }
  },
  plugins: [],
}

