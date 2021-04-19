import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const ComponentLayoutStyle = styled.div`
  margin-bottom: ${rhythm(4)};

  @media (min-width: 992px) {
    margin-bottom: ${rhythm(8)};
  }
`

export default function ComponentLayout({ children }) {
  return <ComponentLayoutStyle>{children}</ComponentLayoutStyle>
}
