import styled from 'styled-components'

export const Container = styled.div`
  align-self: flex-start;
`

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  list-style: none;

  .active {
    color: ${props => props.theme.colors.paginationActive};
    background-color: ${props => props.theme.colors.primary};
  }
`

export const PaginationItem = styled.li`
  width: 41px;
  height: 41px;
  font: 500 18px 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.pagination};
  background-color: ${props => props.theme.colors.paginationBackground};
  border: none;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: ${props => props.theme.colors.paginationActive};
    background-color: ${props => props.theme.colors.primary};
  }
`

export const NextPage = styled.button`
  width: 41px;
  height: 41px;
  font: 500 18px 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.pagination};
  background-color: ${props => props.theme.colors.paginationBackground};
  border: none;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: ${props => props.theme.colors.paginationActive};
    background-color: ${props => props.theme.colors.primary};
  }
`
