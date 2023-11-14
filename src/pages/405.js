import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const FourOFourStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #message {
    width: 80%;
  }

  @media (min-width: 992px) {
    #message {
      width: 50%;
    }
  }
`

export default function FourOFive({ data }) {
  return (
    <FourOFourStyle>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf | 404</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/404" />
      </Helmet>

      <meta http-equiv="refresh" content="6; url=/contact"></meta>

      <h1>{data.contentful404.heading}</h1>
      <h3
        id="message"
        dangerouslySetInnerHTML={{
          __html: data.contentful404.text.childMarkdownRemark.html,
        }}
      />
    </FourOFourStyle>
  )
}

export const query = graphql`
  query {
    contentful404 {
      heading
      text {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
