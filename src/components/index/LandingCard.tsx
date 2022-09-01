import React, { ForwardedRef, forwardRef } from "react"
import {
  HeroName,
  HeroTitle,
  LandingSection,
} from "../../styles/index/Landing.styled"
import { StyledButton } from "../../styles/SharedStyles.styled"

const LandingCard = forwardRef((props, ref: ForwardedRef<HTMLElement>) => (
  <LandingSection ref={ref} id='landing'>
    <HeroName id='home'>Gabriel Cobos</HeroName>
    <HeroTitle>Web Developer</HeroTitle>
    <a href='mailto:cobos@gabrielcobos.com'>
      <StyledButton>Contact Me</StyledButton>
    </a>
  </LandingSection>
))

export default LandingCard
