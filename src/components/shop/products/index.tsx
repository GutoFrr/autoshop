import Link from 'next/link'
import React from 'react'
import { productData } from './data'
import {
  Container,
  Product,
  ProductAction,
  ProductBio,
  ProductBrand,
  ProductButton,
  ProductHover,
  ProductImage,
  ProductPrice,
  ProductTitle
} from './styles'

const Products = () => {
  return (
    <Container>
      {productData.map((item, index) => (
        <Product key={index}>
          <ProductImage>
            <img src={item.image} alt="Product Image" />
            <ProductHover>
              <ProductAction>
                <ProductButton>add to cart</ProductButton>
                <Link href="/single-product">
                  <ProductButton>item details</ProductButton>
                </Link>
              </ProductAction>
            </ProductHover>
          </ProductImage>
          <ProductBio>
            <ProductBrand>{item.brand}</ProductBrand>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>${item.price}</ProductPrice>
          </ProductBio>
        </Product>
      ))}
    </Container>
  )
}

export default Products
