import styled from "styled-components"

export const ImageFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 107%;
  left: 50%;
  transform: translateX(-50%);
  bottom: -1%;

  & > * {
    text-align: center;
  }

  & h1 {
    font-size: clamp(var(--font-size-s), 3.5vw + 1rem, 84px);
  }

  & h2 {
    font-size: clamp(var(--font-size-xs), 0.25vw + 1rem, 36px);
  }

  & p {
    font-family: "Abril Fatface", serif;
    font-size: clamp(var(--font-size-l), 4.5vw + 1rem, 100px);
  }
`
