const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pasta: {
          green: "#3B9974",
          orange: "#EE6C52",
          black: "#2B2B2B",
          creme: "#FFF2D8",
          grey: "#8A8A8A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
