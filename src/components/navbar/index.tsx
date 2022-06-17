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
  const [showSubItems, setShowSubItems] = useState(menuItems)
  const handleShowSubItems = (index: number) => {
    const tempItems = showSubItems
    tempItems.forEach((tempItem, index2) => {
      if (index !== index2) {
        tempItem.active = false
      }
    })
    tempItems[index].active = !tempItems[index].active
    setShowSubItems([...tempItems])
  }

  const [showSubSubItems, setShowSubSubItems] = useState(menuItems)
  const handleShowSubSubItems = (index: number) => {
    const tempItems = showSubSubItems
    tempItems.forEach((tempItem, index2) => {
      if (index !== index2) {
        tempItem.active = false
      }
    })
    tempItems[index].active = !tempItems[index].active
    setShowSubSubItems([...tempItems])
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
              <h4 onMouseEnter={() => handleShowSubItems(index)}>
                {item.menuItem}
              </h4>
              <ul
                className={`${
                  showSubItems[index].active ? 'sub-items.active' : 'sub-items'
                }`}
              >
                {showSubItems &&
                  item.subItems?.map((subItem, index) => (
                    <li key={index}>
                      <h5 onMouseEnter={() => handleShowSubSubItems(index)}>
                        {subItem.name}
                      </h5>
                      <ul
                        className={`${
                          showSubItems[index].active
                            ? 'sub-sub-items.active'
                            : 'sub-sub-items'
                        }`}
                      >
                        {showSubSubItems &&
                          subItem.subSubItems?.map((subSubItem, index) => (
                            <li key={index}>
                              <h6>{subSubItem.name}</h6>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
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
