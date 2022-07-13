const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts}",
    "./data/posts/**/*.mdx",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Andy Sans", ...defaultTheme.fontFamily.sans],
      mono: ["Andy mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        black: "#111111",
        gray: colors.zinc,
      },
      opacity: {
        15: ".15",
      },
    },
  },
  plugins: [],
};
