/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImag: {
        "hero-pattern": "url('./src/bg-login.jpeg')",
      },
      fontFamily: {
        grotesque: ["Darker Grotesque", "serif"],
        DM: ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
};
