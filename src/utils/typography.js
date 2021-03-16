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

  overrideStyles: ({ rhythm }, options) => ({
    h1: { textTransform: "uppercase", marginBottom: rhythm(2.5) },
    h3: { fontWeight: 400, marginBottom: rhythm(1) },
    h4: { fontWeight: 500 },
    a: { color: "#a1d0e5", textDecoration: "none" },
    "a:hover": { color: "#ccce5f" },
  }),
})

export default typography
export const rhythm = typography.rhythm
