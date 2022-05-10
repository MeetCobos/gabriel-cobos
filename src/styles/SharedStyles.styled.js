import styled from "styled-components";

export const StyledButton = styled.button`
  width: 7.125rem;
  height: 2.1875rem;
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: #f10000;
  border: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    background-color: hsl(0, 100%, 40%);
  }

  &:active {
    background-color: hsl(0, 100%, 33%);
  }
`;

export const CenteredButton = styled(StyledButton)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const Section = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const AbsoluteCenter = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
`;

export const PageLabel = styled.label`
  font-family: "Bebas Neue", sans-serif;
  font-size: 4rem;
`;

export const PageImg = styled.img`
  height: 86vh;
  filter: blur(3.5px);
  background-color: blue;
`;