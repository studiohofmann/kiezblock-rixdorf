import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import InnerComponentLayout from "./layouts/inner-component-layout"
import ComponentLayout from "./layouts/component-layout"

export default function NewsPost() {
  const data = useStaticQuery(graphql`
    query NewsPostQuery {
      allContentfulNews(sort: { fields: date, order: DESC }) {
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
    <ComponentLayout>
      {data.allContentfulNews.edges.map(edge => {
        return (
          <InnerComponentLayout key={edge.node.id}>
            <h3>{edge.node.heading}</h3>
            <h4>{edge.node.date}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: edge.node.text.childMarkdownRemark.html,
              }}
            />
          </InnerComponentLayout>
        )
      })}
    </ComponentLayout>
  )
}
