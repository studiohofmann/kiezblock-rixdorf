import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ComponentLayout from "./component-layout"

export default function IndexNews() {
  const data = useStaticQuery(graphql`
    query IndexNewsQuery {
      contentfulNews {
        heading

        text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <ComponentLayout>
      <h2>{data.contentfulNews.heading}</h2>

      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: data.contentfulNews.text.childMarkdownRemark.html,
        }}
      />
    </ComponentLayout>
  )
}
