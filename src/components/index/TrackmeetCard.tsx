import { Link } from "gatsby"
import React, { ForwardedRef, forwardRef } from "react"
import TrackmeetHero from "../../images/Trackmeet.svg"
import TrackmeetLogoImg from "../../images/TrackmeetLogo.svg"
import {
  AbsoluteCenter,
  AbsoluteContainer,
  PageImg,
  Section,
  StyledButton,
} from "../../styles/SharedStyles.styled"
import { TrackmeetLogo } from "../../styles/index/TrackmeetCard.styled"
import ImageFooter from "./sub-components/ImageFooter"

const TrackmeetCard = forwardRef((props, ref: ForwardedRef<HTMLElement>) => (
  <Section ref={ref} id='trackmeet'>
    <AbsoluteContainer>
      <PageImg src={TrackmeetHero} alt='Trackmeet Image' />
      <ImageFooter
        heading='Team Cylon'
        sub-heading='Modernizing The Military'
        page-num='01'
      />
    </AbsoluteContainer>
    <AbsoluteCenter>
      <TrackmeetLogo id='works' src={TrackmeetLogoImg} alt='Trackmeet Logo' />
      <div>
        <Link to='/trackmeet'>
          <StyledButton>See More</StyledButton>
        </Link>
      </div>
    </AbsoluteCenter>
  </Section>
))

export default TrackmeetCard
