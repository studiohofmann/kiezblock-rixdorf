import React, { useState } from "react"
import MenuItems from "./menu-items"
import styled from "styled-components"

const NavigationStyle = styled.nav`
  display: flex;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1;

  @media (max-width: 768px) {
    height: 1.5rem;
    width: 1.5rem;
    position: fixed;
    top: 0rem;
    right: 1rem;
  }
`

const Toggle = styled.div`
  margin-top: 1rem;
  display: none;
  height: 100%;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: red;
    position: fixed;
    width: 100%;
    transition: all 0.3s ease-in;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #3a3d3b;
  width: 1.5rem;
  height: 0.2rem;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 1.5rem;
    height: 0.2rem;
    background-color: #3a3d3b;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <NavigationStyle>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <MenuItems />
        </Navbox>
      ) : (
        <Navbox open>
          <MenuItems />
        </Navbox>
      )}
    </NavigationStyle>
  )
}

export default Navigation
