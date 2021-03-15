import Typography from "typography"

const typography = new Typography({
  title: "Kiezblock Rixdorf",
  baseFontSize: "17px",
  baseLineHeight: 1.5,
  scaleRatio: 2.5,
  headerFontFamily: ["Raleway", "sans-serif"],
  bodyFontFamily: ["Roboto Slab", "serif"],
  headerWeight: 800,

  googleFonts: [
    {
      name: "Raleway",
      styles: ["800", "400", "500"],
    },
    {
      name: "Roboto Slab",
      styles: ["300"],
    },
  ],

  overrideStyles: ({ adjustFontSizeTo, rhythm, scale }, options, styles) => ({
    h1: { textTransform: "uppercase" },
    h2: { fontWeight: 400 },
    h3: { fontWeight: 400 },
    h4: { fontWeight: 500 },
  }),
})

export default typography
