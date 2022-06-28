import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 50px;

  a {
    font: 600 30px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    width: 500px;
    text-align: center;
    cursor: pointer;
  }
`
