import React from "react";
import { StyledButton } from "../../styles/SharedStyles.styled";
import { StyledFooter } from "../../styles/trackmeet/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <h3>Gabriel Cobos</h3>
      <p>Let's build something amazing.</p>
      <StyledButton>Hire Me</StyledButton>
    </StyledFooter>
  );
}
