import { Link } from "gatsby"
import React, { ForwardedRef, forwardRef } from "react"
import LaPalms from "../../images/LaPalms.svg"
import {
  AbsoluteCenter,
  AbsoluteContainer,
  PageImg,
  PageLabel,
  Section,
  StyledButton,
} from "../../styles/SharedStyles.styled"
import ImageFooter from "./sub-components/ImageFooter"

const AboutMeCard = forwardRef((props, ref: ForwardedRef<HTMLElement>) => (
  <Section ref={ref} id='about-me'>
    <AbsoluteContainer>
      <PageImg src={LaPalms} alt='About Me Image' />
      <ImageFooter
        heading='About Me'
        sub-heading='The Man, The Myth, The Legend'
        page-num='02'
      />
    </AbsoluteContainer>
    <AbsoluteCenter>
      <PageLabel id='about'>SOFTWARE ENGINEER</PageLabel>
      <div>
        <Link to='/about'>
          <StyledButton>See More</StyledButton>
        </Link>
      </div>
    </AbsoluteCenter>
  </Section>
))

export default AboutMeCard
