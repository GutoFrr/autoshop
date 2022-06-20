import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Shop from '../components/shop'
import PageTitle from '../components/page-title'
import Footer from '../components/footer'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>AutoShop</title>
      </Head>

      <Header />
      <Navbar />
      <PageTitle />
      <Shop />
      <Footer />
    </Container>
  )
}

export default Home
