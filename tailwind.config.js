/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      fontFamily: {
        retro: ['"Press Start 2P"', "monospace"],
      },
      colors: {
        retroRed: "#FF6C6C",
        retroBlue: "#6CEBFF",
        retroYellow: "#FFF58C",
        retroOrange: "#FFB86C",
      },
    },
  },
  plugins: [],
};
