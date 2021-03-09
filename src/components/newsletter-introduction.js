import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledNewsletterIntroduction = styled.div`
  h1 {
    text-transform: uppercase;
  }
`

export default function NewsletterIntroduction() {
  const data = useStaticQuery(graphql`
    query NewsletterIntroductionQuery {
      contentfulNewsletter {
        heading
      }
      contentfulNewsletterTeaserTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  `)
  return (
    <StyledNewsletterIntroduction>
      <h2>{data.contentfulNewsletter.heading}</h2>
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html:
            data.contentfulNewsletterTeaserTextNode.childMarkdownRemark.html,
        }}
      />
    </StyledNewsletterIntroduction>
  )
}
