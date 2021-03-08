import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import ComponentLayout from "./component-layout"

const StyledIndexIntroduction = styled.div`
  h1 {
    text-transform: uppercase;
  }
`

export default function IndexIntroduction() {
  const data = useStaticQuery(graphql`
    query IndexIntroductionQuery {
      contentfulIndex {
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
      <StyledIndexIntroduction>
        <h1>{data.contentfulIndex.heading}</h1>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: data.contentfulIndex.text.childMarkdownRemark.html,
          }}
        />
        <div>
          Mehr über das Konzept erfahrt Ihr <Link to="/concept">hier</Link>.
        </div>
      </StyledIndexIntroduction>
    </ComponentLayout>
  )
}
