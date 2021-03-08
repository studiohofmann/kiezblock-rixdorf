import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const FooterStyle = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  height: 25vh;
  background: #e5907c;
  display: flex;
  justify-content: space-between;
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
            width: 125
          )
          description
        }
      }
      contentfulFooterSocialLinksTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  `)

  const image = getImage(data.contentfulFooter.logo)

  return (
    <FooterStyle>
      <div>
        <GatsbyImage
          image={image}
          alt={data.contentfulFooter.logo.description}
        />
      </div>
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html:
            data.contentfulFooterSocialLinksTextNode.childMarkdownRemark.html,
        }}
      />
    </FooterStyle>
  )
}
