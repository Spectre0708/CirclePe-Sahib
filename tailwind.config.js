/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EAF4F9',  // Background color
        'secondary': '#1D3B56', // Icon color
        'text-dark': '#0C3145', // Text color for titles
        'price': '#1C4B60',     // Text color for prices
      },
    },
  },
  plugins: [],
}
