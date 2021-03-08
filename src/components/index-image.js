import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import ComponentLayout from "./component-layout"

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulIndex {
          image {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.contentfulIndex.image.fluid

  return (
    <ComponentLayout>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
      ></BackgroundImage>
    </ComponentLayout>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 50vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
