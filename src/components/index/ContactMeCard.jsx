import React from "react";
import ContactMeImg from "../../images/ContactMe.svg";
import {
  AbsoluteCenter,
  AbsoluteContainer,
  CenteredButton,
  PageImg,
  PageLabel,
  Section,
} from "../../styles/SharedStyles.styled";
import ImageFooter from "./sub-components/ImageFooter";

export default function ContactMe() {
  return (
    <Section>
      <AbsoluteContainer>
        <PageImg src={ContactMeImg} alt="Contact Me Image" />
        <ImageFooter
          heading="Contact"
          sub-heading="Illusive, but I'll Answer Your Call"
          page-num="03"
        />
      </AbsoluteContainer>
      <AbsoluteCenter>
        <PageLabel id="contact-me">GET IN TOUCH</PageLabel>
        <a href="mailto:cobos@gabrielcobos.com">
          <CenteredButton>Contact Me</CenteredButton>
        </a>
      </AbsoluteCenter>
    </Section>
  );
}
