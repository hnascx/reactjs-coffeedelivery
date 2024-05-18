import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
  }

  body::-webkit-scrollbar {
    width: 6px;               /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors['brand-purple-dark']};
    border-radius: 6px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
