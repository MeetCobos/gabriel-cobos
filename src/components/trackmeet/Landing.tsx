import React from "react";
import {
  LogoButtonContainer,
  TrackmeetLandingImg,
  TrackmeetLogoVert,
} from "../../styles/trackmeet/Landing.styled";
import TrackmeetLogoVertSvg from "../../images/TrackmeetLogoVert.svg";
import TrackmeetLrg from "../../images/TrackmeetLrg.svg";
import {
  LandingContainer,
  StyledButton,
} from "../../styles/SharedStyles.styled";

export default function Landing() {
  return (
    <LandingContainer>
      <LogoButtonContainer>
        <TrackmeetLogoVert
          src={TrackmeetLogoVertSvg}
          alt="Trackmeet Logo"
        ></TrackmeetLogoVert>
        <StyledButton>Website</StyledButton>
      </LogoButtonContainer>
      <TrackmeetLandingImg
        src={TrackmeetLrg}
        alt="Trackmeet Landing Img"
      ></TrackmeetLandingImg>
    </LandingContainer>
  );
}
