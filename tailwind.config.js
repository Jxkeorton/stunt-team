module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {lg: { min: "1051px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 400: "#b5b5b5" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { playfairdisplay: "Playfair Display" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
