import React from "react";
import TrackmeetHero from "../images/Trackmeet.svg";
import TrackmeetLogoImg from "../images/TrackmeetLogo.svg";
import {
  AbsoluteCenter,
  CenteredButton,
  InnerContainer,
  PageImg,
  Section,
} from "../styles/SharedStyles.styled";
import { TrackmeetLogo } from "../styles/Trackmeet.styled";
import ImageFooter from "./sub-components/ImageFooter";

export default function Trackmeet() {
  return (
    <Section>
      <InnerContainer>
        <PageImg src={TrackmeetHero} alt="Trackmeet Image" />
        <ImageFooter
          heading="Team Cylon"
          sub-heading="Modernizing The Military"
          page-num="01"
        />
      </InnerContainer>
      <AbsoluteCenter>
        <TrackmeetLogo src={TrackmeetLogoImg} alt="Trackmeet Logo" />
        <CenteredButton>See More</CenteredButton>
      </AbsoluteCenter>
    </Section>
  );
}
