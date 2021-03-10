import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

const StyledLayout = styled.div`
  button {
    background-color: #a1d0e5;
    color: white;
    border: none;
    border-radius: 0;
  }

  input {
    border-radius: 0;
  }
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
