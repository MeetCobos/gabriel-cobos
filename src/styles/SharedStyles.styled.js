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
`;

export const Section = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const AbsoluteCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;