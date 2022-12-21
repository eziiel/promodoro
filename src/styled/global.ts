import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-300']};
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
  }

  body, input, text-area, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smothing: antialiesed;
  }

  a,li,ul {
    text-decoration: none;
    list-style: none;
  }
`
