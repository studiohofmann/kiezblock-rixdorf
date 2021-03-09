import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ComponentLayout from "./component-layout"

const StyledPrivacyInfo = styled.div`
  h1 {
    text-transform: uppercase;
  }
`

export default function PrivacyInfo() {
  const data = useStaticQuery(graphql`
    query PrivacyInfoQuery {
      contentfulPrivacy {
        heading
        text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <ComponentLayout>
      <StyledPrivacyInfo>
        <h1>{data.contentfulPrivacy.heading}</h1>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: data.contentfulPrivacy.text.childMarkdownRemark.html,
          }}
        />
      </StyledPrivacyInfo>
    </ComponentLayout>
  )
}
