import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  position: sticky;
  height: 4rem;
  width: calc(100% - 2rem);
  justify-content: space-between;
  align-items: center;
  margin-inline: 1rem;
  top: 0;
`;

export const NavLogo = styled.span`
  font-family: "Libre Baskerville Bold", serif;
  font-size: 1.125rem;
`;

export const NavIcons = styled.ul`
  & > li {
    list-style: none;
    display: inline-block;
    font-family: "Montserrat Var", sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
  }

  & > li:not(:first-child) {
    margin-left: 1rem;
  }
`;
