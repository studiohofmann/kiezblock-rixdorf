import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledMessageSuccessText = styled.div`
  width: 50%;
`

export default function MessageSuccessText() {
  const data = useStaticQuery(graphql`
    query MessageSuccessTextQuery {
      contentfulContact {
        textSuccess {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <StyledMessageSuccessText>
      <h2
        className="body"
        dangerouslySetInnerHTML={{
          __html: data.contentfulContact.textSuccess.childMarkdownRemark.html,
        }}
      />
    </StyledMessageSuccessText>
  )
}
