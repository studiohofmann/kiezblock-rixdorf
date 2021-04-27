import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import NewsletterTest from "../forms/newsletter-test"
import { Link } from "gatsby"
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa"
import LogoBlauSVG from "../../logos/logo-kiezblock-rixdorf-blau.svg"
import { rhythm } from "../../utils/typography"

const FooterStyle = styled.div`
  p {
    text-align: center;
  }

  #copyright {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  h4 {
    margin-bottom: ${rhythm(0)};
  }

  h4 p {
    margin-bottom: 0;
  }
`

const TriptychStyle = styled.div`
  @media (min-width: 992px) {
    display: flex;
  }
`

const NewsletterStyle = styled.div`
  background: #a8ce80;
  color: white;
  padding: ${rhythm(1 / 2)};
  border-bottom: ${rhythm(1 / 2)} solid white;

  @media (min-width: 992px) {
    padding: ${rhythm(1)};
    flex: 1;
    border-right: ${rhythm(1)} solid white;
    border-bottom: ${rhythm(1)} solid white;
  }
`

const SocialMediaStyle = styled.div`
  background: #e5907c;
  color: white;
  padding: ${rhythm(1 / 2)};
  border-bottom: ${rhythm(1 / 2)} solid white;

  #socialIcons {
    display: flex;
    justify-content: space-evenly;
  }

  a {
    font-size: ${rhythm(2)};
    height: ${rhythm(2.2)};
  }

  @media (min-width: 992px) {
    padding: ${rhythm(1)};
    flex: 1;
    border-bottom: ${rhythm(1)} solid white;
  }
`

const OptionalTextStyle = styled.div`
  background: #a1d0e5;
  color: white;
  padding: ${rhythm(1 / 2)};
  border-bottom: ${rhythm(1 / 2)} solid white;

  #optionalText {
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    padding: ${rhythm(1)};
    flex: 1;
    border-left: ${rhythm(1)} solid white;
    border-bottom: ${rhythm(1)} solid white;
  }
`

const CopyrightStyle = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: ${rhythm(1 / 2)};

  @media (min-width: 992px) {
    padding: ${rhythm(1)};
  }
`

const LinkStyle = styled(Link)`
  display: inline-flex;
  align-items: flex-end;

  .logo {
    width: ${rhythm(2)};
  }

  .logo:hover {
    filter: brightness(0) saturate(100%) invert(43%) sepia(13%) saturate(2789%)
      hue-rotate(313deg) brightness(100%) contrast(77%);
  }

  @media (min-width: 992px) {
    .logo {
      width: ${rhythm(3)};
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
        headingDonations
        textDonations {
          childMarkdownRemark {
            html
          }
        }

        textCopyright {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const footerData = data.contentfulFooter

  return (
    <FooterStyle>
      <TriptychStyle>
        <NewsletterStyle>
          <h3>{footerData.headingNewsletter}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: footerData.textNewsletter.childMarkdownRemark.html,
            }}
          />
          <NewsletterTest />
        </NewsletterStyle>

        <SocialMediaStyle>
          <h3>{footerData.headingSocialMedia}</h3>
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
        </SocialMediaStyle>

        <OptionalTextStyle>
          <h3>{footerData.headingDonations}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: footerData.textDonations.childMarkdownRemark.html,
            }}
          />
        </OptionalTextStyle>
      </TriptychStyle>

      <CopyrightStyle>
        <LinkStyle to="/">
          <LogoBlauSVG className="logo" />
        </LinkStyle>

        <div id="copyright">
          <h4>{new Date().getFullYear()}&nbsp; </h4>
          <h4
            dangerouslySetInnerHTML={{
              __html: footerData.textCopyright.childMarkdownRemark.html,
            }}
          />
        </div>
      </CopyrightStyle>
    </FooterStyle>
  )
}
