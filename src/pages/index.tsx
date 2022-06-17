import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Products from '../components/products'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>AutoShop</title>
      </Head>

      <Header />
      <Navbar />
      <Products />
    </Container>
  )
}

export default Home
