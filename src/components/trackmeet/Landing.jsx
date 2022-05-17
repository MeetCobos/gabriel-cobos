import React from "react";
import {
  LandingContainer,
  TrackmeetLogoVert,
} from "../../styles/trackmeet/Landing";
import TrackmeetLogoVertSvg from "../../images/TrackmeetLogoVert.svg";
import TrackmeetLrg from "../../images/TrackmeetLrg.svg";

export default function Landing() {
  return (
    <LandingContainer>
      <TrackmeetLogoVert
        src={TrackmeetLogoVertSvg}
        alt="Trackmeet Logo"
      ></TrackmeetLogoVert>
      <img src={TrackmeetLrg} alt="Trackmeet Landing Img"></img>
    </LandingContainer>
  );
}
