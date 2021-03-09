import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ComponentLayout from "./component-layout"

const StyledDisclaimerInfo = styled.div`
  h1 {
    text-transform: uppercase;
  }
`

export default function DisclaimerInfo() {
  const data = useStaticQuery(graphql`
    query DisclaimerInfoQuery {
      contentfulDisclaimer {
        heading
        contact {
          childMarkdownRemark {
            html
          }
        }
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
      <StyledDisclaimerInfo>
        <h1>{data.contentfulDisclaimer.heading}</h1>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: data.contentfulDisclaimer.contact.childMarkdownRemark.html,
          }}
        />
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: data.contentfulDisclaimer.text.childMarkdownRemark.html,
          }}
        />
      </StyledDisclaimerInfo>
    </ComponentLayout>
  )
}
