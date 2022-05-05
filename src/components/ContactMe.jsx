import React from "react";
import ContactMeImg from "../images/ContactMe.svg";
import {
  AbsoluteCenter,
  CenteredButton,
  InnerContainer,
  PageImg,
  PageLabel,
  Section,
} from "../styles/SharedStyles.styled";
import ImageFooter from "./sub-components/ImageFooter";

export default function ContactMe() {
  return (
    <Section>
      <InnerContainer>
        <PageImg src={ContactMeImg} alt="Contact Me Image" />
        <ImageFooter
          heading="Contact"
          sub-heading="Illusive, but I'll Answer Your Call"
          page-num="03"
        />
      </InnerContainer>
      <AbsoluteCenter>
        <PageLabel>GET IN TOUCH</PageLabel>
        <CenteredButton>See More</CenteredButton>
      </AbsoluteCenter>
    </Section>
  );
}
