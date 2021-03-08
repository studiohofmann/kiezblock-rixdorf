import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const LogoStyle = styled.nav`
  @media (min-width: 992px) {
    width: 11rem;
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
        <GatsbyImage
          image={image}
          alt={data.contentfulHeader.logo.description}
        />
      </div>
    </LogoStyle>
  )
}
