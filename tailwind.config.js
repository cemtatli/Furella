/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["13px", "16px"],
      },
      screens: {
        xs: "475px",
      },
      colors: {
        gray: "#868686;",
        "gray-2": "#DDDDDD;",
        "gray-3": " #D2D2D2;",
        "gray-4": " #CBCBCB",
        "gray-5": " #D7D7D7",
        "gray-6": " #CACACB",
        "primary-blue": "#1788DDC2;",
      },
      spacing: {
        15: "3.75rem",
      },
      width: { 1000: "62.5rem" },
    },
  },
  plugins: [],
};
