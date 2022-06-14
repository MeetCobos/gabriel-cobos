import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Landing from "../components/trackmeet/Landing";
import GlobalStyles from "../styles/GlobalStyles.styled";
import Content from "../components/trackmeet/Content";
import Footer from "../components/trackmeet/Footer";

export default function Trackmeet() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Nav black toLanding="/#landing" toWorks="/#works" toAbout="/#about" toContact="/#contact-me"/>
      <Landing />
      <Content />
      <Footer />
    </MainContainer>
  );
}

const MainContainer = styled.div``;
