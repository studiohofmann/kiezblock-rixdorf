import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

const LogoStyle = styled.nav`
  width: 10rem;

  #logoBlack:hover {
    filter: invert(84%) sepia(46%) saturate(484%) hue-rotate(10deg)
      brightness(91%) contrast(89%);
  }

  #logo:hover {
    filter: saturate(100%) brightness(0%);
  }

  @media (min-width: 992px) {
    position: fixed;
    top: 1rem;
    left: 1rem;
  }
`

export default function Logo() {
  return (
    <LogoStyle>
      <Link id="logoBlack" to="/">
        <StaticImage
          id="logo"
          src="http://images.ctfassets.net/ibcn0bfdro5j/6t9zE5iVztShd6WYHQ1lxl/8b05fed6edcdcbc22e67b453c71d8dfd/logo-kiezblock-rixdorf.png"
          alt="Logo Kiezblock Rixdorf"
          placeholder="blurred"
          layout="constrained"
          width={200}
        />
      </Link>
    </LogoStyle>
  )
}
