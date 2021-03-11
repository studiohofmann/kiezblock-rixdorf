import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const LogoStyle = styled.nav`
  width: 10rem;

  @media (min-width: 992px) {
    position: fixed;
    top: 1rem;
    left: 1rem;
  }
`

export default function Logo() {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      contentfulHeader {
        logo {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
            width: 300
          )
          description
        }
      }
    }
  `)
  const image = getImage(data.contentfulHeader.logo)

  return (
    <LogoStyle>
      <div>
        <GatsbyImage image={image} alt={image.description} />
      </div>
    </LogoStyle>
  )
}
