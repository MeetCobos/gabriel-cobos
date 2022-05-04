import styled from "styled-components";
import { StyledButton } from "./SharedStyles.styled";

export const InnerContainer = styled.div`
  position: absolute;
`;

export const TrackmeetImg = styled.img`
  height: 86vh;
  filter: blur(3.5px);
  background-color: blue;
`;

export const ImageFooter = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 110%;
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

export const TrackmeetLogo = styled.img`
  display: block;
  width: 31.09375vw;
  height: 8.7962vh;
`;

export const TrackmeetButton = styled(StyledButton)`
  position: relative;
  left: 50%;
  transform: translateX(-50%)
`