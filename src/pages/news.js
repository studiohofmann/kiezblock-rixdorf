import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ComponentLayout from "../components/component-layout"

export default function News({ data }) {
  return (
    <Layout>
      <h1>Neues</h1>
      {data.allContentfulNews.edges.map(edge => {
        return (
          <ComponentLayout className="post" key={edge.node.id}>
            <h2>{edge.node.heading}</h2>
            <h3>{edge.node.date}</h3>
            <div
              className="body"
              dangerouslySetInnerHTML={{
                __html: edge.node.text.childMarkdownRemark.html,
              }}
            />
          </ComponentLayout>
        )
      })}
    </Layout>
  )
}
export const query = graphql`
  query {
    allContentfulNews(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
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
`
