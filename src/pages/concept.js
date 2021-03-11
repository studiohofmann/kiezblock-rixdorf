import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import ComponentLayout from "../components/component-layout"

export default function Concept({ data }) {
  return (
    <Layout>
      <h1>Konzept</h1>
      {data.allContentfulConcept.edges.map(edge => {
        const image = getImage(edge.node.image)
        return (
          <ComponentLayout className="post" key={edge.node.id}>
            <h2>{edge.node.heading}</h2>
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
