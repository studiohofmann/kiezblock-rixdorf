import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import ContactForm from "../components/forms/contact-form"
import { Helmet } from "react-helmet"
import ComponentLayout from "../components/layouts/component-layout"
import InnerComponentLayout from "../components/layouts/inner-component-layout"

export default function Contact({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf | Kontakt</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/contact" />
      </Helmet>

      <ComponentLayout>
        <InnerComponentLayout>
          <h1>{data.contentfulContact.heading}</h1>

          <h3
            className="text"
            dangerouslySetInnerHTML={{
              __html: data.contentfulContact.text.childMarkdownRemark.html,
            }}
          />
        </InnerComponentLayout>

        <ContactForm />
      </ComponentLayout>
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
