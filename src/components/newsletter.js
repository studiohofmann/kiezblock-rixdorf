import React from "react"
import styled from "styled-components"
import NewsletterIntroduction from "./newsletter-introduction"
import NewsletterForm from "./newsletter-form"
import ComponentLayout from "./component-layout"

const NewsletterStyle = styled.div``

export default function Header() {
  return (
    <ComponentLayout>
      <NewsletterStyle>
        <NewsletterIntroduction />
        <NewsletterForm />
      </NewsletterStyle>
    </ComponentLayout>
  )
}
