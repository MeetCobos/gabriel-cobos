import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 18.93rem;
  background-color: #1c1d25;
  color: white;

  & > :nth-child(n + 1) {
    margin-top: 2.5rem;
  }
`;
