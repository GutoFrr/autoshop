import React from 'react'
import { menuItems } from './data'
import {
  Container,
  MenuList,
  MenuListItem,
  NavbarContainer,
  NavbarLogo
} from './styles'

const Navbar: React.FC = () => {
  return (
    <Container>
      <NavbarContainer>
        <NavbarLogo />
        <MenuList>
          {menuItems.map((item, key) => (
            <MenuListItem key={key}>
              <h3>{item.menuItem}</h3>
              <ul>
                {item.subItems?.map((subItem, key) => (
                  <li key={key}>
                    <h4>{subItem.name}</h4>
                    <ul>
                      {subItem.subSubItems?.map((subSubItem, key) => (
                        <li key={key}>
                          <h5>{subSubItem.name}</h5>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </MenuListItem>
          ))}
        </MenuList>
      </NavbarContainer>
    </Container>
  )
}

export default Navbar
