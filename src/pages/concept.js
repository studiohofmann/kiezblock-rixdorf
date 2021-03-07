import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const ConceptStyle = styled.div``

export default function Concept({ data }) {
  return (
    <Layout>
      <ConceptStyle>
        <h1>{data.contentfulConcept.header}</h1>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulConceptProblemsTextNode.childMarkdownRemark.html,
          }}
        />
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulConceptConceptTextNode.childMarkdownRemark.html,
          }}
        />
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulConceptActivitiesTextNode.childMarkdownRemark.html,
          }}
        />
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulConceptOneWayStreetsTextNode.childMarkdownRemark
                .html,
          }}
        />
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulConceptCyclistsTextNode.childMarkdownRemark.html,
          }}
        />
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulConceptPlacesTextNode.childMarkdownRemark.html,
          }}
        />
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulConceptMainStreetsTextNode.childMarkdownRemark
                .html,
          }}
        />
      </ConceptStyle>
    </Layout>
  )
}
export const query = graphql`
  query {
    contentfulConcept {
      header
    }
    contentfulConceptProblemsTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptConceptTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptActivitiesTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptOneWayStreetsTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptCyclistsTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptPlacesTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptMainStreetsTextNode {
      childMarkdownRemark {
        html
      }
    }
  }
`
