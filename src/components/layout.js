import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

const StyledLayout = styled.div`
  margin: 0.7rem;
`

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  )
}
