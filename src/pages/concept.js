import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import ComponentLayout from "../components/component-layout"

const ConceptStyle = styled.div`
  h1 {
    text-transform: uppercase;
  }
`

export default function Concept({ data }) {
  const imageProblems = getImage(data.contentfulConcept.imageProblems)
  const imageConcept = getImage(data.contentfulConcept.imageConcept)
  const imageActivities = getImage(data.contentfulConcept.imageActivities)
  const imageCyclists = getImage(data.contentfulConcept.imageCyclists)
  const imagePlaces = getImage(data.contentfulConcept.imagePlaces)
  const imageMainStreets = getImage(data.contentfulConcept.imageMainStreets)

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
          <GatsbyImage image={imageProblems} />
          <h2>{data.contentfulConcept.headingConcept}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextConceptTextNode.childMarkdownRemark
                  .html,
            }}
          />
          <GatsbyImage image={imageConcept} />
          <h2>{data.contentfulConcept.headingActivities}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextActivitiesTextNode.childMarkdownRemark
                  .html,
            }}
          />
          <GatsbyImage image={imageActivities} />
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
          <GatsbyImage image={imageCyclists} />
          <h2>{data.contentfulConcept.headingPlaces}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextPlacesTextNode.childMarkdownRemark
                  .html,
            }}
          />
          <GatsbyImage image={imagePlaces} />
          <h2>{data.contentfulConcept.headingMainStreets}</h2>
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulConceptTextMainStreetsTextNode
                  .childMarkdownRemark.html,
            }}
          />
          <GatsbyImage image={imageMainStreets} />
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

      imageProblems {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          width: 1500
        )
      }
      imageConcept {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          width: 1500
        )
      }
      imageActivities {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          width: 1500
        )
      }
      imageCyclists {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          width: 1500
        )
      }
      imagePlaces {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          width: 1500
        )
      }

      imageMainStreets {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          width: 1500
        )
      }
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
