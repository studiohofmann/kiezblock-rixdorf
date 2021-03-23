import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layouts/layout"
import ComponentLayout from "../components/layouts/component-layout"
import InnerComponentLayout from "../components/layouts/inner-component-layout"
import { Helmet } from "react-helmet"
import { rhythm } from "../utils/typography"
import { AiOutlineArrowDown } from "react-icons/ai"

const FAQStyle = styled.div`
  @media (min-width: 992px) {
    display: flex;
    margin-bottom: ${rhythm(-1)};

    #question {
      flex: 1;
      margin-right: ${rhythm(2)};
    }
    #arrow {
      margin: ${rhythm(0)} ${rhythm(2)} ${rhythm(0)} ${rhythm(2)};
    }

    #rotation {
      transform: rotate(-90deg);
    }

    #answer {
      flex: 1;
      margin-left: ${rhythm(2)};
    }
  }
`

export default function FAQ({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf | FAQ</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/concept" />
      </Helmet>

      <h1>FAQ</h1>
      <InnerComponentLayout>
        <h3>
          In Rixdorf wird seit vielen Jahren über Verkehrsberuhigung diskutiert.
          <br />
          Warum es die Kampagne Kiezblock Rixdorf trotzdem braucht, haben wir
          hier aufgeschrieben.
        </h3>
      </InnerComponentLayout>
      <ComponentLayout>
        {data.allContentfulFaq.edges.map(edge => {
          return (
            <InnerComponentLayout key={edge.node.id}>
              <FAQStyle>
                <h3 id="question">{edge.node.heading}</h3>
                <h3 id="arrow">
                  <AiOutlineArrowDown id="rotation" />
                </h3>
                <div
                  id="answer"
                  dangerouslySetInnerHTML={{
                    __html: edge.node.text.childMarkdownRemark.html,
                  }}
                />
              </FAQStyle>
            </InnerComponentLayout>
          )
        })}
      </ComponentLayout>
    </Layout>
  )
}
export const query = graphql`
  query {
    allContentfulFaq(sort: { fields: oderNumber }) {
      edges {
        node {
          id
          heading
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
