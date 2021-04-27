import Typography from "typography"

const typography = new Typography({
  title: "Kiezblock Rixdorf",
  baseFontSize: "17px",
  baseLineHeight: 1.5,
  scaleRatio: 2.2,
  headerFontFamily: ["Raleway", "sans-serif"],
  bodyFontFamily: ["Roboto Slab", "serif"],
  headerWeight: 800,

  googleFonts: [
    {
      name: "Raleway",
      styles: ["800", "500", "400"],
    },
    {
      name: "Roboto Slab",
      styles: ["300"],
    },
  ],

  overrideStyles: ({ rhythm }) => ({
    h1: {
      textTransform: "uppercase",
      marginBottom: rhythm(2),
      textAlign: "center",
    },
    h3: {
      fontWeight: 400,
      marginBottom: rhythm(2),
      lineHeight: 1.5,
      textAlign: "center",
    },
    h4: { fontWeight: 500 },
    a: { color: "steelblue", textDecoration: "none" },
    "a:hover": { color: "indianred" },

    "@media (min-width: 992px)": {
      h1: {
        fontSize: rhythm(2),
      },
    },
  }),
})

export default typography
export const rhythm = typography.rhythm
