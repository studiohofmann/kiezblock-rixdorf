import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ComponentLayout from "./component-layout"

export default function NewsPost() {
  const data = useStaticQuery(graphql`
    query NewsPostQuery {
      allContentfulNews {
        nodes {
          heading
          date
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)
  return (
    <ComponentLayout>
      <div>
        {data.allContentfulNews.nodes.map(({ heading, date, text }, i) => {
          return (
            <div>
              <h2 key={i}>{heading}</h2>
              <h3 key={i}>{date}</h3>
              <div
                className="body"
                dangerouslySetInnerHTML={{
                  __html: text.childMarkdownRemark.html,
                }}
              />
            </div>
          )
        })}
      </div>
    </ComponentLayout>
  )
}
