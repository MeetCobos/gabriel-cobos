import React from "react";
import { StyledButton } from "../styles/SharedStyles.styled";
import { HeroName, HeroTitle, LandingSection } from "../styles/Landing.styled";

export default function Landing() {
  return (
    <LandingSection>
      <HeroName>Gabriel Cobos</HeroName>
      <HeroTitle>Web Developer</HeroTitle>
      <StyledButton>Contact Me</StyledButton>
    </LandingSection>
  );
}
