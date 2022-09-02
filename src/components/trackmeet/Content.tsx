import React from "react"
import TrackmeetOnMac from "../../images/TrackmeetOnMac.svg"
import TrackmeetShowcase from "../../images/TrackmeetShowcase.svg"
import {
  CollageImg,
  ContributionSection,
  IntroSection,
  MacImg,
  SummarySection,
} from "../../styles/trackmeet/Content.styled"

export default function Content() {
  return (
    <div>
      <IntroSection>
        <div>
          <h3>Role</h3>
          <p>Software Engineer / Test Automation</p>
        </div>
        <div>
          <h3>Date</h3>
          <p>June 2021 - Present</p>
        </div>
        <div>
          <h3>Overview</h3>
          <p>
            React/TS front end with Java/Spring back end, and
            Unit/Integration/E2E testing.
          </p>
        </div>
      </IntroSection>
      <MacImg src={TrackmeetOnMac} alt='Trackmeet on Mac Desktop'></MacImg>
      <ContributionSection>
        <h3>Contributions</h3>
        <p>
          - Built reusable components with React & Typescript
          <br />
          - Wrote automated tests garnering +90% test coverage
          <br />- Lead training for 7 developers, created onboarding
          documentation with tech specific coding challenges for React, Jest,
          Bootstrap, and Styled-Components
        </p>
      </ContributionSection>
      <CollageImg src={TrackmeetShowcase} alt='Trackmeet Showcase'></CollageImg>
      <SummarySection>
        <h3>Summary</h3>
        <p>
          Championed best practices overhauled application file structure,
          <br />
          refactored site wide CSS, and wrote 100+ accessibility conscious tests
        </p>
      </SummarySection>
    </div>
  )
}
