import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import IndexImage from "../components/index-image"
import IndexContent from "../components/index-content"
import { Helmet } from "react-helmet"

const StyledIndex = styled.div``

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/" />
      </Helmet>
      <StyledIndex>
        <IndexImage />
        <IndexContent />
      </StyledIndex>
    </Layout>
  )
}
