import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa"
import styled from "styled-components"

const SocialMediaStyle = styled.nav`
  a {
    font-size: 3rem;
    color: #a1d0e5;
  }
`

export default function SocialMedia() {
  const data = useStaticQuery(graphql`
    query SocialMediaQuery {
      contentfulSocialMedia {
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
    <SocialMediaStyle>
      <h2>{data.contentfulSocialMedia.heading}</h2>
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: data.contentfulSocialMedia.text.childMarkdownRemark.html,
        }}
      />
      <a
        href="https://twitter.com/mehrkiezrixdorf?lang=de"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare />
      </a>
      <a
        href="https://www.instagram.com/kiezblockrixdorf/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare />
      </a>
    </SocialMediaStyle>
  )
}
