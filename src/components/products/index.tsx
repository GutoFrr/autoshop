import React from 'react'
import Widgets from '../widgets'
import PageTitle from './page-title'
import ShopOptions from './shop-options'
import { Container, ProductsContent } from './styles'

const Products = () => {
  return (
    <Container>
      <PageTitle />
        <ProductsContent>
          <ShopOptions />
          <Widgets />
        </ProductsContent>
    </Container>
  )
}

export default Products
