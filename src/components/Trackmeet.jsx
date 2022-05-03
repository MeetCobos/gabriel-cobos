import React from "react";
import TrackmeetHero from "../assets/images/Trackmeet.svg";
import { Section } from "../styles/SharedStyles.styled";

export default function Trackmeet() {
  return (
    <Section>
      <img src={TrackmeetHero} alt="Trackmeet Hero"></img>
    </Section>
  );
}
