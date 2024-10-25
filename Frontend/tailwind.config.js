/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-red" : "rgb(254,226,226)",
        "medium-red" : "rgb(254,202,202)",
        "dark-red" : "rgb(252,165,165)",
      }
    },
  },
  plugins: [],
}

