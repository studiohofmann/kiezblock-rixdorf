import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MasonryGalleryComponent from "../components/masonry-gallery-component"
import ComponentLayout from "../components/component-layout"

export default function FAQ({ data }) {
  return (
    <Layout>
      <h1>FAQ</h1>
      <h3>
        In Rixdorf wird seit vielen Jahren über Verkehrsberuhigung diskutiert.
        Warum es die Kampagne Kiezblock Rixdorf trotzdem braucht, haben wir hier
        aufgeschrieben.
      </h3>
      <MasonryGalleryComponent
        masonryGallery={data.allContentfulFaq.edges.map(edge => {
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
    allContentfulFaq(sort: { fields: oderNumber }) {
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
