/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyberkarta-blue": "#203672",
        "cyberkarta-light": "#F1F5FA",
        "cyberkarta-dark": "#333333",
      },
    },
  },
  plugins: [],
};
