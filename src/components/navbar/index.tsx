import React, { useState } from 'react'
import { menuIcons, menuItems } from './data'
import {
  Container,
  MenuIcons,
  MenuList,
  MenuListItem,
  NavbarContainer,
  NavbarLogo
} from './styles'
import navLogo from '../../public/navbar/logo.png'
import { Icon } from '@iconify/react'

const Navbar: React.FC = () => {
  return (
    <Container>
      <NavbarContainer>
        <NavbarLogo>
          <img src={navLogo} alt="Car Shop Logo" />
        </NavbarLogo>
        <MenuList>
          {menuItems.map((item, index) => (
            <MenuListItem key={index}>
              <h4>{item.menuItem}</h4>
              {/* <ul>
                {item.subItems?.map((subItem, key) => (
                  <li key={index}>
                    <h5>{subItem.name}</h5>
                    <ul>
                      {subItem.subSubItems?.map((subSubItem, key) => (
                        <li key={index}>
                          <h6>{subSubItem.name}</h6>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul> */}
            </MenuListItem>
          ))}
          {menuIcons.map((item, index) => (
            <MenuIcons key={index}>
              <Icon icon={item.icon} className="icon" />
            </MenuIcons>
          ))}
        </MenuList>
      </NavbarContainer>
    </Container>
  )
}

export default Navbar
