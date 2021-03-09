import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import IndexImage from "../components/index-image"
import IndexIntroduction from "../components/index-introduction"
import IndexNews from "../components/index-news"

const StyledIndex = styled.div``

export default function Index() {
  return (
    <Layout>
      <StyledIndex>
        <IndexImage />
        <IndexIntroduction />
        <IndexNews />
      </StyledIndex>
    </Layout>
  )
}
