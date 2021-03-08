import React from "react"
import Layout from "../components/layout"
import ContactIntroduction from "../components/contact-introduction"
import ContactForm from "../components/contact-form"

export default function Contact() {
  return (
    <Layout>
      <ContactIntroduction />
      <ContactForm />
    </Layout>
  )
}
