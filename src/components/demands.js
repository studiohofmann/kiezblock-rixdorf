import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import MasonryGalleryComponent from "./masonry-gallery-component"
import { AiOutlineArrowDown } from "react-icons/ai"

const DemandsStyle = styled.div`
  h3 {
    text-align: center;
  }
`

export default function Demands() {
  const data = useStaticQuery(graphql`
    query DemandsQuery {
      allContentfulDemands(sort: { fields: orderNumber }) {
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
  `)
  return (
    <DemandsStyle>
      <h1>Unsere Forderungen</h1>
      <MasonryGalleryComponent
        masonryGallery={data.allContentfulDemands.edges.map(edge => {
          return (
            <div className="post" key={edge.node.id}>
              <h3>{edge.node.heading}</h3>
              <h3>
                <AiOutlineArrowDown />
              </h3>
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
    </DemandsStyle>
  )
}
