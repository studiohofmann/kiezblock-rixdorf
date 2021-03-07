import React from "react"
import styled from "styled-components"

const StyledComponentLayout = styled.div`
  margin-bottom: 5rem;
`

export default function ComponentLayout({ children }) {
  return <StyledComponentLayout>{children}</StyledComponentLayout>
}
