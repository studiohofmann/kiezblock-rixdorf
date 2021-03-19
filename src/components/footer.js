import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import NewsletterTest from "./newsletter-test"
import { Link } from "gatsby"
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa"
import LogoBlauSVG from "../logos/logo-kiezblock-rixdorf-blau.svg"
import ComponentLayout from "./component-layout"
import { rhythm } from "../utils/typography"

const FooterStyle = styled.div`
  padding: 50px;
  background: #e5907c;
  color: white;

  #socialIcons {
    display: flex;
    justify-content: space-evenly;
  }

  #copyrightContainer {
    display: flex;
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

  h3 {
    text-align: center;
  }

  a {
    font-size: 3rem;
    color: #a1d0e5;
    text-align: center;
  }

  @media (min-width: 992px) {
    padding: 1rem;

    #newsContainer {
      display: flex;
    }

    #newsletter {
      flex: 1;
      margin-right: 1rem;
    }

    #socialMedia {
      flex: 1;
      margin: 0rem 1rem 0rem 1rem;
    }

    #optionalText {
      flex: 1;
      margin-left: 1rem;
    }
  }
`

const LinkStyle = styled(Link)`
  display: inline-flex;
  align-items: flex-end;

  .logo {
    width: 5rem;
  }

  .logo:hover {
    filter: brightness(0) saturate(100%) invert(85%) sepia(44%) saturate(490%)
      hue-rotate(9deg) brightness(88%) contrast(95%);
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
      <div id="newsContainer">
        <div id="newsletter">
          <ComponentLayout>
            <h3>{footerData.headingNewsletter}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: footerData.textNewsletter.childMarkdownRemark.html,
              }}
            />
            <NewsletterTest />
          </ComponentLayout>
        </div>
        <div id="socialMedia">
          <ComponentLayout>
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
          </ComponentLayout>
        </div>
        <div id="optionalText">
          <ComponentLayout>
            <p>
              Kiezblock Rixdorf ist eine Kampagne der Initiative „Mehr Kiez für
              Rixdorf“
              <br />
              “Mehr Kiez für Rixdorf” ist ein Projekt von Changing Cities e.V.
            </p>
          </ComponentLayout>
        </div>
      </div>

      <div id="copyrightContainer">
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
      </div>
    </FooterStyle>
  )
}
