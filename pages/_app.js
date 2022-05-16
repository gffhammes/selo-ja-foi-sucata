import { createTheme, ThemeProvider } from '@mui/material'
import { Footer } from '../src/components/commons/Footer';
import { Navbar } from '../src/components/commons/Navbar'
import { PageHeadTitle } from '../src/components/commons/PageHeadTitle'
import NProgress from "nprogress"
import Router from "next/router"
import '../styles/globals.scss'

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()


const { palette } = createTheme();

const theme = createTheme({
  typography: {
    fontFamily: 'Lexend, sans-serif',
    fontWeight: '500',
    body1: {
      fontWeight: '500',
    },
    h1: {
      fontSize: 48,
      fontWeight: '500',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '500',
    },
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    blue: palette.augmentColor({ color: { [500]: '#22EFE7' } }),
    red: palette.augmentColor({ color: { main: '#EC1906' } }),
    pink: palette.augmentColor({ color: { main: '#FF39E3' } }),
    green: palette.augmentColor({ color: { main: '#8aff24' } }),
    yellow: palette.augmentColor({ color: { main: '#fff600' } }),
    white: palette.augmentColor({ color: { main: '#fff' } }),
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <PageHeadTitle />  
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
