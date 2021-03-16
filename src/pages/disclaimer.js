import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MasonryGalleryComponent from "../components/masonry-gallery-component"
import ComponentLayout from "../components/component-layout"
import { Helmet } from "react-helmet"

export default function Disclaimer({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf | Impressum</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/disclaimer" />
      </Helmet>
      <ComponentLayout>
        <h1>Impressum</h1>
        <MasonryGalleryComponent
          masonryGallery={data.allContentfulDisclaimer.edges.map(edge => {
            return (
              <div key={edge.node.id}>
                <h3>{edge.node.heading}</h3>
                <div
                  className="body"
                  dangerouslySetInnerHTML={{
                    __html: edge.node.text.childMarkdownRemark.html,
                  }}
                />
              </div>
            )
          })}
        />
      </ComponentLayout>
      <ComponentLayout>
        <h1>Datenschutz</h1>
        <MasonryGalleryComponent
          masonryGallery={data.allContentfulPrivacy.edges.map(edge => {
            return (
              <div key={edge.node.id}>
                <h3>{edge.node.heading}</h3>
                <div
                  className="body"
                  dangerouslySetInnerHTML={{
                    __html: edge.node.text.childMarkdownRemark.html,
                  }}
                />
              </div>
            )
          })}
        />
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
