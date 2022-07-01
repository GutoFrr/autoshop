import Link from 'next/link'
import React from 'react'
import { relatedProducts } from './data'
import { Container, Product, ProductAction, ProductBio, ProductBrand, ProductButton, ProductHover, ProductImage, ProductPrice, ProductsList, ProductTitle, Title } from './styles'

const RelatedProducts = () => {
  return (
    <Container>
      <Title>related products</Title>
      <ProductsList>
        {relatedProducts.map((item, index) => (
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
              <ProductBrand>{item.company}</ProductBrand>
              <ProductTitle>{item.name}</ProductTitle>
              <ProductPrice>${item.price}</ProductPrice>
            </ProductBio>
          </Product>
        ))}
      </ProductsList>
    </Container>
  )
}

export default RelatedProducts
