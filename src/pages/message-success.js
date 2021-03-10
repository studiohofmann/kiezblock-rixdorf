import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const StyledMessageSuccess = styled.div`
  width: 100%;
  color: white;
  background: #a8ce80;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function MessageSuccess({ data }) {
  return (
    <StyledMessageSuccess>
      <meta http-equiv="refresh" content="6; url=/contact"></meta>
      <h2
        className="body"
        dangerouslySetInnerHTML={{
          __html: data.contentfulContact.textSuccess.childMarkdownRemark.html,
        }}
      />
    </StyledMessageSuccess>
  )
}

export const query = graphql`
  query {
    contentfulContact {
      textSuccess {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
