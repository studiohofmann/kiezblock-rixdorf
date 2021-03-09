import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Newsletter from "./newsletter"
import SocialMedia from "./social-media"

const FooterStyle = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #e5907c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #white {
    color: white;
  }
`

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        logo {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            width: 180
          )
          description
        }
        text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const image = getImage(data.contentfulFooter.logo)

  return (
    <FooterStyle>
      <div id="white">
        <Newsletter />
        <SocialMedia />
      </div>
      <div>
        <GatsbyImage
          image={image}
          alt={data.contentfulFooter.logo.description}
        />
      </div>
    </FooterStyle>
  )
}
