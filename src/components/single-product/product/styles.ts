import styled from 'styled-components'
import { Button } from '../../../styles/ui/StyledComponents'

interface ISlideProps {
  slideLeft: string | number
}

export const Container = styled.div`
  width: 1170px;
  display: flex;
  column-gap: 30px;

  hr {
    border: 0;
    border-top: 1px solid ${props => props.theme.colors.headerBorder};
    margin-block: 30px;
  }

  h3 {
    font: 700 17px 'Ubuntu', sans-serif;
    color: ${props => props.theme.colors.sectionTitle};
    text-transform: uppercase;
  }
`

export const ProductImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const ImageContainer = styled.div<ISlideProps>`
  width: 458px;
  display: flex;
  position: absolute;
  left: ${props => props.slideLeft};
  transition: all 0.4s ease-in-out;
`

export const ProductImage = styled.img`
  width: 458px;
`

export const ProductSlider = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  border: 1px solid #e5e5e5;
  position: absolute;
  bottom: 0;
`

export const MiniatureProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
`

export const MiniatureImage = styled.img`
  cursor: pointer;
`

export const ArrowIcon = styled.div`
  width: 25px;
  height: 25px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .slider-icon {
    font-size: 12px;
    color: #fff;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MainDetails = styled.div`
  h2 {
    font: 700 20px 'Raleway', sans-serif;
    color: ${props => props.theme.colors.sectionTitle};
    line-height: 23px;
    text-transform: uppercase;
    margin-bottom: 13px;
  }

  p {
    font: 400 13px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.footerInfoDescription};
    line-height: 22px;
  }
`

export const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const Price = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font: 400 14px 'Raleway', sans-serif;
    color: ${props => props.theme.colors.discount};
    margin-right: 8px;
  }

  h4 {
    font: 700 18px 'Raleway', sans-serif;
    color: ${props => props.theme.colors.primary};
    line-height: 30px;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;

  h6 {
    font: 500 13px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.cartProductDescription};
    line-height: 30px;

    ::after {
      content: '/';
      font: 500 16px 'Open Sans', sans-serif;
      vertical-align: -2px;
      padding-inline: 5px;
    }
  }

  a {
    font: 500 13px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.cartProductDescription};
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const OtherDetails = styled.div`
  h3 {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
  }

  li {
    font: 700 13px 'Ubuntu', sans-serif;
    color: ${props => props.theme.colors.primary};
    text-transform: capitalize;
    line-height: 26px;
  }

  span {
    font: 400 13px 'Ubuntu', sans-serif;
    color: ${props => props.theme.colors.footerInfoDescription};
  }
`

export const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font: 700 13px 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.sectionTitle};
  text-transform: capitalize;

  span {
    margin-right: 5px;
  }

  input {
    width: 30px;
    height: 25px;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    color: ${props => props.theme.colors.sectionTitle};
    font: 400 14px 'Open Sans', sans-serif;
    text-align: center;
    cursor: default;

    :focus {
      outline: none;
    }

    ::selection {
      background-color: transparent;
      color: unset;
    }
  }

  button {
    width: 25px;
    height: 25px;
    border: 1px solid #e5e5e5;
    border-radius: 1px;
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    cursor: pointer;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`

export const AddToCart = styled(Button)`
  width: 95px;
  height: 33px;
  font: 400 13px 'Open Sans', sans-serif;
  text-transform: capitalize;
  border-radius: 2px;
`

export const WishlistButton = styled(Button)`
  width: 95px;
  height: 33px;
  font: 400 13px 'Open Sans', sans-serif;
  text-transform: capitalize;
  border-radius: 2px;
  color: #000;
  background-color: transparent;
  border: 1px solid #e5e5e5;

  :hover {
    color: ${props => props.theme.colors.buttonText};
    border: 1px solid ${props => props.theme.colors.primary};
  }
`

export const CompareButton = styled(Button)`
  width: 95px;
  height: 33px;
  font: 400 13px 'Open Sans', sans-serif;
  text-transform: capitalize;
  border-radius: 2px;
  color: #000;
  background-color: transparent;
  border: 1px solid #e5e5e5;

  :hover {
    color: ${props => props.theme.colors.buttonText};
    border: 1px solid ${props => props.theme.colors.primary};
  }
`

export const ShareProduct = styled.div`
  h3 {
    margin-bottom: 28px;
  }

  ul {
    display: flex;
    align-items: center;
    column-gap: 10px;
    list-style: none;
  }

  li {
    width: 34px;
    height: 34px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    :first-child {
      background-color: ${props => props.theme.colors.facebook};
    }

    :nth-child(2) {
      background-color: ${props => props.theme.colors.twitter};
    }

    :nth-child(3) {
      background-color: ${props => props.theme.colors.googlePlus};
    }

    :nth-child(4) {
      background-color: ${props => props.theme.colors.pinterest};
    }

    :last-child {
      background-color: ${props => props.theme.colors.dribbble};
    }

    :hover {
      background-color: #1b1a1a;
    }

    .socials-icon {
      color: #fff;
    }
  }
`
