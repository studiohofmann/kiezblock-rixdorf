import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import MasonryGalleryComponent from "../components/masonry-gallery-component"
import ComponentLayout from "../components/component-layout"
import { Helmet } from "react-helmet"

export default function Concept({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf | Konzept</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/concept" />
      </Helmet>
      <h1>Konzept</h1>
      <MasonryGalleryComponent
        masonryGallery={data.allContentfulConcept.edges.map(edge => {
          const image = getImage(edge.node.image)
          return (
            <ComponentLayout className="post" key={edge.node.id}>
              <h3>{edge.node.heading}</h3>
              <div
                className="body"
                dangerouslySetInnerHTML={{
                  __html: edge.node.text.childMarkdownRemark.html,
                }}
              />
              <GatsbyImage image={image} alt={image.description} />
            </ComponentLayout>
          )
        })}
      />
    </Layout>
  )
}
export const query = graphql`
  query {
    allContentfulConcept(sort: { fields: orderNumber }) {
      edges {
        node {
          id
          heading
          text {
            childMarkdownRemark {
              html
            }
          }
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              quality: 100
              width: 1500
            )
            description
          }
        }
      }
    }
  }
`
