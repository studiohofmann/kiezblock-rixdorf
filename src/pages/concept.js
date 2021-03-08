import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import ComponentLayout from "../components/component-layout"

const ConceptStyle = styled.div`
  h1 {
    text-transform: uppercase;
  }
`

export default function Concept({ data }) {
  return (
    <Layout>
      <ComponentLayout>
        <ConceptStyle>
          <h1>{data.contentfulConcept.heading}</h1>
          <h2>{data.contentfulConcept.headingProblems}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextProblemsTextNode.childMarkdownRemark
                  .html,
            }}
          />
          <h2>{data.contentfulConcept.headingConcept}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextConceptTextNode.childMarkdownRemark
                  .html,
            }}
          />
          <h2>{data.contentfulConcept.headingActivities}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextActivitiesTextNode.childMarkdownRemark
                  .html,
            }}
          />
          <h2>{data.contentfulConcept.headingOneWayStreets}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextOneWayStreetsTextNode
                  .childMarkdownRemark.html,
            }}
          />
          <h2>{data.contentfulConcept.headingCyclists}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextCyclistsTextNode.childMarkdownRemark
                  .html,
            }}
          />
          <h2>{data.contentfulConcept.headingPlaces}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextPlacesTextNode.childMarkdownRemark
                  .html,
            }}
          />
          <h2>{data.contentfulConcept.headingMainStreets}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextMainStreetsTextNode
                  .childMarkdownRemark.html,
            }}
          />
        </ConceptStyle>
      </ComponentLayout>
    </Layout>
  )
}
export const query = graphql`
  query {
    contentfulConcept {
      heading
      headingProblems
      headingConcept
      headingActivities
      headingOneWayStreets
      headingCyclists
      headingPlaces
      headingMainStreets
    }
    contentfulConceptTextProblemsTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptTextConceptTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptTextActivitiesTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptTextOneWayStreetsTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptTextCyclistsTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptTextPlacesTextNode {
      childMarkdownRemark {
        html
      }
    }
    contentfulConceptTextMainStreetsTextNode {
      childMarkdownRemark {
        html
      }
    }
  }
`
