import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../../utils/typography"

const StyledLink = styled(Link)`
  text-transform: uppercase;

  @media (min-width: 992px) {
    text-align: right;
    h4 {
      margin-bottom: ${rhythm(1 / 3)};
    }
  }
`
const activeStyles = { color: "indianred" }

const MenuItems = () => {
  return (
    <>
      <StyledLink to="/news" activeStyle={activeStyles}>
        <h4>neues</h4>
      </StyledLink>
      <StyledLink to="/concept" activeStyle={activeStyles}>
        <h4>konzept</h4>
      </StyledLink>
      <StyledLink to="/faq" activeStyle={activeStyles}>
        <h4>faq</h4>
      </StyledLink>
      <StyledLink to="/contact" activeStyle={activeStyles}>
        <h4>kontakt</h4>
      </StyledLink>
      <StyledLink to="/disclaimer" activeStyle={activeStyles}>
        <h4>impressum</h4>
      </StyledLink>
    </>
  )
}

export default MenuItems
