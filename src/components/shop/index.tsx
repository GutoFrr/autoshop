import React from 'react'
import Widgets from '../widgets'
import ShopOptions from '../shop-options'
import { Container, ProductsContainer } from './styles'
import Products from '../products'
import Pagination from '../pagination'

const Shop = () => {
  return (
    <Container>
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
