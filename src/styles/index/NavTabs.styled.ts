import { Link } from "gatsby"
import styled from "styled-components"

export const NavTabContainer = styled.nav`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  z-index: 2;

  & > ul {
    list-style: none;

    & > li {
      height: auto;
    }
  }
`

export const NavButton = styled.button`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
    color: hsla(0, 0%, 100%, 80%);
  }
`
