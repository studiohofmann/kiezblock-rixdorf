import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-transform: uppercase;

  @media (min-width: 992px) {
  }
`
const MenuItems = () => {
  return (
    <>
      <StyledLink to="/">
        <h5>start</h5>
      </StyledLink>
      <StyledLink to="/aktuell">
        <h5>aktuell</h5>
      </StyledLink>
      <StyledLink to="/concept">
        <h5>konzept</h5>
      </StyledLink>
      <StyledLink to="/faq">
        <h5>faq</h5>
      </StyledLink>
      <StyledLink to="/contact">
        <h5>kontakt</h5>
      </StyledLink>
      <StyledLink to="/impressum">
        <h5>impressum</h5>
      </StyledLink>
    </>
  )
}

export default MenuItems
