import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

const StyledLayout = styled.div`
  margin: 0.7rem;

  button {
    background-color: #a1d0e5;
    color: white;
    border: none;
    border-radius: 0;
  }

  @media (min-width: 992px) {
    margin: 0 33vw 0 33vw;
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
