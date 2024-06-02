import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/Default'
import { GlobalStyle } from './styles/Global'
import { Router } from './Routes'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
