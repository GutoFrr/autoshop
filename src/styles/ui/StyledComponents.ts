import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.buttonText};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 2px;
  text-transform: capitalize;
  position: relative;
  z-index: 2;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    z-index: -1;
    background-color: ${props => props.theme.colors.primary};
    transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
    transform-origin: 0% 100%;
    transition: transform 0.4s, opacity 0.4s, background-color 0.4s;
  }

  :hover {
    background-color: transparent;
  }

  :hover::before {
    transform: rotate3d(0, 0, 0, 0deg) translate3d(0, 0em, 0);
  }
`
