import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgb(39 41 48 / 3%);
  position: sticky;
  top: 50px;

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
`

export const MenuListItem = styled.li`
  text-transform: uppercase;
  font: 700 13px 'Raleway', sans-serif;
  color: ${props => props.theme.colors.menuItem};
  cursor: pointer;
`

export const MenuIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 15px;
    cursor: pointer;
  }
`
