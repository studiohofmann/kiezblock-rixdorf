import Typography from "typography"

const typography = new Typography({
  title: "Kiezblock Rixdorf",
  baseFontSize: "17px",
  baseLineHeight: 1.5,
  scaleRatio: 3,
  headerFontFamily: ["Raleway", "sans-serif"],
  bodyFontFamily: ["Roboto Slab", "serif"],
  headerWeight: 800,

  googleFonts: [
    {
      name: "Raleway",
      styles: ["800"],
    },
    {
      name: "Roboto Slab",
      styles: ["300"],
    },
  ],

  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h3: { lineHeight: 0 },
  }),
})

export default typography
