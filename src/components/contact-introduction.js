import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ComponentLayout from "./component-layout"

const StyledContactIntroduction = styled.div`
  h1 {
    text-transform: uppercase;
  }
`

export default function ContactIntroduction() {
  const data = useStaticQuery(graphql`
    query ContactIntroductionQuery {
      contentfulContact {
        heading
      }
      contentfulContactTextTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  `)
  return (
    <ComponentLayout>
      <StyledContactIntroduction>
        <h1>{data.contentfulContact.heading}</h1>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: data.contentfulContactTextTextNode.childMarkdownRemark.html,
          }}
        />
      </StyledContactIntroduction>
    </ComponentLayout>
  )
}
