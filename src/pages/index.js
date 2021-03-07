import React from "react"
import Layout from "../components/layout"
import IndexImage from "../components/index-image"
import IndexIntroduction from "../components/index-introduction"
import styled from "styled-components"

const StyledIndex = styled.div``

export default function Index() {
  return (
    <Layout>
      <StyledIndex>
        <IndexImage />
        <IndexIntroduction />
      </StyledIndex>
    </Layout>
  )
}
