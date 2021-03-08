import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import IndexImage from "../components/index-image"
import IndexIntroduction from "../components/index-introduction"
import MailchimpForm from "../components/mailchimp-form"

const StyledIndex = styled.div``

export default function Index() {
  return (
    <Layout>
      <StyledIndex>
        <IndexImage />
        <IndexIntroduction />
        <MailchimpForm />
      </StyledIndex>
    </Layout>
  )
}
