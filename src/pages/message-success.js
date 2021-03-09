import React from "react"
import styled from "styled-components"
import MessageSuccessText from "../components/message-success-text"

const MessageSuccessStyle = styled.div`
  color: white;
  background: #a8ce80;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function MessageSuccess() {
  return (
    <MessageSuccessStyle>
      <meta http-equiv="refresh" content="6; url=/contact"></meta>
      <MessageSuccessText />
    </MessageSuccessStyle>
  )
}
