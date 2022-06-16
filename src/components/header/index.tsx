import React from 'react'
import { contactData, linksData } from './data'
import {
  ContactItem,
  ContactList,
  ContactTitle,
  Container,
  HeaderContainer,
  LinkItem,
  Links,
  LinkText
} from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <ContactList>
          {contactData.map((item, key) => (
            <ContactItem key={key}>
              <ContactTitle>{item.title}</ContactTitle> {item.description}
            </ContactItem>
          ))}
        </ContactList>
        <Links>
          {linksData.map((item, key) => (
            <LinkItem key={key}>
              <LinkText>{item.link}</LinkText>
            </LinkItem>
          ))}
        </Links>
      </HeaderContainer>
    </Container>
  )
}

export default Header
