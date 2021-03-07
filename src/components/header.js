import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import Navigation from "./navigation"
import ComponentLayout from "./component-layout"

const HeaderStyle = styled.div``

export default function Header() {
  return (
    <ComponentLayout>
      <HeaderStyle>
        <Logo />
        <Navigation />
      </HeaderStyle>
    </ComponentLayout>
  )
}
