import React from 'react'
import Head from 'next/head'
import PageTitle from '../../components/page-title'
import Product from '../../components/single-product/product'
import {
  otherDetails,
  productDetails,
  productSlider,
  shareProduct
} from '../../components/single-product/product/data'
import Tabs from '../../components/single-product/tabs'
import { Container } from '../../styles/pages/SingleProduct'
import RelatedProducts from '../../components/single-product/related-products'

const SingleProduct = () => {
  return (
    <Container>
      <Head>
        <title>Autoshop | Single Product</title>
      </Head>

      <PageTitle />
      <Product
        productDetails={productDetails}
        otherDetails={otherDetails}
        shareProduct={shareProduct}
        productSlider={productSlider}
      />
      <Tabs />
      <RelatedProducts />
    </Container>
  )
}

export default SingleProduct
