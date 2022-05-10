import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  position: sticky;
  height: 4rem;
  width: calc(100vw - 2rem);
  justify-content: space-between;
  align-items: center;
  margin-inline: 1rem;
  top: 0;
  z-index: 2;
`;

export const NavLogo = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-size: 1.125rem;
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
  }

  & > li:not(:first-child) {
    margin-left: 1rem;
  }
`;
