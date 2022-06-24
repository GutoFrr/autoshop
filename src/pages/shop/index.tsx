import Head from 'next/head'
import React from 'react'
import PageTitle from '../../components/page-title'
import Pagination from '../../components/pagination'
import Products from '../../components/shop/products'
import ShopOptions from '../../components/shop/shop-options'
import Widgets from '../../components/widgets'
import { Container, ProductsContainer } from '../../styles/pages/Shop'

const Shop = () => {
  return (
    <Container>
      <Head>
        <title>Autoshop | Shop</title>
      </Head>

      <PageTitle />
      <ProductsContainer>
        <ShopOptions />
        <Products />
        <Pagination />
      </ProductsContainer>
      <Widgets />
    </Container>
  )
}

export default Shop
