import * as React from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import Trackmeet from "../components/Trackmeet";
import GlobalStyles from "../styles/GlobalStyles.styled";

const IndexPage = () => {
  return (
    <MainContainer>
      <GlobalStyles />
      <Nav />
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
  width: 100%;
  background: linear-gradient(#04138a, #1c1d25);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;

  & > section {
    height: 100vh;
    width: 100%;
    scroll-snap-align: start;
  }
`;
