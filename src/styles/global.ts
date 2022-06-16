import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::selection {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.background};
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    line-height: 1.5;
    font-family: 'Open Sans', sans-serif;
  }
`
