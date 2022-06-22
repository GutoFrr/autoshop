import styled from 'styled-components'
import { Button } from '../../styles/components/StyledComponents'

export const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 2px 3px rgb(39 41 48 / 3%);
  position: sticky;
  top: 0px;
  z-index: 10;

  ul {
    list-style: none;
  }
`

export const NavbarContainer = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarLogo = styled.div``

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 30px;
  position: relative;
`

export const MenuListItem = styled.li`
  height: 100px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font: 700 13px 'Raleway', sans-serif;
  color: ${props => props.theme.colors.menuItem};
  cursor: pointer;
  position: relative;

  :hover {
    hr {
      opacity: 1;
      visibility: visible;
      top: 40px;
    }
  }

  hr {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 20px;
    left: 25%;
    width: 50%;
    border: 1px solid ${props => props.theme.colors.primary};
    transition: all 0.3s ease;
  }
`

export const MenuIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`

export const SearchBar = styled.div`
  width: 270px;
  height: 80px;
  padding: 20px;
  background-color: ${props => props.theme.colors.searchBackground};
  box-shadow: 0 2px 3px rgb(39 41 48 / 5%);
  pointer-events: none;
  position: absolute;
  top: 150px;
  right: 0;
  opacity: 0;
  transition: all 0.3s ease;

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 192px;
    height: 40px;
    border: none;
    padding-top: 11px;
    padding-bottom: 11px;
    font: 400 13px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.searchText};

    :focus {
      outline: none;
    }
  }

  span {
    width: 39px;
    height: 34px;
    display: grid;
    place-content: center;
    place-items: center;
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }

  .search-icon {
    font-size: 14px;
    color: ${props => props.theme.colors.searchBackground};
  }
`

export const SearchBarContainer = styled.div`
  width: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    height: 100px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  :hover {
    ${SearchBar} {
      top: 100px;
      opacity: 1;
      pointer-events: all;
    }

    .icon {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const ShopCartProduct = styled.div`
  width: 100%;
  height: 89px;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.cartProductBorder};
  margin-bottom: 20px;
  position: relative;

  h4 {
    font: 700 17px 'Raleway', sans-serif;
    color: ${props => props.theme.colors.cartProductName};
    text-transform: uppercase;
    line-height: 23px;
  }

  p {
    font: 400 12px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.cartProductDescription};
    text-transform: capitalize;
    line-height: 22px;
  }

  img {
    width: 61px;
    height: 60px;
    margin-right: 15px;
    border-radius: 5px;
  }

  .delete-icon {
    position: absolute;
    top: 0;
    right: 30px;
    font-size: 25px;
    color: ${props => props.theme.colors.cartProductDelete};
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const ViewCartButton = styled(Button)`
  width: 310px;
  height: 37px;
  text-transform: uppercase;
  font: 400 14px 'Open Sans', sans-serif;
`

export const CheckOutButton = styled(Button)`
  width: 310px;
  height: 37px;
  background-color: ${props => props.theme.colors.cartCheckButton};
  border: 1px solid ${props => props.theme.colors.cartCheckButton};
  text-transform: uppercase;
  font: 400 14px 'Open Sans', sans-serif;

  :hover {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`

export const CartSubtotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: 700 14px 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.cartSubtotal};
  text-transform: uppercase;
  margin-bottom: 15px;
`

export const CartControl = styled.div`
  height: 160px;
  width: 100%;
  padding: 30px;
  background: ${props => props.theme.colors.cartBackground};
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 5px;
  box-shadow: 0px 15px 20px 5px rgba(0, 0, 0, 0.5);
`

export const ShopCartFlow = styled.div`
  width: 340px;
  max-height: 215px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #00000050;
  }
`

export const ShopCart = styled.div`
  width: 370px;
  height: 400px;
  overflow: hidden;
  padding: 30px;
  background-color: ${props => props.theme.colors.cartBackground};
  box-shadow: 0 2px 3px rgb(39 41 48 / 5%);
  pointer-events: none;
  position: absolute;
  top: 150px;
  right: 0;
  opacity: 0;
  transition: all 0.3s ease;
`

export const ShopCartContainer = styled.div`
  width: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    height: 100px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  :hover {
    ${ShopCart} {
      top: 100px;
      opacity: 1;
      pointer-events: all;
    }

    .icon {
      color: ${props => props.theme.colors.primary};
    }
  }
`
