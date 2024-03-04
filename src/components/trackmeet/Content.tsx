import React from "react"
import TrackmeetOnMac from "../../images/TrackmeetOnMac.svg"
import TrackmeetShowcase from "../../images/TrackmeetShowcase.svg"
import {
  CollageImg,
  InfoSection,
  IntroSection,
  MacImg,
} from "../../styles/trackmeet/Content.styled"

export default function Content() {
  return (
    <div>
      <IntroSection>
        <div>
          <h3>Role</h3>
          <p>Fullstack Software Engineer</p>
        </div>
        <div>
          <h3>Date</h3>
          <p>
            June 2021 - March 2023
            <br />
            (1 yr. 9 mos.)
          </p>
        </div>
        <div>
          <h3>Overview</h3>
          <p>
            Startup team of 4 developers; launched a job placement application
            connecting military members to opportunities
          </p>
        </div>
      </IntroSection>
      <MacImg src={TrackmeetOnMac} alt='Trackmeet on Mac Desktop'></MacImg>
      <InfoSection>
        <h3>Contributions</h3>
        <p>
          - Built several product features from start-to-end servicing all pages
          of the application
          <br />
          - Wrote 100+ accessibility conscious tests maintaining +90% test
          coverage
          <br />- Championed best practices by overhauling application file
          structure, improving code continuity, and refactored site wide CSS
          styling
        </p>
      </InfoSection>
      <CollageImg src={TrackmeetShowcase} alt='Trackmeet Showcase'></CollageImg>
      <InfoSection>
        <h3>Summary</h3>
        <p>
          - React/TypeScript front end
          <br />- Java/Spring back end
          <br />- Jest & Cypress (Unit/Integration/E2E testing)
        </p>
      </InfoSection>
    </div>
  )
}
