import styled from 'styled-components'

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

  .hr {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 20px;
    left: 25%;
    width: 50%;
    border: 1px solid ${props => props.theme.colors.primary};
    transition: all 0.3s ease;
  }

  .hr.active {
    opacity: 1;
    visibility: visible;
    top: 40px;
  }

  .sub-items {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 150px;
    box-shadow: 0 2px 3px rgb(39 41 48 / 5%);
    background-color: ${props => props.theme.colors.background};
    transition: all 0.3s ease;

    .sub-item {
      display: flex;
      align-items: center;
      width: 220px;
      height: 48px;
      border-bottom: 1px solid ${props => props.theme.colors.menuSubItemBorder};
      padding: 0 18px;
      position: relative;
      pointer-events: none;
      visibility: hidden;
      transition: all 0.3s ease;

      h5 {
        font: 300 14px 'Ubuntu', sans-serif;
        color: ${props => props.theme.colors.menuSubItem};
        text-transform: capitalize;
      }

      :last-child {
        border-bottom: none;
      }

      :hover {
        background-color: rgba(246, 246, 246, 0.5);

        h5 {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }

  .sub-items.active {
    opacity: 1;
    visibility: unset;
    top: 100px;

    .sub-item {
      visibility: unset;
      pointer-events: all;
    }
  }

  .sub-sub-items {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
  }

  .sub-sub-items.active {
    opacity: 1;
    visibility: unset;
  }
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
