import Head from 'next/head'
import React from 'react'
import PageTitle from '../components/page-title'
import Product from '../components/single-product/product'
import { otherDetails, productDetails, shareProduct } from '../components/single-product/product/data'
import { Container } from '../styles/pages/SingleProduct'

const SingleProduct = () => {
  return (
    <Container>
      <Head>
        <title>Autoshop | Single Product</title>
      </Head>

      <PageTitle />
      <Product productDetails={productDetails} otherDetails={otherDetails} shareProduct={shareProduct} />
    </Container>
  )
}

export default SingleProduct
