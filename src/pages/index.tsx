import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Shop from '../components/shop'
import Footer from '../components/footer'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>AutoShop</title>
      </Head>
      <Header />
      <Navbar />
      <Shop />
      <Footer />
    </Container>
  )
}

export default Home
