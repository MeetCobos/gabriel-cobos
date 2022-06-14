import React from "react";
import Nav from "../components/Nav";
import Content from "../components/trackmeet/Content";
import Footer from "../components/trackmeet/Footer";
import Landing from "../components/trackmeet/Landing";
import GlobalStyles from "../styles/GlobalStyles.styled";

export default function Trackmeet() {
  return (
    <>
      <GlobalStyles />
      <Nav black />
      <Landing />
      <Content />
      <Footer />
    </>
  );
}
