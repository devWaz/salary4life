/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lemon': '#BBFF4B',
        'gradient' : 'linear-gradient(152.87deg, #28743A 13.4%, #BBFF4B 146.73%)',
      },
    },
  },
  plugins: [],
}
