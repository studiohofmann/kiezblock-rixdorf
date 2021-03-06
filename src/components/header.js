import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import Navigation from "./navigation"

const HeaderStyle = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
`

export default function Header() {
  return (
    <HeaderStyle>
      <Logo />
      <Navigation />
    </HeaderStyle>
  )
}
