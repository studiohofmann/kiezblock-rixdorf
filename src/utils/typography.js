import Typography from "typography"

const typography = new Typography({
  title: "Kiezblock-Rixdorf",
  baseFontSize: "17px",
  baseLineHeight: 1.3,
  scaleRatio: 1.4,
  headerFontFamily: ["Raleway", "sans-serif"],
  bodyFontFamily: ["Roboto Slab", "serif"],
  headerWeight: 600,

  googleFonts: [
    {
      name: "Raleway",
      styles: ["600"],
    },
    {
      name: "Roboto Slab",
      styles: ["300"],
    },
  ],
})

export default typography
