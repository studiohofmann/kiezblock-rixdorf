import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layouts/layout"
import ComponentLayout from "../components/layouts/component-layout"
import InnerComponentLayout from "../components/layouts/inner-component-layout"
import { Helmet } from "react-helmet"
import { rhythm } from "../utils/typography"
import { AiOutlineArrowDown } from "react-icons/ai"

const ConceptStyle = styled.div`
  @media (min-width: 992px) {
    display: flex;

    #text {
      flex: 1;
      margin-right: ${rhythm(2)};
    }
    #image {
      flex: 1;
      margin-left: ${rhythm(2)};
    }
  }
`

export default function Concept({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf | Konzept</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/concept" />
      </Helmet>

      <h1>Konzept</h1>
      <ComponentLayout>
        {data.allContentfulConcept.edges.map(edge => {
          const image = getImage(edge.node.image)
          return (
            <InnerComponentLayout key={edge.node.id}>
              <ConceptStyle>
                <div id="text">
                  <h3>{edge.node.heading}</h3>
                  <h3>
                    <AiOutlineArrowDown />
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: edge.node.text.childMarkdownRemark.html,
                    }}
                  />
                </div>
                <div id="image">
                  <GatsbyImage image={image} alt={image.description} />
                </div>
              </ConceptStyle>
            </InnerComponentLayout>
          )
        })}
      </ComponentLayout>
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
