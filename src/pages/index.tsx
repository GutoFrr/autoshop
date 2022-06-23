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
<<<<<<< HEAD

      <Link href="/shop">
        <a>
          This page is under production :C Click here to go to the Shop page!
        </a>
      </Link>
=======
      <Header />
      <Navbar />
      <Shop />
      <Footer />
>>>>>>> 4ac3c575ee4385b5f4d0b31ad0c037870a11249a
    </Container>
  )
}

export default Home
