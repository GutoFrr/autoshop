import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Header from '../components/header'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
