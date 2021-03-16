import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MasonryGalleryComponent from "../components/masonry-gallery-component"
import ComponentLayout from "../components/component-layout"

export default function Disclaimer({ data }) {
  return (
    <Layout>
      <h1>Impressum</h1>
      <MasonryGalleryComponent
        masonryGallery={data.allContentfulDisclaimer.edges.map(edge => {
          return (
            <ComponentLayout className="post" key={edge.node.id}>
              <h3>{edge.node.heading}</h3>
              <div
                className="body"
                dangerouslySetInnerHTML={{
                  __html: edge.node.text.childMarkdownRemark.html,
                }}
              />
            </ComponentLayout>
          )
        })}
      />
      <h1>Privacy</h1>
      <MasonryGalleryComponent
        masonryGallery={data.allContentfulPrivacy.edges.map(edge => {
          return (
            <ComponentLayout className="post" key={edge.node.id}>
              <h3>{edge.node.heading}</h3>
              <div
                className="body"
                dangerouslySetInnerHTML={{
                  __html: edge.node.text.childMarkdownRemark.html,
                }}
              />
            </ComponentLayout>
          )
        })}
      />
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
