import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import ComponentLayout from "../components/layouts/component-layout"
import InnerComponentLayout from "../components/layouts/inner-component-layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const DisclaimerStyle = styled.div`
  @media (min-width: 992px) {
    margin-bottom: ${rhythm(-4)};
    display: flex;

    #disclaimer {
      flex: 1;
      margin-right: ${rhythm(2)};
    }
    #privacy {
      flex: 1;
      margin-left: ${rhythm(2)};
    }
  }
`

export default function Disclaimer({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf | Impressum</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/disclaimer" />
      </Helmet>

      <ComponentLayout>
        <DisclaimerStyle>
          <div id="disclaimer">
            <h1>Impressum</h1>
            {data.allContentfulDisclaimer.edges.map(edge => {
              return (
                <InnerComponentLayout key={edge.node.id}>
                  <h3>{edge.node.heading}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: edge.node.text.childMarkdownRemark.html,
                    }}
                  />
                </InnerComponentLayout>
              )
            })}
          </div>

          <div id="privacy">
            <h1>Datenschutz</h1>
            {data.allContentfulPrivacy.edges.map(edge => {
              return (
                <InnerComponentLayout key={edge.node.id}>
                  <h3>{edge.node.heading}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: edge.node.text.childMarkdownRemark.html,
                    }}
                  />
                </InnerComponentLayout>
              )
            })}
          </div>
        </DisclaimerStyle>
      </ComponentLayout>
    </Layout>
  )
}
export const query = graphql`
  query {
    allContentfulDisclaimer(sort: { fields: orderNumber }) {
      edges {
        node {
          id
          heading
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPrivacy(sort: { fields: orderNumber }) {
      edges {
        node {
          id
          heading
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
