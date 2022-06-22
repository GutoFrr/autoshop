import React, { useEffect, useState } from 'react'
import { menuItems, shopCartProduct } from './data'
import {
  CartControl,
  CartSubtotal,
  CheckOutButton,
  Container,
  MenuIcons,
  MenuList,
  MenuListItem,
  NavbarContainer,
  NavbarLogo,
  SearchBar,
  SearchBarContainer,
  ShopCart,
  ShopCartContainer,
  ShopCartProduct,
  ViewCartButton
} from './styles'
import navLogo from '../../public/navbar/logo.png'
import { Icon } from '@iconify/react'

const Navbar: React.FC = () => {
  var productPrice = 0
  const handleProductPrice = () => {
    for (let i = 0; i < shopCartProduct.length; i++) {
      productPrice = shopCartProduct[i].price * shopCartProduct[i].quantity
      console.log(productPrice)
    }
    return productPrice
  }

  return (
    <Container>
      <NavbarContainer>
        <NavbarLogo>
          <img src={navLogo} alt="Car Shop Logo" />
        </NavbarLogo>
        <MenuList>
          {menuItems.map((item, index) => (
            <MenuListItem key={index}>
              <hr />
              <h4>{item.menuItem}</h4>
            </MenuListItem>
          ))}
          <MenuIcons>
            <SearchBarContainer>
              <Icon icon="fa:search" className="icon" />
              <SearchBar>
                <form>
                  <input type="text" placeholder="Type Here..." />
                  <span>
                    <Icon icon="fa:search" className="search-icon" />
                  </span>
                </form>
              </SearchBar>
            </SearchBarContainer>
            <ShopCartContainer>
              <Icon icon="fa:shopping-cart" className="icon" />
              <ShopCart>
                {shopCartProduct.map((item, index) => (
                  <ShopCartProduct key={index}>
                    <img src={item.image} alt="Product Shop Cart" />
                    <span>
                      <h4>{item.title}</h4>
                      <p>price: ${item.price}</p>
                      <p>quantity: {item.quantity}</p>
                    </span>
                    <Icon
                      icon="eva:close-square-fill"
                      className="delete-icon"
                    />
                  </ShopCartProduct>
                ))}
                <CartControl>
                  <CartSubtotal>
                    cart subtotal: <span>${() => handleProductPrice}</span>
                  </CartSubtotal>
                  <ViewCartButton>view cart</ViewCartButton>
                  <CheckOutButton>check out</CheckOutButton>
                </CartControl>
              </ShopCart>
            </ShopCartContainer>
          </MenuIcons>
        </MenuList>
      </NavbarContainer>
    </Container>
  )
}

export default Navbar
