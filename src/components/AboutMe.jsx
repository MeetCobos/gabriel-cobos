import React from "react";
import LaPalms from "../images/LaPalms.svg";
import {
  AbsoluteCenter,
  CenteredButton,
  AbsoluteContainer,
  PageImg,
  PageLabel,
  Section,
} from "../styles/SharedStyles.styled";
import ImageFooter from "./sub-components/ImageFooter";

export default function AboutMe() {
  return (
    <Section>
      <AbsoluteContainer>
        <PageImg src={LaPalms} alt="About Me Image" />
        <ImageFooter
          heading="About Me"
          sub-heading="The Man, The Myth, The Legend"
          page-num="02"
        />
      </AbsoluteContainer>
      <AbsoluteCenter>
        <PageLabel>SOFTWARE ENGINEER</PageLabel>
        <CenteredButton>See More</CenteredButton>
      </AbsoluteCenter>
    </Section>
  );
}
