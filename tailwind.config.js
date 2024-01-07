/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImag: {
        "hero-pattern": "url('./src/bg-login.jpeg')",
      },
    },
  },
  plugins: [],
};
