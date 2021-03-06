import styled from 'styled-components'

interface ITabContentProps {
  propDisplay: any
}

export const Container = styled.div`
  width: 1170px;
  margin-bottom: 100px;
`

export const ProductTabs = styled.div`
  border: 1px solid #ddd;
`

export const NavTabs = styled.ul`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  border-bottom: 1px solid #ddd;
  list-style: none;

  li {
    font: 700 14px 'Ubuntu', sans-serif;
    color: #000;
    text-transform: capitalize;
    padding-inline: 20px;
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;

    :nth-child(2) {
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
    }

    :hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const TabContent = styled.div`
  position: relative;
  padding: 20px;
`

export const TabDescription = styled.div<ITabContentProps>`
  display: ${props => (props.propDisplay ? 'block' : 'none')};
`

export const TabDetails = styled.div<ITabContentProps>`
  display: ${props => (props.propDisplay ? 'block' : 'none')};
`

export const TabReviews = styled.div<ITabContentProps>`
  display: ${props => (props.propDisplay ? 'block' : 'none')};
`

export const ReviewCustomer = styled.div``
