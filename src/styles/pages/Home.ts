import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font: 600 30px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    width: 500px;
    text-align: center;
  }
`
