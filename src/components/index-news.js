import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ComponentLayout from "./component-layout"

const IndexNewsStyle = styled.div`
  display: flex;
  flex-direction: column;

  .post {
    flex: 1;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 4rem;
  }
`

export default function IndexNews() {
  const data = useStaticQuery(graphql`
    query IndexNewsQuery {
      allContentfulNews(limit: 2, sort: { fields: date, order: DESC }) {
        edges {
          node {
            heading
            date(formatString: "DD.MM.YYYY")
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
    <div>
      <h1>Neues</h1>
      <ComponentLayout>
        <IndexNewsStyle>
          {data.allContentfulNews.edges.map(edge => {
            return (
              <div className="post" key={edge.node.id}>
                <h3>{edge.node.heading}</h3>
                <h4>{edge.node.date}</h4>
                <div
                  className="body"
                  dangerouslySetInnerHTML={{
                    __html: edge.node.text.childMarkdownRemark.html,
                  }}
                />
              </div>
            )
          })}
        </IndexNewsStyle>
      </ComponentLayout>
    </div>
  )
}
