import React from "react"
import styled from "styled-components"

const ContactFormStyle = styled.div`
  display: flex;

  #buttonContainer {
    display: flex;
    justify-content: space-between;

    button {
      background-color: steelblue;
    }

    button:hover {
      background-color: indianred;
    }
  }
`

export default function ContactForm() {
  return (
    <ContactFormStyle>
      <form
        id="form"
        name="Contact Form"
        method="POST"
        data-netlify="true"
        action="/message-success"
      >
        <input type="hidden" name="form-name" value="Contact Form" />

        <div>
          <label htmlFor="name">Dein Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="email">Deine Email</label>
          <input type="text" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="message">Deine Nachricht</label>
          <textarea name="message" id="message" rows="6" />
        </div>
        <div id="buttonContainer">
          <button type="submit" value="Send Message" className="special">
            senden
          </button>
          <button type="reset" value="Clear">
            löschen
          </button>
        </div>
      </form>
    </ContactFormStyle>
  )
}
