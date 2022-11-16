import { ThemeProvider } from "styled-components"
import { myTheme } from "../components/styles/MyTheme"
import GlobalStyles from "../components/styles/Global"

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme = {myTheme}>
      <GlobalStyles />
      <Component {...pageProps} />

    </ThemeProvider>
  )
}

export default MyApp
