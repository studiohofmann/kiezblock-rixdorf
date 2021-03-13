import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ComponentLayout from "./component-layout"

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
        headingDemands
        textDemands {
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
        headingNews
      }
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
        <h1>{data.contentfulIndex.headingDemands}</h1>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: data.contentfulIndex.textDemands.childMarkdownRemark.html,
          }}
        />
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
      <ComponentLayout>
        <h1>{data.contentfulIndex.headingNews}</h1>

        <h2>{data.contentfulNews.heading}</h2>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: data.contentfulNews.text.childMarkdownRemark.html,
          }}
        />
      </ComponentLayout>
    </div>
  )
}
