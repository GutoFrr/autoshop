import React, { useState } from 'react'
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
  const [showShopCart, setShowShopCart] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)

  const handleShowShopCart = () => {
    setShowShopCart(!showShopCart)
  }

  const handleShowSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  // const cartSubtotal = () => {
  //   shopCartProduct.map(item => {
  //     let productsPrice = item.price * item.quantity
  //     let finalPrice = productsPrice++
  //   })
  // }

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
              <Icon
                icon="fa:search"
                className="icon"
                onMouseEnter={() => setShowSearchBar(true)}
                onMouseLeave={() => setShowSearchBar(false)}
                onClick={handleShowSearchBar}
              />
              <SearchBar></SearchBar>
            </SearchBarContainer>
            <ShopCartContainer>
              <Icon
                icon="fa:shopping-cart"
                className="icon"
                onMouseEnter={() => setShowShopCart(true)}
                onMouseLeave={() => setShowShopCart(false)}
                onClick={handleShowShopCart}
              />
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
                    cart subtotal: <span>$</span>
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
