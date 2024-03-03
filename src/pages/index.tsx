import "@fontsource/abril-fatface"
import "@fontsource/bebas-neue"
import "@fontsource/libre-baskerville/700.css"
import "@fontsource/montserrat/variable-italic.css"
import "@fontsource/montserrat/variable.css"
import React, { useRef, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import AboutMeCard from "../components/index/AboutMeCard"
import ContactMeCard from "../components/index/ContactMeCard"
import LandingCard from "../components/index/LandingCard"
import NavTabs from "../components/index/sub-components/NavTabs"
import TrackmeetCard from "../components/index/TrackmeetCard"
import Nav from "../components/Nav"
import GlobalStyles from "../styles/GlobalStyles.styled"
import { AbsoluteContainer } from "../styles/SharedStyles.styled"

export type CurCardType = {
  landing: boolean
  works: boolean
  aboutMe: boolean
  contactMe: boolean
}

const IndexPage = () => {
  const landingRef = useRef<HTMLElement>(null)
  const trackmeetRef = useRef<HTMLElement>(null)
  const aboutMeRef = useRef<HTMLElement>(null)
  const contactMeRef = useRef<HTMLElement>(null)
  const [curCard, setCurCard] = useState<CurCardType>({
    landing: false,
    works: false,
    aboutMe: false,
    contactMe: false,
  })
  const defaultCurCard = {
    landing: false,
    works: false,
    aboutMe: false,
    contactMe: false,
  }

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          let { target } = entry

          switch (target) {
            case landingRef.current:
              setCurCard({ ...defaultCurCard, landing: true })
              break
            case trackmeetRef.current:
              setCurCard({ ...defaultCurCard, works: true })
              break
            case aboutMeRef.current:
              setCurCard({ ...defaultCurCard, aboutMe: true })
              break
            case contactMeRef.current:
              setCurCard({ ...defaultCurCard, contactMe: true })
              break
          }
        })
      },
      {
        threshold: 1,
      }
    )

    if (landingRef.current) observer.observe(landingRef.current)
    if (trackmeetRef.current) observer.observe(trackmeetRef.current)
    if (aboutMeRef.current) observer.observe(aboutMeRef.current)
    if (contactMeRef.current) observer.observe(contactMeRef.current)
  }, [])

  return (
    <>
      <Helmet title='Gabriel Cobos | Software Engineer' />
      <GlobalStyles />
      <NavTabs curCard={curCard} />
      <MainContainer>
        <AbsoluteContainer>
          <Nav />
        </AbsoluteContainer>
        <LandingCard ref={landingRef} />
        <TrackmeetCard ref={trackmeetRef} />
        <AboutMeCard ref={aboutMeRef} />
        <ContactMeCard ref={contactMeRef} />
      </MainContainer>
    </>
  )
}

export default IndexPage

const MainContainer = styled.div`
  height: 100vh;
  background: linear-gradient(#0919a0, #030620);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  color: white;

  & > section {
    height: 100vh;
    scroll-snap-align: start;
  }
`
