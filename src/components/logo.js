import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import LogoSVG from "../logos/logo-kiezblock-rixdorf.svg"

const LinkStyle = styled(Link)`
  .logo {
    width: 10rem;
  }

  .logo:hover {
    filter: brightness(0) saturate(100%) invert(85%) sepia(44%) saturate(490%)
      hue-rotate(9deg) brightness(88%) contrast(95%);
  }

  @media (min-width: 992px) {
    position: fixed;
    top: 1rem;
    left: 1rem;
  }
`

export default function Logo() {
  return (
    <LinkStyle to="/">
      <LogoSVG className="logo" alt="Logo Kiezblock Rixdorf" />
    </LinkStyle>
  )
}
