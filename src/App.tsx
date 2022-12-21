import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './styled/global'
import { defaultTheme } from './styled/theme/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { CyclesContextProvider } from './context/CyclesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
