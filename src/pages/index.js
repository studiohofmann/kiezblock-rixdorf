import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import IndexImage from "../components/index-image"
import IndexContent from "../components/index-content"

const StyledIndex = styled.div``

export default function Index() {
  return (
    <Layout>
      <StyledIndex>
        <IndexImage />
        <IndexContent />
      </StyledIndex>
    </Layout>
  )
}
