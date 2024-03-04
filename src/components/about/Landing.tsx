import React from "react"
import Headshot from "../../images/HeadshotPhoto.svg"
import LaPalms from "../../images/LaPalms.svg"
import SoftwareEngineer from "../../images/SoftwareEngineer.svg"
import {
  ImageGrid,
  StyledHeadshot,
  StyledLaPalms,
} from "../../styles/about/Landing.styled"
import { LandingContainer } from "../../styles/SharedStyles.styled"

export default function Landing() {
  return (
    <LandingContainer>
      <img src={SoftwareEngineer} alt='Software Engineer'></img>
      <ImageGrid>
        <StyledLaPalms src={LaPalms} alt='LA Palms'></StyledLaPalms>
        <StyledHeadshot
          src={Headshot}
          alt='Gabriel Cobos Headshot'
        ></StyledHeadshot>
      </ImageGrid>
    </LandingContainer>
  )
}
