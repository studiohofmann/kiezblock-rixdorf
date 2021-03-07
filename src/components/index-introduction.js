import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default function IndexIntroduction() {
  const data = useStaticQuery(graphql`
    query IndexIntroductionQuery {
      contentfulIndex {
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <div>
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: data.contentfulIndex.description.childMarkdownRemark.html,
        }}
      />
      <p>
        Mehr über das Konzept erfahrt Ihr <Link to="/concept">hier</Link>.
      </p>
    </div>
  )
}
