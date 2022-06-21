import styled from 'styled-components'

export const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
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
  margin-bottom: 70px;
`

export const Categories = styled.li`
  font: 400 13px 'Open Sans', sans-serif;
  color: ${props => props.theme.colors.categoriesItem};
  height: 36px;
  cursor: pointer;
  transition: all 0.3s ease;

  .brand-icon {
    color: ${props => props.theme.colors.primary};
    font-size: 12px;
    margin-right: 10px;
    vertical-align: baseline;
  }

  :hover {
    color: ${props => props.theme.colors.primary};

    span {
      color: initial;
    }
  }
`

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

  :first-child {
    h4 {
      padding-top: 0;
    }
  }
`

export const ProductTitle = styled.h4`
  font: 400 15px 'Open Sans', sans-serif;
  color: ${props => props.theme.colors.recentItem};
  line-height: 1;
  text-transform: uppercase;
  padding-top: 2px;
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

export const Brands = styled.li`
  font: 400 13px 'Open Sans', sans-serif;
  color: ${props => props.theme.colors.categoriesItem};
  height: 36px;
  text-transform: capitalize;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    appearance: none;
    width: 14px;
    height: 14px;
    background-color: ${props =>
      props.theme.colors.brandsItemCheckboxBackground};
    border: 1px solid ${props => props.theme.colors.brandsItemCheckboxBorder};
    display: grid;
    place-items: center;
    cursor: pointer;

    ::after {
      content: url('https://api.iconify.design/fa/check.svg?color=%23d22e2e&width=13&height=13');
      display: none;
    }

    :checked::after {
      display: block;
    }
  }

  label {
    cursor: pointer;
    padding-left: 10px;
  }
`

export const BestSellers = styled.li`
  width: 262.5px;
  display: flex;
  height: 71px;
  column-gap: 13px;
  border-bottom: 1px solid ${props => props.theme.colors.recentItemBorder};
  margin-bottom: 13px;

  :last-child {
    border-bottom: none;
  }

  :first-child {
    h4 {
      padding-top: 0;
    }
  }
`
