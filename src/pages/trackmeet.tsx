import React from "react"
import Nav from "../components/Nav"
import Content from "../components/trackmeet/Content"
import Footer from "../components/trackmeet/Footer"
import Landing from "../components/trackmeet/Landing"
import GlobalStyles from "../styles/GlobalStyles.styled"
import { Helmet } from "react-helmet"

export default function Trackmeet() {
  return (
    <>
      <Helmet title='My Work on Trackmeet' />
      <GlobalStyles />
      <Nav />
      <Landing />
      <Content />
      <Footer />
    </>
  )
}
