import React from "react"
import {
  TrackmeetLandingImg,
  TrackmeetLogoVert,
} from "../../styles/trackmeet/Landing.styled"
import TrackmeetLogoVertSvg from "../../images/TrackmeetLogoVert.svg"
import TrackmeetLrg from "../../images/TrackmeetLrg.svg"
import { LandingContainer } from "../../styles/SharedStyles.styled"

export default function Landing() {
  return (
    <LandingContainer>
      <TrackmeetLogoVert
        src={TrackmeetLogoVertSvg}
        alt='Trackmeet Logo'
      ></TrackmeetLogoVert>
      <TrackmeetLandingImg
        src={TrackmeetLrg}
        alt='Trackmeet Landing Img'
      ></TrackmeetLandingImg>
    </LandingContainer>
  )
}
