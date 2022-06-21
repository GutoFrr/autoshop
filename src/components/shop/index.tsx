import React from 'react'
import Widgets from '../widgets'
import ShopOptions from '../shop-options'
import { Container, ProductsContainer } from './styles'
import Products from '../products'
import Pagination from '../pagination'
import PageTitle from '../page-title'

const Shop = () => {
  return (
    <Container>
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
