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
  ShopCartFlow,
  ShopCartProduct,
  ViewCartButton
} from './styles'
import navLogo from '../../public/navbar/logo.png'
import { Icon } from '@iconify/react'

const Navbar: React.FC = () => {
<<<<<<< HEAD
  const [productPrice, setProductPrice] = useState(String)
  var productPriceCart = 0
  useEffect(() => {
    for (let i = 0; i < shopCartProduct.length; i++) {
      let oldValue = productPriceCart
      productPriceCart = shopCartProduct[i].price * shopCartProduct[i].quantity
      productPriceCart = productPriceCart + oldValue
    }
    setProductPrice(JSON.stringify(productPriceCart))
  }, [])
=======
  const [productPrice, setProductPrice] = useState("");
  var productPriceCart = 0;
  useEffect(()=>{
    for (let i = 0; i < shopCartProduct.length; i++) {  
      let oldValue = productPriceCart;  
      productPriceCart = shopCartProduct[i].price * shopCartProduct[i].quantity;
      productPriceCart = productPriceCart + oldValue;      
    }    
    setProductPrice(JSON.stringify(productPriceCart));
  },[]);
>>>>>>> 4ac3c575ee4385b5f4d0b31ad0c037870a11249a

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
                <ShopCartFlow>
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
                </ShopCartFlow>
                <CartControl>
                  <CartSubtotal>
                    cart subtotal: <span>${productPrice}</span>
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
