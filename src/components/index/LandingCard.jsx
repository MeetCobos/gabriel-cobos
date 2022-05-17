import React from "react";
import { StyledButton } from "../../styles/SharedStyles.styled";
import {
  HeroName,
  HeroTitle,
  LandingSection,
} from "../../styles/index/Landing.styled";

export default function Landing() {
  return (
    <LandingSection>
      <HeroName id="landing">Gabriel Cobos</HeroName>
      <HeroTitle>Web Developer</HeroTitle>
      <a href="mailto:cobos@gabrielcobos.com">
        <StyledButton>Contact Me</StyledButton>
      </a>
    </LandingSection>
  );
}
