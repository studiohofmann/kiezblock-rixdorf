import { css } from "@nfront/global-styles"

const globalStyles = css`
  html {
    margin: 0.5rem;
  }

  form {
    width: 100%;
  }

  button {
    color: white;
    padding: 0.7rem;
  }

  input,
  textarea {
    background: #ccce5f;
    color: white;
    width: 100%;
    border-style: none;
    margin-bottom: 1rem;
    padding: 0.7rem;
    border: none;
    resize: none;
  }

  @media (min-width: 992px) {
    html {
      margin: 1rem 25% 1rem 25%;
    }
  }
`

export default globalStyles
