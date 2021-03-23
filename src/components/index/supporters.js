import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ComponentLayout from "../layouts/component-layout"

export default function Supporters() {
  const data = useStaticQuery(graphql`
    query SupportersQuery {
      contentfulIndex {
        headingSupporters
        textSupporters {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <ComponentLayout>
      <h1>{data.contentfulIndex.headingSupporters}</h1>
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: data.contentfulIndex.textSupporters.childMarkdownRemark.html,
        }}
      />
    </ComponentLayout>
  )
}
