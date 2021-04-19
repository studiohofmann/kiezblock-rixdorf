import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ComponentLayout from "../layouts/component-layout"
import { rhythm } from "../../utils/typography"
import InnerComponentLayout from "../layouts/inner-component-layout"

const NewsPreviewStyle = styled.div`
  @media (min-width: 992px) {
    display: flex;
    gap: ${rhythm(4)};
    margin-bottom: ${rhythm(-5)};

    #post {
      flex: 1;
    }
  }
`

export default function NewsPreview() {
  const data = useStaticQuery(graphql`
    query NewsPreviewQuery {
      allContentfulNews(limit: 2, sort: { fields: date, order: DESC }) {
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
  `)
  return (
    <ComponentLayout>
      <h1>Neues</h1>
      <NewsPreviewStyle>
        {data.allContentfulNews.edges.map(edge => {
          return (
            <div id="post">
              <InnerComponentLayout key={edge.node.id}>
                <h3>{edge.node.heading}</h3>
                <h4>{edge.node.date}</h4>
                <div
                  className="body"
                  dangerouslySetInnerHTML={{
                    __html: edge.node.text.childMarkdownRemark.html,
                  }}
                />
              </InnerComponentLayout>
            </div>
          )
        })}
      </NewsPreviewStyle>
    </ComponentLayout>
  )
}
