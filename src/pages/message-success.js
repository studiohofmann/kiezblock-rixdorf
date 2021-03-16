import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf | Message Success</title>
        <link
          rel="canonical"
          href="https://kiezblock-rixdorf.de/messaage-success"
        />
      </Helmet>
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
