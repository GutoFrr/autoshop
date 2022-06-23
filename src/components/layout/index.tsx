import React from 'react'
import Footer from '../footer'
import Header from '../header'
import Navbar from '../navbar'
import { Container } from './styles'

const Layout = () => {
  return (
    <Container>
      <Header />
      <Navbar />
    </Container>
  )
}

export default Layout
