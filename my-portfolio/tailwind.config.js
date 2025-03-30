/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Include paths where you use Tailwind (JSX/TSX)
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  // remove `purge: []` entirely
  // ...
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        light: "#eeeeee",
        primary: "#ae38ff",
        purple: "#7B1FA2",
        violet: "#673AC1",
        pink: "#F48FB1",
      },
      keyframes: { /* ... */ },
      animation: { /* ... */ },
    },
  },
  plugins: [],
};
