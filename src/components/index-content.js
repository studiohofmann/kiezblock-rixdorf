import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ComponentLayout from "./component-layout"
import Demands from "./demands"
import IndexNews from "./index-news"

export default function IndexContent() {
  const data = useStaticQuery(graphql`
    query IndexContentQuery {
      contentfulIndex {
        headingIntroduction
        textIntroduction {
          childMarkdownRemark {
            html
          }
        }
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
    <div>
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
      <ComponentLayout>
        <Demands />
      </ComponentLayout>

      <ComponentLayout>
        <h1>{data.contentfulIndex.headingSupporters}</h1>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulIndex.textSupporters.childMarkdownRemark.html,
          }}
        />
      </ComponentLayout>
      <IndexNews />
    </div>
  )
}
