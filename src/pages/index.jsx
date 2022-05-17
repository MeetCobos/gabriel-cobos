import "@fontsource/abril-fatface";
import "@fontsource/bebas-neue";
import "@fontsource/libre-baskerville/700.css";
import "@fontsource/montserrat/variable-italic.css";
import "@fontsource/montserrat/variable.css";
import * as React from "react";
import styled from "styled-components";
import AboutMe from "../components/index/AboutMeCard";
import ContactMe from "../components/index/ContactMeCard";
import Landing from "../components/index/LandingCard";
import Nav from "../components/Nav";
import Trackmeet from "../components/index/TrackmeetCard";
import GlobalStyles from "../styles/GlobalStyles.styled";
import { AbsoluteContainer } from "../styles/SharedStyles.styled";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <AbsoluteContainer>
          <Nav />
        </AbsoluteContainer>
        <Landing />
        <Trackmeet />
        <AboutMe />
        <ContactMe />
      </MainContainer>
    </>
  );
};

export default IndexPage;

const MainContainer = styled.div`
  height: 100vh;
  background: linear-gradient(#04138a, #1c1d25);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  color: white;

  & > section {
    height: 100vh;
    scroll-snap-align: start;
  }
`;
