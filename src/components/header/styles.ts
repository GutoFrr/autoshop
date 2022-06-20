import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.headerBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.headerBorder};
`

export const HeaderContainer = styled.div`
  width: 1170px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`

export const ContactItem = styled.li`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  color: ${props => props.theme.colors.headerContact};
  font: 400 12px 'Open Sans', sans-serif;
  border-left: 1px solid ${props => props.theme.colors.headerBorder};

  :last-child {
    border-right: 1px solid ${props => props.theme.colors.headerBorder};
  }
`

export const ContactTitle = styled.h6`
  color: ${props => props.theme.colors.headerContactTitle};
  font: 400 12px 'Roboto', sans-serif;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`

export const LinkItem = styled.li`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  border-left: 1px solid ${props => props.theme.colors.headerBorder};

  :last-child {
    border-right: 1px solid ${props => props.theme.colors.headerBorder};
  }
`

export const LinkText = styled.h6`
  font: 400 12px 'Open Sans', sans-serif;
  color: ${props => props.theme.colors.headerLinks};
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: ${props => props.theme.colors.primary};
  }
`
