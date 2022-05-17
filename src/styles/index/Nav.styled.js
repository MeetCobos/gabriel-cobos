import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: ${({ black }) => black && "black"};
  display: flex;
  position: sticky;
  height: 4rem;
  width: calc(100vw - 2rem);
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  top: 0;
  z-index: 2;
`;

export const NavAnchor = styled.a`
  text-decoration: none;
  color: white;
`;

export const NavLogo = styled.a`
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: white;
  text-decoration: none;
`;

export const NavIcons = styled.ul`
  & > li {
    list-style: none;
    display: inline-block;
  }

  & p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
  }

  & > li:not(:first-child) {
    margin-left: 1rem;
  }
`;
