import styled from "styled-components"

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
    font-size: min(3vw, 84px);
  }

  & h2 {
    font-size: min(1.125vw, 36px);
  }

  & p {
    font-family: "Abril Fatface", serif;
    font-size: min(4.5vw, 100px);
  }
`
