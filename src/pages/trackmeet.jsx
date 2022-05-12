import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import GlobalStyles from "../styles/GlobalStyles.styled";

export default function Trackmeet() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Nav black />
    </MainContainer>
  );
}

const MainContainer = styled.div``;
