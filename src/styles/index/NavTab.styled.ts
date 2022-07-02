import styled from "styled-components";

export const NavTabContainer = styled.nav`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  z-index: 2;

  & > ul {
    list-style: none;
    font-family: "Montserrat", sans-serif;

    & a {
      color: white;
      text-decoration: none;

      & :hover {
        text-decoration: underline;
      }
    }
  }
`;
