import React from "react";
import Headshot from "../../images/headshot.svg";
import LaPalms from "../../images/LaPalms.svg";
import { LandingContainer } from "../../styles/SharedStyles.styled";

export default function Landing() {
  return (
    <div>
      <LandingContainer>
        <h1>Software Engineer</h1>
        <img src={LaPalms} alt="LA Palms"></img>
        <img src={Headshot} alt="Gabriel Cobos Headshot"></img>
      </LandingContainer>
    </div>
  );
}
