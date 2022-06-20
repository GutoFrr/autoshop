import styled from 'styled-components'

export const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const WidgetTitle = styled.h3`
  font: 700 17px 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.widgetTitle};
  text-transform: uppercase;
  margin-bottom: 30px;
`

export const Widget = styled.div`
  width: 262.5px;

  img {
    width: 61px;
    height: 60px;
  }
`

export const WidgetList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
`

export const Categories = styled.li``

export const RecentItems = styled.li`
  width: 262.5px;
  display: flex;
  height: 71px;
  column-gap: 13px;
  border-bottom: 1px solid ${props => props.theme.colors.recentItemBorder};
  margin-bottom: 13px;

  :last-child {
    border-bottom: none;
  }
`

export const Brands = styled.li``

export const BestSellers = styled.li``

export const ProductTitle = styled.h4`
  font: 500 15px 'Open Sans', sans-serif;
  color: ${props => props.theme.colors.recentItem};
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const Price = styled.h4`
  font: 700 14px 'Raleway', sans-serif;
  color: ${props => props.theme.colors.primary};
  line-height: 20px;
`
