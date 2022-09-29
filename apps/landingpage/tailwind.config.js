/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require("@tsalliance/ui/tailwind")
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      }
    },
  },
  plugins: [],
}