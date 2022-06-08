import React from "react";
import PdfResume from "../../docs/PDFResume.pdf";
import Resume from "../../images/Resume.svg";
import {
  IntroSection,
  ResumeSvg,
  StyledDownload,
} from "../../styles/about/Content.styled";
import { StyledButton } from "../../styles/SharedStyles.styled";

export default function Content() {
  return (
    <>
      <IntroSection>
        <h3>Passionate, Dynamic, Focused</h3>
        <p>
          I thrive in high performance environments. Currently working as a web
          developer, I seek learning opportunities to better myself and the
          project. I strive to innovate, and with balance, develop the best damn
          product I can.
        </p>
      </IntroSection>
      <ResumeSvg src={Resume} alt="Resume"></ResumeSvg>
      <StyledDownload>
        <a href={PdfResume} download>
          <StyledButton>Export PDF</StyledButton>
        </a>
      </StyledDownload>
    </>
  );
}
