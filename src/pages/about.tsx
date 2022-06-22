import React from "react";
import { Helmet } from "react-helmet";
import Landing from "../components/about/Landing";
import Nav from "../components/Nav";
import Content from "../components/about/Content";
import GlobalStyles from "../styles/GlobalStyles.styled";
import Footer from "../components/trackmeet/Footer";

export default function Works() {
  return (
    <>
      <Helmet title="About Gabriel Cobos" />
      <GlobalStyles />
      <Nav black />
      <Landing />
      <Content />
      <Footer />
    </>
  );
}
