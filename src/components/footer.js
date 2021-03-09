import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Newsletter from "./newsletter"
import SocialMedia from "./social-media"

const FooterStyle = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  height: 70vh;
  background: #e5907c;
  display: flex;
  justify-content: space-between;

  #logo {
    color: white;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #socMed {
    color: white;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      <div id="logo">
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: data.contentfulFooter.text.childMarkdownRemark.html,
          }}
        />
        <div>
          <GatsbyImage
            image={image}
            alt={data.contentfulFooter.logo.description}
          />
        </div>
      </div>
      <div id="socMed">
        <Newsletter />
        <SocialMedia />
      </div>
    </FooterStyle>
  )
}
