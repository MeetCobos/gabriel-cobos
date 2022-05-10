import "@fontsource/abril-fatface";
import "@fontsource/bebas-neue";
import "@fontsource/libre-baskerville/700.css";
import "@fontsource/montserrat/variable-italic.css";
import "@fontsource/montserrat/variable.css";
import * as React from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import Trackmeet from "../components/Trackmeet";
import GlobalStyles from "../styles/GlobalStyles.styled";
import { AbsoluteContainer } from "../styles/SharedStyles.styled";

const IndexPage = () => {
  return (
    <MainContainer>
      <GlobalStyles />
      <AbsoluteContainer>
        <Nav />
      </AbsoluteContainer>
      <Landing />
      <Trackmeet />
      <AboutMe />
      <ContactMe />
    </MainContainer>
  );
};

export default IndexPage;

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(#04138a, #1c1d25);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  & > section {
    height: 100%;
    width: 100%;
    scroll-snap-align: start;
  }
`;
