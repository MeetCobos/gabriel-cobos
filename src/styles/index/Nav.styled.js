import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: ${({ black }) => black && "black"};
  position: sticky;
  height: 4rem;
  width: 100vw;
  max-width: 100%;
  z-index: 2;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 1rem;
  height: 100%;
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
