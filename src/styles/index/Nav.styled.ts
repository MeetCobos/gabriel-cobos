import { Link } from "gatsby"
import styled from "styled-components"

export const NavContainer = styled.nav<{ black?: boolean }>`
  background-color: ${({ black }) => black && "black"};
  position: absolute;
  height: fit-content;
  top: 0.875rem;
  left: 0;
  right: 0;
  z-index: 2;
`

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 1rem;
`

export const NavAnchor = styled(Link)`
  text-decoration: none;
  color: white;
`

export const NavLogo = styled(Link)`
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-size: var(--font-size-m);
  color: white;
  text-decoration: none;
`

export const NavIcons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  justify-content: flex-end;

  & > li {
    list-style: none;
    display: inline-block;
  }

  & p {
    font-family: "Montserrat", sans-serif;
    font-size: var(--font-size-m);
    font-weight: 600;
    color: white;
  }

  & > li:not(:first-child) {
    margin-left: 1rem;
  }
`
