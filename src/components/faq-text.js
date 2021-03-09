import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function FaqText() {
  const data = useStaticQuery(graphql`
    query FaqTextQuery {
      contentfulFaq {
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
    <div>
      <h1>{data.contentfulFaq.heading}</h1>
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: data.contentfulFaq.text.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}
