import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./Components/Header/Header"
import { Summary } from "./Components/Summary"

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>

      <GlobalStyle/>
<Header/>
<Summary/>
    </ThemeProvider>
  )
}