import React from "react";
import TrackmeetHero from "../images/Trackmeet.svg";
import TrackmeetLogoImg from "../images/TrackmeetLogo.svg";
import { Section, AbsoluteCenter } from "../styles/SharedStyles.styled";
import {
  TrackmeetImg,
  TrackmeetLogo,
  TrackmeetButton,
  InnerContainer,
  ImageFooter,
} from "../styles/Trackmeet.styled";

export default function Trackmeet() {
  return (
    <Section>
      <InnerContainer>
        <TrackmeetImg src={TrackmeetHero} alt="Trackmeet Img"></TrackmeetImg>
        <ImageFooter>
          <div>
            <h1>Team Cylon</h1>
            <h2>Modernizing the military.</h2>
          </div>
          <div>
            <p>01</p>
          </div>
        </ImageFooter>
      </InnerContainer>
      <AbsoluteCenter>
        <TrackmeetLogo
          src={TrackmeetLogoImg}
          alt="Trackmeet Logo"
        ></TrackmeetLogo>
        <TrackmeetButton>See More</TrackmeetButton>
      </AbsoluteCenter>
    </Section>
  );
}
