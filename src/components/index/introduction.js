import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ComponentLayout from "../layouts/component-layout"

export default function Introduction() {
  const data = useStaticQuery(graphql`
    query IntroductionQuery {
      contentfulIndex {
        headingIntroduction
        textIntroduction {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <ComponentLayout>
      <h1>{data.contentfulIndex.headingIntroduction}</h1>
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html:
            data.contentfulIndex.textIntroduction.childMarkdownRemark.html,
        }}
      />
    </ComponentLayout>
  )
}
