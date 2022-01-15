const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.blue,
      grey: {
        DEFAULT: "#F6F6F6",
      },
      primary: {
        DEFAULT: "#3E70B3",
      },

      success: {
        DEFAULT: "#04AA77",
        dark: "#04996B",
      },
      border: {
        DEFAULT: "#D7E1EA",
      },
      danger: {
        DEFAULT: "#dd524c",
      },
    },
  },
  plugins: [],
};
