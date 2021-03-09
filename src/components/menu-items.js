import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-transform: uppercase;
  color: #a1d0e5;
  text-decoration: none;

  @media (min-width: 992px) {
  }
`
const MenuItems = () => {
  return (
    <>
      <StyledLink to="/">
        <h3>start</h3>
      </StyledLink>
      <StyledLink to="/news">
        <h3>neues</h3>
      </StyledLink>
      <StyledLink to="/concept">
        <h3>konzept</h3>
      </StyledLink>
      <StyledLink to="/faq">
        <h3>faq</h3>
      </StyledLink>
      <StyledLink to="/contact">
        <h3>kontakt</h3>
      </StyledLink>
      <StyledLink to="/disclaimer">
        <h3>impressum</h3>
      </StyledLink>
    </>
  )
}

export default MenuItems
