import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>AutoShop</title>
      </Head>

      <h1>NextJS Structure</h1>
      <p>
        Next.js development structure by JVM&apos;s employee Gustavo Ferreira.
      </p>
    </Container>
  )
}

export default Home
