import styled from "styled-components";

export const ImageFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 107%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1%;

  & > * {
    text-align: center;
  }

  & h1 {
    font-size: 3rem;
  }

  & h2 {
    font-size: 1.125rem;
  }

  & p {
    font-family: "Abril Fatface", serif;
    font-size: 4.5rem;
  }
`;
