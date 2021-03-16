import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const StyledComponentLayout = styled.div`
  margin-bottom: ${rhythm(5)};
`

export default function ComponentLayout({ children }) {
  return <StyledComponentLayout>{children}</StyledComponentLayout>
}
