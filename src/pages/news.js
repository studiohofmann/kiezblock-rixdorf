import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ComponentLayout from "../components/component-layout"
import { Helmet } from "react-helmet"

export default function News({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf | Neues</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/news" />
      </Helmet>
      <h1>Neues</h1>
      {data.allContentfulNews.edges.map(edge => {
        return (
          <ComponentLayout className="post" key={edge.node.id}>
            <h3>{edge.node.heading}</h3>
            <h4>{edge.node.date}</h4>
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
