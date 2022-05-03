import styled from "styled-components";
import { Section } from "./SharedStyles.styled";

export const LandingSection = styled(Section)`
  height: 100%;
  flex-direction: column;

  > * {
    &:last-child {
      margin-top: 0.8125rem;
    }
  }
`;

export const HeroName = styled.h1`
  font-size: 4.5rem;
`;

export const HeroTitle = styled.h2`
  font-size: 1.5rem;
`;
