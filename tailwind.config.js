/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        richBlack: "#000000",
        deepGray: "#222222",
        neonMint: "#1DCD9F",
        aquaGreen: "#169976",
      },
      fontFamily: {
        retro: ['"Press Start 2P"', "monospace"],
      },
      fontSize: {
        title: "72px",
        subtitle: "60px",
        subsub: "48px",
        subsmall: "36px",
      },
    },
  },
  plugins: [],
};
