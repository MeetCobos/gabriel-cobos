import styled from "styled-components"
import { Section } from "../SharedStyles.styled"

export const LandingSection = styled(Section)`
  flex-direction: column;
  text-align: center;

  > * {
    &:last-child {
      margin-top: 0.8125rem;
    }
  }
`

export const HeroName = styled.h1`
  font-size: var(--font-size-xl);
`

export const HeroTitle = styled.h2`
  font-size: var(--font-size-l);
`
