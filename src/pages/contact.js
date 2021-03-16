import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import ContactForm from "../components/contact-form"

const ContactStyle = styled.div`
  display: flex;

  .text {
    flex: 1;
    margin-right: 2rem;
  }
  .form {
    flex: 2;
    margin-left: 2rem;
  }
`

export default function Contact({ data }) {
  return (
    <Layout>
      <h1>{data.contentfulContact.heading}</h1>
      <ContactStyle>
        <div
          className="text"
          dangerouslySetInnerHTML={{
            __html: data.contentfulContact.text.childMarkdownRemark.html,
          }}
        />
        <div className="form">
          <ContactForm />
        </div>
      </ContactStyle>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulContact {
      heading
      text {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
