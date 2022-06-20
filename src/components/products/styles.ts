import styled from 'styled-components'

export const Container = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`

export const ProductHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: ${props => props.theme.colors.productHover};
  transition: all 0.4s ease-in-out;
`

export const ProductAction = styled.div`
  width: 100%;
  position: absolute;
  bottom: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  transition: all 0.2s ease-in-out;
`

export const ProductButton = styled.button`
  width: 95px;
  height: 33px;
  color: ${props => props.theme.colors.productHoverButtonText};
  background-color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 2px;
  font: 400 13px 'Raleway', sans-serif;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`

export const ProductImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 262.48px;
  height: 316.92px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 262.48px;
    height: 316.92px;
    transition: all 0.2s ease-in-out;
  }

  :hover {
    img {
      width: 110%;
      height: 110%;
    }

    ${ProductHover} {
      opacity: 1;
    }

    ${ProductAction} {
      bottom: 30px;
    }
  }
`

export const ProductBio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 12px;
  padding: 30px;
`

export const ProductBrand = styled.h5`
  font: 400 12px 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.productBrand};
  line-height: 1;
  text-transform: capitalize;
`

export const ProductTitle = styled.h3`
  font: 700 20px 'Raleway', sans-serif;
  color: ${props => props.theme.colors.productName};
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const ProductPrice = styled.h4`
  font: 700 18px 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.primary};
  line-height: 1;
`
