/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1E40AF",
        brandOrange: "#FF6B35",
        brandGray: "#374151",
      },
    },
  },
  plugins: [],
}
