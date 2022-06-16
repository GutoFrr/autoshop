import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Header from '../components/header'
import Navbar from '../components/navbar'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>AutoShop</title>
      </Head>

      <Header />
      <Navbar />
    </Container>
  )
}

export default Home
