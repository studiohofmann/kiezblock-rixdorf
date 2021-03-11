import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import NewsletterTest from "./newsletter-test"
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa"

const FooterStyle = styled.div`
  padding: 0.5rem;
  background: #e5907c;
  display: flex;
  flex-direction: column;

  #socialIcons {
    display: flex;
    justify-content: space-evenly;
  }

  #copyrightContainer {
    display: flex;
  }

  #logo {
    flex: 1;
    margin-right: 0.5rem;
  }
  #copyright {
    flex: 2;
    margin-left: 0.5rem;
  }

  h2 {
    color: white;
    text-align: center;
  }

  p {
    color: white;
  }

  a {
    font-size: 3rem;
    color: #a1d0e5;
    text-align: center;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-end;

    #newsletter {
      flex: 1;
      margin-right: 1rem;
    }

    #socialMedia {
      flex: 1;
      margin: 0rem 1rem 0rem 1rem;
    }

    #copyrightContainer {
      flex: 1;
      margin-left: 1rem;
    }
    #logo {
    }
    #copyright {
    }
  }
`

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        headingNewsletter
        textNewsletter {
          childMarkdownRemark {
            html
          }
        }
        headingSocialMedia
        textSocialMedia {
          childMarkdownRemark {
            html
          }
        }
        logo {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            width: 180
          )
          description
        }
        textCopyright {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const image = getImage(data.contentfulFooter.logo)
  const footerData = data.contentfulFooter

  return (
    <FooterStyle>
      <div id="newsletter">
        <h2>{footerData.headingNewsletter}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: footerData.textNewsletter.childMarkdownRemark.html,
          }}
        />
        <NewsletterTest />
      </div>

      <div id="socialMedia">
        <h2>{footerData.headingSocialMedia}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: footerData.textSocialMedia.childMarkdownRemark.html,
          }}
        />
        <div id="socialIcons">
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
        </div>
      </div>

      <div id="copyrightContainer">
        <div id="logo">
          <GatsbyImage image={image} alt={image.description} />
        </div>

        <div
          id="copyright"
          dangerouslySetInnerHTML={{
            __html: footerData.textCopyright.childMarkdownRemark.html,
          }}
        />
      </div>
    </FooterStyle>
  )
}
