/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#328d82",
        faint: "#d9f2ef",
        plain: "#FFFFFF",
        gray: "#616161",
        dark: "#1C2E3D",
        light: "#B3B3B3",
      },
      fontFamily: {
        quicksand: ['Quicksand', 'cursive'],
      },
    },
  },
  plugins: [],
}