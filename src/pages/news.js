import React from "react"
import Layout from "../components/layouts/layout"
import { graphql } from "gatsby"
import ComponentLayout from "../components/layouts/component-layout"
import { Helmet } from "react-helmet"
import InnerComponentLayout from "../components/layouts/inner-component-layout"

export default function News({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf | Neues</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/news" />
      </Helmet>

      <ComponentLayout>
        <h1>Neues</h1>
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
    </Layout>
  )
}

export const query = graphql`
  query {
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
`
