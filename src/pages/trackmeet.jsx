import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Landing from "../components/trackmeet/Landing";
import GlobalStyles from "../styles/GlobalStyles.styled";

export default function Trackmeet() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Nav black />
      <Landing />
    </MainContainer>
  );
}

const MainContainer = styled.div``;
