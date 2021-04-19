import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const InnerComponentLayoutStyle = styled.div`
  margin-bottom: ${rhythm(4)};
`

export default function InnerComponentLayout({ children }) {
  return <InnerComponentLayoutStyle>{children}</InnerComponentLayoutStyle>
}
