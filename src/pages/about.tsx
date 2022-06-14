import React from "react";
import Landing from "../components/about/Landing";
import Nav from "../components/Nav";
import Content from "../components/about/Content";
import GlobalStyles from "../styles/GlobalStyles.styled";
import Footer from "../components/trackmeet/Footer";

export default function Works() {
  return (
    <>
      <GlobalStyles />
      <Nav black toLanding="/#landing" toWorks="/#works" toAbout="/#about" toContact="/#contact-me"/>
      <Landing />
      <Content />
      <Footer />
    </>
  );
}
