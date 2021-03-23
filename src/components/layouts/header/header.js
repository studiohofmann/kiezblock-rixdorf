import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import Navigation from "../header/navigation"
import { rhythm } from "../../../utils/typography"

const HeaderStyle = styled.div`
  margin-bottom: ${rhythm(4)};
`

export default function Header() {
  return (
    <HeaderStyle>
      <Logo />
      <Navigation />
    </HeaderStyle>
  )
}
