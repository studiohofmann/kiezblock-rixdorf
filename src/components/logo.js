import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const LogoStyle = styled.nav``

export default function Logo() {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      contentfulHeader {
        logo {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            width: 150
          )

          description
        }
      }
    }
  `)
  const image = getImage(data.contentfulHeader.logo)

  return (
    <LogoStyle>
      <GatsbyImage image={image} alt={data.contentfulHeader.logo.description} />
    </LogoStyle>
  )
}
