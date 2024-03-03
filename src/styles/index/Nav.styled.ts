import { Link } from "gatsby"
import styled from "styled-components"

export const NavContainer = styled.nav<{ black?: boolean }>`
  background-color: ${({ black }) => black && "black"};
  position: absolute;
  top: 0;
  inset: 0;
  height: 4rem;
  z-index: 2;
`

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 1rem;
  height: 100%;
`

export const NavAnchor = styled(Link)`
  text-decoration: none;
  color: white;
`

export const NavLogo = styled(Link)`
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: white;
  text-decoration: none;
`

export const NavIcons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-end;

  & li {
    list-style: none;
    display: inline-block;
  }

  & p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
  }

  & li:not(:first-child) {
    margin-left: 1rem;
  }
`
