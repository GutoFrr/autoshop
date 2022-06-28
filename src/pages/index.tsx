import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Autoshop | Home</title>
      </Head>

      <Link href="/shop">
        <a>
          This page is under production :C Click here to go to the Shop page!
        </a>
      </Link>
      <Link href="/single-product">
        <a>
          Or check how is single product page going!
        </a>
      </Link>
    </Container>
  )
}

export default Home
