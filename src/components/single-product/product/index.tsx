import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import {
  ActionButtons,
  AddToCart,
  CompareButton,
  Container,
  ImageContainer,
  MainDetails,
  OtherDetails,
  Price,
  ProductActions,
  ProductDetails,
  ProductQuantity,
  ProductSlider,
  Rating,
  ShareProduct,
  SubTitle,
  WishlistButton
} from './styles'

interface IProductDetails {
  title: string
  price: string
  discountPrice?: string
  reviews: string
  description: string
}

interface IOtherDetails {
  product: string
  code: string
  availabiltity: string
  brand: string
}

interface IShareProduct {
  icon: string
}

interface IProductProps {
  productDetails: IProductDetails
  otherDetails: IOtherDetails
  shareProduct: IShareProduct[]
}

const Product: React.FC<IProductProps> = ({
  productDetails,
  otherDetails,
  shareProduct
}) => {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    let prevCount = count
    setCount(prevCount + 1)
  }
  const decreaseCount = () => {
    let prevCount = count
    setCount(prevCount - 1)
    if (count < 1) {
      setCount(0)
    }
  }

  return (
    <Container>
      <ImageContainer>
        <img src="" alt="" />
        <ProductSlider></ProductSlider>
      </ImageContainer>
      <ProductDetails>
        <MainDetails>
          <h2>{productDetails.title}</h2>
          <SubTitle>
            <Price>
              <h3>${productDetails?.price}</h3>
              <span>
                <h4>${productDetails.discountPrice}</h4>
              </span>
            </Price>
            <Rating>
              <h6>{productDetails.reviews}</h6>
              <a>add review</a>
            </Rating>
          </SubTitle>
          <p>{productDetails.description}</p>
        </MainDetails>
        <hr />
        <OtherDetails>
          <h3>other details:</h3>
          <ul>
            <li>
              product: <span>{otherDetails.product}</span>
            </li>
            <li>
              code: <span>{otherDetails.code}</span>
            </li>
            <li>
              availabiltity: <span>{otherDetails.availabiltity}</span>
            </li>
            <li>
              brand: <span>{otherDetails.brand}</span>
            </li>
          </ul>
        </OtherDetails>
        <hr />
        <ProductActions>
          <ProductQuantity>
            <span>quantity:</span>
            <button onClick={decreaseCount}>
              <Icon icon="fa-solid:minus" className="count-icon" />
            </button>
            <input type="text" value={count} readOnly />
            <button onClick={increaseCount}>
              <Icon icon="fa-solid:plus" className="count-icon" />
            </button>
          </ProductQuantity>
          <ActionButtons>
            <AddToCart>add to cart</AddToCart>
            <WishlistButton>wishlist</WishlistButton>
            <CompareButton>compare</CompareButton>
          </ActionButtons>
        </ProductActions>
        <hr />
        <ShareProduct>
          <h3>share product: </h3>
          <ul>
            {shareProduct.map((item, index) => (
              <li key={index}>
                <Icon icon={item.icon} className="socials-icon" />
              </li>
            ))}
          </ul>
        </ShareProduct>
      </ProductDetails>
    </Container>
  )
}

export default Product
