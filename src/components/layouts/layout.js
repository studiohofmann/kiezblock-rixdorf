import React from "react"
import Header from "./header/header"
import Footer from "./footer"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const StyledLayout = styled.div`
  margin: ${rhythm(1 / 2)};

  form {
    width: 100%;
    margin-bottom: 0;
  }

  button {
    background-color: #a1d0e5;
    color: white;
    border: none;
    border-radius: 0;
  }

  input {
    border-radius: 0;
  }

  @media (min-width: 992px) {
    margin: ${rhythm(1)} ${rhythm(8)} ${rhythm(1)} ${rhythm(8)};
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
